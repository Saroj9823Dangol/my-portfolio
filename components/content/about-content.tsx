"use client";

import { MapPin, Calendar, Heart, Rocket } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div
        className="glass rounded-xl p-6 md:p-8"
      >
        <h3 className="font-display text-2xl text-earth-blue mb-4">
          IT Developer in Nepal
        </h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          Namaste! I&apos;m{" "}
          <span className="text-foreground font-semibold">Saroj Dangol</span>, a
          dedicated{" "}
          <span className="text-foreground font-semibold">
            Full Stack Developer
          </span>{" "}
          based in <span className="text-foreground">Lalitpur, Nepal</span>.
          With over 3 years of professional experience, I specialize in building
          scalable web and mobile applications using the{" "}
          <span className="text-foreground">MERN Stack</span> and{" "}
          <span className="text-foreground">React Native</span>.
        </p>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          My mission is to help businesses in Kathmandu Valley and globally to
          digitally transform their ideas into reality. Whether you need a
          custom website, a complex SaaS platform, or a cross-platform mobile
          app, I deliver clean, efficient, and SEO-friendly code.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            View My Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <MapPin className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Location</h4>
            <p className="font-body text-muted-foreground">
              Lalitpur, Nepal (Bagmati)
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Calendar className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Experience</h4>
            <p className="font-body text-muted-foreground">
              3+ Years Professional
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Heart className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Expertise</h4>
            <p className="font-body text-muted-foreground">
              MERN, React Native, AWS
            </p>
          </div>
        </div>

        <div className="glass rounded-xl p-6 flex items-start gap-4">
          <Rocket className="text-earth-blue shrink-0" />
          <div>
            <h4 className="font-display text-lg text-foreground">Goal</h4>
            <p className="font-body text-muted-foreground">
              Digital Excellence
            </p>
          </div>
        </div>
      </div>

      <div
        className="glass rounded-xl p-6 md:p-8"
      >
        <h3 className="font-display text-2xl text-earth-blue mb-4">
          Professional Timeline
        </h3>
        <div className="space-y-4">
          {experience.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-24 shrink-0 text-right">
                <span className="font-terminal text-sm text-earth-blue block">
                  {item.period.split(" - ")[0]}
                </span>
                <span className="font-terminal text-[10px] text-muted-foreground block">
                  {item.company}
                </span>
              </div>
              <div className="relative pt-1">
                <div className="w-2 h-2 rounded-full bg-earth-blue" />
                {i !== experience.length - 1 && (
                  <div className="absolute top-3 left-1 w-px h-full bg-border" />
                )}
              </div>
              <div className="pb-4">
                <h4 className="font-body font-medium text-foreground text-sm">
                  {item.title}
                </h4>
                <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
