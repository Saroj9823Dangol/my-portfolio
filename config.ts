import type { Metadata } from "next";
import { Attribute } from "next-themes";

interface SiteConfig {
  fonts: {
    poppins: {
      subsets: ("latin" | "latin-ext")[];
      weights: (
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900"
      )[];
      variable: `--${string}`;
    };
    jetbrainsMono: {
      subsets: ("latin" | "latin-ext")[];
      weights: (
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
      )[];
      variable: `--${string}`;
    };
  };
  theme: {
    attribute: Attribute;
    defaultTheme: string;
    enableSystem: boolean;
    disableTransitionOnChange: boolean;
  };
  metadata: Metadata & {
    title: {
      default: string;
      template: string;
    };
    author: {
      name: string;
      url: string;
    };
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      images: {
        url: string;
        width: number;
        height: number;
        alt: string;
      };
      locale: string;
      type:
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other";
      emails: string[];
    };
    twitter: {
      card: "summary" | "summary_large_image" | "player" | "app";
      site: string;
      creator: string;
      title: string;
      description: string;
      images: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    };
    icons: {
      icon: Array<{ url: string; sizes?: string; type?: string }>;
      shortcut: string[];
      apple: Array<{ url: string; sizes?: string; type?: string }>;
      other: Array<{ rel: string; url: string; color?: string }>;
    };
    verification: {
      google: string;
      yandex?: string;
    };
    other: Record<string, string>;
  };
  structuredData: {
    type: string;
    name: string;
    jobTitle: string;
    url: string;
    sameAs: string[];
    worksFor: {
      type: string;
      name: string;
      url: string;
    };
    description: string;
    skills: string[];
    hasOccupation?: {
      "@type": string;
      name: string;
      estimatedSalary: {
        "@type": string;
        currency: string;
        value: {
          "@type": string;
          minValue: number;
          maxValue: number;
          unitText: string;
        };
      };
      experienceRequirements: string;
    };
    knowsAbout?: string[];
    alumniOf?: {
      "@type": string;
      name: string;
      url: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  fonts: {
    poppins: {
      subsets: ["latin", "latin-ext"],
      weights: ["300", "400", "500", "600", "700", "800", "900"],
      variable: "--font-poppins",
    },
    jetbrainsMono: {
      subsets: ["latin", "latin-ext"],
      weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
      variable: "--font-mono",
    },
  },
  theme: {
    attribute: "class",
    defaultTheme: "dark",
    enableSystem: true,
    disableTransitionOnChange: true,
  },
  metadata: {
    title: {
      default: "Saroj Dangol | MERN & React Native Developer | AWS",
      template: "%s | Saroj Dangol",
    },
    author: {
      name: "Saroj Dangol",
      url: "https://www.sarojdangol012.com.np",
    },
    description:
      "Saroj Dangol | Full Stack Developer (MERN, React Native, AWS) | 3+ years building scalable web & mobile apps with modern cloud solutions.",
    applicationName: "Saroj Dangol - Premium Development Services",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: [
      // Core expertise
      "Full Stack Developer",
      "MERN Stack Expert",
      "React Native Developer",
      "Next.js Specialist",
      "Node.js Developer",
      "TypeScript Engineer",

      // Web development
      "Web Application Development",
      "Responsive Web Design",
      "Progressive Web Apps",
      "Single Page Applications",
      "Frontend Optimization",
      "Backend Architecture",

      // Mobile development
      "Cross-Platform Mobile Apps",
      "React Native Expert",
      "Mobile App Development",
      "iOS/Android Development",
      "Hybrid Mobile Apps",

      // Technologies
      "MongoDB Developer",
      "Express.js Specialist",
      "React.js Consultant",
      "GraphQL API Development",
      "RESTful API Design",
      "AWS Certified Developer",
      "Serverless Architecture",
      "Microservices Expert",

      // Business value
      "High-Performance Websites",
      "SEO-Optimized Development",
      "Web Performance Tuning",
      "E-Commerce Solutions",
      "SaaS Development",
      "Startup Tech Partner",

      // Location-based
      "Best Developer in Nepal",
      "Top Kathmandu Programmer",
      "Hire Nepali Developer",
      "Remote Development Team",

      // Personal brand
      "Saroj Dangol Portfolio",
      "Dangol Development Services",
      "Saroj Tech Solutions",
    ],
    authors: [
      {
        name: "Saroj Dangol",
        url: "https://www.sarojdangol012.com.np",
      },
      {
        name: "Apptechnologies",
        url: "https://apptechnologies.com",
      },
    ],
    creator: "Saroj Dangol",
    publisher: "Apptechnologies",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    metadataBase: new URL("https://www.sarojdangol012.com.np"),
    alternates: {
      canonical: "https://www.sarojdangol012.com.np/",
      // languages: {
      //   "en-US": "/en-US",
      //   "ne-NP": "/ne-NP",
      // },
    },
    openGraph: {
      title: "Hire Saroj Dangol - Elite Full Stack & Mobile Developer",
      description:
        "Looking for a top-tier developer? Saroj Dangol delivers exceptional MERN stack web applications and React Native mobile solutions with 3+ years of proven results.",
      url: "https://www.sarojdangol012.com.np",
      siteName: "Saroj Dangol - Premium Development Services",
      images: {
        url: "https://www.sarojdangol012.com.np/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "Saroj Dangol - Full Stack & Mobile Development Expert",
      },
      locale: "en_US",
      type: "profile",
      emails: ["hello@sarojdangol012.com.np", "saroj9823dangol@gmail.com"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@sarojdev",
      creator: "@sarojdev",
      title: "Saroj Dangol - Code That Converts Visitors to Customers",
      description:
        "Full Stack Developer building performant web & mobile apps that drive business growth. MERN Stack | React Native | AWS | TypeScript",
      images: [
        {
          url: "https://www.sarojdangol012.com.np/images/twitter-card.webp",
          width: 1200,
          height: 675,
          alt: "Saroj Dangol Development Services",
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        {
          url: "/apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        {
          rel: "apple-touch-startup-image",
          url: "/apple-startup.png",
          sizes: "2048x2732",
        },
      ],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "ZehS4kI2H4bUfWwPGCGl23h8rxEEp4KPxCiBdykJ-v4",
    },
    other: {
      "msapplication-TileColor": "#2b5797",
      "msapplication-config": "/browserconfig.xml",
      "theme-color": "#1a365d",
      "og:latitude": "27.7172",
      "og:longitude": "85.3240",
      "og:locality": "Kathmandu",
      "og:region": "NP",
      "og:postal-code": "44600",
      "og:country-name": "Nepal",
      "business:contact_data:street_address": "Your Street",
      "business:contact_data:locality": "Kathmandu",
      "business:contact_data:region": "Bagmati",
      "business:contact_data:postal_code": "44600",
      "business:contact_data:country_name": "Nepal",
    },
  },
  structuredData: {
    type: "Person",
    name: "Saroj Dangol",
    jobTitle: "Senior Full Stack Developer & Mobile Specialist",
    url: "https://www.sarojdangol012.com.np",
    sameAs: [
      "https://github.com/Saroj9823Dangol",
      "https://linkedin.com/in/er-saroj-dangol-9492bb216",
      "https://facebook.com/saroz.dangol.7",
      "https://www.upwork.com/freelancers/~01a78d9a0751fb1801",
    ],
    worksFor: {
      type: "Organization",
      name: "Apptechnologies",
      url: "https://apptechnologies.com",
    },
    description:
      "Professional Full Stack Developer with 5+ years experience specializing in MERN stack web development, React Native mobile apps, and cloud solutions. Proven track record of delivering high-performance applications.",
    skills: [
      // Languages
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",

      // Frontend
      "React.js",
      "Next.js",
      "Redux",
      "GraphQL",
      "Apollo",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",

      // Backend
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "Spring Boot",

      // Mobile
      "React Native",
      "Expo",
      "Mobile UI/UX",
      "App Store Deployment",
      "Play Store Deployment",

      // Databases
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Redis",

      // DevOps & Cloud
      "AWS Certified",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Serverless",
      "Microservices",

      // Testing
      "Jest",
      "Cypress",
      "React Testing Library",

      // Other
      "Web Accessibility",
      "SEO Optimization",
      "Web Performance",
      "Agile Methodologies",
      "Technical Leadership",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      estimatedSalary: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: {
          "@type": "QuantitativeValue",
          minValue: 50000,
          maxValue: 120000,
          unitText: "YEAR",
        },
      },
      experienceRequirements: "5+ years",
    },
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "Cloud Computing",
      "Database Design",
      "API Development",
      "Software Architecture",
      "DevOps Practices",
      "UI/UX Principles",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Tribhuvan University",
      url: "https://tu.edu.np",
    },
  },
};
