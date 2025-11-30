"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Don't show cursor follower on mobile
    if (isMobile) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    const cursor = document.querySelector(".cursor-follower") as HTMLElement;
    const cursorDot = document.querySelector(
      ".cursor-follower-dot"
    ) as HTMLElement;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Animate cursor following
    const animate = () => {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Faster dot following
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className="cursor-follower pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 border-2 border-white/30 rounded-full mix-blend-difference" />
      <div className="cursor-follower-dot pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 bg-white rounded-full mix-blend-difference" />
    </>
  );
}
