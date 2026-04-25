import SectionTitle from './SectionTitle'
import { milestones } from '../data/siteData'

function MilestonesSection() {
  return (
    <section id="milestones" className="section shell">
      <SectionTitle
        eyebrow="Project Timeline"
        title="Milestones & Evaluations"
        subtitle="Structured academic progress checkpoints aligned with the final-year research assessment process."
      />
      <div className="timeline">
        {milestones.map((item, index) => (
          <article key={item.title} className="timeline-item glass reveal">
            <span className="timeline-step">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.percentage}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MilestonesSection
