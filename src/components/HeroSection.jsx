function HeroSection() {
  return (
    <header className="hero">
      <div className="video-layer">
        <iframe
          src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1&controls=0&loop=1&playlist=5qap5aO4i9A&modestbranding=1&playsinline=1&rel=0"
          title="Worship atmosphere video"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="overlay" />

      <nav className="top-nav">
        <p className="brand">Kenya Assemblies of God</p>
        <a href="#contact">Visit Us</a>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">KAG | Nairobi, Kenya</p>
        <h1>A Christ-Centered Family For Worship, Discipleship, And Mission</h1>
        <p>
          Join us for vibrant worship, sound biblical teaching, and practical
          outreach across Kenya.
        </p>
        <div className="hero-actions">
          <a href="#services">Service Times</a>
          <a className="secondary" href="#ministries">
            Explore Ministries
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
