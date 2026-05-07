import type { Metadata } from "next";
import AboutSection from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About Saroj Dangol — Best Individual Website Developer in Nepal",
  description:
    "Saroj Dangol is a Senior Full Stack Developer and the best individual website developer in Lalitpur, Nepal, specialising in freelance MERN stack and cloud solutions.",
  alternates: {
    canonical: "https://www.sarojdangol012.com.np/about",
  },
  openGraph: {
    title: "About Saroj Dangol — Full Stack Developer, Lalitpur Nepal",
    description:
      "Saroj Dangol is a Senior Full Stack Developer based in Lalitpur, Nepal, specialising in MERN stack, React Native, and AWS cloud solutions.",
    url: "https://www.sarojdangol012.com.np/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
