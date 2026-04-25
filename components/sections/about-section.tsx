import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { experience } from "@/data/experience";

const stats = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "9+ Projects" },
  { label: "Technologies", value: "10+ Technologies" },
  { label: "Location", value: "Lalitpur, Nepal" },
];

export default function AboutSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <Breadcrumbs
        items={[
          {
            name: "About",
            url: "https://www.sarojdangol012.com.np/about",
          },
        ]}
        className="mb-8"
      />

      <span className="label-mono">About</span>
      <h1 className="heading-display mt-4 text-4xl md:text-5xl text-[var(--color-fg)]">
        About Saroj Dangol
      </h1>

      {/* GEO Answer Block */}
      <div id="about-saroj" className="mt-8 space-y-4 max-w-2xl">
        <p className="text-[var(--color-fg-muted)] leading-relaxed">
          Saroj Dangol is a Senior Full Stack Developer based in Lalitpur,
          Bagmati, Nepal, with over 3 years of professional experience building
          web and mobile applications.
        </p>
        <p className="text-[var(--color-fg-muted)] leading-relaxed">
          He specialises in the MERN stack (MongoDB, Express.js, React,
          Node.js), React Native mobile development, and AWS cloud
          infrastructure. He has delivered 9+ projects for clients in Nepal and
          internationally.
        </p>
        <p className="text-[var(--color-fg-muted)] leading-relaxed">
          Currently working at Marichitech AI and AppTechnologies, Saroj is
          available for freelance web development, mobile app development, and
          cloud consulting projects worldwide.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-surface)] text-center"
          >
            <p className="font-mono text-2xl font-medium text-[var(--color-accent)]">{stat.value}</p>
            <p className="text-sm text-[var(--color-fg-muted)] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="mt-16">
        <h2 className="heading-display text-2xl text-[var(--color-fg)] mb-8">Experience</h2>
        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[var(--color-border)]">
          {experience.map((item, index) => (
            <div
              key={index}
              className="pl-8 relative before:absolute before:left-[-4px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-[var(--color-accent)]"
            >
              <h3 className="font-semibold text-[var(--color-fg)]">{item.title}</h3>
              <p className="text-[var(--color-accent)] text-sm mt-0.5">{item.company}</p>
              <p className="font-mono text-xs text-[var(--color-fg-subtle)] mt-0.5">
                {item.period}
              </p>
              <p className="text-[var(--color-fg-muted)] text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <h2 className="heading-display text-2xl text-[var(--color-fg)] mb-6">Education</h2>
        <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-surface)]">
          <h3 className="font-semibold text-[var(--color-fg)]">Computer Engineering</h3>
          <p className="text-[var(--color-accent)] text-sm mt-0.5">Kantipur Engineering College, Tribhuvan University</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-black rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Work with Saroj →
        </Link>
      </div>
    </section>
  );
}
