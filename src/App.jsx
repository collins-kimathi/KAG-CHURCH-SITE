import { useEffect, useMemo, useState } from 'react'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import MinistriesPage from './pages/MinistriesPage'
import SermonsPage from './pages/SermonsPage'

const routeMap = {
  '/': HomePage,
  '/about': AboutPage,
  '/ministries': MinistriesPage,
  '/sermons': SermonsPage,
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

  const CurrentPage = useMemo(() => routeMap[route] || HomePage, [route])

  return <CurrentPage />
}

export default App
