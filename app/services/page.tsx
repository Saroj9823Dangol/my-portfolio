import type { Metadata } from "next";
import { StructuredData } from "@/components/seo/structured-data";
import ServicesSection from "@/components/sections/services-section";
import { professionalServiceSchema } from "@/lib/seo/geo-schema";

export const metadata: Metadata = {
  title: "Best Freelance IT Services Nepal — Website & MERN Stack Development",
  description: "Professional freelance IT services in Nepal: best website development, MERN stack apps, and AWS cloud solutions. Based in Lalitpur, serving Kathmandu and worldwide.",
  alternates: { canonical: "https://www.sarojdangol012.com.np/services" },
  openGraph: {
    title: "IT Development Services Nepal — Web, Mobile & Cloud | Saroj Dangol",
    description: "Professional IT services in Nepal: custom web development, React Native mobile apps, backend APIs, and AWS cloud solutions.",
    url: "https://www.sarojdangol012.com.np/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={professionalServiceSchema} />
      <ServicesSection />
    </>
  );
}
