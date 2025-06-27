// app/api/push/route.ts
import { NextResponse } from "next/server";
import webpush from "web-push";

// Configure VAPID keys
webpush.setVapidDetails(
  "mailto:mail.sarojdangol@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { subscription, message } = await req.json();

    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "New Notification",
        body: message,
        icon: "/icon.png",
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Push notification error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
