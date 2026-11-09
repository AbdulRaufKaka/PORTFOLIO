import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectThumbnail from '../components/ui/ProjectThumbnail'
import SectionTitle from '../components/ui/SectionTitle'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  const containerRef = useRef(null)
  const previewRef = useRef(null)
  const moveRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)

  useGSAP(
    () => {
      gsap.from('.project-item', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-list', start: 'top 80%' },
      })

      moveRef.current = {
        x: gsap.quickTo(previewRef.current, 'x', { duration: 0.5, ease: 'power3' }),
        y: gsap.quickTo(previewRef.current, 'y', { duration: 0.5, ease: 'power3' }),
      }
    },
    { scope: containerRef },
  )

  const handleMouseMove = (e) => {
    if (!moveRef.current || !previewRef.current) return
    const rect = containerRef.current.querySelector('.project-list').getBoundingClientRect()
    const previewWidth = previewRef.current.offsetWidth
    const previewHeight = previewRef.current.offsetHeight
    const localY = e.clientY - rect.top
    moveRef.current.x(Math.max(0, rect.width - previewWidth))
    moveRef.current.y(Math.min(Math.max(localY - previewHeight * 0.45, -20), rect.height - previewHeight + 40))
  }

  return (
    <section id="selected-projects" ref={containerRef} className="py-20 md:py-32">
      <div className="app-container">
        <SectionTitle title="Projects" />

        <div
          className="project-list relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              onMouseEnter={(e) => {
                setActiveIndex(index)
                handleMouseMove(e)
              }}
              onMouseOver={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className="project-item group block border-b border-border py-6 md:py-8"
            >
              <div className="mb-5 aspect-video overflow-hidden border border-border md:hidden">
                <ProjectThumbnail project={project} cycling />
              </div>

              <div className="flex gap-3 sm:gap-5">
                <span className="mt-1 font-anton text-sm text-muted-foreground sm:text-base">
                  _{String(index + 1).padStart(2, '0')}.
                </span>
                <div className="min-w-0">
                  <h4 className="font-anton text-4xl leading-tight transition-colors duration-300 group-hover:text-primary sm:text-5xl md:text-6xl">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{project.subtitle}</p>
                  <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
                    {project.techStack.map((tech, i) => (
                      <li key={tech} className="flex items-center gap-3">
                        {i > 0 && <span className="size-1 rounded-full bg-background-light" />}
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}

          {/* Hover preview following the cursor (desktop only) */}
          <div
            ref={previewRef}
            className={`pointer-events-none absolute left-0 top-0 z-10 hidden h-[270px] w-[460px] overflow-hidden border border-primary/25 shadow-[0_24px_80px_rgb(0_0_0_/_0.55),0_0_40px_rgb(0_240_90_/_0.12)] transition-[opacity,transform] duration-300 md:block ${
              activeIndex === null ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.slug}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ProjectThumbnail project={project} cycling={activeIndex === index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
