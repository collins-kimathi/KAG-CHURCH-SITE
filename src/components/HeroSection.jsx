import SiteHeader from './SiteHeader'

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
            src="https://cdn.coverr.co/videos/coverr-a-woman-walks-down-the-stairs-from-the-church-1158/1080p.mp4"
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
          Kenya Assemblies of God (KAG)
        </p>
        <h1 data-reveal style={{ '--reveal-delay': '120ms' }}>
          A Pentecostal Movement Planted In Kenya In 1972
        </h1>
        <p data-reveal style={{ '--reveal-delay': '220ms' }}>
          KAG is a family of over 5,000 churches in Kenya (2026), with a
          vision to double our reach and membership by 2030.
        </p>
        <div className="hero-actions" data-reveal style={{ '--reveal-delay': '320ms' }}>
          <a href="/about-us">Discover More</a>
          <a className="secondary" href="/contact-us">
            Join This Sunday
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
