import { NextResponse } from "next/server";
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:your@email.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { subscription, message } = await req.json();

    // In a real app, get subscription from your database
    // const subscriptions = await db.subscription.findMany();

    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "New Notification",
        body: message,
        icon: "/icons/icon-192x192.png",
        badge: "/icons/badge-72x72.png",
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Notification failed" },
      { status: 500 }
    );
  }
}
