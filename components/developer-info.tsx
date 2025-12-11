"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

interface DeveloperInfoProps {
  visible: boolean;
}

const socialLinks = [
  { icon: Github, href: "https://github.com/Saroj9823Dangol", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/er-saroj-dangol-9492bb216",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:hello@sarojdangol012.com", label: "Email" },
];

export const DeveloperInfo = memo(function DeveloperInfo({
  visible,
}: DeveloperInfoProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-24 left-4 z-20"
        >
          <div className="relative">
            {/* Collapsed State - Just avatar and name */}
            <motion.div
              animate={{ width: expanded ? "280px" : "60px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-3">
                {/* Avatar Row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sun-gold to-sun-orange glow-sun flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <h2 className="font-display text-base text-foreground whitespace-nowrap">
                          Saroj Dangol
                        </h2>
                        <p className="font-body text-xs text-muted-foreground whitespace-nowrap">
                          Fullstack Developer
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Location */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground/70 mt-2 mb-3">
                        <MapPin className="w-3 h-3" />
                        <span className="font-terminal">Lalitpur, Nepal</span>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <p className="font-display text-sm text-sun-gold">
                            3+
                          </p>
                          <p className="font-terminal text-[9px] text-muted-foreground">
                            Years
                          </p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <p className="font-display text-sm text-cosmic-blue">
                            20+
                          </p>
                          <p className="font-terminal text-[9px] text-muted-foreground">
                            Projects
                          </p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <p className="font-display text-sm text-plasma-pink">
                            2+
                          </p>
                          <p className="font-terminal text-[9px] text-muted-foreground">
                            Companies
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors"
                            aria-label={label}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Expand/Collapse Toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background/80 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              {expanded ? (
                <ChevronLeft className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* Hint below card */}
          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-muted-foreground/50 font-terminal mt-2 text-center"
              >
                Press ` for terminal
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
