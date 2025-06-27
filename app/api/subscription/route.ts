import { NextResponse } from "next/server";
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:mail.sarojdangol@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { subscription } = await req.json();

    // In a real app, store subscription in your database
    // await db.subscription.create({ data: subscription });

    // Test notification
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Welcome!",
        body: "Thanks for subscribing to notifications",
        icon: "/icons/icon-192x192.png",
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Subscription failed" },
      { status: 500 }
    );
  }
}
