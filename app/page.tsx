import About from "@/components/About";
import Contact from "@/components/Contact";
import DownloadCV from "@/components/DownloadCV";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <>
      {/* <PushNotificationManager />
      <InstallPrompt /> */}

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 cursor-none">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-200"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-400"></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DownloadCV />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
