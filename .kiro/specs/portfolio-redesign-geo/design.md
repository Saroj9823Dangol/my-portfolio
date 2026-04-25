# Design Document: Portfolio Redesign with GEO

## Overview

This document defines the complete technical design for the portfolio redesign. The current site uses Three.js, framer-motion, Orbitron/Rajdhani fonts, and a space theme. The new design replaces everything with a dark editorial aesthetic inspired by Linear, Vercel, and Stripe — no animations, no WebGL, no loading screens. The primary goals are client conversion and AI search discoverability (GEO).

**Design References:**
- Linear.app — dark background, thin borders, bento grid, subtle glow accents
- Vercel.com — Geist typography, extreme whitespace, monochrome with single accent
- Stripe.com — editorial authority, data-dense but clean, conversion-focused copy
- Resend.com — minimal dark, code aesthetic, trust signals prominent

---

## 1. Design System

### 1.1 Typography

Three font roles, all loaded via `next/font/google`:

| Role | Font | Usage |
|------|------|-------|
| Display | **Instrument Serif** (Regular + Italic) | H1, H2, hero headline, section titles |
| Body | **Inter** (400, 500, 600) | Paragraphs, descriptions, UI labels |
| Mono | **JetBrains Mono** (400, 500) | Code snippets, tech tags, metadata, dates |

**Rationale:** Instrument Serif creates psychological authority at large sizes — its high stroke contrast and calligraphic energy make headlines feel editorial and memorable, not generic. Inter is the gold standard for legible body text on screens. JetBrains Mono signals technical credibility.

**Type Scale (CSS custom properties):**
```css
--text-xs:   0.75rem;   /* 12px — metadata, timestamps */
--text-sm:   0.875rem;  /* 14px — labels, captions */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — lead paragraphs */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section subtitles */
--text-3xl:  1.875rem;  /* 30px — section titles */
--text-4xl:  2.25rem;   /* 36px — page titles */
--text-5xl:  3rem;      /* 48px — hero headline */
--text-6xl:  3.75rem;   /* 60px — hero display (desktop) */
--text-7xl:  4.5rem;    /* 72px — hero display (large desktop) */
```

**Letter-spacing rules:**
- Display headings ≥ 48px: `letter-spacing: -0.03em`
- Display headings < 48px: `letter-spacing: -0.02em`
- Uppercase labels/metadata: `letter-spacing: 0.1em`
- Body text: `letter-spacing: 0` (default)

**Line-height rules:**
- Display headings: `line-height: 1.1`
- Body text: `line-height: 1.7`
- Mono/labels: `line-height: 1.5`

### 1.2 Color System

Dark-mode-first. Background HSL lightness ≤ 8%.

```css
/* Background layers */
--color-bg:          hsl(0, 0%, 5%);      /* #0d0d0d — main background */
--color-surface:     hsl(0, 0%, 8%);      /* #141414 — cards, panels */
--color-surface-2:   hsl(0, 0%, 11%);     /* #1c1c1c — hover states, inputs */
--color-border:      hsl(0, 0%, 15%);     /* #262626 — borders */
--color-border-subtle: hsl(0, 0%, 12%);   /* #1f1f1f — subtle dividers */

/* Foreground */
--color-fg:          hsl(0, 0%, 98%);     /* #fafafa — headings, primary text (contrast 18:1) */
--color-fg-muted:    hsl(0, 0%, 60%);     /* #999999 — body text (contrast 5.7:1 ✓ WCAG AA) */
--color-fg-subtle:   hsl(0, 0%, 40%);     /* #666666 — placeholders, disabled */

/* Accent — Electric Amber */
--color-accent:      hsl(38, 100%, 55%);  /* #ffaa00 — CTAs, highlights, active states */
--color-accent-dim:  hsl(38, 100%, 55%, 0.12); /* accent background tint */
--color-accent-border: hsl(38, 100%, 55%, 0.25); /* accent border */
```

**Accent rationale:** Electric amber (#ffaa00) against near-black (#0d0d0d) achieves a 9.8:1 contrast ratio (WCAG AAA). It reads as premium and urgent — used by luxury brands and high-conversion SaaS. It is psychologically associated with attention, energy, and scarcity. Used sparingly (≤ 20% surface area) it creates a "hot wire" effect that draws the eye exactly where needed.

**No gradients as decoration.** One permitted use: a single radial glow behind the hero section — `radial-gradient(ellipse 800px 400px at 50% 0%, hsl(38 100% 55% / 0.04), transparent)` — barely perceptible, creates depth.

### 1.3 Spacing System

Section padding: `py-24 md:py-32` (96px / 128px). Mobile: `py-16` (64px).
Container max-width: `max-w-6xl` (1152px) with `px-6 md:px-8`.

### 1.4 Border Radius

- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Tags/badges: `rounded-full`
- Inputs: `rounded-lg` (8px)

---

## 2. Component Architecture

### 2.1 File Structure (new/changed files)

```
app/
  layout.tsx              ← Replace fonts (Instrument Serif + Inter + JetBrains Mono)
  globals.css             ← Replace color system, remove space theme, add new tokens
  page.tsx                ← Complete rewrite — new home page (no solar system)
  about/
    page.tsx              ← New dedicated /about page (GEO-critical)
  services/
    page.tsx              ← Rewrite with new design + ProfessionalService schema
  contact/
    page.tsx              ← Rewrite with new design
  faq/
    page.tsx              ← Rewrite with new design + expanded FAQPage schema
  blogs/
    page.tsx              ← Rewrite with new design
    [slug]/
      page.tsx            ← Rewrite with Key Takeaways, author bio, related posts
  sitemap.ts              ← Add /about page
  robots.ts               ← Add GPTBot, PerplexityBot, ClaudeBot, Anthropic-AI

components/
  layout/
    navbar.tsx            ← New fixed top navbar (replaces floating-nav)
    footer.tsx            ← New footer with links + social proof
  home/
    hero.tsx              ← New hero section
    stats.tsx             ← Social proof stats bar
    featured-projects.tsx ← 3-project bento grid
    services-preview.tsx  ← Services teaser
    blog-preview.tsx      ← Latest 3 blog posts
    cta-band.tsx          ← Full-width CTA strip
  sections/
    about-section.tsx     ← Rewritten (no framer-motion)
    projects-section.tsx  ← Rewritten grid
    skills-section.tsx    ← Rewritten (no framer-motion)
    experience-section.tsx← Rewritten timeline
    services-section.tsx  ← Rewritten (no framer-motion)
    contact-section.tsx   ← Rewritten form
    faq-section.tsx       ← Rewritten accordion
  ui/
    section-label.tsx     ← Reusable uppercase mono label component
    project-card.tsx      ← Reusable project card
    skill-bar.tsx         ← Reusable skill bar (CSS only, no animation)
    tech-tag.tsx          ← Reusable technology tag

lib/
  seo/
    schema.ts             ← Enhanced with GEO fields (speakable, mentions, knowsAbout, mainEntityOfPage)
    geo-schema.ts         ← New: GEO-specific schema additions
  constants/
    blog-posts.tsx        ← Add keyTakeaways[] and relatedSlugs[] fields to blog type

public/
  llms.txt                ← New: LLM-optimised site summary
  llms-full.txt           ← New: Extended LLM summary
```

### 2.2 Removed Files / Dependencies

The following will be removed or gutted:
- `components/solar-system.tsx` — deleted
- `components/effects/starfield.tsx` — deleted
- `components/planet-overlay.tsx` — deleted
- `components/loading-screen.tsx` — deleted
- `components/floating-nav.tsx` — replaced by `components/layout/navbar.tsx`
- `components/developer-info.tsx` — content moved to hero section
- `components/terminal/terminal.tsx` — removed (no terminal easter egg)
- `framer-motion` — removed from all components
- `three`, `@react-three/fiber`, `@react-three/drei` — removed from package.json
- `expo`, `expo-asset`, `expo-file-system`, `expo-gl`, `react-native` — removed (not needed for web)
- `Orbitron`, `Space_Mono`, `Rajdhani` fonts — replaced

---

## 3. Page Designs

### 3.1 Home Page (`/`)

**Structure (top to bottom):**
1. `<Navbar />` — fixed, transparent on scroll-top, solid `--color-surface` on scroll
2. `<Hero />` — full viewport height
3. `<Stats />` — 4-column stats bar (3+ years, 9+ projects, 2 companies, 100% delivery)
4. `<FeaturedProjects />` — bento grid of 3 featured projects
5. `<ServicesPreview />` — 4 service cards in 2×2 grid
6. `<BlogPreview />` — latest 3 blog posts in horizontal row
7. `<CTABand />` — full-width dark band: "Ready to build something?" + CTA button
8. `<Footer />` — links, social, copyright

**Hero Section layout:**
```
┌─────────────────────────────────────────────────────┐
│  [MONO LABEL]  Available for projects · Lalitpur, NP │
│                                                       │
│  I build software                                     │  ← Instrument Serif, 72px
│  that earns trust.                                    │  ← Instrument Serif Italic, 72px
│                                                       │
│  Senior engineer. MERN stack. React Native. AWS.      │  ← Inter, 18px, muted
│  Based in Nepal. Working worldwide.                   │
│                                                       │
│  [Start Your Project →]  [See My Work]               │  ← CTA buttons
│                                                       │
│  ─────────────────────────────────────────────────── │
│  3+ yrs exp  ·  9 projects  ·  2 companies  ·  AWS   │  ← mono, small, muted
└─────────────────────────────────────────────────────┘
```

**Hero headline rationale:** "I build software that earns trust." — 7 words, creates curiosity (what kind of trust? how?), implies authority without being generic. The italic second line creates visual rhythm. No profile photo on hero (keeps focus on the message; photo goes on /about).

### 3.2 About Page (`/about`) — GEO Critical

Dedicated page at `/about`. Written in third-person factual prose for AI extraction.

**Structure:**
1. Breadcrumb: Home > About
2. H1: "About Saroj Dangol"
3. **GEO Answer Block** (id="about-saroj"): 3-paragraph factual summary answering "Who is Saroj Dangol?", "What does he do?", "Where is he based?" — this is the `speakable` target
4. Stats grid: 4 cards (experience, projects, technologies, location)
5. Experience timeline
6. Education
7. CTA: "Work with Saroj →"

### 3.3 Projects Page (section on home + `/projects` route)

**Card design:**
- Image thumbnail (16:9, WebP, Next.js `<Image>`)
- Project title (Inter 600, 18px)
- One-line description (Inter 400, 14px, muted)
- Tech tags (JetBrains Mono, rounded-full, accent-dim background)
- Live + GitHub links (icon + text)
- Hover: border changes to `--color-accent-border`

**Grid:** 3 columns on desktop, 2 on tablet, 1 on mobile.

### 3.4 Services Page (`/services`)

**Layout:** 2×2 grid of service cards + a "Why hire me" section + social proof + CTA.

Each card:
- Icon (Lucide, 24px, accent color)
- Service name (Inter 600, 20px)
- Description (Inter 400, 14px, muted)
- Feature list (5 items, checkmark prefix)
- "Start a Project →" link

**ProfessionalService schema** added to this page.

### 3.5 Blog List (`/blogs`)

**Layout:** Full-width list (not grid). Each post:
- Date (JetBrains Mono, muted, small)
- Title (Instrument Serif, 24px)
- Excerpt (Inter, 14px, muted, 2 lines)
- Reading time + category tag
- Hover: title color shifts to accent

### 3.6 Blog Detail (`/blogs/[slug]`)

**New additions to every blog post:**
1. **Key Takeaways block** — above the fold, after the intro paragraph:
   ```html
   <aside class="key-takeaways">
     <h2>Key Takeaways</h2>
     <ul>
       <li>...</li>
     </ul>
   </aside>
   ```
2. **Author bio block** — bottom of post, before related articles
3. **Related Articles** — 2–3 posts by topic similarity
4. **Article schema** with `author`, `dateModified`, `datePublished`

### 3.7 Contact Page (`/contact`)

**Layout:** 2-column on desktop (form left, info right).

Form fields: Name, Email, Subject (new field), Message.
Validation: Zod schema, react-hook-form.
Success state: Inline confirmation (no space-themed copy).
Error state: Inline error messages, form data preserved.

### 3.8 FAQ Page (`/faq`)

Radix UI Accordion (already in project). Expanded to 10+ Q&A pairs.
FAQPage schema with all 10+ pairs as standalone sentences.

### 3.9 Navigation (`<Navbar />`)

```
┌──────────────────────────────────────────────────────────────┐
│  Saroj Dangol          About  Projects  Services  Blog       │
│                                                    [Hire Me] │
└──────────────────────────────────────────────────────────────┘
```

- Fixed top, `backdrop-blur-sm`, `border-b border-border`
- Logo: "Saroj Dangol" in Inter 600
- Nav links: Inter 500, 14px, muted — active state: `--color-fg` + underline
- "Hire Me" button: accent background, dark text, `rounded-lg`, `px-4 py-2`
- Mobile: hamburger → full-screen overlay, CSS `display: none/block` toggle (no animation library)

### 3.10 Footer

```
┌──────────────────────────────────────────────────────────────┐
│  Saroj Dangol                    GitHub  LinkedIn  Upwork    │
│  IT Developer · Lalitpur, Nepal                              │
│                                                              │
│  Home  About  Projects  Services  Blog  Contact  FAQ  CV     │
│                                                              │
│  © 2025 Saroj Dangol · hello@sarojdangol012.com.np           │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. SEO & GEO Technical Design

### 4.1 Enhanced Person Schema

```json
{
  "@type": "Person",
  "@id": "https://www.sarojdangol012.com.np/#person",
  "name": "Saroj Dangol",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.sarojdangol012.com.np/"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#about-saroj", ".hero-headline"]
  },
  "knowsAbout": [
    "MERN Stack Development",
    "React Native Mobile App Development",
    "AWS Serverless Architecture",
    "Next.js Web Development",
    "Full Stack JavaScript Development",
    "Node.js Backend Development",
    "MongoDB Database Design",
    "TypeScript Development",
    "REST API Development",
    "GraphQL API Development",
    "IT Developer Nepal",
    "Web Development Lalitpur",
    "Software Engineer Kathmandu",
    "React.js Development",
    "Cloud Computing AWS",
    "Docker and Kubernetes",
    "CI/CD Pipeline Implementation",
    "E-commerce Development Nepal"
  ],
  "mentions": [
    { "@type": "SoftwareApplication", "name": "React" },
    { "@type": "SoftwareApplication", "name": "Node.js" },
    { "@type": "SoftwareApplication", "name": "Next.js" },
    { "@type": "SoftwareApplication", "name": "MongoDB" },
    { "@type": "SoftwareApplication", "name": "React Native" },
    { "@type": "SoftwareApplication", "name": "TypeScript" },
    { "@type": "SoftwareApplication", "name": "AWS" },
    { "@type": "SoftwareApplication", "name": "NestJS" }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "AWS Certified Developer",
    "credentialCategory": "certification"
  }
}
```

### 4.2 LocalBusiness Schema Enhancement

Add `serviceArea` to existing LocalBusiness schema:
```json
"serviceArea": [
  { "@type": "City", "name": "Lalitpur" },
  { "@type": "City", "name": "Kathmandu" },
  { "@type": "City", "name": "Bhaktapur" },
  { "@type": "Country", "name": "Nepal" },
  { "@type": "AdministrativeArea", "name": "Worldwide Remote" }
]
```

### 4.3 robots.ts Enhancement

```typescript
rules: [
  { userAgent: "*", allow: "/" },
  { userAgent: "GPTBot", allow: "/" },
  { userAgent: "PerplexityBot", allow: "/" },
  { userAgent: "ClaudeBot", allow: "/" },
  { userAgent: "Anthropic-AI", allow: "/" },
  { userAgent: "Google-Extended", allow: "/" },
  { userAgent: "Googlebot", allow: "/" },
  // disallow only private routes
  { userAgent: "*", disallow: ["/api/", "/admin/"] }
],
sitemap: "https://www.sarojdangol012.com.np/sitemap.xml",
```

### 4.4 Global Meta Enhancement

Add to every page's `<head>` via `layout.tsx`:
```html
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
```

### 4.5 llms.txt Format

```
# Saroj Dangol

> Saroj Dangol is a Senior Full Stack Developer based in Lalitpur, Nepal,
> specialising in MERN stack, React Native, and AWS cloud solutions.
> Available for web development, mobile app development, and cloud projects
> worldwide. Website: https://www.sarojdangol012.com.np

## Identity

- Full name: Saroj Dangol
- Title: Senior Full Stack Developer & Mobile Specialist
- Location: Lalitpur, Bagmati, Nepal
- Experience: 3+ years professional (since 2021)
- Currently at: Marichitech AI (Nov 2024–present), AppTechnologies (Oct 2023–present)
- Website: https://www.sarojdangol012.com.np
- Email: hello@sarojdangol012.com.np

## Services

- [Web Development](/services): Custom web applications using React, Next.js, Node.js, MongoDB
- [Mobile App Development](/services): Cross-platform iOS/Android apps using React Native
- [Backend & API](/services): RESTful and GraphQL APIs, NestJS, database design
- [Cloud & DevOps](/services): AWS infrastructure, serverless architecture, CI/CD pipelines

## Skills

- React.js (95%), Node.js (90%), Next.js (88%), NestJS (85%)
- React Native (82%), MySQL (85%), MongoDB (80%), AWS (75%)
- TypeScript, GraphQL, Docker, PostgreSQL, Redis, Firebase

## Experience

- Full Stack Developer, Marichitech AI (Nov 2024–present)
- Full Stack Web Developer, AppTechnologies (Oct 2023–present)
- Backend Developer, AppTechnologies (Jan 2022–Oct 2023)
- React Intern, AppTechnologies (Sep 2021–Dec 2021)

## Projects

- [Nepal Kabaddi League](https://nepalkabaddileague.com/): Sports platform with fixtures, scores, admin panel
- [Sajilo Ride Sharing](https://sajilosathi.com/): Google Maps ride sharing with real-time tracking
- [Hamro Blood Bank](https://hamrobloodbank.com): Real-time blood donation platform
- [PetsNepal](https://petsnepal.com.np/): Pet services booking platform
- [LAURE Official](https://akalaure.com/): Celebrity artist website

## Contact

- Email: hello@sarojdangol012.com.np
- GitHub: https://github.com/Saroj9823Dangol
- LinkedIn: https://linkedin.com/in/er-saroj-dangol-9492bb216
- Upwork: https://www.upwork.com/freelancers/~01a78d9a0751fb1801

## Availability

Available for freelance projects, contract work, and full-time remote positions.
Serving clients in Nepal (Kathmandu Valley) and worldwide via remote collaboration.
```

### 4.6 Blog Post Data Enhancement

Add two new optional fields to the blog post type:
```typescript
interface BlogPost {
  // ... existing fields
  keyTakeaways?: string[];      // 3–5 bullet points for the TL;DR block
  relatedSlugs?: string[];      // 2–3 slugs for related articles
  lastModified?: string;        // ISO date string for dateModified in Article schema
}
```

---

## 5. Performance Design

### 5.1 Bundle Reduction

Remove from `package.json`:
- `three` (~600kB)
- `@react-three/fiber` (~200kB)
- `@react-three/drei` (~300kB)
- `framer-motion` (~150kB)
- `expo`, `expo-asset`, `expo-file-system`, `expo-gl` (not needed for web)
- `react-native` (not needed for web)

Estimated bundle reduction: ~1.2MB+ from dependencies alone.

### 5.2 Font Loading

```typescript
// app/layout.tsx
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // secondary font, no preload needed
});
```

### 5.3 Image Strategy

- All project images: Next.js `<Image>` with `width`, `height`, `alt`, `sizes`
- Profile image: WebP, 400×400, `priority` on hero
- Blog thumbnails: WebP, lazy loaded, `sizes="(max-width: 768px) 100vw, 33vw"`

### 5.4 No Client Components Unless Necessary

- Home page: Server Component (no `"use client"`)
- Contact form: Client Component (needs state)
- Mobile nav toggle: Client Component (needs state)
- FAQ accordion: Uses Radix UI (already handles this)
- Everything else: Server Components

---

## 6. Correctness Properties (Property-Based Testing)

The following properties must hold across the implementation:

### P1: Navigation Completeness
Every page in the site MUST be reachable from the navbar. For all routes `r` in `["/", "/about", "/projects", "/services", "/blogs", "/contact", "/faq"]`, the navbar MUST contain a link with `href === r` or a CV download trigger.

### P2: CTA Presence
Every page MUST contain at least one element with `href="/contact"` or `href` pointing to the contact form. No page should be a dead end.

### P3: Schema Validity
Every page that renders structured data MUST produce valid JSON-LD. The `@type`, `@context`, and required fields for each schema type MUST be present.

### P4: Contrast Compliance
For all text elements: foreground color against background color MUST achieve contrast ratio ≥ 4.5:1 (WCAG AA). Heading elements MUST achieve ≥ 7:1 (WCAG AAA).

### P5: No Animation Dependencies
No component file MUST import from `framer-motion`, `three`, `@react-three/fiber`, or `@react-three/drei`. This is a hard invariant.

### P6: Font Variable Presence
The `<body>` element MUST have all three font CSS variables (`--font-display`, `--font-body`, `--font-mono`) applied as class names.

### P7: Blog Post Integrity
For all 18 blog posts, the slug MUST remain unchanged, the content MUST be preserved, and the Article schema MUST include `author`, `datePublished`, and `dateModified` fields.

### P8: llms.txt Accessibility
A GET request to `/llms.txt` MUST return HTTP 200 with `Content-Type: text/plain` and content containing the sections: Identity, Services, Skills, Experience, Projects, Contact, Availability.

### P9: robots.txt AI Crawler Allowance
The `robots.txt` MUST explicitly allow `GPTBot`, `PerplexityBot`, `ClaudeBot`, and `Anthropic-AI` user agents.

### P10: Responsive Layout
At viewport widths 320px, 768px, 1024px, and 1440px, no content MUST overflow its container horizontally.
