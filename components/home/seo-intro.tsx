import Link from "next/link";

export default function SeoIntro() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="label-mono">About</span>
          <h2 className="heading-display mt-2 text-3xl text-[var(--color-fg)]">
            Best Individual IT Developer in Nepal
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
            Saroj Dangol is a Senior Full Stack Developer and the best
            individual website developer in Nepal, based in Lalitpur (Patan),
            Kathmandu Valley. With 3+ years of professional experience, he
            delivers high-quality website development, mobile apps, and cloud
            solutions for startups and businesses across Nepal and
            internationally.
          </p>
          <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
            Whether you need a freelance IT developer in Lalitpur, a reliable
            partner in Nepal, or a MERN stack expert for your next project —
            Saroj brings the technical depth and business understanding to ship
            products that work.
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
                <strong className="text-[var(--color-fg)]">
                  Lalitpur & Kathmandu expertise.
                </strong>{" "}
                Deep understanding of Nepal&apos;s business landscape from
                Jawalakhel to Durbar Marg, combined with international
                standards.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-accent)] mt-0.5">→</span>
              <span>
                <strong className="text-[var(--color-fg)]">
                  Full-service Individual solutions.
                </strong>{" "}
                From website development and mobile apps to cloud
                infrastructure — one dedicated developer, complete ownership.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-accent)] mt-0.5">→</span>
              <span>
                <strong className="text-[var(--color-fg)]">
                  Trusted by Nepal businesses.
                </strong>{" "}
                Successful projects delivered for clients in Kathmandu Valley,
                Bhaktapur, and the global tech community.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
