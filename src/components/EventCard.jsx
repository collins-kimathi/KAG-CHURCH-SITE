function EventCard({ date, title, delay = 0 }) {
  return (
    <article className="event-card" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <p>{date}</p>
      <h3>{title}</h3>
    </article>
  )
}

export default EventCard
