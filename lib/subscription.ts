// lib/subscription.ts
export function saveSubscriptionToStorage(subscription: PushSubscription) {
  localStorage.setItem("pushSubscription", JSON.stringify(subscription));
}

export function getSubscriptionFromStorage(): PushSubscription | null {
  const sub = localStorage.getItem("pushSubscription");
  return sub ? JSON.parse(sub) : null;
}

export function removeSubscriptionFromStorage() {
  localStorage.removeItem("pushSubscription");
}
