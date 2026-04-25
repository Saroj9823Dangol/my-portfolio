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

function md5(string: string): string {
  function safeAdd(x: number, y: number) {
    const result = (x + y) & 0xffffffff;
    return result;
  }

  function rotateLeft(value: number, shift: number) {
    return (value << shift) | (value >>> (32 - shift));
  }

  function md5FF(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = safeAdd(a, safeAdd(safeAdd((b & c) | (~b & d), x), ac));
    return safeAdd(rotateLeft(a, s), b);
  }

  function md5GG(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = safeAdd(a, safeAdd(safeAdd((b & d) | (c & ~d), x), ac));
    return safeAdd(rotateLeft(a, s), b);
  }

  function md5HH(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = safeAdd(a, safeAdd(safeAdd(b ^ c ^ d, x), ac));
    return safeAdd(rotateLeft(a, s), b);
  }

  function md5II(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = safeAdd(a, safeAdd(safeAdd(c ^ (b | ~d), x), ac));
    return safeAdd(rotateLeft(a, s), b);
  }

  function convertToWordArray(str: string): number[] {
    const lWordCount = ((str.length + 8) >>> 6) + 1;
    const lWordArray = new Array(lWordCount * 16);
    let lBytePosition = 0;

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const byte = charCode & 0xff;
      const byte1 = (charCode >> 8) & 0xff;
      const byte2 = (charCode >> 16) & 0xff;
      const byte3 = (charCode >> 24) & 0xff;
      
      lWordArray[lBytePosition++] = byte | (byte1 << 8) | (byte2 << 16) | (byte3 << 24);
      lWordArray[lBytePosition++] = (byte1 >>> 8) | (byte2 << 8) | (byte3 << 16) | 0;
      lWordArray[lBytePosition++] = (byte2 >>> 16) | (byte3 << 8) | 0 | 0;
      lWordArray[lBytePosition++] = (byte3 >>> 24) | 0 | 0 | 0;
    }

    lWordArray[lBytePosition++] = 0x80;
    while (lBytePosition < lWordArray.length) {
      lWordArray[lBytePosition++] = 0;
    }

    return lWordArray;
  }

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  const x = convertToWordArray(string);

  const S1 = 7, S2 = 12, S3 = 17, S4 = 22;
  const S5 = 5, S6 = 9, S7 = 14, S8 = 20;
  const S9 = 4, S10 = 11, S11 = 16, S12 = 23;
  const S13 = 6, S14 = 10, S15 = 15, S16 = 21;

  for (let k = 0; k < x.length; k += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;

    a = md5FF(a, b, c, d, x[k + 0], S1, 0xd76aa478);
    d = md5FF(d, a, b, c, x[k + 1], S2, 0xe8c7b756);
    c = md5FF(c, d, a, b, x[k + 2], S3, 0x242070db);
    b = md5FF(b, c, d, a, x[k + 3], S4, 0xc1bdceee);
    a = md5FF(a, b, c, d, x[k + 4], S1, 0xf57c0faf);
    d = md5FF(d, a, b, c, x[k + 5], S2, 0x4787c62a);
    c = md5FF(c, d, a, b, x[k + 6], S3, 0xa8304613);
    b = md5FF(b, c, d, a, x[k + 7], S4, 0xfd469501);
    a = md5FF(a, b, c, d, x[k + 8], S1, 0x698098d8);
    d = md5FF(d, a, b, c, x[k + 9], S2, 0x8b44f7af);
    c = md5FF(c, d, a, b, x[k + 10], S3, 0xffff5bb1);
    b = md5FF(b, c, d, a, x[k + 11], S4, 0x895cd7be);
    a = md5FF(a, b, c, d, x[k + 12], S1, 0x6b901122);
    d = md5FF(d, a, b, c, x[k + 13], S2, 0xfd987193);
    c = md5FF(c, d, a, b, x[k + 14], S3, 0xa679438e);
    b = md5FF(b, c, d, a, x[k + 15], S4, 0x49b40821);

    a = md5GG(a, b, c, d, x[k + 1], S5, 0xf61e2562);
    d = md5GG(d, a, b, c, x[k + 6], S6, 0xc040b340);
    c = md5GG(c, d, a, b, x[k + 11], S7, 0x265e5a51);
    b = md5GG(b, c, d, a, x[k + 0], S8, 0xe9b6c7aa);
    a = md5GG(a, b, c, d, x[k + 5], S5, 0xd62f105d);
    d = md5GG(d, a, b, c, x[k + 10], S6, 0x2441453);
    c = md5GG(c, d, a, b, x[k + 15], S7, 0xd8a1e681);
    b = md5GG(b, c, d, a, x[k + 4], S8, 0xe7d3fbc8);
    a = md5GG(a, b, c, d, x[k + 9], S5, 0x21e1cde6);
    d = md5GG(d, a, b, c, x[k + 14], S6, 0xc33707d6);
    c = md5GG(c, d, a, b, x[k + 3], S7, 0xf4d50d87);
    b = md5GG(b, c, d, a, x[k + 8], S8, 0x455a14ed);
    a = md5GG(a, b, c, d, x[k + 13], S5, 0xa9e3e905);
    d = md5GG(d, a, b, c, x[k + 2], S6, 0xfcefa3f8);
    c = md5GG(c, d, a, b, x[k + 7], S7, 0x676f02d9);
    b = md5GG(b, c, d, a, x[k + 12], S8, 0x8d2a4c8a);

    a = md5HH(a, b, c, d, x[k + 5], S9, 0xfffa3942);
    d = md5HH(d, a, b, c, x[k + 8], S10, 0x8771f681);
    c = md5HH(c, d, a, b, x[k + 11], S11, 0x6d9d6122);
    b = md5HH(b, c, d, a, x[k + 14], S12, 0xfde5380c);
    a = md5HH(a, b, c, d, x[k + 1], S9, 0xa4beea44);
    d = md5HH(d, a, b, c, x[k + 4], S10, 0x4bdecfa9);
    c = md5HH(c, d, a, b, x[k + 7], S11, 0xf6bb4b60);
    b = md5HH(b, c, d, a, x[k + 10], S12, 0xbebfbc70);
    a = md5HH(a, b, c, d, x[k + 13], S9, 0x289b7ec6);
    d = md5HH(d, a, b, c, x[k + 0], S10, 0xeaa127fa);
    c = md5HH(c, d, a, b, x[k + 3], S11, 0xd4ef3085);
    b = md5HH(b, c, d, a, x[k + 6], S12, 0x48801d0);
    a = md5HH(a, b, c, d, x[k + 9], S9, 0xd9d4d3e9);
    d = md5HH(d, a, b, c, x[k + 12], S10, 0x1fa27cf8);
    c = md5HH(c, d, a, b, x[k + 15], S11, 0xc4ac5665);
    b = md5HH(b, c, d, a, x[k + 2], S12, 0xeb86d391);

    a = md5II(a, b, c, d, x[k + 0], S13, 0xf4292244);
    d = md5II(d, a, b, c, x[k + 7], S14, 0x432aff97);
    c = md5II(c, d, a, b, x[k + 14], S15, 0xab9423a7);
    b = md5II(b, c, d, a, x[k + 5], S16, 0xfc93a039);
    a = md5II(a, b, c, d, x[k + 12], S13, 0x655b59c3);
    d = md5II(d, a, b, c, x[k + 3], S14, 0x8f0ccc92);
    c = md5II(c, d, a, b, x[k + 10], S15, 0xffeff47d);
    b = md5II(b, c, d, a, x[k + 1], S16, 0x85845dd1);
    a = md5II(a, b, c, d, x[k + 8], S13, 0x6fa87e4f);
    d = md5II(d, a, b, c, x[k + 15], S14, 0xfe2ce6e0);
    c = md5II(c, d, a, b, x[k + 6], S15, 0xa3014314);
    b = md5II(b, c, d, a, x[k + 13], S16, 0x4e0811a1);
    a = md5II(a, b, c, d, x[k + 4], S13, 0xf7537e82);
    d = md5II(d, a, b, c, x[k + 11], S14, 0xbd3af235);
    c = md5II(c, d, a, b, x[k + 2], S15, 0x2ad7d2bb);
    b = md5II(b, c, d, a, x[k + 9], S16, 0xeb86d391);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  function toHex(value: number): string {
    let hex = "";
    for (let i = 0; i <= 3; i++) {
      const byte = (value >>> (i * 8)) & 255;
      hex = ("0" + byte.toString(16)).slice(-2) + hex;
    }
    return hex;
  }

  return toHex(a) + toHex(b) + toHex(c) + toHex(d);
}