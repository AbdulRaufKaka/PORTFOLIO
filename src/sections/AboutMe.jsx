import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ABOUT } from '../data/portfolio'

export default function AboutMe() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-word',
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-statement',
            start: 'top 85%',
            end: 'bottom 45%',
            scrub: true,
          },
        },
      )

      gsap.from('.about-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-body', start: 'top 80%' },
      })
    },
    { scope: containerRef },
  )

  return (
    <section id="about-me" ref={containerRef} className="py-20 md:py-32">
      <div className="app-container">
        <h2 className="about-statement text-3xl font-thin leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {ABOUT.statement.split(' ').map((word, i) => (
            <span key={i} className="about-word">
              {word}{' '}
            </span>
          ))}
        </h2>

        <div className="about-body mt-20 md:mt-32">
          <p className="about-reveal pb-3 text-sm text-muted-foreground">This is me.</p>
          <div className="about-reveal border-t border-border" />
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <h3 className="about-reveal text-3xl sm:text-4xl md:col-span-5">{ABOUT.greeting}</h3>
            <div className="space-y-4 text-muted-foreground md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-7">
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="about-reveal leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
