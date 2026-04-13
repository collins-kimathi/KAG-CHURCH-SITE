import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import { churchInfo, communityPhotos } from '../data/churchData'

const values = [
  {
    title: 'Worship',
    text: 'The movement exists to worship God faithfully and wholeheartedly.',
  },
  {
    title: 'Evangelize',
    text: 'We are committed to evangelizing all communities with the gospel.',
  },
  {
    title: 'Disciple',
    text: 'We equip believers for Christ-centered life and ministry.',
  },
  {
    title: 'Serve',
    text: 'We serve communities through the love of Jesus Christ.',
  },
]

function AboutPage() {
  return (
    <div className="site-shell">
      <Seo
        title="About Us"
        description="Learn about KAG Chuka Church, our mission, values, and commitment to worship, discipleship, prayer, and community care in Chuka Town."
      />
      <PageHero
        breadcrumb="About Us"
        title="About Our Church"
        subtitle={`${churchInfo.name} is a Kenya Assemblies of God congregation serving ${churchInfo.location} through worship, discipleship, prayer, and community care.`}
      />

      <main>
        <section className="section home-about">
          <article className="image-panel" data-reveal>
            <img
              src={communityPhotos[0].image}
              alt="KAG Chuka Church ministry moment"
            />
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building Faith, Family, And Mission"
              description="KAG is a member of the World Assemblies of God Fellowship and part of a church family of over 5,000 congregations across Kenya."
            />
            <p>
              Our aim is to continue being a theologically sound and culturally
              relevant church that is evangelizing, equipping, and engaging all
              communities with the gospel and the transforming power of Jesus
              Christ.
            </p>
          </article>
        </section>

        <section className="section stat-strip" data-reveal>
          <article data-reveal>
            <h3>1972</h3>
            <p>Planted In Kenya</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '90ms' }}>
            <h3>5,000+</h3>
            <p>Churches In Kenya (2026)</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '180ms' }}>
            <h3>2030</h3>
            <p>Reach & Membership Vision</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>Global</h3>
            <p>World AG Fellowship</p>
          </article>
        </section>

        <section className="section">
          <SectionHeading eyebrow="Our Core Values" title="What Defines Our Ministry" />
          <div className="grid-four">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-banner">
          <article data-reveal>
            <p className="eyebrow">Our Mission</p>
            <h2>
              To raise a theologically sound and culturally relevant church that
              is evangelizing, equipping and engaging all communities.
            </h2>
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p>
              To raise Holy Spirit empowered leaders who will inspire and
              resource a generation to serve and influence every sphere of
              society through the love of Jesus Christ in collaboration with His
              global church.
            </p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AboutPage
