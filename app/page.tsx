import BackgroundCanvas from "@/components/background-canvas";
import ContactPortal from "@/components/contact-portal";
import CreativeHero from "@/components/creative-hero";
import FloatingNav from "@/components/floating-nav";
import MobileGestures from "@/components/mobile-guestures";
import ProjectsMobile from "@/components/projects-mobile";
import SkillsSection from "@/components/skills-section";
import StorySection from "@/components/story-section";
import TouchRipple from "@/components/touch-ripple";
import "../styles/globals.css";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-peach-200 via-magenta-300 to-cyan-300 dark:from-teal-900 dark:via-blue-900 dark:to-emerald-900 transition-colors duration-300">
    //   <Background />
    //   <Navigation />

    //   <main className="pl-0 sm:pl-24">
    //     <LazyLoadSection>
    //       <Hero />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <About />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <Skills />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <Projects />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <Experience />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <DownloadCV />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <Contact />
    //     </LazyLoadSection>

    //     <LazyLoadSection>
    //       <Footer />
    //     </LazyLoadSection>
    //   </main>
    // </div>
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundCanvas />
      <TouchRipple />
      <MobileGestures />
      <FloatingNav />
      <CreativeHero />
      <StorySection />
      <SkillsSection />
      <ProjectsMobile />
      <ContactPortal />
    </main>
  );
}
