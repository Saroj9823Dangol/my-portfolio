"use client";

import {
  registerServiceWorker,
  requestNotificationPermission,
} from "@/lib/sw-register";
import { useState } from "react";

export function NotificationButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      // Request notification permission
      const hasPermission = await requestNotificationPermission();
      if (!hasPermission) {
        alert("Please enable notifications in your browser settings");
        return;
      }

      // Register service worker
      const registration = await registerServiceWorker();
      if (!registration) {
        throw new Error("Service worker registration failed");
      }

      // Subscribe to push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      });

      // Send subscription to server
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscription }),
      });

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      alert("Failed to subscribe to notifications");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={isSubscribed || isLoading}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      {isLoading
        ? "Processing..."
        : isSubscribed
        ? "Subscribed!"
        : "Enable Notifications"}
    </button>
  );
}
