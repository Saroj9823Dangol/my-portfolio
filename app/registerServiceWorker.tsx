// app/registerServiceWorker.tsx
"use client";

import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) =>
          console.log("Service Worker registered:", registration),
        (error) => console.error("Service Worker registration failed:", error)
      );
    }
  }, []);

  return null;
}
