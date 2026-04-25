import Link from "next/link";
import { Globe, Smartphone, Server, Cloud, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies that scale with your business.",
    features: [
      "React & Next.js frontend development",
      "Node.js & NestJS backend APIs",
      "MongoDB & PostgreSQL databases",
      "Responsive, mobile-first design",
      "Performance optimization & SEO",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android apps using React Native with native performance.",
    features: [
      "React Native cross-platform apps",
      "iOS & Android deployment",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "App Store & Play Store submission",
    ],
  },
  {
    icon: Server,
    title: "Backend & API",
    description: "Scalable, secure backend systems and APIs that power your applications.",
    features: [
      "RESTful & GraphQL API design",
      "Authentication & authorization",
      "Database design & optimization",
      "Third-party API integrations",
      "Microservices architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS infrastructure and CI/CD pipelines that keep your applications running reliably.",
    features: [
      "AWS infrastructure setup",
      "Serverless architecture (Lambda)",
      "Docker & container deployment",
      "CI/CD pipeline implementation",
      "Monitoring & performance tuning",
    ],
  },
];

export default function ServicesSection() {
  return (
    <div className="pt-16">
      <section className="py-24 max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[{ name: "Services", url: "https://www.sarojdangol012.com.np/services" }]}
          className="mb-8"
        />
        <span className="label-mono">What I Offer</span>
        <h1 className="heading-display mt-2 text-4xl md:text-5xl text-[var(--color-fg)]">
          Services
        </h1>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)] max-w-2xl">
          Comprehensive IT development services for businesses in Nepal and worldwide. From concept to deployment.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <Icon size={28} className="text-[var(--color-accent)]" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-[var(--color-fg)]">{service.title}</h2>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)] leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                      <Check size={14} className="text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  Start a Project →
                </Link>
              </article>
            );
          })}
        </div>

        {/* Social proof strip */}
        <div className="mt-12 py-6 border-t border-b border-[var(--color-border)] flex flex-wrap gap-6 justify-center text-sm text-[var(--color-fg-muted)]">
          <span className="font-mono">9+ projects delivered</span>
          <span className="text-[var(--color-border)]">·</span>
          <span className="font-mono">3+ years experience</span>
          <span className="text-[var(--color-border)]">·</span>
          <span className="font-mono">AWS certified</span>
          <span className="text-[var(--color-border)]">·</span>
          <span className="font-mono">Nepal & worldwide</span>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="heading-display text-4xl text-[var(--color-fg)]">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)] max-w-xl mx-auto">
            Let&apos;s discuss your requirements and build something great together.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[var(--color-accent)] text-black font-medium rounded-lg px-8 py-4 text-base hover:opacity-90 transition-opacity"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
