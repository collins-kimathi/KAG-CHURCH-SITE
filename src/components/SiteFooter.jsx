function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <article>
          <h3>Kenya Assemblies of God</h3>
          <p>
            A Pentecostal church family committed to worship, discipleship, and
            community transformation in Kenya.
          </p>
        </article>

        <article>
          <h3>Quick Links</h3>
          <p>
            <a href="#/">Home</a> | <a href="#/about-us">About Us</a> |{' '}
            <a href="#/ministers">Ministers</a>
          </p>
          <p>
            <a href="#/gallery">Gallery</a> |{' '}
            <a href="#/contact-us">Contact Us</a>
          </p>
        </article>

        <article>
          <h3>Reach Us</h3>
          <p>KAG Church, Nairobi County, Kenya</p>
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
