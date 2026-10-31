import { GENERAL_INFO, SOCIAL_LINKS } from '../../data/portfolio'
import { scrollToTop } from '../../hooks/useSmoothScroll'

const year = new Date().getFullYear()

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

      <p
        aria-hidden="true"
        className="pointer-events-none mt-10 select-none whitespace-nowrap font-anton text-[18vw] leading-none text-background-light md:text-[14vw]"
      >
        A B D U L
      </p>
    </footer>
  )
}
