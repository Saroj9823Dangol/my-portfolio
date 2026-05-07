import Link from "next/link";
import { toolsList } from "@/lib/tools/tool-list";

export default function ToolsPreview() {
  // Show first 4 tools
  const featuredTools = toolsList.slice(0, 4);

  return (
    <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <span className="label-mono">Utilities</span>
          <h2 className="heading-display mt-2 text-3xl md:text-4xl text-[var(--color-fg)]">
            Free Online Developer Tools
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            A suite of secure, client-side tools designed for developers. Fast,
            free, and 100% private.
          </p>
        </div>
        <Link
          href="/tools"
          className="text-sm text-[var(--color-accent)] hover:underline font-mono"
        >
          View all tools →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent-border)] transition-all hover:-translate-y-1"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
              {tool.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)] line-clamp-2">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
