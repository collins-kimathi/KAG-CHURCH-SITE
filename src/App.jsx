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
  '/ministers': PastorPage,
  '/pastor': PastorPage,
  '/gallery': GalleryPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

function normalizeRoute(route) {
  if (!route || route === '/') {
    return '/'
  }

  return route.startsWith('/') ? route : `/${route}`
}

function getRouteFromLocation() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const rawHashRoute = window.location.hash.replace(/^#/, '')
  const rawPathRoute = window.location.pathname
  const normalizedRoute = normalizeRoute(rawHashRoute || rawPathRoute)

  return routeMap[normalizedRoute] ? normalizedRoute : '/'
}

function App() {
  const [route, setRoute] = useState(getRouteFromLocation)

  useEffect(() => {
    const handleLocationChange = () => setRoute(getRouteFromLocation())
    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
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
