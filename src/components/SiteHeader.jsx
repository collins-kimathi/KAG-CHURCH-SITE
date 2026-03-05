import kagLogo from '../../Images/KAG-LOGO.webp'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Ministers', path: '/ministers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact-us' },
]

function SiteHeader({ transparent = false }) {
  return (
    <header className={`site-header${transparent ? ' is-transparent' : ''}`}>
      <Link to="/" className="brand-link">
        <img className="brand-logo" src={kagLogo} alt="Kenya Assemblies of God logo" />
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={link.path === '/'}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact-us" className="header-cta">
        Plan Visit
      </Link>
    </header>
  )
}

export default SiteHeader
