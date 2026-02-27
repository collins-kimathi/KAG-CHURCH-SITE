import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const milestones = [
  { year: '2001', detail: 'Entered full-time pastoral ministry' },
  { year: '2008', detail: 'Commissioned as senior pastor' },
  { year: '2014', detail: 'Launched church discipleship movement' },
  { year: '2021', detail: 'Expanded outreach and missions network' },
]

function PastorPage() {
  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="Pastor"
        title="Our Pastor"
        subtitle="Meet the spiritual leadership behind our church family and vision."
      />

      <main>
        <section className="section home-about">
          <article className="image-panel pastor-photo" data-reveal>
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Senior pastor portrait"
            />
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="Rev. Peter Maina"
              title="Lead Pastor, Kenya Assemblies of God"
              description="Pastor Peter has served the church for over two decades with a strong focus on biblical preaching, leadership development, and prayer revival."
            />
            <p>
              His heart is to see people grounded in Scripture, empowered by the
              Holy Spirit, and mobilized for mission in their communities.
            </p>
            <p className="pastor-quote">
              &quot;Our greatest calling is to love God deeply and serve people
              faithfully.&quot;
            </p>
          </article>
        </section>

        <section className="section">
          <SectionHeading eyebrow="Ministry Journey" title="Pastoral Milestones" />
          <div className="timeline">
            {milestones.map((item, index) => (
              <article
                key={item.year}
                className="timeline-item"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <h3>{item.year}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section stat-strip" data-reveal>
          <article data-reveal>
            <h3>24+</h3>
            <p>Years In Ministry</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '90ms' }}>
            <h3>600+</h3>
            <p>Leaders Mentored</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '180ms' }}>
            <h3>3500+</h3>
            <p>Sermons Preached</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>18</h3>
            <p>Mission Partnerships</p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PastorPage
