"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Initializing Portfolio...";

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textTimer = setInterval(() => {
      setText((prev) => {
        if (prev.length >= fullText.length) {
          clearInterval(textTimer);
          return prev;
        }
        return fullText.slice(0, prev.length + 1);
      });
    }, 100);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="font-mono text-green-400 text-xl mb-4">
          {text}
          <span className="animate-pulse">|</span>
        </div>
        <div className="text-gray-400 font-mono text-sm">{progress}%</div>
      </div>
    </div>
  );
}
