import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `
You are the official digital assistant for KOLVE, an authentic Digital Service Provider (DSP) based in Sunsari, Nepal.
Core philosophy: "Real problems. Practical solutions. Built with purpose."
Tagline: "Your problem, our solution."

Company details:
- Co-founders: Ushant Giri (Technical Direction, Backend & Systems), Sandesh Sunar (R&D, AI Integrations & Deployment), Bhishan Katwal (Engineering & Digital Solutions), Jeshis Jamarkatel (Frontend Engineering & UI/UX Design).
- Location: Sunsari, Nepal.
- Contact email: kolvedsp@gmail.com
- Contact page: /contact

Available services right now:
1. Website & Web Application Development (/services/web-development)
   - Built with Next.js, React, TypeScript, and modern frameworks.
   - Fast, accessible (WCAG AA), responsive, with zero lock-in and full source code handoff.
2. UI/UX Design & Prototyping (/services/ui-ux-design)
   - Built in Figma with auto-layout, complete design tokens (light and dark mode), and developer-ready specs.
3. Graphic Design & Visual Identity (/services/graphic-design)
   - Vector logos, brand marks, digital banners, marketing visual assets, and typography guidelines.

Services in the pipeline (Coming Soon):
- Video Editing & Post-Production (/services/video-editing)
- 3D Architectural & Product Visualization (/services/3d-visualization)

Rules for your responses:
- Be professional, polite, concise, and helpful.
- Keep answers grounded in real facts about KOLVE.
- NEVER invent fake client reviews, fake case studies, fake awards, or fixed dollar pricing.
- For specific quotations or detailed scoping, politely direct the user to the Contact page (/contact) or to email kolvedsp@gmail.com.
- Avoid buzzwords, purple hype, or excessive emojis.
`;

// Security response headers applied to all responses
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Cache-Control": "no-store, max-age=0",
  "Pragma": "no-cache",
};

// Rate limit store: IP -> timestamps with memory eviction
const chatRateLimitMap = new Map<string, number[]>();
const CHAT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CHAT_REQUESTS = 25; // max 25 messages per 10 mins

function isChatRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodic eviction of stale keys
  if (chatRateLimitMap.size > 1000) {
    for (const [key, timestamps] of chatRateLimitMap.entries()) {
      const active = timestamps.filter((t) => now - t < CHAT_WINDOW_MS);
      if (active.length === 0) {
        chatRateLimitMap.delete(key);
      } else {
        chatRateLimitMap.set(key, active);
      }
    }
  }

  const timestamps = chatRateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < CHAT_WINDOW_MS);

  if (recent.length >= MAX_CHAT_REQUESTS) {
    return true;
  }

  recent.push(now);
  chatRateLimitMap.set(ip, recent);
  return false;
}

// Allowed origins for CORS verification
const allowedOrigins = [
  "https://kolve.com",
  "https://www.kolve.com",
  "https://kolv3.github.io",
  "http://localhost:3000",
  "http://localhost:3008",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3008",
];

function isOriginAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return allowedOrigins.some((allowed) => origin === allowed || origin.startsWith(allowed));
}

// Clean chat message string: strip control chars, scripts, and limit length
function sanitizeChatText(str: string, maxLength = 500): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/\0/g, "")
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: Request) {
  // 1. CORS Origin Verification
  if (!isOriginAllowed(request)) {
    return NextResponse.json(
      { error: "Forbidden origin." },
      { status: 403, headers: securityHeaders }
    );
  }

  try {
    // 2. Content-Type verification
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json." },
        { status: 415, headers: securityHeaders }
      );
    }

    // 3. Client IP and Rate Limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isChatRateLimited(ip)) {
      return NextResponse.json(
        {
          reply:
            "You have sent several messages recently. To continue discussing your project in detail, please email our co-founders at kolvedsp@gmail.com or visit /contact.",
        },
        { status: 429, headers: securityHeaders }
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid message payload." },
        { status: 400, headers: securityHeaders }
      );
    }

    // Bound messages array length to max 10
    const boundedMessages = messages.slice(-10);

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if user hasn't set GEMINI_API_KEY in .env.local yet
    if (!apiKey) {
      const lastUserMsg = sanitizeChatText(
        String(boundedMessages[boundedMessages.length - 1]?.content || "")
      ).toLowerCase();

      let fallbackReply =
        "Welcome to KOLVE! We are a Digital Service Provider based in Sunsari, Nepal, founded by Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel. We offer Website & Web App Development, UI/UX Design, and Graphic Design. For custom inquiries, please email kolvedsp@gmail.com or visit /contact.";

      if (lastUserMsg.includes("service") || lastUserMsg.includes("web") || lastUserMsg.includes("design")) {
        fallbackReply =
          "We offer three active services: 1) Website & Web App Development (/services/web-development), 2) UI/UX Design & Prototyping (/services/ui-ux-design), and 3) Graphic Design & Visual Identity (/services/graphic-design). Video Editing and 3D Visualization are coming soon.";
      } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("email") || lastUserMsg.includes("hire") || lastUserMsg.includes("quote")) {
        fallbackReply =
          "You can reach our team directly at kolvedsp@gmail.com or by filling out our project inquiry form at /contact. We review all submissions within 24 hours.";
      } else if (lastUserMsg.includes("team") || lastUserMsg.includes("founder") || lastUserMsg.includes("who")) {
        fallbackReply =
          "KOLVE was co-founded by Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel in Sunsari, Nepal. We combine software engineering, interface design, and digital problem solving.";
      }

      return NextResponse.json(
        {
          reply: fallbackReply,
          isFallback: true,
        },
        { status: 200, headers: securityHeaders }
      );
    }

    // Format sanitized conversation history for Gemini API
    const contents = [
      {
        role: "user",
        parts: [{ text: `[System Context]\n${SYSTEM_INSTRUCTION}` }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I am ready to guide visitors about KOLVE accurately." }],
      },
      ...boundedMessages.map((m: { role?: string; content?: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: sanitizeChatText(String(m.content || ""), 500) }],
      })),
    ];

    // Call Google Gemini REST API endpoint using server-side key
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!response.ok) {
      // Log sanitized notice without leaking keys or raw stack traces
      console.error("[Gemini API Error] Upstream service returned non-200 status:", response.status);
      return NextResponse.json(
        {
          reply:
            "I am currently having trouble reaching the AI service. Please reach out to our team directly at kolvedsp@gmail.com or via /contact.",
        },
        { status: 502, headers: securityHeaders }
      );
    }

    const data = await response.json();
    const candidateText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Thank you for contacting KOLVE. How can we help you solve your digital challenges?";

    return NextResponse.json({ reply: candidateText }, { status: 200, headers: securityHeaders });
  } catch (error) {
    console.error("[Chat Route Error]", error instanceof Error ? error.message : "Internal error");
    return NextResponse.json(
      {
        reply:
          "An error occurred while processing your message. Feel free to contact our team at kolvedsp@gmail.com.",
      },
      { status: 500, headers: securityHeaders }
    );
  }
}


