"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Rss } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <motion.div
      key="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-4xl mx-auto"
    >
      {/* RSS Subscribe */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-4 mb-8 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Rss className="text-moon-gray" />
          <span className="font-terminal text-muted-foreground">
            Satellite Feed
          </span>
        </div>
        <button className="px-4 py-2 bg-moon-gray/10 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/20 transition-colors">
          <Link href="/">Back to the System</Link>
        </button>
      </motion.div>

      {/* Blog posts */}
      <div className="space-y-6">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:border-moon-gray/50 transition-colors group cursor-pointer"
          >
            <Link href={`/blogs/${post.slug}`}>
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
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
