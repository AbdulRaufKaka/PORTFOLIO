import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ParticleBackground from './components/layout/ParticleBackground'
import Preloader from './components/layout/Preloader'
import ScrollProgress from './components/layout/ScrollProgress'
import StickyEmail from './components/layout/StickyEmail'
import useSmoothScroll, { scrollToTop } from './hooks/useSmoothScroll'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetails from './pages/ProjectDetails'

export default function App() {
  const [ready, setReady] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)
  const { pathname, hash } = useLocation()

  useSmoothScroll()

  useEffect(() => {
    if (!hash) scrollToTop(true)
    const timer = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return (
    <>
      {showPreloader && (
        <Preloader onReveal={() => setReady(true)} onComplete={() => setShowPreloader(false)} />
      )}
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <StickyEmail />

      <main>
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
