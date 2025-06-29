"use client";

import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      Array.from(e.touches).forEach((touch) => {
        const ripple: Ripple = {
          id: Date.now() + Math.random(),
          x: touch.clientX,
          y: touch.clientY,
          timestamp: Date.now(),
        };

        setRipples((prev) => [...prev, ripple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
        }, 1000);
      });
    };

    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(139,92,246,0.4) 50%, rgba(236,72,153,0.2) 100%)",
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
}
