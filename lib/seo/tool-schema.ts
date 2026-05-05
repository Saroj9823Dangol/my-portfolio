import { Tool } from "@/lib/tools/tool-list";
import { siteConfig } from "@/config";

export function generateToolSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${tool.name} - ToolHub Nepal`,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: `https://www.sarojdangol012.com.np/tools/${tool.slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Person",
      name: "Saroj Dangol",
      url: "https://www.sarojdangol012.com.np",
    },
    featureList: tool.tags.join(", "),
    softwareVersion: "1.0",
    isAccessibleForFree: true,
  };
}
