import type React from "react";
import type { Metadata, Viewport } from "next";
import { Orbitron, Space_Mono, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/config";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
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

export const viewport: Viewport = {
  themeColor: "#0a0e27",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${spaceMono.variable} ${rajdhani.variable} font-body antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
