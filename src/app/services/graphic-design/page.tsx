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
  title: "Graphic Design & Visual Identity | KOLVE",
  description:
    "Purposeful brand identities, vector graphics, marketing visuals, and clean visual assets crafted by KOLVE.",
};

const problemsSolved = [
  "Inconsistent branding where colors, fonts, and graphics conflict across different marketing channels.",
  "Generic stock graphics and AI clip-art that look unconvincing and cheapen brand perception.",
  "Low-resolution assets that blur when printed or fail to render sharply on high-density Retina displays.",
  "Lack of vector source files (SVG/EPS), leaving clients unable to scale or modify graphics later.",
];

const deliverables = [
  {
    title: "Brand Marks & Logotypes",
    desc: "Clean, memorable marks built with strong geometry, verified legibility at 16px favicon size and large billboard scales.",
  },
  {
    title: "Digital Marketing Graphics",
    desc: "Promotional graphics, display banners, and social collateral tailored for specific aspect ratios and readable text hierarchy.",
  },
  {
    title: "Vector Illustrations & Icons",
    desc: "Original SVG icon sets, structural diagrams, and technical illustrations styled to match your exact visual language.",
  },
  {
    title: "Typography & Color Systems",
    desc: "Documented color palettes with RGB, CMYK, and HEX values, paired with curated accessible typography hierarchies.",
  },
  {
    title: "Production-Ready Source Files",
    desc: "Organized archives including vector SVGs, layered source files, print PDFs with bleed, and web-optimized PNGs.",
  },
];

const clientChecklist = [
  "Company background and description of the service or product.",
  "Intended medium: Web/mobile display, physical print, merchandise, or both.",
  "Specific dimensions, ratios, or platform requirements (e.g. 1200x630px OG images).",
  "Target demographic and geographic focus (local Nepal vs. global).",
  "Any existing logos or visual elements that must be retained.",
];

const processSteps = [
  {
    step: "01",
    title: "Creative Discovery",
    desc: "We analyze your brand values, competitors, target audience, and usage context.",
  },
  {
    step: "02",
    title: "Concept Exploration",
    desc: "We sketch distinct visual directions focusing on concept strength, geometry, and clarity.",
  },
  {
    step: "03",
    title: "Refinement & Polish",
    desc: "Developing the selected concept, tuning kerning, vector curve points, and balance.",
  },
  {
    step: "04",
    title: "Testing & Export",
    desc: "Verifying legibility at scale, contrast checks on light and dark surfaces, and generating all export formats.",
  },
];

const faqs = [
  {
    q: "Do you use AI generators to make logos or graphics?",
    a: "Never. All graphics are constructed by human designers using vector drawing tools. This ensures original, copyrightable assets with exact geometric precision and clean vector anchors.",
  },
  {
    q: "What file formats will I receive?",
    a: "You receive industry-standard vector files (SVG, PDF, EPS) and raster exports (PNG with transparent backgrounds, high-resolution JPGs) categorized for web and print.",
  },
  {
    q: "Can you design thumbnail graphics or social banners?",
    a: "Yes. We design high-contrast, professional thumbnails and social headers structured around clear typography and strong composition.",
  },
];

export default function GraphicDesignPage() {
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
              <Badge variant="accent">Graphic Design</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">
              Graphic Design & Visual Identity
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We design purposeful visual assets that communicate credibility. From vector logos
              to technical marketing graphics, we create visual systems built with geometric
              discipline and typographic restraint.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Graphic Design Needs
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
              Common visual issues we solve
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Poor visuals undermine otherwise great products. We fix the following:
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
              What we design and deliver
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Professional visual assets supplied in all necessary dimensions and file formats.
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
                What to prepare before kickoff
              </h2>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Having clear context ensures we produce visuals that align with your exact goals.
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
              <h3 className="text-lg font-bold text-text">Our 4-Stage Graphic Process</h3>
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

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
              Need custom visual assets?
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Let us know what graphics your brand requires and we will provide a clear estimate.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss Graphic Design
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
