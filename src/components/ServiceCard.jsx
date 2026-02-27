function ServiceCard({ name, time }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{time}</p>
    </article>
  )
}

export default ServiceCard
