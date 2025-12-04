"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CreativeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Animate title with split effect
      tl.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current?.children || [],
          {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          circleRef.current,
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current?.children || [],
          {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.4"
        );

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        y: 200,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Glitch effect name - mobile optimized */}
        <div ref={titleRef} className="relative mb-8">
          <span
            className={`font-black tracking-tighter ${
              isMobile ? "text-6xl" : "text-6xl md:text-8xl"
            }`}
          >
            &lt;SAROJ /&gt;
          </span>
          <div
            ref={subtitleRef}
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

        {/* Rotating text around circle with enhanced animations */}
        <div
          ref={circleRef}
          className={`relative mx-auto mb-12 ${
            isMobile ? "w-48 h-48" : "w-64 h-64"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-full border border-white/20 shadow-glow-cyan ${
              isMobile && touchIntensity > 0 ? "animate-spin" : "animate-spin"
            }`}
            style={{
              animationDuration: isMobile ? "15s" : "20s",
              transform: isMobile
                ? `rotate(${deviceOrientation.alpha * 0.1}deg)`
                : "none",
            }}
          ></div>
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
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className={`font-bold text-white ${
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
          <p ref={descRef} className="text-xl text-gray-300 leading-relaxed">
            Based in Lalitpur, Nepal, I architect digital experiences that push
            boundaries and challenge conventions.
          </p>
        </div>

        {/* Interactive CTA - mobile optimized */}
        <div
          ref={ctaRef}
          className="relative flex items-center justify-center flex-wrap gap-5"
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            onTouchStart={() => isMobile && setTouchIntensity(1)}
            onTouchEnd={() => isMobile && setTouchIntensity(0)}
            className={`group relative glass-dark rounded-full text-white font-semibold transition-smooth hover:shadow-glow-cyan hover:scale-105 overflow-hidden magnetic ${
              isMobile ? "px-8 py-4 text-base" : "px-12 py-6 text-lg"
            } ${touchIntensity > 0 ? "scale-110 shadow-glow-cyan" : ""}`}
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
              className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                touchIntensity > 0 ? "opacity-100" : ""
              }`}
            ></div>
          </button>

          <Link
            href={"/blogs"}
            onTouchStart={() => isMobile && setTouchIntensity(1)}
            onTouchEnd={() => isMobile && setTouchIntensity(0)}
            className={`group relative glass-dark rounded-full text-white font-semibold transition-smooth hover:shadow-glow-purple hover:scale-105 overflow-hidden magnetic ${
              isMobile ? "px-8 py-4 text-base" : "px-12 py-6 text-lg"
            } ${touchIntensity > 0 ? "scale-110 shadow-glow-purple" : ""}`}
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
              className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
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
    </section>
  );
}
