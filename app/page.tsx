import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import FeaturedProjects from "@/components/home/featured-projects";
import ServicesPreview from "@/components/home/services-preview";
import BlogPreview from "@/components/home/blog-preview";
import CTABand from "@/components/home/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <ServicesPreview />
      <BlogPreview />
      <CTABand />
    </>
  );
}
