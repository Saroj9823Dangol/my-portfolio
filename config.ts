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
    address?: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
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
      default:
        "Senior Full Stack Developer in Nepal | Saroj Dangol — IT Developer Lalitpur",
      template: "%s | Saroj Dangol — IT Developer Nepal",
    },
    author: {
      name: "Saroj Dangol",
      url: "https://www.sarojdangol012.com.np",
    },
    description:
      "Saroj Dangol is a Senior Full Stack Developer in Nepal, based in Lalitpur. MERN stack, React Native, and AWS specialist offering freelance IT services in Kathmandu and Nepal. Hire a trusted website developer today.",
    applicationName: "Saroj Dangol - Premium IT Services Nepal",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: [
      // ── Local SEO — Primary ──────────────────────────────────────────────
      "best web developer in Nepal",
      "best IT company in Nepal",
      "best programmer in Nepal",
      "top web developer Nepal",
      "IT Developer in Lalitpur",
      "IT Developer in Nepal",
      "Web Developer Lalitpur",
      "Software Engineer Nepal",
      "Freelance Developer Lalitpur",
      "Best Programmer in Lalitpur",
      "developer in Lalitpur",
      "web developer Kathmandu",
      "IT company Lalitpur",
      "IT services Nepal",
      "hire developer Nepal",
      "Kathmandu Valley Developer",
      "Nepal IT Services",

      // ── Individual / Freelance / Website Developer ───────────────────────
      "individual IT developer Nepal",
      "best website developer in Nepal",
      "best website developer Kathmandu",
      "freelance MERN stack developer",
      "freelance web developer Kathmandu",
      "individual software developer Lalitpur",
      "top website developer Lalitpur",
      "freelance IT developer Nepal",
      "best individual programmer Nepal",
      "freelance full stack developer Nepal",
      "freelance React developer Nepal",
      "freelance Node.js developer Nepal",
      "freelance React Native developer Nepal",
      "freelance Next.js developer Nepal",
      "freelance TypeScript developer Nepal",
      "freelance AWS developer Nepal",
      "contract developer Nepal",
      "remote developer Nepal",
      "remote full stack developer Nepal",
      "remote software engineer Nepal",
      "Upwork developer Nepal",
      "Fiverr web developer Nepal",
      "Toptal developer Nepal",

      // ── Hire Intent ──────────────────────────────────────────────────────
      "hire full stack developer Nepal",
      "hire React developer Nepal",
      "hire Node.js developer Nepal",
      "hire React Native developer Nepal",
      "hire Next.js developer Nepal",
      "hire MERN stack developer Nepal",
      "hire mobile app developer Nepal",
      "hire AWS developer Nepal",
      "hire TypeScript developer Nepal",
      "hire NestJS developer Nepal",
      "hire web developer Kathmandu",
      "hire software engineer Nepal",
      "hire freelance developer Nepal",
      "hire IT developer Lalitpur",
      "outsource web development Nepal",
      "outsource mobile app development Nepal",

      // ── Job & Career Searches ────────────────────────────────────────────
      "software developer jobs Nepal",
      "full stack developer jobs Nepal",
      "React developer jobs Kathmandu",
      "Node.js developer jobs Nepal",
      "React Native developer jobs Nepal",
      "Next.js developer jobs Nepal",
      "remote developer jobs Nepal",
      "remote software engineer jobs Nepal",
      "IT jobs Lalitpur",
      "IT jobs Kathmandu",
      "web developer jobs Nepal",
      "mobile app developer jobs Nepal",
      "AWS developer jobs Nepal",
      "JavaScript developer jobs Nepal",
      "TypeScript developer jobs Nepal",
      "MERN stack developer jobs Nepal",
      "full stack developer salary Nepal",
      "software engineer salary Nepal",
      "React developer salary Nepal",
      "Node.js developer salary Nepal",
      "IT developer salary Nepal",
      "freelance developer income Nepal",
      "how to become full stack developer Nepal",
      "how to start freelancing Nepal",
      "freelancing in Nepal",
      "IT career Nepal",
      "software engineering career Nepal",

      // ── Global — Role / Title ─────────────────────────────────────────────
      "full stack developer",
      "senior full stack developer",
      "full stack web developer",
      "full stack JavaScript developer",
      "MERN stack developer",
      "MERN stack expert",
      "React developer",
      "React.js developer",
      "senior React developer",
      "Node.js developer",
      "senior Node.js developer",
      "Next.js developer",
      "Next.js specialist",
      "NestJS developer",
      "TypeScript developer",
      "TypeScript engineer",
      "GraphQL developer",
      "REST API developer",
      "backend developer",
      "frontend developer",
      "software engineer",
      "software developer",
      "web developer",
      "website developer",
      "web application developer",
      "JavaScript developer",
      "JavaScript engineer",

      // ── Global — Mobile ───────────────────────────────────────────────────
      "React Native developer",
      "React Native expert",
      "React Native mobile app developer",
      "cross-platform mobile app developer",
      "iOS Android developer",
      "mobile app developer",
      "Expo developer",
      "hybrid mobile app developer",

      // ── Global — Cloud / DevOps ───────────────────────────────────────────
      "AWS developer",
      "AWS certified developer",
      "cloud developer",
      "serverless developer",
      "serverless architecture",
      "DevOps engineer",
      "Docker Kubernetes developer",
      "CI CD developer",
      "cloud solutions architect",
      "AWS Lambda developer",
      "AWS serverless developer",

      // ── Global — Freelance / Remote / Hire ───────────────────────────────
      "freelance full stack developer",
      "freelance React developer",
      "freelance Node.js developer",
      "freelance React Native developer",
      "freelance Next.js developer",
      "freelance TypeScript developer",
      "freelance AWS developer",
      "freelance MERN stack developer",
      "freelance web developer",
      "freelance mobile app developer",
      "freelance software engineer",
      "remote full stack developer",
      "remote React developer",
      "remote Node.js developer",
      "remote software engineer",
      "remote web developer",
      "remote mobile app developer",
      "hire full stack developer",
      "hire React developer",
      "hire Node.js developer",
      "hire React Native developer",
      "hire Next.js developer",
      "hire MERN stack developer",
      "hire mobile app developer",
      "hire AWS developer",
      "hire TypeScript developer",
      "hire NestJS developer",
      "hire web developer",
      "hire software engineer",
      "hire freelance developer",
      "contract developer",
      "contract full stack developer",
      "contract React developer",
      "Upwork full stack developer",
      "Upwork React developer",
      "Upwork MERN stack developer",
      "Toptal developer",
      "outsource web development",
      "outsource mobile app development",
      "outsource full stack development",

      // ── Global — Job & Career ─────────────────────────────────────────────
      "full stack developer jobs",
      "React developer jobs",
      "Node.js developer jobs",
      "React Native developer jobs",
      "Next.js developer jobs",
      "remote full stack developer jobs",
      "remote React developer jobs",
      "remote software engineer jobs",
      "remote web developer jobs",
      "JavaScript developer jobs",
      "TypeScript developer jobs",
      "MERN stack developer jobs",
      "AWS developer jobs",
      "full stack developer salary",
      "React developer salary",
      "Node.js developer salary",
      "software engineer salary",
      "remote developer salary",
      "freelance developer income",
      "how to become a full stack developer",
      "how to start freelancing as a developer",

      // ── Global — Tech Stack ───────────────────────────────────────────────
      "MongoDB developer",
      "PostgreSQL developer",
      "Express.js developer",
      "React.js consultant",
      "GraphQL API development",
      "RESTful API design",
      "microservices developer",
      "web application development",
      "responsive web design",
      "progressive web apps",
      "single page applications",
      "frontend optimization",
      "backend architecture",
      "cross-platform mobile apps",
      "hybrid mobile apps",

      // ── Global — Business / Services ─────────────────────────────────────
      "high performance websites",
      "SEO optimized web development",
      "web performance optimization",
      "e-commerce development",
      "SaaS development",
      "startup tech partner",
      "web development services",
      "mobile app development services",
      "cloud solutions",
      "IT consulting",
      "web development cost",
      "mobile app development cost",
      "IT project quote",

      // ── Personal Brand ────────────────────────────────────────────────────
      "Saroj Dangol",
      "Saroj Dangol developer",
      "Saroj Dangol Nepal",
      "Saroj Dangol portfolio",
      "Saroj Dangol full stack developer",
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
    },
    openGraph: {
      title: "Saroj Dangol — Senior Full Stack Developer in Nepal | IT Services Lalitpur",
      description:
        "Senior Full Stack & Mobile Developer in Lalitpur, Nepal. Expert in MERN stack, React Native, and AWS. Hire a trusted IT developer in Nepal for your next project.",
      url: "https://www.sarojdangol012.com.np",
      siteName: "Saroj Dangol - IT Developer Nepal",
      images: {
        url: "https://www.sarojdangol012.com.np/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "Saroj Dangol - IT Developer in Lalitpur, Nepal",
      },
      locale: "en_US",
      type: "profile",
      emails: ["hello@sarojdangol012.com.np", "saroj9823dangol@gmail.com"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@sarojdev",
      creator: "@sarojdev",
      title: "Saroj Dangol - Top IT Developer in Nepal",
      description:
        "Senior Full Stack Developer in Lalitpur, Nepal. Building world-class web & mobile apps. MERN | React Native | AWS.",
      images: [
        {
          url: "https://www.sarojdangol012.com.np/images/twitter-card.webp",
          width: 1200,
          height: 675,
          alt: "Saroj Dangol - IT Developer Nepal",
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
      "og:latitude": "27.6710",
      "og:longitude": "85.3226",
      "og:locality": "Lalitpur",
      "og:region": "Bagmati",
      "og:postal-code": "44700",
      "og:country-name": "Nepal",
      "business:contact_data:street_address": "Lalitpur",
      "business:contact_data:locality": "Lalitpur",
      "business:contact_data:region": "Bagmati",
      "business:contact_data:postal_code": "44700",
      "business:contact_data:country_name": "Nepal",
      "geo.region": "NP-P3",
      "geo.placename": "Lalitpur",
      "geo.position": "27.6710;85.3226",
      ICBM: "27.6710, 85.3226",
    },
  },
  structuredData: {
    type: "Person",
    name: "Saroj Dangol",
    jobTitle: "Senior Full Stack Developer & Individual Website Development Expert",
    url: "https://www.sarojdangol012.com.np/images/profile.webp",
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
      "Senior Full Stack Developer & Individual IT Developer in Lalitpur, Nepal. 3+ years experience in freelance MERN stack, React Native, and Cloud Solutions. Serving Kathmandu and worldwide.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lalitpur",
      addressLocality: "Lalitpur",
      addressRegion: "Bagmati",
      postalCode: "44700",
      addressCountry: "Nepal",
    },
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
