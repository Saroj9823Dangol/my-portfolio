"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back button */}
        <Link href="/blogs">
          <motion.button
            className="flex items-center gap-2 text-moon-gray font-terminal text-sm mb-6 hover:text-foreground transition-colors group"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all posts
          </motion.button>
        </Link>

        {/* Post header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
        </motion.header>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-moon-gray/50 to-transparent mb-8"
        />

        {/* Post content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-moon max-w-none"
        >
          <div
            className="font-body text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Post footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
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
            <Link href="/blogs">
              <button className="px-6 py-2 bg-moon-gray/20 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/30 transition-colors">
                View All Posts
              </button>
            </Link>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
