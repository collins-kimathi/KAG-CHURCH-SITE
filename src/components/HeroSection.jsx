import { useState } from 'react'
import SiteHeader from './SiteHeader'

function HeroSection() {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <header className="hero">
      <div className={`video-layer${isVideoReady ? ' is-ready' : ''}`}>
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-media"
            onCanPlay={() => setIsVideoReady(true)}
            onError={() => setVideoFailed(true)}
            poster="https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1400"
          >
            <source src="/church-hero.mp4" type="video/mp4" />
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className="video-fallback-art" />
      </div>
      <div className="overlay" />

      <SiteHeader transparent />

      <div className="hero-content">
        <p className="eyebrow">KAG | Nairobi, Kenya</p>
        <h1>A Christ-Centered Family For Worship, Discipleship, And Mission</h1>
        <p>
          Join us for vibrant worship, sound biblical teaching, and practical
          outreach across Kenya.
        </p>
        <div className="hero-actions">
          <a href="#/contact">Service Times</a>
          <a className="secondary" href="#/ministries">
            Explore All Ministries
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
