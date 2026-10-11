export type ProjectType =
  | "Client Project"
  | "Internal Engineering Pilot"
  | "Concept Demonstration";

export interface ProjectItem {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  summary: string;
  objective: string;
  approach: string;
  solution: string;
  tools: string[];
  challenges: string;
  verifiedResults: string;
  relatedServices: {
    title: string;
    href: string;
  }[];
}

export const projectItems: ProjectItem[] = [
  {
    slug: "kolve-design-system",
    title: "KOLVE Design System & Multi-Theme Architecture",
    type: "Internal Engineering Pilot",
    category: "UI/UX Systems",
    summary:
      "A restrained, accessible design system engineered with the 60-30-10 color balance rule, pre-hydration theme resolution, and strict WCAG AA contrast pairing.",
    objective:
      "Eliminate typical startup design cliches (purple gradients, glow effects, pill-shaped buttons) while providing seamless, flash-free light and dark theme switching.",
    approach:
      "Designed semantic CSS tokens registered with Tailwind CSS v4's @theme inline directive. Created an inline pre-hydration script in the HTML head to read stored user preferences and apply the .dark class before React hydrates.",
    solution:
      "A complete component hierarchy (Button, Container, Section, Card, Badge, ThemeToggle) operating on warm cream surfaces (#FDFCF3 / #FFFAF0) and deep forest green (#245C45) in light mode, smoothly transitioning to charcoal (#151714) and soft sage green (#B7D7A8) in dark mode.",
    tools: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Lucide React", "CSS Variables"],
    challenges:
      "Ensuring color contrast met strict 4.5:1 standards on both light cream and dark charcoal surfaces without altering the recognizable brand identity.",
    verifiedResults:
      "Zero layout shift, zero Flash of Unstyled Content (FOUC), and 100% clean Next.js static prerendering across all routes.",
    relatedServices: [
      {
        title: "UI/UX Design & Prototyping",
        href: "/services/ui-ux-design",
      },
      {
        title: "Website & Web Application Development",
        href: "/services/web-development",
      },
    ],
  },
  {
    slug: "secure-inquiry-pipeline",
    title: "Zero-Exposure Form Verification & AI Guidance Pipeline",
    type: "Internal Engineering Pilot",
    category: "Web Security & Custom Solutions",
    summary:
      "A server-side inquiry routing and guided AI chat assistant built with honeypot spam protection, strict input sanitization, and zero client-side secret exposure.",
    objective:
      "Provide website visitors with instant, accurate answers about KOLVE services while safeguarding API keys and preventing automated bot submissions.",
    approach:
      "Separated client widgets from data processing. The contact form and chat interface communicate strictly through authenticated server-side Next.js route handlers.",
    solution:
      "Built /api/contact with honeypot traps and structured logging, paired with /api/chat which proxies queries to Google's Gemini API with a system prompt containing verified company knowledge and an offline fallback.",
    tools: ["Next.js API Routes", "Google Gemini REST API", "TypeScript", "Node.js"],
    challenges:
      "Preventing bot abuse while ensuring legitimate client inquiries never get blocked or delayed.",
    verifiedResults:
      "Zero exposed API keys in browser network inspection, verified server-side rate limits, and sub-second inquiry validation.",
    relatedServices: [
      {
        title: "Website & Web Application Development",
        href: "/services/web-development",
      },
      {
        title: "Custom Digital Solutions",
        href: "/services/web-development",
      },
    ],
  },
];
