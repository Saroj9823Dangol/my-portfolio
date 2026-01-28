import type { Metadata } from "next";
import Link from "next/link";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { servicesSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServicesContent } from "@/components/content/services-content";

export const metadata: Metadata = generateSEOMetadata({
  title: "IT Development Services in Nepal | Web & Mobile App Development",
  description:
    "Professional IT services in Lalitpur, Nepal. Specializing in Custom Web Development, React Native Mobile Apps, and Cloud Solutions.",
  keywords: [
    "Web Development Services Nepal",
    "Mobile App Development Lalitpur",
    "IT Services Kathmandu",
    "Custom Software Development",
    "React Native Nepal",
    "MERN Stack Development",
    "Cloud Solutions Nepal",
    "API Development",
  ],
  canonical: "https://www.sarojdangol012.com.np/services",
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesSchema} />
      <div className="min-h-screen bg-background text-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-6 text-center">
            <Breadcrumbs
              items={[{ name: "Services", url: "/services" }]}
              className="justify-center mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              IT Development Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for businesses in
              Nepal and worldwide. From concept to deployment, I deliver
              excellence.
            </p>
          </div>

          <ServicesContent />

          {/* CTA Section */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-blue-900/10 to-purple-900/10 border border-primary/10 p-12 text-center">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Digitalize Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need a website, mobile app, or custom software, I'm
                here to help turn your vision into reality. Based in Lalitpur,
                serving clients globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
