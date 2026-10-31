import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const NAME = 'ABDUL RAUF'

export default function Preloader({ onReveal, onComplete }) {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete })

      tl.from('.preloader-letter', {
        yPercent: 120,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
      })
        .to('.preloader-letter', {
          yPercent: -120,
          opacity: 0,
          stagger: 0.04,
          duration: 0.5,
          ease: 'power3.in',
          delay: 0.4,
        })
        .add(() => onReveal?.())
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      aria-hidden="true"
    >
      <h2 className="flex overflow-hidden font-anton text-5xl text-foreground sm:text-7xl md:text-8xl">
        {NAME.split('').map((letter, i) => (
          <span key={i} className="preloader-letter inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h2>
    </div>
  )
}
