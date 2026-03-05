import { useState } from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import FooterCta from '../components/FooterCta'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import SiteFooter from '../components/SiteFooter'
import VideoModal from '../components/VideoModal'

const services = [
  { name: 'Sunday Worship', time: 'Every Sunday | 9:00 AM - 12:00 PM' },
  { name: 'Bible Study', time: 'Every Tuesday | 6:00 PM - 7:30 PM' },
  { name: 'Prayer Service', time: 'Every Wednesday | 6:00 PM - 7:30 PM' },
]

const ministries = [
  {
    title: 'Worship God',
    text: 'We exist to worship God in Spirit and truth through Christ-centered gatherings.',
    image:
      'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Evangelize',
    text: 'We are committed to evangelizing all communities with the gospel of Jesus Christ.',
    image:
      'https://images.pexels.com/photos/8468472/pexels-photo-8468472.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Disciple And Serve',
    text: 'We disciple believers and serve communities through the love and transforming power of Jesus Christ.',
    image:
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const sermons = [
  {
    id: 'FqehoHp_Qos',
    date: 'KAG Chuka Channel',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    title: 'How Can We Have Hope When Everything Looks Hopeless? - Rev. Josiah Kariuki',
    description:
      'A faith-building message on finding biblical hope even in difficult and uncertain seasons.',
  },
  {
    id: 'IltAy2cKgWg',
    date: 'KAG Chuka Channel',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    title: 'God is Love - Rev. Josiah Kariuki',
    description:
      'A sermon focused on the love of God and how believers are called to live it out daily.',
  },
  {
    id: 'TOfv0y3Pzhk',
    date: 'KAG Chuka Channel',
    type: 'Sermon',
    speaker: 'Rev. Josiah Kariuki',
    title: 'The Spirit of Fear - Rev. Josiah Kariuki',
    description:
      'Biblical teaching on overcoming fear through faith, prayer, and trust in God.',
  },
]

const galleryPreview = [
  'https://i.ytimg.com/vi/FqehoHp_Qos/hqdefault.jpg',
  'https://i.ytimg.com/vi/IltAy2cKgWg/hqdefault.jpg',
  'https://i.ytimg.com/vi/TOfv0y3Pzhk/hqdefault.jpg',
  'https://i.ytimg.com/vi/9Nnk63y2naY/hqdefault.jpg',
]

function HomePage() {
  const [activeSermon, setActiveSermon] = useState(null)

  return (
    <div className="site-shell">
      <HeroSection />

      <main>
        <section className="section home-about">
          <article className="image-panel" data-reveal>
            <img
              src="https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Church interior"
            />
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="About Our Church"
              title="A Theologically Sound And Culturally Relevant Church"
              description="Kenya Assemblies of God (KAG) was planted in Kenya in 1972 by the US Assemblies of God Mission through the Oklahoma District of US Assemblies of God."
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
            {services.map((service, index) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                time={service.time}
                delay={index * 120}
              />
            ))}
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
          />
          <div className="feature-grid">
            {ministries.map((item, index) => (
              <article
                key={item.title}
                className="feature-card"
                data-reveal
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-banner">
          <article data-reveal>
            <p className="eyebrow">Our Vision</p>
            <h2>
              To raise Holy Spirit empowered leaders who will inspire and resource a
              generation to serve and influence every sphere of society through the
              love of Jesus Christ in collaboration with His global church.
            </h2>
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p className="eyebrow">Our Mission</p>
            <p>
              KAG&apos;s mission is to raise a theologically sound and culturally
              relevant church that is evangelizing, equipping and engaging all
              communities with the gospel and the transforming power of Jesus Christ.
            </p>
          </article>
        </section>

        <section className="section events">
          <SectionHeading
            eyebrow="Latest Sermons"
            title="Recent Messages From KAG Chuka YouTube"
          />
          <div className="event-list">
            {sermons.map((sermon, index) => (
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
            <a
              className="button-link"
              href="https://www.youtube.com/@kagchukachurch"
              target="_blank"
              rel="noreferrer"
            >
              Open KAG Church Channel
            </a>
          </div>
        </section>

        <section className="section">
          <div className="gallery-strip">
            {galleryPreview.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Church gallery highlight"
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              />
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
