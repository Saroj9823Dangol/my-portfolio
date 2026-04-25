# Implementation Tasks: Portfolio Redesign with GEO

## Overview

Tasks are ordered by dependency. Complete them sequentially. Each task references the relevant requirements (R1–R12) and design sections (D1–D6).

---

- [x] 1. Foundation — Design System & Dependency Cleanup
  - [x] 1.1 Remove animation and 3D dependencies from package.json: uninstall `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `expo`, `expo-asset`, `expo-file-system`, `expo-gl`, `react-native`
  - [x] 1.2 Replace fonts in `app/layout.tsx`: remove `Orbitron`, `Space_Mono`, `Rajdhani`; add `Instrument_Serif` (400, normal+italic), `Inter` (400, 500, 600), `JetBrains_Mono` (400, 500) via `next/font/google` with `display: swap` and `preload: true` for display and body fonts
  - [x] 1.3 Rewrite `app/globals.css`: replace space theme color variables with the new design system tokens (`--color-bg`, `--color-surface`, `--color-surface-2`, `--color-border`, `--color-fg`, `--color-fg-muted`, `--color-fg-subtle`, `--color-accent`, `--color-accent-dim`, `--color-accent-border`); add type scale variables; add font utility classes (`font-display`, `font-body`, `font-mono`); remove all space-themed CSS (glow effects, starfield, planet animations, glass morphism)
  - [x] 1.4 Update `app/layout.tsx`: apply new font variables to `<body>`, add global `<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />` to `<head>`, update `viewport` themeColor to `#0d0d0d`

- [x] 2. Navigation & Layout Shell
  - [x] 2.1 Create `components/layout/navbar.tsx`: fixed top bar with logo ("Saroj Dangol" in Inter 600), nav links (Home, About, Projects, Services, Blog, Contact), CV download link, and "Hire Me" accent button; active page detection via `usePathname`; CSS-only mobile menu toggle (no framer-motion); `backdrop-blur-sm` + `border-b border-border` on scroll (use `useEffect` + `window.scrollY`); full keyboard navigation with `aria-label` on hamburger button
  - [x] 2.2 Create `components/layout/footer.tsx`: logo + tagline, nav links row, social links (GitHub, LinkedIn, Upwork, Facebook), copyright line with email; fully static Server Component
  - [x] 2.3 Update `app/layout.tsx` to render `<Navbar />` and `<Footer />` wrapping `{children}` so all pages inherit them automatically; remove old `FloatingNav` import

- [x] 3. Home Page — Complete Rewrite
  - [x] 3.1 Create `components/home/hero.tsx`: Server Component; `<h1>` with "I build software" (Instrument Serif, 72px, tight tracking) + "that earns trust." (Instrument Serif Italic); mono availability label above headline; sub-headline in Inter muted; two CTA buttons ("Start Your Project" → `/contact`, "See My Work" → `#projects`); no profile image in hero; no animations
  - [x] 3.2 Create `components/home/stats.tsx`: 4-column stats bar — "3+ Years Experience", "9+ Projects Shipped", "2 Companies", "AWS Certified"; JetBrains Mono for numbers, Inter for labels; `border-t border-b border-border` divider style
  - [x] 3.3 Create `components/home/featured-projects.tsx`: bento-style grid showing 3 featured projects (Nepal Kabaddi League, Hamro Blood Bank, PetsNepal); each card has image, title, tech tags, live link; hover border changes to `--color-accent-border`; uses `<Image>` with WebP
  - [x] 3.4 Create `components/home/services-preview.tsx`: 2×2 grid of 4 service cards (Web Dev, Mobile, Backend, Cloud); icon + title + one-line description + "Learn more →" link; no animations
  - [x] 3.5 Create `components/home/blog-preview.tsx`: horizontal row of 3 latest blog posts; date in JetBrains Mono, title in Instrument Serif, excerpt in Inter muted; "View all posts →" link
  - [x] 3.6 Create `components/home/cta-band.tsx`: full-width dark band (`--color-surface`); headline "Ready to build something that works?"; accent CTA button "Start Your Project →"; sub-text with email as fallback
  - [x] 3.7 Rewrite `app/page.tsx`: Server Component (remove `"use client"`); compose all home sections in order: Hero, Stats, FeaturedProjects, ServicesPreview, BlogPreview, CTABand; delete all solar system, starfield, terminal, planet overlay, loading screen imports and logic

- [x] 4. About Page — New Dedicated Route (GEO Critical)
  - [x] 4.1 Create `app/about/page.tsx`: Server Component with `generateMetadata`; title "About Saroj Dangol — Full Stack Developer, Lalitpur Nepal"; description answering "Who is Saroj Dangol?" in ≤ 155 chars; canonical `/about`
  - [x] 4.2 Create `components/sections/about-section.tsx`: H1 "About Saroj Dangol"; GEO answer block with `id="about-saroj"` containing 3-paragraph factual third-person prose answering who/what/where; stats grid (experience, projects, technologies, location); experience timeline (rewritten without framer-motion); education; CTA "Work with Saroj →"
  - [x] 4.3 Add `/about` to `app/sitemap.ts` with `priority: 0.9` and `changeFrequency: "monthly"`

- [x] 5. Projects Section & Page
  - [x] 5.1 Create `components/ui/project-card.tsx`: reusable card with Next.js `<Image>` (WebP, explicit width/height, descriptive alt), project title (Inter 600), subtitle (JetBrains Mono, muted), description (Inter, 2-line clamp), tech tags (`components/ui/tech-tag.tsx`), live + GitHub links; hover: `border-color` transitions to accent (CSS transition only, no framer-motion)
  - [x] 5.2 Create `components/ui/tech-tag.tsx`: small pill badge — JetBrains Mono, `--color-accent-dim` background, `--color-accent` text, `rounded-full`
  - [x] 5.3 Rewrite `components/content/projects-content.tsx` (or create `components/sections/projects-section.tsx`): 3-column desktop / 2-column tablet / 1-column mobile grid using `ProjectCard`; section label "Projects" in mono uppercase; section title in Instrument Serif; "View all on GitHub →" CTA at bottom; no framer-motion

- [x] 6. Skills Section
  - [x] 6.1 Create `components/ui/skill-bar.tsx`: skill name (Inter 500) + percentage label (JetBrains Mono, muted) + progress bar (CSS width, `--color-accent` fill, `--color-surface-2` track); NO CSS animation on mount — static render only
  - [x] 6.2 Rewrite `components/content/skills-content.tsx` (or create `components/sections/skills-section.tsx`): 2-column grid of skill bars; section label + Instrument Serif title; no framer-motion imports

- [x] 7. Experience Section
  - [x] 7.1 Rewrite `components/content/experience-content.tsx` (or create `components/sections/experience-section.tsx`): vertical timeline — left border line, dot marker, role title (Inter 600), company (Inter 500, accent color), period (JetBrains Mono, muted), description (Inter, muted); no framer-motion; fully static HTML

- [x] 8. Services Page — Rewrite
  - [x] 8.1 Rewrite `app/services/page.tsx`: update `generateMetadata` with new title/description targeting "IT services Nepal"; add `ProfessionalService` JSON-LD schema via `<StructuredData>`
  - [x] 8.2 Rewrite `components/content/services-content.tsx` (or create `components/sections/services-section.tsx`): 2×2 grid of service cards with Lucide icon, title, description, 5-item feature list with checkmarks, "Start a Project →" CTA per card; social proof strip below grid ("9+ projects delivered · 3+ years · AWS certified"); full-width CTA band at bottom; no framer-motion

- [x] 9. Contact Page — Rewrite
  - [x] 9.1 Rewrite `components/content/contact-content.tsx` (or create `components/sections/contact-section.tsx`): 2-column layout; left: form with Name, Email, Subject (new field), Message using `react-hook-form` + Zod validation; right: email address, GitHub, LinkedIn, Upwork links; success state: inline confirmation (no space-themed copy); error state: inline field errors, data preserved; no framer-motion
  - [x] 9.2 Update `app/api/contact/route.ts` if needed to handle the new `subject` field
  - [x] 9.3 Rewrite `app/contact/page.tsx`: new design layout with breadcrumb, H1 "Let's Build Something", sub-headline; import updated contact section; keep existing `contactPageSchema` and `localBusinessSchema` structured data

- [x] 10. FAQ Page — Rewrite & Expand
  - [x] 10.1 Expand FAQ data to 10+ entries covering: services, pricing, technologies, timeline, support, process, international clients, existing projects, what makes Saroj different, how to get started, MERN stack specifics, React Native specifics, AWS services — each answer must be a complete standalone sentence
  - [x] 10.2 Rewrite `app/faq/page.tsx`: new design with H1, intro paragraph, Radix UI Accordion (already installed), "Still have questions?" CTA band at bottom; update `faqSchema` in `lib/seo/schema.ts` to include all 10+ Q&A pairs

- [x] 11. Blog List Page — Rewrite
  - [x] 11.1 Rewrite `app/blogs/page.tsx` and `app/blogs/blog-list-client.tsx`: full-width list layout (not grid); each post shows date (JetBrains Mono), title (Instrument Serif, 24px), excerpt (Inter, muted, 2 lines), reading time + category tag; hover: title shifts to accent color; update metadata with better title/description for GEO

- [x] 12. Blog Detail Page — Enhance for GEO
  - [x] 12.1 Add `keyTakeaways?: string[]`, `relatedSlugs?: string[]`, and `lastModified?: string` fields to the blog post type in `lib/types/index.ts` and `data/blogs/index.ts`
  - [x] 12.2 Add `keyTakeaways` arrays (3–5 items each) to all 18 blog post data files in `data/blogs/`
  - [x] 12.3 Add `relatedSlugs` arrays (2–3 slugs each) to all 18 blog post data files based on topic similarity
  - [x] 12.4 Rewrite `app/blogs/[slug]/blog-detail-client.tsx`: add Key Takeaways `<aside>` block (rendered as `<ul>` with `<li>` elements) above the main content; add author bio block at bottom (name, title, skills list, link to /about); add Related Articles section (2–3 cards); enforce H1→H2→H3 heading hierarchy; no framer-motion
  - [x] 12.5 Update `app/blogs/[slug]/page.tsx`: update Article schema to include `author` (Person schema reference), `datePublished`, `dateModified` (from `lastModified` field or `date`), `url` (canonical); display author name, publication date, last modified date, reading time in visible page content

- [x] 13. GEO Schema Enhancements
  - [x] 13.1 Update `lib/seo/schema.ts` — enhance `personSchema`: add `mainEntityOfPage` pointing to home page WebPage `@id`; add `speakable` with `cssSelector: ["#about-saroj", ".hero-headline"]`; add `mentions` array of 8 `SoftwareApplication` entities; expand `knowsAbout` to 18 specific searchable topics; add `hasCredential` for AWS certification
  - [x] 13.2 Update `lib/seo/schema.ts` — enhance `localBusinessSchema`: add `serviceArea` array with Lalitpur, Kathmandu, Bhaktapur, Nepal, "Worldwide Remote"
  - [x] 13.3 Create `lib/seo/geo-schema.ts`: `ProfessionalService` schema for the services page; `WebPage` schema with `mainEntity` reference for home page
  - [x] 13.4 Update `app/services/page.tsx` to import and render the `ProfessionalService` schema via `<StructuredData>`
  - [x] 13.5 Update `app/page.tsx` to render the enhanced `combinedSchema` (which now includes `mainEntityOfPage` and `speakable`)

- [x] 14. robots.txt & sitemap Enhancement
  - [x] 14.1 Rewrite `app/robots.ts`: add explicit `allow: "/"` rules for `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Anthropic-AI`, `Google-Extended`; keep disallow for `/api/` and `/admin/`; add reference to `/llms.txt` in a comment or as a custom field
  - [x] 14.2 Update `app/sitemap.ts`: add `/about` page entry; ensure all 18 blog post slugs are present; add `lastmod` from blog post `date` field; verify `changeFrequency` and `priority` values match design spec

- [-] 15. llms.txt — LLM-Optimised Summary
  - [ ] 15.1 Create `public/llms.txt`: plain text file with sections Identity, Services, Skills, Experience, Projects, Contact, Availability — formatted exactly as specified in design section 4.5; all URLs must be absolute
  - [ ] 15.2 Create `public/llms-full.txt`: extended version of llms.txt with fuller descriptions of each service, all 9 projects with descriptions, complete skills list with proficiency levels, all 4 experience entries with descriptions
  - [ ] 15.3 Create `app/llms.txt/route.ts` (or verify `public/llms.txt` is served correctly): ensure the file is accessible at `https://www.sarojdangol012.com.np/llms.txt` with `Content-Type: text/plain`

- [ ] 16. Delete Obsolete Files
  - [ ] 16.1 Delete `components/solar-system.tsx`
  - [ ] 16.2 Delete `components/effects/starfield.tsx`
  - [ ] 16.3 Delete `components/planet-overlay.tsx`
  - [ ] 16.4 Delete `components/loading-screen.tsx`
  - [ ] 16.5 Delete `components/developer-info.tsx`
  - [ ] 16.6 Delete `components/terminal/terminal.tsx` and `components/terminal/` directory
  - [ ] 16.7 Delete `components/floating-nav.tsx`
  - [ ] 16.8 Delete `lib/constants/planets.ts`

- [ ] 17. Reusable UI Components
  - [ ] 17.1 Create `components/ui/section-label.tsx`: uppercase mono label component — JetBrains Mono, `--color-accent` color, `letter-spacing: 0.1em`, small size; used above every section title
  - [ ] 17.2 Audit all remaining `components/content/` files for any remaining `framer-motion` imports and remove them; replace `motion.div` with plain `div`

- [ ] 18. Performance Verification & Cleanup
  - [ ] 18.1 Run `next build` and verify no TypeScript errors and no import errors from deleted files
  - [ ] 18.2 Verify bundle: check that `three`, `framer-motion`, `@react-three/fiber` do not appear in the build output chunks
  - [ ] 18.3 Verify all `<Image>` components have explicit `width`, `height`, and non-empty `alt` attributes
  - [ ] 18.4 Verify all interactive elements (buttons, links, form fields) have accessible labels — add `aria-label` where text is not visible
  - [ ] 18.5 Verify the home page `app/page.tsx` has no `"use client"` directive (must be a Server Component)
  - [ ] 18.6 Verify `/llms.txt` is publicly accessible and returns correct content type
  - [ ] 18.7 Verify `/robots.txt` contains GPTBot, PerplexityBot, ClaudeBot, Anthropic-AI allow rules
  - [ ] 18.8 Verify all 18 blog post slugs still resolve correctly after the blog detail page rewrite
