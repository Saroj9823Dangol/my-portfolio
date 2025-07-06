import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Zap } from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      icon: Brain,
      title: "Think Different",
      description:
        "Every problem is an opportunity to innovate. I approach challenges with curiosity and creativity.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description:
        "Rapid prototyping and iterative development. Speed without compromising quality.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Stay Focused",
      description:
        "User-centric design and business impact drive every technical decision I make.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Rocket,
      title: "Scale Up",
      description:
        "Building for tomorrow. Architectures that grow with your business needs.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="about" className="py-20 relative max-auto px-4">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 opacity-100 translate-y-0">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About.exe
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="opacity-100 translate-x-0">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                I don't just write code—I architect digital experiences that
                matter. My journey began with a simple question:
                <h1 className="text-cyan-400 font-semibold">
                  {" "}
                  "What if technology could be more human?"
                </h1>
              </p>
              <p className="text-lg leading-relaxed">
                Over 3 years, I've transformed complex business challenges into
                elegant solutions, working with startups that became unicorns
                and enterprises that needed to think like startups.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not pushing pixels or optimizing algorithms, you'll
                find me mentoring the next generation of developers or
                contributing to open-source projects that democratize
                technology.
              </p>
            </div>
          </div>

          {/* Interactive Code Block */}
          <div className="opacity-100 translate-x-0">
            <div className="bg-transparent blur-sm border border-cyan-500/30 overflow-hidden">
              <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="text-cyan-400 text-sm font-mono">saroj.js</div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400">
                  class <span className="text-yellow-400">Developer</span> {"{"}
                </div>
                <div className="ml-4 text-gray-300">
                  <div>
                    <span className="text-cyan-400">constructor</span>() {"{"}
                  </div>
                  <div className="ml-4">
                    <div>
                      this.<span className="text-green-400">passion</span> ={" "}
                      <span className="text-orange-400">'innovation'</span>;
                    </div>
                    <div>
                      this.<span className="text-green-400">experience</span> ={" "}
                      <span className="text-orange-400">'3+ years'</span>;
                    </div>
                    <div>
                      this.<span className="text-green-400">mindset</span> ={" "}
                      <span className="text-orange-400">'growth'</span>;
                    </div>
                  </div>
                  <div>{"}"}</div>
                </div>
                <div className="text-purple-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={principle.title}
              className="relative bg-gray-900/50 border-gray-700 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-10`}
              />

              <div className="relative p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${principle.color} mb-4`}
                >
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
