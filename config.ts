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
    };
    description: string;
    skills: string[];
  };
}

export const siteConfig: SiteConfig = {
  fonts: {
    poppins: {
      subsets: ["latin"],
      weights: ["300", "400", "500", "600", "700", "800", "900"],
      variable: "--font-poppins",
    },
    jetbrainsMono: {
      subsets: ["latin"],
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
      default: "Saroj Dangol | Full Stack Developer & MERN Stack Expert",
      template: "%s | Saroj Dangol Portfolio",
    },
    description:
      "Professional Full Stack Developer specializing in MERN stack (MongoDB, Express, React, Node.js) with expertise in building high-performance web applications. View my portfolio for projects and contact information.",
    applicationName: "Saroj Dangol Portfolio",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Expert",
      "Next.js Developer",
      "Web Developer Portfolio",
      "Saroj Dangol",
      "JavaScript Developer",
      "Node.js Developer",
      "TypeScript Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    author: {
      name: "Saroj Dangol",
      url: "https://sarojdev.vercel.app",
    },
    creator: "Saroj Dangol",
    publisher: "Saroj Dangol",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    metadataBase: new URL("https://sarojdev.vercel.app"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: "Saroj Dangol - Full Stack Developer Portfolio",
      description:
        "Professional portfolio showcasing my expertise in MERN stack development, React applications, and full-stack solutions.",
      url: "https://sarojdev.vercel.app",
      siteName: "Saroj Dangol Portfolio",
      images: {
        url: "https://sarojdev.vercel.app/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Saroj Dangol - Full Stack Developer",
      },
      locale: "en_US",
      type: "website",
      emails: ["mail.sarojdangol@gmail.com", "saroj9823dangol@gmail.com"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourtwitterhandle",
      creator: "@yourtwitterhandle",
      title: "Saroj Dangol - Full Stack Developer",
      description:
        "Professional portfolio showcasing my expertise in MERN stack development and web applications.",
      images: [{ url: "https://sarojdev.vercel.app/images/profile.png" }],
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "ZehS4kI2H4bUfWwPGCGl23h8rxEEp4KPxCiBdykJ-v4",
    },
    other: {
      "msapplication-TileColor": "#da532c",
      "theme-color": "#ffffff",
    },
  },
  structuredData: {
    type: "Person",
    name: "Saroj Dangol",
    jobTitle: "Full Stack Developer",
    url: "https://sarojdev.vercel.app",
    sameAs: [
      "https://github.com/Saroj9823Dangol",
      "https://linkedin.com/in/er-saroj-dangol-9492bb216",
      "https://facebook.com/saroz.dangol.7",
    ],
    worksFor: {
      type: "Organization",
      name: "Apptechnologies",
    },
    description:
      "Professional Full Stack Developer specializing in MERN stack development.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Web Performance",
    ],
  },
};
