"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

type UUIDVersion = "v4" | "v1-like";

function generateV4(): string {
  return crypto.randomUUID();
}

// v1-like: time-based using current timestamp + random node
function generateV1Like(): string {
  const now = Date.now();
  const timeHex = now.toString(16).padStart(12, "0");
  const rand = () => Math.floor(Math.random() * 0x10000).toString(16).padStart(4, "0");
  const node = Array.from({ length: 3 }, () => rand()).join("");
  // Format: time_low-time_mid-1xxx-8xxx-node
  const timeLow = timeHex.slice(-8);
  const timeMid = timeHex.slice(-12, -8);
  const timeHigh = "1" + Math.floor(Math.random() * 0xfff).toString(16).padStart(3, "0");
  const clockSeq = (0x8000 | (Math.floor(Math.random() * 0x3fff))).toString(16).padStart(4, "0");
  return `${timeLow}-${timeMid}-${timeHigh}-${clockSeq}-${node}`;
}

function generate(version: UUIDVersion): string {
  return version === "v4" ? generateV4() : generateV1Like();
}

export default function UuidGeneratorClient() {
  const [version, setVersion] = useState<UUIDVersion>("v4");
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generateUUIDs = useCallback(() => {
    const results = Array.from({ length: Math.min(count, 100) }, () => {
      const id = generate(version);
      return uppercase ? id.toUpperCase() : id;
    });
    setUuids(results);
  }, [version, count, uppercase]);

  const copyAll = async () => {
    if (uuids.length === 0) return;
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyOne = async (uuid: string) => {
    await navigator.clipboard.writeText(uuid);
  };

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate RFC 4122 UUIDs (v4 random, v1-like time-based)"
      icon="🆔"
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="text-sm font-medium mb-2 block">Version</label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value as UUIDVersion)}
              className="px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="v4">UUID v4 (random)</option>
              <option value="v1-like">UUID v1-like (time-based)</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Count</label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
              className="w-24 px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
            />
          </div>

          <div className="flex items-center gap-2 pb-2">
            <input
              type="checkbox"
              id="uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              className="w-4 h-4 accent-[var(--color-accent)]"
            />
            <label htmlFor="uppercase" className="text-sm font-medium cursor-pointer">
              Uppercase
            </label>
          </div>

          <button
            onClick={generateUUIDs}
            className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
          >
            Generate
          </button>

          {uuids.length > 0 && (
            <button
              onClick={copyAll}
              className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
            >
              {copied ? "✓ Copied!" : "Copy All"}
            </button>
          )}
        </div>

        {/* Output */}
        {uuids.length > 0 && (
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] divide-y divide-[var(--color-border)]">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3 group hover:bg-[var(--color-border)]/20 transition-colors"
              >
                <span className="font-mono text-sm">{uuid}</span>
                <button
                  onClick={() => copyOne(uuid)}
                  className="text-xs text-[var(--color-fg-muted)] opacity-0 group-hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}

        {uuids.length === 0 && (
          <div className="p-12 rounded-lg border border-dashed border-[var(--color-border)] text-center text-[var(--color-fg-muted)]">
            Click Generate to create UUIDs
          </div>
        )}

        <div className="p-4 rounded-lg bg-[var(--color-border)]/20 text-sm">
          <h3 className="font-medium mb-2">About UUIDs</h3>
          <ul className="list-disc list-inside text-[var(--color-fg-muted)] space-y-1">
            <li>v4 uses <code className="font-mono">crypto.randomUUID()</code> — cryptographically secure</li>
            <li>v1-like is time-based with a random node — not cryptographically secure</li>
            <li>All generation happens in your browser — nothing is sent to a server</li>
            <li>Max 100 UUIDs per batch</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}
