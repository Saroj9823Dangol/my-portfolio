"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";
import { ToolInput } from "@/components/tools/tool-input";
import { ToolOutput } from "@/components/tools/tool-output";

type FormatMode = "beautify" | "minify" | "validate";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<FormatMode>("beautify");
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState("");

  const processJson = () => {
    setError("");
    
    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      
      if (mode === "beautify") {
        setOutput(JSON.stringify(parsed, null, indent));
      } else if (mode === "minify") {
        setOutput(JSON.stringify(parsed));
      } else if (mode === "validate") {
        setOutput("Valid JSON ✓");
      }
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const sortKeys = () => {
    try {
      const parsed = JSON.parse(input);
      const sorted = sortObjectKeys(parsed);
      setInput(JSON.stringify(sorted, null, indent));
    } catch {
      // Ignore - will show error anyway
    }
  };

  const sortObjectKeys = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
      return obj.map(sortObjectKeys);
    }
    if (obj !== null && typeof obj === "object") {
      return Object.keys(obj as Record<string, unknown>)
        .sort()
        .reduce((result, key) => {
          result[key] = sortObjectKeys((obj as Record<string, unknown>)[key]);
          return result;
        }, {} as Record<string, unknown>);
    }
    return obj;
  };

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, beautify, minify, and validate JSON data"
      icon="📋"
    >
      <div className="flex flex-wrap gap-3 mb-4">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as FormatMode)}
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="beautify">Beautify</option>
          <option value="minify">Minify</option>
          <option value="validate">Validate Only</option>
        </select>

        {(mode === "beautify" || mode === "minify") && (
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={1}>1 tab</option>
          </select>
        )}

        <button
          onClick={processJson}
          className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
        >
          Format
        </button>

        <button
          onClick={sortKeys}
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
        >
          Sort Keys
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ToolInput
          label="Input JSON"
          placeholder='{"key": "value"}'
          value={input}
          onChange={setInput}
          rows={12}
          isCode
        />
        <ToolOutput
          label="Output"
          value={error ? `Error: ${error}` : output}
          isError={!!error}
          isCode
        />
      </div>
    </ToolLayout>
  );
}