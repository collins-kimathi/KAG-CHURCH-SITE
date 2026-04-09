import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import PastorPage from './pages/PastorPage'

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return sessionStorage.getItem('kag-loader-seen') !== 'true'
  })
  const hasMarkedLoaderSeen = useRef(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    if (!isLoading) {
      return undefined
    }

    let isCancelled = false

    const finishLoading = () => {
      window.setTimeout(() => {
        if (!isCancelled) {
          sessionStorage.setItem('kag-loader-seen', 'true')
          hasMarkedLoaderSeen.current = true
          setIsLoading(false)
        }
      }, 2200)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    return () => {
      isCancelled = true
      window.removeEventListener('load', finishLoading)
    }
  }, [isLoading])

  useEffect(() => {
    if (!hasMarkedLoaderSeen.current && typeof window !== 'undefined') {
      sessionStorage.setItem('kag-loader-seen', 'true')
      hasMarkedLoaderSeen.current = true
    }
  }, [])

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
  }, [location.pathname])

  return (
    <>
      <LoadingScreen visible={isLoading} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/ministers" element={<PastorPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<Navigate replace to="/about-us" />} />
        <Route path="/contact" element={<Navigate replace to="/contact-us" />} />
        <Route path="/pastor" element={<Navigate replace to="/ministers" />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
