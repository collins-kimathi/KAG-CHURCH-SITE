import { Link } from 'react-router-dom'

function FooterCta() {
  return (
    <section className="cta-banner">
      <div>
        <p className="eyebrow">Our Mission</p>
        <h2>Evangelizing, Equipping, And Engaging All Communities</h2>
        <p>Kenya Assemblies of God | Planting Hope Through The Gospel Of Jesus Christ</p>
      </div>
      <Link to="/contact-us">Contact Church Office</Link>
    </section>
  )
}

export default FooterCta
