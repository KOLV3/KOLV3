import Link from "next/link";
import {
  Code2,
  Palette,
  Layout,
  Video,
  Box,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-bg py-20 sm:py-28 lg:py-32 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Digital Service Provider • Sunsari, Nepal
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Real problems. Practical solutions. Built with purpose.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed">
              KOLVE is a digital problem-solving studio. We design and build clean websites,
              intuitive user interfaces, and custom digital assets tailored to solve concrete
              business and operational challenges.
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
                    Work directly with our co-founders on architecture, design, and code.
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
                    Clear milestones, realistic timelines, and practical pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Services Section */}
      <Section background="surface">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Badge variant="accent">What We Build</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Services engineered for real impact
              </h2>
              <p className="mt-3 max-w-2xl text-base text-text-muted">
                Each service is delivered with dedicated attention to technical quality,
                accessibility, responsive performance, and clear business outcomes.
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
            {/* Service 1 */}
            <Card hover className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  Website & Web Applications
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Fast, accessible websites and robust web applications built with modern
                  frameworks like Next.js and TypeScript. Clean architecture, structured SEO, and
                  mobile responsiveness.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Next.js
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    TypeScript
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Learn more about web development
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Service 2 */}
            <Card hover className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  UI/UX Design
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  User experience audits, wireframing, high-fidelity user interface design, and
                  design systems built for usability. Tailored for software products, dashboards,
                  and mobile apps.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Figma
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Design Systems
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Prototyping
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/ui-ux-design"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Learn more about UI/UX design
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Service 3 */}
            <Card hover className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  Graphic Design & Visuals
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Strategic visual assets, branding elements, promotional banners, and high-impact
                  digital graphics. Purpose-built visual communication without generic clip-art.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Branding
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Vector Graphics
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    Visual Identity
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/services/graphic-design"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  Learn more about graphic design
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>

            {/* Upcoming 1: Video Editing */}
            <Card className="flex flex-col justify-between border-dashed">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-text-muted">
                    <Video className="h-5 w-5" />
                  </div>
                  <Badge variant="default">Coming Soon</Badge>
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  Video Editing & Production
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Post-production editing, motion graphics, audio cleanup, and content pacing
                  engineered for technical explainers and product demonstrations.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="text-xs text-text-muted">Currently in pipeline</span>
              </div>
            </Card>

            {/* Upcoming 2: 3D Visualization */}
            <Card className="flex flex-col justify-between border-dashed">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-text-muted">
                    <Box className="h-5 w-5" />
                  </div>
                  <Badge variant="default">Coming Soon</Badge>
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  3D Modeling & Visualization
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  High-fidelity 3D modeling, architectural rendering, and product asset
                  visualization created with exact physical references and realistic lighting.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <span className="text-xs text-text-muted">Currently in pipeline</span>
              </div>
            </Card>

            {/* Custom Problem Solving Callout */}
            <div className="flex flex-col justify-between rounded-md border border-accent/20 bg-accent/5 p-6">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-on-accent">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">
                  Custom Digital Solutions
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Have a specific workflow, automation, or custom software problem that does not
                  fit neatly into standard agency categories? We assess custom engineering problems.
                </p>
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
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. How We Work (Process) */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Our Process</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              From problem definition to verified delivery
            </h2>
            <p className="mt-3 text-base text-text-muted">
              We eliminate guesswork with a transparent, milestone-driven workflow. Every phase
              has tangible deliverables and agreed checkpoints.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="rounded-md border border-border bg-surface p-6">
              <span className="text-xs font-mono font-bold text-accent">01</span>
              <h3 className="mt-3 text-base font-bold text-text">Problem Discovery</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                We analyze your exact problem, target users, technical constraints, and operational
                goals before writing a line of code or designing wireframes.
              </p>
            </div>

            <div className="rounded-md border border-border bg-surface p-6">
              <span className="text-xs font-mono font-bold text-accent">02</span>
              <h3 className="mt-3 text-base font-bold text-text">Architecture & Design</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                We create functional prototypes, design tokens, data models, and component
                blueprints for review and alignment.
              </p>
            </div>

            <div className="rounded-md border border-border bg-surface p-6">
              <span className="text-xs font-mono font-bold text-accent">03</span>
              <h3 className="mt-3 text-base font-bold text-text">Implementation</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                Built with maintainable code, rigorous linting, type safety, responsive layout
                testing, and performance optimization.
              </p>
            </div>

            <div className="rounded-md border border-border bg-surface p-6">
              <span className="text-xs font-mono font-bold text-accent">04</span>
              <h3 className="mt-3 text-base font-bold text-text">Deployment & Handoff</h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                Security header validation, domain routing, full documentation, and post-launch
                support with zero lock-in.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Portfolio Showcase (Authentic State) */}
      <Section background="surface-alt">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Badge variant="default">Portfolio & Case Studies</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Real work. Authentic case studies.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-text-muted">
                We strictly decline to show AI-generated mockups or invented client logos. Every
                project displayed here represents actual engineering and design.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-medium text-accent hover:underline"
            >
              Explore our project archive
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          {/* Transparent Launch Project Notice */}
          <div className="mt-10 rounded-md border border-border bg-surface p-8 text-center sm:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-text">
              New Projects Being Added
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-text-muted leading-relaxed">
              We are currently packaging verified case studies and technical walkthroughs for our
              latest client and software projects. Check back regularly or speak directly with our
              co-founders to inspect sample source code and private demos.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/contact" variant="secondary" size="sm">
                Request a Private Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Team / About Highlights */}
      <Section background="default">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="accent">The Team</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Founded by four builders in Sunsari, Nepal
              </h2>
              <p className="mt-4 text-base text-text-muted leading-relaxed">
                KOLVE was started by Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis
                Jamarkatel. We combine software engineering, interface design, and digital
                problem-solving into a cohesive partnership.
              </p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                When you partner with KOLVE, you deal directly with the engineers and designers
                building your product. No middle managers, no opaque outsourced teams, and no
                over-promising.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-surface px-3 py-1 font-medium border border-border">
                  Ushant Giri
                </span>
                <span className="rounded bg-surface px-3 py-1 font-medium border border-border">
                  Sandesh Sunar
                </span>
                <span className="rounded bg-surface px-3 py-1 font-medium border border-border">
                  Bhishan Katwal
                </span>
                <span className="rounded bg-surface px-3 py-1 font-medium border border-border">
                  Jeshis Jamarkatel
                </span>
              </div>

              <div className="mt-8">
                <Button href="/about" variant="secondary">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-lg font-bold text-text">Our Working Principles</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                    1
                  </span>
                  <div>
                    <strong className="text-text">Form follows function:</strong>
                    <span className="text-text-muted ml-1">
                      Visuals exist to serve usability and clarity, never decorative vanity.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                    2
                  </span>
                  <div>
                    <strong className="text-text">Technical transparency:</strong>
                    <span className="text-text-muted ml-1">
                      You own your source code, your assets, and your hosting infrastructure.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                    3
                  </span>
                  <div>
                    <strong className="text-text">Performance as a feature:</strong>
                    <span className="text-text-muted ml-1">
                      Fast load times, minimal dependencies, and clean semantic markup.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                    4
                  </span>
                  <div>
                    <strong className="text-text">Honest commitments:</strong>
                    <span className="text-text-muted ml-1">
                      If we cannot solve your specific problem effectively, we will say so upfront.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Contact CTA Banner */}
      <section className="border-t border-border bg-surface py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="rounded-md border border-border bg-bg p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                Have a problem that needs solving?
              </h2>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                Whether you need a full web platform, a custom interface design, or want to explore
                what technical solutions fit your business, we are ready to discuss details.
              </p>
              <p className="mt-2 text-xs text-text-muted">
                Direct inquiry:{" "}
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
