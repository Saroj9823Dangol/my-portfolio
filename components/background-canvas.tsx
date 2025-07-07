"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile detection
    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Developer-themed content
    const codeSnippets = [
      "const",
      "let",
      "=>",
      "async",
      "return",
      "function",
      "React",
      "useState",
      "TypeScript",
      "API",
      "import",
      "export",
      "class",
      "git",
      "npm",
      "build",
      "deploy",
      "{}",
      "[]",
      "()",
      "===",
      "&&",
      "||",
      "console.log",
      "if",
      "else",
      "for",
      "while",
      "map",
      "filter",
      "reduce",
    ];

    // Floating code particles
    const codeParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      size: number;
      opacity: number;
      color: string;
      baseOpacity: number;
    }> = [];

    // Matrix rain effect
    const matrixColumns = Math.floor(canvas.width / 30);
    const matrixDrops: Array<{
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
    }> = [];

    // Floating dots/nodes
    const floatingDots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      baseOpacity: number;
    }> = [];

    // Grid lines
    const gridLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      isVertical: boolean;
    }> = [];

    // Initialize code particles - more than before
    const particleCount = isMobile ? 18 : 30;
    for (let i = 0; i < particleCount; i++) {
      const baseOpacity = Math.random() * 0.15 + 0.08;
      codeParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        size: Math.random() * 6 + 9,
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
        color: `rgba(0, 255, 128, ${baseOpacity})`,
      });
    }

    // Initialize matrix drops
    for (let i = 0; i < matrixColumns; i++) {
      matrixDrops.push({
        x: i * 30,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.8,
        char:
          codeSnippets[Math.floor(Math.random() * codeSnippets.length)][0] ||
          "0",
        opacity: Math.random() * 0.12 + 0.06,
      });
    }

    // Initialize floating dots
    const dotCount = isMobile ? 8 : 15;
    for (let i = 0; i < dotCount; i++) {
      const baseOpacity = Math.random() * 0.1 + 0.05;
      floatingDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1,
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
      });
    }

    // Initialize subtle grid lines
    const gridCount = isMobile ? 3 : 5;
    for (let i = 0; i < gridCount; i++) {
      // Vertical lines
      gridLines.push({
        x1: (canvas.width / (gridCount + 1)) * (i + 1),
        y1: 0,
        x2: (canvas.width / (gridCount + 1)) * (i + 1),
        y2: canvas.height,
        opacity: Math.random() * 0.03 + 0.01,
        isVertical: true,
      });

      // Horizontal lines
      gridLines.push({
        x1: 0,
        y1: (canvas.height / (gridCount + 1)) * (i + 1),
        x2: canvas.width,
        y2: (canvas.height / (gridCount + 1)) * (i + 1),
        opacity: Math.random() * 0.03 + 0.01,
        isVertical: false,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // const animate = () => {
    //   // Clear canvas with subtle fade
    //   ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);

    //   // Draw subtle grid lines
    //   gridLines.forEach((line) => {
    //     ctx.save();
    //     ctx.globalAlpha = line.opacity;
    //     ctx.strokeStyle = "rgba(0, 255, 128, 0.1)";
    //     ctx.lineWidth = 0.5;
    //     ctx.beginPath();
    //     ctx.moveTo(line.x1, line.y1);
    //     ctx.lineTo(line.x2, line.y2);
    //     ctx.stroke();
    //     ctx.restore();
    //   });

    //   // Update and draw matrix rain
    //   matrixDrops.forEach((drop) => {
    //     drop.y += drop.speed;
    //     if (drop.y > canvas.height) {
    //       drop.y = -20;
    //       drop.char =
    //         codeSnippets[Math.floor(Math.random() * codeSnippets.length)][0] ||
    //         "0";
    //     }

    //     ctx.save();
    //     ctx.font = `${isMobile ? "9" : "11"}px 'JetBrains Mono', monospace`;
    //     ctx.fillStyle = `rgba(0, 255, 128, ${drop.opacity})`;
    //     ctx.fillText(drop.char, drop.x, drop.y);
    //     ctx.restore();
    //   });

    //   // Update and draw floating dots
    //   floatingDots.forEach((dot) => {
    //     // Mouse interaction
    //     const dx = mouseX - dot.x;
    //     const dy = mouseY - dot.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < 100) {
    //       dot.vx += dx * 0.00002;
    //       dot.vy += dy * 0.00002;
    //       dot.opacity = Math.min(dot.opacity + 0.005, 0.3);
    //     } else {
    //       dot.opacity = Math.max(dot.opacity - 0.002, dot.baseOpacity);
    //     }

    //     dot.x += dot.vx;
    //     dot.y += dot.vy;

    //     // Boundary check with wrapping
    //     if (dot.x < -10) dot.x = canvas.width + 10;
    //     if (dot.x > canvas.width + 10) dot.x = -10;
    //     if (dot.y < -10) dot.y = canvas.height + 10;
    //     if (dot.y > canvas.height + 10) dot.y = -10;

    //     // Draw dot
    //     ctx.save();
    //     ctx.globalAlpha = dot.opacity;
    //     ctx.fillStyle = "rgba(0, 255, 128, 0.4)";
    //     ctx.beginPath();
    //     ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.restore();
    //   });

    //   // Update and draw code particles
    //   codeParticles.forEach((particle, index) => {
    //     // Mouse interaction
    //     const dx = mouseX - particle.x;
    //     const dy = mouseY - particle.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < 120) {
    //       particle.vx += dx * 0.00003;
    //       particle.vy += dy * 0.00003;
    //       particle.opacity = Math.min(particle.opacity + 0.008, 0.4);
    //     } else {
    //       particle.opacity = Math.max(
    //         particle.opacity - 0.003,
    //         particle.baseOpacity
    //       );
    //     }

    //     particle.x += particle.vx;
    //     particle.y += particle.vy;

    //     // Boundary check with wrapping
    //     if (particle.x < -30) particle.x = canvas.width + 30;
    //     if (particle.x > canvas.width + 30) particle.x = -30;
    //     if (particle.y < -30) particle.y = canvas.height + 30;
    //     if (particle.y > canvas.height + 30) particle.y = -30;

    //     // Draw particle
    //     ctx.save();
    //     ctx.globalAlpha = particle.opacity;
    //     ctx.fillStyle = particle.color;
    //     ctx.font = `${particle.size}px 'JetBrains Mono', monospace`;
    //     ctx.textAlign = "center";
    //     ctx.fillText(particle.text, particle.x, particle.y);
    //     ctx.restore();

    //     // Draw connections between particles and dots
    //     if (index % 4 === 0) {
    //       // Connect to nearby particles
    //       codeParticles.slice(index + 1).forEach((otherParticle) => {
    //         const dx = particle.x - otherParticle.x;
    //         const dy = particle.y - otherParticle.y;
    //         const distance = Math.sqrt(dx * dx + dy * dy);

    //         if (distance < 70) {
    //           ctx.save();
    //           ctx.globalAlpha = (1 - distance / 70) * 0.06;
    //           ctx.strokeStyle = "rgba(0, 255, 128, 0.2)";
    //           ctx.lineWidth = 0.5;
    //           ctx.beginPath();
    //           ctx.moveTo(particle.x, particle.y);
    //           ctx.lineTo(otherParticle.x, otherParticle.y);
    //           ctx.stroke();
    //           ctx.restore();
    //         }
    //       });

    //       // Connect to nearby dots
    //       floatingDots.forEach((dot) => {
    //         const dx = particle.x - dot.x;
    //         const dy = particle.y - dot.y;
    //         const distance = Math.sqrt(dx * dx + dy * dy);

    //         if (distance < 80) {
    //           ctx.save();
    //           ctx.globalAlpha = (1 - distance / 80) * 0.04;
    //           ctx.strokeStyle = "rgba(0, 255, 128, 0.15)";
    //           ctx.lineWidth = 0.3;
    //           ctx.beginPath();
    //           ctx.moveTo(particle.x, particle.y);
    //           ctx.lineTo(dot.x, dot.y);
    //           ctx.stroke();
    //           ctx.restore();
    //         }
    //       });
    //     }
    //   });

    //   requestAnimationFrame(animate);
    // };

    // animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
