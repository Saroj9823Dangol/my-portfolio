const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "9+", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
  { value: "AWS", label: "Certified" },
];

export default function Stats() {
  return (
    <div className="border-t border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 px-4 text-center border-r border-[var(--color-border)] last:border-r-0"
            >
              <div className="font-mono text-2xl font-medium text-[var(--color-fg)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[var(--color-fg-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
