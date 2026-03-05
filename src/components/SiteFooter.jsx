import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <article>
          <h3>Kenya Assemblies of God</h3>
          <p>
            A Pentecostal denomination founded in Kenya in 1972, now a family
            of over 5,000 churches in  (2026), committed to evangelizing,
            equipping, and engaging communities with the gospel of Jesus Christ.
          </p>
        </article>

        <article>
          <h3>Quick Links</h3>
          <p>
            <Link to="/">Home</Link> | <Link to="/about-us">About Us</Link> |{' '}
            <Link to="/ministers">Ministers</Link>
          </p>
          <p>
            <Link to="/gallery">Gallery</Link> | <Link to="/contact-us">Contact Us</Link>
          </p>
        </article>

        <article>
          <h3>Reach Us</h3>
          <p>KAG Church, Tharaka-nithi County, Kenya</p>
          <p>+254 700 000 000</p>
          <p>info@kagchurch.org</p>
        </article>
      </div>
      <p className="footer-note">
        &copy; {new Date().getFullYear()} Kenya Assemblies of God. All rights
        reserved.
      </p>
    </footer>
  )
}

export default SiteFooter
