"use client";

import { motion } from "framer-motion";

export function SunContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sun-gold to-sun-orange glow-sun flex items-center justify-center">
          <span className="font-display text-4xl text-background">SD</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-sun-gold mb-4">
          Saroj Dangol
        </h1>
        <p className="font-body text-xl text-muted-foreground mb-6">
          Fullstack Developer
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-terminal text-sm">
            React & Next.js
          </span>
          <span className="px-4 py-2 rounded-full bg-cosmic-blue/10 text-cosmic-blue font-terminal text-sm">
            Node.js
          </span>
          <span className="px-4 py-2 rounded-full bg-plasma-pink/10 text-plasma-pink font-terminal text-sm">
            TypeScript
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-6"
      >
        <h3 className="font-display text-xl text-foreground mb-4">
          Mission Statement
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed">
          Welcome to my Solar System! I&apos;m a passionate fullstack developer
          orbiting through the digital universe, building innovative web
          applications and exploring new technologies. Like the sun at the
          center of this portfolio, I bring energy and light to every project I
          work on.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="glass rounded-xl p-4 text-center">
          <p className="font-display text-3xl text-sun-gold">3+</p>
          <p className="font-terminal text-sm text-muted-foreground">
            Years Experience
          </p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="font-display text-3xl text-cosmic-blue">20+</p>
          <p className="font-terminal text-sm text-muted-foreground">
            Projects Completed
          </p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <p className="font-display text-3xl text-plasma-pink">2+</p>
          <p className="font-terminal text-sm text-muted-foreground">
            Companies
          </p>
        </div>
      </motion.div>
    </div>
  );
}
