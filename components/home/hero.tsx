import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-16"
      style={{
        background:
          "radial-gradient(ellipse 800px 400px at 50% 0%, hsl(38 100% 55% / 0.04), transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Availability label */}
        <span className="label-mono">Available for projects · Lalitpur, NP</span>

        {/* Headline */}
        <h1 className="hero-headline mt-4">
          <span className="font-display text-7xl leading-none tracking-tight block">
            I build software
          </span>
          <span className="font-display italic text-7xl leading-none tracking-tight block">
            that earns trust.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
          Senior engineer. MERN stack. React Native. AWS.{" "}
          Based in Nepal. Working worldwide.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-[var(--color-accent)] text-black font-medium rounded-lg px-6 py-3 text-base hover:opacity-90 transition-opacity"
          >
            Start Your Project →
          </Link>
          <a
            href="#projects"
            className="border border-[var(--color-border)] text-[var(--color-fg)] rounded-lg px-6 py-3 text-base hover:border-[var(--color-fg-muted)] transition-colors"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
