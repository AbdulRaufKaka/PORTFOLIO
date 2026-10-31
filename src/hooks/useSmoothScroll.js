import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export const scrollToSection = (target, options = {}) => {
  const el = typeof target === 'string' ? document.getElementById(target) : target
  if (!el) return
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: 0, duration: 1.4, ...options })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export const scrollToTop = (immediate = false) => {
  if (lenisInstance) lenisInstance.scrollTo(0, { immediate })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

export const setScrollLocked = (locked) => {
  if (!lenisInstance) return
  if (locked) lenisInstance.stop()
  else lenisInstance.start()
}

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
