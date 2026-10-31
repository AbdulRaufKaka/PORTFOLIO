import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { MY_STACK } from '../data/portfolio'

export default function Skills() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.stack-row').forEach((row) => {
        gsap.from(row.querySelectorAll('.stack-anim'), {
          y: 40,
          opacity: 0,
          stagger: 0.06,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 85%' },
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <section id="my-stack" ref={containerRef} className="py-20 md:py-32">
      <div className="app-container">
        <SectionTitle title="My Stack" />

        <div className="space-y-16 md:space-y-20">
          {Object.entries(MY_STACK).map(([category, items]) => (
            <div key={category} className="stack-row grid gap-6 sm:grid-cols-12">
              <div className="sm:col-span-5">
                <p className="stack-anim font-anton text-4xl uppercase leading-none text-muted-foreground sm:text-5xl">
                  {category}
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-10 gap-y-6 sm:col-span-7">
                {items.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="stack-anim group flex items-center gap-3">
                    <Icon
                      size={38}
                      style={{ color }}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="text-lg sm:text-xl">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
