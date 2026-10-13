import { NextResponse } from "next/server";

// Security headers applied to all responses
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Cache-Control": "no-store, max-age=0",
  "Pragma": "no-cache",
};

// In-memory rate limiting store with periodic eviction
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodic cleanup of stale IPs to prevent memory leaks
  if (rateLimitMap.size > 1000) {
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

// Strict sanitizer: strips HTML tags, script protocols, control characters, and caps length
function sanitize(str: string, maxLength = 1000): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/\0/g, "") // remove null bytes
    .replace(/[<>]/g, "") // strip HTML angle brackets
    .replace(/javascript:/gi, "") // strip javascript: protocol
    .replace(/on\w+=/gi, "") // strip inline event handlers
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // strip non-printable control characters
    .trim()
    .slice(0, maxLength);
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
  if (!origin) return true; // Direct/same-site browser submissions may omit origin
  return allowedOrigins.some((allowed) => origin === allowed || origin.startsWith(allowed));
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

    // 3. Client IP extraction and Rate Limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries sent from this IP. Please wait a few minutes or email us directly." },
        { status: 429, headers: securityHeaders }
      );
    }

    const body = await request.json();
    const { name, email, service, description, budget, timeline, honeypot } = body;

    // 4. Anti-spam honeypot check
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400, headers: securityHeaders }
      );
    }

    // 5. Strict Input Validation & Length Bounding
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid name (between 2 and 100 characters)." },
        { status: 422, headers: securityHeaders }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const cleanEmailCandidate = String(email || "").trim();
    if (!email || typeof email !== "string" || cleanEmailCandidate.length > 120 || !emailRegex.test(cleanEmailCandidate)) {
      return NextResponse.json(
        { error: "Please provide a valid email address (maximum 120 characters)." },
        { status: 422, headers: securityHeaders }
      );
    }

    if (!service || typeof service !== "string" || service.trim().length > 100) {
      return NextResponse.json(
        { error: "Please select a valid service area." },
        { status: 422, headers: securityHeaders }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 10 || description.trim().length > 3000) {
      return NextResponse.json(
        { error: "Please provide a brief project description (between 10 and 3000 characters)." },
        { status: 422, headers: securityHeaders }
      );
    }

    const cleanName = sanitize(name, 100);
    const cleanEmail = sanitize(email, 120);
    const cleanService = sanitize(service, 100);
    const cleanDesc = sanitize(description, 3000);
    const cleanBudget = budget ? sanitize(String(budget), 100) : "N/A";
    const cleanTimeline = timeline ? sanitize(String(timeline), 100) : "N/A";

    // 6. Process inquiry safely
    const recipientEmail = "kolvedsp@gmail.com";
    
    // Log server-side record for verification without leaking sensitive secrets
    console.info(
      `[KOLVE Contact Inquiry] To: ${recipientEmail} | From: ${cleanName} <${cleanEmail}> | Service: ${cleanService} | Budget: ${cleanBudget} | Timeline: ${cleanTimeline}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our team will review and reply within 24 hours.",
        recipient: recipientEmail,
        summary: {
          service: cleanService,
          descriptionLength: cleanDesc.length,
        },
      },
      { status: 200, headers: securityHeaders }
    );
  } catch (error) {
    // Mask raw exceptions to prevent stack trace leaks
    console.error("[Contact API Error]", error instanceof Error ? error.message : "Internal error");
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500, headers: securityHeaders }
    );
  }
}


