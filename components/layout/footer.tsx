import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaUpwork, FaFacebook } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Saroj9823Dangol",
    icon: <Github size={18} aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/er-saroj-dangol-9492bb216",
    icon: <Linkedin size={18} aria-hidden="true" />,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01a78d9a0751fb1801",
    icon: <FaUpwork size={18} aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebook size={18} aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-surface)] border-t border-[var(--color-border)]"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row: logo + social links */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-semibold text-base text-[var(--color-fg)] hover:opacity-80 transition-opacity"
            >
              Saroj Dangol
            </Link>
            <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
              IT Developer · Lalitpur, Nepal
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links row */}
        <nav
          aria-label="Footer navigation"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Saroj_Dangol_CV.pdf"
            download
            className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
          >
            CV
          </a>
        </nav>

        {/* Bottom row: copyright + email */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-[var(--color-fg-subtle)]">
            © 2025 Saroj Dangol
          </p>
          <a
            href="mailto:hello@sarojdangol012.com.np"
            className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)] transition-colors"
          >
            hello@sarojdangol012.com.np
          </a>
        </div>
      </div>
    </footer>
  );
}
