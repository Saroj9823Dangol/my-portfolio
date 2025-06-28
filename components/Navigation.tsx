"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: "home",
      color:
        "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500",
    },
    {
      name: "about",
      color:
        "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500",
    },
    {
      name: "skills",
      color:
        "text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-500",
    },
    {
      name: "projects",
      color:
        "text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500",
    },
    {
      name: "experience",
      color:
        "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500",
    },
    {
      name: "contact",
      color:
        "text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500",
    },
  ];

  const itemVariants = {
    inactive: {
      y: 0,
      opacity: 0.8,
      scale: 1,
    },
    active: {
      y: -5,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 25,
        mass: 0.5,
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        // delay will be set dynamically in the component
      },
    },
  };

  return (
    <>
      <nav className="fixed left-0 top-0 h-screen overflow-y-auto w-fit z-50 flex-col items-start py-8 pl-6 hidden sm:flex">
        <div className="relative flex flex-col items-start space-y-8 h-full">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900 dark:text-white mb-8 relative z-10">
            <span className="wavy-letter">&lt;saroj /&gt;</span>
          </div>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <div
              key={item.name}
              ref={(el) => {
                menuRefs.current[item.name] = el;
              }}
              className="relative flex items-center"
            >
              <motion.button
                onClick={() => scrollToSection(item.name)}
                className={`relative z-10 py-2 pl-4 pr-2 text-sm font-medium capitalize ${
                  item.color
                } rounded-lg transition-colors duration-300 ${
                  activeSection === item.name
                    ? "font-bold bg-gray-200/30 dark:bg-white/10"
                    : ""
                }`}
                variants={itemVariants}
                animate={activeSection === item.name ? "active" : "inactive"}
              >
                {item.name}
              </motion.button>
            </div>
          ))}

          {/* Theme Toggle */}
          <div className="">
            <Button
              name="theme"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-full bg-transparent hover:bg-gray-200/30 dark:hover:bg-white/20 transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden fixed top-0 right-0 z-50 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-transparent hover:bg-gray-200/30 dark:hover:bg-white/20 transition-all duration-300"
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90, scale: 1.1 },
              closed: { rotate: 0, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="text-gray-900 dark:text-white !w-12 !h-12" />
            ) : (
              <Menu className="text-gray-900 dark:text-white !w-12 !h-12" />
            )}
          </motion.div>
        </Button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="sm:hidden fixed top-0 left-0 h-screen w-64 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md z-40 flex flex-col items-start py-8 px-6 rounded-r-2xl shadow-lg overflow-y-auto scrollbar-hide"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              <motion.span
                className="wavy-letter"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <span className="wavy-letter">&lt;saroj /&gt;</span>
              </motion.span>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                custom={index}
                onClick={() => scrollToSection(item.name)}
                className={`w-full py-3 px-4 text-base font-medium capitalize ${
                  item.color
                } rounded-lg transition-colors duration-300 text-left ${
                  activeSection === item.name
                    ? "font-bold bg-gradient-to-r from-blue-500/20 to-cyan-400/20 dark:from-cyan-600/20 dark:to-blue-600/20"
                    : ""
                }`}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <Button
              name="theme"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-8 w-12 h-12 rounded-full bg-transparent hover:bg-gray-200/30 dark:hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.6,
                }}
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
