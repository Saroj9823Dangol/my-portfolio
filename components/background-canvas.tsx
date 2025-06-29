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
    const particleCount = isMobile ? 25 : 50; // Reduce particles on mobile

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system with mobile optimization
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
        size: Math.random() * (isMobile ? 1.5 : 2) + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 360,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let touchX = canvas.width / 2;
    let touchY = canvas.height / 2;

    // Enhanced touch handling
    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;

        // Create ripple effect on touch
        particles.forEach((particle) => {
          const dx = touchX - particle.x;
          const dy = touchY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            particle.vx += dx * 0.0001;
            particle.vy += dy * 0.0001;
            particle.hue = (particle.hue + 10) % 360;
          }
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Add touch event listeners
    canvas.addEventListener("touchstart", handleTouch, { passive: false });
    canvas.addEventListener("touchmove", handleTouch, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentX = isMobile ? touchX : mouseX;
      const currentY = isMobile ? touchY : mouseY;

      particles.forEach((particle, index) => {
        // Mouse/touch interaction
        const dx = currentX - particle.x;
        const dy = currentY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (isMobile ? 120 : 100)) {
          particle.vx += dx * (isMobile ? 0.00008 : 0.00005);
          particle.vy += dy * (isMobile ? 0.00008 : 0.00005);
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles (fewer connections on mobile)
        if (!isMobile || index % 2 === 0) {
          particles.slice(index + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (isMobile ? 80 : 100)) {
              ctx.save();
              ctx.globalAlpha = isMobile ? 0.05 : 0.1;
              ctx.strokeStyle = `hsl(${
                (particle.hue + otherParticle.hue) / 2
              }, 70%, 60%)`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchstart", handleTouch);
      canvas.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
