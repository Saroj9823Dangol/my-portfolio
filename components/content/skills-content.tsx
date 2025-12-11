"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, memo, useCallback } from "react";
import { skills } from "@/data/skills";

// Solar System Skills Implementation

const SkillPlanet = memo(function SkillPlanet({
  skill,
  orbitRadius,
  angle,
  speed,
  color,
  isSelected,
  onClick,
  onHover,
  onLeave,
}: {
  skill: any;
  orbitRadius: number;
  angle: number;
  speed: number;
  color: string;
  isSelected: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-10"
      initial={{ rotate: angle }}
      animate={{ rotate: angle + 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        x: "-50%",
        y: "-50%",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <motion.div
          // Counter rotate to keep icon upright
          initial={{ rotate: -angle }}
          animate={{ rotate: -(angle + 360) }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className={`relative flex items-center justify-center rounded-full bg-background border transition-all duration-300 ${
              isSelected ? "border-2 scale-110" : "border-transparent"
            }`}
            style={{
              width: 50,
              height: 50,
              borderColor: isSelected ? color : "transparent",
              backgroundColor: "#0f172a", // Solid dark background for contrast
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon && (
              <skill.icon
                className="w-6 h-6 transition-all duration-300"
                style={{ color: isSelected ? color : "#94a3b8" }}
              />
            )}
          </motion.div>
        </motion.div>

        {/* CSS-based Tooltip to avoid render lag in animation */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
          <div className="px-2 py-1 rounded bg-black/80 border border-white/10 text-xs font-terminal text-white whitespace-nowrap">
            {skill.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export function SkillsContent() {
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(
    null
  );

  // Group skills into orbits
  const orbits = [
    { radius: 100, speed: 25, skills: skills.slice(0, 3), color: "#8b5cf6" }, // Inner
    { radius: 180, speed: 40, skills: skills.slice(3, 6), color: "#ec4899" }, // Middle
    { radius: 260, speed: 60, skills: skills.slice(6), color: "#3b82f6" }, // Outer
  ];

  const selectedSkillData = skills.find((s) => s.name === selectedSkillName);

  const handleBackgroundClick = useCallback(() => {
    setSelectedSkillName(null);
  }, []);

  return (
    <div
      className="w-full min-h-[700px] relative flex flex-col items-center justify-center overflow-hidden py-10"
      onClick={handleBackgroundClick}
    >
      {/* Detail Overlay Card */}
      <AnimatePresence>
        {selectedSkillData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute z-30 pointer-events-none flex flex-col items-center text-center p-6 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl max-w-xs"
            style={{ top: "60%" }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-1">
              {selectedSkillData.name}
            </h3>
            <div className="w-full bg-white/10 h-1 rounded-full mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${selectedSkillData.level}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <p className="font-terminal text-xs text-muted-foreground mb-4">
              Proficiency Level:{" "}
              <span className="text-white">{selectedSkillData.level}%</span>
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Core technology in my development stack.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center"
        style={{ width: 600, height: 600 }}
      >
        {/* Central Star (Tech Core) - Simplified */}
        <motion.div
          className="absolute z-10 w-28 h-28 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center cursor-pointer group hover:border-slate-500 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSkillName(null);
          }}
        >
          <div className="text-center">
            <span className="font-display font-bold text-white text-xl block tracking-wider">
              CORE
            </span>
            <span className="font-terminal text-[10px] text-slate-400 tracking-[0.2em]">
              SYSTEM
            </span>
          </div>
        </motion.div>

        {/* Orbits */}
        {orbits.map((orbit, orbitIndex) => (
          <div
            key={orbitIndex}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Orbital path line - Faint, no dashed, simple */}
            <div
              className="absolute rounded-full border border-white/5"
              style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
            />

            {/* Planets in this orbit */}
            {orbit.skills.map((skill, i) => {
              const angleStep = 360 / orbit.skills.length;
              const startAngle = angleStep * i;
              const isSelected = selectedSkillName === skill.name;

              return (
                <SkillPlanet
                  key={skill.name}
                  skill={skill}
                  orbitRadius={orbit.radius}
                  angle={startAngle}
                  speed={orbit.speed}
                  color={orbit.color}
                  isSelected={isSelected}
                  onHover={() => {}}
                  onLeave={() => {}}
                  onClick={() => setSelectedSkillName(skill.name)}
                />
              );
            })}
          </div>
        ))}
      </motion.div>

      <div className="mt-12 text-center max-w-md mx-auto z-10 pointer-events-none opacity-50">
        <p className="font-terminal text-[10px] text-muted-foreground uppercase tracking-widest">
          Click nodes to analyze
        </p>
      </div>
    </div>
  );
}
