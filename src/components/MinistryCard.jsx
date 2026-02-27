function MinistryCard({ name, description }) {
  return (
    <article className="ministry-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default MinistryCard
