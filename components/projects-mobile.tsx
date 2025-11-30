"use client";

import { projects } from "@/data/projects";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Projects stagger animation
      gsap.from(projectsRef.current?.children || [], {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-black mb-6 text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects.showcase()
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto md:text-xl text-base">
            Innovative solutions that push the boundaries of what's possible
          </p>
        </div>
        <div ref={projectsRef} className="space-y-20">
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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile && cardRef.current) {
      const image = cardRef.current.querySelector(".project-image");

      // Parallax effect on image
      gsap.to(image, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-full sm:hidden">
        <div className={`bg-gradient-to-br ${project.color} p-1 rounded-lg`}>
          <div className="bg-slate-900 overflow-hidden rounded-lg">
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
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs border border-slate-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 pt-2">
                <a
                  target="_blank"
                  href={project.github}
                  className="flex-1 flex items-center justify-center px-4 py-3 glass-dark text-white transition-smooth active:scale-95 rounded-lg"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  target="_blank"
                  href={project.live}
                  className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.color} text-white transition-smooth active:scale-95 rounded-lg`}
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
      ref={cardRef}
      className={`hidden sm:grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <div
        className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
        ></div>
        <div className="relative glass-dark overflow-hidden border border-slate-700 group-hover:border-slate-600 transition-smooth rounded-lg shadow-glow hover:shadow-glow-cyan">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="project-image w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <div className="flex space-x-4">
              <a
                target="_blank"
                href={project.github}
                className="p-3 glass-dark backdrop-blur-sm hover:shadow-glow-cyan transition-smooth rounded-lg magnetic"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                target="_blank"
                href={project.live}
                className="p-3 bg-cyan-600/80 backdrop-blur-sm hover:bg-cyan-700 transition-smooth rounded-lg magnetic"
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
              className="px-3 py-1 glass-dark text-slate-300 text-sm border border-slate-700 hover:border-cyan-500/50 transition-smooth rounded-full magnetic"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            target="_blank"
            href={project.github}
            className="inline-flex items-center px-6 py-3 glass-dark hover:shadow-glow-cyan text-white transition-smooth hover:scale-105 rounded-lg magnetic"
          >
            <Github className="h-5 w-5 mr-2" />
            Code
          </a>
          <a
            target="_blank"
            href={project.live}
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white transition-smooth hover:scale-105 rounded-lg magnetic shadow-glow`}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
