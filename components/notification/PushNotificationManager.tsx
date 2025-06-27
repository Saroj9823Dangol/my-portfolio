// components/notification/PushNotificationManager.tsx
"use client";

import { getSubscriptionFromStorage } from "@/lib/subscription";

export async function sendNotification(message: string) {
  try {
    // Get the subscription from your storage
    const subscription = await getSubscriptionFromStorage();

    if (!subscription) {
      throw new Error("No subscription available");
    }

    const response = await fetch("/api/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription, message }),
    });

    return await response.json();
  } catch (error) {
    console.error("Notification error:", error);
    return { success: false, error: "Notification failed" };
  }
}
