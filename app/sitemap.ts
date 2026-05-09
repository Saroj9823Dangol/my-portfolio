import type { MetadataRoute } from "next";
import { ALL_BLOG_POSTS } from "@/data/blogs";
import { toolsList } from "@/lib/tools/tool-list";

// Stable last-modified dates for static pages.
// Update these manually when you make meaningful content changes.
// Using new Date() on every build causes Google to deprioritize crawling
// because it sees every page as "changed today" on every deploy.
const STATIC_PAGE_DATES: Record<string, string> = {
  "/": "2026-01-15",
  "/about": "2026-01-15",
  "/projects": "2026-01-15",
  "/services": "2026-01-15",
  "/tools": "2026-01-15",
  "/contact": "2026-01-15",
  "/faq": "2026-01-15",
  "/blogs": "2026-01-15",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sarojdangol012.com.np";

  // Static pages — stable dates, not new Date() on every build
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(STATIC_PAGE_DATES["/"]),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(STATIC_PAGE_DATES["/about"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(STATIC_PAGE_DATES["/services"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(STATIC_PAGE_DATES["/contact"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(STATIC_PAGE_DATES["/blogs"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(STATIC_PAGE_DATES["/tools"]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(STATIC_PAGE_DATES["/projects"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(STATIC_PAGE_DATES["/faq"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Tool pages — stable date, tools don't change often
  const toolLastModified = new Date("2026-01-15");
  const toolPages: MetadataRoute.Sitemap = toolsList.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: toolLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog posts — use actual publish date from post data
  // Sort newest first so Google crawls recent content first
  const sortedPosts = [...ALL_BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const blogPosts: MetadataRoute.Sitemap = sortedPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date((post as { lastModified?: string; date: string }).lastModified || post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...toolPages, ...blogPosts];
}
