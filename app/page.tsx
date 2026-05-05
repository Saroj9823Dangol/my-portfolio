import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import SeoIntro from "@/components/home/seo-intro";
import FeaturedProjects from "@/components/home/featured-projects";
import ServicesPreview from "@/components/home/services-preview";
import BlogPreview from "@/components/home/blog-preview";
import CTABand from "@/components/home/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SeoIntro />
      <FeaturedProjects />
      <ServicesPreview />
      <BlogPreview />
      <CTABand />
    </>
  );
}
