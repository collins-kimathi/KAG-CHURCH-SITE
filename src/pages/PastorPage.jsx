import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import { leadershipTeams, ministryProfiles } from '../data/churchData'

const milestones = [
  { year: '2001', detail: 'Leadership team established for structured church growth' },
  { year: '2008', detail: 'Senior ministry council commissioned' },
  { year: '2014', detail: 'Discipleship and mentorship pathways launched' },
  { year: '2021', detail: 'Outreach and mission partnerships expanded nationwide' },
]

function PastorPage() {
  return (
    <div className="site-shell">
      <Seo
        title="Leadership"
        description="See the ministry leadership structure, visible ministry profiles, and service teams supporting church life at KAG Chuka Church."
      />
      <PageHero
        breadcrumb="Ministers"
        title="Ministry Leadership"
        subtitle="A clear overview of the teams that serve, shepherd, and help people connect at KAG Chuka Church."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Visible Ministry Profiles"
            title="Current Profiles Reflected In Church Media"
            description="These profiles are built from names and teams already represented in the church’s existing media archive, avoiding generic stock placeholders."
          />
          <div className="minister-grid">
            {ministryProfiles.map((profile, index) => (
              <article
                key={profile.name}
                className="minister-card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <img src={profile.photo} alt={profile.name} />
                <div>
                  <p className="minister-role">{profile.department}</p>
                  <h3>{profile.name}</h3>
                  <p className="event-meta">{profile.role}</p>
                  <p>{profile.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Church Leadership"
            title="Leadership Structure And Ministry Support"
            description="This page focuses on ministry functions and connection pathways so visitors are guided clearly even before the official staff roster is published."
          />
          <div className="minister-categories">
            {leadershipTeams.map((category, categoryIndex) => (
              <article
                key={category.title}
                className="minister-category"
                data-reveal
                style={{ '--reveal-delay': `${categoryIndex * 120}ms` }}
              >
                <header className="minister-category-head">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </header>
                <ul className="list check-list ministry-role-list">
                  {category.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading eyebrow="Leadership Journey" title="Ministry Milestones" />
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
            <h3>3</h3>
            <p>Leadership Teams</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '90ms' }}>
            <h3>1</h3>
            <p>Church Family</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '180ms' }}>
            <h3>5+</h3>
            <p>Key Ministry Pathways</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>Ongoing</h3>
            <p>Prayer And Pastoral Care</p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PastorPage
