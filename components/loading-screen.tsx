"use client";

import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADING_STATUSES = [
  "Initializing Solar System...",
  "Loading planetary data...",
  "Calculating orbital paths...",
  "Generating starfield...",
  "System ready.",
] as const;

export const LoadingScreen = memo(function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<(typeof LOADING_STATUSES)[number]>(
    LOADING_STATUSES[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }

        const statusIndex = Math.min(
          Math.floor(next / (100 / LOADING_STATUSES.length)),
          LOADING_STATUSES.length - 1
        );
        setStatus(LOADING_STATUSES[statusIndex]);
        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Loading solar system"
      >
        {/* Deep Space Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a103c_0%,_#000000_100%)] opacity-50" />

        {/* Animated Premium Sun */}
        <div className="relative mb-8">
          {/* Outer Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-3xl bg-orange-600/30"
          />
          {/* Inner Glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-2xl bg-yellow-500/40"
          />

          {/* Core Sun */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full relative overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffd700 0%, #f59e0b 40%, #ea580c 100%)",
              boxShadow:
                "0 0 60px rgba(251, 191, 36, 0.6), inset -10px -10px 40px rgba(180, 83, 9, 0.5)",
            }}
          >
            {/* Surface texture simulation */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                mixBlendMode: "overlay",
              }}
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative font-display text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-200 mb-6 tracking-[0.2em]"
        >
          SOLAR SYSTEM
        </motion.h1>

        {/* Progress bar container */}
        <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4 backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            style={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
          />
        </div>

        <div className="h-6 flex flex-col items-center">
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="font-terminal text-xs text-orange-200/70"
          >
            {status}
          </motion.p>
        </div>

        <p className="font-terminal text-[10px] text-white/30 mt-2 tracking-widest absolute bottom-10">
          INITIALIZING SEQUENCE
        </p>
      </motion.div>
    </AnimatePresence>
  );
});
