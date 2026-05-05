import type { Metadata } from "next";
import ColorConverterClient from "./color-converter-client";

export const metadata: Metadata = {
  title: "Color Picker - HEX RGB HSL CMYK | ToolHub Nepal",
  description: "Free online color picker with real-time conversion between HEX, RGB, HSL, and CMYK formats. Edit any format and see all others update instantly.",
  keywords: ["color picker", "color converter", "hex", "rgb", "hsl", "cmyk", "real-time"],
};

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}