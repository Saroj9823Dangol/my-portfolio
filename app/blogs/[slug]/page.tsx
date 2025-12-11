import { notFound } from "next/navigation";
import { ALL_BLOG_POSTS } from "@/data/blogs";
import {
  getBlogBySlug,
  generateBlogMetadata,
  generateBlogStructuredData,
} from "../utils";
import BlogDetailClient from "./blog-detail-client";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getBlogBySlug((await params).slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return generateBlogMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getBlogBySlug((await params).slug);

  if (!post) {
    notFound();
  }

  const structuredData = generateBlogStructuredData(post);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Blog Content */}
      <BlogDetailClient post={post} />
    </>
  );
}
