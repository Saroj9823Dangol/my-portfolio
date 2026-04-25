import Link from "next/link";
import { Globe, Smartphone, Server, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and Node.js.",
    href: "/services",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps using React Native.",
    href: "/services",
  },
  {
    icon: Server,
    title: "Backend & API",
    description: "Scalable RESTful and GraphQL APIs with NestJS and Node.js.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS infrastructure, serverless architecture, and CI/CD pipelines.",
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <span className="label-mono">What I Do</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Services
      </h2>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent-border)] transition-colors"
            >
              <Icon size={24} className="text-[var(--color-accent)]" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-[var(--color-fg)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-block text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
              >
                Learn more →
              </Link>
            </article>
          );
        })}
      </div>

      {/* View all link */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          View all services →
        </Link>
      </div>
    </section>
  );
}
