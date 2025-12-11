"use client";

import { motion } from "framer-motion";
import { Building, Calendar } from "lucide-react";
import { experience } from "@/data/experience";

export function ExperienceContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-jupiter-orange via-jupiter-orange/50 to-transparent" />

        <div className="space-y-8">
          {experience.map((exp, i) => {
            const isCurrent = exp.period.toLowerCase().includes("present");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    isCurrent
                      ? "bg-jupiter-orange border-jupiter-orange"
                      : "bg-background border-jupiter-orange/50"
                  }`}
                />

                <div className="glass rounded-xl p-6 hover:border-jupiter-orange/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl text-jupiter-orange">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-body">
                        <Building size={14} />
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground font-terminal text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
