// app/components/SparkleEffect.tsx
"use client";

import { useEffect } from "react";

const SparkleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 500);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="grid-background" />;
};

export default SparkleEffect;
