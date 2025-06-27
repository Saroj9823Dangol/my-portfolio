import webpush from "web-push";

webpush.setVapidDetails(
  "<mailto:mail.sarojdangol@gmail.com>",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

import type { PushSubscription as WebPushSubscription } from "web-push";

let subscription: WebPushSubscription | null = null;

export async function subscribeUser(sub: any) {
  // Ensure the subscription object matches the web-push PushSubscription type
  if (
    typeof sub.endpoint === "string" &&
    sub.keys &&
    typeof sub.keys.p256dh === "string" &&
    typeof sub.keys.auth === "string"
  ) {
    subscription = {
      endpoint: sub.endpoint,
      expirationTime: sub.expirationTime ?? null,
      keys: {
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth,
      },
    };
    // In a production environment, you would want to store the subscription in a database
    // For example: await db.subscriptions.create({ data: sub })
    return { success: true };
  } else {
    return { success: false, error: "Invalid subscription object" };
  }
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
