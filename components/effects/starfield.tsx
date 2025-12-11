"use client"

import { useEffect, useRef, memo } from "react"

export const Starfield = memo(function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationId: number
    let width = 0
    let height = 0

    // Star data structure
    interface Star {
      x: number
      y: number
      radius: number
      baseOpacity: number
      twinkleOffset: number
      twinkleSpeed: number
    }

    let stars: Star[] = []

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      // Regenerate stars on resize
      const starCount = Math.min(250, Math.floor((width * height) / 6000))
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        baseOpacity: Math.random() * 0.4 + 0.2,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
      }))
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.016 // ~60fps time step

      // Batch draw stars
      ctx.fillStyle = "#f0f9ff"
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.25 + 0.75
        ctx.globalAlpha = star.baseOpacity * twinkle
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
})
