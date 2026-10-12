import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Video,
  Box,
  ArrowRight,
  CheckCircle2,
  Compass,
  Check,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { HeroVisualCanvas } from "../components/home/HeroVisualCanvas";
import {
  WebServiceDiagram,
  UiUxServiceDiagram,
  GraphicServiceDiagram,
  VideoServiceDiagram,
  ThreeDServiceDiagram,
  CustomSolutionDiagram,
} from "../components/home/ServiceDiagrams";
import {
  DesignSystemVisual,
  SecurityPipelineVisual,
} from "../components/work/ProjectVisuals";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Live Visual Studio Canvas */}
      <section className="relative overflow-hidden border-b border-border bg-bg py-16 sm:py-24 lg:py-28 transition-colors">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Mission & Core Problem Solving */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Digital Service Provider • Sunsari, Nepal
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl leading-[1.1]">
                Real problems. Practical solutions. Built with purpose.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
                KOLVE is an independent digital problem-solving company. We design and engineer
                accessible websites, structured design systems, and custom software solutions
                specifically built to solve real operational and business challenges.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/work" variant="primary" size="lg">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Discuss a Project
                </Button>
              </div>

              {/* Factual Value Props */}
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Direct Collaboration</h2>
                    <p className="text-xs text-text-muted mt-0.5">
                      Work directly with our four co-founders on architecture, design, and code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Zero AI Slop</h2>
                    <p className="text-xs text-text-muted mt-0.5">
                      Hand-crafted engineering and custom design, never generic template churn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Honest Scoping</h2>
                    <p className="text-xs text-text-muted mt-0.5">
                      Clear milestones, transparent delivery, and zero hidden markups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Visual Canvas */}
            <div className="lg:col-span-5">
              <HeroVisualCanvas />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Services Section with Visual Technical Blueprints */}
      <Section background="surface">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Badge variant="accent">What We Build</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Services engineered for real impact
              </h2>
              <p className="mt-3 max-w-2xl text-base text-text-muted">
                Every service combines rigorous technical execution, accessibility standards,
                light and dark mode design tokens, and clean source code handoff.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-accent hover:underline"
            >
              View all services
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1: Web Development */}
            <Card hover className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-text-muted">
                    TypeScript • Next.js
                  </span>
                </div>

                {/* Visual Technical Diagram */}
                <WebServiceDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    Website & Web Applications
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    Fast, accessible websites and robust web applications built with Next.js 16 and
                    TypeScript. Clean architecture, structured SEO, and sub-second loading.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Explore web development specifications
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Service 2: UI/UX Design */}
            <Card hover className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                    <Layout className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-text-muted">
                    Figma Systems
                  </span>
                </div>

                {/* Visual Technical Diagram */}
                <UiUxServiceDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    UI/UX Design & Prototyping
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    User journey mapping, wireframing, high-fidelity interfaces, and complete design
                    systems built with multi-theme tokens and developer-ready specs.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/ui-ux-design"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Explore UI/UX design workflow
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Service 3: Graphic Design */}
            <Card hover className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                    <Palette className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-text-muted">
                    Vector Marks
                  </span>
                </div>

                {/* Visual Technical Diagram */}
                <GraphicServiceDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    Graphic Design & Visual Identity
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    Vector logos, brand marks, digital banners, and typography guidelines engineered
                    for consistency across web, social media, and physical media.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/graphic-design"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Explore visual identity services
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Upcoming 1: Video Editing */}
            <Card className="flex flex-col justify-between p-6 border-dashed">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-text-muted">
                    <Video className="h-5 w-5" />
                  </div>
                  <Badge variant="default">Coming Soon</Badge>
                </div>

                {/* Visual Technical Diagram */}
                <VideoServiceDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    Video Editing & Production
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    Post-production editing, motion graphics, audio cleanup, and content pacing
                    engineered for product walkthroughs and technical explainers.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="text-xs text-text-muted">Currently in pipeline</span>
              </div>
            </Card>

            {/* Upcoming 2: 3D Visualization */}
            <Card className="flex flex-col justify-between p-6 border-dashed">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-text-muted">
                    <Box className="h-5 w-5" />
                  </div>
                  <Badge variant="default">Coming Soon</Badge>
                </div>

                {/* Visual Technical Diagram */}
                <ThreeDServiceDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    3D Modeling & Visualization
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    Precise 3D modeling, architectural rendering, and product asset visualization
                    engineered with realistic lighting and physical geometry references.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="text-xs text-text-muted">Currently in pipeline</span>
              </div>
            </Card>

            {/* Custom Digital Solutions */}
            <Card className="flex flex-col justify-between p-6 border-accent/30 bg-accent/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-on-accent">
                    <Compass className="h-5 w-5" />
                  </div>
                  <Badge variant="accent">Problem Scoping</Badge>
                </div>

                {/* Visual Technical Diagram */}
                <CustomSolutionDiagram />

                <div>
                  <h3 className="text-lg font-bold text-text">
                    Custom Digital Solutions
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    Have an unusual workflow, internal tool, or digital automation challenge? We
                    assess custom problems and engineer practical, unbloated software.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Discuss custom requirements
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Visual Connected Process Pipeline */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Our Process</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              From problem definition to verified delivery
            </h2>
            <p className="mt-3 text-base text-text-muted">
              We eliminate ambiguity with a structured 4-phase pipeline. Every stage produces a
              concrete, inspectable deliverable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-md border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent">01</span>
                  <span className="text-[10px] font-mono text-text-muted">Phase 1</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-text">Problem Discovery</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  We analyze your core challenge, audience constraints, and technical requirements
                  before proposing any solution.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                  <Check className="h-3 w-3" />
                  Spec Brief Handoff
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-md border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent">02</span>
                  <span className="text-[10px] font-mono text-text-muted">Phase 2</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-text">Architecture & Design</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  We build interactive Figma prototypes, component architectures, and data models
                  for mutual review.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                  <Check className="h-3 w-3" />
                  Design Token Blueprint
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-md border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent">03</span>
                  <span className="text-[10px] font-mono text-text-muted">Phase 3</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-text">Implementation</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Clean engineering with TypeScript, responsive layout testing, and automated
                  accessibility linting.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                  <Check className="h-3 w-3" />
                  Type-Safe Git Commits
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-md border border-border bg-surface p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent">04</span>
                  <span className="text-[10px] font-mono text-text-muted">Phase 4</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-text">Delivery & Handoff</h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Production deployment, DNS verification, clean documentation, and full source code
                  ownership transferred to you.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                  <Check className="h-3 w-3" />
                  100% Client Ownership
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Portfolio Case Studies with Visual Architectural Blueprints */}
      <Section background="surface-alt">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Badge variant="default">Verified Case Studies</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Real engineering. Inspectable architectures.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-text-muted">
                We strictly decline to show fabricated metrics or AI-slop mockups. Every project
                represents real software systems we designed and built.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-medium text-accent hover:underline"
            >
              Explore project archive
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          {/* Visual Project Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Case Study 1 */}
            <Card hover className="flex flex-col justify-between p-6 sm:p-8 space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent">Internal Engineering Pilot</Badge>
                  <span className="text-xs font-mono text-text-muted">UI/UX Systems</span>
                </div>

                {/* Visual Architecture Blueprint */}
                <DesignSystemVisual />

                <div>
                  <h3 className="text-xl font-bold text-text hover:text-accent transition-colors">
                    <Link href="/work/kolve-design-system">
                      KOLVE Design System & Multi-Theme Architecture
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    A restrained, accessible design system engineered with the 60-30-10 color balance
                    rule, pre-hydration theme resolution, and strict WCAG AA contrast pairing across
                    all components.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Next.js 16
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    TypeScript
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Tailwind CSS v4
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    CSS Variables
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href="/work/kolve-design-system"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  <span>Read architectural case study</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Case Study 2 */}
            <Card hover className="flex flex-col justify-between p-6 sm:p-8 space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent">Internal Engineering Pilot</Badge>
                  <span className="text-xs font-mono text-text-muted">Security & Cloud</span>
                </div>

                {/* Visual Architecture Blueprint */}
                <SecurityPipelineVisual />

                <div>
                  <h3 className="text-xl font-bold text-text hover:text-accent transition-colors">
                    <Link href="/work/secure-inquiry-pipeline">
                      Zero-Exposure Form Verification & Guided AI Pipeline
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    A multi-layered static inquiry routing pipeline and client-side knowledge engine
                    built with honeypot spam protection, input sanitization, and zero client secret exposure.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Web3Forms
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Client Knowledge Engine
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Zero Secret Leak
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border">
                    Static Edge
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href="/work/secure-inquiry-pipeline"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  <span>Read security case study</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Co-Founders Team Section with Visual Contribution Matrix */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Leadership</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Meet the four co-founders
            </h2>
            <p className="mt-3 text-base text-text-muted leading-relaxed">
              KOLVE was built from scratch in Sunsari, Nepal. You collaborate directly with the
              four individuals researching, designing, and coding your solution.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Founder 1 */}
            <Card className="flex flex-col justify-between p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-muted text-accent font-bold text-base">
                  UG
                </div>
                <h3 className="mt-4 text-base font-bold text-text">Ushant Giri</h3>
                <span className="text-xs font-semibold text-accent block mt-0.5">Co-Founder</span>
                <span className="text-[11px] text-text-muted block mt-1 font-medium">
                  Technical Direction & Systems
                </span>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  Software architecture, Next.js web systems, responsive layouts, and performance.
                </p>
              </div>
              <div className="mt-5 border-t border-border pt-3">
                <span className="text-[10px] font-mono text-accent">Core Engineering</span>
              </div>
            </Card>

            {/* Founder 2 */}
            <Card className="flex flex-col justify-between p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-muted text-accent font-bold text-base">
                  SS
                </div>
                <h3 className="mt-4 text-base font-bold text-text">Sandesh Sunar</h3>
                <span className="text-xs font-semibold text-accent block mt-0.5">Co-Founder</span>
                <span className="text-[11px] text-text-muted block mt-1 font-medium">
                  Product Design & UX
                </span>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  Figma interface design, multi-theme token balance, usability, and design systems.
                </p>
              </div>
              <div className="mt-5 border-t border-border pt-3">
                <span className="text-[10px] font-mono text-accent">UI/UX Systems</span>
              </div>
            </Card>

            {/* Founder 3 */}
            <Card className="flex flex-col justify-between p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-muted text-accent font-bold text-base">
                  BK
                </div>
                <h3 className="mt-4 text-base font-bold text-text">Bhishan Katwal</h3>
                <span className="text-xs font-semibold text-accent block mt-0.5">Co-Founder</span>
                <span className="text-[11px] text-text-muted block mt-1 font-medium">
                  Engineering & Digital Solutions
                </span>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  Technical delivery, workflow automation, custom tooling, and implementation.
                </p>
              </div>
              <div className="mt-5 border-t border-border pt-3">
                <span className="text-[10px] font-mono text-accent">Custom Tooling</span>
              </div>
            </Card>

            {/* Founder 4 */}
            <Card className="flex flex-col justify-between p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-muted text-accent font-bold text-base">
                  JJ
                </div>
                <h3 className="mt-4 text-base font-bold text-text">Jeshis Jamarkatel</h3>
                <span className="text-xs font-semibold text-accent block mt-0.5">Co-Founder</span>
                <span className="text-[11px] text-text-muted block mt-1 font-medium">
                  Operations & Creative Production
                </span>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  Project coordination, client requirement analysis, creative asset production, and QA.
                </p>
              </div>
              <div className="mt-5 border-t border-border pt-3">
                <span className="text-[10px] font-mono text-accent">Operations & QA</span>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="/about" variant="secondary">
              Read Our Full Story & Principles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6. Contact CTA Banner */}
      <section className="border-t border-border bg-surface py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="rounded-md border border-border bg-bg p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                Have a project or problem to discuss?
              </h2>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                Whether you need a modern web application, an accessible design system, or want to
                explore what digital solutions fit your business, we are ready to discuss.
              </p>
              <p className="mt-2 text-xs text-text-muted">
                Direct founder email:{" "}
                <a
                  href="mailto:kolvedsp@gmail.com"
                  className="font-medium text-accent hover:underline"
                >
                  kolvedsp@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0">
              <Button href="/contact" variant="primary" size="lg">
                Discuss a Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
