"use client";

import { Cloud, Code, Database, Server } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "Prisma", level: 75 },
      ],
    },
  ];

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

      // Cards stagger animation
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate skill bars
      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        const level = bar.getAttribute("data-level");
        gsap.from(bar, {
          width: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Tags animation
      gsap.from(tagsRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: tagsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-black mb-6 text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills.json
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-xl">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <div
                key={categoryIndex}
                className="group glass-dark backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-smooth hover:scale-105 hover:shadow-glow magnetic overflow-hidden rounded-lg"
              >
                <div className="p-8">
                  {/* Category header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-glow`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-2xl">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium text-base">
                            {skill.name}
                          </span>
                          <span className="text-slate-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`skill-bar h-full bg-gradient-to-r ${category.color} rounded-full`}
                            data-level={skill.level}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Additional skills tags */}
        <div className="mt-16 text-center">
          <h3 className="font-bold text-white mb-8 text-xl">
            Also experienced with
          </h3>
          <div ref={tagsRef} className="flex flex-wrap justify-center gap-3">
            {[
              "Vue.js",
              "Laravel",
              "Firebase",
              "Vercel",
              "Netlify",
              "GitHub Actions",
              "Vite",
              "AI",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-dark text-slate-300 border border-slate-700 hover:border-cyan-500/50 transition-smooth hover:scale-105 hover:shadow-glow-cyan text-sm rounded-full magnetic"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
