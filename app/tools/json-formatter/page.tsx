import type { Metadata } from "next";
import JsonFormatterClient from "./json-formatter-client";

export const metadata: Metadata = {
  title: "JSON Formatter Online - Free JSON Beautifier & Validator",
  description: "Free online JSON formatter, beautifier, and validator. Format, minify, and validate JSON with syntax highlighting. 100% client-side processing.",
  keywords: ["json formatter", "json beautifier", "json validator", "json minify", "format json online"],
};

export default function JsonFormatterPage() {
  return <JsonFormatterClient />;
}