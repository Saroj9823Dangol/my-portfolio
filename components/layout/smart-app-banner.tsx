"use client";

import { useEffect } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.apptechnologies.arena";
const APP_STORE = ""; // Add your iOS App Store URL when available

function getStoreUrl(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return APP_STORE || PLAY_STORE;
  return PLAY_STORE;
}

export function SmartAppBanner() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;

    if (!isMobile || standalone) return;

    const isAndroid = /Android/i.test(ua);
    const storeUrl = getStoreUrl();

    if (isAndroid) {
      const intentUrl = `intent://${window.location.pathname}${window.location.search}#Intent;scheme=https;package=com.apptechnologies.arena;end`;

      let appOpened = false;

      const onVisibilityChange = () => {
        if (document.hidden) {
          appOpened = true;
          document.removeEventListener("visibilitychange", onVisibilityChange);
          window.location.href = storeUrl;
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);
      window.location.href = intentUrl;
    } else if (/iPhone|iPad|iPod/i.test(ua) && APP_STORE) {
      window.location.href = APP_STORE;
    }
  }, []);

  return null;
}
