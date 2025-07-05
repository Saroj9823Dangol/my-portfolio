"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogsHero() {
  const heroRef = useRef<HTMLElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [touchIntensity, setTouchIntensity] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Touch interaction handler
  const handleTouch = (e: TouchEvent) => {
    const touches = e.touches.length;
    setTouchIntensity(touches);
  };

  useEffect(() => {
    if (isMobile) {
      document.addEventListener("touchstart", handleTouch);
      document.addEventListener("touchmove", handleTouch);
      document.addEventListener("touchend", () => setTouchIntensity(0));

      return () => {
        document.removeEventListener("touchstart", handleTouch);
        document.removeEventListener("touchmove", handleTouch);
        document.removeEventListener("touchend", () => setTouchIntensity(0));
      };
    }
  }, [isMobile]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative pt-10 flex items-center justify-center overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Glitch effect name - mobile optimized */}
        <div className="relative mb-8">
          <span
            className={`font-black tracking-tighter ${
              isMobile ? "text-6xl" : "text-6xl md:text-8xl"
            }`}
          >
            &lt;BLOGS/&gt;
          </span>
          <div
            className={`font-light tracking-widest mt-4 text-gray-300 ${
              isMobile ? "text-2xl" : "text-3xl md:text-5xl"
            }`}
          >
            {["C", "O", "D", "E", "•", "A", "R", "T"].map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-bounce"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform:
                    isMobile && touchIntensity > 0
                      ? `scale(${1 + touchIntensity * 0.1})`
                      : "none",
                }}
              >
                {letter === "•" ? <span className="mx-4">•</span> : letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
