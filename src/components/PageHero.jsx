import SiteHeader from './SiteHeader'

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <SiteHeader />
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero
