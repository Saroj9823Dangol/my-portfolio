interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--color-fg)]">{name}</span>
        <span className="font-mono text-xs text-[var(--color-fg-muted)]">{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full bg-[var(--color-surface-2)]"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
      >
        <div
          className="h-full rounded-full bg-[var(--color-accent)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
