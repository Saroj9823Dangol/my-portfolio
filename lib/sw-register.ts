export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("ServiceWorker registration successful");
      return registration;
    } catch (err) {
      console.error("ServiceWorker registration failed:", err);
      return null;
    }
  }
  return null;
}

export async function requestNotificationPermission() {
  if ("Notification" in window) {
    try {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    } catch (err) {
      console.error("Notification permission error:", err);
      return false;
    }
  }
  return false;
}
