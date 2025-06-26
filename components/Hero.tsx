// app/components/Hero.tsx (Server Component)
import { Button } from "@/components/ui/button"; // Assuming you have a shared Button component
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypingAnimation } from "./TypingAnimations";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="text-center z-10 px-4">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500 p-1 relative z-10">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              <Image
                priority
                src="/images/profile.png"
                alt="Saroj Dangol Profile"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
          <span className="sr-only">Saroj Dangol - </span>
          {"Saroj".split("").map((char, i) => (
            <span key={i} className="wavy-letter" aria-hidden="true">
              {char}
            </span>
          ))}
          <span className="wavy-letter" aria-hidden="true">
            &nbsp;
          </span>
          {"Dangol".split("").map((char, i) => (
            <span
              key={i + 100}
              className="wavy-letter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500"
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Static Title (TypingAnimation removed) */}
        <TypingAnimation
          words={[
            "Full Stack Developer",
            "React Specialist",
            "Node.js Expert",
            "MERN Stack Developer",
          ]}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-mono h-12 sm:h-16 mb-8"
        />

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4 font-light">
          Versatile Full Stack Developer with 3+ years building scalable web and
          mobile applications
        </p>

        {/* Action Buttons (Static links instead of scroll) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
          <Link href="#projects">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-cyan-600 dark:hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/Saroj9823Dangol"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/er-saroj-dangol-9492bb216"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:saroj9823dangol@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
