"use client";

import { experience } from "@/data/experience";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

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

      // Experience items stagger animation
      gsap.from(itemsRef.current?.children || [], {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-black mb-6 text-3xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience.log
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>
        <div ref={itemsRef} className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={exp.title}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-glow-cyan"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 last:hidden"></div>
              <div className="glass-dark backdrop-blur-sm border border-white/10 shadow-md p-4 sm:p-6 rounded-lg hover:shadow-glow-cyan transition-smooth hover:scale-105 magnetic">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-cyan-400 font-medium text-sm sm:text-base font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-purple-400 font-medium mb-3 text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-gray-300 text-sm sm:text-base font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
