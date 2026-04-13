import { useState } from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import FooterCta from '../components/FooterCta'
import HeroSection from '../components/HeroSection'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import SiteFooter from '../components/SiteFooter'
import VideoModal from '../components/VideoModal'
import {
  churchInfo,
  communityPhotos,
  familyInfo,
  ministries,
  sermonVideos,
  serviceTimes,
  testimonies,
  upcomingEvents,
} from '../data/churchData'

function HomePage() {
  const [activeSermon, setActiveSermon] = useState(null)
  const featuredSermons = sermonVideos.slice(0, 3)

  return (
    <div className="site-shell">
      <Seo
        title="Home"
        description="Visit KAG Chuka Church for Sunday worship, prayer, family support, youth fellowship, sermons, and community life in Chuka Town."
      />
      <HeroSection />

      <main>
        <section className="section home-about">
          <article className="image-panel" data-reveal>
            <img
              src={communityPhotos[2].image}
              alt="KAG Chuka Church service moment"
            />
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="About Our Church"
              title="A Theologically Sound And Culturally Relevant Church"
              description={`${churchInfo.name} is a local Kenya Assemblies of God congregation serving families, students, and the wider community in ${churchInfo.location}.`}
            />
            <ul className="list check-list">
              <li>Member of the World Assemblies of God Fellowship</li>
              <li>Over 5,000 churches across Kenya as of 2026</li>
              <li>Vision to double reach and membership by 2030</li>
            </ul>
            <Link className="button-link" to="/about-us">
              Read More
            </Link>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Worship With Us"
            title="Regular Gatherings"
            description="Join one of our weekly services and be part of what God is doing."
          />
          <div className="grid-three">
            {serviceTimes.map((service, index) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                time={service.time}
                note={service.note}
                delay={index * 120}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Coming Up"
            title="Plan Around The Next Church Moments"
            description="These are the easiest next steps if you want to attend, connect, or invite someone with confidence."
          />
          <div className="grid-three">
            {upcomingEvents.slice(0, 3).map((event, index) => (
              <article
                key={event.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <span className="media-badge is-service">{event.type}</span>
                <p>{event.date}</p>
                <h3>{event.title}</h3>
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
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <Link className="button-link" to="/events">
              View All Upcoming Events
            </Link>
          </div>
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
            <p>Reach-Doubling Vision Year</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>Global</h3>
            <p>World AG Fellowship Member</p>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Our Ministries"
            title="Serving People At Every Stage Of Life"
            description="These ministry pathways help children, youth, families, worship teams, and outreach volunteers find a place to belong."
          />
          <div className="grid-three">
            {ministries.slice(0, 6).map((item, index) => (
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
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <Link className="button-link" to="/family-life">
              Explore Family And Ministry Life
            </Link>
          </div>
        </section>

        <section className="section split-banner">
          <article data-reveal>
            <p className="eyebrow">First Visit</p>
            <h2>Know What To Expect Before You Arrive</h2>
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p>{churchInfo.planVisitBlurb}</p>
            <Link className="button-link" to="/contact-us">
              Plan Your Visit
            </Link>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="For Families"
            title="Helpful Information Before Sunday"
            description="Parents and guardians usually want to know where their children fit, how youth can connect, and how support works for families."
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

        <section className="section events">
          <SectionHeading
            eyebrow="Latest Sermons"
            title="Recent Messages From KAG Chuka YouTube"
          />
          <div className="event-list">
            {featuredSermons.map((sermon, index) => (
              <EventCard
                key={sermon.title}
                date={sermon.date}
                title={sermon.title}
                delay={index * 120}
                type={sermon.type}
                speaker={sermon.speaker}
                description={sermon.description}
                onOpen={() => setActiveSermon(sermon)}
              />
            ))}
          </div>
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <Link className="button-link" to="/gallery">
              Browse Sermon Archive
            </Link>
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Testimonies"
            title="Stories That Reflect Church Life"
            description="Short testimonies help first-time visitors sense the kind of care, growth, and encouragement people experience here."
          />
          <div className="grid-three">
            {testimonies.map((item, index) => (
              <article
                key={item.name}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Community Life"
            title="Local Church Moments From The Media Archive"
            description="These images come from the church’s existing video media, giving the site a more local and authentic feel than generic stock imagery."
          />
          <div className="gallery-strip">
            {communityPhotos.map((item, index) => (
              <figure
                key={item.image}
                className="community-photo"
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <img src={item.image} alt={item.caption} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="centered-link" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <Link className="button-link" to="/gallery">
              View Full Gallery
            </Link>
          </div>
        </section>
      </main>

      <FooterCta />
      <SiteFooter />
      <VideoModal
        videoId={activeSermon?.id}
        title={activeSermon?.title}
        subtitle={
          activeSermon
            ? `${activeSermon.type} | ${activeSermon.speaker}`
            : undefined
        }
        description={activeSermon?.description}
        onClose={() => setActiveSermon(null)}
      />
    </div>
  )
}

export default HomePage
