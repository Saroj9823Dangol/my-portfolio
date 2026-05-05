import { NextRequest, NextResponse } from "next/server";

// Cache rates for 1 hour to avoid hammering free APIs
const cache = new Map<string, { rate: number; ts: number }>();
const CACHE_TTL = 60 * 60 * 1000;

async function fetchRate(from: string, to: string): Promise<number> {
  if (from === to) return 1;

  const key = `${from}_${to}`;
  const cached = cache.get(key);
  if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.rate;

  // Primary: open.er-api.com (free, no key)
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.result === "success" && data.rates?.[to]) {
        const rate = data.rates[to];
        cache.set(key, { rate, ts: Date.now() });
        return rate;
      }
    }
  } catch {}

  // Fallback: frankfurter.app (free, no key)
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${from}&to=${to}`
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates?.[to]) {
        const rate = data.rates[to];
        cache.set(key, { rate, ts: Date.now() });
        return rate;
      }
    }
  } catch {}

  throw new Error("All rate sources failed");
}

export async function GET(request: NextRequest) {
  const from = (request.nextUrl.searchParams.get("from") || "USD").toUpperCase();
  const to = (request.nextUrl.searchParams.get("to") || "NPR").toUpperCase();

  try {
    const rate = await fetchRate(from, to);
    return NextResponse.json({ success: true, conversion_rate: rate });
  } catch {
    return NextResponse.json(
      { success: false, error: "Rate unavailable" },
      { status: 503 }
    );
  }
}
