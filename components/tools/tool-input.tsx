"use client";

import { useState, useCallback } from "react";

interface ToolInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  isCode?: boolean;
}

export function ToolInput({
  label,
  placeholder,
  value,
  onChange,
  rows = 10,
  isCode = false,
}: ToolInputProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        const text = await file.text();
        onChange(text);
      }
    },
    [onChange]
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--color-fg)]">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        draggable
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={[
          "w-full p-4 rounded-lg border bg-[var(--color-bg)] resize-y",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]",
          "transition-colors duration-200",
          isCode
            ? "font-mono text-sm bg-[var(--color-bg)]"
            : "bg-[var(--color-bg)]",
          "border-[var(--color-border)] hover:border-[var(--color-accent)]/50",
        ].join(" ")}
      />
    </div>
  );
}