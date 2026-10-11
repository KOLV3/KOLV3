import Link from "next/link";
import { Metadata } from "next";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { Section } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

export const metadata: Metadata = {
  title: "3D Visualization & Modeling (In Pipeline) | KOLVE",
  description:
    "3D architectural visualization, floor plan modeling, and realistic rendering: currently in development at KOLVE.",
};

const plannedScope = [
  "Architectural exterior and interior visualizations from CAD / floor plan blueprints.",
  "Physically accurate lighting setups (daylight, dusk, artificial architectural illumination).",
  "Realistic PBR materials (concrete, timber, glass, metal finishes, textured masonry).",
  "Product visualization and 3D concept asset rendering for marketing presentations.",
  "High-resolution still renders (4K) and planned walkthrough animation sequences.",
];

export default function ThreeDVisualizationPage() {
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
              3D Architectural & Product Visualization
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We are currently establishing our 3D rendering pipeline and material libraries. We
              plan to offer photorealistic architectural visualization and 3D modeling tailored for
              developers, architects, and product creators.
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
              Here is the technical scope planned for this service offering:
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
            <h3 className="mt-3 text-lg font-bold text-text">Launch Pipeline</h3>
            <p className="mt-2 text-xs text-text-muted leading-relaxed">
              We are preparing benchmark renders with Blender and specialized render engines.
              Reach out if you would like to collaborate on an early test render or pilot showcase.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="secondary" size="sm">
                Inquire About 3D Work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
