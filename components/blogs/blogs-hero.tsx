"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogsHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [touchIntensity, setTouchIntensity] = useState(0);
  const [deviceOrientation, setDeviceOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Device orientation for mobile
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (isMobile) {
        setDeviceOrientation({
          alpha: event.alpha || 0,
          beta: event.beta || 0,
          gamma: event.gamma || 0,
        });
      }
    };

    if (isMobile && "DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isMobile]);

  // Touch interaction handler
  const handleTouch = (e: TouchEvent) => {
    const touches = e.touches.length;
    setTouchIntensity(touches);

    if (touches > 1) {
      // Multi-touch creates more intense effects
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      setMousePosition({
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
      });
    } else if (touches === 1) {
      setMousePosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

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
          <h1
            className={`font-black tracking-tighter ${
              isMobile ? "text-6xl" : "text-6xl md:text-8xl"
            }`}
          >
            &lt;BLOGS/&gt;
          </h1>
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
