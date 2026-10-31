import { GENERAL_INFO, SOCIAL_LINKS } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-16 text-center" id="contact">
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
      </div>
    </footer>
  )
}
