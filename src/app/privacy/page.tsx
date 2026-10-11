import { Metadata } from "next";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Badge } from "../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | KOLVE",
  description:
    "Privacy policy for KOLVE Digital Service Provider based in Sunsari, Nepal. Transparent explanation of data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="default">Legal Information</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Privacy Policy
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
              <h2 className="text-lg font-bold text-text">1. Who We Are</h2>
              <p className="mt-2">
                KOLVE is an independent Digital Service Provider operated by its four co-founders
                (Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel) based in Sunsari,
                Nepal. We provide digital problem-solving services, including web development, UI/UX
                design, and visual branding.
              </p>
              <p className="mt-2">
                For any privacy questions or data inquiries, you can contact us directly at{" "}
                <a href="mailto:kolvedsp@gmail.com" className="text-accent underline">
                  kolvedsp@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">2. Information We Collect</h2>
              <p className="mt-2">
                We believe in strict data minimization. We only collect information that you
                voluntarily provide to us:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-text">Contact & Inquiry Information:</strong> When you
                  submit our project inquiry form or email us directly, we collect your name, email
                  address, project details, timeline, and budget notes solely to respond to your
                  request.
                </li>
                <li>
                  <strong className="text-text">Technical Theme Preference:</strong> We store your
                  selected theme preference (<code className="text-xs bg-surface-muted px-1 py-0.5 rounded">kolve-theme</code>)
                  in your browser&apos;s <code className="text-xs bg-surface-muted px-1 py-0.5 rounded">localStorage</code>
                  so that your chosen light or dark theme persists across page reloads. This does not
                  track you across the web.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">3. Cookies & Tracking</h2>
              <p className="mt-2">
                This website does not use invasive advertising trackers, third-party behavioral
                profiling cookies, or marketing tracking pixels. We do not sell, rent, or trade your
                personal data to any third parties under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">4. AI Assistant Interaction</h2>
              <p className="mt-2">
                When you use our guided AI chat assistant on this website to learn about our
                services, your conversation queries are processed in memory for the duration of the
                session to generate relevant guidance. We do not retain, store, or sell your chat
                transcripts, nor do we use your private project inquiries to train public AI models.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">5. How We Use Your Data</h2>
              <p className="mt-2">
                Information submitted via contact channels is used exclusively to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Evaluate project feasibility and prepare quotations.</li>
                <li>Communicate with you regarding your service requests.</li>
                <li>Deliver agreed-upon software and design services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">6. Data Retention and Rights</h2>
              <p className="mt-2">
                We retain client communications for the duration of our commercial relationship or
                as necessary to satisfy operational recordkeeping. You have the right at any time to
                request a copy of your submitted messages or request deletion of your contact records
                by emailing us at{" "}
                <a href="mailto:kolvedsp@gmail.com" className="text-accent underline">
                  kolvedsp@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text">7. Changes to This Policy</h2>
              <p className="mt-2">
                If we update our site features or technical architecture, we will update the &quot;Last
                updated&quot; date at the top of this policy.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
