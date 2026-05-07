import type { Metadata } from "next";
import JwtDecoderClient from "./jwt-decoder-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema, generateToolFaqSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "jwt-decoder";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Best JWT Decoder Online - Free & Secure JSON Web Token Parser Nepal",
  description: "Ranked #1 JWT decoder in Nepal. Securely inspect JSON Web Tokens, view header, payload, and signature. 100% private and client-side processing.",
  keywords: ["best jwt decoder", "json web token decoder online", "decode jwt free", "jwt parser nepal", "secure jwt inspect", "auth tools kathmandu"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function JwtDecoderPage() {
  return (
    <>
      {tool && (
        <>
          <StructuredData data={generateToolSchema(tool)} />
          <StructuredData data={generateToolFaqSchema(tool)} />
        </>
      )}
      <JwtDecoderClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About the JWT Decoder</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The JWT Decoder is a free developer tool designed to securely parse and inspect JSON Web Tokens (JWT). When working with authentication, OAuth, or modern API design, debugging tokens is a frequent task. This tool allows you to easily view the decoded header, payload claims, and signature information in a readable format.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Understanding JSON Web Tokens</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          A JSON Web Token consists of three parts separated by dots (`.`):
        </p>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>Header:</strong> Contains metadata about the token, such as the signing algorithm (e.g., HS256 or RS256) and the token type (JWT).</li>
          <li><strong>Payload (Claims):</strong> Contains the actual data being transmitted, such as user IDs, expiration timestamps (`exp`), and roles. Note: payloads are only encoded (Base64Url), not encrypted. Do not put sensitive data here.</li>
          <li><strong>Signature:</strong> Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Is it safe to decode JWTs online?</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          Yes, our JWT Decoder is 100% secure because it processes everything on the client side. Your token is decoded using JavaScript right inside your browser. We never send, store, or log your tokens on our servers, ensuring your authentication credentials remain private.
        </p>
      </article>
    </>
  );
}