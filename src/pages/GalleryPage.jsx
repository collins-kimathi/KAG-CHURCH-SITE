import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const images = [
  'https://images.pexels.com/photos/7520970/pexels-photo-7520970.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/8923494/pexels-photo-8923494.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/2170903/pexels-photo-2170903.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/8815077/pexels-photo-8815077.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/7234264/pexels-photo-7234264.jpeg?auto=compress&cs=tinysrgb&w=1400',
]

function GalleryPage() {
  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="Gallery"
        title="Church Gallery"
        subtitle="Moments from worship services, events, discipleship gatherings, and outreach ministry."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Our Moments"
            title="Life At Kenya Assemblies Of God"
          />
          <div className="gallery-grid">
            {images.map((image, index) => (
              <article
                key={image}
                className="gallery-item"
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                <img src={image} alt="KAG church gallery moment" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default GalleryPage
