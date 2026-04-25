import { aiWebDevelopmentGuide } from "./ai-web-devs";
import { awsServerlessArchitecture } from "./aws-serverless-architecture-guide";
import { bestDeveloperNepal } from "./best-developer-nepal";
import { freelanceDeveloperNepal } from "./freelance-developer-nepal";
import { freelancingInNepal } from "./freelancing-nepal";
import { fullStackDeveloperGuide } from "./how-to-become-fullstack";
import { hireMernDeveloperNepal } from "./hire-mern-developer-nepal";
import { howToHireItDeveloper } from "./how-to-hire-it-developer-nepal";
import { itProjectCostGuide } from "./it-project-cost-nepal";
import { jwtAuthentication } from "./jwt-authentication";
import { mernStackFolderStructureGuide } from "./mern-folder-structure";
import { mernStackDominanceGuide } from "./mern-stack-dominates";
import { mernStackGuide } from "./mern-stack-guide";
import { mernStackVsAlternatives } from "./mern-stack-vs-alternatives-2026";
import { microFrontendsGuide } from "./micro-frontend-nextjs";
import { nextJsSeoBestPractices } from "./nextjs-seo-best-practices";
import { reactNativeAppCost } from "./react-native-app-development-cost-nepal";
import { reactPerformance } from "./react-performance";
import { reactServerComponentsGuide } from "./react-server-component";
import { serverComponentsGuide } from "./server-components";
import { ssrVsCsrGuide } from "./ssrvscsr";
import { webAssemblyGuide } from "./web-assembly";

// Export all blog posts as an array
export const ALL_BLOG_POSTS = [
  aiWebDevelopmentGuide,
  awsServerlessArchitecture,
  bestDeveloperNepal,
  freelanceDeveloperNepal,
  freelancingInNepal,
  fullStackDeveloperGuide,
  hireMernDeveloperNepal,
  howToHireItDeveloper,
  itProjectCostGuide,
  jwtAuthentication,
  mernStackFolderStructureGuide,
  mernStackDominanceGuide,
  mernStackGuide,
  mernStackVsAlternatives,
  microFrontendsGuide,
  nextJsSeoBestPractices,
  reactNativeAppCost,
  reactPerformance,
  reactServerComponentsGuide,
  serverComponentsGuide,
  ssrVsCsrGuide,
  webAssemblyGuide,
];

// Export type for blog post
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  image?: string;
  excerpt: string;
  content: string;
  date: string;
  formattedDate?: string;
  readingTime: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  canonicalUrl?: string;
  keyTakeaways?: string[];   // 3–5 bullet points for the TL;DR block
  relatedSlugs?: string[];   // 2–3 slugs for related articles
  lastModified?: string;     // ISO date string for dateModified in Article schema
}
