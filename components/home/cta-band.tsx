import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-[var(--color-surface)] border-t border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="heading-display text-4xl md:text-5xl text-[var(--color-fg)]">
          Ready to build something that works?
        </h2>
        <p className="mt-4 text-[var(--color-fg-muted)] max-w-xl mx-auto">
          Let&apos;s turn your idea into a product. Or reach out directly at{" "}
          <a
            href="mailto:hello@sarojdangol012.com.np"
            className="text-[var(--color-accent)] hover:opacity-80 transition-opacity"
          >
            hello@sarojdangol012.com.np
          </a>
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[var(--color-accent)] text-black font-medium rounded-lg px-8 py-4 text-base hover:opacity-90 transition-opacity"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
