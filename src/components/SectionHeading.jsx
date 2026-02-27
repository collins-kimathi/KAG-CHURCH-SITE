function SectionHeading({ eyebrow, title, description, delay = 0 }) {
  return (
    <div className="section-heading" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
