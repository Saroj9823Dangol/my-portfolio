"use client";

import { useState } from "react";

export function SendNotification() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendNotification = async () => {
    if (!message.trim()) return;

    setIsSending(true);
    try {
      // In a real app, you would get the subscription from your database
      // For demo purposes, we'll get it from the service worker
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        alert("No active subscription found");
        return;
      }

      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscription, message }),
      });

      if (response.ok) {
        alert("Notification sent successfully!");
        setMessage("");
      } else {
        throw new Error("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      alert("Failed to send notification");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter notification message"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSendNotification}
        disabled={isSending || !message.trim()}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
      >
        {isSending ? "Sending..." : "Send Test Notification"}
      </button>
    </div>
  );
}
