/**
 * Core Type Definitions
 * Centralized type exports for the portfolio
 */

export type PlanetId =
  | "sun"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact"
  | "blog"
  | "cv"
  | null;

export interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "ascii";
  content: string;
  timestamp?: number;
}

export interface NavItem {
  id: PlanetId;
  label: string;
  color: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  color: string;
  glowColor: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
