import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `
You are the official digital assistant for KOLVE, an authentic Digital Service Provider (DSP) based in Sunsari, Nepal.
Core philosophy: "Real problems. Practical solutions. Built with purpose."
Tagline: "Your problem, our solution."

Company details:
- Co-founders: Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel.
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

// Rate limit store: IP -> timestamps
const chatRateLimitMap = new Map<string, number[]>();
const CHAT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CHAT_REQUESTS = 25; // max 25 messages per 10 mins

function isChatRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = chatRateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < CHAT_WINDOW_MS);

  if (recent.length >= MAX_CHAT_REQUESTS) {
    return true;
  }

  recent.push(now);
  chatRateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
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
        { status: 429 }
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid message payload." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if user hasn't set GEMINI_API_KEY in .env.local yet
    if (!apiKey) {
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";

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

      return NextResponse.json({
        reply: fallbackReply,
        isFallback: true,
      });
    }

    // Format conversation history for Gemini API
    const contents = [
      {
        role: "user",
        parts: [{ text: `[System Context]\n${SYSTEM_INSTRUCTION}` }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I am ready to guide visitors about KOLVE accurately." }],
      },
      ...messages.slice(-8).map((m: { role?: string; content?: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content || "").slice(0, 1000) }],
      })),
    ];

    // Call Google Gemini REST API endpoint using the verified active model
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
      const errText = await response.text();
      console.error("[Gemini API Error]", errText);
      return NextResponse.json(
        {
          reply:
            "I am currently having trouble reaching the AI service. Please reach out to our team directly at kolvedsp@gmail.com or via /contact.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();
    const candidateText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Thank you for contacting KOLVE. How can we help you solve your digital challenges?";

    return NextResponse.json({ reply: candidateText });
  } catch (error) {
    console.error("[Chat Route Error]", error);
    return NextResponse.json(
      {
        reply:
          "An error occurred while processing your message. Feel free to contact our team at kolvedsp@gmail.com.",
      },
      { status: 500 }
    );
  }
}
