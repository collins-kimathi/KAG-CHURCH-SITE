import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import VideoModal from '../components/VideoModal'

const videos = [
  {
    id: 'FqehoHp_Qos',
    title: 'How Can We Have Hope When Everything Looks Hopeless?',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    description: 'Finding hope in Christ during impossible situations.',
  },
  {
    id: 'IltAy2cKgWg',
    title: 'God is Love - Rev. Josiah Kariuki',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    description: 'Understanding the love of God and Christian response.',
  },
  {
    id: 'TOfv0y3Pzhk',
    title: 'The Spirit of Fear - Rev. Josiah Kariuki',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    description: 'Deliverance from fear through Scripture and prayer.',
  },
  {
    id: '9Nnk63y2naY',
    title: 'The Great Provider - Rev. Josiah Kariuki',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    description: 'Trusting God as provider in every season of life.',
  },
  {
    id: 'd_eDbZfDWpc',
    title: 'Online Service (September 6, 2020) - Chuka KAG',
    type: 'Online Service',
    speaker: 'KAG Chuka Church',
    description: 'Full church service recording including worship and sermon.',
  },
  {
    id: 'FPPqm90YipE',
    title: 'Online Service (August 30, 2020) - Chuka KAG',
    type: 'Online Service',
    speaker: 'KAG Chuka Church',
    description: 'Sunday online service from KAG Chuka Church.',
  },
  {
    id: 'VBG8z1Ly9Lw',
    title: 'Praise and Worship Session - Chuka KAG Worship Team',
    type: 'Praise & Worship',
    speaker: 'Chuka KAG Worship Team',
    description: 'Live praise and worship ministration by the church worship team.',
  },
  {
    id: 'MqbhSHt5M2o',
    title: 'Praise and Worship Session - Chuka KAG Worship Team',
    type: 'Praise & Worship',
    speaker: 'Chuka KAG Worship Team',
    description: 'Extended worship session led by Chuka KAG worship team.',
  },
]

function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null)
  const getBadgeClass = (type) =>
    type === 'Praise & Worship'
      ? 'is-worship'
      : type === 'Online Service'
        ? 'is-service'
        : 'is-sermon'

  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="Gallery"
        title="Church Media Gallery"
        subtitle="Sermons and worship media from the official KAG Chuka Church YouTube channel."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Official Channel"
            title="KAG Chuka Church Sermons And Worship Videos"
            description="Click any card to watch directly here on the website."
          />
          <div className="gallery-grid">
            {videos.map((video, index) => (
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
                      {video.type}
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
