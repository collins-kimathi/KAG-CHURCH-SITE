function EventCard({ date, title }) {
  return (
    <article className="event-card">
      <p>{date}</p>
      <h3>{title}</h3>
    </article>
  )
}

export default EventCard
