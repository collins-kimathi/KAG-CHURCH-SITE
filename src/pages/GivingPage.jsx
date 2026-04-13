import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import SiteFooter from '../components/SiteFooter'
import { churchInfo, givingOptions } from '../data/churchData'

function GivingPage() {
  return (
    <div className="site-shell">
      <Seo
        title="Give And Support"
        description="Find giving guidance for offerings, missions, and church support at KAG Chuka Church, with clear instructions to confirm official church channels."
      />
      <PageHero
        breadcrumb="Giving"
        title="Give And Support"
        subtitle="Support worship, outreach, discipleship, and practical church ministry through the church’s approved giving channels."
      />

      <main>
        <section className="section split-banner">
          <article data-reveal>
            <p className="eyebrow">Important Note</p>
            <h2>Use Only Verified Church Payment Details</h2>
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p>{churchInfo.givingNote}</p>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Support The Mission"
            title="Common Ways Members And Friends Give"
            description="These cards are ready for the church’s official payment details, support instructions, and accountability notes."
          />
          <div className="grid-three">
            {givingOptions.map((item, index) => (
              <article
                key={item.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <p className="giving-action">{item.action}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default GivingPage
