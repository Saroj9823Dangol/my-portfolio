import type { Metadata } from "next";
import Base64EncoderClient from "./base64-encoder-client";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder Online - Free Tool",
  description: "Free online Base64 encoder and decoder. Encode plain text to Base64 or decode Base64 to plain text. 100% client-side processing.",
  keywords: ["base64 encoder", "base64 decoder", "encode base64", "decode base64", "base64 online"],
};

export default function Base64EncoderPage() {
  return <Base64EncoderClient />;
}