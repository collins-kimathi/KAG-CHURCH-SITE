import { Link } from 'react-router-dom'
import { churchInfo } from '../data/churchData'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <article>
          <h3>{churchInfo.name}</h3>
          <p>
            A local congregation of Kenya Assemblies of God serving Chuka Town
            through worship, discipleship, prayer, family care, and community
            outreach.
          </p>
        </article>

        <article>
          <h3>Quick Links</h3>
          <p>
            <Link to="/">Home</Link> | <Link to="/about-us">About Us</Link> |{' '}
            <Link to="/events">Events</Link>
          </p>
          <p>
            <Link to="/family-life">Family Life</Link> | <Link to="/ministers">Leadership</Link>
          </p>
          <p>
            <Link to="/gallery">Sermons</Link> | <Link to="/giving">Giving</Link> |{' '}
            <Link to="/contact-us">Contact Us</Link>
          </p>
        </article>

        <article>
          <h3>Reach Us</h3>
          <p>{churchInfo.location}</p>
          <p>{churchInfo.phoneDisplay}</p>
          <p>{churchInfo.email}</p>
          <p>{churchInfo.officeHours}</p>
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
