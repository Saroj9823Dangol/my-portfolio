"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

type HashType = "MD5" | "SHA-1" | "SHA-256" | "SHA-512";

export default function HashGeneratorClient() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<HashType, string>>({
    "MD5": "",
    "SHA-1": "",
    "SHA-256": "",
    "SHA-512": "",
  });
  const [copied, setCopied] = useState<HashType | null>(null);

  const generateHashes = useCallback(async () => {
    if (!input.trim()) {
      setHashes({ "MD5": "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    setHashes((prev) => ({ ...prev, "SHA-256": hashHex }));

    const sha1Buffer = await crypto.subtle.digest("SHA-1", data);
    const sha1Array = Array.from(new Uint8Array(sha1Buffer));
    const sha1Hex = sha1Array.map((b) => b.toString(16).padStart(2, "0")).join("");
    setHashes((prev) => ({ ...prev, "SHA-1": sha1Hex }));

    const sha512Buffer = await crypto.subtle.digest("SHA-512", data);
    const sha512Array = Array.from(new Uint8Array(sha512Buffer));
    const sha512Hex = sha512Array.map((b) => b.toString(16).padStart(2, "0")).join("");
    setHashes((prev) => ({ ...prev, "SHA-512": sha512Hex }));

    const md5Hash = md5(input);
    setHashes((prev) => ({ ...prev, "MD5": md5Hash }));
  }, [input]);

  const copyHash = async (type: HashType) => {
    if (hashes[type]) {
      await navigator.clipboard.writeText(hashes[type]);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const clearAll = () => {
    setInput("");
    setHashes({ "MD5": "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
  };

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate MD5, SHA-1, SHA-256, and SHA-512 hashes"
      icon="#️⃣"
    >
      <div className="space-y-4">
        <div className="flex gap-3">
          <button
            onClick={generateHashes}
            className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
          >
            Generate Hashes
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-red-500 transition-colors text-red-500"
          >
            Clear
          </button>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Input Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash..."
            rows={4}
            className="w-full p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(["SHA-256", "SHA-512", "SHA-1", "MD5"] as HashType[]).map((type) => (
            <div key={type} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">{type}</label>
                {hashes[type] && (
                  <button
                    onClick={() => copyHash(type)}
                    className="text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                  >
                    {copied === type ? "Copied!" : "Copy"}
                  </button>
                )}
              </div>
              <div className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-xs break-all min-h-[60px]">
                {hashes[type] || <span className="text-[var(--color-fg-muted)]">Hash will appear here...</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-[var(--color-border)]/20 text-sm">
          <h3 className="font-medium mb-2">Quick Tips:</h3>
          <ul className="list-disc list-inside text-[var(--color-fg-muted)] space-y-1">
            <li>All hashes are generated using the Web Crypto API</li>
            <li>SHA-256 and SHA-512 are the most secure options</li>
            <li>MD5 is provided for backward compatibility but not recommended for security</li>
            <li>Processing happens entirely in your browser - your data never leaves your device</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}

function md5(str: string): string {
  // Encode string as UTF-8 bytes
  const bytes = new TextEncoder().encode(str);
  const len = bytes.length;

  // Build 32-bit little-endian word array with MD5 padding
  const bitLen = len * 8;
  const padLen = ((len + 8) >>> 6) + 1; // number of 16-word blocks
  const words = new Int32Array(padLen * 16);
  for (let i = 0; i < len; i++) {
    words[i >> 2] |= bytes[i] << ((i & 3) * 8);
  }
  words[len >> 2] |= 0x80 << ((len & 3) * 8);
  words[padLen * 16 - 2] = bitLen;

  const add = (x: number, y: number) => (x + y) | 0;
  const rol = (n: number, s: number) => (n << s) | (n >>> (32 - s));

  const F = (b: number, c: number, d: number) => (b & c) | (~b & d);
  const G = (b: number, c: number, d: number) => (b & d) | (c & ~d);
  const H = (b: number, c: number, d: number) => b ^ c ^ d;
  const I = (b: number, c: number, d: number) => c ^ (b | ~d);

  const step = (fn: (b: number, c: number, d: number) => number, a: number, b: number, c: number, d: number, x: number, s: number, t: number) =>
    add(rol(add(add(a, fn(b, c, d)), add(x, t)), s), b);

  let a = 0x67452301, b = 0xefcdab89, c = 0x98badcfe, d = 0x10325476;

  for (let i = 0; i < words.length; i += 16) {
    const [oa, ob, oc, od] = [a, b, c, d];
    const w = (j: number) => words[i + j];

    a = step(F, a,b,c,d, w(0),  7, 0xd76aa478); d = step(F, d,a,b,c, w(1), 12, 0xe8c7b756);
    c = step(F, c,d,a,b, w(2), 17, 0x242070db); b = step(F, b,c,d,a, w(3), 22, 0xc1bdceee);
    a = step(F, a,b,c,d, w(4),  7, 0xf57c0faf); d = step(F, d,a,b,c, w(5), 12, 0x4787c62a);
    c = step(F, c,d,a,b, w(6), 17, 0xa8304613); b = step(F, b,c,d,a, w(7), 22, 0xfd469501);
    a = step(F, a,b,c,d, w(8),  7, 0x698098d8); d = step(F, d,a,b,c, w(9), 12, 0x8b44f7af);
    c = step(F, c,d,a,b, w(10),17, 0xffff5bb1); b = step(F, b,c,d,a, w(11),22, 0x895cd7be);
    a = step(F, a,b,c,d, w(12), 7, 0x6b901122); d = step(F, d,a,b,c, w(13),12, 0xfd987193);
    c = step(F, c,d,a,b, w(14),17, 0xa679438e); b = step(F, b,c,d,a, w(15),22, 0x49b40821);

    a = step(G, a,b,c,d, w(1),  5, 0xf61e2562); d = step(G, d,a,b,c, w(6),  9, 0xc040b340);
    c = step(G, c,d,a,b, w(11),14, 0x265e5a51); b = step(G, b,c,d,a, w(0), 20, 0xe9b6c7aa);
    a = step(G, a,b,c,d, w(5),  5, 0xd62f105d); d = step(G, d,a,b,c, w(10), 9, 0x02441453);
    c = step(G, c,d,a,b, w(15),14, 0xd8a1e681); b = step(G, b,c,d,a, w(4), 20, 0xe7d3fbc8);
    a = step(G, a,b,c,d, w(9),  5, 0x21e1cde6); d = step(G, d,a,b,c, w(14), 9, 0xc33707d6);
    c = step(G, c,d,a,b, w(3), 14, 0xf4d50d87); b = step(G, b,c,d,a, w(8), 20, 0x455a14ed);
    a = step(G, a,b,c,d, w(13), 5, 0xa9e3e905); d = step(G, d,a,b,c, w(2),  9, 0xfcefa3f8);
    c = step(G, c,d,a,b, w(7), 14, 0x676f02d9); b = step(G, b,c,d,a, w(12),20, 0x8d2a4c8a);

    a = step(H, a,b,c,d, w(5),  4, 0xfffa3942); d = step(H, d,a,b,c, w(8), 11, 0x8771f681);
    c = step(H, c,d,a,b, w(11),16, 0x6d9d6122); b = step(H, b,c,d,a, w(14),23, 0xfde5380c);
    a = step(H, a,b,c,d, w(1),  4, 0xa4beea44); d = step(H, d,a,b,c, w(4), 11, 0x4bdecfa9);
    c = step(H, c,d,a,b, w(7), 16, 0xf6bb4b60); b = step(H, b,c,d,a, w(10),23, 0xbebfbc70);
    a = step(H, a,b,c,d, w(13), 4, 0x289b7ec6); d = step(H, d,a,b,c, w(0), 11, 0xeaa127fa);
    c = step(H, c,d,a,b, w(3), 16, 0xd4ef3085); b = step(H, b,c,d,a, w(6), 23, 0x04881d05);
    a = step(H, a,b,c,d, w(9),  4, 0xd9d4d039); d = step(H, d,a,b,c, w(12),11, 0xe6db99e5);
    c = step(H, c,d,a,b, w(15),16, 0x1fa27cf8); b = step(H, b,c,d,a, w(2), 23, 0xc4ac5665);

    a = step(I, a,b,c,d, w(0),  6, 0xf4292244); d = step(I, d,a,b,c, w(7), 10, 0x432aff97);
    c = step(I, c,d,a,b, w(14),15, 0xab9423a7); b = step(I, b,c,d,a, w(5), 21, 0xfc93a039);
    a = step(I, a,b,c,d, w(12), 6, 0x655b59c3); d = step(I, d,a,b,c, w(3), 10, 0x8f0ccc92);
    c = step(I, c,d,a,b, w(10),15, 0xffeff47d); b = step(I, b,c,d,a, w(1), 21, 0x85845dd1);
    a = step(I, a,b,c,d, w(8),  6, 0x6fa87e4f); d = step(I, d,a,b,c, w(15),10, 0xfe2ce6e0);
    c = step(I, c,d,a,b, w(6), 15, 0xa3014314); b = step(I, b,c,d,a, w(13),21, 0x4e0811a1);
    a = step(I, a,b,c,d, w(4),  6, 0xf7537e82); d = step(I, d,a,b,c, w(11),10, 0xbd3af235);
    c = step(I, c,d,a,b, w(2), 15, 0x2ad7d2bb); b = step(I, b,c,d,a, w(9), 21, 0xeb86d391);

    a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
  }

  // Output as little-endian hex
  const hex = (n: number) =>
    [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

  return hex(a) + hex(b) + hex(c) + hex(d);
}