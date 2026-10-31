/**
 * Generated artwork used as a project cover. Swap it for a real
 * screenshot by giving the project an `image` field in data/portfolio.js.
 */
export default function ProjectThumbnail({ project, className = '' }) {
  const [from, to] = project.gradient

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
      />
    )
  }

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
