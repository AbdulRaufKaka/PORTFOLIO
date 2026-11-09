import { useEffect, useState } from 'react'

/**
 * Project cover. Uses real screenshots when `project.images` (or `image`)
 * is set; otherwise a generated gradient. Pass `cycling` to crossfade shots.
 */
export default function ProjectThumbnail({ project, className = '', cycling = false }) {
  const [from, to] = project.gradient
  const shots = project.images?.length
    ? project.images
    : project.image
      ? [{ src: project.image, label: project.title }]
      : []
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!cycling || shots.length < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % shots.length)
    }, 1600)
    return () => window.clearInterval(id)
  }, [cycling, shots.length])

  useEffect(() => {
    if (!cycling) setIndex(0)
  }, [cycling])

  if (!shots.length) {
    return (
      <div
        className={`relative flex h-full w-full items-end overflow-hidden bg-background-light p-6 ${className}`}
        role="img"
        aria-label={`${project.title} cover`}
      >
        <div
          className="absolute -right-1/4 -top-1/3 size-[90%] rounded-full opacity-60 blur-3xl"
          style={{ background: from }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 size-[80%] rounded-full opacity-50 blur-3xl"
          style={{ background: to }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative">
          <p className="font-anton text-3xl leading-none text-white drop-shadow sm:text-5xl">
            {project.title}
          </p>
          <p className="mt-2 text-sm text-white/80">{project.subtitle}</p>
        </div>
      </div>
    )
  }

  const activeShot = shots[index] ?? shots[0]

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-background ${className}`}
      role="img"
      aria-label={`${project.title} interface preview`}
    >
      {shots.map((shot, i) => (
        <img
          key={shot.src}
          src={shot.src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${i === index && cycling ? 'scale-105' : 'scale-100'}`}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      <div className="hud-scanlines pointer-events-none absolute inset-0 opacity-25" />
      {cycling && <div className="hud-sweep pointer-events-none absolute inset-x-0 top-0 h-1/3" />}

      <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
      <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-secondary" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-secondary" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-anton text-lg leading-none text-white">
            {project.title}
            {cycling && (
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
            )}
          </p>
          <p className="mt-1 truncate text-[11px] uppercase tracking-[0.18em] text-primary">
            {activeShot.label}
          </p>
        </div>
        {shots.length > 1 && (
          <div className="flex gap-1 pb-0.5">
            {shots.map((shot, i) => (
              <span
                key={shot.label}
                className={`h-0.5 w-4 rounded-full transition-colors duration-300 ${
                  i === index ? 'bg-primary' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
