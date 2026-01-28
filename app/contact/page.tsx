import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { contactPageSchema } from "@/lib/seo/contact-schema";
import { localBusinessSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/seo/structured-data";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContactContent } from "@/components/content/contact-content";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Saroj Dangol | Hire IT Developer in Nepal",
  description:
    "Get in touch for web and mobile app development projects. Located in Lalitpur, Nepal. Available for freelance and contract work.",
  keywords: [
    "Contact Developer Nepal",
    "Hire Programmer Lalitpur",
    "Web Development Quote",
    "App Development Cost Nepal",
    "Saroj Dangol Contact",
  ],
  canonical: "https://www.sarojdangol012.com.np/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={[contactPageSchema, localBusinessSchema]} />
      <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-6 text-center mb-12">
            <Breadcrumbs
              items={[{ name: "Contact", url: "/contact" }]}
              className="justify-center mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neptune-cyan to-cosmic-blue">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Sending a message is the first
              step towards building something amazing.
            </p>
          </div>

          {/* Reused Contact Component */}
          <ContactContent />
        </div>
      </div>
    </>
  );
}
