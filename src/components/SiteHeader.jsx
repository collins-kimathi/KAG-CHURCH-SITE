import kagLogo from '../../Images/KAG-LOGO.webp'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Ministers', path: '/ministers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact-us' },
]

function SiteHeader({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className={`site-header${transparent ? ' is-transparent' : ''}${isMenuOpen ? ' is-menu-open' : ''}`}>
      <Link to="/" className="brand-link">
        <img className="brand-logo" src={kagLogo} alt="Kenya Assemblies of God logo" />
      </Link>

      <button
        aria-controls="main-nav"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="menu-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        type="button"
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      <nav
        className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
        id="main-nav"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={link.path === '/'}
            onClick={() => setIsMenuOpen(false)}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}

        <Link className="site-nav-cta" onClick={() => setIsMenuOpen(false)} to="/contact-us">
          Plan Visit
        </Link>
      </nav>

      <Link to="/contact-us" className="header-cta">
        Plan Visit
      </Link>
    </header>
  )
}

export default SiteHeader
