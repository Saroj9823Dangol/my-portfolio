"use client";

import Link from "next/link";
import { toolsList } from "@/lib/tools/tool-list";
import { AdBanner } from "@/components/tools/ad-banner";

export default function ToolsPageClient() {
  return (
    <div className="min-h-screen py-12">
      <AdBanner slot="top-tools" />
      
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            ToolHub <span className="text-[var(--color-accent)]">Nepal</span>
          </h1>
          <p className="text-lg text-[var(--color-fg-muted)] max-w-2xl mx-auto">
            Free online developer utilities. 100% client-side processing - your data never leaves your browser.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsList.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tool.icon}</span>
                <h2 className="text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {tool.name}
                </h2>
              </div>
              <p className="text-sm text-[var(--color-fg-muted)]">
                {tool.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[var(--color-border)] text-[var(--color-fg-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 p-8 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Need Custom Developer Tools?</h2>
            <p className="text-[var(--color-fg-muted)] mb-6">
              We can build custom utilities tailored to your specific needs. Contact us for custom tool development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
            >
              Request Custom Tool
            </Link>
          </div>
        </section>
      </div>

      <AdBanner slot="bottom-tools" />
    </div>
  );
}