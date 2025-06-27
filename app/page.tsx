import About from "@/components/About";
import Contact from "@/components/Contact";
import DownloadCV from "@/components/DownloadCV";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Background from "@/components/Background";
import LazyLoadSection from "@/components/LazyLoadSection";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-200 via-magenta-300 to-cyan-300 dark:from-teal-900 dark:via-blue-900 dark:to-emerald-900 transition-colors duration-300">
      <Background />
      <Navigation />

      <LazyLoadSection>
        <Hero />
      </LazyLoadSection>

      <LazyLoadSection>
        <About />
      </LazyLoadSection>

      <LazyLoadSection>
        <Skills />
      </LazyLoadSection>

      <LazyLoadSection>
        <Projects />
      </LazyLoadSection>

      <LazyLoadSection>
        <Experience />
      </LazyLoadSection>

      <LazyLoadSection>
        <DownloadCV />
      </LazyLoadSection>

      <LazyLoadSection>
        <Contact />
      </LazyLoadSection>

      <LazyLoadSection>
        <Footer />
      </LazyLoadSection>
    </div>
  );
}
