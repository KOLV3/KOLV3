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
  title: "UI/UX Design & Prototyping | KOLVE",
  description:
    "User experience architecture, Figma design systems, and intuitive user interfaces built for software and digital platforms by KOLVE.",
};

const problemsSolved = [
  "Cluttered interfaces where users struggle to complete core actions without confusion.",
  "Inconsistent visual design across pages, resulting in a disjointed product identity.",
  "Developer handoff friction caused by unorganized design files lacking responsive constraints.",
  "Color schemes that fail accessibility standards or feel fatiguing during prolonged usage.",
];

const deliverables = [
  {
    title: "Figma Component Systems",
    desc: "Complete component libraries with variants, auto-layout, and atomic naming conventions matching modern frontend architectures.",
  },
  {
    title: "Light & Dark Mode Tokens",
    desc: "Systematic color tokens, semantic variables, and tested WCAG AA contrast pairings for daytime and nighttime environments.",
  },
  {
    title: "Interactive Prototypes",
    desc: "Clickable flows demonstrating user onboarding, core task completion, micro-interactions, and state transitions.",
  },
  {
    title: "Responsive Viewport Specs",
    desc: "Detailed layouts documented for mobile (iOS/Android), tablet viewports, and multi-column desktop displays.",
  },
  {
    title: "Handoff Documentation",
    desc: "Exhaustive spacing guidelines, typography scales, SVG export assets, and CSS variable maps for engineering teams.",
  },
];

const clientChecklist = [
  "Core problem description: what workflow or task does this interface solve?",
  "User personas or real feedback on existing pain points.",
  "Inventory of necessary features, views, and data inputs.",
  "Branding requirements (color preferences, tone, typography).",
  "Target devices and primary operating environments (desktop browser, mobile app, tablet).",
];

const processSteps = [
  {
    step: "01",
    title: "Information Architecture",
    desc: "Structuring the navigation tree, data hierarchy, and user journey paths.",
  },
  {
    step: "02",
    title: "Low-Fidelity Wireframes",
    desc: "Rapid conceptual layouts focusing purely on spatial hierarchy and usability without aesthetic distractions.",
  },
  {
    step: "03",
    title: "Design System & UI Styling",
    desc: "Establishing color tokens, typography scales, card layouts, and button states.",
  },
  {
    step: "04",
    title: "High-Fidelity Prototyping",
    desc: "Connecting frames into interactive prototypes to validate user flows and edge cases.",
  },
  {
    step: "05",
    title: "Engineering Handoff",
    desc: "Exporting production-ready assets, SVG vectors, and developer annotations.",
  },
];

const faqs = [
  {
    q: "What tool do you use for UI/UX design?",
    a: "We work primarily in Figma. All components are built with proper auto-layout, component variants, and structured styles for seamless collaboration and developer inspection.",
  },
  {
    q: "Can you design for existing products or only new ones?",
    a: "Both. We regularly perform UX audits and UI redesigns for existing applications to modernize interface aesthetics and eliminate friction points in user workflows.",
  },
  {
    q: "Do you also write the code for the designs?",
    a: "Yes! Because KOLVE is a full-stack digital problem solver, our engineering team can directly implement the designs in Next.js/React/Tailwind with zero lost-in-translation issues.",
  },
  {
    q: "Do I get full Figma file access?",
    a: "Yes. You receive full edit and ownership rights to all project Figma files, component libraries, and visual assets.",
  },
];

export default function UIUXDesignPage() {
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
              <Badge variant="accent">UI/UX Design</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">
              UI/UX Design & Prototyping
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We create thoughtful, structured interfaces where every pixel and interaction serves
              clarity. We design products that users find immediately intuitive, backed by
              reusable component systems built for effortless development handoff.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Design Project
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
              Confusing software frustrates users and costs businesses money. Here is our remedy:
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

      {/* Deliverables */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Deliverables</Badge>
            <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
              Tangible assets delivered to you
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Everything required to either test with real users or begin coding immediately.
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

      {/* Preparation & Process */}
      <Section background="surface-alt">
        <Container size="default">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="default">Preparation</Badge>
              <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
                What we need from you
              </h2>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Clear context allows us to design interfaces that truly fit your operational needs.
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

            <div className="rounded-md border border-border bg-surface p-8">
              <h3 className="text-lg font-bold text-text">Our Design Workflow</h3>
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
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="default">FAQ</Badge>
            <h2 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-md border border-border bg-surface p-6">
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
      <section className="border-t border-border bg-surface py-16 transition-colors">
        <Container size="default">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Ready to design a clean product interface?
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Talk directly with our UI/UX designers to scope your project.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss UI/UX Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
