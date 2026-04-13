import { Link } from 'react-router-dom'

function FooterCta() {
  return (
    <section className="cta-banner">
      <div>
        <p className="eyebrow">Plan Your Visit</p>
        <h2>Join Us This Sunday In Chuka Town</h2>
        <p>Worship with us, meet the church family, and let us help you feel at home from your first visit.</p>
      </div>
      <Link to="/contact-us">Get Visit Details</Link>
    </section>
  )
}

export default FooterCta
