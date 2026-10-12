import { Metadata } from "next";
import { MapPin, CheckCircle2, ShieldCheck, Cpu, Layers } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export const metadata: Metadata = {
  title: "About KOLVE | Digital Service Provider & Problem Solvers",
  description:
    "Learn about KOLVE, our problem-solving philosophy, co-founders Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel based in Sunsari, Nepal.",
};

const founders = [
  {
    name: "Ushant Giri",
    initials: "UG",
    role: "Co-Founder",
    focus: "Technical Direction & Systems Development",
    tags: ["Systems Architecture", "Next.js 16", "TypeScript"],
    bio: "Focuses on software architecture, frontend engineering, responsive web systems, and practical digital problem solving.",
  },
  {
    name: "Sandesh Sunar",
    initials: "SS",
    role: "Co-Founder",
    focus: "Product Design & User Experience",
    tags: ["UI/UX Systems", "Figma Tokens", "Usability"],
    bio: "Focuses on UI/UX workflows, systematic interface design, user journey mapping, and visual hierarchy.",
  },
  {
    name: "Bhishan Katwal",
    initials: "BK",
    role: "Co-Founder",
    focus: "Engineering & Digital Solutions",
    tags: ["Implementation", "Digital Solutions", "Automation"],
    bio: "Focuses on core implementation, technical delivery, workflow automation, and custom web services.",
  },
  {
    name: "Jeshis Jamarkatel",
    initials: "JJ",
    role: "Co-Founder",
    focus: "Operations & Creative Production",
    tags: ["Operations", "Creative Assets", "QA"],
    bio: "Focuses on project coordination, client requirement analysis, creative asset production, and execution.",
  },
];

const principles = [
  {
    num: "01",
    title: "Real Problems Over Agency Vanity",
    desc: "We do not build technology for the sake of buzzwords. If a simple, static website or straightforward tool solves the issue faster and more affordably, that is what we recommend.",
  },
  {
    num: "02",
    title: "Practical, Maintainable Engineering",
    desc: "We prioritize clean architectures that are simple to debug, quick to load, and inexpensive to host. No bloated stacks or unnecessary third-party dependencies.",
  },
  {
    num: "03",
    title: "Direct Co-Founder Accountability",
    desc: "When you engage KOLVE, you collaborate directly with the four individuals who research, design, and code your project. We take personal pride in every line of code.",
  },
  {
    num: "04",
    title: "Honest Scoping & Zero AI-Slop",
    desc: "We write clean code and custom designs. We decline to present generic AI-generated templates or fabricated credentials as company work.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-24 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="accent">About KOLVE</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Real problems. Practical solutions. Built with purpose.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              KOLVE is an independent Digital Service Provider (DSP) based in Sunsari, Nepal. We
              exist to solve tangible business, operational, and visual problems through clean
              code, deliberate interface design, and purposeful technology.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Headquartered in Sunsari, Nepal • Serving Local & Global Clients</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision with Visual Architecture Blueprint */}
      <Section background="surface">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Our Purpose
              </span>
              <h2 className="mt-2 text-2xl font-bold text-text sm:text-3xl">
                More than a web development agency
              </h2>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                Most digital agencies sell fixed packages and generic website templates regardless
                of whether they solve the client&apos;s actual problem. At KOLVE, we start with the
                problem itself.
              </p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Whether a local enterprise in Nepal needs a modern digital footprint to establish
                credibility, or an international software venture requires an accessible,
                high-performance web application, we craft purpose-built tools that do their job
                without unnecessary overhead.
              </p>
            </div>

            {/* Visual Engineering Blueprint Card */}
            <div className="rounded-md border border-border bg-bg p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <h3 className="text-sm font-bold text-text">The KOLVE Engineering Standard</h3>
                </div>
                <span className="font-mono text-[10px] text-accent">WCAG AA • Edge</span>
              </div>

              {/* Visual Architecture Summary */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="rounded border border-border bg-surface p-2.5 space-y-1">
                  <span className="text-text-muted text-[10px] flex items-center gap-1">
                    <Layers className="h-3 w-3 text-accent" />
                    <span>Visual Balance</span>
                  </span>
                  <span className="block font-bold text-text">60-30-10 Token Ratio</span>
                  <span className="text-[10px] text-accent">Warm Cream + Forest</span>
                </div>

                <div className="rounded border border-border bg-surface p-2.5 space-y-1">
                  <span className="text-text-muted text-[10px] flex items-center gap-1">
                    <Cpu className="h-3 w-3 text-accent" />
                    <span>Engine Stack</span>
                  </span>
                  <span className="block font-bold text-text">Next.js 16 + TypeScript</span>
                  <span className="text-[10px] text-accent">Static Export Edge</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-text-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-text">Speed & Performance:</strong> Sub-second load
                    times, zero layout shift, and lightweight asset footprints.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-text">Universal Accessibility:</strong> Complete WCAG
                    AA contrast, semantic markup, and responsive layouts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-text">Complete Transparency:</strong> Clear milestones,
                    real Git repositories, and direct co-founder communication.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Co-Founders with Visual Avatars & Discipline Tags */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Leadership</Badge>
            <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
              Meet the Co-Founders
            </h2>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              KOLVE was built from scratch by four dedicated co-founders. We combine hands-on
              engineering, visual systems, and product development:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <Card key={founder.name} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface-muted text-accent font-bold text-base">
                    {founder.initials}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-text">{founder.name}</h3>
                  <span className="text-xs font-semibold text-accent block mt-0.5">
                    {founder.role}
                  </span>
                  <span className="text-[11px] text-text-muted block mt-1 font-medium">
                    {founder.focus}
                  </span>
                  <p className="mt-3 text-xs text-text-muted leading-relaxed">{founder.bio}</p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {founder.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono text-text border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[10px] font-mono text-accent">Direct Project Contributor</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Working Principles */}
      <Section background="surface-alt">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="default">Philosophy</Badge>
            <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
              How we approach every project
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.num}
                className="rounded-md border border-border bg-surface p-6 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-accent">{principle.num}</span>
                  <h3 className="mt-2 text-base font-bold text-text">{principle.title}</h3>
                  <p className="mt-2.5 text-xs text-text-muted leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16 transition-colors">
        <Container size="default">
          <div className="rounded-md border border-border bg-bg p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Ready to work with our team?
            </h2>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              We are based in Sunsari, Nepal, and collaborate with teams worldwide. Reach out to
              start a conversation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss a Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
