import { NextResponse } from "next/server";

// In-memory rate limiting store (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries sent from this IP. Please wait a few minutes or email us directly." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, service, description, budget, timeline, honeypot } = body;

    // 1. Anti-spam honeypot check
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { error: "Please select a service or choose 'Not sure yet'." },
        { status: 422 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief project description (at least 10 characters)." },
        { status: 422 }
      );
    }

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanService = sanitize(service);
    const cleanDesc = sanitize(description);
    const cleanBudget = budget ? sanitize(String(budget)) : "N/A";
    const cleanTimeline = timeline ? sanitize(String(timeline)) : "N/A";

    // 3. Process inquiry
    const recipientEmail = "kolvedsp@gmail.com";
    
    // Log inquiry server-side for verification
    console.info(
      `[KOLVE Contact Inquiry] To: ${recipientEmail} | From: ${cleanName} <${cleanEmail}> | Service: ${cleanService} | Budget: ${cleanBudget} | Timeline: ${cleanTimeline}`
    );

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Our team will review and reply within 24 hours.",
      recipient: recipientEmail,
      summary: {
        service: cleanService,
        descriptionLength: cleanDesc.length,
      },
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500 }
    );
  }
}
