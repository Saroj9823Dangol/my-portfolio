import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { sampleBlogPosts, blogCategories, formatDate } from "@/data/blog";
import { Clock, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog - IT Development Insights & Tutorials | Saroj Dangol",
  description:
    "Expert insights on web development, mobile apps, cloud solutions, and IT career advice. Learn from a senior developer in Nepal.",
  keywords: [
    "IT blog Nepal",
    "web development tutorials",
    "React Native guides",
    "MERN stack articles",
    "developer blog Lalitpur",
    "programming tutorials Nepal",
  ],
  canonical: "https://www.sarojdangol012.com.np/blog",
});

export default function BlogPage() {
  const featuredPosts = sampleBlogPosts.filter((post) => post.featured);
  const recentPosts = sampleBlogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge about web development, mobile apps, cloud
            solutions, and the IT industry in Nepal
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-blue-500/20">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      {post.imageAlt}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-500/10">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    {post.imageAlt}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm available for freelance projects and consulting. Let's build
            something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
