import { AboutSection } from "@/components/About";
import BackgroundCanvas from "@/components/background-canvas";
import ContactPortal from "@/components/contact-portal";
import CreativeHero from "@/components/creative-hero";
import DownloadCV from "@/components/DownloadCV";
import Experience from "@/components/Experience";
import FloatingNav from "@/components/floating-nav";
import ProjectsMobile from "@/components/projects-mobile";
import SkillsSection from "@/components/skills-section";
import StorySection from "@/components/story-section";
import "../styles/globals.css";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundCanvas />
      <FloatingNav />
      <CreativeHero />
      <AboutSection />
      <StorySection />
      <SkillsSection />
      <ProjectsMobile />
      <Experience />
      <DownloadCV />
      <ContactPortal />
    </main>
  );
}
