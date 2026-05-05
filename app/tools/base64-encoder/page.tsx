import type { Metadata } from "next";
import Base64EncoderClient from "./base64-encoder-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "base64-encoder";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder Online - Free Tool",
  description: "Free online Base64 encoder and decoder. Encode plain text to Base64 or decode Base64 to plain text. 100% client-side processing.",
  keywords: ["base64 encoder", "base64 decoder", "encode base64", "decode base64", "base64 online"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function Base64EncoderPage() {
  return (
    <>
      {tool && <StructuredData data={generateToolSchema(tool)} />}
      <Base64EncoderClient />

      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About the Base64 Encoder/Decoder</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The Base64 Encoder/Decoder is a simple, secure online tool that allows you to easily convert plain text into Base64 encoded strings, or decode Base64 back into readable text. Base64 is commonly used for transmitting data in formats that only support text, such as embedding images in CSS or HTML, or sending email attachments.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">How to Encode/Decode Base64</h2>
        <ol className="list-decimal pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li>Select your desired mode: <strong>Encode</strong> or <strong>Decode</strong>.</li>
          <li>Paste your input text or Base64 string into the input area.</li>
          <li>The conversion happens automatically in real-time as you type.</li>
          <li>Click the "Copy" button to save the result to your clipboard.</li>
        </ol>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Is it safe to decode Base64 online?</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          Yes! This tool runs entirely in your web browser using JavaScript. When you encode or decode data, it never leaves your computer. We do not store, track, or send your data to any servers, ensuring that your sensitive information remains private.
        </p>
      </article>
    </>
  );
}