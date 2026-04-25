import type { Metadata } from "next";
import ToolsPageClient from "./tools-client";

export const metadata: Metadata = {
  title: "Free Online Developer Tools - ToolHub Nepal",
  description: "Free online developer utilities: JSON formatter, Base64 encoder, Regex tester, Hash generator, Currency converter, and more. 100% client-side processing.",
  keywords: ["developer tools", "json formatter", "base64 encoder", "regex tester", "hash generator", "currency converter", "nepal"],
  alternates: {
    canonical: "https://www.sarojdangol012.com.np/tools",
  },
  openGraph: {
    title: "Free Online Developer Tools - ToolHub Nepal",
    description: "Free online developer utilities: JSON formatter, Base64 encoder, Regex tester, Hash generator, Currency converter, and more.",
    url: "https://www.sarojdangol012.com.np/tools",
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}