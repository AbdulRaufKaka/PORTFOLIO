import { useState } from 'react'
import { GENERAL_INFO, SOCIAL_LINKS } from '../../data/portfolio'
import { scrollToTop } from '../../hooks/useSmoothScroll'

const year = new Date().getFullYear()
const SIGNATURE = 'RAUF'

function getLetterStyle(distance) {
  if (distance === 0) {
    return {
      transform: 'translateY(-14%) scale(1.06)',
      backgroundImage: 'linear-gradient(180deg, #00F05A 0%, #00BFF0 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      filter: 'drop-shadow(0 0 28px rgba(0, 240, 90, 0.45))',
    }
  }
  if (distance === 1) {
    return { transform: 'translateY(-6%)', color: '#4a4a4a' }
  }
  return {}
}

function FooterSignature() {
  const [hovered, setHovered] = useState(null)

  return (
    <div
      aria-hidden="true"
      onMouseLeave={() => setHovered(null)}
      className="relative mt-10 flex select-none justify-center gap-[3vw] pt-[2vw] font-anton text-[22vw] leading-none md:text-[16vw]"
    >
      {SIGNATURE.split('').map((letter, i) => (
        <span
          key={i}
          onMouseEnter={() => setHovered(i)}
          onTouchStart={() => setHovered(i)}
          className="inline-block cursor-default bg-background-light text-background-light transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            ...getLetterStyle(hovered === null ? null : Math.abs(i - hovered)),
          }}
        >
          {letter}
        </span>
      ))}
      <span
        className={`pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
          hovered === null ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-6 text-center" id="contact">
      <div className="app-container">
        <p className="text-lg text-muted-foreground">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
            GENERAL_INFO.emailSubject,
          )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
          className="mt-4 inline-block break-all text-2xl font-medium text-foreground underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary sm:text-3xl md:text-4xl"
        >
          {GENERAL_INFO.email}
        </a>

        <ul className="mt-10 flex justify-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            Design &amp; built by <span className="text-foreground">{GENERAL_INFO.name}</span> &copy; {year}
          </p>
          <button
            type="button"
            onClick={() => scrollToTop()}
            className="uppercase tracking-widest transition-colors hover:text-primary"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>

      <FooterSignature />

    </footer>
  )
}
