import type { Metadata } from "next";
import { getAllBlogs } from "./utils";
import BlogListClient from "./blog-list-client";

export const metadata: Metadata = {
  title: "Blog — Web Development, MERN Stack & React Native | Saroj Dangol",
  description:
    "Articles and tutorials on MERN stack development, React Native, Next.js, AWS, and IT development in Nepal by Saroj Dangol.",
  alternates: { canonical: "https://www.sarojdangol012.com.np/blogs" },
  openGraph: {
    title: "Blog — Web Development, MERN Stack & React Native | Saroj Dangol",
    description:
      "Articles and tutorials on MERN stack development, React Native, Next.js, AWS, and IT development in Nepal.",
    url: "https://www.sarojdangol012.com.np/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="pt-16">
      <section className="py-24 max-w-4xl mx-auto px-6">
        <span className="label-mono">Writing</span>
        <h1 className="heading-display mt-2 text-4xl md:text-5xl text-[var(--color-fg)]">
          Blog
        </h1>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)] max-w-xl">
          Thoughts on web development, mobile apps, cloud architecture, and
          building software in Nepal.
        </p>
        <BlogListClient posts={blogs} />
      </section>
    </div>
  );
}
