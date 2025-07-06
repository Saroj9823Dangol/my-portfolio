// "use client";

// import { useEffect, useRef } from "react";

// export default function BackgroundCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Mobile detection
//     const isMobile = window.innerWidth < 768;
//     const particleCount = isMobile ? 25 : 50; // Reduce particles on mobile

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Particle system with mobile optimization
//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       size: number;
//       opacity: number;
//       hue: number;
//     }> = [];

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
//         vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
//         size: Math.random() * (isMobile ? 1.5 : 2) + 1,
//         opacity: Math.random() * 0.5 + 0.2,
//         hue: Math.random() * 360,
//       });
//     }

//     let mouseX = canvas.width / 2;
//     let mouseY = canvas.height / 2;
//     let touchX = canvas.width / 2;
//     let touchY = canvas.height / 2;

//     // Enhanced touch handling
//     const handleTouch = (e: TouchEvent) => {
//       e.preventDefault();
//       if (e.touches.length > 0) {
//         touchX = e.touches[0].clientX;
//         touchY = e.touches[0].clientY;

//         // Create ripple effect on touch
//         particles.forEach((particle) => {
//           const dx = touchX - particle.x;
//           const dy = touchY - particle.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             particle.vx += dx * 0.0001;
//             particle.vy += dy * 0.0001;
//             particle.hue = (particle.hue + 10) % 360;
//           }
//         });
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     // Add touch event listeners
//     canvas.addEventListener("touchstart", handleTouch, { passive: false });
//     canvas.addEventListener("touchmove", handleTouch, { passive: false });
//     window.addEventListener("mousemove", handleMouseMove);

//     const animate = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       const currentX = isMobile ? touchX : mouseX;
//       const currentY = isMobile ? touchY : mouseY;

//       particles.forEach((particle, index) => {
//         // Mouse/touch interaction
//         const dx = currentX - particle.x;
//         const dy = currentY - particle.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < (isMobile ? 120 : 100)) {
//           particle.vx += dx * (isMobile ? 0.00008 : 0.00005);
//           particle.vy += dy * (isMobile ? 0.00008 : 0.00005);
//         }

//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         // Boundary check
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

//         // Draw particle
//         ctx.save();
//         ctx.globalAlpha = particle.opacity;
//         ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();

//         // Connect nearby particles (fewer connections on mobile)
//         if (!isMobile || index % 2 === 0) {
//           particles.slice(index + 1).forEach((otherParticle) => {
//             const dx = particle.x - otherParticle.x;
//             const dy = particle.y - otherParticle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < (isMobile ? 80 : 100)) {
//               ctx.save();
//               ctx.globalAlpha = isMobile ? 0.05 : 0.1;
//               ctx.strokeStyle = `hsl(${
//                 (particle.hue + otherParticle.hue) / 2
//               }, 70%, 60%)`;
//               ctx.lineWidth = 1;
//               ctx.beginPath();
//               ctx.moveTo(particle.x, particle.y);
//               ctx.lineTo(otherParticle.x, otherParticle.y);
//               ctx.stroke();
//               ctx.restore();
//             }
//           });
//         }
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       canvas.removeEventListener("touchstart", handleTouch);
//       canvas.removeEventListener("touchmove", handleTouch);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
//   );
// }

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
      "function()",
      "const",
      "let",
      "var",
      "=>",
      "async",
      "await",
      "return",
      "import",
      "export",
      "class",
      "extends",
      "if",
      "else",
      "for",
      "while",
      "try",
      "catch",
      "finally",
      "{}",
      "[]",
      "()",
      "===",
      "!==",
      "&&",
      "||",
      "React",
      "useState",
      "useEffect",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "JSON",
      "API",
      "HTTP",
      "REST",
      "GraphQL",
      "MongoDB",
      "console.log",
      "localStorage",
      "fetch",
      "Promise",
      "setTimeout",
      "map",
      "filter",
      "reduce",
      "forEach",
      "splice",
      "push",
      "pop",
      "shift",
      "unshift",
      "git",
      "commit",
      "push",
      "pull",
      "merge",
      "branch",
      "clone",
      "fork",
      "npm",
      "yarn",
      "package.json",
      "webpack",
      "vite",
      "babel",
      "prettier",
      "ESLint",
      "Jest",
      "Cypress",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "DevOps",
    ];

    const typingPhrases = [
      "Building the future...",
      "Compiling dreams...",
      "Debugging reality...",
      "git commit -m 'life'",
      "npm run build",
      "Hello, World!",
      "Code is poetry",
      "Think different",
      "Just ship it",
      "Move fast, break things",
      "Stay hungry, stay foolish",
      "Code never lies",
      "In code we trust",
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
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Matrix rain effect
    const matrixColumns = Math.floor(canvas.width / 20);
    const matrixDrops: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
      opacity: number;
    }> = [];

    // Initialize code particles
    const particleCount = isMobile ? 15 : 30;
    for (let i = 0; i < particleCount; i++) {
      codeParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        size: Math.random() * (isMobile ? 8 : 12) + 8,
        opacity: Math.random() * 0.3 + 0.1,
        color: `hsl(${Math.random() * 60 + 120}, 70%, 60%)`, // Green/cyan spectrum
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Initialize matrix drops
    for (let i = 0; i < matrixColumns; i++) {
      matrixDrops.push({
        x: i * 20,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        chars: Array.from(
          { length: Math.floor(Math.random() * 10) + 5 },
          () =>
            codeSnippets[Math.floor(Math.random() * codeSnippets.length)][0] ||
            "0"
        ),
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Typing effect
    let currentPhrase = 0;
    let currentChar = 0;
    let typingDirection = 1;
    let typingTimer = 0;
    let currentTypedText = "";

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

        // Create ripple effect on touch - change code snippets
        codeParticles.forEach((particle) => {
          const dx = touchX - particle.x;
          const dy = touchY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            particle.vx += dx * 0.0001;
            particle.vy += dy * 0.0001;
            particle.text =
              codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            particle.color = `hsl(${Math.random() * 60 + 120}, 70%, 60%)`;
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
      // Clear canvas with dark background
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentX = isMobile ? touchX : mouseX;
      const currentY = isMobile ? touchY : mouseY;

      // Update typing effect
      typingTimer++;
      if (typingTimer > 60) {
        // ~1 second at 60fps
        typingTimer = 0;
        if (typingDirection === 1) {
          if (currentChar < typingPhrases[currentPhrase].length) {
            currentChar++;
            currentTypedText = typingPhrases[currentPhrase].substring(
              0,
              currentChar
            );
          } else {
            setTimeout(() => {
              typingDirection = -1;
            }, 2000);
          }
        } else {
          if (currentChar > 0) {
            currentChar--;
            currentTypedText = typingPhrases[currentPhrase].substring(
              0,
              currentChar
            );
          } else {
            typingDirection = 1;
            currentPhrase = (currentPhrase + 1) % typingPhrases.length;
          }
        }
      }

      // Draw typing effect
      ctx.save();
      ctx.font = `${
        isMobile ? "16" : "24"
      }px 'JetBrains Mono', 'Fira Code', monospace`;
      ctx.fillStyle = "rgba(0, 255, 128, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText(
        currentTypedText + (typingDirection === 1 ? "|" : ""),
        canvas.width / 2,
        50
      );
      ctx.restore();

      // Update and draw matrix rain
      matrixDrops.forEach((drop) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -100;
          drop.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.font = `${isMobile ? "10" : "12"}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(0, 255, 128, ${drop.opacity})`;

        drop.chars.forEach((char, index) => {
          const charY = drop.y + index * 15;
          if (charY > 0 && charY < canvas.height) {
            ctx.fillText(char, drop.x, charY);
          }
        });
        ctx.restore();
      });

      // Update and draw code particles
      codeParticles.forEach((particle) => {
        // Mouse/touch interaction
        const dx = currentX - particle.x;
        const dy = currentY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (isMobile ? 120 : 100)) {
          particle.vx += dx * (isMobile ? 0.00008 : 0.00005);
          particle.vy += dy * (isMobile ? 0.00008 : 0.00005);
          particle.opacity = Math.min(particle.opacity + 0.01, 0.7);
        } else {
          particle.opacity = Math.max(particle.opacity - 0.005, 0.1);
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Boundary check with wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.font = `${particle.size}px 'JetBrains Mono', 'Fira Code', monospace`;
        ctx.textAlign = "center";
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillText(particle.text, 0, 0);
        ctx.restore();

        // Add glow effect for nearby particles
        if (distance < 50) {
          ctx.save();
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 30, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // Draw connecting lines between nearby particles
      codeParticles.forEach((particle, index) => {
        codeParticles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (isMobile ? 80 : 120)) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 120) * 0.1;
            ctx.strokeStyle = "rgba(0, 255, 128, 0.3)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
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
