import { useState } from 'react'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import kagLogo from '../../Images/KAG-LOGO.webp'
import { churchInfo, serviceTimes } from '../data/churchData'

function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Visit Planning',
    message: '',
  })
  const [prayerValues, setPrayerValues] = useState({
    name: '',
    phone: '',
    request: '',
  })
  const [counselingValues, setCounselingValues] = useState({
    name: '',
    email: '',
    concern: '',
  })
  const [submitMessage, setSubmitMessage] = useState('')
  const [prayerStatus, setPrayerStatus] = useState('')
  const [counselingStatus, setCounselingStatus] = useState('')

  const openMailDraft = ({ subject, lines }) => {
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${churchInfo.email}?subject=${encodedSubject}&body=${encodedBody}`
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handlePrayerChange = ({ target: { name, value } }) => {
    setPrayerValues((current) => ({ ...current, [name]: value }))
  }

  const handleCounselingChange = ({ target: { name, value } }) => {
    setCounselingValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = formValues.name.trim()
    const email = formValues.email.trim()
    const phone = formValues.phone.trim()
    const inquiryType = formValues.inquiryType.trim()
    const message = formValues.message.trim()

    if (!name || !message) {
      setSubmitMessage('Please add your name and message so we can help you well.')
      return
    }

    openMailDraft({
      subject: `${inquiryType} from ${name}`,
      lines: [
        `Inquiry Type: ${inquiryType}`,
        `Name: ${name}`,
        `Email: ${email || 'Not provided'}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        'Message:',
        message,
      ],
    })
    setSubmitMessage(`Your email app should open with your message addressed to ${churchInfo.email}.`)
  }

  const handlePrayerSubmit = (event) => {
    event.preventDefault()

    if (!prayerValues.name.trim() || !prayerValues.request.trim()) {
      setPrayerStatus('Please add a name and prayer request before submitting.')
      return
    }

    openMailDraft({
      subject: `Prayer request from ${prayerValues.name.trim()}`,
      lines: [
        `Name: ${prayerValues.name.trim()}`,
        `Phone: ${prayerValues.phone.trim() || 'Not provided'}`,
        '',
        'Prayer Request:',
        prayerValues.request.trim(),
      ],
    })
    setPrayerStatus(`Your prayer request draft is ready to send to ${churchInfo.email}.`)
  }

  const handleCounselingSubmit = (event) => {
    event.preventDefault()

    if (!counselingValues.name.trim() || !counselingValues.concern.trim()) {
      setCounselingStatus('Please add a name and brief counseling need before submitting.')
      return
    }

    openMailDraft({
      subject: `Counseling request from ${counselingValues.name.trim()}`,
      lines: [
        `Name: ${counselingValues.name.trim()}`,
        `Email: ${counselingValues.email.trim() || 'Not provided'}`,
        '',
        'Counseling Need:',
        counselingValues.concern.trim(),
      ],
    })
    setCounselingStatus(`Your counseling request draft is ready to send to ${churchInfo.email}.`)
  }

  return (
    <div className="site-shell">
      <Seo
        title="Contact And Plan Your Visit"
        description="Contact KAG Chuka Church for visit planning, prayer requests, counseling, directions, service times, and WhatsApp support."
      />
      <PageHero
        breadcrumb="Contact Us"
        title="Contact Us"
        subtitle="Reach out for prayer, counseling, visit planning, service details, and ministry information."
      />

      <main>
        <section className="section">
          <div className="grid-three">
            {[
              { title: 'Visit Us', value: churchInfo.location },
              { title: 'Call Or WhatsApp', value: churchInfo.phoneDisplay },
              { title: 'Email The Office', value: churchInfo.email },
            ].map((item, index) => (
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
              description="Use the form to prepare an email to the church office with your prayer request, question, or visit inquiry."
            />

            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formValues.name}
                onChange={handleChange}
              />

              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formValues.email}
                onChange={handleChange}
              />

              <label htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formValues.phone}
                onChange={handleChange}
              />

              <label htmlFor="contact-inquiry-type">Inquiry Type</label>
              <select
                id="contact-inquiry-type"
                name="inquiryType"
                value={formValues.inquiryType}
                onChange={handleChange}
              >
                <option>Visit Planning</option>
                <option>Prayer Request</option>
                <option>Counseling</option>
                <option>Ministry Connection</option>
                <option>General Inquiry</option>
              </select>

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your prayer request or message"
                value={formValues.message}
                onChange={handleChange}
              />

              <button type="submit">Submit Message</button>
              {submitMessage ? <p className="form-status">{submitMessage}</p> : null}
            </form>

            <div className="contact-actions">
              <a className="button-link" href={churchInfo.phoneHref}>
                Call Church Office
              </a>
              <a className="button-link button-link-secondary" href={churchInfo.whatsappHref} target="_blank" rel="noreferrer">
                Chat On WhatsApp
              </a>
            </div>
          </article>

          <article
            className="panel map-panel"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <SectionHeading
              eyebrow="Visit Office"
              title="Church Location"
              description="You can also visit us physically during office hours or use the map link before traveling."
            />
            <img className="contact-logo" src={kagLogo} alt="KAG Church logo" />
            <iframe
              title="KAG Church Map"
              className="map-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={churchInfo.mapEmbed}
            />
            <p><strong>Office Hours:</strong> {churchInfo.officeHours}</p>
            <p><strong>Sunday Service:</strong> {serviceTimes[0].time}</p>
            <a className="card-link" href={churchInfo.mapLink} target="_blank" rel="noreferrer">
              Open In Google Maps
            </a>
          </article>
        </section>

        <section className="section two-column contact-layout">
          <article className="panel contact-form" data-reveal>
            <SectionHeading
              eyebrow="Prayer Care"
              title="Prayer Request Form"
              description="Use this if you want prayer support from the church team."
            />
            <form onSubmit={handlePrayerSubmit}>
              <label htmlFor="prayer-name">Name</label>
              <input
                id="prayer-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={prayerValues.name}
                onChange={handlePrayerChange}
              />

              <label htmlFor="prayer-phone">Phone</label>
              <input
                id="prayer-phone"
                name="phone"
                type="tel"
                placeholder="Optional phone number"
                value={prayerValues.phone}
                onChange={handlePrayerChange}
              />

              <label htmlFor="prayer-request">Prayer Request</label>
              <textarea
                id="prayer-request"
                name="request"
                rows="5"
                placeholder="Share what you would like prayer for"
                value={prayerValues.request}
                onChange={handlePrayerChange}
              />

              <button type="submit">Send Prayer Request</button>
              {prayerStatus ? <p className="form-status">{prayerStatus}</p> : null}
            </form>
          </article>

          <article className="panel contact-form" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <SectionHeading
              eyebrow="Pastoral Support"
              title="Counseling Request Form"
              description="Ask the church office to help arrange a pastoral or counseling conversation."
            />
            <form onSubmit={handleCounselingSubmit}>
              <label htmlFor="counseling-name">Name</label>
              <input
                id="counseling-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={counselingValues.name}
                onChange={handleCounselingChange}
              />

              <label htmlFor="counseling-email">Email</label>
              <input
                id="counseling-email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={counselingValues.email}
                onChange={handleCounselingChange}
              />

              <label htmlFor="counseling-concern">What do you need help with?</label>
              <textarea
                id="counseling-concern"
                name="concern"
                rows="5"
                placeholder="Briefly describe the support or conversation you are requesting"
                value={counselingValues.concern}
                onChange={handleCounselingChange}
              />

              <button type="submit">Request Counseling</button>
              {counselingStatus ? <p className="form-status">{counselingStatus}</p> : null}
            </form>
          </article>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Plan Ahead"
            title="How We Can Help Before You Arrive"
            description="If this will be your first time with us, these are the most common ways we support guests and members."
          />
          <div className="grid-three">
            <article className="card" data-reveal>
              <h3>First-Time Visit Help</h3>
              <p>Get directions, service time guidance, and help knowing what to expect on Sunday.</p>
            </article>
            <article className="card" data-reveal style={{ '--reveal-delay': '120ms' }}>
              <h3>Prayer And Counseling</h3>
              <p>Send a prayer request or ask the office to arrange pastoral follow-up and care.</p>
            </article>
            <article className="card" data-reveal style={{ '--reveal-delay': '240ms' }}>
              <h3>Ministry Connection</h3>
              <p>Ask to be connected to youth, worship, children, outreach, or discipleship teams.</p>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ContactPage
