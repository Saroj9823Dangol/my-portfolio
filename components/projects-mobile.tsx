"use client";

import type React from "react";

import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProjectsMobile() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Lowered threshold for better triggering
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
    if (isRightSwipe && currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2
              className={`font-black mb-6 ${
                isMobile ? "text-4xl" : "text-6xl"
              }`}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FEATURED PROJECTS
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
            <p
              className={`text-gray-400 mt-6 max-w-3xl mx-auto ${
                isMobile ? "text-base" : "text-xl"
              }`}
            >
              A showcase of my recent work and technical expertise
            </p>
          </div>

          {isMobile ? (
            // Mobile: Card-based swipe interface
            <div className="relative">
              <div className="mb-4 text-center text-sm text-gray-400">
                Swipe left/right to browse projects
              </div>

              <div
                className="relative overflow-hidden rounded-2xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(-${currentProject * 100}%)`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div
                        className={`bg-gradient-to-br ${project.color} p-1 rounded-2xl`}
                      >
                        <div className="bg-slate-900 rounded-2xl overflow-hidden">
                          {/* Project image */}
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

                          {/* Project content */}
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

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs border border-slate-700"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-3 pt-2">
                              <a
                                target="_blank"
                                href={project.github}
                                className="flex-1 flex items-center justify-center px-4 py-3 bg-slate-800 text-white rounded-lg transition-all duration-300 active:scale-95"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                              <a
                                target="_blank"
                                href={project.live}
                                className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 active:scale-95`}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevProject}
                  disabled={currentProject === 0}
                  className="p-3 bg-slate-800/50 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="text-gray-400 text-sm">
                  {currentProject + 1} of {projects.length}
                </span>

                <button
                  onClick={nextProject}
                  disabled={currentProject === projects.length - 1}
                  className="p-3 bg-slate-800/50 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Desktop: Keep the original carousel design
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  } ${isVisible ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                      <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
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
                              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors duration-300"
                            >
                              <Github className="h-5 w-5 text-white" />
                            </a>
                            <a
                              target="_blank"
                              href={project.live}
                              className="p-3 bg-blue-600/80 backdrop-blur-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
                            >
                              <ExternalLink className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
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
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        target="_blank"
                        href={project.github}
                        className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        Code
                      </a>
                      <a
                        target="_blank"
                        href={project.live}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-300 hover:scale-105`}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
