import type { Metadata } from "next";
import { contactPageSchema } from "@/lib/seo/contact-schema";
import { localBusinessSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/seo/structured-data";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Saroj Dangol — Hire a Full Stack Developer in Nepal",
  description: "Get in touch to start your web or mobile app project. Based in Lalitpur, Nepal. Available for freelance and contract work worldwide.",
  alternates: { canonical: "https://www.sarojdangol012.com.np/contact" },
  openGraph: {
    title: "Contact Saroj Dangol — Hire a Full Stack Developer in Nepal",
    description: "Get in touch to start your web or mobile app project. Based in Lalitpur, Nepal.",
    url: "https://www.sarojdangol012.com.np/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={[contactPageSchema, localBusinessSchema]} />
      <ContactSection />
    </>
  );
}
