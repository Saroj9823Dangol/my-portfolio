// app/components/Skills.tsx (Server Component)

import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            {"Skills & Tech".split("").map((char, i) => (
              <span key={i} className="wavy-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-transparent dark:bg-white/5 dark:border-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center shadow transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-blue-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {skill.level}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
