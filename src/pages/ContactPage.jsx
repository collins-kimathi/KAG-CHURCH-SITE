import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import kagLogo from '../../Images/KAG-LOGO.webp'

const contactItems = [
  { title: 'Our Address', value: 'KAG Church, Nairobi County, Kenya' },
  { title: 'Call Us', value: '+254 700 000 000' },
  { title: 'Email Us', value: 'info@kagchurch.org' },
]

function ContactPage() {
  return (
    <div className="site-shell">
      <PageHero
        breadcrumb="Contact Us"
        title="Contact Us"
        subtitle="Reach out to our church office for prayer, counseling, service inquiries, and ministry information."
      />

      <main>
        <section className="section">
          <div className="grid-three">
            {contactItems.map((item, index) => (
              <article
                key={item.title}
                className="card contact-card"
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-column contact-layout">
          <article className="panel contact-form" data-reveal>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Send Us A Message"
              description="Fill out the form and our team will get back to you."
            />

            <form>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your full name" />

              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your email address"
              />

              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" placeholder="Your phone number" />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Write your prayer request or message"
              />

              <button type="button">Submit Message</button>
            </form>
          </article>

          <article
            className="panel map-panel"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <SectionHeading
              eyebrow="Visit Office"
              title="Church Location"
              description="You can also visit us physically during office hours."
            />
            <img className="contact-logo" src={kagLogo} alt="KAG Church logo" />
            <iframe
              title="KAG Church Map"
              className="map-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sKAG+Chuka+Town!6i14!3m1!1sen!5m1!1sen"
            />
            <p>Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ContactPage
