"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  TerminalIcon,
  Home,
  User,
  Code,
  Briefcase,
  Building,
  Mail,
  BookOpen,
  FileDown,
} from "lucide-react";
import type { PlanetId } from "@/lib/types";

interface FloatingNavProps {
  onNavigate: (planetId: PlanetId) => void;
  activePlanet: PlanetId;
  onToggleTerminal: () => void;
  terminalOpen: boolean;
}

const NAV_ITEMS = [
  { id: null as PlanetId, icon: Home, label: "Home", color: "#fbbf24" },
  { id: "about" as PlanetId, icon: User, label: "About", color: "#3b82f6" },
  {
    id: "projects" as PlanetId,
    icon: Code,
    label: "Projects",
    color: "#ef4444",
  },
  {
    id: "skills" as PlanetId,
    icon: Briefcase,
    label: "Skills",
    color: "#8b5cf6",
  },
  {
    id: "experience" as PlanetId,
    icon: Building,
    label: "Experience",
    color: "#f97316",
  },
  { id: "contact" as PlanetId, icon: Mail, label: "Contact", color: "#06b6d4" },
  { id: "blog" as PlanetId, icon: BookOpen, label: "Blog", color: "#94a3b8" },
  { id: "cv" as PlanetId, icon: FileDown, label: "CV", color: "#10b981" },
] as const;

const NavButton = memo(function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: (typeof NAV_ITEMS)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full transition-all duration-200 hover:bg-white/10 group"
      style={{ backgroundColor: isActive ? `${item.color}20` : undefined }}
      title={item.label}
      aria-label={item.label}
    >
      <Icon
        size={18}
        style={{ color: isActive ? item.color : "#94a3b8" }}
        className="transition-colors"
      />

      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-card text-foreground text-xs font-terminal rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.label}
      </span>

      {/* Active ring indicator */}
      {isActive && (
        <motion.div
          layoutId="nav-active"
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: item.color }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
});

export const FloatingNav = memo(function FloatingNav({
  onNavigate,
  activePlanet,
  onToggleTerminal,
  terminalOpen,
}: FloatingNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="glass rounded-full px-2 py-1.5 flex items-center gap-0.5">
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.id ?? "home"}
            item={item}
            isActive={activePlanet === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}

        {/* Divider */}
        <div className="w-px h-5 bg-border mx-1.5" aria-hidden="true" />

        {/* Terminal toggle */}
        <button
          onClick={onToggleTerminal}
          className={`p-2 rounded-full transition-all duration-200 ${
            terminalOpen ? "bg-primary/20" : "hover:bg-white/10"
          }`}
          title="Toggle Terminal (`)"
          aria-label="Toggle terminal"
          aria-pressed={terminalOpen}
        >
          <TerminalIcon
            size={18}
            className={terminalOpen ? "text-primary" : "text-muted-foreground"}
          />
        </button>
      </div>
    </motion.nav>
  );
});
