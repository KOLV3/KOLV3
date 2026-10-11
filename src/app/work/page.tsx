import { Metadata } from "next";
import { ShieldCheck, Lock, FileCode2 } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { projectItems } from "../../lib/projects";
import { PortfolioFilter } from "../../components/work/PortfolioFilter";

export const metadata: Metadata = {
  title: "Our Work & Projects | KOLVE",
  description:
    "Explore genuine engineering demonstrations and case studies developed by KOLVE. Strictly zero AI-slop or fabricated metrics.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-24 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="accent">Portfolio Archive</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Authentic work. Real code.
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              We decline to showcase stock mockups or fictional client testimonials. Every case
              study published on this platform represents actual engineering, real interface
              challenges, and verifiable results.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Filterable Content Area */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <Badge variant="accent">Technical Demonstrations</Badge>
            <h2 className="mt-2 text-2xl font-bold text-text sm:text-3xl">
              Published Architecture Case Studies
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Filter by engineering discipline or explore all documented architecture systems.
            </p>
          </div>

          <div className="mt-8">
            <PortfolioFilter initialProjects={projectItems} />
          </div>

          {/* Honest Status Notice for Additional Client Projects */}
          <div className="mt-16 rounded-md border border-border bg-surface p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h3 className="mt-3 text-xl font-bold text-text sm:text-2xl">
              Additional Client Case Studies in Preparation
            </h3>

            <p className="mt-2 text-xs text-text-muted leading-relaxed max-w-lg mx-auto">
              We only publish verified projects with real client consent. Prospective clients can
              request access to sanitized repository samples, architectural diagrams, and
              component libraries directly from our co-founders.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="sm">
                Request Private Code Walkthrough
              </Button>
              <Button href="/services" variant="secondary" size="sm">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Standards & Transparency Note */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-surface-muted text-accent">
                  <FileCode2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text">Code Inspection Available</h3>
              </div>
              <p className="mt-3 text-xs text-text-muted leading-relaxed">
                Evaluating a technical partner requires inspecting clean code. Prospective clients
                can request access to sanitized repository samples, architectural diagrams, and
                component libraries directly from our co-founders.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-surface-muted text-accent">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text">Client NDA & Confidentiality</h3>
              </div>
              <p className="mt-3 text-xs text-text-muted leading-relaxed">
                Many custom workflows and internal software projects are protected by
                non-disclosure agreements. We never publicize proprietary client code or business
                data without written authorization.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
