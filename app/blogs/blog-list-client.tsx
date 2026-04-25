"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <div className="mt-12 divide-y divide-[var(--color-border)]">
      {posts.map((post) => (
        <article key={post.slug} className="group py-8 first:pt-0">
          <Link href={`/blogs/${post.slug}`} className="block">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <time className="font-mono text-xs text-[var(--color-fg-subtle)]">
                {post.formattedDate || post.date}
              </time>
              <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                ·
              </span>
              <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                {post.readingTime}
              </span>
              {post.tags[0] && (
                <>
                  <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                    ·
                  </span>
                  <span className="font-mono text-xs bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2 py-0.5">
                    {post.tags[0]}
                  </span>
                </>
              )}
            </div>
            <h2 className="font-display text-2xl text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)] line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
