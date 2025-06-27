"use client";
import { ReactNode, Suspense } from "react";
import { useInView } from "react-intersection-observer";

type LazyLoadSectionProps = {
  children: ReactNode;
};

export default function LazyLoadSection({ children }: LazyLoadSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <Suspense fallback={<div style={{ minHeight: "300px" }}>Loading...</div>}>
        {inView ? children : null}
      </Suspense>
    </div>
  );
}
