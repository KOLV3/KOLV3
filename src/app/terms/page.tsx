import { Metadata } from "next";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Badge } from "../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms and Conditions | KOLVE",
  description:
    "Standard terms of service and commercial engagement policies for KOLVE Digital Service Provider.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="default">Legal Information</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              Last updated: October 2026 • Effective immediately
            </p>
          </div>
        </Container>
      </section>

      <Section background="surface">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none space-y-8 text-sm text-text-muted leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-text">1. Introduction & Acceptance</h2>
              <p className="mt-2">
                These Terms and Conditions govern your engagement with KOLVE (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
                a Digital Service Provider based in Sunsari, Nepal, co-founded by Ushant Giri, Sandesh
                Sunar, Bhishan Katwal, and Jeshis Jamarkatel. By accessing this website or engaging us
                for digital services, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">2. Service Scoping & Quotations</h2>
              <p className="mt-2">
                Every project begins with a mutual scoping phase. Detailed deliverables, milestone
                deadlines, and pricing are agreed in writing before kickoff. Any scope changes
                requested during development that exceed the initial agreement will be evaluated and
                quoted separately as change requests.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">3. Intellectual Property & Ownership</h2>
              <p className="mt-2">
                <strong className="text-text">Client Ownership:</strong> Upon receipt of full payment
                for completed milestones, you own all rights, title, and interest in the custom
                source code, Figma design files, vectors, and final assets produced specifically for
                your project.
              </p>
              <p className="mt-2">
                <strong className="text-text">Open Source Libraries:</strong> Standard open-source
                libraries and frameworks (such as Next.js, React, Tailwind CSS, and Lucide icons)
                remain governed by their respective permissive licenses (e.g., MIT).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">4. Client Responsibilities</h2>
              <p className="mt-2">
                To ensure timely delivery, clients agree to provide necessary text copy, brand
                assets, technical credentials, and feedback in a reasonable timeframe. You warrant
                that all materials supplied to us for use in your project do not infringe third-party
                copyrights or trademarks.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">5. Milestone Delivery & Revisions</h2>
              <p className="mt-2">
                Projects are structured around visible checkpoints (e.g., Wireframe Approval,
                Staging Preview, Final Deployment). Minor layout and copy adjustments within the
                agreed scope are accommodated during these review phases. Fundamental architectural
                reversals post-approval may require timeline or cost adjustments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">6. Limitation of Liability</h2>
              <p className="mt-2">
                While we adhere to high security, performance, and accessibility engineering
                standards, KOLVE shall not be held liable for indirect, incidental, or consequential
                damages resulting from third-party hosting outages, domain registrar disruptions, or
                unauthorized tampering with deployed code once handed over to client control.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">7. Contact & Jurisdiction</h2>
              <p className="mt-2">
                These terms are governed by the laws of Nepal. If you have questions regarding these
                terms or need a formal contract for an enterprise engagement, contact us at{" "}
                <a href="mailto:kolvedsp@gmail.com" className="text-accent underline">
                  kolvedsp@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
