import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <span className="label-mono">Career</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Experience
      </h2>

      <div className="mt-12 relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]" aria-hidden="true" />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="pl-8 relative">
              {/* Dot marker */}
              <div
                className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-[var(--color-fg)]">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-[var(--color-accent)] mt-0.5">
                {item.company}
              </p>
              <p className="font-mono text-xs text-[var(--color-fg-subtle)] mt-0.5">
                {item.period}
              </p>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
