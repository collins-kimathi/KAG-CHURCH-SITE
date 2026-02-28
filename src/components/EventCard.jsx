function EventCard({
  date,
  title,
  delay = 0,
  href,
  onOpen,
  type = 'Sermon',
  speaker,
  description,
}) {
  const badgeClass =
    type === 'Praise & Worship'
      ? 'is-worship'
      : type === 'Online Service'
        ? 'is-service'
        : 'is-sermon'

  return (
    <article className="event-card" data-reveal style={{ '--reveal-delay': `${delay}ms` }}>
      <span className={`media-badge ${badgeClass}`}>{type}</span>
      <p>{date}</p>
      <h3>{title}</h3>
      {speaker ? <p className="event-meta">By: {speaker}</p> : null}
      {description ? <p className="event-desc">{description}</p> : null}
      {onOpen ? (
        <button type="button" className="card-link-btn" onClick={onOpen}>
          Watch Sermon Here
        </button>
      ) : null}
      {!onOpen && href ? (
        <a className="card-link" href={href} target="_blank" rel="noreferrer">
          Watch on YouTube
        </a>
      ) : null}
    </article>
  )
}

export default EventCard
