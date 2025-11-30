"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Create GSAP context
    contextRef.current = gsap.context((self) => {
      callback(self);
    });

    // Cleanup
    return () => {
      contextRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return contextRef;
};
