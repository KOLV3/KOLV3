import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Card } from "../../../components/ui/Card";
import { projectItems } from "../../../lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return projectItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectItems.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | KOLVE",
    };
  }

  return {
    title: `${project.title} | Case Study | KOLVE`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectItems.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <Link
                href="/work"
                className="inline-flex items-center text-xs font-medium text-text-muted hover:text-text transition-colors"
              >
                <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                Back to Our Work
              </Link>
              <span className="text-xs text-text-muted">/</span>
              <Badge variant="accent">{project.type}</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base text-text-muted leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded bg-surface-muted px-2.5 py-1 text-xs text-text border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Breakdown */}
      <Section background="surface">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Problem, Approach, Solution */}
            <div className="lg:col-span-8 space-y-10">
              {/* Problem / Objective */}
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Context & Challenge
                </span>
                <h2 className="mt-2 text-xl font-bold text-text sm:text-2xl">
                  The Problem & Objective
                </h2>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {project.objective}
                </p>
              </div>

              {/* Our Approach */}
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Engineering Method
                </span>
                <h2 className="mt-2 text-xl font-bold text-text sm:text-2xl">
                  Our Technical Approach
                </h2>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* The Solution */}
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Architecture
                </span>
                <h2 className="mt-2 text-xl font-bold text-text sm:text-2xl">
                  The Final Solution
                </h2>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Challenges and Decisions */}
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8">
                <div className="flex items-center gap-2 text-text">
                  <AlertTriangle className="h-4 w-4 text-accent" />
                  <h3 className="text-base font-bold">Challenges & Key Trade-Offs</h3>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* Right Column: Metadata & Results */}
            <div className="lg:col-span-4 space-y-6">
              {/* Verified Results Box */}
              <div className="rounded-md border border-accent/30 bg-surface p-6 shadow-sm">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Verified Outcomes
                  </h3>
                </div>
                <p className="mt-3 text-xs text-text leading-relaxed font-medium">
                  {project.verifiedResults}
                </p>
                <div className="mt-4 border-t border-border pt-3">
                  <span className="text-[11px] text-text-muted">
                    Tested and measured on production builds.
                  </span>
                </div>
              </div>

              {/* Related Services */}
              <Card className="p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text">
                  Related Services
                </h3>
                <div className="mt-4 space-y-2">
                  {project.relatedServices.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="block rounded border border-border bg-surface-muted px-3 py-2 text-xs text-text hover:text-accent hover:border-accent transition-colors"
                    >
                      {svc.title} &rarr;
                    </Link>
                  ))}
                </div>
              </Card>

              {/* CTA Box */}
              <div className="rounded-md border border-border bg-bg p-6 text-center">
                <h4 className="text-sm font-bold text-text">Need Similar Engineering?</h4>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Speak directly with our four co-founders to review architectural options for your
                  business.
                </p>
                <div className="mt-4">
                  <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                    Discuss a Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
