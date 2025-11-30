import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default GSAP configuration
gsap.defaults({
  ease: "power3.out",
  duration: 1,
});

// Animation presets
export const animations = {
  fadeIn: {
    opacity: 0,
    y: 30,
  },
  fadeInUp: {
    opacity: 0,
    y: 50,
  },
  fadeInDown: {
    opacity: 0,
    y: -50,
  },
  fadeInLeft: {
    opacity: 0,
    x: -50,
  },
  fadeInRight: {
    opacity: 0,
    x: 50,
  },
  scaleIn: {
    opacity: 0,
    scale: 0.8,
  },
};

// Easing presets
export const easings = {
  smooth: "power3.out",
  elastic: "elastic.out(1, 0.5)",
  bounce: "bounce.out",
  expo: "expo.out",
  back: "back.out(1.7)",
};

// Helper function for scroll-triggered animations
export const createScrollTrigger = (
  element: HTMLElement | string,
  animation: gsap.TweenVars,
  options?: ScrollTrigger.Vars
) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
    },
  });
};

// Stagger animation helper
export const staggerAnimation = (
  elements: HTMLElement[] | string,
  animation: gsap.TweenVars,
  staggerDelay: number = 0.1
) => {
  return gsap.from(elements, {
    ...animation,
    stagger: staggerDelay,
  });
};

// Parallax helper
export const createParallax = (
  element: HTMLElement | string,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Magnetic hover effect
export const magneticHover = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// Text reveal animation
export const revealText = (element: HTMLElement | string) => {
  return gsap.from(element, {
    opacity: 0,
    y: 100,
    rotationX: -90,
    transformOrigin: "top center",
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

export { gsap, ScrollTrigger };
