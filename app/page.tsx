import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import SeoIntro from "@/components/home/seo-intro";
import FeaturedProjects from "@/components/home/featured-projects";
import Testimonials from "@/components/home/testimonials";
import ServicesPreview from "@/components/home/services-preview";
import ToolsPreview from "@/components/home/tools-preview";
import BlogPreview from "@/components/home/blog-preview";
import HomeFaq from "@/components/home/home-faq";
import CTABand from "@/components/home/cta-band";
import { StructuredData } from "@/components/seo/structured-data";
import { faqSchema } from "@/lib/seo/schema";

export default function HomePage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <Hero />
      <Stats />
      <SeoIntro />
      <FeaturedProjects />
      <Testimonials />
      <ServicesPreview />
      <ToolsPreview />
      <BlogPreview />
      <HomeFaq />
      <CTABand />
    </>
  );
}
