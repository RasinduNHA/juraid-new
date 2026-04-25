import SectionTitle from './SectionTitle'

function ResourceSection({ id, eyebrow, title, subtitle, items }) {
  return (
    <section id={id} className="section shell">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid four-col">
        {items.map((item) => (
          <article key={item.title} className="resource-card glass reveal">
            <h3>{item.title}</h3>
            <a
              className="resource-link"
              href={item.file}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ResourceSection
