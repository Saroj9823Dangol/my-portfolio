/**
 * GEO-specific Schema.org structured data
 * Optimised for AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews)
 */

// ProfessionalService schema — used on /services page
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.sarojdangol012.com.np/#professionalservice",
  name: "Saroj Dangol IT Development Services",
  description:
    "Full stack web development, React Native mobile apps, backend APIs, and AWS cloud solutions for businesses in Nepal and worldwide.",
  url: "https://www.sarojdangol012.com.np/services",
  provider: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  areaServed: [
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Bhaktapur" },
    { "@type": "Country", name: "Nepal" },
    { "@type": "AdministrativeArea", name: "Worldwide Remote" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Web Development",
          description:
            "Custom web applications using React, Next.js, Node.js, and MongoDB.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "React Native Mobile App Development",
          description:
            "Cross-platform iOS and Android apps using React Native.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend & API Development",
          description:
            "Scalable RESTful and GraphQL APIs with NestJS and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AWS Cloud & DevOps",
          description:
            "AWS infrastructure, serverless architecture, and CI/CD pipelines.",
        },
      },
    ],
  },
};

// WebPage schema for home page — establishes mainEntity reference
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.sarojdangol012.com.np/",
  url: "https://www.sarojdangol012.com.np",
  name: "Saroj Dangol — Senior Full Stack Developer, Lalitpur Nepal",
  description:
    "Saroj Dangol is a Senior Full Stack Developer based in Lalitpur, Nepal, specialising in MERN stack, React Native, and AWS cloud solutions.",
  inLanguage: "en-US",
  isPartOf: {
    "@id": "https://www.sarojdangol012.com.np/#website",
  },
  mainEntity: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sarojdangol012.com.np",
      },
    ],
  },
};
