import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Define fonts with dynamic configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Dynamic metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.title.default,
    template: siteConfig.metadata.title.template,
  },
  description: siteConfig.metadata.description,
  applicationName: siteConfig.metadata.applicationName,
  generator: siteConfig.metadata.generator,
  referrer: siteConfig.metadata.referrer,
  keywords: siteConfig.metadata.keywords,
  authors: [
    {
      name: siteConfig.metadata.author.name,
      url: siteConfig.metadata.author.url,
    },
  ],
  creator: siteConfig.metadata.creator,
  publisher: siteConfig.metadata.publisher,
  formatDetection: siteConfig.metadata.formatDetection,
  metadataBase: siteConfig.metadata.metadataBase,
  alternates: siteConfig.metadata.alternates,
  openGraph: {
    title: siteConfig.metadata.openGraph.title,
    description: siteConfig.metadata.openGraph.description,
    url: siteConfig.metadata.openGraph.url,
    siteName: siteConfig.metadata.openGraph.siteName,
    images: [
      {
        url: siteConfig.metadata.openGraph.images.url,
        width: siteConfig.metadata.openGraph.images.width,
        height: siteConfig.metadata.openGraph.images.height,
        alt: siteConfig.metadata.openGraph.images.alt,
      },
    ],
    locale: siteConfig.metadata.openGraph.locale,
    type: siteConfig.metadata.openGraph.type,
    emails: siteConfig.metadata.openGraph.emails,
  },
  twitter: {
    card: siteConfig.metadata.twitter.card,
    site: siteConfig.metadata.twitter.site,
    creator: siteConfig.metadata.twitter.creator,
    title: siteConfig.metadata.twitter.title,
    description: siteConfig.metadata.twitter.description,
    images: siteConfig.metadata.twitter.images.map((img) => img.url),
  },
  icons: {
    icon: siteConfig.metadata.icons.icon,
    shortcut: siteConfig.metadata.icons.shortcut,
    apple: siteConfig.metadata.icons.apple,
    other: siteConfig.metadata.icons.other,
  },
  manifest: siteConfig.metadata.manifest,
  robots: siteConfig.metadata.robots,
  verification: {
    google: siteConfig.metadata.verification.google,
  },
  other: siteConfig.metadata.other,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="ZehS4kI2H4bUfWwPGCGl23h8rxEEp4KPxCiBdykJ-v4"
        />

        <meta name="application-name" content="Push Demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.ts" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* <link
          rel="alternate"
          href="https://sarojdangol012.com.np"
          hrefLang="x-default"
        /> */}
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute={siteConfig.theme.attribute}
          defaultTheme={siteConfig.theme.defaultTheme}
          enableSystem={siteConfig.theme.enableSystem}
          disableTransitionOnChange={siteConfig.theme.disableTransitionOnChange}
        >
          {/* <CustomCursor /> */}
          {children}
        </ThemeProvider>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": siteConfig.structuredData.type,
              name: siteConfig.structuredData.name,
              jobTitle: siteConfig.structuredData.jobTitle,
              url: siteConfig.structuredData.url,
              sameAs: siteConfig.structuredData.sameAs,
              worksFor: {
                "@type": siteConfig.structuredData.worksFor.type,
                name: siteConfig.structuredData.worksFor.name,
              },
              description: siteConfig.structuredData.description,
              skills: siteConfig.structuredData.skills,
            }),
          }}
        />
      </body>
    </html>
  );
}
