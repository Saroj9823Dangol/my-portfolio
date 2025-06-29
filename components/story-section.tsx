import { Coffee, Lightbulb, Rocket, Terminal } from "lucide-react";

export default function StorySection() {
  const storySteps = [
    {
      icon: Terminal,
      year: "2020",
      title: "The Spark",
      description:
        "First line of code. HTML felt like magic, JavaScript like wizardry.",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Coffee,
      year: "2021",
      title: "The Grind",
      description:
        "Countless nights, endless tutorials, building anything and everything.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Lightbulb,
      year: "2022",
      title: "The Breakthrough",
      description:
        "First major project deployed. Users loved it. I was hooked forever.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Rocket,
      year: "2024",
      title: "The Mission",
      description:
        "Now I craft digital experiences that matter, solve real problems.",
      color: "from-cyan-400 to-purple-500",
    },
  ];

  return (
    <section id="story" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MY JOURNEY
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        {/* Story timeline - diagonal layout */}
        <div className="relative space-y-32">
          {storySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                <div
                  className={`flex items-center ${
                    isEven ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`relative ${
                      isEven ? "text-left" : "text-right"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`relative p-8 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500`}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-white/20 rounded-full mr-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-2xl font-black text-white">
                            {step.year}
                          </span>
                        </div>

                        <h3 className="text-3xl font-black text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Connecting line */}
                    {index < storySteps.length - 1 && (
                      <div
                        className={`absolute top-full ${
                          isEven ? "left-1/2" : "right-1/2"
                        } w-px h-32 bg-gradient-to-b from-white/50 to-transparent transform ${
                          isEven
                            ? "translate-x-8 rotate-12"
                            : "-translate-x-8 -rotate-12"
                        }`}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Projects Shipped" },
            { number: "3+", label: "Years Coding" },
            { number: "∞", label: "Problems Solved" },
            { number: "24/7", label: "Passion Mode" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
