import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-border bg-surface transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-text hover:text-accent transition-colors"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-on-accent text-xs font-semibold">
                K
              </span>
              <span>KOLVE</span>
            </Link>
            <p className="mt-3 text-xs font-medium text-text-muted">
              Digital Service Provider
            </p>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Real problems. Practical solutions. Built with purpose.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Sunsari, Nepal
              </span>
              <a
                href="mailto:kolvedsp@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-text transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                kolvedsp@gmail.com
              </a>
            </div>
          </div>

          {/* Active Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Website & Web Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Graphic Design & Visuals
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-text-muted opacity-75">
                  Video Editing
                  <span className="text-[10px] bg-surface-muted px-1.5 py-0.5 rounded border border-border">
                    Soon
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-text-muted opacity-75">
                  3D Modeling & Visualization
                  <span className="text-[10px] bg-surface-muted px-1.5 py-0.5 rounded border border-border">
                    Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company & Team */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  About Us & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Our Work & Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Discuss a Project
                </Link>
              </li>
            </ul>

            <div className="mt-5 border-t border-border pt-4">
              <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
                Co-Founders
              </span>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Ushant Giri, Sandesh Sunar, Bhishan Katwal, Jeshis Jamarkatel
              </p>
            </div>
          </div>

          {/* Legal & Operations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text">
              Legal & Trust
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-muted hover:text-text transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-md border border-border bg-bg p-3">
              <span className="block text-xs font-semibold text-text">
                Direct Inquiries
              </span>
              <p className="mt-1 text-xs text-text-muted">
                Reach us directly at{" "}
                <a
                  href="mailto:kolvedsp@gmail.com"
                  className="text-accent underline hover:opacity-80"
                >
                  kolvedsp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} KOLVE. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Your problem, our solution.
          </p>
        </div>
      </div>
    </footer>
  );
}
