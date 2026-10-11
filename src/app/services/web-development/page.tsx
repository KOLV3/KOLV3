import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Website & Web Application Development | KOLVE",
  description:
    "Custom, fast, accessible website and web application development built with Next.js, React, and TypeScript by KOLVE.",
};

const problemsSolved = [
  "Slow, bloated websites built on outdated page builders that drive visitors away.",
  "Generic AI-generated templates that look identical to competitors and fail to establish trust.",
  "Websites that break on mobile viewports or perform poorly on slower cellular networks in Nepal and abroad.",
  "Lack of technical ownership where agencies lock clients into proprietary hosting platforms.",
];

const deliverables = [
  {
    title: "Responsive Frontends",
    desc: "Engineered with Next.js, React 19, and Tailwind CSS. Verified on mobile (375px), tablet (768px), and widescreen desktop (1440px+).",
  },
  {
    title: "Clean Backend Integrations",
    desc: "Robust API routes, contact form validation, security headers, rate limiting, and zero client-side secret exposure.",
  },
  {
    title: "Light & Dark Themes",
    desc: "Seamless, accessible theme switching with zero flash of unstyled content and WCAG AA contrast compliance.",
  },
  {
    title: "Performance & SEO Setup",
    desc: "Semantic HTML5, Open Graph social cards, meta tags, robots.txt, dynamic sitemap, and asset compression.",
  },
  {
    title: "Full Code Handoff",
    desc: "Clean Git repository with complete documentation, deployment instructions, and no vendor lock-in.",
  },
];

const clientChecklist = [
  "Project goals and primary action desired from visitors (inquiries, signups, sales).",
  "Target audience breakdown (local vs. international, device distribution).",
  "Brand assets: Logo files (vector SVG or high-res PNG), existing colors or brand guidelines.",
  "Core copy draft or rough bullet points for pages (About, Services, Contact details).",
  "Any reference websites or interface examples you find effective.",
];

const processSteps = [
  {
    step: "01",
    title: "Scoping & Requirements Brief",
    desc: "We define page structure, user journeys, required integrations, and milestone timelines.",
  },
  {
    step: "02",
    title: "Architecture & Wireframing",
    desc: "We establish the component hierarchy, design tokens, typography, and page blueprints before writing final code.",
  },
  {
    step: "03",
    title: "Implementation & Staging",
    desc: "We build the website on private staging URLs where you can inspect progress and test interactive components.",
  },
  {
    step: "04",
    title: "Testing & Security Audit",
    desc: "Cross-browser testing, responsive layout checks, Lighthouse accessibility/SEO audit, and form verification.",
  },
  {
    step: "05",
    title: "Domain Setup & Deployment",
    desc: "Connecting your custom domain, SSL certificate verification, and final production handoff.",
  },
];

const faqs = [
  {
    q: "Do you use WordPress or generic site builders?",
    a: "No. We build custom websites with Next.js, TypeScript, and modern web frameworks. This provides dramatically faster load speeds, better security, complete code ownership, and zero monthly plugin maintenance fees.",
  },
  {
    q: "How do you handle pricing for web projects?",
    a: "We quote based on clear scope: number of distinct page layouts, dynamic features, API integrations, and asset preparation. We provide fixed milestone-based quotes so there are no surprise fees.",
  },
  {
    q: "Can I update the content myself after launch?",
    a: "Yes. For content-focused sites, we structure articles and portfolio items in organized markdown/JSON files that are straightforward to edit, or we can connect a lightweight headless CMS if required.",
  },
  {
    q: "Who owns the code and domain?",
    a: "You do. 100%. We configure everything on your domain and deployment accounts or transfer complete Git repositories upon milestone completion.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-bg py-16 sm:py-24 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <Link
                href="/services"
                className="text-xs font-medium text-text-muted hover:text-text"
              >
                Services
              </Link>
              <span className="text-xs text-text-muted">/</span>
              <Badge variant="accent">Web Development</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">
              Website & Web Application Development
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We engineer fast, accessible, and resilient web solutions built for genuine utility.
              From professional landing pages to complete custom web platforms, we build with
              TypeScript and modern web standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Web Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problems It Solves */}
      <Section background="surface">
        <Container size="default">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Problems this service solves
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Too many websites are slow, generic, or impossible to maintain. Here is what we fix:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {problemsSolved.map((problem, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-md border border-border bg-bg p-5"
              >
                <ShieldAlert className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Deliver */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Deliverables</Badge>
            <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
              What we build and hand over
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Every deliverable is tested against real-world criteria before signoff.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {deliverables.map((item, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-text">{item.title}</h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Methodology */}
      <Section background="surface-alt">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="default">Pricing & Scope</Badge>
            <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
              Transparent, milestone-based pricing
            </h2>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              We do not use arbitrary pricing packages that force you into features you do not need.
              Every project receives a detailed scope document with fixed milestone pricing:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-surface p-6">
                <h3 className="text-base font-bold text-text">Standard Web Engagements</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Best for company homepages, service portfolios, and direct marketing sites.
                  Includes responsive design, theme toggle, contact forms, SEO setup, and domain
                  connection.
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-xs font-semibold text-text">Turnaround:</span>
                  <span className="text-xs text-text-muted ml-2">Typically 1 to 3 weeks</span>
                </div>
              </div>

              <div className="rounded-md border border-border bg-surface p-6">
                <h3 className="text-base font-bold text-text">Custom Web Applications</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Best for interactive portals, custom calculations, dashboard layouts, and complex
                  workflow automation requiring custom frontend state and backend logic.
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-xs font-semibold text-text">Turnaround:</span>
                  <span className="text-xs text-text-muted ml-2">Milestone scoped per brief</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Materials Client Must Provide */}
      <Section background="default">
        <Container size="default">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="accent">Preparation</Badge>
              <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
                What you need to provide
              </h2>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Having these items ready ensures we can kick off without friction. If you lack
                certain assets, our design team can help prepare them.
              </p>

              <ul className="mt-6 space-y-3">
                {clientChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="rounded-md border border-border bg-surface p-8">
              <h3 className="text-lg font-bold text-text">Our 5-Step Web Process</h3>
              <div className="mt-6 space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-accent text-on-accent text-xs font-mono font-bold">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-text">{step.title}</h4>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="surface">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="default">Common Questions</Badge>
            <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-md border border-border bg-bg p-6">
                <h3 className="text-sm font-bold text-text flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="border-t border-border bg-surface-alt py-16 transition-colors">
        <Container size="default">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Ready to build your web project?
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Discuss your requirements directly with our technical team in Sunsari, Nepal.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request a Web Development Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
