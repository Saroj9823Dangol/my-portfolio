import BackgroundCanvas from "@/components/background-canvas";
import BlogsContent from "@/components/blogs/blogs-content";
import BlogsHero from "@/components/blogs/blogs-hero";

const BlogPage = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundCanvas />
      <BlogsHero />
      <BlogsContent />
    </main>
  );
};

export default BlogPage;
