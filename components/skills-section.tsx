import { Cloud, Code, Database, Server } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "GraphQL", level: 78 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 82 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Prisma", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className={`font-black mb-6 text-3xl md:text-5xl`}>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Skills.json
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
            <p className={`text-gray-400 mt-6 max-w-3xl mx-auto text-xl`}>
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className={`grid gap-8 md:grid-cols-2`}>
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;

              return (
                <div
                  key={categoryIndex}
                  className={`group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-105 overflow-hidden`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="p-8">
                    {/* Category header */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3
                        className={`font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-2xl`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span
                              className={`text-slate-300 font-medium text-base`}
                            >
                              {skill.name}
                            </span>
                            <span className={`text-slate-400 text-sm`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: `${skill.level}%`,
                                transitionDelay: `${
                                  categoryIndex * 0.1 + skillIndex * 0.1
                                }s`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Additional skills tags */}
          <div className="mt-16 text-center">
            <h3 className={`font-bold text-white mb-8 text-xl`}>
              Also experienced with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Vue.js",
                "Angular",
                "Svelte",
                "Go",
                "Rust",
                "Java",
                "PHP",
                "Firebase",
                "Supabase",
                "Vercel",
                "Netlify",
                "GitHub Actions",
                "Jest",
                "Cypress",
                "Webpack",
                "Vite",
                "Figma",
                "Adobe XD",
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-sm`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
