import { useEffect } from 'react'

function VideoModal({ videoId, title, subtitle, description, onClose }) {
  useEffect(() => {
    if (!videoId) {
      return undefined
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [videoId, onClose])

  if (!videoId) {
    return null
  }

  return (
    <div className="video-modal-overlay" onClick={onClose} role="presentation">
      <div className="video-modal" onClick={(event) => event.stopPropagation()}>
        <div className="video-modal-head">
          <div>
            <h3>{title}</h3>
            {subtitle ? <p className="video-modal-subtitle">{subtitle}</p> : null}
            {description ? <p className="video-modal-desc">{description}</p> : null}
          </div>
          <button type="button" className="video-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="video-frame-wrap">
          <iframe
            title={title}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal
