function ServiceCard({ name, time, delay = 0 }) {
  return (
    <article className="card" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <h3>{name}</h3>
      <p>{time}</p>
    </article>
  )
}

export default ServiceCard
