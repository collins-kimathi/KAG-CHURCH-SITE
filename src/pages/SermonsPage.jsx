import EventCard from '../components/EventCard'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const sermonSeries = [
  { date: 'January 2026', title: 'Anchored In The Word' },
  { date: 'February 2026', title: 'Prayer That Changes Nations' },
  { date: 'March 2026', title: 'The Power Of The Gospel' },
]

const resources = [
  'Weekly sermon notes and discussion points',
  'Bible reading plans for discipleship groups',
  'Prayer focus guides for families and leaders',
]

function SermonsPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="Sermons"
        title="Biblical Teaching For Daily Transformation"
        subtitle="Listen to messages that strengthen faith, renew hope, and equip believers for mission."
      />

      <main>
        <section className="section two-column">
          <article className="panel featured-sermon">
            <p className="eyebrow">Featured Message</p>
            <h2>The Church That Prays In Faith</h2>
            <p>
              Learn how persistent prayer and obedience to the Holy Spirit
              position believers to see revival in families, campuses, and
              communities.
            </p>
            <a className="button-link" href="#/contact">
              Request Sermon Audio
            </a>
          </article>

          <article className="panel">
            <SectionHeading eyebrow="Resources" title="Grow Beyond Sunday" />
            <ul className="list">
              {resources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section events">
          <SectionHeading eyebrow="Recent Series" title="Teaching Themes" />
          <div className="event-list">
            {sermonSeries.map((series) => (
              <EventCard key={series.title} date={series.date} title={series.title} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default SermonsPage
