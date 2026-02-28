import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const ministerCategories = [
  {
    title: 'Senior Leadership',
    description:
      'The core shepherding team providing spiritual covering, vision, and doctrinal leadership.',
    ministers: [
      {
        name: 'Rev. Peter Maina',
        role: 'Senior Minister',
        image:
          'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Leads church vision, preaching, and leadership development across the congregation.',
      },
      {
        name: 'Rev. Grace Wanjiku',
        role: 'Associate Minister',
        image:
          'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Oversees discipleship structures, women ministries, and family care programs.',
      },
      {
        name: 'Rev. Joseph Muriuki',
        role: 'Teaching Minister',
        image:
          'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Coordinates Bible teaching tracks, leadership classes, and theology training.',
      },
    ],
  },
  {
    title: 'Church Elders',
    description:
      'Trusted senior leaders who provide accountability, prayer support, and wise counsel.',
    ministers: [
      {
        name: 'Elder Samuel Kariuki',
        role: 'Lead Elder',
        image:
          'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Supports strategic governance, mentorship, and long-term ministry planning.',
      },
      {
        name: 'Elder Margaret Njeri',
        role: 'Elder - Pastoral Care',
        image:
          'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Leads care ministry for families, widows, and members in seasons of transition.',
      },
      {
        name: 'Elder Daniel Mwangi',
        role: 'Elder - Administration',
        image:
          'https://images.pexels.com/photos/6984666/pexels-photo-6984666.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Supports church operations, stewardship processes, and ministry coordination.',
      },
    ],
  },
  {
    title: 'Department Ministers',
    description:
      'Senior ministry leaders guiding worship, youth, children, missions, and outreach teams.',
    ministers: [
      {
        name: 'Minister Ruth Muthoni',
        role: 'Worship Ministry Lead',
        image:
          'https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Leads worship teams and develops Christ-centered praise and prayer culture.',
      },
      {
        name: 'Minister Kevin Gitonga',
        role: 'Youth Ministry Lead',
        image:
          'https://images.pexels.com/photos/8468449/pexels-photo-8468449.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Builds youth discipleship pathways through mentorship, fellowship, and missions.',
      },
      {
        name: 'Minister Lucy Wairimu',
        role: 'Children Ministry Lead',
        image:
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bio: 'Oversees children discipleship with age-based Bible learning and parent support.',
      },
    ],
  },
]

const milestones = [
  { year: '2001', detail: 'Leadership team established for structured church growth' },
  { year: '2008', detail: 'Senior ministry council commissioned' },
  { year: '2014', detail: 'Discipleship and mentorship pathways launched' },
  { year: '2021', detail: 'Outreach and mission partnerships expanded nationwide' },
]

function PastorPage() {
  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="Ministers"
        title="Our Ministers"
        subtitle="Meet the senior church leaders serving with vision, wisdom, and care."
      />

      <main>
        <section className="section">
          <SectionHeading
            eyebrow="Church Leadership"
            title="Senior Ministers By Category"
            description="Our ministers serve in complementary roles to shepherd people, equip leaders, and strengthen the mission of the church."
          />
          <div className="minister-categories">
            {ministerCategories.map((category, categoryIndex) => (
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
                <div className="minister-grid">
                  {category.ministers.map((person, personIndex) => (
                    <article
                      key={person.name}
                      className="minister-card"
                      data-reveal
                      style={{ '--reveal-delay': `${personIndex * 90}ms` }}
                    >
                      <img src={person.image} alt={`${person.name} portrait`} />
                      <div>
                        <p className="minister-role">{person.role}</p>
                        <h3>{person.name}</h3>
                        <p>{person.bio}</p>
                      </div>
                    </article>
                  ))}
                </div>
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
            <h3>9</h3>
            <p>Senior Ministers</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '90ms' }}>
            <h3>3</h3>
            <p>Leadership Categories</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '180ms' }}>
            <h3>35+</h3>
            <p>Active Church Departments</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>50+</h3>
            <p>Annual Outreach Programs</p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PastorPage
