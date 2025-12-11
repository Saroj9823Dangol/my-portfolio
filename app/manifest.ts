import { siteConfig } from "@/config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // Basic app information
    name: siteConfig.metadata.title.default,
    short_name: "Saroj Portfolio", // Keep under 12 characters for homescreen
    description: siteConfig.metadata.description ?? "",

    // Display properties
    start_url: "/?source=pwa", // Add tracking parameter
    display: "standalone", // Could also use "fullscreen" or "minimal-ui"
    orientation: "portrait-primary", // Lock orientation if needed
    scope: "/",

    // Appearance
    background_color: "#ffffff", // Splash screen background
    theme_color: siteConfig.metadata.other["theme-color"], // Should match meta theme-color
    prefer_related_applications: false, // Set to true if you have native apps

    // Icons (enhanced with purpose and additional sizes)
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any", // Default icon
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable", // For iOS home screen
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // For Android home screen
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable", // High-res for splash screens
      },
      // Add additional sizes for better coverage
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
    ],

    // Additional PWA features
    shortcuts: [
      {
        name: "About Me",
        short_name: "About",
        description: "Learn more about my background",
        url: "/about",
        icons: [{ src: "/icon-about.png", sizes: "96x96" }],
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "View my portfolio projects",
        url: "/projects",
        icons: [{ src: "/icon-projects.png", sizes: "96x96" }],
      },
    ],
  };
}
