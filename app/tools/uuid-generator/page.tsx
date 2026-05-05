import type { Metadata } from "next";
import UuidGeneratorClient from "./uuid-generator-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "uuid-generator";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "UUID / GUID Generator Online - Version 4 & Version 1",
  description: "Free online UUID and GUID generator. Generate RFC 4122 compliant UUIDs (v4 random and v1 time-based) in bulk. 100% client-side.",
  keywords: ["uuid generator", "guid generator", "random uuid", "bulk uuid", "rfc 4122"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function UuidGeneratorPage() {
  return (
    <>
      {tool && <StructuredData data={generateToolSchema(tool)} />}
      <UuidGeneratorClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About the UUID Generator</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The UUID (Universally Unique Identifier) Generator is a free developer utility that instantly creates highly unique, RFC 4122 compliant identifiers. Also known as GUIDs (Globally Unique Identifiers) in the Microsoft ecosystem, these 128-bit identifiers are essential for database primary keys, session IDs, and distributed systems.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Supported UUID Versions</h2>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>Version 4 (Random):</strong> The most common type of UUID. It relies on random numbers, ensuring an extremely low probability of collision (duplication). Ideal for almost all general-purpose identifier needs.</li>
          <li><strong>Version 1 (Time-based):</strong> Generated using the current timestamp and the computer's MAC address (or a random node ID). Useful when you need identifiers that can be sorted by creation time.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Features</h2>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>Bulk Generation:</strong> Generate up to 100 UUIDs at once with a single click.</li>
          <li><strong>Zero Server Communication:</strong> UUIDs are generated directly in your browser using secure cryptographic APIs (`crypto.randomUUID()`), meaning they are generated instantly and securely without network requests.</li>
        </ul>
      </article>
    </>
  );
}
