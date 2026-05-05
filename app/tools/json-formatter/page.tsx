import type { Metadata } from "next";
import JsonFormatterClient from "./json-formatter-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "json-formatter";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "JSON Formatter Online - Free JSON Beautifier & Validator",
  description: "Free online JSON formatter, beautifier, and validator. Format, minify, and validate JSON with syntax highlighting. 100% client-side processing.",
  keywords: ["json formatter", "json beautifier", "json validator", "json minify", "format json online"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function JsonFormatterPage() {
  return (
    <>
      {tool && <StructuredData data={generateToolSchema(tool)} />}
      <JsonFormatterClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About JSON Formatter</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The JSON Formatter is a powerful, free online developer tool designed to help you quickly format, beautify, minify, and validate your JSON (JavaScript Object Notation) data. Whether you are debugging an API response or writing configuration files, this tool ensures your JSON is perfectly structured and error-free.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">How to use the JSON Beautifier</h2>
        <ol className="list-decimal pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li>Paste your raw, unformatted, or minified JSON string into the editor.</li>
          <li>The tool will automatically validate your JSON data in real-time.</li>
          <li>If the JSON is valid, it will be instantly formatted with proper indentation and syntax highlighting.</li>
          <li>Use the "Copy" button to copy the formatted JSON to your clipboard.</li>
        </ol>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Key Features & Security</h2>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>100% Client-Side Processing:</strong> Your JSON data is processed entirely within your browser. We never send your sensitive data to our servers, ensuring complete privacy and security.</li>
          <li><strong>Syntax Highlighting:</strong> Easily distinguish between strings, numbers, booleans, and null values with color-coded syntax.</li>
          <li><strong>Instant Validation:</strong> Catch syntax errors, missing quotes, or trailing commas immediately as you type.</li>
        </ul>
      </article>
    </>
  );
}