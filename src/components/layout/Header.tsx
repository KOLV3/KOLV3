"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/Button";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; status?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website & Web Application Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Graphic Design & Visuals", href: "/services/graphic-design" },
      { label: "Video Editing", href: "/services/video-editing", status: "Coming Soon" },
      { label: "3D Visualization & Modeling", href: "/services/3d-visualization", status: "Coming Soon" },
    ],
  },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-text hover:text-accent transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-on-accent text-sm font-semibold">
            K
          </span>
          <span className="font-semibold tracking-wider">KOLVE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 py-2 text-sm transition-colors ${
                      pathname.startsWith(item.href)
                        ? "text-accent font-semibold"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72 z-50">
                      <div className="rounded-md border border-border bg-surface p-2 shadow-lg">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center justify-between rounded px-3 py-2 text-xs text-text transition-colors hover:bg-surface-muted hover:text-accent"
                          >
                            <span>{sub.label}</span>
                            {sub.status && (
                              <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[10px] font-normal text-text-muted">
                                {sub.status}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-sm transition-colors ${
                  isActive ? "text-accent font-semibold" : "text-text-muted hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact" size="sm" variant="primary">
            Discuss a Project
          </Button>
        </div>

        {/* Mobile Menu Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-focus-ring"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-4 py-6 shadow-xl transition-colors">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-base font-medium ${
                pathname === "/" ? "text-accent font-semibold" : "text-text"
              }`}
            >
              Home
            </Link>

            <div className="border-t border-border pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Services
              </span>
              <div className="mt-2 flex flex-col gap-2 pl-2">
                <Link
                  href="/services"
                  className="text-sm font-medium text-text hover:text-accent"
                >
                  All Services Overview
                </Link>
                {navItems[0]?.children?.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="flex items-center justify-between text-sm text-text-muted hover:text-text"
                  >
                    <span>{sub.label}</span>
                    {sub.status && (
                      <span className="text-[10px] text-text-muted bg-surface-muted px-1.5 py-0.5 rounded">
                        {sub.status}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/work"
              className={`border-t border-border pt-3 text-base font-medium ${
                pathname === "/work" ? "text-accent font-semibold" : "text-text"
              }`}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium ${
                pathname === "/about" ? "text-accent font-semibold" : "text-text"
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-base font-medium ${
                pathname === "/blog" ? "text-accent font-semibold" : "text-text"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium ${
                pathname === "/contact" ? "text-accent font-semibold" : "text-text"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-border">
              <Button href="/contact" variant="primary" className="w-full justify-center">
                Discuss a Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
