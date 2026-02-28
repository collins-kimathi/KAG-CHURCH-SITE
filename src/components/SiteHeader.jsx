const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Ministers', path: '/ministers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact-us' },
]

function getActiveRoute() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const route = window.location.hash.replace('#', '') || '/'
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`
  return normalizedRoute === '/pastor' ? '/ministers' : normalizedRoute
}

function SiteHeader({ transparent = false }) {
  const activeRoute = getActiveRoute()

  return (
    <header className={`site-header${transparent ? ' is-transparent' : ''}`}>
      <a href="#/" className="brand-link">
        Kenya Assemblies of God
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.path}
            className={activeRoute === link.path ? 'active' : ''}
            href={`#${link.path}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#/contact-us" className="header-cta">
        Plan Visit
      </a>
    </header>
  )
}

export default SiteHeader
