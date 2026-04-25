import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects — Saroj Dangol",
  description: "Web and mobile projects built by Saroj Dangol — MERN stack, React Native, and AWS solutions.",
  alternates: { canonical: "https://www.sarojdangol012.com.np/projects" },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
