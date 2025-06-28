export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      return registration;
    } catch (err) {
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
      return false;
    }
  }
  return false;
}
