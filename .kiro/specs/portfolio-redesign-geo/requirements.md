# Requirements Document

## Introduction

This document defines the requirements for a complete redesign of Saroj Dangol's personal developer portfolio website (`sarojdangol012.com.np`). The current site uses a solar system / space theme with heavy Three.js animations and framer-motion effects. The redesign replaces this entirely with a sophisticated, minimal, psychologically compelling design that prioritises client conversion and discoverability through both traditional SEO and Generative Engine Optimisation (GEO) — ensuring the portfolio surfaces in AI-powered search tools such as ChatGPT, Perplexity, Gemini, and Google AI Overviews.

All existing functionality is preserved: Home, About, Projects, Skills, Experience, Services, Contact, Blog, FAQ, and CV download. The terminal easter-egg may be retained or removed at implementation time. No page-level animations are permitted in the new design.

---

## Glossary

- **Portfolio_Site**: The Next.js 14+ web application at `sarojdangol012.com.np`.
- **Designer**: The Portfolio_Site's visual and typographic design system.
- **GEO_Layer**: The set of content, markup, and structural techniques that make the Portfolio_Site discoverable by AI-powered search engines and generative answer engines.
- **SEO_Layer**: The set of metadata, structured data, sitemap, and technical optimisations that make the Portfolio_Site discoverable by traditional search engines.
- **Typography_System**: The defined hierarchy of typefaces, weights, sizes, line-heights, and letter-spacing used across the Portfolio_Site.
- **Color_System**: The defined palette of background, foreground, accent, and surface colours used across the Portfolio_Site.
- **Navigation**: The primary navigation component rendered on every page of the Portfolio_Site.
- **Hero_Section**: The above-the-fold section of the home page.
- **Content_Section**: Any named section of the Portfolio_Site that presents a distinct category of information (About, Projects, Skills, Experience, Services, Contact, Blog, FAQ, CV).
- **CTA**: A call-to-action element (button, link, or form) designed to convert a visitor into a client lead.
- **Structured_Data**: JSON-LD markup embedded in page `<head>` elements conforming to Schema.org vocabulary.
- **AI_Answer_Engine**: A generative AI product that synthesises web content to answer user queries (e.g., ChatGPT Browse, Perplexity, Gemini, Google AI Overviews).
- **Core_Web_Vitals**: Google's LCP, INP, and CLS performance metrics.
- **Visitor**: Any human user who loads the Portfolio_Site in a browser.
- **Crawler**: Any automated agent (Googlebot, GPTBot, PerplexityBot, ClaudeBot, etc.) that fetches and indexes the Portfolio_Site.

---

## Requirements

---

### Requirement 1: Complete Removal of Animation-Heavy Theme

**User Story:** As a Visitor, I want a fast, distraction-free experience, so that I can focus on Saroj's work and decide to hire him without waiting for animations to finish.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL NOT use Three.js, `@react-three/fiber`, `@react-three/drei`, or any WebGL-based rendering on any page.
2. THE Portfolio_Site SHALL NOT use framer-motion entrance animations, page-transition animations, or scroll-triggered motion effects.
3. THE Portfolio_Site SHALL NOT display a loading screen or splash screen before the main content is visible.
4. THE Portfolio_Site SHALL NOT render a solar system, starfield, planet overlay, or any space-themed visual element.
5. WHEN a Visitor loads any page, THE Portfolio_Site SHALL render the primary content within the browser's first paint without requiring JavaScript execution to reveal it.

---

### Requirement 2: Typography System — Psychological Pull

**User Story:** As a Visitor, I want the text on the site to feel authoritative and intriguing, so that I am compelled to keep reading and ultimately contact Saroj.

#### Acceptance Criteria

1. THE Typography_System SHALL define exactly three typeface roles: a Display face (headings, hero text), a Body face (paragraphs, descriptions), and a Mono face (code snippets, labels, metadata).
2. THE Typography_System SHALL use a Display typeface that conveys authority and precision — a high-contrast serif or geometric sans-serif with strong optical weight at large sizes.
3. THE Typography_System SHALL use a Body typeface that is highly legible at 16–18 px with a line-height between 1.6 and 1.8.
4. THE Typography_System SHALL define a type scale with at minimum six named steps: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`.
5. THE Typography_System SHALL apply a letter-spacing of −0.02 em to −0.04 em on Display headings at sizes ≥ 48 px to create a tight, premium feel.
6. THE Typography_System SHALL apply a letter-spacing of 0.08 em to 0.12 em on uppercase labels and metadata text to create visual breathing room.
7. WHEN a Visitor reads the Hero_Section headline, THE Designer SHALL present a headline of no more than 12 words that creates a sense of scarcity, authority, or curiosity without using generic phrases such as "Full Stack Developer" as the primary statement.
8. THE Typography_System SHALL be implemented using Next.js `next/font` with `display: swap` and `preload: true` to eliminate layout shift.

---

### Requirement 3: Color System — Haunting and Memorable

**User Story:** As a Visitor, I want the site's visual atmosphere to feel distinctive and stay in my memory, so that I recall Saroj's portfolio when I need a developer.

#### Acceptance Criteria

1. THE Color_System SHALL define a dark-mode-first palette with a near-black background (lightness ≤ 8 % in HSL) as the default surface.
2. THE Color_System SHALL define a single primary accent colour that is used sparingly (≤ 20 % of visible surface area) to draw the eye to CTAs and key data points.
3. THE Color_System SHALL define a secondary muted foreground colour for body text that maintains a contrast ratio of at least 4.5:1 against the background (WCAG AA).
4. THE Color_System SHALL define a high-contrast foreground colour for headings and interactive elements that maintains a contrast ratio of at least 7:1 against the background (WCAG AAA).
5. THE Color_System SHALL NOT use gradients as primary decorative elements; gradients MAY be used only as subtle background texture or as a single accent highlight per section.
6. THE Color_System SHALL define surface colours for cards and panels that are visually distinct from the background by no more than 6 % lightness difference, creating depth without noise.
7. THE Designer SHALL use negative space (whitespace) as a primary design element, with section padding of at least 80 px on desktop and 48 px on mobile.

---

### Requirement 4: Navigation — Clean and Persistent

**User Story:** As a Visitor, I want to navigate the site instantly from any page, so that I can explore Saroj's work without friction.

#### Acceptance Criteria

1. THE Navigation SHALL be a fixed top bar visible on all pages and all scroll positions.
2. THE Navigation SHALL contain links to: Home, About, Projects, Services, Blog, Contact, and a CV download trigger.
3. THE Navigation SHALL indicate the currently active page using a typographic or colour treatment, not an animated indicator.
4. THE Navigation SHALL collapse into a hamburger or icon menu on viewports narrower than 768 px.
5. WHEN a Visitor activates the mobile menu, THE Navigation SHALL display all navigation links in a full-screen or slide-in overlay without animation transitions exceeding 150 ms.
6. THE Navigation SHALL NOT use framer-motion or CSS keyframe animations for its entrance or active-state transitions.
7. THE Navigation SHALL include a visible "Hire Me" or "Get a Quote" CTA button styled with the primary accent colour.

---

### Requirement 5: Home Page — Hero Section

**User Story:** As a Visitor landing on the home page, I want to immediately understand who Saroj is and why I should care, so that I decide to explore further rather than bounce.

#### Acceptance Criteria

1. THE Hero_Section SHALL display Saroj's name, a primary headline, a sub-headline, and at least two CTAs (primary: contact/hire; secondary: view work).
2. THE Hero_Section SHALL display a concise social-proof element — such as years of experience, number of projects shipped, or a short client testimonial — within the above-the-fold viewport on desktop (1280 × 800 px).
3. THE Hero_Section SHALL NOT use background video, parallax scrolling, or animated particle effects.
4. THE Hero_Section SHALL include a profile image or avatar of Saroj that is served in WebP format, sized at 400 × 400 px minimum, and has a descriptive `alt` attribute.
5. WHEN a Visitor clicks the primary CTA in the Hero_Section, THE Portfolio_Site SHALL navigate to the Contact page or scroll to the contact form.
6. THE Hero_Section SHALL include semantic HTML with an `<h1>` containing Saroj's name or primary professional identity, and an `<h2>` or `<p>` for the sub-headline.

---

### Requirement 6: Content Sections — All Existing Functionality Preserved

**User Story:** As a Visitor, I want to access all of Saroj's portfolio content (projects, skills, experience, services, blog, FAQ, CV), so that I can make an informed hiring decision.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL provide dedicated pages or sections for: About, Projects, Skills, Experience, Services, Contact, Blog (list and detail), FAQ, and CV download — matching the current site's content scope.
2. THE Portfolio_Site SHALL preserve all existing blog posts, project entries, experience records, and skills data without data loss.
3. WHEN a Visitor navigates to `/blogs`, THE Portfolio_Site SHALL display a list of all blog posts with title, date, reading time, and a short excerpt.
4. WHEN a Visitor navigates to `/blogs/[slug]`, THE Portfolio_Site SHALL display the full blog post content with proper heading hierarchy and structured data.
5. WHEN a Visitor clicks the CV download link, THE Portfolio_Site SHALL initiate a download of `Saroj_Dangol_CV.pdf` from the `/public` directory.
6. THE Portfolio_Site SHALL display the Projects Content_Section with project title, description, technology tags, and links to live URL and GitHub.
7. THE Portfolio_Site SHALL display the Skills Content_Section with skill names and proficiency levels.
8. THE Portfolio_Site SHALL display the Experience Content_Section with job title, company, period, and description for each role.
9. THE Portfolio_Site SHALL display the Services Content_Section listing Web Development, Mobile App Development, Backend & API, and Cloud & DevOps services with feature lists.
10. THE Portfolio_Site SHALL display the FAQ Content_Section using an accessible accordion pattern with all existing FAQ entries.

---

### Requirement 7: Client Conversion — UX and CTA Strategy

**User Story:** As a potential client visiting the site, I want clear, low-friction paths to contact Saroj, so that I can start a project without confusion.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a CTA element (button or inline link) in every Content_Section that directs the Visitor toward the contact page or contact form.
2. THE Portfolio_Site SHALL display a persistent "Hire Me" or "Start a Project" CTA in the Navigation on all pages.
3. THE Contact page SHALL include a contact form with fields for: name, email, subject, and message, with client-side and server-side validation.
4. WHEN a Visitor submits the contact form with valid data, THE Portfolio_Site SHALL send the message via the existing `/api/contact` route and display a success confirmation to the Visitor within 3 seconds.
5. IF the contact form submission fails, THEN THE Portfolio_Site SHALL display a descriptive error message and preserve the Visitor's entered data in the form fields.
6. THE Portfolio_Site SHALL display Saroj's email address and at least one social/professional profile link (LinkedIn, GitHub) on the Contact page as fallback contact methods.
7. THE Portfolio_Site SHALL display a "social proof" section — client count, project count, years of experience, or testimonials — on the Home page and/or Services page to reduce conversion friction.
8. THE Portfolio_Site SHALL use action-oriented microcopy on all CTA buttons (e.g., "Start Your Project", "See My Work", "Download CV") rather than generic labels.

---

### Requirement 8: Traditional SEO — Maintained and Improved

**User Story:** As a search engine crawler, I want well-structured, semantically correct, and complete metadata on every page, so that the Portfolio_Site ranks highly for relevant queries.

#### Acceptance Criteria

1. THE SEO_Layer SHALL preserve all existing Structured_Data schemas: Person, LocalBusiness, Organization, WebSite, Service, FAQ, and Article (blog posts).
2. THE SEO_Layer SHALL add a `SoftwareApplication` or `ProfessionalService` schema to the Services page to improve rich result eligibility.
3. THE Portfolio_Site SHALL generate a dynamic XML sitemap at `/sitemap.xml` that includes all pages and blog post URLs with `lastmod`, `changefreq`, and `priority` attributes.
4. THE Portfolio_Site SHALL serve a `robots.txt` at `/robots.txt` that permits all major search crawlers and AI crawlers (Googlebot, GPTBot, PerplexityBot, ClaudeBot, Anthropic-AI) and references the sitemap URL.
5. EVERY page of the Portfolio_Site SHALL have a unique `<title>` tag of 50–60 characters and a unique `<meta name="description">` of 150–160 characters.
6. EVERY page of the Portfolio_Site SHALL have a canonical `<link rel="canonical">` tag pointing to its own absolute URL.
7. THE Portfolio_Site SHALL include Open Graph (`og:`) and Twitter Card (`twitter:`) meta tags on every page with page-specific title, description, and image.
8. THE Portfolio_Site SHALL achieve a Lighthouse SEO score of 95 or above on both mobile and desktop audits.
9. THE Portfolio_Site SHALL achieve Core_Web_Vitals scores of: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 on mobile (simulated 4G).
10. THE SEO_Layer SHALL implement `hreflang="en"` on all pages to signal the primary language to search engines.

---

### Requirement 9: Generative Engine Optimisation (GEO) — AI Search Discoverability

**User Story:** As a potential client using an AI search tool (ChatGPT, Perplexity, Gemini, Google AI Overviews), I want the AI to surface Saroj's portfolio when I ask about hiring a developer in Nepal or MERN stack services, so that I can find and contact him directly.

#### Acceptance Criteria

1. THE GEO_Layer SHALL include a dedicated `/about` page (or About section) written in clear, factual, third-person prose that directly answers the questions: "Who is Saroj Dangol?", "What does Saroj Dangol do?", and "Where is Saroj Dangol based?" — structured so that an AI_Answer_Engine can extract a concise answer.
2. THE GEO_Layer SHALL include a `<meta name="description">` on the home page that contains a complete, self-contained sentence answering "Who is this person and what do they offer?" in 150 characters or fewer, suitable for direct quotation by an AI_Answer_Engine.
3. THE GEO_Layer SHALL add a `speakable` property to the Person Structured_Data schema pointing to the About section's CSS selector or URL fragment, enabling AI_Answer_Engines to identify the most quotable content.
4. THE GEO_Layer SHALL include an `author` and `dateModified` field on every blog post's Article schema so that AI_Answer_Engines can attribute content and assess freshness.
5. THE GEO_Layer SHALL add a `mentions` array to the Person schema listing the key technologies Saroj works with (React, Node.js, Next.js, MongoDB, AWS, React Native, TypeScript) as `SoftwareApplication` or `Thing` entities.
6. THE GEO_Layer SHALL include a `knowsAbout` array in the Person schema with at least 15 specific, searchable topics (e.g., "MERN Stack Development", "React Native Mobile Apps", "AWS Serverless Architecture", "IT Developer Nepal").
7. THE GEO_Layer SHALL add a `hasCredential` or `award` field to the Person schema for any certifications (e.g., AWS certification) to increase authority signals for AI_Answer_Engines.
8. THE GEO_Layer SHALL include a `mainEntityOfPage` property on the home page's WebPage schema pointing to the Person schema `@id`, establishing the page as the canonical source of truth about Saroj Dangol.
9. THE GEO_Layer SHALL ensure every blog post contains a clear, bolded or heading-level answer to its primary question within the first 150 words, so that AI_Answer_Engines can extract a direct answer.
10. THE GEO_Layer SHALL add `FAQPage` structured data to the FAQ page with at minimum 10 question-answer pairs covering IT services, pricing, technologies, and location — formatted so that each answer is a complete, standalone sentence.
11. THE GEO_Layer SHALL include a `ServiceArea` property in the LocalBusiness schema listing Nepal, Kathmandu, Lalitpur, Bhaktapur, and "Worldwide Remote" as service areas.
12. THE GEO_Layer SHALL add an `llms.txt` file at the root of the Portfolio_Site (accessible at `/llms.txt`) containing a structured plain-text summary of Saroj's identity, services, skills, and contact information — formatted for direct consumption by large language models.
13. THE GEO_Layer SHALL ensure the `robots.txt` explicitly allows GPTBot, PerplexityBot, ClaudeBot, and Anthropic-AI user agents to crawl all public pages.
14. THE GEO_Layer SHALL include a `<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">` directive on all pages to permit AI_Answer_Engines to use full content snippets.

---

### Requirement 10: Performance and Accessibility

**User Story:** As a Visitor on any device or network, I want the Portfolio_Site to load quickly and be fully usable, so that I am not frustrated before I even see Saroj's work.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL achieve a Lighthouse Performance score of 90 or above on mobile (simulated 4G throttling).
2. THE Portfolio_Site SHALL serve all images in WebP or AVIF format using Next.js `<Image>` component with explicit `width`, `height`, and `alt` attributes.
3. THE Portfolio_Site SHALL use Next.js `next/font` for all typefaces to eliminate render-blocking font requests.
4. THE Portfolio_Site SHALL implement route-based code splitting so that no initial page bundle exceeds 200 kB (gzipped).
5. THE Portfolio_Site SHALL be fully keyboard-navigable: all interactive elements SHALL be reachable via Tab key and activatable via Enter or Space.
6. THE Portfolio_Site SHALL have no WCAG 2.1 Level AA colour contrast violations on any page.
7. THE Portfolio_Site SHALL include `aria-label` or visible text labels on all icon-only buttons and navigation items.
8. THE Portfolio_Site SHALL be fully functional with JavaScript disabled for all static content pages (About, Projects, Skills, Experience, Services, FAQ, Blog list, Blog detail).
9. WHEN a Visitor resizes the viewport from 320 px to 1920 px, THE Portfolio_Site SHALL maintain a readable, non-overlapping layout at all widths.
10. THE Portfolio_Site SHALL implement `preload` hints for the Display and Body typefaces in the `<head>` of every page.

---

### Requirement 11: Content Quality for GEO — Blog and Long-Form Content

**User Story:** As an AI_Answer_Engine indexing the web for IT-related queries, I want to find authoritative, well-structured content on the Portfolio_Site, so that I cite it in answers about MERN stack, React Native, and IT services in Nepal.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL maintain all 18 existing blog posts without modification to their content or slugs.
2. WHEN a blog post is rendered, THE Portfolio_Site SHALL display the author name ("Saroj Dangol"), publication date, last modified date, estimated reading time, and a canonical URL in the page's visible content and Article schema.
3. THE Portfolio_Site SHALL add a "Related Articles" section at the bottom of each blog post linking to at least 2 other blog posts by topic similarity, to increase internal link depth and session duration.
4. THE Portfolio_Site SHALL add a structured "Key Takeaways" or "TL;DR" block at the top of each blog post containing 3–5 bullet points summarising the article — formatted as a `<ul>` with `<li>` elements for easy extraction by AI_Answer_Engines.
5. THE Portfolio_Site SHALL include a visible author bio block on each blog post page linking back to the About section and listing Saroj's primary skills, to establish authorship authority for AI_Answer_Engines.
6. THE Portfolio_Site SHALL ensure all blog post headings follow a strict H1 → H2 → H3 hierarchy with no skipped levels.

---

### Requirement 12: `llms.txt` — LLM-Optimised Site Summary

**User Story:** As an AI_Answer_Engine crawling the Portfolio_Site, I want a machine-readable plain-text summary of the site's content and owner, so that I can accurately represent Saroj Dangol in generated answers without hallucinating details.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL serve a plain-text file at `/llms.txt` (accessible via HTTP GET with `Content-Type: text/plain`).
2. THE `llms.txt` file SHALL contain the following sections in order: Identity, Services, Skills, Experience, Projects, Contact, and Availability.
3. THE `llms.txt` Identity section SHALL state Saroj's full name, professional title, location, years of experience, and the URL of the Portfolio_Site.
4. THE `llms.txt` Services section SHALL list each service offered with a one-sentence description.
5. THE `llms.txt` Skills section SHALL list all primary technologies with proficiency levels.
6. THE `llms.txt` Contact section SHALL include the professional email address and links to LinkedIn and GitHub profiles.
7. THE `llms.txt` file SHALL be updated whenever the Portfolio_Site's content changes materially (new project, new role, new service).
8. THE `llms.txt` file SHALL be referenced in the `robots.txt` file so that AI crawlers can discover it.
