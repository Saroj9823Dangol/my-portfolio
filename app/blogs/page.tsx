import BackgroundCanvas from "@/components/background-canvas";
import BlogsContent from "@/components/blogs/blogs-content";
import BlogsHero from "@/components/blogs/blogs-hero";
import ContactPortal from "@/components/contact-portal";
import DownloadCV from "@/components/DownloadCV";

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
