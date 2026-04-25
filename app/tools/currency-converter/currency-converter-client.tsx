"use client";

import { useState, useEffect, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "NPR", name: "Nepalese Rupee", symbol: "Rs" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr" },
];

export default function CurrencyConverterClient() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [result, setResult] = useState<string>("");
  const [rate, setRate] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchRate = useCallback(async () => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      setErrorMsg("");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(`/api/currency?from=${fromCurrency}&to=${toCurrency}`);
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setRate(data.conversion_rate);
          setErrorMsg("");
        } else {
          throw new Error("API failed");
        }
      } else {
        throw new Error("API error");
      }
    } catch {
      setErrorMsg("Rate unavailable");
      setRate(1);
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || amount === "") {
      setResult("");
      return;
    }

    const converted = fromCurrency === toCurrency 
      ? numAmount 
      : (numAmount / 100) * rate * 100;
    
    setResult(converted.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }));
  }, [amount, rate, fromCurrency, toCurrency]);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const refresh = () => {
    fetchRate();
  };

  const fromCurrencyData = currencies.find((c) => c.code === fromCurrency);
  const toCurrencyData = currencies.find((c) => c.code === toCurrency);

  return (
    <ToolLayout
      title="Currency Converter"
      description="Convert between USD, NPR, INR, EUR, GBP and more currencies"
      icon="💱"
    >
      <div className="max-w-2xl mx-auto">
        <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <span className="text-green-600 dark:text-green-400 font-medium">
                1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
              </span>
              <button
                onClick={refresh}
                disabled={loading}
                className="text-sm px-3 py-1 rounded border border-green-500 hover:bg-green-500/20 disabled:opacity-50"
              >
                {loading ? "Loading..." : "↻ Refresh"}
              </button>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-4 text-2xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono"
              />
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-end">
              <div>
                <label className="text-sm font-medium mb-2 block">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                  {currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} - {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={swap}
                className="p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors mb-[2px]"
              >
                ↔
              </button>

              <div>
                <label className="text-sm font-medium mb-2 block">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                  {currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} - {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {result && (
              <div className="mt-6 p-6 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-center">
                <div className="text-sm text-[var(--color-fg-muted)] mb-1">
                  {fromCurrencyData?.symbol}{parseFloat(amount).toLocaleString()} {fromCurrency} =
                </div>
                <div className="text-3xl font-bold text-[var(--color-accent)]">
                  {toCurrencyData?.symbol}{result} {toCurrency}
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500 text-yellow-500 text-sm text-center">
                {errorMsg}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-[var(--color-fg-muted)]">
          Rates from Budget API • {new Date().toLocaleString()}
        </div>
      </div>
    </ToolLayout>
  );
}