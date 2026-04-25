"use client";

import {
  ArrowRight,
  Cloud,
  Database,
  Globe,
  Smartphone
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js. SEO-friendly and high-performance.",
    icon: Globe,
    features: [
      "Custom Website Design",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "CMS Development",
      "Single Page Applications",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native. Native performance with a single codebase.",
    icon: Smartphone,
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
      "UI/UX Design",
      "App Maintenance",
    ],
  },
  {
    id: "backend-api",
    title: "Backend & API",
    description:
      "Robust and scalable backend architectures. RESTful APIs and GraphQL services designed for performance.",
    icon: Database,
    features: [
      "API Development",
      "Database Design",
      "Microservices",
      "Server Management",
      "Data Migration",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Secure and scalable cloud infrastructure on AWS. Automated CI/CD pipelines for smooth deployment.",
    icon: Cloud,
    features: [
      "AWS Infrastructure",
      "Serverless Architecture",
      "CI/CD Implementation",
      "Cloud Migration",
      "Performance Optimization",
    ],
  },
];

export function ServicesContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div
        className="glass rounded-xl p-6 md:p-8 text-center"
      >
        <h3 className="font-display text-2xl text-earth-blue mb-2">
          Technical Services
        </h3>
        <p className="font-body text-muted-foreground">
          Comprehensive development solutions tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group flex flex-col glass rounded-xl overflow-hidden hover:border-earth-blue/50 transition-colors"
          >
            {/* Gradient Header with Icon */}
            <div className="relative h-32 bg-gradient-to-br from-earth-blue/10 to-cosmic-blue/10 group-hover:from-earth-blue/20 group-hover:to-cosmic-blue/20 transition-colors flex items-center justify-center">
              <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-earth-blue/20 text-earth-blue group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-earth-blue transition-colors">
                {service.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                {service.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center rounded-full bg-secondary/50 border border-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                    >
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="inline-flex items-center rounded-full bg-secondary/50 border border-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                      +{service.features.length - 3} more
                    </div>
                  )}
                </div>

                <div className="pt-2 mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-earth-blue hover:underline underline-offset-4"
                  >
                    Start Project <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="text-center"
      >
        <Link
          href="/services"
          className="inline-flex items-center px-6 py-2 rounded-full bg-earth-blue/10 text-earth-blue hover:bg-earth-blue/20 transition-colors border border-earth-blue/20 font-terminal text-sm"
        >
          View All Details <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
