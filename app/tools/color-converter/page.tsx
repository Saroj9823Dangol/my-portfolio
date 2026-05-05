import type { Metadata } from "next";
import ColorConverterClient from "./color-converter-client";
import { StructuredData } from "@/components/seo/structured-data";
import { generateToolSchema } from "@/lib/seo/tool-schema";
import { getToolBySlug } from "@/lib/tools/tool-list";

const slug = "color-converter";
const tool = getToolBySlug(slug);

export const metadata: Metadata = {
  title: "Color Picker & Converter - HEX, RGB, HSL | ToolHub Nepal",
  description: "Free online color picker with real-time conversion between HEX, RGB, HSL, and CMYK formats. Edit any format and see all others update instantly.",
  keywords: ["color picker", "color converter", "hex to rgb", "rgb to hsl", "hex color code"],
  alternates: {
    canonical: `https://www.sarojdangol012.com.np/tools/${slug}`,
  },
};

export default function ColorConverterPage() {
  return (
    <>
      {tool && <StructuredData data={generateToolSchema(tool)} />}
      <ColorConverterClient />
      
      <article className="max-w-6xl mx-auto px-4 py-8 prose prose-invert">
        <h2 className="text-2xl font-bold mb-4 text-white">About the Color Converter</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          The Color Converter and Picker is an essential utility for web designers and frontend developers. It allows you to quickly translate color values between the most common formats used in web design, graphic design, and print: HEX, RGB, HSL, and CMYK.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">Understanding Color Formats</h2>
        <ul className="list-disc pl-5 mb-6 text-[var(--color-fg-muted)] space-y-2">
          <li><strong>HEX:</strong> A 6-digit hexadecimal code commonly used in HTML and CSS. (e.g., #FF0000 for red).</li>
          <li><strong>RGB (Red, Green, Blue):</strong> Defines colors based on the intensity of red, green, and blue light. Perfect for digital screens.</li>
          <li><strong>HSL (Hue, Saturation, Lightness):</strong> A more intuitive way for humans to define color. Great for creating color palettes by adjusting saturation and lightness while keeping the hue constant.</li>
          <li><strong>CMYK (Cyan, Magenta, Yellow, Key/Black):</strong> The standard color model used in color printing.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-white">How it works</h2>
        <p className="mb-4 text-[var(--color-fg-muted)]">
          Simply type a value into any of the format fields, or use the visual color picker, and all other formats will update simultaneously in real-time. Click the copy icon next to any format to grab the code for your project.
        </p>
      </article>
    </>
  );
}