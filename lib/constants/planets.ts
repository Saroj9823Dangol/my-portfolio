/**
 * Planet Configuration Constants
 * Realistic representations of actual solar system planets
 * Each planet maps to a portfolio section
 */

import type { PlanetId } from "@/lib/types";

export interface PlanetConfig {
  id: PlanetId;
  name: string;
  realName: string; // Actual planet name
  // Surface colors for procedural texture
  baseColor: string;
  secondaryColor: string;
  tertiaryColor?: string;
  atmosphereColor: string;
  // Physical properties (scaled for visualization)
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  axialTilt: number;
  // Features
  hasRings?: boolean;
  ringColors?: string[];
  hasMoons?: number;
  hasAtmosphere: boolean;
  atmosphereThickness: number;
  // Surface characteristics
  surfaceType: "rocky" | "terrestrial" | "gas-giant" | "ice-giant";
  hasCloudLayer?: boolean;
  cloudColor?: string;
  hasPolarCaps?: boolean;
  polarCapColor?: string;
  // Special features
  hasBands?: boolean; // Jupiter/Saturn bands
  hasStorm?: boolean; // Great Red Spot
  stormColor?: string;
  description: string;
}

export const PLANETS: PlanetConfig[] = [
  {
    // Mercury - About section
    id: "about",
    name: "About",
    realName: "Mercury",
    baseColor: "#8c7853",
    secondaryColor: "#6b5b47",
    tertiaryColor: "#524436",
    atmosphereColor: "#a09080",
    size: 0.38,
    orbitRadius: 3.5,
    orbitSpeed: 0.8,
    rotationSpeed: 0.002,
    axialTilt: 0.03,
    hasAtmosphere: false,
    atmosphereThickness: 0,
    surfaceType: "rocky",
    description: "The Messenger",
  },
  {
    // Venus - Projects section
    id: "projects",
    name: "Projects",
    realName: "Venus",
    baseColor: "#e6c87a",
    secondaryColor: "#d4a84b",
    tertiaryColor: "#c9963c",
    atmosphereColor: "#ffe4b3",
    size: 0.48,
    orbitRadius: 5,
    orbitSpeed: 0.6,
    rotationSpeed: -0.001, // Retrograde rotation
    axialTilt: 2.64,
    hasAtmosphere: true,
    atmosphereThickness: 0.25,
    surfaceType: "terrestrial",
    hasCloudLayer: true,
    cloudColor: "#fff5e0",
    description: "Morning Star",
  },
  {
    // Earth - Skills section
    id: "skills",
    name: "Skills",
    realName: "Earth",
    baseColor: "#4a90d9",
    secondaryColor: "#2d6b3f",
    tertiaryColor: "#8b6b47",
    atmosphereColor: "#87ceeb",
    size: 0.5,
    orbitRadius: 6.5,
    orbitSpeed: 0.5,
    rotationSpeed: 0.01,
    axialTilt: 0.41,
    hasAtmosphere: true,
    atmosphereThickness: 0.08,
    surfaceType: "terrestrial",
    hasCloudLayer: true,
    cloudColor: "#ffffff",
    hasMoons: 1,
    description: "Blue Marble",
  },
  {
    // Mars - Experience section
    id: "experience",
    name: "Experience",
    realName: "Mars",
    baseColor: "#c1440e",
    secondaryColor: "#8b3103",
    tertiaryColor: "#a85d3b",
    atmosphereColor: "#d4a574",
    size: 0.42,
    orbitRadius: 8.5,
    orbitSpeed: 0.4,
    rotationSpeed: 0.0097,
    axialTilt: 0.44,
    hasAtmosphere: true,
    atmosphereThickness: 0.03,
    surfaceType: "rocky",
    hasPolarCaps: true,
    polarCapColor: "#f5f5f5",
    hasMoons: 2,
    description: "Red Planet",
  },
  {
    // Jupiter - Contact section
    id: "contact",
    name: "Contact",
    realName: "Jupiter",
    baseColor: "#d4a574",
    secondaryColor: "#c9a067",
    tertiaryColor: "#8b6b47",
    atmosphereColor: "#e8c99b",
    size: 1.1,
    orbitRadius: 11.5,
    orbitSpeed: 0.22,
    rotationSpeed: 0.028,
    axialTilt: 0.05,
    hasAtmosphere: true,
    atmosphereThickness: 0.15,
    surfaceType: "gas-giant",
    hasBands: true,
    hasStorm: true,
    stormColor: "#c94c2d",
    hasMoons: 4,
    description: "King of Planets",
  },
  {
    // Saturn - Blog section
    id: "blog",
    name: "Blog",
    realName: "Saturn",
    baseColor: "#e8d4a8",
    secondaryColor: "#d4bc8a",
    tertiaryColor: "#c9a86c",
    atmosphereColor: "#f5e6c8",
    size: 0.95,
    orbitRadius: 15,
    orbitSpeed: 0.15,
    rotationSpeed: 0.024,
    axialTilt: 0.47,
    hasAtmosphere: true,
    atmosphereThickness: 0.12,
    surfaceType: "gas-giant",
    hasBands: true,
    hasRings: true,
    ringColors: ["#e8d4a8", "#c9b896", "#a89878", "#d4c4a4", "#f0e6d2"],
    hasMoons: 3,
    description: "Ringed Giant",
  },
];

export const SUN_CONFIG = {
  radius: 1.8,
  coronaScale: 2.5,
  // Realistic sun colors
  coreColor: "#fff5e0",
  surfaceColor: "#fdb813",
  coronaColor: "#ff8c00",
  flareColor: "#ff6b35",
  // Light properties
  intensity: 180,
  // Animation speeds
  rotationSpeed: 0.0005,
  pulseSpeed: 0.8,
  flareSpeed: 1.2,
};
