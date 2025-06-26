// app/components/About.tsx
import { MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            {"About Me".split("").map((char, i) => (
              <span key={i} className="wavy-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Versatile and performance-driven Full Stack Developer with 3+
              years of hands-on experience building scalable web and mobile
              applications. Proven track record of improving performance,
              integrating complex APIs, and delivering pixel-perfect, responsive
              interfaces.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Graduate of Computer Engineering from Tribhuvan University. AWS
              Academy Cloud Foundations certified. Adept at collaborating across
              teams, optimizing codebases, and implementing modern web
              technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+977 9863485599</span>
              </div>
            </div>
          </div>

          {/* Right: Stats Box */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-blue-200 dark:border-white/10">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    value: "50+",
                    label: "Projects Completed",
                    color: "text-blue-600 dark:text-cyan-400",
                  },
                  {
                    value: "3+",
                    label: "Years Experience",
                    color: "text-purple-600 dark:text-purple-400",
                  },
                  {
                    value: "35%",
                    label: "Performance Boost",
                    color: "text-blue-600 dark:text-cyan-400",
                  },
                  {
                    value: "AWS",
                    label: "Certified",
                    color: "text-purple-600 dark:text-purple-400",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`text-2xl sm:text-3xl font-bold mb-2 ${item.color}`}
                    >
                      {item.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
