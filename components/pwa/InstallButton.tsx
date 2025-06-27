// components/PWAInstallButton.tsx
"use client";

import { usePWAInstall } from "@/hooks/usePWAInstall";
import { Button } from "../ui/button";

export function PWAInstallButton() {
  const { isInstallable, install } = usePWAInstall();

  if (!isInstallable) return null;

  return <Button onClick={install}>Install App</Button>;
}
