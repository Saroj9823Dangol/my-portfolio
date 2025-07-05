import BlogCard from "@/components/blogs/blog-card";
import { ShareButton } from "@/components/blogs/share-button";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getRelatedBlogPosts } from "@/lib/blogs";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../styles/blog.module.css";

// Define Props interface compatible with Next.js PageProps
interface Props {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const post = await getBlogPost(slug);

  console.log(slug, "slug");

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Neural Feed`,
    description: post.excerpt,
    alternates: {
      canonical: `https://sarojdangol012.com.np/blogs/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sarojdangol012.com.np/blogs/${slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: ["Your Name"],
      tags: post.tags,
      images: [
        {
          url: post.image
            ? `https://sarojdangol012.com.np${post.image}`
            : "https://sarojdangol012.com.np/default-blog-image.jpg",
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [
        post.image
          ? `https://sarojdangol012.com.np${post.image}`
          : "https://sarojdangol012.com.np/default-blog-image.jpg",
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params; // Await the params Promise
  const post = await getBlogPost(slug);
  const relatedPosts = await getRelatedBlogPosts(slug);

  if (!post) {
    notFound();
  }

  // Structured data for rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: "Saroj Dangol",
      url: "https://sarojdangol012.com.np/#about",
    },
    publisher: {
      "@type": "Organization",
      name: "Saroj Dangol",
      logo: {
        "@type": "ImageObject",
        url: "https://sarojdangol012.com.np/logo.png",
      },
    },
    image: post.image
      ? `https://sarojdangol012.com.np/${post.image}`
      : "https://sarojdangol012.com.np/default-blog-image.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sarojdangol012.com.np/blogs/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-[65%] mx-auto">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>/</li>
              <li aria-current="page" className="text-purple-400">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            {/* Publication date (machine-readable) */}
            <time
              dateTime={post.date}
              className="block text-sm text-gray-500 mb-4"
            >
              Published: {post.formattedDate}
            </time>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <ShareButton
                    title={post.title}
                    url={`https://sarojdangol012.com.np/blogs/${slug}`}
                    excerpt={post.excerpt}
                  />
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <span>Reading time: </span>
                <span className="text-purple-300">{post.readingTime}</span>
              </div>
            </div>

            {/* Cover Image with proper alt text */}
            {post.image && (
              <div className="relative w-full overflow-hidden mb-12">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div
            className={`prose prose-lg prose-invert max-w-none mb-16 ${styles.proseContent}`}
            itemProp="articleBody"
          >
            <div
              className={styles.proseContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags with semantic markup */}
          <div className="flex flex-wrap gap-3 mb-12">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blogs/tags/${tag.toLowerCase()}`}
                passHref
              >
                <Badge
                  variant="outline"
                  className="text-gray-400 border-gray-700 bg-gray-800/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer px-3 py-1"
                  aria-label={`View all posts tagged ${tag}`}
                >
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-16" aria-labelledby="related-posts-heading">
              <h2
                id="related-posts-heading"
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Related Articles
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
              >
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} role="listitem">
                    <BlogCard post={relatedPost} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Author Bio Section */}
          <section className="mt-16 pt-8 border-t border-gray-700">
            <h2 className="text-xl font-semibold mb-4">About the Author</h2>
            <div className="flex items-start gap-6">
              <img
                src="/android-chrome-512x512.png"
                alt="Saroj's profile picture"
                className="w-16 h-16 rounded-full"
                loading="lazy"
                width="64"
                height="64"
              />
              <div>
                <h3 className="text-lg font-medium">Saroj Dangol</h3>
                <p className="text-gray-400">
                  Full-stack developer specializing in MERN stack applications.
                  Passionate about creating performant and accessible web
                  experiences.
                </p>
                <div className="flex gap-4 mt-2">
                  <Link
                    href="https://github.com/Saroj9823Dangol"
                    className="text-cyan-400 hover:underline"
                    aria-label="Saroj's GitHub profile"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/er-saroj-dangol-9492bb216"
                    className="text-cyan-400 hover:underline"
                    aria-label="Saroj's LinkedIn profile"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
