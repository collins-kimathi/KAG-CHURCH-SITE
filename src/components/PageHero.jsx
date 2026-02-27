import SiteHeader from './SiteHeader'

function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <SiteHeader transparent />
      <div className="page-hero-content" data-reveal>
        <p className="breadcrumb">Home / {breadcrumb}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero
