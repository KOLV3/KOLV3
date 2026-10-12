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
  Copy,
  Check,
  ExternalLink,
  RotateCcw,
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
  const [copied, setCopied] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<{
    name: string;
    email: string;
    service: string;
    budget: string;
    timeline: string;
    description: string;
    sentViaApi: boolean;
  } | null>(null);

  const generateMailtoLink = (data: typeof formData) => {
    const subject = encodeURIComponent(`[KOLVE Project Inquiry] ${data.service} - ${data.name}`);
    const body = encodeURIComponent(
      `Hello KOLVE Co-Founders,\n\nI would like to discuss a project with your team.\n\n` +
        `Project Summary:\n` +
        `- Client Name: ${data.name}\n` +
        `- Email: ${data.email}\n` +
        `- Primary Service Area: ${data.service}\n` +
        `- Estimated Scope / Budget: ${data.budget}\n` +
        `- Desired Timeline: ${data.timeline}\n\n` +
        `Project Description & Problem Statement:\n` +
        `${data.description}\n\n` +
        `Best regards,\n${data.name}`
    );
    return `mailto:kolvedsp@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyBriefToClipboard = async () => {
    if (!submittedBrief) return;
    const text =
      `KOLVE PROJECT INQUIRY BRIEF\n` +
      `---------------------------\n` +
      `Name: ${submittedBrief.name}\n` +
      `Email: ${submittedBrief.email}\n` +
      `Service: ${submittedBrief.service}\n` +
      `Scope/Budget: ${submittedBrief.budget}\n` +
      `Timeline: ${submittedBrief.timeline}\n\n` +
      `Description:\n${submittedBrief.description}\n`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Anti-spam honeypot
    if (formData.honeypot.trim() !== "") {
      setErrorMsg("Spam detected. Submission ignored.");
      return;
    }

    // Client-side validation
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

    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    let deliveredViaWeb3Forms = false;

    // If Web3Forms access key is configured, post directly to Web3Forms API
    if (web3formsKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: `[KOLVE Project Inquiry] ${formData.service} from ${formData.name}`,
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.description.trim(),
            from_name: "KOLVE Official Website",
          }),
        });

        const result = await response.json();
        if (result.success) {
          deliveredViaWeb3Forms = true;
        }
      } catch {
        // Fall through gracefully to direct dispatch without showing 404
      }
    }

    // Set submitted brief state
    setSubmittedBrief({
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      description: formData.description.trim(),
      sentViaApi: deliveredViaWeb3Forms,
    });

    // If Web3Forms was not active, trigger pre-filled email client helper automatically
    if (!deliveredViaWeb3Forms) {
      const mailtoUrl = generateMailtoLink(formData);
      window.location.href = mailtoUrl;
    }

    setLoading(false);
  };

  const handleReset = () => {
    setSubmittedBrief(null);
    setFormData({
      name: "",
      email: "",
      service: serviceOptions[0],
      budget: budgetRanges[0],
      timeline: timelineOptions[1],
      description: "",
      honeypot: "",
    });
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
                  Prefer direct communication over forms? Email us anytime. We welcome technical
                  questions, project scopes, and requests for private portfolio walkthroughs.
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
                        Delivers directly to all four co-founders
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
                        Direct co-founder assessment of feasibility and scope
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
                  Your project specifications, email, and ideas remain strictly confidential. We
                  never share client inquiries, sell contact data, or send marketing spam.
                </p>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form / Submission State */}
            <div className="lg:col-span-7">
              <div className="rounded-md border border-border bg-bg p-6 sm:p-8 shadow-sm">
                {!submittedBrief ? (
                  <>
                    <h3 className="text-xl font-bold text-text">Project Inquiry Form</h3>
                    <p className="mt-1 text-xs text-text-muted">
                      Fill out your project details. All fields marked with * are required.
                    </p>

                    {errorMsg && (
                      <div className="mt-6 flex items-start gap-3 rounded-md border border-error/20 bg-error/10 p-4 text-xs text-error">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
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
                          onChange={(e) =>
                            setFormData({ ...formData, honeypot: e.target.value })
                          }
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
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
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
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
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
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="mt-1 block text-[11px] text-text-muted">
                          Select &quot;Not sure yet&quot; if you need guidance scoping the problem.
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
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
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
                            onChange={(e) =>
                              setFormData({ ...formData, timeline: e.target.value })
                            }
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
                        <label
                          htmlFor="description"
                          className="block text-xs font-semibold text-text"
                        >
                          Project Description & Core Problem *
                        </label>
                        <textarea
                          id="description"
                          rows={5}
                          required
                          placeholder="Describe what you want to build, the practical problem you are solving, or key requirements..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
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
                            <span>Preparing Submission...</span>
                          ) : (
                            <>
                              <span>Submit Project Inquiry</span>
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>
                        <p className="mt-2.5 text-center text-[11px] text-text-muted">
                          Or reach out directly via{" "}
                          <a href="mailto:kolvedsp@gmail.com" className="text-accent underline font-medium">
                            kolvedsp@gmail.com
                          </a>
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Form Success & Structured Brief View */
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 rounded-md border border-success/30 bg-success/10 p-4 text-success">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm">
                          {submittedBrief.sentViaApi
                            ? "Inquiry Sent to KOLVE Co-Founders"
                            : "Inquiry Brief Generated Successfully"}
                        </h4>
                        <p className="mt-1 text-xs text-text-muted">
                          {submittedBrief.sentViaApi
                            ? "Your project details were delivered directly to kolvedsp@gmail.com. Our co-founders will review and reply within 24 hours."
                            : "Your email client was opened with your pre-filled inquiry. You can also copy your formatted brief below."}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-md border border-border bg-surface p-4 text-xs space-y-2.5">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-muted">Client Name:</span>
                        <span className="font-semibold text-text">{submittedBrief.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-muted">Email:</span>
                        <span className="font-semibold text-text">{submittedBrief.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-muted">Service Area:</span>
                        <span className="font-semibold text-text">{submittedBrief.service}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-muted">Scope / Budget:</span>
                        <span className="font-semibold text-text">{submittedBrief.budget}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-muted">Timeline:</span>
                        <span className="font-semibold text-text">{submittedBrief.timeline}</span>
                      </div>
                      <div className="pt-1">
                        <span className="block text-text-muted mb-1">Description:</span>
                        <p className="rounded bg-bg p-2.5 text-text leading-relaxed whitespace-pre-wrap border border-border">
                          {submittedBrief.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        type="button"
                        onClick={copyBriefToClipboard}
                        className="inline-flex items-center gap-1.5 rounded border border-border bg-surface px-4 py-2 text-xs font-semibold text-text hover:bg-surface-muted transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 text-success" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 text-accent" />
                            <span>Copy Brief to Clipboard</span>
                          </>
                        )}
                      </button>

                      <a
                        href={generateMailtoLink(formData)}
                        className="inline-flex items-center gap-1.5 rounded bg-accent px-4 py-2 text-xs font-semibold text-on-accent hover:bg-accent-hover transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Open Email to kolvedsp@gmail.com</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-2 text-xs text-text-muted hover:text-text transition-colors"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
