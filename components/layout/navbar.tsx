"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-sm border-b border-[var(--color-border)] bg-[var(--color-bg)]/80"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-body font-semibold text-lg text-[var(--color-fg)] hover:opacity-80 transition-opacity"
          >
            Saroj Dangol
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm transition-colors",
                    isActive
                      ? "text-[var(--color-fg)]"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Saroj_Dangol_CV.pdf"
              download
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="bg-[var(--color-accent)] text-black font-medium rounded-lg px-4 py-2 text-sm hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <span
              className={[
                "block w-5 h-0.5 bg-[var(--color-fg)] transition-transform duration-200",
                isOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-0.5 bg-[var(--color-fg)] transition-opacity duration-200",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-0.5 bg-[var(--color-fg)] transition-transform duration-200",
                isOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        style={{ display: isOpen ? "block" : "none" }}
        className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "py-2 text-sm transition-colors",
                  isActive
                    ? "text-[var(--color-fg)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-[var(--color-border)] flex flex-col gap-3">
            <a
              href="/Saroj_Dangol_CV.pdf"
              download
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-accent)] text-black font-medium rounded-lg px-4 py-2 text-sm hover:opacity-90 transition-opacity w-full"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
