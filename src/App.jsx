import { useEffect, useMemo, useState } from 'react'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import PastorPage from './pages/PastorPage'

const routeMap = {
  '/': HomePage,
  '/about-us': AboutPage,
  '/contact-us': ContactPage,
  '/pastor': PastorPage,
  '/gallery': GalleryPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

function getRouteFromHash() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const rawRoute = window.location.hash.replace('#', '') || '/'
  const normalizedRoute = rawRoute.startsWith('/') ? rawRoute : `/${rawRoute}`

  return routeMap[normalizedRoute] ? normalizedRoute : '/'
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    if (!revealItems.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [route])

  const CurrentPage = useMemo(() => routeMap[route] || HomePage, [route])

  return <CurrentPage />
}

export default App
