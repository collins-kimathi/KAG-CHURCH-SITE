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
  //badge class assignment
  let badgeClass = 'is-sermon'; // default class

  if (type === 'Praise & Worship') {
    badgeClass = 'is-worship';
  } else if (type === 'Online Service') {
    badgeClass = 'is-service';
  }

  return (
    <article
      className="event-card"
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {/* Badge showing the type */}
      <span className={`media-badge ${badgeClass}`}>{type}</span>

      {/* Event date */}
      <p>{date}</p>

      {/* Event title */}
      <h3>{title}</h3>

      {/* Speaker info, shown only if available */}
      {speaker && <p className="event-meta">By: {speaker}</p>}

      {/* Description, shown only if available */}
      {description && <p className="event-desc">{description}</p>}

      {/* Watch button, shown if onOpen function is provided */}
      {onOpen && (
        <button type="button" className="card-link-btn" onClick={onOpen}>
          Watch Sermon Here
        </button>
      )}

      {/* External link, shown if href is provided and onOpen is not */}
      {!onOpen && href && (
        <a className="card-link" href={href} target="_blank" rel="noreferrer">
          Watch on YouTube
        </a>
      )}
    </article>
  );
}

export default EventCard;