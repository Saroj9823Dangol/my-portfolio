(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SD/sd-portfolio/lib/tools/tool-list.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToolBySlug",
    ()=>getToolBySlug,
    "toolsList",
    ()=>toolsList
]);
const toolsList = [
    {
        slug: "json-formatter",
        name: "JSON Formatter",
        description: "Format, beautify, minify, and validate JSON data with syntax highlighting.",
        icon: "📋",
        tags: [
            "JSON",
            "Format",
            "Validate"
        ],
        category: "developer"
    },
    {
        slug: "base64-encoder",
        name: "Base64 Encoder",
        description: "Encode plain text to Base64 or decode Base64 to plain text.",
        icon: "🔐",
        tags: [
            "Base64",
            "Encode",
            "Decode"
        ],
        category: "developer"
    },
    {
        slug: "currency-converter",
        name: "Currency Converter",
        description: "Convert between NPR, USD, INR, EUR and more currencies with live rates from Budget API.",
        icon: "💱",
        tags: [
            "Currency",
            "NPR",
            "USD",
            "Exchange Rate"
        ],
        category: "nepal"
    },
    {
        slug: "regex-tester",
        name: "Regex Tester",
        description: "Test regular expressions with live match highlighting and capture groups.",
        icon: "🔍",
        tags: [
            "Regex",
            "Pattern",
            "Match"
        ],
        category: "developer"
    },
    {
        slug: "hash-generator",
        name: "Hash Generator",
        description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text.",
        icon: "#️⃣",
        tags: [
            "Hash",
            "MD5",
            "SHA",
            "Crypto"
        ],
        category: "developer"
    },
    {
        slug: "color-converter",
        name: "Color Converter",
        description: "Convert between HEX, RGB, HSL, and CSS color formats with visual picker.",
        icon: "🎨",
        tags: [
            "Color",
            "HEX",
            "RGB",
            "Design"
        ],
        category: "design"
    },
    {
        slug: "jwt-decoder",
        name: "JWT Decoder",
        description: "Decode and inspect JWT tokens. View header, payload, and signature information.",
        icon: "🔑",
        tags: [
            "JWT",
            "Token",
            "Decode",
            "JSON Web Token"
        ],
        category: "developer"
    }
];
const getToolBySlug = (slug)=>{
    return toolsList.find((tool)=>tool.slug === slug);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/sd-portfolio/components/tools/ad-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdBanner",
    ()=>AdBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/sd-portfolio/node_modules/.pnpm/next@16.0.7_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function AdBanner({ slot }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-center py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[728px] h-[90px] bg-[var(--color-border)]/30 rounded-lg flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[var(--color-fg-muted)]",
                children: [
                    "Advertisement ",
                    slot
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/sd-portfolio/components/tools/ad-banner.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/SD/sd-portfolio/components/tools/ad-banner.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/SD/sd-portfolio/components/tools/ad-banner.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AdBanner;
var _c;
__turbopack_context__.k.register(_c, "AdBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolsPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/sd-portfolio/node_modules/.pnpm/next@16.0.7_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/sd-portfolio/node_modules/.pnpm/next@16.0.7_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$lib$2f$tools$2f$tool$2d$list$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/sd-portfolio/lib/tools/tool-list.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$components$2f$tools$2f$ad$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SD/sd-portfolio/components/tools/ad-banner.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ToolsPageClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$components$2f$tools$2f$ad$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBanner"], {
                slot: "top-tools"
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold mb-4",
                                children: [
                                    "ToolHub ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-accent)]",
                                        children: "Nepal"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                        lineNumber: 15,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[var(--color-fg-muted)] max-w-2xl mx-auto",
                                children: "Free online developer utilities. 100% client-side processing - your data never leaves your browser."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$lib$2f$tools$2f$tool$2d$list$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolsList"].map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/tools/${tool.slug}`,
                                className: "group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] transition-all duration-200 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: tool.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors",
                                                children: tool.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--color-fg-muted)]",
                                        children: tool.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: tool.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs px-2 py-1 rounded-full bg-[var(--color-border)] text-[var(--color-fg-muted)]",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, tool.slug, true, {
                                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-16 p-8 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-3",
                                    children: "Need Custom Developer Tools?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--color-fg-muted)] mb-6",
                                    children: "We can build custom utilities tailored to your specific needs. Contact us for custom tool development."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity",
                                    children: "Request Custom Tool"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SD$2f$sd$2d$portfolio$2f$components$2f$tools$2f$ad$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBanner"], {
                slot: "bottom-tools"
            }, void 0, false, {
                fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SD/sd-portfolio/app/tools/tools-client.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ToolsPageClient;
var _c;
__turbopack_context__.k.register(_c, "ToolsPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SD_sd-portfolio_cd0fe4b0._.js.map