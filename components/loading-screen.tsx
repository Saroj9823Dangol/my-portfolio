"use client"

import { useEffect, useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

const LOADING_STATUSES = [
  "Initializing Solar System...",
  "Loading planetary data...",
  "Calculating orbital paths...",
  "Generating starfield...",
  "System ready.",
] as const

export const LoadingScreen = memo(function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState(LOADING_STATUSES[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 6
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }

        const statusIndex = Math.min(Math.floor(next / (100 / LOADING_STATUSES.length)), LOADING_STATUSES.length - 1)
        setStatus(LOADING_STATUSES[statusIndex])
        return next
      })
    }, 180)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Loading solar system"
      >
        {/* Animated sun */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full mb-6"
          style={{
            background: "radial-gradient(circle, #fdb813 0%, #f59e0b 50%, #ea580c 100%)",
            boxShadow: "0 0 50px rgba(251, 191, 36, 0.5), 0 0 100px rgba(245, 158, 11, 0.3)",
          }}
        />

        <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wider">SOLAR SYSTEM</h1>

        {/* Progress bar */}
        <div className="w-56 h-1.5 bg-secondary rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-nebula-purple to-cosmic-blue rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <p className="font-terminal text-sm text-muted-foreground">{status}</p>
        <p className="font-terminal text-xs text-primary mt-1.5">{Math.round(progress)}%</p>
      </motion.div>
    </AnimatePresence>
  )
})
