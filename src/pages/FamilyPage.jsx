import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import SiteFooter from '../components/SiteFooter'
import { familyInfo, ministries } from '../data/churchData'

function FamilyPage() {
  return (
    <div className="site-shell">
      <Seo
        title="Children, Youth And Family"
        description="See how KAG Chuka Church supports children, youth, students, couples, and families before you plan your visit."
      />
      <PageHero
        breadcrumb="Family Life"
        title="Children, Youth And Family"
        subtitle="Helpful information for parents, students, young adults, and families planning to connect with church life."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Before You Visit"
            title="Helpful Details For Families"
            description="These are the most common questions parents and guardians ask before attending church for the first time."
          />
          <div className="grid-three">
            {familyInfo.map((item, index) => (
              <article
                key={item.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Ministry Pathways"
            title="Where Different Age Groups Can Connect"
            description="From children to adults, these ministries help people grow in faith and belong in community."
          />
          <div className="grid-three">
            {ministries.map((ministry, index) => (
              <article
                key={ministry.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
              </article>
            ))}
          </div>
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <Link className="button-link" to="/contact-us">
              Ask About Family Visit Details
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default FamilyPage
