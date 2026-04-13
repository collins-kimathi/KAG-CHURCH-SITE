import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import SiteFooter from '../components/SiteFooter'
import { upcomingEvents } from '../data/churchData'

function EventsPage() {
  return (
    <div className="site-shell">
      <Seo
        title="Upcoming Events"
        description="See Sunday services, prayer nights, youth fellowship, outreach, and church conference moments coming up at KAG Chuka Church."
      />
      <PageHero
        breadcrumb="Events"
        title="Upcoming Events"
        subtitle="Plan ahead for worship gatherings, prayer nights, youth moments, outreach, and church-wide events."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Church Calendar"
            title="Gatherings That Help People Connect"
            description="Use these moments to join the church family, invite a friend, or plan around the next ministry opportunity."
          />
          <div className="grid-three">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <span className="media-badge is-service">{event.type}</span>
                <p>{event.date}</p>
                <h3>{event.title}</h3>
                <p className="event-meta">{event.audience}</p>
                <p>{event.description}</p>
                {event.external ? (
                  <a className="card-link" href={event.ctaHref} target="_blank" rel="noreferrer">
                    {event.ctaLabel}
                  </a>
                ) : (
                  <Link className="card-link" to={event.ctaHref}>
                    {event.ctaLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default EventsPage
