function ServiceCard({ name, time, note, delay = 0 }) {
  return (
    <article className="card" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <h3>{name}</h3>
      <p>{time}</p>
      {note ? <p>{note}</p> : null}
    </article>
  )
}

export default ServiceCard
