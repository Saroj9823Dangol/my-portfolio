import type { Metadata } from "next";
import ToolsPageClient from "./tools-client";

export const metadata: Metadata = {
  title: "Best Free Online Developer Tools in Nepal | ToolHub by Saroj Dangol",
  description: "Access the best suite of free online developer tools in Nepal. JSON formatter, Base64 encoder, JWT decoder, and more. 100% secure, individual-led, and client-side processing.",
  keywords: [
    "best developer tools Nepal",
    "free online developer tools",
    "json formatter online",
    "base64 encoder nepal",
    "jwt decoder free",
    "regex tester online",
    "hash generator tool",
    "developer utilities Kathmandu",
    "Saroj Dangol tools",
  ],
  alternates: {
    canonical: "https://www.sarojdangol012.com.np/tools",
  },
  openGraph: {
    title: "Best Free Online Developer Tools in Nepal | ToolHub",
    description:
      "The ultimate suite of secure developer utilities. JSON formatter, Base64 encoder, Regex tester, and more. Individual-led and 100% secure.",
    url: "https://www.sarojdangol012.com.np/tools",
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}