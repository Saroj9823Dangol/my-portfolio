"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";
import { ToolInput } from "@/components/tools/tool-input";
import { ToolOutput } from "@/components/tools/tool-output";

type Mode = "encode" | "decode";

export default function Base64EncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [error, setError] = useState("");

  const processBase64 = useCallback(() => {
    setError("");
    
    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        const decoded = decodeURIComponent(escape(atob(input)));
        setOutput(decoded);
      }
    } catch (e) {
      setError(mode === "decode" ? "Invalid Base64 string" : "Failed to encode");
      setOutput("");
    }
  }, [input, mode]);

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const swapValues = () => {
    setInput(output);
    setOutput(input);
    setMode(mode === "encode" ? "decode" : "encode");
    setError("");
  };

  return (
    <ToolLayout
      title="Base64 Encoder/Decoder"
      description="Encode plain text to Base64 or decode Base64 to plain text"
      icon="🔐"
    >
      <div className="flex flex-wrap gap-3 mb-4">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>

        <button
          onClick={processBase64}
          className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
        >
          {mode === "encode" ? "Encode" : "Decode"}
        </button>

        <button
          onClick={swapValues}
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
          title="Swap input and output"
        >
          Swap ↕
        </button>

        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-red-500 transition-colors text-red-500"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ToolInput
          label={mode === "encode" ? "Plain Text" : "Base64 String"}
          placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
          value={input}
          onChange={handleInputChange}
          rows={12}
          isCode
        />
        <ToolOutput
          label={mode === "encode" ? "Base64 Output" : "Decoded Text"}
          value={error ? `Error: ${error}` : output}
          isError={!!error}
          isCode
        />
      </div>

      <div className="mt-6 p-4 rounded-lg bg-[var(--color-border)]/20 text-sm">
        <h3 className="font-medium mb-2">Quick Tips:</h3>
        <ul className="list-disc list-inside text-[var(--color-fg-muted)] space-y-1">
          <li>You can also drag and drop text files directly into the input field</li>
          <li>Use Swap to quickly reverse the encoding direction</li>
          <li>All processing happens locally in your browser - your data never leaves your device</li>
        </ul>
      </div>
    </ToolLayout>
  );
}