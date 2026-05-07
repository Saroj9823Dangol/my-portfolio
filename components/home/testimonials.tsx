import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--color-border)]">
      <div className="text-center mb-16">
        <span className="label-mono">Trust Signals</span>
        <h2 className="heading-display mt-2 text-3xl md:text-4xl text-[var(--color-fg)]">
          What Clients Say
        </h2>
        <p className="mt-4 text-[var(--color-fg-muted)] max-w-xl mx-auto">
          Trusted by businesses in Nepal and across the globe for high-quality IT development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col h-full"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="var(--color-accent)"
                  className="text-[var(--color-accent)]"
                />
              ))}
            </div>
            <p className="text-[var(--color-fg-muted)] italic leading-relaxed flex-grow">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <span className="block font-semibold text-[var(--color-fg)]">
                {testimonial.name}
              </span>
              <span className="block text-xs text-[var(--color-fg-muted)] mt-1">
                {testimonial.role} · {testimonial.location}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
