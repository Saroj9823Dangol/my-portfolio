import type { Metadata } from "next";
import JwtDecoderClient from "./jwt-decoder-client";

export const metadata: Metadata = {
  title: "JWT Decoder Online - Free JWT Token Decoder",
  description: "Free online JWT decoder. Decode and inspect JSON Web Tokens. View header, payload, and signature. 100% client-side processing.",
  keywords: ["jwt decoder", "jwt decode", "json web token decoder", "jwt parser", "jwt tool"],
};

export default function JwtDecoderPage() {
  return <JwtDecoderClient />;
}