import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const coreValues = [
  'Christ-Centered Teaching',
  'Prayer And Dependence On The Holy Spirit',
  'Holiness And Biblical Integrity',
  'Compassionate Community Outreach',
]

const beliefs = [
  'The Bible is the inspired and authoritative Word of God.',
  'Salvation is by grace through faith in Jesus Christ alone.',
  'The Holy Spirit empowers believers for holy living and witness.',
  'The Church is called to make disciples of all nations.',
]

function AboutPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="About KAG"
        title="A Pentecostal Movement Serving Kenya With The Gospel"
        subtitle="Kenya Assemblies of God exists to glorify God by raising disciples, planting churches, and transforming communities through Christ."
      />

      <main>
        <section className="section two-column">
          <article className="panel">
            <SectionHeading
              eyebrow="Our Story"
              title="From Local Fellowship To National Impact"
              description="KAG churches across Kenya are united by a common calling to preach Christ, disciple believers, and demonstrate God&apos;s love through action."
            />
          </article>
          <article className="panel">
            <SectionHeading eyebrow="Our Values" title="What Shapes How We Serve" />
            <ul className="list">
              {coreValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section">
          <SectionHeading eyebrow="What We Believe" title="Our Foundational Doctrine" />
          <div className="belief-grid">
            {beliefs.map((belief) => (
              <article key={belief} className="panel">
                <p>{belief}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AboutPage
