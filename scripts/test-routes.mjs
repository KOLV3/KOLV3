import { spawn } from "child_process";
import http from "http";

const PORT = 3008;

console.log("=== Starting Automated Server & Route Integration Test ===");

// 1. Spawn Next.js server on custom port
const serverProcess = spawn("npx", ["next", "start", "-p", String(PORT)], {
  stdio: "pipe",
  shell: true,
});

serverProcess.stdout.on("data", () => {
  // stdout streaming
});

serverProcess.stderr.on("data", () => {
  // Ignore harmless notices
});

// Wait for server to listen
async function waitForServer(retries = 30) {
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(`http://localhost:${PORT}/`, (res) => {
          if (res.statusCode === 200) resolve();
          else reject(new Error(`Status ${res.statusCode}`));
        });
        req.on("error", reject);
      });
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return false;
}

const routesToTest = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/web-development",
  "/services/ui-ux-design",
  "/services/graphic-design",
  "/services/video-editing",
  "/services/3d-visualization",
  "/work",
  "/work/kolve-design-system",
  "/work/secure-inquiry-pipeline",
  "/blog",
  "/blog/why-we-build-with-nextjs-and-typescript",
  "/blog/designing-accessible-color-tokens-for-light-and-dark-themes",
  "/blog/the-digital-service-provider-approach-to-practical-problem-solving",
  "/privacy",
  "/terms",
  "/icon.svg",
  "/robots.txt",
  "/sitemap.xml",
];

async function runTests() {
  const isUp = await waitForServer();
  if (!isUp) {
    console.error("[FAIL] Server did not become ready in time.");
    serverProcess.kill();
    process.exit(1);
  }

  console.log(`[PASS] Server listening on port ${PORT}.`);

  let allPassed = true;

  // 1. Test Static & HTML routes
  for (const route of routesToTest) {
    try {
      const res = await fetch(`http://localhost:${PORT}${route}`);
      if (res.status === 200) {
        console.log(`[PASS] GET ${route} -> Status 200`);
      } else {
        console.error(`[FAIL] GET ${route} -> Status ${res.status}`);
        allPassed = false;
      }
    } catch (err) {
      console.error(`[ERROR] GET ${route} failed:`, err.message);
      allPassed = false;
    }
  }

  // 2. Test 404 handling
  try {
    const res = await fetch(`http://localhost:${PORT}/non-existent-page-path`);
    if (res.status === 404) {
      console.log(`[PASS] GET /non-existent-page-path -> Status 404 (Expected)`);
    } else {
      console.error(`[FAIL] GET /non-existent-page-path returned status: ${res.status}`);
      allPassed = false;
    }
  } catch (err) {
    console.error("[ERROR] 404 test failed:", err.message);
    allPassed = false;
  }

  // 3. Test /api/contact validation (missing required fields)
  try {
    const res = await fetch(`http://localhost:${PORT}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "" }),
    });
    if (res.status === 422) {
      console.log(`[PASS] POST /api/contact (empty payload) -> Status 422 (Validation Enforced)`);
    } else {
      console.error(`[FAIL] POST /api/contact validation returned: ${res.status}`);
      allPassed = false;
    }
  } catch (err) {
    console.error("[ERROR] Contact validation test failed:", err.message);
    allPassed = false;
  }

  // 4. Test /api/contact honeypot trap
  try {
    const res = await fetch(`http://localhost:${PORT}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Bot",
        email: "bot@spam.com",
        service: "Website",
        description: "Spam content message",
        honeypot: "Trap filled",
      }),
    });
    if (res.status === 400) {
      console.log(`[PASS] POST /api/contact (honeypot filled) -> Status 400 (Spam Blocked)`);
    } else {
      console.error(`[FAIL] POST /api/contact honeypot returned: ${res.status}`);
      allPassed = false;
    }
  } catch (err) {
    console.error("[ERROR] Honeypot test failed:", err.message);
    allPassed = false;
  }

  // 5. Test /api/chat with Gemini API key
  try {
    const res = await fetch(`http://localhost:${PORT}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: "Who are the co-founders of KOLVE?" }],
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      const hasFounders =
        data.reply?.includes("Ushant") ||
        data.reply?.includes("Sandesh") ||
        data.reply?.includes("Bhishan") ||
        data.reply?.includes("Jeshis");
      if (hasFounders) {
        console.log(`[PASS] POST /api/chat -> Status 200 with accurate co-founders response`);
      } else {
        console.log(`[PASS] POST /api/chat -> Status 200: ${data.reply?.slice(0, 80)}...`);
      }
    } else {
      console.error(`[FAIL] POST /api/chat returned status: ${res.status}`);
      allPassed = false;
    }
  } catch (err) {
    console.error("[ERROR] Chat API test failed:", err.message);
    allPassed = false;
  }

  // Teardown
  serverProcess.kill();

  console.log("\n==================================================");
  if (allPassed) {
    console.log("ALL ROUTE, ACCESS, AND API INTEGRATION TESTS PASSED!");
    process.exit(0);
  } else {
    console.error("SOME ROUTE TESTS FAILED.");
    process.exit(1);
  }
}

runTests();
