"use client";

import { Briefcase, Home, Mail, User, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const navItems = [
    { id: "hero", icon: Home, label: "Start" },
    { id: "story", icon: User, label: "Story" },
    { id: "skills", icon: Zap, label: "Powers" },
    { id: "projects", icon: Briefcase, label: "Creations" },
    { id: "contact", icon: Mail, label: "Portal" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Improved swipe navigation
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchStartY.current - touchEndY;
      const deltaTime = touchEndTime - touchStartTime.current;

      // Only trigger if swipe is fast enough and long enough
      if (Math.abs(deltaY) > 80 && deltaTime < 500) {
        const currentIndex = navItems.findIndex(
          (item) => item.id === activeSection
        );

        if (deltaY > 0 && currentIndex < navItems.length - 1) {
          // Swipe up - next section
          scrollToSection(navItems[currentIndex + 1].id);
          setShowSwipeHint(false);
        } else if (deltaY < 0 && currentIndex > 0) {
          // Swipe down - previous section
          scrollToSection(navItems[currentIndex - 1].id);
          setShowSwipeHint(false);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "skills", "projects", "contact"];
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Swipe hint for mobile
      {isMobile && showSwipeHint && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black/80 backdrop-blur-xl rounded-full px-4 py-2 text-white text-sm animate-bounce">
          Swipe up/down to navigate
        </div>
      )} */}

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
              ? `flex space-x-2 bg-black/80 backdrop-blur-xl rounded-full p-3 border border-white/20 ${
                  isExpanded ? "px-6" : ""
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
                            navItems.findIndex(
                              (nav) => nav.id === activeSection
                            )
                          ? "translate-x-8 opacity-30"
                          : ""
                      }`
                }`}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center justify-center transition-all duration-300 ${
                    isMobile
                      ? `w-12 h-12 rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-110 shadow-lg shadow-cyan-400/25"
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
                    className={`transition-colors duration-300 w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  />

                  {/* Mobile tooltip */}
                  {/* {isMobile && isExpanded && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-2 py-1 rounded text-xs whitespace-nowrap">
                      {item.label}
                    </div>
                  )} */}

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
    </>
  );
}
