import type { Metadata } from "next";
import { getAllBlogs } from "./utils";
import BlogListClient from "./blog-list-client";

export const metadata: Metadata = {
  title: "Blog - Saroj Dangol",
  description:
    "Articles and tutorials about web development, MERN stack, React, Next.js, and modern JavaScript technologies.",
  openGraph: {
    title: "Blog - Saroj Dangol",
    description:
      "Articles and tutorials about web development, MERN stack, React, Next.js, and modern JavaScript technologies.",
    type: "website",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <BlogListClient posts={blogs} />
    </div>
  );
}
