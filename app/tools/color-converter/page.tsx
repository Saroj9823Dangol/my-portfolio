import type { Metadata } from "next";
import ColorConverterClient from "./color-converter-client";

export const metadata: Metadata = {
  title: "Color Converter - HEX RGB HSL Converter | ToolHub Nepal",
  description: "Free online color converter. Convert between HEX, RGB, HSL, and CMYK color formats. Visual color picker included.",
  keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker", "hsl converter"],
};

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}