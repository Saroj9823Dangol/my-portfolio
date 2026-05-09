export * from "./contact-schema";
import { siteConfig } from "@/config";

// LocalBusiness Schema for local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sarojdangol012.com.np/#localbusiness",
  name: "Saroj Dangol - IT Development Services",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  description: siteConfig.structuredData.description,
  url: "https://www.sarojdangol012.com.np",
  telephone: "+977-9863485599", // Update with actual phone
  email: "hello@sarojdangol012.com.np",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lalitpur",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati",
    postalCode: "44700",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.671,
    longitude: 85.3226,
  },
  areaServed: [
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Bhaktapur" },
    { "@type": "Country", name: "Nepal" },
  ],
  serviceArea: [
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Bhaktapur" },
    { "@type": "Country", name: "Nepal" },
    { "@type": "AdministrativeArea", name: "Worldwide Remote" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: siteConfig.structuredData.sameAs,
  founder: {
    "@type": "Person",
    name: "Saroj Dangol",
    url: "https://www.sarojdangol012.com.np",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Development",
              description:
                "Custom web application development using MERN stack",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "Complete e-commerce solutions with payment integration",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "React Native App Development",
              description:
                "Cross-platform mobile applications for iOS and Android",
            },
          },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "25",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Pradeep Tamang" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Saroj is undoubtedly the best individual website developer in Nepal."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rishab Shrestha" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Excellent freelance IT services in Lalitpur. Saroj's expertise in the MERN stack is top-tier."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sweta Maharjan" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Patan's best website developer. Delivered a beautiful, SEO-optimized site."
    }
  ],
};

// WebSite Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sarojdangol012.com.np/#website",
  url: "https://www.sarojdangol012.com.np",
  name: "Saroj Dangol - IT Developer Nepal",
  description: siteConfig.metadata.description,
  publisher: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.sarojdangol012.com.np/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

// Person Schema (GEO-Enhanced)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.sarojdangol012.com.np/#person",
  name: siteConfig.structuredData.name,
  url: "https://www.sarojdangol012.com.np",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  sameAs: siteConfig.structuredData.sameAs,
  jobTitle: siteConfig.structuredData.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.structuredData.worksFor.name,
    url: siteConfig.structuredData.worksFor.url,
  },
  address: siteConfig.structuredData.address,
  email: "hello@sarojdangol012.com.np",
  telephone: "+977-9863485599",
  alumniOf: siteConfig.structuredData.alumniOf,
  hasOccupation: siteConfig.structuredData.hasOccupation,
  description: siteConfig.structuredData.description,
  nationality: {
    "@type": "Country",
    name: "Nepal",
  },
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Nepali" },
  ],
  // GEO: mainEntityOfPage — establishes this page as canonical source about Saroj
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.sarojdangol012.com.np/",
  },
  // GEO: speakable — points AI answer engines to the most quotable content
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#about-saroj", ".hero-headline"],
  },
  // GEO: expanded knowsAbout — global + local searchable topics
  knowsAbout: [
    // ── Tech stack ────────────────────────────────────────────────────────
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
    "NestJS Framework",
    "PostgreSQL Database",
    "Docker and Kubernetes",
    "CI/CD Pipeline Implementation",
    "React.js Development",
    "Cloud Computing AWS",
    "Microservices Architecture",
    "Serverless Functions",
    "Express.js Development",
    "Redux State Management",
    // ── Global hire / freelance ───────────────────────────────────────────
    "Hire Full Stack Developer",
    "Hire React Developer",
    "Hire React Native Developer",
    "Hire Node.js Developer",
    "Hire MERN Stack Developer",
    "Hire Mobile App Developer",
    "Hire AWS Developer",
    "Freelance Full Stack Developer",
    "Freelance React Developer",
    "Freelance Node.js Developer",
    "Freelance React Native Developer",
    "Remote Full Stack Developer",
    "Remote Software Engineer",
    "Remote React Developer",
    "Contract Developer",
    "Outsource Web Development",
    "Outsource Mobile App Development",
    // ── Global job / career ───────────────────────────────────────────────
    "Full Stack Developer Jobs",
    "React Developer Jobs",
    "Node.js Developer Jobs",
    "React Native Developer Jobs",
    "Remote Developer Jobs",
    "Remote Software Engineer Jobs",
    "JavaScript Developer Jobs",
    "MERN Stack Developer Jobs",
    "Full Stack Developer Salary",
    "Software Engineer Salary",
    "Remote Developer Salary",
    "Freelance Developer Income",
    "How to Become a Full Stack Developer",
    "How to Start Freelancing as a Developer",
    // ── Local / Nepal ─────────────────────────────────────────────────────
    "IT Developer Nepal",
    "Web Development Lalitpur",
    "Software Engineer Kathmandu",
    "E-commerce Development Nepal",
    "Freelance Web Developer Nepal",
    "Hire IT Developer Nepal",
    "Hire Full Stack Developer Nepal",
    "Hire React Developer Nepal",
    "Hire React Native Developer Nepal",
    "Hire Node.js Developer Nepal",
    "Outsource Web Development Nepal",
    "Individual IT Developer Nepal",
    "Best Website Developer Kathmandu",
    "Freelance MERN Stack Developer Nepal",
    "Website Development Lalitpur",
    "Remote Developer Nepal",
    "Full Stack Developer Nepal",
    "Software Development Nepal",
    "SaaS Development Nepal",
    "IT Outsourcing Nepal",
    "Software Developer Jobs Nepal",
    "Full Stack Developer Jobs Nepal",
    "Remote Developer Jobs Nepal",
    "IT Jobs Lalitpur",
    "Full Stack Developer Salary Nepal",
    "Software Engineer Salary Nepal",
    "Freelancing in Nepal",
    "IT Career Nepal",
    // ── Pricing / cost ────────────────────────────────────────────────────
    "IT Project Cost Nepal",
    "Web Developer Freelance Rates",
    "Mobile App Development Cost",
    "Website Development Price Nepal",
    "Web Application Development Cost",
    "Best Web Developer Nepal",
  ],
  // GEO: mentions — key technologies as SoftwareApplication entities
  mentions: [
    { "@type": "SoftwareApplication", name: "React" },
    { "@type": "SoftwareApplication", name: "Node.js" },
    { "@type": "SoftwareApplication", name: "Next.js" },
    { "@type": "SoftwareApplication", name: "MongoDB" },
    { "@type": "SoftwareApplication", name: "React Native" },
    { "@type": "SoftwareApplication", name: "TypeScript" },
    { "@type": "SoftwareApplication", name: "AWS" },
    { "@type": "SoftwareApplication", name: "NestJS" },
  ],
  // GEO: hasCredential — AWS certification authority signal
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "AWS Certified Developer",
    credentialCategory: "certification",
  },
};

// BreadcrumbList Schema Generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Service Schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/web-development",
      name: "Full Stack Web Development",
      description:
        "Custom web application development using modern technologies like React, Next.js, Node.js, and MongoDB",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Web Development",
      serviceType: "Full Stack Development",
    },
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/mobile-development",
      name: "Mobile App Development",
      description:
        "Cross-platform mobile application development using React Native for iOS and Android",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Mobile Development",
      serviceType: "React Native Development",
    },
    {
      "@type": "Service",
      "@id": "https://www.sarojdangol012.com.np/services/cloud-solutions",
      name: "Cloud Solutions & DevOps",
      description:
        "AWS cloud infrastructure, serverless architecture, and DevOps implementation",
      provider: {
        "@id": "https://www.sarojdangol012.com.np/#person",
      },
      areaServed: "Nepal",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.sarojdangol012.com.np",
      },
      category: "Cloud Computing",
      serviceType: "AWS Solutions",
    },
  ],
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you offer as an IT developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saroj Dangol offers full stack web development, React Native mobile app development, backend and API development, and AWS cloud and DevOps services for businesses in Nepal and worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to develop a web application in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web application development costs in Nepal vary by complexity — a basic website starts from NPR 50,000, while complex web applications range from NPR 200,000 to NPR 1,000,000+, and detailed quotes are provided after reviewing your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients outside Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Saroj Dangol works with clients globally via remote collaboration, serving businesses in Nepal, the United States, Europe, Australia, and other regions.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Saroj Dangol specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saroj Dangol specialises in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for cross-platform mobile development, Next.js, TypeScript, NestJS, AWS cloud services, GraphQL, and PostgreSQL.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple React Native mobile app typically takes 4–8 weeks, a medium-complexity app takes 2–4 months, and a complex app with advanced features can take 4–6 months or more depending on scope.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ongoing support and maintenance packages are available for all projects, covering bug fixes, security updates, performance optimisation, and feature enhancements.",
      },
    },
    {
      "@type": "Question",
      name: "What is your development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development process follows an Agile methodology with five phases: Discovery and Planning, Design and Prototyping, Development and Testing, Deployment, and ongoing Support and Maintenance, with regular client updates throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with existing projects or legacy codebases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Saroj Dangol can assist with code reviews, bug fixes, performance optimisation, feature additions, technology upgrades, and complete refactoring of existing web and mobile applications.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Saroj Dangol different from other developers in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saroj Dangol brings 3+ years of professional experience, AWS certification, expertise in modern full stack and mobile technologies, a strong focus on code quality, and a proven track record of delivering 9+ projects on time.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get started, contact Saroj via the contact form at sarojdangol012.com.np/contact or email hello@sarojdangol012.com.np, and a consultation will be scheduled to discuss your requirements, timeline, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MERN stack and why do you use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MERN stack consists of MongoDB, Express.js, React.js, and Node.js — a JavaScript-only technology stack that enables rapid development of scalable, high-performance web applications with a single language across frontend and backend.",
      },
    },
    {
      "@type": "Question",
      name: "What React Native services do you offer for mobile app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React Native mobile app development services include cross-platform iOS and Android app development, real-time features, push notifications, offline-first architecture, third-party API integrations, and App Store and Play Store submission.",
      },
    },
    {
      "@type": "Question",
      name: "What AWS services do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AWS services used include EC2, Lambda (serverless), S3, RDS, DynamoDB, CloudFront, API Gateway, Elastic Beanstalk, and IAM, enabling scalable, cost-effective cloud infrastructure for web and mobile applications.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a freelance web developer cost in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance web developers in Nepal charge $15-60/hour depending on experience. Junior developers charge $15-25/hour, mid-level $25-40/hour, and senior developers $40-60/hour. Fixed project pricing is also available.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to develop a mobile app in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile app development in Nepal costs NPR 200,000-10,000,000 ($1,500-$75,000). A simple app starts at NPR 200,000 ($1,500), medium complexity at NPR 500,000-2,000,000 ($3,700-$15,000), and complex apps at NPR 2,000,000+.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find the best web developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best web developers in Nepal can be found on Upwork, LinkedIn, GitHub, Clutch.co, and GoodFirms. Many top Nepali developers have profiles on these platforms with portfolios and client reviews.",
      },
    },
    {
      "@type": "Question",
      name: "What is the hourly rate for IT developers in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT developer rates in Nepal: Junior $15-25/hour, Mid-level $25-40/hour, Senior $40-60/hour. For remote international work, rates range $2,500-5,000/month or $20-50/hour on freelance platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start freelancing in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To start freelancing in Nepal, create profiles on Upwork, Fiverr, or Toptal, set up a portfolio, define your niche (web dev, mobile, design), set competitive rates, and apply to jobs daily. Use PayPal, Wise, or Payoneer for international payments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best tech stack for web development in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MERN stack (MongoDB, Express, React, Node.js) is the most popular in Nepal due to the single language (JavaScript) across frontend and backend, strong community support, and job market demand. React Native is also popular for mobile apps.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development timeline: Landing page 1-2 weeks, business website 2-4 weeks, e-commerce site 1-3 months, custom web app 2-6 months. Timeline depends on complexity, features, and design requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer IT project quotes in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Saroj provides detailed project quotes after reviewing requirements. Quotes include timeline, milestones, deliverables, and pricing. Contact hello@sarojdangol012.com.np for a free consultation and quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is the salary of a full stack developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full stack developer salaries in Nepal range from NPR 40,000–80,000/month for junior roles, NPR 80,000–150,000/month for mid-level, and NPR 150,000–300,000+ for senior developers. Remote positions for international clients pay significantly more — $2,500–6,000/month.",
      },
    },
    {
      "@type": "Question",
      name: "Are there remote software developer jobs available in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, remote software developer jobs are widely available for Nepal-based developers. Platforms like Upwork, Toptal, Remote.co, and LinkedIn regularly list remote roles for React, Node.js, React Native, and full stack developers. Many Nepali developers work remotely for US, European, and Australian companies.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire a React Native developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To hire a React Native developer in Nepal, you can reach out directly via sarojdangol012.com.np/contact, post on LinkedIn or Upwork, or contact IT companies in Kathmandu. Saroj Dangol is an experienced React Native developer in Lalitpur available for freelance and contract projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire a full stack developer in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can hire a full stack developer in Nepal by contacting Saroj Dangol at hello@sarojdangol012.com.np, posting on Upwork or LinkedIn, or reaching out to IT firms in Kathmandu. Saroj specialises in MERN stack (MongoDB, Express, React, Node.js) and is available for freelance, contract, and long-term projects.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of hiring a developer in Nepal vs other countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiring a developer in Nepal is significantly more cost-effective than the US or Europe. Senior developers in Nepal charge $25–60/hour compared to $100–200/hour in the US, while delivering the same quality of work. This makes Nepal a popular destination for IT outsourcing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I outsource my web development project to Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Nepal is a growing IT outsourcing destination. Saroj Dangol offers full project outsourcing for web applications, mobile apps, and cloud infrastructure. Communication is in English, work follows international standards, and time zone overlap with Europe and Asia is manageable.",
      },
    },
    {
      "@type": "Question",
      name: "What freelancing platforms do developers in Nepal use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Developers in Nepal commonly use Upwork, Fiverr, Toptal, Freelancer.com, and PeoplePerHour. Saroj Dangol has an active Upwork profile and accepts direct project inquiries via his portfolio at sarojdangol012.com.np.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a React Native app cost in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A React Native app in Nepal costs NPR 200,000–500,000 ($1,500–$3,700) for a simple app, NPR 500,000–2,000,000 ($3,700–$15,000) for a medium-complexity app with backend integration, and NPR 2,000,000+ for enterprise-grade apps with real-time features and complex APIs.",
      },
    },
    {
      "@type": "Question",
      name: "Does Saroj Dangol take on international freelance projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Saroj Dangol actively works with international clients from the US, UK, Australia, and Europe on a freelance and contract basis. Projects are managed remotely with regular updates, English communication, and delivery via GitHub and project management tools.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire a remote full stack developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To hire a remote full stack developer, define your tech stack requirements (React, Node.js, MERN, etc.), post on Upwork or LinkedIn, or contact developers directly. Saroj Dangol is a senior full stack developer available for remote freelance and contract work globally — contact hello@sarojdangol012.com.np.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average salary of a full stack developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full stack developer salaries vary by location: US $90,000–150,000/year, UK £50,000–90,000/year, Europe €50,000–90,000/year, and remote roles $40,000–100,000/year. Freelance full stack developers charge $40–150/hour depending on experience and specialization.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a freelance React developer charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance React developers charge $30–50/hour for junior, $50–100/hour for mid-level, and $100–200/hour for senior developers in the US/UK. Developers based in South Asia (including Nepal) offer the same quality at $25–60/hour, making them a popular choice for startups and scale-ups.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to hire a React Native developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way to hire a React Native developer is to look for someone with cross-platform iOS and Android experience, a portfolio of shipped apps, and knowledge of Expo, React Navigation, and native module integration. Saroj Dangol is an experienced React Native developer available for remote and freelance projects worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a remote MERN stack developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can find remote MERN stack developers on Upwork, Toptal, LinkedIn, and GitHub. Look for developers with experience in MongoDB, Express.js, React.js, and Node.js. Saroj Dangol is a senior MERN stack developer based in Nepal, available for remote work with clients worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for when hiring a full stack developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When hiring a full stack developer, look for proficiency in both frontend (React, Next.js) and backend (Node.js, Express, NestJS), database experience (MongoDB, PostgreSQL), cloud knowledge (AWS), strong communication skills, and a portfolio of shipped products. Experience with TypeScript and CI/CD pipelines is a strong plus.",
      },
    },
  ],
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sarojdangol012.com.np/#organization",
  name: "Saroj Dangol IT Services",
  url: "https://www.sarojdangol012.com.np",
  logo: "https://www.sarojdangol012.com.np/logo.png",
  image: "https://www.sarojdangol012.com.np/images/profile.webp",
  description: siteConfig.metadata.description,
  email: "hello@sarojdangol012.com.np",
  telephone: "+977-9863485599",
  address: siteConfig.structuredData.address,
  founder: {
    "@id": "https://www.sarojdangol012.com.np/#person",
  },
  sameAs: siteConfig.structuredData.sameAs,
};

// Combine all schemas for homepage
export const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.sarojdangol012.com.np/",
      url: "https://www.sarojdangol012.com.np",
      name: "Saroj Dangol — Senior Full Stack Developer, Lalitpur Nepal",
      description:
        "Saroj Dangol is a Senior Full Stack Developer based in Lalitpur, Nepal, specialising in MERN stack, React Native, and AWS cloud solutions.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.sarojdangol012.com.np/#website" },
      mainEntity: { "@id": "https://www.sarojdangol012.com.np/#person" },
    },
    websiteSchema,
    personSchema,
    localBusinessSchema,
    organizationSchema,
  ],
};
