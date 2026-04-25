"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { AdBanner } from "@/components/tools/ad-banner";

interface ToolLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  icon: string;
}

export function ToolLayout({ children, title, description, icon }: ToolLayoutProps) {
  return (
    <div className="min-h-screen py-8">
      <AdBanner slot="top-tool" />
      
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8">
          <Link 
            href="/tools"
            className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors mb-4 inline-flex items-center gap-1"
          >
            ← Back to Tools
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-sm text-[var(--color-fg-muted)]">{description}</p>
            </div>
          </div>
        </header>

        {children}
      </div>

      <AdBanner slot="bottom-tool" />
    </div>
  );
}