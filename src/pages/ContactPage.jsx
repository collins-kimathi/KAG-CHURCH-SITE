import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

const serviceSchedule = [
  'Sunday Celebration Service: 9:00 AM - 12:00 PM',
  'Wednesday Prayer & Worship: 6:00 PM - 7:30 PM',
  'Saturday Youth Service: 3:00 PM - 5:00 PM',
]

function ContactPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="Contact KAG"
        title="Plan Your Visit And Connect With Us"
        subtitle="Whether you are new to church or looking for a spiritual home, we are ready to welcome you."
      />

      <main>
        <section className="section two-column">
          <article className="panel">
            <SectionHeading eyebrow="Visit Details" title="Service Times" />
            <ul className="list">
              {serviceSchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <SectionHeading eyebrow="Reach Out" title="Church Office" />
            <p>KAG Church, Nairobi County, Kenya</p>
            <p>Phone: +254 700 000 000</p>
            <p>Email: info@kagchurch.org</p>
          </article>
        </section>

        <section className="section">
          <article className="panel contact-form">
            <SectionHeading
              eyebrow="Send A Message"
              title="We Will Get Back To You"
              description="Share your prayer request, inquiry, or testimony."
            />
            <form>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your full name" />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your email address" />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Write your message here" />

              <button type="button">Send Message</button>
            </form>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ContactPage
