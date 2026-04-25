"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

interface Match {
  text: string;
  index: number;
  groups: string[];
}

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [replaceWith, setReplaceWith] = useState("");
  const [error, setError] = useState("");

  const { matches, replaced } = useMemo(() => {
    setError("");
    
    if (!pattern.trim() || !testString.trim()) {
      return { matches: [], replaced: testString };
    }

    try {
      const regex = new RegExp(pattern, flags);
      const matches: Match[] = [];
      
      if (flags.includes("g")) {
        let match;
        while ((match = regex.exec(testString)) !== null) {
          matches.push({
            text: match[0],
            index: match.index,
            groups: match.slice(1),
          });
          if (!flags.includes("g")) break;
        }
      } else {
        const match = regex.exec(testString);
        if (match) {
          matches.push({
            text: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      let replaced = testString;
      if (replaceWith.trim()) {
        replaced = testString.replace(regex, replaceWith);
      }

      return { matches, replaced };
    } catch (e) {
      setError((e as Error).message);
      return { matches: [], replaced: testString };
    }
  }, [pattern, flags, testString, replaceWith]);

  const highlightedText = useMemo(() => {
    if (matches.length === 0) return testString;

    const parts: { text: string; isMatch: boolean }[] = [];
    let lastIndex = 0;

    matches.forEach((match) => {
      if (match.index > lastIndex) {
        parts.push({ text: testString.slice(lastIndex, match.index), isMatch: false });
      }
      parts.push({ text: match.text, isMatch: true });
      lastIndex = match.index + match.text.length;
    });

    if (lastIndex < testString.length) {
      parts.push({ text: testString.slice(lastIndex), isMatch: false });
    }

    return parts;
  }, [matches, testString]);

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions with live match highlighting"
      icon="🔍"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Pattern</label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Flags</label>
            <div className="flex gap-2">
              {["g", "i", "m", "s", "u"].map((flag) => (
                <button
                  key={flag}
                  onClick={() =>
                    setFlags((f) =>
                      f.includes(flag)
                        ? f.replace(flag, "")
                        : f + flag
                    )
                  }
                  className={[
                    "w-10 h-10 rounded-lg border font-mono font-bold",
                    flags.includes(flag)
                      ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-accent)]",
                  ].join(" ")}
                >
                  {flag}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2 text-xs text-[var(--color-fg-muted)]">
              <span>g: global</span>
              <span>i: case-insensitive</span>
              <span>m: multiline</span>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Test String</label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter text to test..."
            rows={6}
            className="w-full p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Highlighted Matches</label>
            <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] min-h-[150px] font-mono whitespace-pre-wrap break-all">
              {testString ? (
                Array.isArray(highlightedText) ? (
                  highlightedText.map((part, i) =>
                    part.isMatch ? (
                      <mark
                        key={i}
                        className="bg-[var(--color-accent)]/30 text-[var(--color-accent)] rounded px-0.5"
                      >
                        {part.text}
                      </mark>
                    ) : (
                      <span key={i}>{part.text}</span>
                    )
                  )
                ) : (
                  highlightedText
                )
              ) : (
                <span className="text-[var(--color-fg-muted)]">
                  Matches will be highlighted here...
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Capture Groups</label>
            <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] min-h-[150px]">
              {matches.length > 0 ? (
                <div className="space-y-3">
                  {matches.map((match, i) => (
                    <div key={i} className="p-2 rounded bg-[var(--color-border)]/20">
                      <div className="text-sm font-medium">
                        Match {i + 1}:{" "}
                        <span className="text-[var(--color-accent)]">
                          "{match.text}"
                        </span>
                      </div>
                      {match.groups.length > 0 && (
                        <div className="mt-1 text-xs space-y-1">
                          {match.groups.map((group, j) => (
                            <div key={j}>
                              Group {j + 1}:{" "}
                              <span className="text-[var(--color-fg-muted)]">
                                "{group || "(empty)"}"
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-[var(--color-fg-muted)]">
                  Capture groups will appear here...
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Replace With</label>
            <input
              type="text"
              value={replaceWith}
              onChange={(e) => setReplaceWith(e.target.value)}
              placeholder="Replacement string (optional)..."
              className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Replaced Output</label>
            <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono min-h-[50px]">
              {replaced || <span className="text-[var(--color-fg-muted)]">Output will appear here...</span>}
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-500">
            Error: {error}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}