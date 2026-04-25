"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, ArrowLeft, Rss, Tag } from "lucide-react";
import { ALL_BLOG_POSTS as BLOG_POSTS, type BlogPost } from "@/data/blogs";

function BlogDetail({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <div
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-moon-gray font-terminal text-sm mb-6 hover:text-foreground transition-colors group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to all posts
      </button>

      {/* Post header */}
      <header
        className="mb-8"
      >
        <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground font-terminal text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.formattedDate ||
              new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-moon-gray/10 text-moon-gray font-terminal text-xs"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Cover Image */}
        {post.image && (
          <div
            className="mt-6 rounded-xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </header>

      {/* Divider */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-moon-gray/50 to-transparent mb-8"
      />

      {/* Post content */}
      <article
        className="prose prose-invert prose-moon max-w-none"
      >
        <div
          className="font-body text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Post footer */}
      <footer
        className="mt-12 pt-8 border-t border-moon-gray/20"
      >
        <div className="glass rounded-xl p-6 text-center">
          {post.author && (
            <p className="font-terminal text-sm text-muted-foreground mb-2">
              Written by {post.author}
            </p>
          )}
          <p className="font-terminal text-muted-foreground mb-4">
            Enjoyed this article? Check out more posts or get in touch.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-moon-gray/20 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/30 transition-colors"
          >
            View All Posts
          </button>
        </div>
      </footer>
    </div>
  );
}

export function BlogContent() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div>
      {selectedPost ? (
        <BlogDetail
          key="detail"
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      ) : (
        <div
          key="list"
          className="max-w-4xl mx-auto"
        >
          {/* RSS Subscribe */}
          <div
            className="glass rounded-xl p-4 mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Rss className="text-moon-gray" />
              <span className="font-terminal text-muted-foreground">
                Satellite Feed
              </span>
            </div>
            <button className="px-4 py-2 bg-moon-gray/10 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/20 transition-colors">
              Subscribe to RSS
            </button>
          </div>

          {/* Blog posts */}
          <div className="space-y-6">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={i}
                onClick={() => setSelectedPost(post)}
                className="glass rounded-xl p-6 hover:border-moon-gray/50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-4 mb-3 text-muted-foreground font-terminal text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.formattedDate ||
                      new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-display text-xl text-moon-gray mb-2 group-hover:text-foreground transition-colors">
                  {post.title}
                </h3>

                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-moon-gray/10 text-moon-gray font-terminal text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-moon-gray font-terminal text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
