"use client";

import type React from "react";

import { memo, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import type { PlanetId } from "@/lib/types";

const AboutContent = lazy(() =>
  import("./content/about-content").then((m) => ({ default: m.AboutContent }))
);
const ProjectsContent = lazy(() =>
  import("./content/projects-content").then((m) => ({
    default: m.ProjectsContent,
  }))
);
const SkillsContent = lazy(() =>
  import("./content/skills-content").then((m) => ({ default: m.SkillsContent }))
);
const ExperienceContent = lazy(() =>
  import("./content/experience-content").then((m) => ({
    default: m.ExperienceContent,
  }))
);
const ContactContent = lazy(() =>
  import("./content/contact-content").then((m) => ({
    default: m.ContactContent,
  }))
);
const BlogContent = lazy(() =>
  import("./content/blog-content").then((m) => ({ default: m.BlogContent }))
);
const CVContent = lazy(() =>
  import("./content/cv-content").then((m) => ({ default: m.CVContent }))
);
const SunContent = lazy(() =>
  import("./content/sun-content").then((m) => ({ default: m.SunContent }))
);

interface PlanetOverlayProps {
  activePlanet: PlanetId;
  onClose: () => void;
}

const PLANET_CONFIG: Record<
  Exclude<PlanetId, null>,
  {
    title: string;
    subtitle: string;
    color: string;
    Component: React.LazyExoticComponent<React.ComponentType>;
  }
> = {
  sun: {
    title: "Saroj Dangol",
    subtitle: "Fullstack Developer",
    color: "#fbbf24",
    Component: SunContent,
  },
  about: {
    title: "About",
    subtitle: "Earth-like Planet",
    color: "#3b82f6",
    Component: AboutContent,
  },
  projects: {
    title: "Projects",
    subtitle: "Mars Colony",
    color: "#ef4444",
    Component: ProjectsContent,
  },
  skills: {
    title: "Skills",
    subtitle: "Saturn Rings",
    color: "#8b5cf6",
    Component: SkillsContent,
  },
  experience: {
    title: "Experience",
    subtitle: "Jupiter Station",
    color: "#f97316",
    Component: ExperienceContent,
  },
  contact: {
    title: "Contact",
    subtitle: "Neptune Outpost",
    color: "#06b6d4",
    Component: ContactContent,
  },
  blog: {
    title: "Blog",
    subtitle: "Satellite Feed",
    color: "#94a3b8",
    Component: BlogContent,
  },
  cv: {
    title: "Download CV",
    subtitle: "Resume Document",
    color: "#10b981",
    Component: CVContent,
  },
};

function ContentLoader() {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export const PlanetOverlay = memo(function PlanetOverlay({
  activePlanet,
  onClose,
}: PlanetOverlayProps) {
  if (!activePlanet) return null;

  const config = PLANET_CONFIG[activePlanet];
  const { Component } = config;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-30 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="planet-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="absolute inset-4 md:inset-8 lg:inset-12 glass rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header
            className="relative px-6 py-3.5 border-b border-border"
            style={{
              background: `linear-gradient(90deg, ${config.color}08 0%, transparent 100%)`,
            }}
          >
            <button
              onClick={onClose}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-muted-foreground hover:text-foreground"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
              <span className="font-terminal text-xs hidden sm:inline">
                ESC
              </span>
            </button>

            <div className="text-center">
              <h2
                id="planet-title"
                className="font-display text-xl md:text-2xl tracking-wider"
                style={{ color: config.color }}
              >
                {config.title}
              </h2>
              <p className="font-terminal text-xs text-muted-foreground">
                {config.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X
                size={18}
                className="text-muted-foreground hover:text-foreground"
              />
            </button>
          </header>

          {/* Content */}
          <div className="h-[calc(100%-60px)] overflow-y-auto p-5 md:p-6 terminal-scrollbar">
            <Suspense fallback={<ContentLoader />}>
              <Component />
            </Suspense>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});
