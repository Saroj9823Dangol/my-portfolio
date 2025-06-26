import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            {"Featured Projects".split("").map((char, i) => (
              <span key={i} className="wavy-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image with Link */}
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {/* GitHub Link */}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                    </Link>

                    {/* Live Demo Link (conditionally rendered) */}
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={`Visit ${project.title} live demo`}
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base font-light">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-700 dark:bg-cyan-500/10 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/30 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
