import EventCard from '../components/EventCard'
import FooterCta from '../components/FooterCta'
import HeroSection from '../components/HeroSection'
import MinistryCard from '../components/MinistryCard'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import SiteFooter from '../components/SiteFooter'

const services = [
  { name: 'Main Service', time: 'Sunday | 9:00 AM - 12:00 PM' },
  { name: 'Youth Service', time: 'Saturday | 3:00 PM - 5:00 PM' },
  { name: 'Midweek Prayer', time: 'Wednesday | 6:00 PM - 7:30 PM' },
]

const ministries = [
  {
    name: 'Children Ministry',
    description: 'Biblical foundations, joyful worship, and character formation.',
  },
  {
    name: 'Youth & Young Adults',
    description: 'Mentorship, discipleship groups, and campus-focused missions.',
  },
  {
    name: 'Women & Men Fellowships',
    description:
      'Prayer, accountability, leadership development, and practical care.',
  },
  {
    name: 'Missions & Outreach',
    description:
      'Church planting, compassion work, and evangelism in local communities.',
  },
]

const events = [
  { date: 'March 14, 2026', title: 'Family Prayer Night' },
  { date: 'April 4, 2026', title: 'Youth Worship Experience' },
  { date: 'April 18, 2026', title: 'Community Outreach Day' },
]

const highlights = [
  'Spirit-led worship and sound biblical teaching',
  'Intentional discipleship for every age group',
  'Community transformation through missions and outreach',
]

function HomePage() {
  return (
    <div className="site-shell">
      <HeroSection />

      <main>
        <section id="services" className="section intro-grid">
          <article>
            <SectionHeading
              eyebrow="Weekly Gatherings"
              title="Worship With Us This Sunday"
              description="We gather as one body to lift up Jesus, pray for one another, and grow deeper in God&apos;s Word."
            />
          </article>

          {services.map((service) => (
            <ServiceCard key={service.name} name={service.name} time={service.time} />
          ))}
        </section>

        <section id="ministries" className="section ministries">
          <SectionHeading
            eyebrow="Ministry Life"
            title="Growing Strong Believers Across Generations"
            description="Every ministry in KAG is designed to help people know Christ, grow in faith, and serve with purpose."
          />

          <div className="ministry-grid">
            {ministries.map((ministry) => (
              <MinistryCard
                key={ministry.name}
                name={ministry.name}
                description={ministry.description}
              />
            ))}
          </div>
        </section>

        <section className="section highlights">
          <SectionHeading eyebrow="Why KAG" title="A Church Built On Scripture And Prayer" />
          <div className="highlights-grid">
            {highlights.map((item) => (
              <article key={item} className="panel">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <article className="vision">
            <SectionHeading
              eyebrow="Our Vision"
              title="To Raise Spirit-Filled Disciples Transforming Kenya For Christ"
            />
          </article>
          <article className="mission">
            <p className="eyebrow">Our Mission</p>
            <p>
              To glorify God through worship, equip believers through biblical
              teaching, and serve communities through compassionate mission.
            </p>
          </article>
        </section>

        <section className="section events">
          <SectionHeading eyebrow="Upcoming Events" title="Church Calendar" />
          <div className="event-list">
            {events.map((event) => (
              <EventCard key={event.title} date={event.date} title={event.title} />
            ))}
          </div>
        </section>
      </main>

      <FooterCta />
      <SiteFooter />
    </div>
  )
}

export default HomePage
