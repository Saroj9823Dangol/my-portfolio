"use client";

import { useState, useRef, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

// ── Conversions ───────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = (t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  return [Math.round(hue(h + 1/3) * 255), Math.round(hue(h) * 255), Math.round(hue(h - 1/3) * 255)];
}

function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
  let c = 1 - r/255, m = 1 - g/255, y = 1 - b/255;
  const k = Math.min(c, m, y);
  if (k === 1) return [0, 0, 0, 100];
  return [
    Math.round(((c - k) / (1 - k)) * 100),
    Math.round(((m - k) / (1 - k)) * 100),
    Math.round(((y - k) / (1 - k)) * 100),
    Math.round(k * 100),
  ];
}

function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
  c /= 100; m /= 100; y /= 100; k /= 100;
  return [
    Math.round(255 * (1 - c) * (1 - k)),
    Math.round(255 * (1 - m) * (1 - k)),
    Math.round(255 * (1 - y) * (1 - k)),
  ];
}

// Derive all formats from an RGB triple
function fromRgb(r: number, g: number, b: number) {
  const hex = rgbToHex(r, g, b);
  const [h, s, l] = rgbToHsl(r, g, b);
  const [c, cm, y, k] = rgbToCmyk(r, g, b);
  return { hex, r, g, b, h, s, l, c, m: cm, y, k };
}

type Color = ReturnType<typeof fromRgb>;

const INITIAL = fromRgb(59, 130, 246); // #3b82f6

// ── Small helpers ─────────────────────────────────────────────────────────────

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ColorConverterClient() {
  const [color, setColor] = useState<Color>(INITIAL);

  // Individual text fields for each component
  const [hexText, setHexText] = useState(INITIAL.hex);
  const [rText, setRText] = useState(String(INITIAL.r));
  const [gText, setGText] = useState(String(INITIAL.g));
  const [bText, setBText] = useState(String(INITIAL.b));
  const [hText, setHText] = useState(String(INITIAL.h));
  const [sText, setSText] = useState(String(INITIAL.s));
  const [lText, setLText] = useState(String(INITIAL.l));
  const [cText, setCText] = useState(String(INITIAL.c));
  const [mText, setMText] = useState(String(INITIAL.m));
  const [yText, setYText] = useState(String(INITIAL.y));
  const [kText, setKText] = useState(String(INITIAL.k));

  const [copied, setCopied] = useState<string | null>(null);

  // Track which field is focused
  const focused = useRef<string | null>(null);

  const applyColor = useCallback((next: Color) => {
    setColor(next);
    if (focused.current !== "hex") setHexText(next.hex);
    if (focused.current !== "r") setRText(String(next.r));
    if (focused.current !== "g") setGText(String(next.g));
    if (focused.current !== "b") setBText(String(next.b));
    if (focused.current !== "h") setHText(String(next.h));
    if (focused.current !== "s") setSText(String(next.s));
    if (focused.current !== "l") setLText(String(next.l));
    if (focused.current !== "c") setCText(String(next.c));
    if (focused.current !== "m") setMText(String(next.m));
    if (focused.current !== "y") setYText(String(next.y));
    if (focused.current !== "k") setKText(String(next.k));
  }, []);

  // Picker change → derive everything
  const onPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rgb = hexToRgb(e.target.value);
    if (rgb) applyColor(fromRgb(...rgb));
  };

  // HEX field typing
  const onHexChange = (v: string) => {
    setHexText(v);
    const rgb = hexToRgb(v);
    if (rgb) applyColor(fromRgb(...rgb));
  };

  // RGB individual fields
  const updateFromRgbFields = (r: string, g: string, b: string) => {
    const rn = parseInt(r), gn = parseInt(g), bn = parseInt(b);
    if (!isNaN(rn) && !isNaN(gn) && !isNaN(bn)) {
      applyColor(fromRgb(clamp(rn, 0, 255), clamp(gn, 0, 255), clamp(bn, 0, 255)));
    }
  };

  // HSL individual fields
  const updateFromHslFields = (h: string, s: string, l: string) => {
    const hn = parseInt(h), sn = parseInt(s), ln = parseInt(l);
    if (!isNaN(hn) && !isNaN(sn) && !isNaN(ln)) {
      const rgb = hslToRgb(clamp(hn, 0, 360), clamp(sn, 0, 100), clamp(ln, 0, 100));
      applyColor(fromRgb(...rgb));
    }
  };

  // CMYK individual fields
  const updateFromCmykFields = (c: string, m: string, y: string, k: string) => {
    const cn = parseInt(c), mn = parseInt(m), yn = parseInt(y), kn = parseInt(k);
    if (!isNaN(cn) && !isNaN(mn) && !isNaN(yn) && !isNaN(kn)) {
      const rgb = cmykToRgb(clamp(cn, 0, 100), clamp(mn, 0, 100), clamp(yn, 0, 100), clamp(kn, 0, 100));
      applyColor(fromRgb(...rgb));
    }
  };

  const copy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyBtn = (label: string, value: string, key: string) => (
    <button
      key={key}
      onClick={() => copy(value, key)}
      className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] text-sm transition-colors"
    >
      {copied === key ? "Copied" : label}
    </button>
  );

  const inputClass = "w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-center";
  const labelClass = "text-xs font-mono text-[var(--color-fg-muted)] uppercase text-center";

  return (
    <ToolLayout title="Color Picker" description="Pick a color and get all formats in real time" icon="Palette">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Color picker + preview */}
        <div className="flex items-center gap-4">
          <label className="cursor-pointer relative">
            <div
              className="w-20 h-20 rounded-xl border-2 border-[var(--color-border)] shadow-lg transition-colors"
              style={{ backgroundColor: color.hex }}
            />
            <input
              type="color"
              value={color.hex}
              onChange={onPickerChange}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              title="Pick a color"
            />
          </label>
          <div>
            <p className="text-2xl font-mono font-bold">{color.hex.toUpperCase()}</p>
            <p className="text-sm text-[var(--color-fg-muted)] mt-1">Click the swatch to open the color picker</p>
          </div>
        </div>

        {/* Editable fields */}
        <div className="space-y-4">

          {/* HEX */}
          <div>
            <p className={labelClass + " mb-1"}>HEX</p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={hexText}
                onFocus={() => { focused.current = "hex"; }}
                onBlur={() => { focused.current = null; setHexText(color.hex); }}
                onChange={(e) => onHexChange(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="#rrggbb"
              />
              <button onClick={() => copy(color.hex, "hex")} className="text-xs text-[var(--color-accent)] hover:opacity-70 w-12 text-right">
                {copied === "hex" ? "✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* RGB */}
          <div>
            <p className={labelClass + " mb-1"}>RGB</p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <input
                  type="number"
                  value={rText}
                  onFocus={() => { focused.current = "r"; }}
                  onBlur={() => { focused.current = null; setRText(String(color.r)); }}
                  onChange={(e) => { setRText(e.target.value); updateFromRgbFields(e.target.value, gText, bText); }}
                  className={inputClass}
                  placeholder="R"
                  min={0}
                  max={255}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={gText}
                  onFocus={() => { focused.current = "g"; }}
                  onBlur={() => { focused.current = null; setGText(String(color.g)); }}
                  onChange={(e) => { setGText(e.target.value); updateFromRgbFields(rText, e.target.value, bText); }}
                  className={inputClass}
                  placeholder="G"
                  min={0}
                  max={255}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={bText}
                  onFocus={() => { focused.current = "b"; }}
                  onBlur={() => { focused.current = null; setBText(String(color.b)); }}
                  onChange={(e) => { setBText(e.target.value); updateFromRgbFields(rText, gText, e.target.value); }}
                  className={inputClass}
                  placeholder="B"
                  min={0}
                  max={255}
                />
              </div>
            </div>
            <button onClick={() => copy(`rgb(${color.r}, ${color.g}, ${color.b})`, "rgb")} className="text-xs text-[var(--color-accent)] hover:opacity-70 mt-1">
              {copied === "rgb" ? "Copied" : "Copy rgb()"}
            </button>
          </div>

          {/* HSL */}
          <div>
            <p className={labelClass + " mb-1"}>HSL</p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <input
                  type="number"
                  value={hText}
                  onFocus={() => { focused.current = "h"; }}
                  onBlur={() => { focused.current = null; setHText(String(color.h)); }}
                  onChange={(e) => { setHText(e.target.value); updateFromHslFields(e.target.value, sText, lText); }}
                  className={inputClass}
                  placeholder="H"
                  min={0}
                  max={360}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={sText}
                  onFocus={() => { focused.current = "s"; }}
                  onBlur={() => { focused.current = null; setSText(String(color.s)); }}
                  onChange={(e) => { setSText(e.target.value); updateFromHslFields(hText, e.target.value, lText); }}
                  className={inputClass}
                  placeholder="S"
                  min={0}
                  max={100}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={lText}
                  onFocus={() => { focused.current = "l"; }}
                  onBlur={() => { focused.current = null; setLText(String(color.l)); }}
                  onChange={(e) => { setLText(e.target.value); updateFromHslFields(hText, sText, e.target.value); }}
                  className={inputClass}
                  placeholder="L"
                  min={0}
                  max={100}
                />
              </div>
            </div>
            <button onClick={() => copy(`hsl(${color.h}, ${color.s}%, ${color.l}%)`, "hsl")} className="text-xs text-[var(--color-accent)] hover:opacity-70 mt-1">
              {copied === "hsl" ? "Copied" : "Copy hsl()"}
            </button>
          </div>

          {/* CMYK */}
          <div>
            <p className={labelClass + " mb-1"}>CMYK</p>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <input
                  type="number"
                  value={cText}
                  onFocus={() => { focused.current = "c"; }}
                  onBlur={() => { focused.current = null; setCText(String(color.c)); }}
                  onChange={(e) => { setCText(e.target.value); updateFromCmykFields(e.target.value, mText, yText, kText); }}
                  className={inputClass}
                  placeholder="C"
                  min={0}
                  max={100}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={mText}
                  onFocus={() => { focused.current = "m"; }}
                  onBlur={() => { focused.current = null; setMText(String(color.m)); }}
                  onChange={(e) => { setMText(e.target.value); updateFromCmykFields(cText, e.target.value, yText, kText); }}
                  className={inputClass}
                  placeholder="M"
                  min={0}
                  max={100}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={yText}
                  onFocus={() => { focused.current = "y"; }}
                  onBlur={() => { focused.current = null; setYText(String(color.y)); }}
                  onChange={(e) => { setYText(e.target.value); updateFromCmykFields(cText, mText, e.target.value, kText); }}
                  className={inputClass}
                  placeholder="Y"
                  min={0}
                  max={100}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={kText}
                  onFocus={() => { focused.current = "k"; }}
                  onBlur={() => { focused.current = null; setKText(String(color.k)); }}
                  onChange={(e) => { setKText(e.target.value); updateFromCmykFields(cText, mText, yText, e.target.value); }}
                  className={inputClass}
                  placeholder="K"
                  min={0}
                  max={100}
                />
              </div>
            </div>
            <button onClick={() => copy(`cmyk(${color.c}%, ${color.m}%, ${color.y}%, ${color.k}%)`, "cmyk")} className="text-xs text-[var(--color-accent)] hover:opacity-70 mt-1">
              {copied === "cmyk" ? "Copied" : "Copy cmyk()"}
            </button>
          </div>
        </div>

        {/* Quick copy row */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]">
          {copyBtn(color.hex.toUpperCase(), color.hex, "qhex")}
          {copyBtn(`rgb(${color.r}, ${color.g}, ${color.b})`, `rgb(${color.r}, ${color.g}, ${color.b})`, "qrgb")}
          {copyBtn(`hsl(${color.h}, ${color.s}%, ${color.l}%)`, `hsl(${color.h}, ${color.s}%, ${color.l}%)`, "qhsl")}
          {copyBtn(`cmyk(${color.c}%, ${color.m}%, ${color.y}%, ${color.k}%)`, `cmyk(${color.c}%, ${color.m}%, ${color.y}%, ${color.k}%)`, "qcmyk")}
        </div>

      </div>
    </ToolLayout>
  );
}
