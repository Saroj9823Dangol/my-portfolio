import type { Metadata } from "next";
import RegexTesterClient from "./regex-tester-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema, generateToolFaqSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "regex-tester";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Best Regex Tester Online - Free Regular Expression Tool Nepal",
  description: "Ranked #1 Regex tester in Nepal. Free online tool to test regular expressions with live match highlighting and capture groups. 100% secure.",
  keywords: ["best regex tester", "regular expression tester online", "regex tool free", "test regex nepal", "regex debugger online", "Saroj Dangol utilities"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function RegexTesterPage() {
  return (
    <>
      {tool && (
        <>
          <StructuredData data={generateToolSchema(tool)} />
          <StructuredData data={generateToolFaqSchema(tool)} />
        </>
      )}
      <RegexTesterClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About Regex Tester</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The Regex Tester is an essential developer tool for building, testing, and debugging Regular Expressions. Whether you are validating email formats, extracting specific data from a large block of text, or replacing string patterns, this online regex tester provides real-time feedback with visual match highlighting.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">How to Test Regular Expressions</h2>
        <ol className="list-decimal pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li>Enter your Regular Expression pattern in the "Regex" field.</li>
          <li>Select the appropriate flags (e.g., `g` for global search, `i` for case-insensitive).</li>
          <li>Paste the test text into the input area below.</li>
          <li>Matches will be highlighted instantly in the text as you modify the expression.</li>
        </ol>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">100% Secure & Client-Side</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          Your regular expressions and test strings are evaluated entirely within your browser using JavaScript's native RegExp engine. No data is ever sent to our servers, ensuring your sensitive text and proprietary patterns remain completely private.
        </p>
      </article>
    </>
  );
}