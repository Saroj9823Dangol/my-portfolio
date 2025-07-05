"use client";

import { ArrowDown, ArrowRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CreativeHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sun icon (replaces Code icon) */}
      <div
        className="absolute pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: isMobile
            ? `${50 + deviceOrientation.gamma * 0.5}%`
            : mousePosition.x * 0.02 + "px",
          top: isMobile
            ? `${50 + deviceOrientation.beta * 0.3}%`
            : mousePosition.y * 0.02 + "px",
          transform: `translateY(${parallaxOffset}px) scale(${
            1 + touchIntensity * 0.2
          })`,
        }}
      >
        <Sun
          className={`w-8 h-8 text-[#DC143C]/30 ${
            touchIntensity > 0 ? "animate-spin" : "animate-pulse"
          }`}
        />
      </div>

      {/* Moon icon (replaces Cpu icon) */}
      <div
        className="absolute pointer-events-none transition-all duration-1000 ease-out"
        style={{
          right: isMobile
            ? `${30 - deviceOrientation.gamma * 0.3}%`
            : typeof window !== "undefined"
            ? (window.innerWidth - mousePosition.x) * 0.03 + "px"
            : "0px",
          top: isMobile
            ? `${30 - deviceOrientation.beta * 0.2}%`
            : mousePosition.y * 0.01 + 100 + "px",
          transform: `translateY(${parallaxOffset * 0.8}px) rotate(${
            deviceOrientation.alpha * 0.1
          }deg)`,
        }}
      >
        <Moon
          className={`w-12 h-12 text-[#0000FF]/20 ${
            isMobile ? "animate-pulse" : "animate-spin"
          }`}
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Sun icon (replaces Rocket icon) */}
      <div
        className="absolute pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: isMobile
            ? `${70 + deviceOrientation.gamma * 0.4}%`
            : mousePosition.x * 0.01 + 200 + "px",
          bottom: isMobile
            ? `${20 - deviceOrientation.beta * 0.2}%`
            : typeof window !== "undefined"
            ? (window.innerHeight - mousePosition.y) * 0.02 + 100 + "px"
            : "0px",
          transform: `translateY(${parallaxOffset * 1.2}px) scale(${
            1 + touchIntensity * 0.3
          })`,
        }}
      >
        <Sun
          className={`w-6 h-6 text-[#DC143C]/40 ${
            touchIntensity > 1 ? "animate-spin" : "animate-bounce"
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Glitch effect name - mobile optimized */}
        <div className="relative mb-8">
          <span
            className={`font-black tracking-tighter ${
              isMobile ? "text-6xl" : "text-6xl md:text-8xl"
            }`}
          >
            &lt;SAROJ/&gt;
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

        {/* Rotating text around circle with sun and moon - mobile optimized */}
        <div
          className={`relative mx-auto mb-12 ${
            isMobile ? "w-48 h-48" : "w-64 h-64"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-full border border-white/20 ${
              isMobile && touchIntensity > 0 ? "animate-spin" : "animate-spin"
            }`}
            style={{
              animationDuration: isMobile ? "15s" : "20s",
              transform: isMobile
                ? `rotate(${deviceOrientation.alpha * 0.1}deg)`
                : "none",
            }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Sun className="w-6 h-6 text-[#DC143C]" />
            </div>
          </div>
          <div
            className={`absolute rounded-full border border-white/10 ${
              isMobile && touchIntensity > 0 ? "animate-spin" : "animate-spin"
            } ${isMobile ? "inset-3" : "inset-4"}`}
            style={{
              animationDuration: isMobile ? "12s" : "15s",
              animationDirection: "reverse",
              transform: isMobile
                ? `rotate(${-deviceOrientation.alpha * 0.05}deg)`
                : "none",
            }}
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Moon className="w-4 h-4 text-[#0000FF]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className={`font-bold bg-gradient-to-r from-[#DC143C] to-[#0000FF] bg-clip-text text-transparent ${
                  isMobile ? "text-lg" : "text-2xl"
                }`}
              >
                FULL STACK
              </div>
              <div
                className={`text-gray-400 mt-2 ${
                  isMobile ? "text-sm" : "text-lg"
                }`}
              >
                DEVELOPER
              </div>
            </div>
          </div>
        </div>

        {/* Morphing description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            I don't just write code — I{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#DC143C] to-[#0000FF] bg-clip-text text-transparent font-bold">
                architect digital experiences
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#DC143C] to-[#0000FF] animate-pulse"></span>
            </span>{" "}
            that push boundaries and challenge conventions.
          </p>
        </div>

        {/* Interactive CTA - mobile optimized */}
        <div className="relative flex items-center flex-wrap gap-5">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            onTouchStart={() => isMobile && setTouchIntensity(1)}
            onTouchEnd={() => isMobile && setTouchIntensity(0)}
            className={`group relative bg-transparent border-2 border-white/30 rounded-full text-white font-semibold transition-all duration-500 hover:border-white/60 hover:scale-105 overflow-hidden ${
              isMobile ? "px-8 py-4 text-base" : "px-12 py-6 text-lg"
            } ${touchIntensity > 0 ? "scale-110 border-white/80" : ""}`}
          >
            <span className="relative z-10 flex items-center">
              {isMobile ? "Enter Universe" : "Enter My Universe"}
              <ArrowDown
                className={`ml-3 group-hover:translate-y-1 transition-transform duration-300 ${
                  isMobile ? "w-4 h-4" : "w-5 h-5"
                } ${touchIntensity > 0 ? "animate-bounce" : ""}`}
              />
            </span>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#DC143C]/20 to-[#0000FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                touchIntensity > 0 ? "opacity-100" : ""
              }`}
            ></div>
          </button>

          <Link
            href={"/blogs"}
            onTouchStart={() => isMobile && setTouchIntensity(1)}
            onTouchEnd={() => isMobile && setTouchIntensity(0)}
            className={`group relative bg-transparent border-2 border-white/30 rounded-full text-white font-semibold transition-all duration-500 hover:border-white/60 hover:scale-105 overflow-hidden ${
              isMobile ? "px-8 py-4 text-base" : "px-12 py-6 text-lg"
            } ${touchIntensity > 0 ? "scale-110 border-white/80" : ""}`}
          >
            <span className="relative z-10 flex items-center">
              Read Blogs
              <ArrowRight
                className={`ml-3 group-hover:translate-x-1 transition-transform duration-300 ${
                  isMobile ? "w-4 h-4" : "w-5 h-5"
                } ${touchIntensity > 0 ? "animate-bounce" : ""}`}
              />
            </span>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#DC143C]/20 to-[#0000FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                touchIntensity > 0 ? "opacity-100" : ""
              }`}
            ></div>
          </Link>
        </div>

        {/* Mobile-specific touch hint */}
        {isMobile && (
          <div className="mt-8 text-sm text-gray-400 animate-pulse">
            Tilt your device • Touch to interact
          </div>
        )}
      </div>

      {/* Scroll indicator with sun icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <Sun className="w-4 h-4 text-[#DC143C]/70" />
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50"></div>
        </div>
      </div>
    </section>
  );
}
