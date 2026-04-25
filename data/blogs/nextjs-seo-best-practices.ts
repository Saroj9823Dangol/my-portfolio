export const nextJsSeoBestPractices = {
  id: "nextjs-seo-best-practices",
  slug: "nextjs-seo-best-practices",
  title: "Next.js SEO Best Practices: Complete Guide for 2026",
  image: "/images/blogs/nextjs-seo.jpg",
  excerpt:
    "Master SEO in Next.js applications with this comprehensive guide covering metadata, structured data, performance optimization, and more.",
  content: `
    <div style="color: #e5e7eb; line-height: 1.8; font-size: 1.125rem;">
      <h2>Why Next.js Excels at SEO in 2026</h2>
      <p>Next.js has become the go-to React framework for SEO-critical apps like marketing sites, e-commerce, blogs, and SaaS. Its hybrid rendering (SSR, SSG, ISR), built-in Metadata API, React Server Components, and automatic optimizations deliver crawlable HTML instantly — no JavaScript execution needed for bots.</p>
      <p>Key 2026 advantages:</p>
      <ul>
        <li>Pre-rendered HTML improves crawling, indexing, and Core Web Vitals (LCP, INP, CLS).</li>
        <li>App Router centralizes metadata with inheritance & dynamic generation.</li>
        <li>Edge runtime + caching = faster global delivery & better rankings.</li>
        <li>Built-in image/font optimization reduces load times.</li>
      </ul>
      <p>Follow these best practices to rank higher on Google in 2026.</p>

      <h2>1. Choose the Right Rendering Strategy for SEO</h2>
      <p>Rendering determines how fast & crawlable your content is:</p>
      <table style="width:100%; border-collapse:collapse; margin:2rem 0;">
        <tr style="background:#374151;">
          <th style="padding:1rem; border:1px solid #4b5563;">Strategy</th>
          <th style="padding:1rem; border:1px solid #4b5563;">How</th>
          <th style="padding:1rem; border:1px solid #4b5563;">SEO Impact</th>
          <th style="padding:1rem; border:1px solid #4b5563;">Best For</th>
        </tr>
        <tr>
          <td style="padding:1rem; border:1px solid #4b5563;">Static Site Generation (SSG)</td>
          <td><code>export const dynamic = 'force-static';</code> or no fetch</td>
          <td>Excellent — full HTML at build time</td>
          <td>Blogs, docs, marketing pages</td>
        </tr>
        <tr>
          <td style="padding:1rem; border:1px solid #4b5563;">Incremental Static Regeneration (ISR)</td>
          <td><code>fetch(..., { next: { revalidate: 3600 } })</code></td>
          <td>Great — static speed + fresh content</td>
          <td>News, products, dynamic-yet-cacheable pages</td>
        </tr>
        <tr>
          <td style="padding:1rem; border:1px solid #4b5563;">Server-Side Rendering (SSR)</td>
          <td><code>export const dynamic = 'force-dynamic';</code></td>
          <td>Very good — HTML on request</td>
          <td>User-specific, real-time dashboards</td>
        </tr>
        <tr>
          <td style="padding:1rem; border:1px solid #4b5563;">Client-Side Rendering (CSR)</td>
          <td>Avoid for main content</td>
          <td>Poor — bots may miss JS-rendered content</td>
          <td>Interactive widgets only</td>
        </tr>
      </table>
      <p>Tip: Use Partial Prerendering (PPR) in Next.js 15+ for hybrid static + dynamic shells — best of both worlds for SEO & personalization.</p>

      <h2>2. Master the Metadata API (App Router – 2026 Standard)</h2>
      <p>Next.js Metadata API handles <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, Open Graph, robots, etc. — with automatic deduplication & inheritance from layouts.</p>
      <p>Static metadata (root layout.ts):</p>
      <pre><code>import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saroj Dangol - Web Developer & Blogger',
  description: 'Building modern web apps with Next.js, React, and AWS.',
  openGraph: {
    images: '/og-image.png',
  },
};</code></pre>
      <p>Dynamic metadata (page.ts or layout.ts):</p>
      <pre><code>import type { Metadata, ResolvingMetadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  // Fetch data
  const post = await getPost(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage, ...previousImages],
    },
  };
}</code></pre>
      <p>Best practices:</p>
      <ul>
        <li>Use file-based metadata for icons/favicons (icon.png, apple-icon.png).</li>
        <li>Set canonical URLs to avoid duplicate content.</li>
        <li>Include robots: { index: true, follow: true } or disallow staging.</li>
      </ul>

      <h2>3. Add Structured Data (Schema Markup)</h2>
      <p>Boost rich snippets with JSON-LD. Render on server for bots.</p>
      <pre><code>export default function ArticlePage({ post }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Person", name: "Saroj Dangol" },
            image: post.image,
          }),
        }}
      />
      {/* content */}
    </>
  );
}</code></pre>
      <p>Use for Article, Product, FAQ, BreadcrumbList — test with Google's Rich Results Tool.</p>

      <h2>4. Performance Optimizations That Boost SEO</h2>
      <p>Core Web Vitals are ranking factors. Next.js helps automatically:</p>
      <ul>
        <li><strong>Images</strong>: Use <code>next/image</code> — auto WebP, lazy loading, responsive sizes, alt text mandatory.</li>
        <li><strong>Fonts</strong>: Automatic self-hosting & optimization — no layout shift.</li>
        <li><strong>Code splitting & lazy loading</strong>: <code>next/dynamic</code> for components.</li>
        <li><strong>Caching</strong>: Explicit with <code>fetch</code> options or route segment config.</li>
        <li><strong>Minify & compress</strong>: Built-in (gzip/Brotli).</li>
      </ul>
      <p>Monitor with Lighthouse, Vercel Analytics, or Google Search Console.</p>

      <h2>5. Additional Must-Do Practices</h2>
      <ul>
        <li><strong>Sitemap & robots.txt</strong>: Generate dynamically (sitemap.ts) or use file conventions.</li>
        <li><strong>Mobile-first & responsive</strong>: Test with Google's Mobile-Friendly Tool.</li>
        <li><strong>HTTPS</strong>: Automatic on Vercel/Netlify.</li>
        <li><strong>Internal linking & site structure</strong>: Logical hierarchy for crawl budget.</li>
        <li><strong>Analytics integration</strong>: GA4/ Vercel Speed Insights for monitoring.</li>
      </ul>

      <h2>Conclusion: Build SEO-First Next.js Apps in 2026</h2>
      <p>Next.js makes SEO almost effortless compared to plain React. Prioritize App Router, Metadata API, smart rendering (SSG/ISR), and performance defaults — then layer structured data & monitoring.</p>
      <p>Deploy on Vercel for edge speed & built-in analytics. Audit regularly with tools like Search Console & Lighthouse. Implement these practices, and watch your rankings climb!</p>
      <p>Questions or your own tips? Comment below!</p>
    </div>
  `,
  date: "2026-01-28",
  formattedDate: "January 28, 2026",
  readingTime: "14 min",
  tags: ["nextjs", "seo", "web performance", "react", "app-router", "metadata"],
  metaTitle:
    "Next.js SEO Best Practices 2026: Metadata API, Rendering & Performance Guide",
  metaDescription:
    "Complete 2026 guide to Next.js SEO: App Router Metadata API, SSG/ISR/SSR strategies, structured data, image optimization, Core Web Vitals, and ranking tips.",
  author: "Saroj Dangol",
  canonicalUrl:
    "https://www.sarojdangol012.com.np/blogs/nextjs-seo-best-practices",
  keyTakeaways: [
    "Next.js Server-Side Rendering (SSR) significantly improves SEO compared to client-side rendering",
    "The Next.js Metadata API simplifies adding title, description, and Open Graph tags",
    "Image optimization with next/image is critical for Core Web Vitals performance",
    "Structured data (JSON-LD) helps search engines understand page content and enables rich results",
    "Canonical URLs prevent duplicate content issues that can harm search rankings",
  ],
  relatedSlugs: ["react-server-components-2025", "server-components-nextjs-15-mern-2025", "building-scalable-micro-frontends-nextjs-2025"],
};
