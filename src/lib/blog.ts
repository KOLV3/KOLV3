export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string; // ISO date format
  readTime: string;
  category: string;
  tags: string[];
  content: {
    heading: string;
    paragraphs: string[];
    subsections?: {
      title: string;
      body: string[];
    }[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-build-with-nextjs-and-typescript",
    title: "Why We Build with Next.js and TypeScript Instead of Bloated Page Builders",
    excerpt:
      "A technical breakdown of why KOLVE prioritizes clean code, static prerendering, and strict type safety over heavyweight CMS platforms.",
    author: {
      name: "Ushant Giri",
      role: "Co-Founder",
    },
    publishedAt: "2026-10-10",
    readTime: "5 min read",
    category: "Engineering",
    tags: ["Next.js", "TypeScript", "Performance", "Web Development"],
    content: [
      {
        heading: "The Problem with Generic Site Builders",
        paragraphs: [
          "For years, standard agencies have defaulted to heavy CMS platforms and visual page builders. While these tools allow rapid assembly of generic layouts, they frequently introduce severe performance bottlenecks, bloated DOM trees, dozens of conflicting third-party plugins, and recurring maintenance overhead.",
          "When a website loads three megabytes of uncompressed JavaScript and dozen unoptimized tracking scripts before displaying primary content, prospective clients on cellular connections in Nepal and developing markets experience unacceptable delays.",
        ],
      },
      {
        heading: "The Technical Advantages of Next.js and TypeScript",
        paragraphs: [
          "At KOLVE, we engineer websites using modern static and server-rendered frameworks. Next.js combined with TypeScript provides several immediate advantages:",
        ],
        subsections: [
          {
            title: "Sub-Second Load Times via Prerendering",
            body: [
              "By generating HTML pages ahead of time, browsers receive pure, optimized markup immediately upon DNS resolution. Pages render without waiting for heavy client-side initialization cycles.",
            ],
          },
          {
            title: "End-to-End Type Safety",
            body: [
              "TypeScript eliminates an entire class of runtime regressions. Every prop, data model, and API payload is validated at build time, preventing broken links or missing state bugs in production.",
            ],
          },
          {
            title: "Zero Vendor Lock-In",
            body: [
              "Clients receive clean, well-documented source code that can be deployed to any modern cloud provider or static edge network at practically zero monthly cost.",
            ],
          },
        ],
      },
      {
        heading: "Summary for Business Owners",
        paragraphs: [
          "Choosing clean, purpose-built engineering means your website stays fast, remains secure against plugin vulnerabilities, and operates reliably without requiring expensive monthly maintenance contracts.",
        ],
      },
    ],
  },
  {
    slug: "designing-accessible-color-tokens-for-light-and-dark-themes",
    title: "Designing Accessible Color Tokens for Cohesive Light and Dark Themes",
    excerpt:
      "How we built KOLVE's warm cream and deep forest green color system using the 60-30-10 rule and WCAG AA contrast standards.",
    author: {
      name: "Sandesh Sunar",
      role: "Co-Founder",
    },
    publishedAt: "2026-10-08",
    readTime: "6 min read",
    category: "UI/UX Design",
    tags: ["UI/UX", "Design Tokens", "Accessibility", "Color Theory"],
    content: [
      {
        heading: "Moving Beyond Inverted Dark Themes",
        paragraphs: [
          "Many digital products treat dark mode as an afterthought by simply inverting their light color palette or swapping pure white backgrounds for pitch black. This often results in extreme optical vibration, jarring neon accents, and poor text legibility.",
          "To establish a mature, trustworthy identity for KOLVE, we engineered a coordinated two-theme system guided by the 60-30-10 visual balance principle.",
        ],
      },
      {
        heading: "Structuring the Color Hierarchy",
        paragraphs: [
          "Rather than applying arbitrary hex colors across individual components, we organized our design system around semantic CSS variables:",
        ],
        subsections: [
          {
            title: "Light Theme: Warm Off-White Foundation",
            body: [
              "We chose #FDFCF3 as the 60% background, supported by warm cream surfaces (#FFFAF0) and deep forest green accents (#245C45). This creates an approachable, editorial aesthetic that feels distinct from cold tech templates.",
            ],
          },
          {
            title: "Dark Theme: Charcoal and Sage Green",
            body: [
              "In dark mode, the background transitions to deep charcoal (#151714) while the accent softens to a natural sage green (#B7D7A8). This ensures interactive buttons and active states remain immediately noticeable without blinding the user.",
            ],
          },
        ],
      },
      {
        heading: "Contrast Verification and Zero FOUC",
        paragraphs: [
          "Every text and surface pairing was tested against WCAG AA standards to guarantee a minimum contrast ratio of 4.5:1 for body copy. To eliminate the jarring Flash of Unstyled Content on initial page load, we injected a tiny pre-hydration script into the HTML head that resolves user preferences before React mounts.",
        ],
      },
    ],
  },
  {
    slug: "the-digital-service-provider-approach-to-practical-problem-solving",
    title: "The Digital Service Provider Approach: Solving Real Business Problems",
    excerpt:
      "Why digital agencies must shift from selling pre-packaged deliverables to diagnosing and solving concrete operational bottlenecks.",
    author: {
      name: "Bhishan Katwal",
      role: "Co-Founder",
    },
    publishedAt: "2026-10-05",
    readTime: "4 min read",
    category: "Philosophy",
    tags: ["Philosophy", "Strategy", "Digital Solutions"],
    content: [
      {
        heading: "Real Problems Come First",
        paragraphs: [
          "Too often in the digital services sector, agencies start with a tool or a pre-defined package and attempt to force the client's situation into that template. A local business asking for an operational fix is often sold an expensive, bloated website that fails to address their real bottlenecks.",
          "KOLVE was established on a different premise: Real problems. Practical solutions. Built with purpose.",
        ],
      },
      {
        heading: "Diagnostic Scoping",
        paragraphs: [
          "Before writing a line of code or drafting wireframes, we analyze the operational objective. Does the business need customer inquiries, internal workflow automation, a clear portfolio showcase, or a lightweight inventory interface?",
          "By diagnosing the underlying constraint first, we build solutions that deliver concrete utility while avoiding features that add cost without value.",
        ],
      },
    ],
  },
];
