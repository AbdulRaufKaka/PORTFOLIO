import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let particles = []
    let frameId

    const createParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((window.innerWidth * window.innerHeight) / 9000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        speed: Math.random() * 0.25 + 0.05,
        alpha: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const p of particles) {
        p.y -= p.speed
        p.alpha += p.twinkle
        if (p.alpha > 0.9 || p.alpha < 0.15) p.twinkle *= -1
        if (p.y < -5) {
          p.y = window.innerHeight + 5
          p.x = Math.random() * window.innerWidth
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.fill()
      }
      if (!reduceMotion) frameId = requestAnimationFrame(draw)
    }

    createParticles()
    draw()
    window.addEventListener('resize', createParticles)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', createParticles)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
