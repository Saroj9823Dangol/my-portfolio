import type { Metadata } from "next";
import HashGeneratorClient from "./hash-generator-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "hash-generator";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Hash Generator Online - MD5, SHA-1, SHA-256, SHA-512",
  description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text. 100% client-side processing.",
  keywords: ["hash generator", "md5 generator", "sha256 generator", "sha512 generator", "hash tool"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function HashGeneratorPage() {
  return (
    <>
      {tool && <StructuredData data={generateToolSchema(tool)} />}
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