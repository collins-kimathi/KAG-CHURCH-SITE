import MinistryCard from '../components/MinistryCard'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const ministries = [
  {
    name: 'Children Ministry',
    description: 'Sunday Bible classes and children worship for ages 4-12.',
  },
  {
    name: 'Teens & Youth',
    description: 'Mentorship, worship nights, and leadership training for students.',
  },
  {
    name: 'Young Adults',
    description: 'Life groups for campus and early-career believers.',
  },
  {
    name: 'Women Ministry',
    description: 'Prayer fellowship, discipleship tracks, and family support.',
  },
  {
    name: 'Men Ministry',
    description: 'Accountability, spiritual growth, and servant leadership.',
  },
  {
    name: 'Missions Team',
    description: 'Evangelism, church planting support, and compassion outreach.',
  },
]

function MinistriesPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="KAG Ministries"
        title="Every Generation Equipped To Know Christ And Serve"
        subtitle="Our ministries help children, youth, families, and leaders grow in faith and influence."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Where You Can Serve"
            title="Join A Ministry Community"
            description="Find a place to belong, learn, and make impact in church and society."
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
      </main>

      <SiteFooter />
    </div>
  )
}

export default MinistriesPage
