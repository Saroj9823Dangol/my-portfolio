import type { Metadata } from "next";
import HashGeneratorClient from "./hash-generator-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema, generateToolFaqSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "hash-generator";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Best Hash Generator Online - Free MD5, SHA-256 Tool Nepal",
  description: "Ranked #1 Hash generator in Nepal. Free online tool to generate MD5, SHA-1, SHA-256, and SHA-512 hashes securely. 100% private and client-side.",
  keywords: ["best hash generator", "md5 generator online", "sha256 generator free", "hash tool nepal", "sha512 generator online", "security tools kathmandu"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function HashGeneratorPage() {
  return (
    <>
      {tool && (
        <>
          <StructuredData data={generateToolSchema(tool)} />
          <StructuredData data={generateToolFaqSchema(tool)} />
        </>
      )}
      <HashGeneratorClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About the Hash Generator</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The Hash Generator is a free online security tool that allows you to calculate cryptographic hashes from text strings. It supports multiple widely-used hashing algorithms including MD5, SHA-1, SHA-256, and SHA-512. Hashing is a one-way process used to verify data integrity, store passwords securely, and create unique digital fingerprints for files or messages.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Supported Hashing Algorithms</h2>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>SHA-256 / SHA-512:</strong> Part of the Secure Hash Algorithm 2 (SHA-2) family. Currently considered highly secure and widely used in modern applications, SSL certificates, and blockchain technology.</li>
          <li><strong>MD5:</strong> A widely known algorithm that produces a 128-bit hash. While very fast, it is no longer considered cryptographically secure against collision attacks and should only be used as a checksum to verify data integrity against unintentional corruption.</li>
          <li><strong>SHA-1:</strong> Produces a 160-bit hash value. Like MD5, it is no longer considered secure for cryptographic purposes but remains in use in legacy systems and non-security critical applications like Git.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Privacy Guarantee</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          All hashing calculations are performed locally in your web browser. Your text inputs are never transmitted over the internet or stored on any server.
        </p>
      </article>
    </>
  );
}