import Link from "next/link";
import { ALL_BLOG_POSTS } from "@/data/blogs";

export default function BlogPreview() {
  const latestPosts = ALL_BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <span className="label-mono">From the Blog</span>
      <h2 className="heading-display mt-2 text-4xl text-[var(--color-fg)]">
        Latest writing
      </h2>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent-border)] transition-colors"
          >
            <time className="font-mono text-xs text-[var(--color-fg-subtle)]">
              {post.date}
            </time>
            <h3 className="font-display mt-2 text-xl text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-fg-muted)] line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4">
              <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                {post.readingTime}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-10 text-center">
        <Link
          href="/blogs"
          className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          View all posts →
        </Link>
      </div>
    </section>
  );
}
