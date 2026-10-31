import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GENERAL_INFO, MENU_LINKS, SOCIAL_LINKS } from '../../data/portfolio'
import { scrollToSection, setScrollLocked } from '../../hooks/useSmoothScroll'

const MENU_COLORS = ['#00F05A', '#00BFF0', '#F7B500', '#FF3D7F']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    setScrollLocked(isOpen)
    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const handleNavClick = (id) => {
    setIsOpen(false)
    if (pathname !== '/') {
      navigate(`/#${id}`)
      return
    }
    setTimeout(() => scrollToSection(id), 300)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="group fixed right-4 top-4 z-[60] flex size-14 items-center justify-center rounded-full border border-border bg-background-light/80 backdrop-blur transition-colors hover:border-primary md:right-10 md:top-10"
      >
        <span className="sr-only">Menu</span>
        <span
          className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
            isOpen ? 'rotate-45' : '-translate-y-[4px] group-hover:w-4'
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-foreground transition-all duration-300 ${
            isOpen ? '-rotate-45' : 'translate-y-[4px]'
          }`}
        />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/70 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in panel */}
      <nav
        inert={!isOpen}
        className={`fixed right-0 top-0 z-[58] flex h-dvh w-full flex-col overflow-y-auto bg-background-light px-8 py-24 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] sm:px-12 md:w-[min(80vw,900px)] md:px-16 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex grow flex-col justify-between gap-12 md:flex-row-reverse md:items-start">
          <div>
            <p className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">Menu</p>
            <ul className="space-y-3">
              {MENU_LINKS.map((link, i) => (
                <li key={link.id}>
                  <button
                    type="button"
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => handleNavClick(link.id)}
                    className="group flex items-center gap-4 text-left font-anton text-4xl uppercase transition-colors sm:text-5xl"
                  >
                    <span
                      className="block size-3.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                      style={{ backgroundColor: MENU_COLORS[i % MENU_COLORS.length] }}
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">Social</p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                    className="text-lg capitalize text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">Get in touch</p>
          <a
            href={`mailto:${GENERAL_INFO.email}`}
            tabIndex={isOpen ? 0 : -1}
            className="break-all text-lg transition-colors hover:text-primary sm:text-xl"
          >
            {GENERAL_INFO.email}
          </a>
        </div>
      </nav>
    </>
  )
}
