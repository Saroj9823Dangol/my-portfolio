export * from "./contact-schema";
import { siteConfig } from "@/config";

// LocalBusiness Schema for local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sarojdangol012.com.np/#localbusiness",
  name: "Saroj Dangol - IT Development Services",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  description: siteConfig.structuredData.description,
  url: "https://www.sarojdangol012.com.np",
  telephone: "+977-9863485599", // Update with actual phone
  email: "hello@sarojdangol012.com.np",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lalitpur",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati",
    postalCode: "44700",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.671,
    longitude: 85.3226,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Lalitpur",
    },
    {
      "@type": "City",
      name: "Kathmandu",
    },
    {
      "@type": "City",
      name: "Bhaktapur",
    },
    {
      "@type": "Country",
      name: "Nepal",
    },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: siteConfig.structuredData.sameAs,
  founder: {
    "@type": "Person",
    name: "Saroj Dangol",
    url: "https://www.sarojdangol012.com.np",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Development",
              description:
                "Custom web application development using MERN stack",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "Complete e-commerce solutions with payment integration",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "React Native App Development",
              description:
                "Cross-platform mobile applications for iOS and Android",
            },
          },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
};

// WebSite Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sarojdangol012.com.np/#website",
  url: "https://www.sarojdangol012.com.np",
  name: "Saroj Dangol - IT Developer Nepal",
  description: siteConfig.metadata.description,
  publisher: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.sarojdangol012.com.np/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

// Person Schema (Enhanced)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.sarojdangol012.com.np/#person",
  name: siteConfig.structuredData.name,
  url: "https://www.sarojdangol012.com.np",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  sameAs: siteConfig.structuredData.sameAs,
  jobTitle: siteConfig.structuredData.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.structuredData.worksFor.name,
    url: siteConfig.structuredData.worksFor.url,
  },
  address: siteConfig.structuredData.address,
  email: "hello@sarojdangol012.com.np",
  telephone: "+977-9863485599", // Update with actual phone
  knowsAbout: siteConfig.structuredData.knowsAbout,
  alumniOf: siteConfig.structuredData.alumniOf,
  hasOccupation: siteConfig.structuredData.hasOccupation,
  description: siteConfig.structuredData.description,
  nationality: {
    "@type": "Country",
    name: "Nepal",
  },
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Nepali",
    },
  ],
};

// BreadcrumbList Schema Generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Service Schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/web-development",
      name: "Full Stack Web Development",
      description:
        "Custom web application development using modern technologies like React, Next.js, Node.js, and MongoDB",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Web Development",
      serviceType: "Full Stack Development",
    },
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/mobile-development",
      name: "Mobile App Development",
      description:
        "Cross-platform mobile application development using React Native for iOS and Android",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Mobile Development",
      serviceType: "React Native Development",
    },
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/cloud-solutions",
      name: "Cloud Solutions & DevOps",
      description:
        "AWS cloud infrastructure, serverless architecture, and DevOps implementation",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Cloud Computing",
      serviceType: "AWS Solutions",
    },
  ],
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you offer as an IT developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I offer comprehensive IT development services including Full Stack Web Development (MERN stack), Mobile App Development (React Native), Cloud Solutions (AWS), API Development, and Technical Consulting. I specialize in building scalable, high-performance applications for businesses in Kathmandu Valley and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to develop a web application in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost varies based on project complexity, features, and timeline. A basic website starts from NPR 50,000, while complex web applications can range from NPR 200,000 to NPR 1,000,000+. I provide detailed quotes after understanding your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients outside Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I work with clients globally. While I'm based in Lalitpur, Nepal, I have experience working remotely with international clients. I'm available for both remote and on-site projects in the Kathmandu Valley.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile development, Next.js for web applications, TypeScript, AWS cloud services, and modern DevOps practices. I'm also experienced with GraphQL, PostgreSQL, and various frontend frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development time depends on app complexity. A simple app takes 4-8 weeks, a medium complexity app takes 2-4 months, and complex apps with advanced features can take 4-6 months or more. I provide detailed timelines during project planning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I offer ongoing support and maintenance packages for all projects. This includes bug fixes, security updates, performance optimization, and feature enhancements. Support packages can be customized based on your needs.",
      },
    },
  ],
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sarojdangol012.com.np/#organization",
  name: "Saroj Dangol IT Services",
  url: "https://www.sarojdangol012.com.np",
  logo: "https://www.sarojdangol012.com.np/logo.png",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  description: siteConfig.metadata.description,
  email: "hello@sarojdangol012.com.np",
  telephone: "+977-9863485599",
  address: siteConfig.structuredData.address,
  founder: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  sameAs: siteConfig.structuredData.sameAs,
};

// Combine all schemas for homepage
export const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    websiteSchema,
    personSchema,
    localBusinessSchema,
    organizationSchema,
  ],
};
