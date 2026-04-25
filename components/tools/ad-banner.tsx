"use client";

interface AdBannerProps {
  slot: string;
}

export function AdBanner({ slot }: AdBannerProps) {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full max-w-[728px] h-[90px] bg-[var(--color-border)]/30 rounded-lg flex items-center justify-center">
        <span className="text-sm text-[var(--color-fg-muted)]">
          Advertisement {slot}
        </span>
      </div>
    </div>
  );
}