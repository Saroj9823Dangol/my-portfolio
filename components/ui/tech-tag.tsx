interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="font-mono text-xs bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2.5 py-0.5">
      {label}
    </span>
  );
}
