import { ALL_BLOG_POSTS, type BlogPost } from "@/data/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Get a blog post by its slug
 */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogs(): BlogPost[] {
  return ALL_BLOG_POSTS.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Generate metadata for a blog post
 */
export function generateBlogMetadata(post: BlogPost): Metadata {
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url =
    post.canonicalUrl || `https://www.sarojdangol012.com.np/blogs/${post.slug}`;
  const imageUrl = post.image
    ? `https://www.sarojdangol012.com.np${post.image}`
    : undefined;

  return {
    title,
    description,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD structured data for a blog post
 */
export function generateBlogStructuredData(post: BlogPost) {
  const url =
    post.canonicalUrl || `https://www.sarojdangol012.com.np/blogs/${post.slug}`;
  const imageUrl = post.image
    ? `https://www.sarojdangol012.com.np${post.image}`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Saroj Dangol",
    },
    publisher: {
      "@type": "Person",
      name: "Saroj Dangol",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
  };
}
