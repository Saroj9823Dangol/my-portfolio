"use client";

import { useState, useCallback, Suspense } from "react";
import dynamic from "next/dynamic";
import { Terminal } from "@/components/terminal/terminal";
import { PlanetOverlay } from "@/components/planet-overlay";
import { LoadingScreen } from "@/components/loading-screen";
import { FloatingNav } from "@/components/floating-nav";
import { Starfield } from "@/components/effects/starfield";
import { DeveloperInfo } from "@/components/developer-info";
import type { PlanetId } from "@/lib/types";

const SolarSystem = dynamic(
  () =>
    import("@/components/solar-system").then((mod) => ({
      default: mod.SolarSystem,
    })),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-10 bg-background" />,
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePlanet, setActivePlanet] = useState<PlanetId>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handlePlanetClick = useCallback((planetId: PlanetId) => {
    setActivePlanet(planetId);
  }, []);

  const handleClosePlanet = useCallback(() => {
    setActivePlanet(null);
  }, []);

  const handleTerminalCommand = useCallback((command: string) => {
    const planetMap: Record<string, PlanetId> = {
      about: "about",
      projects: "projects",
      skills: "skills",
      experience: "experience",
      contact: "contact",
      blog: "blog",
      cv: "cv",
      home: null,
      sun: "sun",
    };

    const target = command.toLowerCase();
    if (target in planetMap) {
      setActivePlanet(planetMap[target]);
      return true;
    }
    return false;
  }, []);

  const toggleTerminal = useCallback(() => {
    setTerminalOpen((prev) => !prev);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}

      <Starfield />

      <Suspense fallback={null}>
        <SolarSystem
          onPlanetClick={handlePlanetClick}
          activePlanet={activePlanet}
          isPaused={activePlanet !== null}
        />
      </Suspense>

      <FloatingNav
        onNavigate={handlePlanetClick}
        activePlanet={activePlanet}
        onToggleTerminal={toggleTerminal}
        terminalOpen={terminalOpen}
      />

      <DeveloperInfo
        visible={!isLoading && activePlanet === null && !terminalOpen}
      />

      <PlanetOverlay activePlanet={activePlanet} onClose={handleClosePlanet} />

      <Terminal
        isOpen={terminalOpen}
        onToggle={toggleTerminal}
        onNavigate={handleTerminalCommand}
        activePlanet={activePlanet}
      />

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-4 left-4 text-muted-foreground text-xs font-terminal opacity-50 z-10">
        Press{" "}
        <kbd className="px-1 py-0.5 bg-secondary rounded text-primary">`</kbd>{" "}
        for terminal
      </div>
    </main>
  );
}
