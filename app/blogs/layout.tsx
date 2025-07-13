import { getAllBlogPosts } from "@/lib/blogs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const posts = getAllBlogPosts();
  const featuredPost = posts.find((post) => post.featured);

  return {
    title: "Tech Insights & Development Blogs",
    description:
      "Explore in-depth articles on web development, technology trends, and coding best practices from an experienced developer.",
    keywords: [
      "web development",
      "programming blogs",
      "JavaScript",
      "React",
      "Next.js",
      "tech articles",
    ],
    alternates: {
      canonical: "https://sarojdangol012.com.np/blogs",
    },
    openGraph: {
      title: "Tech Insights & Development Blogs",
      description:
        "Explore in-depth articles on web development and technology trends.",
      url: "https://sarojdangol012.com.np/blogs",
      type: "website",
      images: featuredPost?.image
        ? [
            {
              url: `https://sarojdangol012.com.np${featuredPost.image}`,
              width: 1200,
              height: 630,
              alt: featuredPost.imageAlt || featuredPost.title,
            },
          ]
        : [
            {
              url: "https://sarojdangol012.com.np/images/blog-og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Saroj's Tech Blogs",
            },
          ],
      siteName: "Saroj's Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tech Insights & Development Blogs",
      description:
        "Explore in-depth articles on web development and technology trends.",
      images: featuredPost?.image
        ? `https://sarojdangol012.com.np/${featuredPost.image}`
        : "https://sarojdangol012.com.np/images/blog-og-image.jpg",
      creator: "@yourtwitterhandle",
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogStructuredData />
      <main className="bg-gray-950 min-h-screen">{children}</main>
    </>
  );
}

async function BlogStructuredData() {
  const posts = getAllBlogPosts();
  const featuredPost = posts.find((post) => post.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Tech Insights & Development Blogs",
    description:
      "Explore in-depth articles on web development, technology trends, and coding best practices.",
    url: "https://sarojdangol012.com.np/blogs",
    author: {
      "@type": "Person",
      name: "Saroj Dangol",
      url: "https://sarojdangol012.com.np/#about",
      sameAs: [
        "https://github.com/Saroj9823Dangol",
        "https://linkedin.com/in/er-saroj-dangol-9492bb216",
        "https://facebook.com/saroz.dangol.7",
        "https://www.upwork.com/freelancers/~01a78d9a0751fb1801",
      ],
    },
    publisher: {
    
      "@type": "Organization",
      name: "Saroj's Portfolio",
      logo: {
        "@type": "ImageObject",
        url: "https://sarojdangol012.com.np/logo.png",
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sarojdangol012.com.np/blogs",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://sarojdangol012.com.np/blogs/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updatedAt || post.date,
      author: {
        "@type": "Person",
        name: "Saroj",
      },
      image: post.image
        ? `https://sarojdangol012.com.np${post.image}`
        : "https://yourdomain.com/images/blog-default.jpg",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
