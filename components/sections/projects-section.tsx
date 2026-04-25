import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <span className="label-mono">My Work</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Projects
      </h2>
      <p className="mt-4 text-[var(--color-fg-muted)] max-w-xl">
        A selection of projects I&apos;ve built for clients and personal exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            live={project.live}
            github={project.github}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="https://github.com/Saroj9823Dangol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          View all on GitHub →
        </a>
      </div>
    </section>
  );
}
