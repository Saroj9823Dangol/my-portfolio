import { skills } from "@/data/skills";
import SkillBar from "@/components/ui/skill-bar";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <span className="label-mono">Expertise</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Skills
      </h2>
      <p className="mt-4 text-[var(--color-fg-muted)] max-w-xl">
        Technologies I work with daily, measured by professional proficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-10">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}
