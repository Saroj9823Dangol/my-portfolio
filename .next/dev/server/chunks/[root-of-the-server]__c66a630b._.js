module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/SD/solar-system-portfolio/data/blog.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogCategories",
    ()=>blogCategories,
    "calculateReadingTime",
    ()=>calculateReadingTime,
    "formatDate",
    ()=>formatDate,
    "sampleBlogPosts",
    ()=>sampleBlogPosts
]);
const blogCategories = [
    {
        name: "Web Development",
        slug: "web-development",
        description: "Articles about modern web development technologies and best practices",
        count: 0
    },
    {
        name: "Mobile Development",
        slug: "mobile-development",
        description: "React Native and mobile app development insights",
        count: 0
    },
    {
        name: "Cloud & DevOps",
        slug: "cloud-devops",
        description: "AWS, serverless, and DevOps practices",
        count: 0
    },
    {
        name: "Career & Business",
        slug: "career-business",
        description: "Tech career advice and freelancing tips",
        count: 0
    },
    {
        name: "Tutorials",
        slug: "tutorials",
        description: "Step-by-step guides and code tutorials",
        count: 0
    }
];
const sampleBlogPosts = [
    {
        slug: "how-to-hire-it-developer-nepal",
        title: "How to Hire the Right IT Developer in Nepal: A Complete Guide",
        description: "Learn the essential steps to find and hire qualified IT developers in Nepal. Discover what to look for, questions to ask, and how to ensure project success.",
        content: "",
        author: "Saroj Dangol",
        publishedAt: "2026-01-15",
        category: "Career & Business",
        tags: [
            "hiring",
            "nepal",
            "it developer",
            "freelancing"
        ],
        image: "/images/blog/hire-developer-nepal.webp",
        imageAlt: "Hiring IT Developer in Nepal",
        readingTime: 8,
        featured: true
    },
    {
        slug: "mern-stack-vs-alternatives-2026",
        title: "MERN Stack vs Alternatives in 2026: Which Should You Choose?",
        description: "A comprehensive comparison of MERN stack with other popular technology stacks. Understand the pros, cons, and best use cases for each.",
        content: "",
        author: "Saroj Dangol",
        publishedAt: "2026-01-20",
        category: "Web Development",
        tags: [
            "mern",
            "react",
            "nodejs",
            "web development"
        ],
        image: "/images/blog/mern-stack-comparison.webp",
        imageAlt: "MERN Stack Comparison",
        readingTime: 12,
        featured: true
    },
    {
        slug: "react-native-app-development-cost-nepal",
        title: "React Native App Development Cost in Nepal: Complete Breakdown",
        description: "Detailed breakdown of mobile app development costs in Nepal. Learn about pricing factors, timeline estimates, and how to budget for your project.",
        content: "",
        author: "Saroj Dangol",
        publishedAt: "2026-01-22",
        category: "Mobile Development",
        tags: [
            "react native",
            "pricing",
            "nepal",
            "mobile apps"
        ],
        image: "/images/blog/app-development-cost.webp",
        imageAlt: "App Development Cost Nepal",
        readingTime: 10,
        featured: true
    },
    {
        slug: "aws-serverless-architecture-guide",
        title: "Building Scalable Applications with AWS Serverless Architecture",
        description: "Learn how to leverage AWS Lambda, API Gateway, and DynamoDB to build cost-effective, scalable serverless applications.",
        content: "",
        author: "Saroj Dangol",
        publishedAt: "2026-01-25",
        category: "Cloud & DevOps",
        tags: [
            "aws",
            "serverless",
            "lambda",
            "cloud"
        ],
        image: "/images/blog/aws-serverless.webp",
        imageAlt: "AWS Serverless Architecture",
        readingTime: 15
    },
    {
        slug: "nextjs-seo-best-practices",
        title: "Next.js SEO Best Practices: Complete Guide for 2026",
        description: "Master SEO in Next.js applications with this comprehensive guide covering metadata, structured data, performance optimization, and more.",
        content: "",
        author: "Saroj Dangol",
        publishedAt: "2026-01-28",
        category: "Web Development",
        tags: [
            "nextjs",
            "seo",
            "web performance",
            "react"
        ],
        image: "/images/blog/nextjs-seo.webp",
        imageAlt: "Next.js SEO Guide",
        readingTime: 14,
        featured: true
    }
];
function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
}),
"[project]/Desktop/SD/solar-system-portfolio/app/sitemap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/data/blog.ts [app-route] (ecmascript)");
;
function sitemap() {
    const baseUrl = "https://www.sarojdangol012.com.np";
    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9
        }
    ];
    // Blog posts
    const blogPosts = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$data$2f$blog$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sampleBlogPosts"].map((post)=>({
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: new Date(post.updatedAt || post.publishedAt),
            changeFrequency: "monthly",
            priority: 0.7
        }));
    return [
        ...staticPages,
        ...blogPosts
    ];
}
}),
"[project]/Desktop/SD/solar-system-portfolio/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/app/sitemap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/Desktop/SD/solar-system-portfolio/app/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$solar$2d$system$2d$portfolio$2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/solar-system-portfolio/app/sitemap.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c66a630b._.js.map