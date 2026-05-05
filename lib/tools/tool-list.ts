export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  tags: string[];
  category: "developer" | "nepal" | "design";
}

export const toolsList: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format, beautify, minify, and validate JSON data with syntax highlighting.",
    icon: "📋",
    tags: ["JSON", "Format", "Validate"],
    category: "developer",
  },
  {
    slug: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode plain text to Base64 or decode Base64 to plain text.",
    icon: "🔐",
    tags: ["Base64", "Encode", "Decode"],
    category: "developer",
  },

  {
    slug: "regex-tester",
    name: "Regex Tester",
    description: "Test regular expressions with live match highlighting and capture groups.",
    icon: "🔍",
    tags: ["Regex", "Pattern", "Match"],
    category: "developer",
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text.",
    icon: "#️⃣",
    tags: ["Hash", "MD5", "SHA", "Crypto"],
    category: "developer",
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and CSS color formats with visual picker.",
    icon: "🎨",
    tags: ["Color", "HEX", "RGB", "Design"],
    category: "design",
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens. View header, payload, and signature information.",
    icon: "🔑",
    tags: ["JWT", "Token", "Decode", "JSON Web Token"],
    category: "developer",
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate RFC 4122 UUIDs. v4 random and v1-like time-based. Bulk generation up to 100.",
    icon: "🆔",
    tags: ["UUID", "GUID", "Random", "Unique ID"],
    category: "developer",
  },
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return toolsList.find((tool) => tool.slug === slug);
};