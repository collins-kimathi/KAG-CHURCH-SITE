import SiteHeader from './SiteHeader'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <header className="hero">
      <div className="video-layer">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="video-media"
        >
          <source src="/church-hero.mp4" type="video/mp4" />
          <source
            src="/walkdown.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-praying-at-sunset-1589/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-fallback-art" />
      </div>
      <div className="overlay" />

      <SiteHeader transparent />

      <div className="hero-content">
        <p className="eyebrow" data-reveal>
          Welcome To KAG Church
        </p>
        <h1 data-reveal style={{ '--reveal-delay': '120ms' }}>
          Loving God, Loving Others, And Serving The World
        </h1>
        <p data-reveal style={{ '--reveal-delay': '220ms' }}>
          Join us in worship, prayer, and Bible teaching as we build strong
          families and transform communities with the gospel of Jesus Christ.
        </p>
        <div className="hero-actions" data-reveal style={{ '--reveal-delay': '320ms' }}>
          <Link to="/about-us">Discover More</Link>
          <Link className="secondary" to="/contact-us">
            Join This Sunday
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
