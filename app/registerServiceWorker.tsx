// app/registerServiceWorker.tsx
"use client";

import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => (error: any) => {});
    }
  }, []);

  return null;
}
