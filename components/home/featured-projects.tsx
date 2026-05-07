import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Sajilo Ride Sharing",
    description:
      "Google Maps-based ride sharing platform with fare calculations, live location tracking, and real-time ride requests.",
    image: "/images/sajilosaathi.webp",
    technologies: ["React", "Node.js", "Google Maps API"],
    live: "https://sajilosathi.com/",
  },
  {
    title: "LAURE",
    description:
      "Official website of celebrity singer and rapper LAURE, featuring music releases, tour dates, merchandise, and exclusive content.",
    image: "/images/laure.webp",
    technologies: ["Laravel", "Node.js", "Mysql", "Tailwind CSS"],
    live: "https://akalaure.com/",
  },
  {
    title: "Hamro Blood Bank",
    description:
      "A real-time blood donation platform with donor notifications, location-based search, and mobile app integration.",
    image: "/images/hbb.webp",
    technologies: ["React", "Next.js", "React Native", "Firebase", "MySQL"],
    live: "https://hamrobloodbank.com",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <span className="label-mono">Featured Work</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Projects that ship
      </h2>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-accent-border)] transition-colors"
          >
            {/* Project image */}
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={338}
              className="w-full object-cover"
            />

            {/* Card body */}
            <div className="p-5">
              <h3 className="text-base font-semibold text-[var(--color-fg)]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)] line-clamp-2">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live link */}
              <div className="mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                >
                  View Live →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
