export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: number;
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  {
    name: "Web Development",
    slug: "web-development",
    description:
      "Articles about modern web development technologies and best practices",
    count: 0,
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
    description: "React Native and mobile app development insights",
    count: 0,
  },
  {
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "AWS, serverless, and DevOps practices",
    count: 0,
  },
  {
    name: "Career & Business",
    slug: "career-business",
    description: "Tech career advice and freelancing tips",
    count: 0,
  },
  {
    name: "Tutorials",
    slug: "tutorials",
    description: "Step-by-step guides and code tutorials",
    count: 0,
  },
];

// Sample blog posts for SEO
export const sampleBlogPosts: BlogPost[] = [
  {
    slug: "how-to-hire-it-developer-nepal",
    title: "How to Hire the Right IT Developer in Nepal: A Complete Guide",
    description:
      "Learn the essential steps to find and hire qualified IT developers in Nepal. Discover what to look for, questions to ask, and how to ensure project success.",
    content: "",
    author: "Saroj Dangol",
    publishedAt: "2026-01-15",
    category: "Career & Business",
    tags: ["hiring", "nepal", "it developer", "freelancing"],
    image: "/images/blog/hire-developer-nepal.webp",
    imageAlt: "Hiring IT Developer in Nepal",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "mern-stack-vs-alternatives-2026",
    title: "MERN Stack vs Alternatives in 2026: Which Should You Choose?",
    description:
      "A comprehensive comparison of MERN stack with other popular technology stacks. Understand the pros, cons, and best use cases for each.",
    content: "",
    author: "Saroj Dangol",
    publishedAt: "2026-01-20",
    category: "Web Development",
    tags: ["mern", "react", "nodejs", "web development"],
    image: "/images/blog/mern-stack-comparison.webp",
    imageAlt: "MERN Stack Comparison",
    readingTime: 12,
    featured: true,
  },
  {
    slug: "react-native-app-development-cost-nepal",
    title: "React Native App Development Cost in Nepal: Complete Breakdown",
    description:
      "Detailed breakdown of mobile app development costs in Nepal. Learn about pricing factors, timeline estimates, and how to budget for your project.",
    content: "",
    author: "Saroj Dangol",
    publishedAt: "2026-01-22",
    category: "Mobile Development",
    tags: ["react native", "pricing", "nepal", "mobile apps"],
    image: "/images/blog/app-development-cost.webp",
    imageAlt: "App Development Cost Nepal",
    readingTime: 10,
    featured: true,
  },
  {
    slug: "aws-serverless-architecture-guide",
    title: "Building Scalable Applications with AWS Serverless Architecture",
    description:
      "Learn how to leverage AWS Lambda, API Gateway, and DynamoDB to build cost-effective, scalable serverless applications.",
    content: "",
    author: "Saroj Dangol",
    publishedAt: "2026-01-25",
    category: "Cloud & DevOps",
    tags: ["aws", "serverless", "lambda", "cloud"],
    image: "/images/blog/aws-serverless.webp",
    imageAlt: "AWS Serverless Architecture",
    readingTime: 15,
  },
  {
    slug: "nextjs-seo-best-practices",
    title: "Next.js SEO Best Practices: Complete Guide for 2026",
    description:
      "Master SEO in Next.js applications with this comprehensive guide covering metadata, structured data, performance optimization, and more.",
    content: "",
    author: "Saroj Dangol",
    publishedAt: "2026-01-28",
    category: "Web Development",
    tags: ["nextjs", "seo", "web performance", "react"],
    image: "/images/blog/nextjs-seo.webp",
    imageAlt: "Next.js SEO Guide",
    readingTime: 14,
    featured: true,
  },
];

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
