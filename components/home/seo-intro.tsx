import Link from "next/link";

export default function SeoIntro() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="label-mono">About</span>
          <h2 className="heading-display mt-2 text-3xl text-[var(--color-fg)]">
            Top IT Developer in Nepal
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
            Saroj Dangol is a Senior Full Stack Developer and one of the best
            web developers in Nepal, based in Lalitpur (Patan), Kathmandu
            Valley. With 3+ years of professional experience, he delivers
            high-quality web applications, mobile apps, and cloud solutions for
            startups and businesses across Nepal and internationally.
          </p>
          <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
            Whether you need a freelance developer in Lalitpur, a reliable IT
            company partner in Nepal, or a MERN stack expert for your next
            project — Saroj brings the technical depth and business understanding
            to ship products that work.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
          >
            More about Saroj →
          </Link>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-mono text-[var(--color-fg-muted)] uppercase tracking-widest">
            Why hire a developer in Lalitpur, Nepal?
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[var(--color-accent)] mt-0.5">→</span>
              <span>
                <strong className="text-[var(--color-fg)]">Local expertise, global standards.</strong>{" "}
                Deep understanding of Nepal's business landscape combined with
                international development best practices.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-accent)] mt-0.5">→</span>
              <span>
                <strong className="text-[var(--color-fg)]">Full-service IT solutions.</strong>{" "}
                From web development and mobile apps to cloud infrastructure —
                one developer, complete ownership.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-accent)] mt-0.5">→</span>
              <span>
                <strong className="text-[var(--color-fg)]">Trusted by Nepal businesses.</strong>{" "}
                Projects delivered for clients in Kathmandu, Lalitpur, Bhaktapur,
                and beyond.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
