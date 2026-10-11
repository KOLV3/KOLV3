import Link from "next/link";
import { Metadata } from "next";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Video Editing & Post-Production (In Pipeline) | KOLVE",
  description:
    "Video post-production, technical explainer pacing, and motion graphics: currently in development at KOLVE.",
};

const plannedScope = [
  "Technical product walkthroughs & software demo video pacing.",
  "High-retention social and promotional video editing (Reels, Shorts, YouTube landscape).",
  "Audio cleanup, EQ balancing, background noise reduction, and sound design.",
  "Subtitles, on-screen callouts, and clean motion typography (no flashy AI transitions).",
  "Multi-format delivery: 16:9 4K/1080p, 9:16 vertical, and 1:1 square master exports.",
];

export default function VideoEditingPage() {
  return (
    <div>
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
              <Badge variant="default">Coming Soon</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">
              Video Editing & Post-Production
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We are actively assembling our post-production pipeline. We strictly decline to offer
              services before we can guarantee uncompromising delivery standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Pre-register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Active Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="surface">
        <Container size="default">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Planned Scope & Capabilities
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Here is what this service will provide once fully launched:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {plannedScope.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-md border border-border bg-bg p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-md border border-border bg-bg p-8 text-center max-w-xl mx-auto">
            <Clock className="h-8 w-8 text-accent mx-auto" />
            <h3 className="mt-3 text-lg font-bold text-text">Launch Timeline</h3>
            <p className="mt-2 text-xs text-text-muted leading-relaxed">
              We are finalizing workflow benchmarks. If you have an upcoming project that needs
              video editing within the next few weeks, feel free to reach out and speak with us.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="secondary" size="sm">
                Discuss an Early Pilot Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
