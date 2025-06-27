import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 wavy-text">
            <span className="wavy-letter">E</span>
            <span className="wavy-letter">x</span>
            <span className="wavy-letter">p</span>
            <span className="wavy-letter">e</span>
            <span className="wavy-letter">r</span>
            <span className="wavy-letter">i</span>
            <span className="wavy-letter">e</span>
            <span className="wavy-letter">n</span>
            <span className="wavy-letter">c</span>
            <span className="wavy-letter">e</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.title} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 last:hidden"></div>
              <div className="bg-transparent dark:bg-white/5 dark:border-white/10 backdrop-blur-sm rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-blue-600 dark:text-cyan-400 font-medium text-sm sm:text-base font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3 text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
