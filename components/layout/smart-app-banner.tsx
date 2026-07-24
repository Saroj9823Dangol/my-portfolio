"use client";

import { useState, useEffect, useCallback } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.apptechnologies.arena";
const APP_STORE = ""; // Add your iOS App Store URL when available
const IOS_BUNDLE_ID = "com.apptechnologies.arena";

function getStoreUrl(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return APP_STORE || PLAY_STORE;
  return PLAY_STORE;
}

function getDeepLink(): string {
  return window.location.href.replace(/^https?:\/\//, "https://");
}

export function SmartAppBanner() {
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    const dismissed = sessionStorage.getItem("app-banner-dismissed");

    if (isMobile && !standalone && !dismissed) {
      setIsIOS(/iPhone|iPad|iPod/i.test(ua));
      setIsAndroid(/Android/i.test(ua));
      setVisible(true);
    }
  }, []);

  const openApp = useCallback(() => {
    const deepLink = getDeepLink();
    const storeUrl = getStoreUrl();

    // Try opening the app via intent URI (Android)
    if (isAndroid) {
      const intentUrl = `intent://${window.location.pathname}${window.location.search}#Intent;scheme=https;package=com.apptechnologies.arena;end`;

      // Track if page goes to background (app opened)
      let appOpened = false;

      const onVisibilityChange = () => {
        if (document.hidden) {
          appOpened = true;
          document.removeEventListener("visibilitychange", onVisibilityChange);
        }
      };

      const onTimeout = () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
        if (!appOpened) {
          window.location.href = storeUrl;
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);
      window.location.href = intentUrl;
      setTimeout(onTimeout, 2500);
      return;
    }

    // iOS: Universal Links handle this automatically
    // If we're here, app isn't installed — go to App Store
    if (isIOS && APP_STORE) {
      window.location.href = APP_STORE;
      return;
    }

    // Fallback: go to store
    window.location.href = storeUrl;
  }, [isAndroid, isIOS]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("app-banner-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl flex-shrink-0">🏟️</span>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate">Arena Pro</p>
            <p className="text-xs text-blue-100 truncate">
              Get the full experience in the app
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={openApp}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            Open
          </button>
          <a
            href={getStoreUrl()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium border border-blue-400 hover:bg-blue-400 transition-colors"
          >
            Get App
          </a>
          <button
            onClick={dismiss}
            className="p-1 text-blue-200 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
