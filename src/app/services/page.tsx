import Link from "next/link";
import { Metadata } from "next";
import {
  Code2,
  Layout,
  Palette,
  Video,
  Box,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Services | KOLVE",
  description:
    "Explore digital problem-solving services by KOLVE: Web Development, UI/UX Design, and Graphic Design. Purpose-built for businesses in Nepal and worldwide.",
};

const activeServices = [
  {
    slug: "web-development",
    title: "Website & Web Application Development",
    icon: Code2,
    badge: "Available Now",
    badgeVariant: "accent" as const,
    description:
      "Modern, fast, accessible web solutions engineered to perform seamlessly across all screen sizes. From responsive business landing pages to interactive web applications.",
    deliverables: [
      "Custom responsive websites (Next.js / React / TypeScript)",
      "High-conversion landing pages",
      "API integrations & custom backend endpoints",
      "Semantic SEO architecture & speed optimization",
      "Source code handoff with zero lock-in",
    ],
    idealFor:
      "Businesses needing a genuine professional web presence, founders launching a web MVP, or teams seeking modern web infrastructure.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Prototyping",
    icon: Layout,
    badge: "Available Now",
    badgeVariant: "accent" as const,
    description:
      "User-centered interface design, thoughtful interaction architecture, and design systems that transform complex workflows into intuitive user experiences.",
    deliverables: [
      "User journey mapping & information architecture",
      "Interactive Figma wireframes and prototypes",
      "Component design systems with light/dark tokens",
      "Responsive UI specifications ready for developer handoff",
      "Usability evaluations & UX audits",
    ],
    idealFor:
      "Software startups, mobile app developers, and businesses with existing products that suffer from usability friction.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Visual Identity",
    icon: Palette,
    badge: "Available Now",
    badgeVariant: "accent" as const,
    description:
      "Purposeful visual assets, digital branding elements, vector graphics, and marketing collateral designed to communicate authority and trust.",
    deliverables: [
      "Brand marks, logotypes & typography guidelines",
      "Digital marketing visual assets & promotional banners",
      "Editorial graphics, diagrams & social graphics",
      "High-resolution print-ready and web-ready exports",
      "Consistent brand design guidelines",
    ],
    idealFor:
      "Companies wanting clean visual branding that stands out without relying on generic stock art or AI slop.",
  },
];

const upcomingServices = [
  {
    slug: "video-editing",
    title: "Video Editing & Post-Production",
    icon: Video,
    status: "Coming Soon",
    description:
      "Technical video post-production, product walkthrough edits, explainer pacing, and audio cleanup for digital campaigns and software demonstrations.",
  },
  {
    slug: "3d-visualization",
    title: "3D Architectural & Product Visualization",
    icon: Box,
    status: "Coming Soon",
    description:
      "Photorealistic 3D rendering, spatial visualization, product modeling, and lighting studies created with precise physical dimensions.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="accent">Digital Services</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Practical capabilities for real problems
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              We focus on solving technical, operational, and visual challenges with clean
              craftsmanship. Explore our core services below or contact us to discuss a custom
              requirement.
            </p>
          </div>
        </Container>
      </section>

      {/* Active Services */}
      <Section background="surface">
        <Container size="default">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Active Service Offerings
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              These services are fully operational and ready for immediate project bookings.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {activeServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="rounded-md border border-border bg-bg p-6 sm:p-8 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="lg:max-w-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-text sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-text-muted leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-4 rounded border border-border bg-surface p-3">
                        <span className="text-xs font-semibold text-text">Who it is for:</span>
                        <p className="mt-1 text-xs text-text-muted">{service.idealFor}</p>
                      </div>
                    </div>

                    <div className="lg:w-80 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-text">
                        What We Deliver:
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs text-text-muted">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-2">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                          size="sm"
                          className="w-full justify-center"
                        >
                          View Full Details & Pricing Model
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Services in Development (Coming Soon) */}
      <Section background="default">
        <Container size="default">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              In Development Pipeline
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              We expand our catalog only when we can guarantee verifiable mastery and delivery.
              These disciplines are currently in active preparation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {upcomingServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} className="border-dashed flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-surface-muted text-text-muted">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="default">{service.status}</Badge>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-text">{service.title}</h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-medium text-text-muted hover:text-accent"
                    >
                      Read roadmap details &rarr;
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Custom Solution Inquiry Banner */}
      <section className="border-t border-border bg-surface py-16 transition-colors">
        <Container size="default">
          <div className="rounded-md border border-border bg-bg p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-accent">
                <Compass className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Custom Scope</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-text">
                Need a combination or custom digital service?
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Many problems span multiple categories, such as building a web tool that requires
                custom UI/UX design, custom branding, and specialized data flows. We evaluate
                custom briefs on their merits.
              </p>
            </div>
            <div>
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
