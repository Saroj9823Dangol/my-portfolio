"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Rocket } from "lucide-react";

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-6 md:p-8"
      >
        <h3 className="font-display text-2xl text-earth-blue mb-4">
          Who Am I?
        </h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          I&apos;m Saroj Dangol, a fullstack developer with a passion for
          creating beautiful, functional, and user-friendly web applications. My
          journey in programming started when I was fascinated by the endless
          possibilities that code could bring to life.
        </p>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          When I&apos;m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or stargazing (literally and
          figuratively through data!).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <MapPin className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Location</h4>
            <p className="font-body text-muted-foreground">
              Solar System Alpha-7
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Calendar className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Experience</h4>
            <p className="font-body text-muted-foreground">
              3+ Years in Development
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Heart className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Passion</h4>
            <p className="font-body text-muted-foreground">
              Clean Code & Great UX
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Rocket className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Goal</h4>
            <p className="font-body text-muted-foreground">Build the Future</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-6 md:p-8"
      >
        <h3 className="font-display text-2xl text-earth-blue mb-4">Timeline</h3>
        <div className="space-y-4">
          {[
            { year: "2019", event: "Started coding journey" },
            { year: "2020", event: "First professional project" },
            { year: "2021", event: "Joined a startup" },
            { year: "2022", event: "Lead developer role" },
            { year: "2023", event: "Launched 10+ projects" },
            { year: "2024", event: "Building the future" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-terminal text-earth-blue shrink-0 w-16">
                {item.year}
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="font-body text-muted-foreground">
                {item.event}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
