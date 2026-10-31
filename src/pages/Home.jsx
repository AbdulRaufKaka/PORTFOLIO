import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../hooks/useSmoothScroll'
import AboutMe from '../sections/AboutMe'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

export default function Home({ ready }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (!ready || !hash) return
    const timer = setTimeout(() => scrollToSection(hash.slice(1)), 200)
    return () => clearTimeout(timer)
  }, [ready, hash])

  return (
    <>
      <Hero ready={ready} />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  )
}
