"use client";

import { projects } from "@/data/projects";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 opacity-100 translate-y-0`}
        >
          <div className="text-center mb-16">
            <h2 className={`font-black mb-6 text-3xl md:text-5xl`}>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects.showcase()
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
            <p
              className={`text-gray-400 mt-6 max-w-3xl mx-auto md:text-xl text-base`}
            >
              Innovative solutions that push the boundaries of what's possible
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isMobile,
}: {
  project: (typeof projects)[0];
  index: number;
  isMobile: boolean;
}) {
  if (isMobile) {
    return (
      <div className="w-full sm:hidden">
        <div className={`bg-gradient-to-br ${project.color} p-1`}>
          <div className="bg-slate-900 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 pt-2">
                <a
                  target="_blank"
                  href={project.github}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-slate-800 text-white transition-all duration-300 active:scale-95"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  target="_blank"
                  href={project.live}
                  className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.color} text-white transition-all duration-300 active:scale-95`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`hidden sm:grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
        ></div>
        <div className="relative bg-slate-800 overflow-hidden border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <div className="flex space-x-4">
              <a
                target="_blank"
                href={project.github}
                className="p-3 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 transition-colors duration-300"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                target="_blank"
                href={project.live}
                className="p-3 bg-blue-600/80 backdrop-blur-sm hover:bg-blue-700 transition-colors duration-300"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href={project.github}
            className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5 mr-2" />
            Code
          </a>
          <a
            target="_blank"
            href={project.live}
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white transition-all duration-300 hover:scale-105`}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
