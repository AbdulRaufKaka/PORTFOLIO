import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Button from '../components/ui/Button'
import { GENERAL_INFO, HERO, STATS } from '../data/portfolio'

export default function Hero({ ready }) {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (!ready) return
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
      tl.from('.hero-title-line', { yPercent: 110, stagger: 0.12 })
        .from('.hero-fade', { y: 30, opacity: 0, stagger: 0.12 }, '-=0.5')
        .from('.hero-stat', { x: 40, opacity: 0, stagger: 0.12 }, '<')

      gsap.to('.hero-content', {
        opacity: 0,
        scale: 0.94,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 75%',
          end: 'bottom 15%',
          scrub: true,
        },
      })
    },
    { scope: containerRef, dependencies: [ready] },
  )

  return (
    <section id="banner" ref={containerRef} className="relative overflow-hidden">
      <div className="hero-content app-container flex min-h-svh flex-col justify-center gap-14 py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h1 className="font-anton text-6xl leading-[1.05] sm:text-7xl md:text-8xl">
            <span className="block overflow-hidden">
              <span className="hero-title-line block text-primary">{HERO.titleTop}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-title-line block sm:ml-2">{HERO.titleBottom}</span>
            </span>
          </h1>

          <p className="hero-fade mt-6 text-base text-muted-foreground sm:text-lg">
            Hi! I&apos;m <span className="font-semibold text-foreground">{GENERAL_INFO.name}</span>.{' '}
            {HERO.intro}
          </p>

          <div className="hero-fade mt-9">
            <Button href={`mailto:${GENERAL_INFO.email}`}>Let&apos;s Talk</Button>
          </div>

          <p className="hero-fade mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            {HERO.availability}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:flex lg:flex-col lg:gap-10 lg:text-right">
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <h5 className="mb-1 font-anton text-3xl text-primary sm:text-4xl">{stat.value}</h5>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
