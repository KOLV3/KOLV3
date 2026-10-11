import fs from "fs";
import path from "path";

const rootDir = path.resolve(".");
const srcDir = path.join(rootDir, "src");

console.log("=== KOLVE Automated Code & Design System Audit ===");

let passed = true;
let totalChecks = 0;

function check(title, condition, detail = "") {
  totalChecks++;
  if (condition) {
    console.log(`[PASS] ${title}`);
  } else {
    console.error(`[FAIL] ${title} ${detail ? " - " + detail : ""}`);
    passed = false;
  }
}

// 1. Scan all src files for forbidden patterns
function scanFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...scanFiles(fullPath));
    } else if (item.isFile() && /\.(tsx|ts|jsx|js|css)$/.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const allSrcFiles = scanFiles(srcDir);

let emDashFound = false;
let purpleFound = false;
let madeWithAiFound = false;
let emojiFound = false;

// Regex for emoji:
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

for (const file of allSrcFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const relPath = path.relative(rootDir, file);

  // Check em dash (—, \u2014)
  if (content.includes("—")) {
    console.error(`Em dash found in: ${relPath}`);
    emDashFound = true;
  }

  // Check purple gradient or purple class
  if (/purple-[0-9]{2,3}|#([89a-fA-F]{2}00[89a-fA-F]{2})|from-purple|to-purple/i.test(content)) {
    console.error(`Purple reference found in: ${relPath}`);
    purpleFound = true;
  }

  // Check Made with AI
  if (/made with (al|ai)/i.test(content)) {
    console.error(`"Made with AI" found in: ${relPath}`);
    madeWithAiFound = true;
  }

  // Check emojis
  if (emojiRegex.test(content)) {
    console.error(`Emoji icon found in: ${relPath}`);
    emojiFound = true;
  }
}

check("No em dashes in website copy", !emDashFound);
check("No purple gradients or purple accent tokens", !purpleFound);
check("No 'Made with AI' branding in code or UI", !madeWithAiFound);
check("No emoji icons in interface components", !emojiFound);

// 2. Check that critical pages exist
const expectedRoutes = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/work/page.tsx",
  "src/app/work/[slug]/page.tsx",
  "src/app/services/page.tsx",
  "src/app/services/web-development/page.tsx",
  "src/app/services/ui-ux-design/page.tsx",
  "src/app/services/graphic-design/page.tsx",
  "src/app/services/video-editing/page.tsx",
  "src/app/services/3d-visualization/page.tsx",
  "src/app/blog/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/not-found.tsx",
  "src/app/icon.svg",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/api/contact/route.ts",
  "src/app/api/chat/route.ts",
];

for (const r of expectedRoutes) {
  check(`Route file exists: ${r}`, fs.existsSync(path.join(rootDir, r)));
}

// 3. Verify security headers in next.config.ts
const nextConfigContent = fs.readFileSync(path.join(rootDir, "next.config.ts"), "utf-8");
check("Security header: X-Content-Type-Options: nosniff", nextConfigContent.includes("nosniff"));
check("Security header: X-Frame-Options: DENY", nextConfigContent.includes("DENY"));
check("Security header: poweredByHeader: false", nextConfigContent.includes("poweredByHeader: false"));

// 4. Verify theme tokens in globals.css (5-tier off-white light system & coordinated dark system)
const globalsCss = fs.readFileSync(path.join(rootDir, "src/app/globals.css"), "utf-8");
check("Design token: #FDFCF3 (Tier 1: Light BG 60%)", globalsCss.includes("#FDFCF3"));
check("Design token: #FFFAF0 (Tier 2: Light Surface 30%)", globalsCss.includes("#FFFAF0"));
check("Design token: #FFF8DC (Tier 3: Light Surface-alt)", globalsCss.includes("#FFF8DC"));
check("Design token: #FFEFDB (Tier 4: Light Surface-muted)", globalsCss.includes("#FFEFDB"));
check("Design token: #FFEBCD (Tier 5: Light Surface-elevated/warm)", globalsCss.includes("#FFEBCD"));
check("Design token: #245C45 (Light Accent 10%)", globalsCss.includes("#245C45"));
check("Design token: #151714 (Dark BG 60%)", globalsCss.includes("#151714"));
check("Design token: #242720 (Dark Surface 30%)", globalsCss.includes("#242720"));
check("Design token: #B7D7A8 (Dark Accent 10%)", globalsCss.includes("#B7D7A8"));

console.log("\n==================================================");
if (passed) {
  console.log(`ALL ${totalChecks} AUDIT CHECKS PASSED WITH ZERO VIOLATIONS.`);
  process.exit(0);
} else {
  console.error("AUDIT FAILED. Review errors above.");
  process.exit(1);
}
