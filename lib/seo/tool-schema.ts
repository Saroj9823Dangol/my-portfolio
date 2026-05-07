import { Tool } from "@/lib/tools/tool-list";
import { siteConfig } from "@/config";

export function generateToolSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${tool.name} - Best Free Online Developer Tool`,
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
    featureList: "100% Client-Side, No Data Sent to Server, High Performance, Free to Use",
    softwareVersion: "2.0",
    isAccessibleForFree: true,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
    },
  };
}

export function generateToolFaqSchema(tool: Tool) {
  const commonFaqs = [
    {
      question: `Is the ${tool.name} tool safe to use?`,
      answer: `Yes, the ${tool.name} is 100% safe and secure. All processing happens entirely within your browser (client-side). Your data is never sent to our servers, ensuring absolute privacy.`,
    },
    {
      question: `Is this ${tool.name} free?`,
      answer: `Yes, this is a completely free online developer tool with no limitations or hidden costs.`,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commonFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
