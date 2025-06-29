"use client";

import { Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileGestures() {
  const [gestureActive, setGestureActive] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const [lastShake, setLastShake] = useState(0);

  useEffect(() => {
    let lastX = 0,
      lastY = 0,
      lastZ = 0;
    const shakeThreshold = 15;

    const handleDeviceMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;

      const {
        x = 0,
        y = 0,
        z = 0,
      } = {
        x: acceleration.x ?? 0,
        y: acceleration.y ?? 0,
        z: acceleration.z ?? 0,
      };
      const currentTime = Date.now();

      if (currentTime - lastShake > 1000) {
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        const deltaZ = Math.abs(z - lastZ);

        if (
          deltaX > shakeThreshold ||
          deltaY > shakeThreshold ||
          deltaZ > shakeThreshold
        ) {
          setGestureActive(true);
          setShakeCount((prev) => prev + 1);
          setLastShake(currentTime);

          // Haptic feedback simulation
          if ("vibrate" in navigator) {
            navigator.vibrate([50, 30, 50]);
          }

          // Create particle burst effect
          createParticleBurst();

          setTimeout(() => setGestureActive(false), 500);
        }
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    const createParticleBurst = () => {
      const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#10b981"];

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className =
          "fixed pointer-events-none z-50 w-2 h-2 rounded-full";
        particle.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = Math.random() * window.innerHeight + "px";
        particle.style.animation = "particle-burst 1s ease-out forwards";

        document.body.appendChild(particle);

        setTimeout(() => {
          document.body.removeChild(particle);
        }, 1000);
      }
    };

    // Request permission for device motion on iOS
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof (DeviceMotionEvent as any).requestPermission === "function"
    ) {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === "granted") {
            window.addEventListener("devicemotion", handleDeviceMotion);
          }
        });
    } else {
      window.addEventListener("devicemotion", handleDeviceMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [lastShake]);

  if (!gestureActive && shakeCount === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
      {gestureActive && (
        <div className="animate-ping">
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20"></div>
        </div>
      )}

      {shakeCount > 0 && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 text-white text-sm animate-bounce">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Shake detected! {shakeCount}</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
        </div>
      )}
    </div>
  );
}
