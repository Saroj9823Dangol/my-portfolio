"use client";

import { Briefcase, Clock, Home, Info, Mail, User, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: "hero", icon: Home, label: "Start" },
    { id: "about", icon: Info, label: "About" },
    { id: "story", icon: User, label: "Story" },
    { id: "skills", icon: Zap, label: "Powers" },
    { id: "projects", icon: Briefcase, label: "Creations" },
    { id: "experience", icon: Clock, label: "Journey" },
    { id: "contact", icon: Mail, label: "Portal" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "story",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ${
        isMobile
          ? "bottom-4 left-1/2 transform -translate-x-1/2"
          : "right-8 top-1/2 transform -translate-y-1/2"
      }`}
    >
      <div
        className={`relative transition-all duration-500 ${
          isMobile
            ? `flex space-x-1 bg-black/80 backdrop-blur-xl rounded-full p-2 border border-white/20 ${
                isExpanded ? "px-4" : ""
              }`
            : isExpanded
            ? "bg-white/10 backdrop-blur-md rounded-full p-2"
            : ""
        }`}
        onTouchStart={() => isMobile && setIsExpanded(true)}
        onTouchEnd={() =>
          isMobile && setTimeout(() => setIsExpanded(false), 2000)
        }
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div
              key={item.id}
              className={`relative transition-all duration-300 ${
                isMobile
                  ? ""
                  : `mb-4 last:mb-0 ${
                      isExpanded
                        ? "translate-x-0"
                        : index !==
                          navItems.findIndex((nav) => nav.id === activeSection)
                        ? "translate-x-8 opacity-30"
                        : ""
                    }`
              }`}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center transition-all duration-300 ${
                  isMobile
                    ? `w-10 h-10 rounded-full ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-105 shadow-lg shadow-cyan-400/25"
                          : "bg-white/10 hover:bg-white/20 active:scale-95"
                      }`
                    : `w-12 h-12 rounded-full ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-110 shadow-lg shadow-cyan-400/25"
                          : "bg-white/10 hover:bg-white/20 hover:scale-105"
                      }`
                }`}
              >
                <Icon
                  className={`transition-colors duration-300 ${
                    isMobile ? "w-4 h-4" : "w-5 h-5"
                  } ${isActive ? "text-white" : "text-gray-300"}`}
                />

                {/* Desktop tooltip */}
                {!isMobile && (
                  <div
                    className={`absolute right-full mr-4 px-3 py-1 bg-white/90 text-black text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
                      isExpanded
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-2 pointer-events-none"
                    }`}
                  >
                    {item.label}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/90 border-y-4 border-y-transparent"></div>
                  </div>
                )}
              </button>

              {/* Active indicator */}
              {isActive && !isMobile && (
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
