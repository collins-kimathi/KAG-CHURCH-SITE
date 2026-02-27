import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const values = [
  {
    title: 'Biblical Truth',
    text: 'Every message and ministry is anchored in Scripture.',
  },
  {
    title: 'Prayer Culture',
    text: 'We seek God first in personal and corporate prayer.',
  },
  {
    title: 'Holy Living',
    text: 'We pursue a life that reflects Christ in word and action.',
  },
  {
    title: 'Compassionate Mission',
    text: 'We serve communities through evangelism and practical care.',
  },
]

function AboutPage() {
  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="About Us"
        title="About Our Church"
        subtitle="Kenya Assemblies of God is a Christ-centered church family with a passion for worship, discipleship, and community transformation."
      />

      <main>
        <section className="section home-about">
          <article className="image-panel" data-reveal>
            <img
              src="https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Church congregation"
            />
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building Faith, Family, And Mission"
              description="Our church exists to proclaim the gospel, disciple believers, and help people discover God&apos;s purpose for their lives."
            />
            <p>
              Through prayer, worship, and practical ministry, we seek to
              impact homes, schools, and neighborhoods across Kenya.
            </p>
          </article>
        </section>

        <section className="section stat-strip" data-reveal>
          <article data-reveal>
            <h3>1988</h3>
            <p>Church Founded</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '90ms' }}>
            <h3>4</h3>
            <p>Weekly Services</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '180ms' }}>
            <h3>12</h3>
            <p>Community Projects</p>
          </article>
          <article data-reveal style={{ '--reveal-delay': '270ms' }}>
            <h3>40+</h3>
            <p>Volunteer Leaders</p>
          </article>
        </section>

        <section className="section">
          <SectionHeading eyebrow="Our Core Values" title="What Defines Our Ministry" />
          <div className="grid-four">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="card"
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-banner">
          <article data-reveal>
            <p className="eyebrow">Statement Of Faith</p>
            <h2>We Believe In Salvation Through Jesus Christ Alone</h2>
          </article>
          <article data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p>
              We affirm the authority of Scripture, the ministry of the Holy
              Spirit, and the calling of the Church to make disciples of all
              nations.
            </p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AboutPage
