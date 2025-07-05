import { jwtAuthentication } from "@/data/blogs/jwt-authentication";
import { mernStackGuide } from "@/data/blogs/mern-stack-guide";
import { reactPerformance } from "@/data/blogs/react-performance";
import { reactServerComponentsGuide } from "@/data/blogs/react-server-component";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO format
  formattedDate: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  updatedAt?: string; // ISO format
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  reactServerComponentsGuide,
  mernStackGuide,
  reactPerformance,
  jwtAuthentication,
];

// Utility function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
    .map((post) => ({
      ...post,
      readingTime: post.readingTime || calculateReadingTime(post.content),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) return undefined;

  return {
    ...post,
    readingTime: post.readingTime || calculateReadingTime(post.content),
  };
}

// Get all blog post slugs for static generation
export function getAllBlogPostSlugs(): { slug: string }[] {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Get related blog posts based on tags
export function getRelatedBlogPosts(
  currentPostSlug: string,
  limit = 3
): BlogPost[] {
  const currentPost = getBlogPost(currentPostSlug);
  if (!currentPost) return [];

  return getAllBlogPosts()
    .filter((post) => {
      return (
        post.slug !== currentPostSlug &&
        post.tags.some((tag) => currentPost.tags.includes(tag))
      );
    })
    .slice(0, limit);
}

// Get all unique tags
export function getAllBlogTags(): string[] {
  const allTags = blogPosts.flatMap((post) => post.tags);
  return [...new Set(allTags)];
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.tags.includes(tag));
}
