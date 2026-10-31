import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import ProjectThumbnail from '../components/ui/ProjectThumbnail'
import { PROJECTS } from '../data/portfolio'

export default function ProjectDetails() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[index]

  useGSAP(
    () => {
      if (!project) return
      gsap.from('.detail-fade', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.from('.detail-cover', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      })
    },
    { scope: containerRef, dependencies: [slug] },
  )

  if (!project) return <Navigate to="/" replace />

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <section ref={containerRef} className="pt-28 pb-16 md:pt-36">
      <div className="app-container">
        <Link
          to="/#selected-projects"
          className="detail-fade group mb-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back
        </Link>

        <p className="detail-fade text-sm text-muted-foreground">{project.subtitle}</p>
        <h1 className="detail-fade mt-2 font-anton text-5xl leading-none sm:text-7xl md:text-8xl">
          {project.title}
        </h1>

        <div className="detail-fade mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-border bg-background-light/60 px-3 py-1 text-xs text-muted-foreground sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="detail-fade mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Preview <FiExternalLink />
              </Button>
            )}
            {project.sourceUrl && (
              <Button href={project.sourceUrl} target="_blank" rel="noreferrer" variant="outline">
                Source Code <FiGithub />
              </Button>
            )}
          </div>
        )}

        <div className="detail-cover mt-12 aspect-video overflow-hidden md:aspect-[21/9]">
          <ProjectThumbnail project={project} />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="detail-fade font-anton text-3xl uppercase text-muted-foreground">Overview</h2>
            <p className="detail-fade mt-2 text-sm text-muted-foreground">Year: {project.year}</p>
          </div>
          <div className="md:col-span-8">
            <p className="detail-fade text-lg leading-relaxed sm:text-xl">{project.description}</p>
            <h3 className="detail-fade mt-10 font-anton text-2xl uppercase text-muted-foreground">
              Key Highlights
            </h3>
            <ul className="mt-4 space-y-4">
              {project.highlights.map((item) => (
                <li key={item} className="detail-fade flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {nextProject.slug !== project.slug && (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group mt-24 flex items-center justify-between gap-6 border-t border-border pt-10"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Next project</p>
              <p className="mt-2 font-anton text-4xl transition-colors group-hover:text-primary sm:text-6xl">
                {nextProject.title}
              </p>
            </div>
            <FiArrowRight className="size-10 shrink-0 transition-transform group-hover:translate-x-2 group-hover:text-primary" />
          </Link>
        )}
      </div>
    </section>
  )
}
