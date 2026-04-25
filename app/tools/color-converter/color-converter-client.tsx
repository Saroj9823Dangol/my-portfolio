"use client";

import { useState, useEffect, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

interface ColorValues {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  cmyk: { c: number; m: number; y: number; k: number };
}

export default function ColorConverterClient() {
  const [input, setInput] = useState("#3b82f6");
  const [activeFormat, setActiveFormat] = useState<"hex" | "rgb" | "hsl">("hex");
  const [color, setColor] = useState<ColorValues>({
    hex: "#3b82f6",
    rgb: { r: 59, g: 130, b: 246 },
    hsl: { h: 217, s: 91, l: 60 },
    cmyk: { c: 76, m: 47, y: 0, k: 4 },
  });
  const [copied, setCopied] = useState<string | null>(null);

  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  };

  const rgbToCmyk = (r: number, g: number, b: number): { c: number; m: number; y: number; k: number } => {
    let c = 1 - r / 255;
    let m = 1 - g / 255;
    let y = 1 - b / 255;
    const k = Math.min(c, m, y);

    if (k === 1) {
      return { c: 0, m: 0, y: 0, k: 100 };
    }

    c = ((c - k) / (1 - k)) * 100;
    m = ((m - k) / (1 - k)) * 100;
    y = ((y - k) / (1 - k)) * 100;

    return {
      c: Math.round(c),
      m: Math.round(m),
      y: Math.round(y),
      k: Math.round(k * 100),
    };
  };

  const updateColor = useCallback((value: string, format: "hex" | "rgb" | "hsl") => {
    let rgb: { r: number; g: number; b: number } | null = null;

    if (format === "hex") {
      const cleanHex = value.startsWith("#") ? value : "#" + value;
      rgb = hexToRgb(cleanHex);
      if (rgb) {
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
        setColor({ hex, rgb, hsl, cmyk });
      }
    } else if (format === "rgb") {
      const match = value.match(/(\d+),?\s*(\d+),?\s*(\d+)/);
      if (match) {
        rgb = {
          r: Math.min(255, parseInt(match[1]) || 0),
          g: Math.min(255, parseInt(match[2]) || 0),
          b: Math.min(255, parseInt(match[3]) || 0),
        };
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
        setColor({ hex, rgb, hsl, cmyk });
      }
    } else if (format === "hsl") {
      const match = value.match(/(\d+),?\s*(\d+)%?,?\s*(\d+)%?/);
      if (match) {
        const h = parseInt(match[1]);
        const s = Math.min(100, parseInt(match[2]) || 0);
        const l = Math.min(100, parseInt(match[3]) || 0);
        rgb = hslToRgb(h, s, l);
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
        const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
        setColor({ hex, rgb, hsl: { h, s, l }, cmyk });
      }
    }
  }, []);

  useEffect(() => {
    updateColor(input, activeFormat);
  }, [input, activeFormat, updateColor]);

  const copyValue = async (value: string, format: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(format);
    setTimeout(() => setCopied(null), 2000);
  };

  const ColorInput = ({ format, value }: { format: "hex" | "rgb" | "hsl"; value: string }) => (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setInput(e.target.value);
          setActiveFormat(format);
        }}
        placeholder={`Enter ${format}...`}
        className="flex-1 p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
      />
      <button
        onClick={() => copyValue(value, format)}
        className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
      >
        {copied === format ? "Copied!" : "Copy"}
      </button>
    </div>
  );

  return (
    <ToolLayout
      title="Color Converter"
      description="Convert between HEX, RGB, HSL, and CMYK color formats"
      icon="🎨"
    >
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div
              className="w-full h-48 rounded-xl border border-[var(--color-border)]"
              style={{ backgroundColor: color.hex }}
            />

            <div className="mt-4 space-y-3">
              <label className="text-sm font-medium">HEX</label>
              <ColorInput format="hex" value={color.hex} />
            </div>

            <div className="mt-4 space-y-3">
              <label className="text-sm font-medium">RGB</label>
              <ColorInput
                format="rgb"
                value={`${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`}
              />
            </div>

            <div className="mt-4 space-y-3">
              <label className="text-sm font-medium">HSL</label>
              <ColorInput
                format="hsl"
                value={`${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%`}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--color-border)]/20">
              <h3 className="font-medium mb-3">Color Values</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-[var(--color-fg-muted)]">HEX</span>
                  <span>{color.hex}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-fg-muted)]">RGB</span>
                  <span>rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-fg-muted)]">HSL</span>
                  <span>hsl({color.hsl.h}, {color.hsl.s}%, {color.hsl.l}%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-fg-muted)]">CMYK</span>
                  <span>cmyk({color.cmyk.c}%, {color.cmyk.m}%, {color.cmyk.y}%, {color.cmyk.k}%)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-border)]/20">
              <h3 className="font-medium mb-3">CSS Code</h3>
              <div className="space-y-2 text-sm font-mono">
                <div>
                  <span className="text-[var(--color-fg-muted)]">Background: </span>
                  <code className="text-[var(--color-accent)]">background: {color.hex};</code>
                </div>
                <div>
                  <span className="text-[var(--color-fg-muted)]">Color: </span>
                  <code className="text-[var(--color-accent)]">color: {color.hex};</code>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-border)]/20">
              <h3 className="font-medium mb-3">Quick Copy</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => copyValue(color.hex, "hex-value")}
                  className="px-3 py-1 rounded bg-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-black transition-colors text-sm"
                >
                  Copy HEX
                </button>
                <button
                  onClick={() => copyValue(`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`, "rgb-value")}
                  className="px-3 py-1 rounded bg-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-black transition-colors text-sm"
                >
                  Copy RGB
                </button>
                <button
                  onClick={() => copyValue(`hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`, "hsl-value")}
                  className="px-3 py-1 rounded bg-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-black transition-colors text-sm"
                >
                  Copy HSL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}