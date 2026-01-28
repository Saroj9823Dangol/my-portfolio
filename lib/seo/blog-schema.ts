export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  url: string;
  category: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
      url: "https://www.sarojdangol012.com.np",
    },
    publisher: {
      "@type": "Organization",
      name: "Saroj Dangol IT Services",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sarojdangol012.com.np/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "en-US",
  };
}

export function generateBlogListSchema(
  posts: Array<{ title: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.sarojdangol012.com.np/blogs",
    name: "Saroj Dangol's Blog",
    description: "IT development insights, tutorials, and industry knowledge",
    url: "https://www.sarojdangol012.com.np/blogs",
    author: {
      "@type": "Person",
      name: "Saroj Dangol",
      url: "https://www.sarojdangol012.com.np",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: post.url,
    })),
  };
}
