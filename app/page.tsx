"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Smartphone,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  const words = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);

    // Mouse tracking for custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all animated elements
    elementsRef.current.forEach((el) => {
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Typing animation
    const typeSpeed = isDeleting ? 50 : 150;
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [typedText, isDeleting, currentWordIndex, words]);

  const skills = [
    { name: "React.js", level: 95, icon: Code },
    { name: "Node.js", level: 90, icon: Database },
    { name: "Next.js", level: 88, icon: Code },
    { name: "NestJS", level: 85, icon: Database },
    { name: "React Native", level: 82, icon: Smartphone },
    { name: "MySQL", level: 85, icon: Database },
    { name: "MongoDB", level: 80, icon: Database },
    { name: "AWS", level: 75, icon: Globe },
  ];

  const projects = [
    {
      title: "Hamro Blood Bank (HBB)",
      description:
        "A real-time blood donation platform with donor notifications, location-based search, and mobile app integration.",
      image: "/images/hbb.png",
      tech: ["React", "Next.js", "React Native", "Firebase", "Redux", "MySQL"],
      github: "https://github.com/Saroj9823Dangol",
      live: "https://hamrobloodbank.com",
    },
    {
      title: "Shivalaya Holidays",
      description:
        "Clean and functional travel booking frontend with tour details, booking modals, and dynamic content management.",
      image: "/images/shivalaya.jpeg",
      tech: ["React", "Laravel", "Inertia.js", "Tailwind CSS"],
      github: "https://github.com/Saroj9823Dangol",
      live: "https://shivalayaholidays.com",
    },
    {
      title: "PetsNepal",
      description:
        "Pet service platform for booking grooming, vet checkups, and sharing pet-related feeds with 100+ satisfied clients.",
      image: "/images/petsnepal.png",
      tech: ["React", "NestJS", "MySQL", "TypeORM"],
      github: "https://github.com/Saroj9823Dangol",
      live: "#",
    },
    {
      title: "Sajilo Ride Sharing",
      description:
        "Google Maps-based ride sharing platform with fare calculations, live location tracking, and real-time ride requests.",
      image: "/images/sajilosaathi.png",
      tech: ["React", "Node.js", "Google Maps API", "MongoDB"],
      github: "https://github.com/Saroj9823Dangol",
      live: "#",
    },
    {
      title: "Nepal Kabaddi League (NKL)",
      description:
        "Responsive sports platform showcasing fixtures, scores, standings with secure role-based admin panel.",
      image: "/images/nepalkabaddi.png",
      tech: ["Next.js", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/Saroj9823Dangol",
      live: "#",
    },
    {
      title: "Fiscal Website",
      description:
        "Business accounting and taxation management platform with modern UI and comprehensive financial tools.",
      image: "/images/fiscal.png",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Saroj9823Dangol",
      live: "#",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Marichitech AI",
      period: "Nov 2024 - Present",
      description:
        "Developing dynamic web applications with scalable backends. Led performance tuning reducing latency by 35%. Integrated third-party APIs and optimized frontend assets.",
    },
    {
      title: "Full Stack Web Developer",
      company: "AppTechnologies",
      period: "Oct 2023 - Present",
      description:
        "Designed responsive UIs using React.js and Tailwind. Built secure APIs with NestJS and Node.js. Applied mobile-first design principles for cross-device compatibility.",
    },
    {
      title: "Backend Developer",
      company: "AppTechnologies",
      period: "Jan 2022 - Oct 2023",
      description:
        "Developed REST APIs for scalable web apps. Integrated third-party services including SMS and payment gateways. Optimized SQL queries for complex data operations.",
    },
    {
      title: "React Intern",
      company: "AppTechnologies",
      period: "Sep 2021 - Dec 2021",
      description:
        "Contributed to frontend projects gaining real-world React experience. Built reusable UI components and collaborated on code reviews and feature releases.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Function to download the CV as text (fallback since PDF failed)
  const downloadCV = () => {
    const cvContent = `SAROJ DANGOL
Full Stack Developer
Lalitpur, Bagmati 44700 | +977 9863485599 | saroj9823dangol@gmail.com
GitHub: https://github.com/Saroj9823Dangol | LinkedIn: https://www.linkedin.com/in/er-saroj-dangol-9492bb216

PROFESSIONAL SUMMARY
Versatile and performance-driven Full Stack Developer with 3+ years of hands-on experience building scalable web and mobile applications. Proven track record of improving performance, integrating complex APIs, and delivering pixel-perfect, responsive interfaces. Adept at collaborating across teams, optimizing codebases, and implementing modern web technologies. Seeking to bring strong technical and problem-solving skills to a dynamic engineering team.

TECHNICAL SKILLS
Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3
Backend: Node.js, NestJS, Express.js, RESTful APIs
Mobile: React Native (Android/iOS)
Database: MySQL, MongoDB, PostgreSQL
Other: API Integration, Redux, State Management, Git, Docker, AWS Foundations

WORK EXPERIENCE

Full Stack Developer | Marichitech AI — Kathmandu (Remote) | Nov 2024 – Present
- Developed dynamic web applications with scalable backends and modern UI components
- Integrated third-party APIs to expand product features and improve user experience
- Improved page load speeds by optimizing frontend assets and lazy-loading images
- Led performance tuning of React apps and API endpoints, reducing latency by 35%

Full Stack Web Developer | Apptechnologies — Lalitpur | Oct 2023 – Present
- Designed and implemented responsive user interfaces using React.js and Tailwind
- Built secure APIs and improved backend logic with NestJS and Node.js
- Increased application performance by optimizing server responses and client-side rendering
- Applied mobile-first design principles, ensuring full compatibility across devices

Backend Developer | Apptechnologies — Lalitpur | Jan 2022 – Oct 2023
- Developed REST APIs for scalable web apps using Node.js and SQL
- Integrated third-party services (e.g., SMS, payment gateways) to enhance user journeys
- Wrote optimized SQL queries for complex data operations
- Handled deployments and continuous integration with Git workflows

React Intern | Apptechnologies — Lalitpur | Sep 2021 – Dec 2021
- Contributed to multiple frontend projects, gaining real-world experience in React
- Collaborated with the senior team on code reviews and feature releases
- Built reusable UI components to speed up development cycles

EDUCATION
B.Sc. in Computer Engineering | Tribhuvan University – Kathmandu (Kantipur Engineering College) | Graduated: August 2023
Honors: Semester Scholarships: II, IV, V, VI

CERTIFICATIONS
AWS Academy Cloud Foundations – AWS Academy Graduate | August 2022

KEY PROJECTS
1. Sajilo Ride Sharing Platform (Web & CMS)
   - Developed Google Maps-based fare calculations and live location tracking
   - Built REST APIs for real-time ride requests and user authentication
   - Enhanced UI with responsive design for CMS and user dashboard

2. Hamro Blood Bank (Web & Mobile)
   Website: https://hamrobloodbank.com
   - Engineered a real-time blood donation platform using React, Next.js, and React Native
   - Integrated donor notifications, location-based blood search, and real-time updates
   - Used Redux for scalable state management

3. Nepal Kabaddi League (NKL)
   - Developed a responsive sports platform to showcase fixtures, scores, and standings
   - Built secure role-based admin panel for content and match management

4. Shivalaya Holidays (Frontend)
   Website: https://shivalayaholidays.com
   - Delivered a clean and functional frontend for travel bookings using React and Laravel-Inertia
   - Integrated tour details, booking modals, and dynamic content management

LANGUAGES
English: Full Professional Proficiency
Hindi: Professional Working Proficiency

REFERENCE
Pralhad Chapagain
Associate Professor – Kantipur Engineering College
+977 9849867329 | pralhadchapagain@kec.edu.np`;

    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Saroj_Dangol_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 cursor-none">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full rounded-full border-2 border-white bg-transparent transition-all duration-300 ease-out"></div>
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none z-[9999] bg-white rounded-full mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        body {
          font-family: "Poppins", sans-serif;
        }

        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .hover-wave:hover {
          animation: wave 0.6s ease-in-out infinite;
        }

        .hover-wave:hover * {
          animation: wave 0.8s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        /* Hover effects for interactive elements */
        .interactive-hover:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px) rotate(2deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .button-hover:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        /* Fixed wavy text effect with proper spacing */
        .wavy-text {
          display: inline-block;
        }

        .wavy-text:hover .wavy-letter {
          display: inline-block;
          animation: wave 1s ease-in-out infinite;
        }

        .wavy-letter {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .wavy-text:hover .wavy-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .wavy-text:hover .wavy-letter:nth-child(2) {
          animation-delay: 0.1s;
        }
        .wavy-text:hover .wavy-letter:nth-child(3) {
          animation-delay: 0.2s;
        }
        .wavy-text:hover .wavy-letter:nth-child(4) {
          animation-delay: 0.3s;
        }
        .wavy-text:hover .wavy-letter:nth-child(5) {
          animation-delay: 0.4s;
        }
        .wavy-text:hover .wavy-letter:nth-child(6) {
          animation-delay: 0.5s;
        }
        .wavy-text:hover .wavy-letter:nth-child(7) {
          animation-delay: 0.6s;
        }
        .wavy-text:hover .wavy-letter:nth-child(8) {
          animation-delay: 0.7s;
        }
        .wavy-text:hover .wavy-letter:nth-child(9) {
          animation-delay: 0.8s;
        }
        .wavy-text:hover .wavy-letter:nth-child(10) {
          animation-delay: 0.9s;
        }
        .wavy-text:hover .wavy-letter:nth-child(11) {
          animation-delay: 1s;
        }
        .wavy-text:hover .wavy-letter:nth-child(12) {
          animation-delay: 1.1s;
        }
        .wavy-text:hover .wavy-letter:nth-child(13) {
          animation-delay: 1.2s;
        }
        .wavy-text:hover .wavy-letter:nth-child(14) {
          animation-delay: 1.3s;
        }
        .wavy-text:hover .wavy-letter:nth-child(15) {
          animation-delay: 1.4s;
        }
        .wavy-text:hover .wavy-letter:nth-child(16) {
          animation-delay: 1.5s;
        }
        .wavy-text:hover .wavy-letter:nth-child(17) {
          animation-delay: 1.6s;
        }
        .wavy-text:hover .wavy-letter:nth-child(18) {
          animation-delay: 1.7s;
        }
        .wavy-text:hover .wavy-letter:nth-child(19) {
          animation-delay: 1.8s;
        }
        .wavy-text:hover .wavy-letter:nth-child(20) {
          animation-delay: 1.9s;
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-200"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-400"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white wavy-text">
              <span className="wavy-letter">{"<"}</span>
              <span className="wavy-letter">S</span>
              <span className="wavy-letter">a</span>
              <span className="wavy-letter">r</span>
              <span className="wavy-letter">o</span>
              <span className="wavy-letter">j</span>
              &nbsp;
              <span className="wavy-letter">/</span>
              <span className="wavy-letter">{">"}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors duration-200 capitalize interactive-hover ${
                    activeSection === item
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 interactive-hover"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="interactive-hover"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="interactive-hover"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col space-y-2">
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200 capitalize rounded-md interactive-hover ${
                      activeSection === item
                        ? "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-400/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div
          ref={(el) => (elementsRef.current[0] = el)}
          className={`text-center z-10 transition-all duration-1000 px-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500 p-1 relative z-10 interactive-hover">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  alt="Saroj Dangol Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            <span className="wavy-letter">S</span>
            <span className="wavy-letter">a</span>
            <span className="wavy-letter">r</span>
            <span className="wavy-letter">o</span>
            <span className="wavy-letter">j</span>
            <span className="wavy-letter"> </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              D
            </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              a
            </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              n
            </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              g
            </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              o
            </span>
            <span className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              l
            </span>
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              <span className="wavy-letter">D</span>
              <span className="wavy-letter">a</span>
              <span className="wavy-letter">n</span>
              <span className="wavy-letter">g</span>
              <span className="wavy-letter">o</span>
              <span className="wavy-letter">l</span>
            </span> */}
          </h1>
          <div className="h-12 sm:h-16 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4 font-light">
            Versatile Full Stack Developer with 3+ years building scalable web
            and mobile applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 button-hover font-medium"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 button-hover font-medium"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Saroj9823Dangol"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 interactive-hover"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/er-saroj-dangol-9492bb216"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 interactive-hover"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:saroj9823dangol@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 interactive-hover"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
              <span className="wavy-letter">A</span>
              <span className="wavy-letter">b</span>
              <span className="wavy-letter">o</span>
              <span className="wavy-letter">u</span>
              <span className="wavy-letter">t</span>
              &nbsp;
              <span className="wavy-letter">M</span>
              <span className="wavy-letter">e</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              ref={(el) => (elementsRef.current[2] = el)}
              className="space-y-6 opacity-0"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                Versatile and performance-driven Full Stack Developer with 3+
                years of hands-on experience building scalable web and mobile
                applications. Proven track record of improving performance,
                integrating complex APIs, and delivering pixel-perfect,
                responsive interfaces.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                Graduate of Computer Engineering from Tribhuvan University with
                semester scholarships. AWS Academy Cloud Foundations certified.
                Adept at collaborating across teams, optimizing codebases, and
                implementing modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 interactive-hover">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Lalitpur, Nepal</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 interactive-hover">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+977 9863485599</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => (elementsRef.current[3] = el)}
              className="relative opacity-0"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-blue-200 dark:border-white/10 card-hover">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center interactive-hover">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center interactive-hover">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      3+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center interactive-hover">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                      35%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Performance Boost
                    </div>
                  </div>
                  <div className="text-center interactive-hover">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      AWS
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (elementsRef.current[10] = el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
              <span className="wavy-letter">S</span>
              <span className="wavy-letter">k</span>
              <span className="wavy-letter">i</span>
              <span className="wavy-letter">l</span>
              <span className="wavy-letter">l</span>
              <span className="wavy-letter">s</span>
              &nbsp;
              <span className="wavy-letter">&</span>
              &nbsp;
              <span className="wavy-letter">T</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">c</span>
              <span className="wavy-letter">h</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  ref={(el) => (elementsRef.current[11 + index] = el)}
                  className="bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group opacity-0 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="mb-4 relative">
                      <Icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-blue-600 dark:text-cyan-400 group-hover:animate-spin transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 dark:from-cyan-400/20 dark:to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                      {skill.level}%
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (elementsRef.current[19] = el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
              <span className="wavy-letter">F</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">a</span>
              <span className="wavy-letter">t</span>
              <span className="wavy-letter">u</span>
              <span className="wavy-letter">r</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">d</span>
              &nbsp;
              <span className="wavy-letter">P</span>
              <span className="wavy-letter">r</span>
              <span className="wavy-letter">o</span>
              <span className="wavy-letter">j</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">c</span>
              <span className="wavy-letter">t</span>
              <span className="wavy-letter">s</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white dark:hover:bg-white/10 transition-all duration-500 animate-slide-in-up card-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 interactive-hover"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 interactive-hover"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-700 border-blue-500/30 hover:bg-blue-500/30 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-cyan-500/30 dark:hover:bg-cyan-500/30 transition-all duration-300 interactive-hover text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (elementsRef.current[23] = el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
              <span className="wavy-letter">E</span>
              <span className="wavy-letter">x</span>
              <span className="wavy-letter">p</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">r</span>
              <span className="wavy-letter">i</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">n</span>
              <span className="wavy-letter">c</span>
              <span className="wavy-letter">e</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={exp.title} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-full interactive-hover"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 last:hidden"></div>
                <Card
                  className="bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm animate-slide-in-up card-hover"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-blue-600 dark:text-cyan-400 font-medium text-sm sm:text-base font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3 text-sm sm:text-base">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-light">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card
              ref={(el) => (elementsRef.current[27] = el)}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:to-purple-500/10 border-blue-500/30 dark:border-cyan-500/30 backdrop-blur-sm overflow-hidden relative opacity-0 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-purple-500/5 animate-pulse"></div>
              <CardContent className="p-6 sm:p-8 md:p-12 text-center relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-full flex items-center justify-center animate-bounce interactive-hover">
                    <Download className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
                  <span className="wavy-letter">D</span>
                  <span className="wavy-letter">o</span>
                  <span className="wavy-letter">w</span>
                  <span className="wavy-letter">n</span>
                  <span className="wavy-letter">l</span>
                  <span className="wavy-letter">o</span>
                  <span className="wavy-letter">a</span>
                  <span className="wavy-letter">d</span>
                  &nbsp;
                  <span className="wavy-letter">M</span>
                  <span className="wavy-letter">y</span>
                  &nbsp;
                  <span className="wavy-letter">R</span>
                  <span className="wavy-letter">e</span>
                  <span className="wavy-letter">s</span>
                  <span className="wavy-letter">u</span>
                  <span className="wavy-letter">m</span>
                  <span className="wavy-letter">e</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                  Get a detailed overview of my 3+ years of experience in
                  full-stack development, skills, and achievements. B.Sc.
                  Computer Engineering graduate with AWS certification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={downloadCV}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white px-6 sm:px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-cyan-500/25 button-hover font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 button-hover font-medium"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/er-saroj-dangol-9492bb216",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    View LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={(el) => (elementsRef.current[28] = el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
              <span className="wavy-letter">G</span>
              <span className="wavy-letter">e</span>
              <span className="wavy-letter">t</span>
              &nbsp;
              <span className="wavy-letter">I</span>
              <span className="wavy-letter">n</span>
              &nbsp;
              <span className="wavy-letter">T</span>
              <span className="wavy-letter">o</span>
              <span className="wavy-letter">u</span>
              <span className="wavy-letter">c</span>
              <span className="wavy-letter">h</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card
              ref={(el) => (elementsRef.current[29] = el)}
              className="bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm opacity-0 card-hover"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-8">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 font-light">
                    I'm always interested in new opportunities and exciting
                    projects. Let's discuss how we can work together to bring
                    your ideas to life!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                    <Link
                      href="mailto:saroj9823dangol@gmail.com"
                      className="flex items-center gap-3 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors interactive-hover"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm sm:text-base font-medium">
                        saroj9823dangol@gmail.com
                      </span>
                    </Link>
                    <Link
                      href="tel:+9779863485599"
                      className="flex items-center gap-3 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors interactive-hover"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-sm sm:text-base font-medium">
                        +977 9863485599
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center space-x-6">
                    <Link
                      href="https://github.com/Saroj9823Dangol"
                      target="_blank"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 interactive-hover"
                    >
                      <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/er-saroj-dangol-9492bb216"
                      target="_blank"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 interactive-hover"
                    >
                      <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                    </Link>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white py-3 rounded-full transition-all duration-300 button-hover font-medium"
                  onClick={() =>
                    window.open("mailto:saroj9823dangol@gmail.com")
                  }
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="font-light">
              &copy; {new Date().getFullYear()} Saroj Dangol. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
