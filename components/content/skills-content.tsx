"use client";

import { motion } from "framer-motion";
import { useState, memo } from "react";
import { skills } from "@/data/skills";

const SkillBar = memo(function SkillBar({
  name,
  level,
  delay,
  isVisible,
  Icon,
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
  Icon: any;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-saturn-purple" />}
          <span className="font-terminal text-sm text-foreground">{name}</span>
        </div>
        <span className="font-terminal text-xs text-muted-foreground tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-secondary/40 rounded-full overflow-hidden">
        {/* Glow effect */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          className="absolute h-2 rounded-full blur-sm"
          style={{ backgroundColor: "#8b5cf6", opacity: 0.4 }}
        />
        {/* Main bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          className="h-full rounded-full relative bg-gradient-to-r from-saturn-purple to-purple-400"
        >
          {/* Shine animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 4,
              delay: delay + 0.6,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
});

const SkillsPlanetDecor = memo(function SkillsPlanetDecor() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="relative h-40 flex items-center justify-center mt-8"
    >
      {/* Planet core */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"
        style={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Rings */}
      {[1, 2, 3].map((ring, i) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border"
          style={{
            width: 80 + ring * 28,
            height: 20 + ring * 5,
            borderColor: `rgba(139, 92, 246, ${0.5 - i * 0.12})`,
            transform: `rotateX(70deg) rotateZ(${-12 + i * 3}deg)`,
          }}
          animate={{ rotateZ: [-12 + i * 3, -10 + i * 3, -12 + i * 3] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Orbiting dots */}
      {[0, 1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="absolute w-1.5 h-1.5 rounded-full bg-purple-300"
          style={{ boxShadow: "0 0 6px rgba(139, 92, 246, 0.6)" }}
          animate={{
            x: [
              Math.cos((dot * Math.PI) / 2) * 70,
              Math.cos((dot * Math.PI) / 2 + Math.PI) * 70,
            ],
            y: [
              Math.sin((dot * Math.PI) / 2) * 18,
              Math.sin((dot * Math.PI) / 2 + Math.PI) * 18,
            ],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 6 + dot,
            repeat: Infinity,
            ease: "linear",
            delay: dot * 0.4,
          }}
        />
      ))}

      <p className="absolute -bottom-1 font-terminal text-xs text-muted-foreground">
        Skills in constant orbit
      </p>
    </motion.div>
  );
});

export function SkillsContent() {
  const [isVisible] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-2xl text-foreground mb-2">
          Technical Constellation
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Core technologies and expertise
        </p>
      </motion.div>

      {/* Skills list */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-6 space-y-4"
      >
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 0.1}
            isVisible={isVisible}
            Icon={skill.icon}
          />
        ))}
      </motion.div>

      {/* Decorative planet */}
      <SkillsPlanetDecor />
    </div>
  );
}
