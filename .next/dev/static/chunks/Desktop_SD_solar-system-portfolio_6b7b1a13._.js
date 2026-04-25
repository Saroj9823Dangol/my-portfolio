(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SD/solar-system-portfolio/lib/seo/contact-schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Basic type definition for schema.org ContactPage
__turbopack_context__.s([
    "contactPageSchema",
    ()=>contactPageSchema
]);
const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Saroj Dangol",
    description: "Get in touch with Saroj Dangol for IT development services in Nepal.",
    url: "https://www.sarojdangol012.com.np/contact",
    mainEntity: {
        "@type": "Person",
        name: "Saroj Dangol",
        email: "hello@sarojdangol012.com.np",
        telephone: "+977-9823456789",
        url: "https://www.sarojdangol012.com.np"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    fonts: {
        poppins: {
            subsets: [
                "latin",
                "latin-ext"
            ],
            weights: [
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900"
            ],
            variable: "--font-poppins"
        },
        jetbrainsMono: {
            subsets: [
                "latin",
                "latin-ext"
            ],
            weights: [
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800"
            ],
            variable: "--font-mono"
        }
    },
    theme: {
        attribute: "class",
        defaultTheme: "dark",
        enableSystem: true,
        disableTransitionOnChange: true
    },
    metadata: {
        title: {
            default: "Saroj Dangol | IT Developer in Lalitpur, Nepal | Full Stack Expert",
            template: "%s | Saroj Dangol - IT Developer Nepal"
        },
        author: {
            name: "Saroj Dangol",
            url: "https://www.sarojdangol012.com.np"
        },
        description: "Looking for an IT Developer in Lalitpur, Nepal? Saroj Dangol is a Senior Full Stack Developer (MERN, React Native, AWS) offering premium web & mobile app development services in Kathmandu Valley.",
        applicationName: "Saroj Dangol - Premium IT Services Nepal",
        generator: "Next.js",
        referrer: "origin-when-cross-origin",
        keywords: [
            // Local SEO - Primary
            "IT Developer in Lalitpur",
            "IT Developer in Nepal",
            "Web Developer Lalitpur",
            "Software Engineer Nepal",
            "Freelance Developer Lalitpur",
            "Best Programmer in Lalitpur",
            "IT Jobs Lalitpur",
            "Hire Developer Nepal",
            "Kathmandu Valley Developer",
            "Nepal IT Services",
            // Core expertise
            "Full Stack Developer",
            "MERN Stack Expert",
            "React Native Developer",
            "Next.js Specialist",
            "Node.js Developer",
            "TypeScript Engineer",
            // Web development
            "Web Application Development",
            "Responsive Web Design",
            "Progressive Web Apps",
            "Single Page Applications",
            "Frontend Optimization",
            "Backend Architecture",
            // Mobile development
            "Cross-Platform Mobile Apps",
            "React Native Expert",
            "Mobile App Development",
            "iOS/Android Development",
            "Hybrid Mobile Apps",
            // Technologies
            "MongoDB Developer",
            "Express.js Specialist",
            "React.js Consultant",
            "GraphQL API Development",
            "RESTful API Design",
            "AWS Certified Developer",
            "Serverless Architecture",
            "Microservices Expert",
            // Business value
            "High-Performance Websites",
            "SEO-Optimized Development",
            "Web Performance Tuning",
            "E-Commerce Solutions",
            "SaaS Development",
            "Startup Tech Partner",
            // Personal brand
            "Saroj Dangol Portfolio",
            "Dangol Development Services",
            "Saroj Tech Solutions"
        ],
        authors: [
            {
                name: "Saroj Dangol",
                url: "https://www.sarojdangol012.com.np"
            },
            {
                name: "Apptechnologies",
                url: "https://apptechnologies.com"
            }
        ],
        creator: "Saroj Dangol",
        publisher: "Apptechnologies",
        formatDetection: {
            email: true,
            address: true,
            telephone: true
        },
        metadataBase: new URL("https://www.sarojdangol012.com.np"),
        alternates: {
            canonical: "https://www.sarojdangol012.com.np/"
        },
        openGraph: {
            title: "Hire Saroj Dangol - Best IT Developer in Lalitpur, Nepal",
            description: "Expert Full Stack & Mobile Developer in Lalitpur, Nepal. Specializing in MERN stack, React Native, and AWS. Available for hire in Kathmandu Valley.",
            url: "https://www.sarojdangol012.com.np",
            siteName: "Saroj Dangol - IT Developer Nepal",
            images: {
                url: "https://www.sarojdangol012.com.np/images/profile.webp",
                width: 1200,
                height: 630,
                alt: "Saroj Dangol - IT Developer in Lalitpur, Nepal"
            },
            locale: "en_US",
            type: "profile",
            emails: [
                "hello@sarojdangol012.com.np",
                "saroj9823dangol@gmail.com"
            ]
        },
        twitter: {
            card: "summary_large_image",
            site: "@sarojdev",
            creator: "@sarojdev",
            title: "Saroj Dangol - Top IT Developer in Nepal",
            description: "Senior Full Stack Developer in Lalitpur, Nepal. Building world-class web & mobile apps. MERN | React Native | AWS.",
            images: [
                {
                    url: "https://www.sarojdangol012.com.np/images/twitter-card.webp",
                    width: 1200,
                    height: 675,
                    alt: "Saroj Dangol - IT Developer Nepal"
                }
            ]
        },
        icons: {
            icon: [
                {
                    url: "/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png"
                },
                {
                    url: "/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png"
                },
                {
                    url: "/favicon-48x48.png",
                    sizes: "48x48",
                    type: "image/png"
                }
            ],
            shortcut: [
                "/favicon.ico"
            ],
            apple: [
                {
                    url: "/apple-touch-icon.png",
                    sizes: "180x180",
                    type: "image/png"
                },
                {
                    url: "/apple-touch-icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png"
                }
            ],
            other: [
                {
                    rel: "mask-icon",
                    url: "/safari-pinned-tab.svg",
                    color: "#5bbad5"
                },
                {
                    rel: "apple-touch-startup-image",
                    url: "/apple-startup.png",
                    sizes: "2048x2732"
                }
            ]
        },
        manifest: "/site.webmanifest",
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1
            }
        },
        verification: {
            google: "ZehS4kI2H4bUfWwPGCGl23h8rxEEp4KPxCiBdykJ-v4"
        },
        other: {
            "msapplication-TileColor": "#2b5797",
            "msapplication-config": "/browserconfig.xml",
            "theme-color": "#1a365d",
            "og:latitude": "27.6710",
            "og:longitude": "85.3226",
            "og:locality": "Lalitpur",
            "og:region": "Bagmati",
            "og:postal-code": "44700",
            "og:country-name": "Nepal",
            "business:contact_data:street_address": "Lalitpur",
            "business:contact_data:locality": "Lalitpur",
            "business:contact_data:region": "Bagmati",
            "business:contact_data:postal_code": "44700",
            "business:contact_data:country_name": "Nepal",
            "geo.region": "NP-P3",
            "geo.placename": "Lalitpur",
            "geo.position": "27.6710;85.3226",
            ICBM: "27.6710, 85.3226"
        }
    },
    structuredData: {
        type: "Person",
        name: "Saroj Dangol",
        jobTitle: "Senior Full Stack Developer & Mobile Specialist",
        url: "https://www.sarojdangol012.com.np/images/profile.webp",
        sameAs: [
            "https://github.com/Saroj9823Dangol",
            "https://linkedin.com/in/er-saroj-dangol-9492bb216",
            "https://facebook.com/saroz.dangol.7",
            "https://www.upwork.com/freelancers/~01a78d9a0751fb1801"
        ],
        worksFor: {
            type: "Organization",
            name: "Apptechnologies",
            url: "https://apptechnologies.com"
        },
        description: "Professional IT Developer in Lalitpur, Nepal. 3+ years experience in MERN stack, React Native, and Cloud Solutions. Serving Kathmandu Valley and beyond.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Lalitpur",
            addressLocality: "Lalitpur",
            addressRegion: "Bagmati",
            postalCode: "44700",
            addressCountry: "Nepal"
        },
        skills: [
            // Languages
            "JavaScript (ES6+)",
            "TypeScript",
            "Python",
            "Java",
            // Frontend
            "React.js",
            "Next.js",
            "Redux",
            "GraphQL",
            "Apollo",
            "Tailwind CSS",
            "Material UI",
            "Chakra UI",
            // Backend
            "Node.js",
            "Express.js",
            "NestJS",
            "Django",
            "Spring Boot",
            // Mobile
            "React Native",
            "Expo",
            "Mobile UI/UX",
            "App Store Deployment",
            "Play Store Deployment",
            // Databases
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Firebase",
            "Redis",
            // DevOps & Cloud
            "AWS Certified",
            "Docker",
            "Kubernetes",
            "CI/CD Pipelines",
            "Serverless",
            "Microservices",
            // Testing
            "Jest",
            "Cypress",
            "React Testing Library",
            // Other
            "Web Accessibility",
            "SEO Optimization",
            "Web Performance",
            "Agile Methodologies",
            "Technical Leadership"
        ],
        hasOccupation: {
            "@type": "Occupation",
            name: "Software Developer",
            estimatedSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 50000,
                    maxValue: 120000,
                    unitText: "YEAR"
                }
            },
            experienceRequirements: "5+ years"
        },
        knowsAbout: [
            "Web Development",
            "Mobile Development",
            "Cloud Computing",
            "Database Design",
            "API Development",
            "Software Architecture",
            "DevOps Practices",
            "UI/UX Principles"
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Tribhuvan University",
            url: "https://tu.edu.np"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/lib/seo/schema.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combinedSchema",
    ()=>combinedSchema,
    "faqSchema",
    ()=>faqSchema,
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema,
    "localBusinessSchema",
    ()=>localBusinessSchema,
    "organizationSchema",
    ()=>organizationSchema,
    "personSchema",
    ()=>personSchema,
    "servicesSchema",
    ()=>servicesSchema,
    "websiteSchema",
    ()=>websiteSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$lib$2f$seo$2f$contact$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/lib/seo/contact-schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/config.ts [app-client] (ecmascript)");
;
;
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sarojdangol012.com.np/#localbusiness",
    name: "Saroj Dangol - IT Development Services",
    image: "https://www.sarojdangol012.com.np/images/profile.webp",
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.description,
    url: "https://www.sarojdangol012.com.np",
    telephone: "+977-9863485599",
    email: "hello@sarojdangol012.com.np",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Lalitpur",
        addressLocality: "Lalitpur",
        addressRegion: "Bagmati",
        postalCode: "44700",
        addressCountry: "NP"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 27.671,
        longitude: 85.3226
    },
    areaServed: [
        {
            "@type": "City",
            name: "Lalitpur"
        },
        {
            "@type": "City",
            name: "Kathmandu"
        },
        {
            "@type": "City",
            name: "Bhaktapur"
        },
        {
            "@type": "Country",
            name: "Nepal"
        }
    ],
    serviceArea: [
        {
            "@type": "City",
            name: "Lalitpur"
        },
        {
            "@type": "City",
            name: "Kathmandu"
        },
        {
            "@type": "City",
            name: "Bhaktapur"
        },
        {
            "@type": "Country",
            name: "Nepal"
        },
        {
            "@type": "AdministrativeArea",
            name: "Worldwide Remote"
        }
    ],
    priceRange: "$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            opens: "09:00",
            closes: "18:00"
        }
    ],
    sameAs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.sameAs,
    founder: {
        "@type": "Person",
        name: "Saroj Dangol",
        url: "https://www.sarojdangol012.com.np"
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
                            description: "Custom web application development using MERN stack"
                        }
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "E-Commerce Development",
                            description: "Complete e-commerce solutions with payment integration"
                        }
                    }
                ]
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
                            description: "Cross-platform mobile applications for iOS and Android"
                        }
                    }
                ]
            }
        ]
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "15",
        bestRating: "5",
        worstRating: "1"
    }
};
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sarojdangol012.com.np/#website",
    url: "https://www.sarojdangol012.com.np",
    name: "Saroj Dangol - IT Developer Nepal",
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].metadata.description,
    publisher: {
        "@id": "https://www.sarojdangol012.com.np/#person"
    },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.sarojdangol012.com.np/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    },
    inLanguage: "en-US"
};
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.sarojdangol012.com.np/#person",
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.name,
    url: "https://www.sarojdangol012.com.np",
    image: "https://www.sarojdangol012.com.np/images/profile.webp",
    sameAs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.sameAs,
    jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.jobTitle,
    worksFor: {
        "@type": "Organization",
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.worksFor.name,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.worksFor.url
    },
    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.address,
    email: "hello@sarojdangol012.com.np",
    telephone: "+977-9863485599",
    alumniOf: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.alumniOf,
    hasOccupation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.hasOccupation,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.description,
    nationality: {
        "@type": "Country",
        name: "Nepal"
    },
    knowsLanguage: [
        {
            "@type": "Language",
            name: "English"
        },
        {
            "@type": "Language",
            name: "Nepali"
        }
    ],
    // GEO: mainEntityOfPage — establishes this page as canonical source about Saroj
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.sarojdangol012.com.np/"
    },
    // GEO: speakable — points AI answer engines to the most quotable content
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
            "#about-saroj",
            ".hero-headline"
        ]
    },
    // GEO: expanded knowsAbout — 18 specific searchable topics
    knowsAbout: [
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
    // GEO: mentions — key technologies as SoftwareApplication entities
    mentions: [
        {
            "@type": "SoftwareApplication",
            name: "React"
        },
        {
            "@type": "SoftwareApplication",
            name: "Node.js"
        },
        {
            "@type": "SoftwareApplication",
            name: "Next.js"
        },
        {
            "@type": "SoftwareApplication",
            name: "MongoDB"
        },
        {
            "@type": "SoftwareApplication",
            name: "React Native"
        },
        {
            "@type": "SoftwareApplication",
            name: "TypeScript"
        },
        {
            "@type": "SoftwareApplication",
            name: "AWS"
        },
        {
            "@type": "SoftwareApplication",
            name: "NestJS"
        }
    ],
    // GEO: hasCredential — AWS certification authority signal
    hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Developer",
        credentialCategory: "certification"
    }
};
function generateBreadcrumbSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index)=>({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
}
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
        {
            "@type": "Service",
            "@id": "https://www.sarojdangol012.com.np/services/web-development",
            name: "Full Stack Web Development",
            description: "Custom web application development using modern technologies like React, Next.js, Node.js, and MongoDB",
            provider: {
                "@id": "https://www.sarojdangol012.com.np/#person"
            },
            areaServed: "Nepal",
            availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://www.sarojdangol012.com.np"
            },
            category: "Web Development",
            serviceType: "Full Stack Development"
        },
        {
            "@type": "Service",
            "@id": "https://www.sarojdangol012.com.np/services/mobile-development",
            name: "Mobile App Development",
            description: "Cross-platform mobile application development using React Native for iOS and Android",
            provider: {
                "@id": "https://www.sarojdangol012.com.np/#person"
            },
            areaServed: "Nepal",
            availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://www.sarojdangol012.com.np"
            },
            category: "Mobile Development",
            serviceType: "React Native Development"
        },
        {
            "@type": "Service",
            "@id": "https://www.sarojdangol012.com.np/services/cloud-solutions",
            name: "Cloud Solutions & DevOps",
            description: "AWS cloud infrastructure, serverless architecture, and DevOps implementation",
            provider: {
                "@id": "https://www.sarojdangol012.com.np/#person"
            },
            areaServed: "Nepal",
            availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://www.sarojdangol012.com.np"
            },
            category: "Cloud Computing",
            serviceType: "AWS Solutions"
        }
    ]
};
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What services do you offer as an IT developer in Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Saroj Dangol offers full stack web development, React Native mobile app development, backend and API development, and AWS cloud and DevOps services for businesses in Nepal and worldwide."
            }
        },
        {
            "@type": "Question",
            name: "How much does it cost to develop a web application in Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Web application development costs in Nepal vary by complexity — a basic website starts from NPR 50,000, while complex web applications range from NPR 200,000 to NPR 1,000,000+, and detailed quotes are provided after reviewing your specific requirements."
            }
        },
        {
            "@type": "Question",
            name: "Do you work with clients outside Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Saroj Dangol works with clients globally via remote collaboration, serving businesses in Nepal, the United States, Europe, Australia, and other regions."
            }
        },
        {
            "@type": "Question",
            name: "What technologies does Saroj Dangol specialize in?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Saroj Dangol specialises in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for cross-platform mobile development, Next.js, TypeScript, NestJS, AWS cloud services, GraphQL, and PostgreSQL."
            }
        },
        {
            "@type": "Question",
            name: "How long does it take to develop a mobile app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A simple React Native mobile app typically takes 4–8 weeks, a medium-complexity app takes 2–4 months, and a complex app with advanced features can take 4–6 months or more depending on scope."
            }
        },
        {
            "@type": "Question",
            name: "Do you provide ongoing support and maintenance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, ongoing support and maintenance packages are available for all projects, covering bug fixes, security updates, performance optimisation, and feature enhancements."
            }
        },
        {
            "@type": "Question",
            name: "What is your development process?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The development process follows an Agile methodology with five phases: Discovery and Planning, Design and Prototyping, Development and Testing, Deployment, and ongoing Support and Maintenance, with regular client updates throughout."
            }
        },
        {
            "@type": "Question",
            name: "Can you help with existing projects or legacy codebases?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Saroj Dangol can assist with code reviews, bug fixes, performance optimisation, feature additions, technology upgrades, and complete refactoring of existing web and mobile applications."
            }
        },
        {
            "@type": "Question",
            name: "What makes Saroj Dangol different from other developers in Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Saroj Dangol brings 3+ years of professional experience, AWS certification, expertise in modern full stack and mobile technologies, a strong focus on code quality, and a proven track record of delivering 9+ projects on time."
            }
        },
        {
            "@type": "Question",
            name: "How can I get started with a project?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To get started, contact Saroj via the contact form at sarojdangol012.com.np/contact or email hello@sarojdangol012.com.np, and a consultation will be scheduled to discuss your requirements, timeline, and budget."
            }
        },
        {
            "@type": "Question",
            name: "What is the MERN stack and why do you use it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The MERN stack consists of MongoDB, Express.js, React.js, and Node.js — a JavaScript-only technology stack that enables rapid development of scalable, high-performance web applications with a single language across frontend and backend."
            }
        },
        {
            "@type": "Question",
            name: "What React Native services do you offer for mobile app development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "React Native mobile app development services include cross-platform iOS and Android app development, real-time features, push notifications, offline-first architecture, third-party API integrations, and App Store and Play Store submission."
            }
        },
        {
            "@type": "Question",
            name: "What AWS services do you work with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "AWS services used include EC2, Lambda (serverless), S3, RDS, DynamoDB, CloudFront, API Gateway, Elastic Beanstalk, and IAM, enabling scalable, cost-effective cloud infrastructure for web and mobile applications."
            }
        }
    ]
};
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.sarojdangol012.com.np/#organization",
    name: "Saroj Dangol IT Services",
    url: "https://www.sarojdangol012.com.np",
    logo: "https://www.sarojdangol012.com.np/logo.png",
    image: "https://www.sarojdangol012.com.np/images/profile.webp",
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].metadata.description,
    email: "hello@sarojdangol012.com.np",
    telephone: "+977-9863485599",
    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.address,
    founder: {
        "@id": "https://www.sarojdangol012.com.np/#person"
    },
    sameAs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.sameAs
};
const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.sarojdangol012.com.np/",
            url: "https://www.sarojdangol012.com.np",
            name: "Saroj Dangol — Senior Full Stack Developer, Lalitpur Nepal",
            description: "Saroj Dangol is a Senior Full Stack Developer based in Lalitpur, Nepal, specialising in MERN stack, React Native, and AWS cloud solutions.",
            inLanguage: "en-US",
            isPartOf: {
                "@id": "https://www.sarojdangol012.com.np/#website"
            },
            mainEntity: {
                "@id": "https://www.sarojdangol012.com.np/#person"
            }
        },
        websiteSchema,
        personSchema,
        localBusinessSchema,
        organizationSchema
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/components/seo/structured-data.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StructuredData",
    ()=>StructuredData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/script.js [app-client] (ecmascript)");
;
;
function StructuredData({ data }) {
    const jsonLd = Array.isArray(data) ? data : [
        data
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: jsonLd.map((schema, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: `structured-data-${index}`,
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, index, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/structured-data.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_c = StructuredData;
var _c;
__turbopack_context__.k.register(_c, "StructuredData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$lib$2f$seo$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/lib/seo/schema.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$components$2f$seo$2f$structured$2d$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/components/seo/structured-data.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Breadcrumbs({ items, className = "" }) {
    const breadcrumbItems = [
        {
            name: "Home",
            url: "https://www.sarojdangol012.com.np"
        },
        ...items
    ];
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$lib$2f$seo$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateBreadcrumbSchema"])(breadcrumbItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$components$2f$seo$2f$structured$2d$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StructuredData"], {
                data: schema
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: `flex items-center space-x-2 text-sm ${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center text-muted-foreground hover:text-primary transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                index === items.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-primary",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.url,
                                    className: "text-muted-foreground hover:text-primary transition-colors",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/seo/breadcrumbs.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Breadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>House
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const House = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("House", [
    [
        "path",
        {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
        }
    ]
]);
;
 //# sourceMappingURL=house.js.map
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript)");
}),
"[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/script.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_SD_solar-system-portfolio_6b7b1a13._.js.map