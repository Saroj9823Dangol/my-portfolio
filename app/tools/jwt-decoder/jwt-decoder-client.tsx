"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/tools/tool-layout";

interface JWTParts {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4;
  if (pad) {
    base64 += '='.repeat(4 - pad);
  }
  return atob(base64);
}

function decodeJWT(token: string): JWTParts | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));
    const signature = parts[2];

    return { header, payload, signature };
  } catch {
    return null;
  }
}

function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

function isExpired(exp: number): boolean {
  return exp * 1000 < Date.now();
}

function getTimeRemaining(exp: number): string {
  const now = Date.now();
  const expMs = exp * 1000;
  const diff = expMs - now;

  if (diff < 0) {
    const absDiff = Math.abs(diff);
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `Expired ${days}d ${hours}h ago`;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  }
  return `${hours}h remaining`;
}

export default function JwtDecoderClient() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState<JWTParts | null>(null);
  const [error, setError] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleDecode = useCallback(() => {
    setError("");
    setDecoded(null);

    if (!token.trim()) {
      return;
    }

    const tokens = token.trim().split('\n').filter(t => t.trim());
    
    if (tokens.length > 1) {
      const results: JWTParts[] = [];
      let hasError = false;
      
      for (const t of tokens) {
        const decodedToken = decodeJWT(t.trim());
        if (decodedToken) {
          results.push(decodedToken);
        } else {
          hasError = true;
        }
      }
      
      if (results.length > 0) {
        setDecoded({
          header: { count: results.length },
          payload: { tokens: results.map((r, i) => ({ ...r.payload, _index: i + 1 })) },
          signature: `${results.length} tokens`
        });
      }
      
      if (hasError) {
        setError("Some tokens could not be decoded");
      }
      return;
    }

    const result = decodeJWT(token.trim());
    if (result) {
      setDecoded(result);
    } else {
      setError("Invalid JWT format. Expected: header.payload.signature");
    }
  }, [token]);

  const clearAll = () => {
    setToken("");
    setDecoded(null);
    setError("");
    setCopiedField(null);
  };

  const copyValue = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode and inspect JSON Web Tokens"
      icon="🔑"
    >
      <div className="space-y-4">
        <div className="flex gap-3">
          <button
            onClick={handleDecode}
            className="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition-opacity"
          >
            Decode JWT
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-red-500 transition-colors text-red-500"
          >
            Clear
          </button>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">JWT Token</label>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste your JWT token here..."
            rows={6}
            className="w-full p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] font-mono text-sm"
          />
        </div>

        {decoded && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Header</label>
                  <button
                    onClick={() => copyValue(JSON.stringify(decoded.header, null, 2), "header")}
                    className="text-sm text-[var(--color-accent)] hover:opacity-80"
                  >
                    {copiedField === "header" ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm">
                  <pre className="whitespace-pre-wrap break-all">
                    {JSON.stringify(decoded.header, null, 2)}
                  </pre>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Payload</label>
                  <button
                    onClick={() => copyValue(JSON.stringify(decoded.payload, null, 2), "payload")}
                    className="text-sm text-[var(--color-accent)] hover:opacity-80"
                  >
                    {copiedField === "payload" ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm max-h-[300px] overflow-auto">
                  <pre className="whitespace-pre-wrap break-all">
                    {JSON.stringify(decoded.payload, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Signature</label>
                <button
                  onClick={() => copyValue(decoded.signature, "signature")}
                  className="text-sm text-[var(--color-accent)] hover:opacity-80"
                >
                  {copiedField === "signature" ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <div className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-xs break-all">
                {decoded.signature}
              </div>
            </div>

            {decoded.payload.iat && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {decoded.payload.iat && (
                  <div className="p-3 rounded-lg bg-[var(--color-border)]/20">
                    <div className="text-xs text-[var(--color-fg-muted)]">Issued At</div>
                    <div className="text-sm">{formatTimestamp(decoded.payload.iat as number)}</div>
                  </div>
                )}
                {decoded.payload.exp && (
                  <div className={`p-3 rounded-lg ${isExpired(decoded.payload.exp as number) ? 'bg-red-500/10' : 'bg-[var(--color-border)]/20'}`}>
                    <div className="text-xs text-[var(--color-fg-muted)]">Expires</div>
                    <div className={`text-sm ${isExpired(decoded.payload.exp as number) ? 'text-red-500' : ''}`}>
                      {formatTimestamp(decoded.payload.exp as number)}
                    </div>
                    <div className="text-xs mt-1">
                      {getTimeRemaining(decoded.payload.exp as number)}
                    </div>
                  </div>
                )}
                {decoded.payload.nbf && (
                  <div className="p-3 rounded-lg bg-[var(--color-border)]/20">
                    <div className="text-xs text-[var(--color-fg-muted)]">Not Before</div>
                    <div className="text-sm">{formatTimestamp(decoded.payload.nbf as number)}</div>
                  </div>
                )}
                {decoded.payload.sub && (
                  <div className="p-3 rounded-lg bg-[var(--color-border)]/20">
                    <div className="text-xs text-[var(--color-fg-muted)]">Subject</div>
                    <div className="text-sm truncate">{decoded.payload.sub as string}</div>
                  </div>
                )}
              </div>
            )}

            {decoded.header.alg && (
              <div className="p-3 rounded-lg bg-[var(--color-border)]/20">
                <div className="text-xs text-[var(--color-fg-muted)]">Algorithm</div>
                <div className="text-sm">{decoded.header.alg as string}</div>
              </div>
            )}
          </>
        )}

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-500">
            {error}
          </div>
        )}

        <div className="mt-6 p-4 rounded-lg bg-[var(--color-border)]/20 text-sm">
          <h3 className="font-medium mb-2">Quick Tips:</h3>
          <ul className="list-disc list-inside text-[var(--color-fg-muted)] space-y-1">
            <li>Paste a JWT token to decode its header and payload</li>
            <li>The signature is displayed but cannot be verified without the secret key</li>
            <li>Check token expiration (exp) to see if it's still valid</li>
            <li>All processing happens in your browser - your data never leaves your device</li>
            <li>Supports bulk decoding (one token per line)</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}