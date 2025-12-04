import BackgroundCanvas from "@/components/background-canvas";
import BlogsContent from "@/components/blogs/blogs-content";
import BlogsHero from "@/components/blogs/blogs-hero";
import ContactPortal from "@/components/contact-portal";
import DownloadCV from "@/components/DownloadCV";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog | Saroj Dangol - Web Development Insights",
  description:
    "Read the latest articles on Web Development, MERN Stack, React Native, and Tech Trends in Nepal by Saroj Dangol.",
  alternates: {
    canonical: "https://www.sarojdangol012.com.np/blogs",
  },
  openGraph: {
    title: "Tech Blog | Saroj Dangol - Web Development Insights",
    description:
      "Read the latest articles on Web Development, MERN Stack, React Native, and Tech Trends in Nepal by Saroj Dangol.",
    url: "https://www.sarojdangol012.com.np/blogs",
    type: "website",
  },
};

const BlogPage = async () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundCanvas />
      <BlogsHero />
      <BlogsContent />
      <DownloadCV />
      <ContactPortal />
    </main>
  );
};

export default BlogPage;
