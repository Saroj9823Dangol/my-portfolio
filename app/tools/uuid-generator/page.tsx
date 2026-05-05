import type { Metadata } from "next";
import UuidGeneratorClient from "./uuid-generator-client";

export const metadata: Metadata = {
  title: "UUID Generator - Free Online UUID v4 Generator",
  description: "Generate RFC 4122 UUIDs online. UUID v4 (random) and v1-like (time-based). Bulk generation up to 100 UUIDs. 100% client-side.",
  keywords: ["uuid generator", "uuid v4", "random uuid", "guid generator", "unique id"],
};

export default function UuidGeneratorPage() {
  return <UuidGeneratorClient />;
}
