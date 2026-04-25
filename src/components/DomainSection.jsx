import SectionTitle from './SectionTitle'
import { domainCards } from '../data/siteData'

function DomainSection() {
  return (
    <section id="domain" className="section shell">
      <SectionTitle
        eyebrow="Research Domain"
        title="Core Innovation Areas"
        subtitle="JuriAid combines legal NLP, retrieval intelligence, and secure agent orchestration to support modern evidence-based legal workflows."
      />
      <div className="grid four-col">
        {domainCards.map((card) => (
          <article key={card.title} className="card glass reveal">
            <h3>{card.title}</h3>
            <ul>
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DomainSection
