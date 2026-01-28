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
    knowsAbout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].structuredData.knowsAbout,
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
    ]
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
                text: "I offer comprehensive IT development services including Full Stack Web Development (MERN stack), Mobile App Development (React Native), Cloud Solutions (AWS), API Development, and Technical Consulting. I specialize in building scalable, high-performance applications for businesses in Kathmandu Valley and beyond."
            }
        },
        {
            "@type": "Question",
            name: "How much does it cost to develop a web application in Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The cost varies based on project complexity, features, and timeline. A basic website starts from NPR 50,000, while complex web applications can range from NPR 200,000 to NPR 1,000,000+. I provide detailed quotes after understanding your specific requirements."
            }
        },
        {
            "@type": "Question",
            name: "Do you work with clients outside Nepal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, I work with clients globally. While I'm based in Lalitpur, Nepal, I have experience working remotely with international clients. I'm available for both remote and on-site projects in the Kathmandu Valley."
            }
        },
        {
            "@type": "Question",
            name: "What technologies do you specialize in?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile development, Next.js for web applications, TypeScript, AWS cloud services, and modern DevOps practices. I'm also experienced with GraphQL, PostgreSQL, and various frontend frameworks."
            }
        },
        {
            "@type": "Question",
            name: "How long does it take to develop a mobile app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Development time depends on app complexity. A simple app takes 4-8 weeks, a medium complexity app takes 2-4 months, and complex apps with advanced features can take 4-6 months or more. I provide detailed timelines during project planning."
            }
        },
        {
            "@type": "Question",
            name: "Do you provide ongoing support and maintenance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, I offer ongoing support and maintenance packages for all projects. This includes bug fixes, security updates, performance optimization, and feature enhancements. Support packages can be customized based on your needs."
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
"[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesContent",
    ()=>ServicesContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/framer-motion@12.23.26_@emotion+is-prop-valid@1.4.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const services = [
    {
        id: "web-development",
        title: "Web Development",
        description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. SEO-friendly and high-performance.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        features: [
            "Custom Website Design",
            "E-commerce Solutions",
            "Progressive Web Apps (PWA)",
            "CMS Development",
            "Single Page Applications"
        ]
    },
    {
        id: "mobile-development",
        title: "Mobile App Development",
        description: "Cross-platform mobile apps for iOS and Android using React Native. Native performance with a single codebase.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        features: [
            "iOS & Android Apps",
            "Cross-Platform Development",
            "App Store Optimization",
            "UI/UX Design",
            "App Maintenance"
        ]
    },
    {
        id: "backend-api",
        title: "Backend & API",
        description: "Robust and scalable backend architectures. RESTful APIs and GraphQL services designed for performance.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        features: [
            "API Development",
            "Database Design",
            "Microservices",
            "Server Management",
            "Data Migration"
        ]
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        description: "Secure and scalable cloud infrastructure on AWS. Automated CI/CD pipelines for smooth deployment.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        features: [
            "AWS Infrastructure",
            "Serverless Architecture",
            "CI/CD Implementation",
            "Cloud Migration",
            "Performance Optimization"
        ]
    }
];
function ServicesContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "glass rounded-xl p-6 md:p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-2xl text-earth-blue mb-2",
                        children: "Technical Services"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-muted-foreground",
                        children: "Comprehensive development solutions tailored to your needs."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        className: "group flex flex-col glass rounded-xl overflow-hidden hover:border-earth-blue/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-32 bg-gradient-to-br from-earth-blue/10 to-cosmic-blue/10 group-hover:from-earth-blue/20 group-hover:to-cosmic-blue/20 transition-colors flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-full bg-background/50 backdrop-blur-sm border border-earth-blue/20 text-earth-blue group-hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-display text-lg text-foreground mb-2 group-hover:text-earth-blue transition-colors",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-sm text-muted-foreground mb-4 flex-grow line-clamp-3",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    service.features.slice(0, 3).map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center rounded-full bg-secondary/50 border border-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground",
                                                            children: feature
                                                        }, idx, false, {
                                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this)),
                                                    service.features.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center rounded-full bg-secondary/50 border border-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground",
                                                        children: [
                                                            "+",
                                                            service.features.length - 3,
                                                            " more"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 mt-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "inline-flex items-center text-xs font-semibold text-earth-blue hover:underline underline-offset-4",
                                                    children: [
                                                        "Start Project ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3 h-3 ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$26_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.4
                },
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/services",
                    className: "inline-flex items-center px-6 py-2 rounded-full bg-earth-blue/10 text-earth-blue hover:bg-earth-blue/20 transition-colors border border-earth-blue/20 font-terminal text-sm",
                    children: [
                        "View All Details ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4 ml-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                            lineNumber: 153,
                            columnNumber: 28
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SD/solar-system-portfolio/components/content/services-content.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = ServicesContent;
var _c;
__turbopack_context__.k.register(_c, "ServicesContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SD_solar-system-portfolio_4c9fa34e._.js.map