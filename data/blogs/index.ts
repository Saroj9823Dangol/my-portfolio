import { aiWebDevelopmentGuide } from "./ai-web-devs";
import { fullStackDeveloperGuide } from "./how-to-become-fullstack";
import { jwtAuthentication } from "./jwt-authentication";
import { mernStackFolderStructureGuide } from "./mern-folder-structure";
import { mernStackDominanceGuide } from "./mern-stack-dominates";
import { mernStackGuide } from "./mern-stack-guide";
import { microFrontendsGuide } from "./micro-frontend-nextjs";
import { reactPerformance } from "./react-performance";
import { reactServerComponentsGuide } from "./react-server-component";
import { serverComponentsGuide } from "./server-components";
import { ssrVsCsrGuide } from "./ssrvscsr";
import { webAssemblyGuide } from "./web-assembly";

// Export all blog posts as an array
export const ALL_BLOG_POSTS = [
  aiWebDevelopmentGuide,
  fullStackDeveloperGuide,
  jwtAuthentication,
  mernStackFolderStructureGuide,
  mernStackDominanceGuide,
  mernStackGuide,
  microFrontendsGuide,
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
}
