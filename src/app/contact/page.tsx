"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Badge } from "../../components/ui/Badge";

const serviceOptions = [
  "Website & Web Application Development",
  "UI/UX Design & Prototyping",
  "Graphic Design & Visual Identity",
  "Custom Digital Solutions & Automation",
  "Not sure yet (Need guidance scoping the problem)",
];

const budgetRanges = [
  "Small scope / exploratory MVP",
  "Standard project scope",
  "Comprehensive platform / Retainer",
  "Not specified / Need estimate",
];

const timelineOptions = [
  "Immediate (Within 1-2 weeks)",
  "Upcoming month (2-4 weeks)",
  "Flexible / Long-term planning",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    budget: budgetRanges[0],
    timeline: timelineOptions[1],
    description: "",
    honeypot: "", // hidden anti-spam field
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // Client-side quick check
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg("Please provide your name (at least 2 characters).");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMsg("Please describe your project or problem in at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSuccessMsg(
        data.message ||
          "Your inquiry has been submitted. Our team will review and reply within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        service: serviceOptions[0],
        budget: budgetRanges[0],
        timeline: timelineOptions[1],
        description: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to submit form. You can also email us directly.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-bg py-16 sm:py-20 transition-colors">
        <Container size="default">
          <div className="max-w-3xl">
            <Badge variant="accent">Discuss a Project</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Let&apos;s solve your problem together
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Tell us about what you want to build or what challenge your business faces. Our
              co-founders review every inquiry directly and respond within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Contact Info */}
      <Section background="surface">
        <Container size="default">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-text">Direct Contact</h2>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Prefer direct email over forms? Contact us directly. We welcome technical
                  questions, project scopes, and requests for private portfolio demos.
                </p>

                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex items-start gap-3 rounded-md border border-border bg-bg p-4">
                    <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-text">
                        Primary Inquiries Email
                      </strong>
                      <a
                        href="mailto:kolvedsp@gmail.com"
                        className="text-sm font-medium text-accent hover:underline break-all"
                      >
                        kolvedsp@gmail.com
                      </a>
                      <span className="block text-[11px] text-text-muted mt-0.5">
                        Delivers directly to the founding team
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md border border-border bg-bg p-4">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-text">
                        Location
                      </strong>
                      <span className="text-sm text-text font-medium">Sunsari, Nepal</span>
                      <span className="block text-[11px] text-text-muted mt-0.5">
                        Operating in Nepal Standard Time (UTC +5:45)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md border border-border bg-bg p-4">
                    <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-text">
                        Response Commitment
                      </strong>
                      <span className="text-sm text-text font-medium">Within 24 Hours</span>
                      <span className="block text-[11px] text-text-muted mt-0.5">
                        Detailed feedback on technical feasibility and scope
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrity Notice */}
              <div className="mt-10 rounded-md border border-border bg-bg p-5 text-xs text-text-muted">
                <div className="flex items-center gap-2 font-semibold text-text">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Privacy & Communication Guarantee</span>
                </div>
                <p className="mt-2 leading-relaxed">
                  Your project specifications, email, and files are kept strictly confidential. We
                  never share client inquiries or send marketing spam.
                </p>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-text">Project Inquiry Form</h3>
                <p className="mt-1 text-xs text-text-muted">
                  Fill out the details below. All fields with * are required.
                </p>

                {errorMsg && (
                  <div className="mt-6 flex items-start gap-3 rounded-md border border-error/20 bg-error/10 p-4 text-xs text-error">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {successMsg && (
                  <div className="mt-6 flex items-start gap-3 rounded-md border border-success/20 bg-success/10 p-4 text-xs text-success">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Inquiry Dispatched</strong>
                      <span>{successMsg}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Honeypot field (hidden from view) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Leave blank</label>
                    <input
                      id="honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-text">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Aayush Shrestha"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-text">
                        Your Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-text">
                      Primary Service Area *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="mt-1 block text-[11px] text-text-muted">
                      Select &quot;Not sure yet&quot; if you need help choosing the best technical approach.
                    </span>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-text">
                        Estimated Scope / Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-text">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        {timelineOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-text">
                      Project Description & Core Problem *
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      required
                      placeholder="Describe what you want to build, the problem you are solving, or key requirements..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Validating and Sending...</span>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-text-muted">
                      Or send an email directly to{" "}
                      <a href="mailto:kolvedsp@gmail.com" className="text-accent underline">
                        kolvedsp@gmail.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
