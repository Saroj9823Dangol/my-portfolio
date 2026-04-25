import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import TechTag from "./tech-tag";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  live?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  technologies,
  live,
  github,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-accent-border)] transition-colors">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`${title} — ${subtitle}`}
          width={600}
          height={338}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-[var(--color-fg)]">{title}</h3>
        <p className="font-mono text-xs text-[var(--color-fg-muted)] mt-0.5">{subtitle}</p>
        <p className="mt-2 text-sm text-[var(--color-fg-muted)] line-clamp-2 leading-relaxed">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              <Github size={14} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
