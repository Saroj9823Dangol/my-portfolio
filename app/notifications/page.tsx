import { NotificationButton } from "@/components/notification/NotificationButton";
import { SendNotification } from "@/components/notification/SendNotification";

export default function NotificationsPage() {
  return (
    <main className="max-w-md mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Push Notifications Demo</h1>

      <section className="p-4 border rounded space-y-4">
        <h2 className="text-xl font-semibold">Step 1: Subscribe</h2>
        <p className="text-gray-600">
          Click the button below to enable push notifications.
        </p>
        <NotificationButton />
      </section>

      <section className="p-4 border rounded space-y-4">
        <h2 className="text-xl font-semibold">
          Step 2: Send Test Notification
        </h2>
        <p className="text-gray-600">
          After subscribing, you can send yourself a test notification.
        </p>
        <SendNotification />
      </section>
    </main>
  );
}
