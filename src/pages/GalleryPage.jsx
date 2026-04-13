import { useState } from 'react'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import VideoModal from '../components/VideoModal'
import { sermonCategories, sermonVideos } from '../data/churchData'

function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const getBadgeClass = (type) =>
    type === 'Praise & Worship'
      ? 'is-worship'
      : type === 'Online Service'
        ? 'is-service'
        : 'is-sermon'
  const filteredVideos =
    selectedCategory === 'All'
      ? sermonVideos
      : sermonVideos.filter((video) => video.category === selectedCategory)

  return (
    <div className="site-shell">
      <Seo
        title="Sermon Archive"
        description="Browse sermons, worship sessions, online services, youth messages, and family-focused messages from KAG Chuka Church."
      />
      <PageHero
        breadcrumb="Gallery"
        title="Sermon Archive"
        subtitle="Sermons, worship media, and online services from the official KAG Chuka Church YouTube channel."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Official Channel"
            title="Browse By Category"
            description="Filter the archive by sermon type so visitors can quickly find family, youth, worship, or service content."
          />
          <div className="filter-row" data-reveal>
            {sermonCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip${selectedCategory === category ? ' is-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {filteredVideos.map((video, index) => (
              <article
                key={video.id}
                className="gallery-item"
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                <button
                  type="button"
                  className="gallery-trigger"
                  onClick={() => setActiveVideo(video)}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                  <div className="gallery-caption">
                    <span className={`media-badge ${getBadgeClass(video.type)}`}>
                      {video.category}
                    </span>
                    <p className="gallery-title">{video.title}</p>
                    <p className="gallery-meta">{video.speaker}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '240ms' }}>
            <a
              className="button-link"
              href="https://www.youtube.com/@kagchukachurch"
              target="_blank"
              rel="noreferrer"
            >
              Open KAG Church Channel
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <VideoModal
        videoId={activeVideo?.id}
        title={activeVideo?.title}
        subtitle={
          activeVideo ? `${activeVideo.type} | ${activeVideo.speaker}` : undefined
        }
        description={activeVideo?.description}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  )
}

export default GalleryPage
