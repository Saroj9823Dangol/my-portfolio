import type { Metadata } from "next";
import CurrencyConverterClient from "./currency-converter-client";

export const metadata: Metadata = {
  title: "Currency Converter - NPR, USD, INR, EUR | ToolHub Nepal",
  description: "Free online currency converter. Convert NPR to USD, INR, EUR, GBP and more with live exchange rates. Best rates for Nepal.",
  keywords: ["currency converter", "npr to usd", "npr to inr", "exchange rate", "currency converter nepal"],
};

export default function CurrencyConverterPage() {
  return <CurrencyConverterClient />;
}