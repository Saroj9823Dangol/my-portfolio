import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/data/blogs";
import { ALL_BLOG_POSTS } from "@/data/blogs";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  // Get related posts
  const relatedPosts = post.relatedSlugs
    ? ALL_BLOG_POSTS.filter((p) => post.relatedSlugs!.includes(p.slug)).slice(0, 3)
    : [];

  return (
    <div className="pt-16">
      <article className="py-16 max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors mb-8"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All posts
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="font-mono text-xs text-[var(--color-fg-subtle)]">
              {post.formattedDate || post.date}
            </time>
            <span className="font-mono text-xs text-[var(--color-fg-subtle)]">·</span>
            <span className="font-mono text-xs text-[var(--color-fg-subtle)]">{post.readingTime}</span>
            {post.tags[0] && (
              <>
                <span className="font-mono text-xs text-[var(--color-fg-subtle)]">·</span>
                <span className="font-mono text-xs bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full px-2 py-0.5">
                  {post.tags[0]}
                </span>
              </>
            )}
          </div>

          <h1 className="heading-display text-3xl md:text-4xl text-[var(--color-fg)] leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-[var(--color-fg-muted)] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Cover image */}
          {post.image && (
            <div className="mt-6 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Key Takeaways */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <aside className="mb-8 rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] p-6">
            <h2 className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                  <span className="text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Post content */}
        <div
          className="text-[var(--color-fg-muted)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Inline CTA Box */}
        <div className="my-12 p-8 rounded-xl border-2 border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] text-center">
          <h2 className="heading-display text-2xl text-[var(--color-fg)]">
            Looking for an Individual Expert?
          </h2>
          <p className="mt-2 text-[var(--color-fg-muted)] max-w-md mx-auto">
            Get the same quality as an agency with the direct accountability of
            the best freelance developer in Lalitpur.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[var(--color-accent)] text-black font-medium rounded-lg px-6 py-3 text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/services"
              className="border border-[var(--color-accent-border)] text-[var(--color-fg)] rounded-lg px-6 py-3 text-sm hover:bg-[var(--color-accent-dim)] transition-colors"
            >
              View My Services
            </Link>
          </div>
        </div>

        {/* Author bio */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-start gap-4">
            <Image
              src="/images/profile.webp"
              alt="Saroj Dangol"
              width={56}
              height={56}
              className="rounded-full shrink-0"
            />
            <div>
              <p className="font-semibold text-[var(--color-fg)]">Saroj Dangol</p>
              <p className="text-sm text-[var(--color-accent)]">Senior Full Stack Developer</p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                React · Node.js · Next.js · React Native · AWS
              </p>
              <Link
                href="/about"
                className="mt-2 inline-block text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
              >
                About Saroj →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-mono text-xs text-[var(--color-fg-subtle)] uppercase tracking-widest mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent-border)] transition-colors"
                >
                  <time className="font-mono text-xs text-[var(--color-fg-subtle)]">{related.date}</time>
                  <h3 className="mt-1 text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
