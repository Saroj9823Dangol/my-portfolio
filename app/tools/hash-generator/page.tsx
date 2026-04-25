import type { Metadata } from "next";
import HashGeneratorClient from "./hash-generator-client";

export const metadata: Metadata = {
  title: "Hash Generator Online - MD5, SHA-1, SHA-256, SHA-512",
  description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text. 100% client-side processing.",
  keywords: ["hash generator", "md5 generator", "sha256 generator", "sha512 generator", "hash tool"],
};

export default function HashGeneratorPage() {
  return <HashGeneratorClient />;
}