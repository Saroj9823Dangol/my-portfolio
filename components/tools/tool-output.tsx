"use client";

import { useState, useCallback } from "react";

interface ToolOutputProps {
  label: string;
  value: string;
  isError?: boolean;
  isCode?: boolean;
}

export function ToolOutput({
  label,
  value,
  isError = false,
  isCode = false,
}: ToolOutputProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = useCallback(async () => {
    if (value) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setCopyError(false);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (err) {
        setCopyError(true);
        setTimeout(() => setCopyError(false), 2000);
      }
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[var(--color-fg)]">{label}</label>
        {value && (
          <button
            onClick={handleCopy}
            className={`text-sm px-2 py-1 rounded transition-all ${
              copied 
                ? "text-green-500 bg-green-500/10" 
                : copyError 
                  ? "text-red-500" 
                  : "text-[var(--color-accent)] hover:opacity-80"
            }`}
          >
            {copied ? "✓ Copied!" : copyError ? "Failed" : "Copy"}
          </button>
        )}
      </div>
      <div
        className={[
          "w-full p-4 rounded-lg border resize-y min-h-[100px]",
          isCode ? "font-mono text-sm" : "",
          isError
            ? "border-red-500 bg-red-500/10"
            : "border-[var(--color-border)] bg-[var(--color-bg)]",
        ].join(" ")}
      >
        <pre className="whitespace-pre-wrap break-all">{value || "Output will appear here..."}</pre>
      </div>
    </div>
  );
}