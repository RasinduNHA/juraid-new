import SectionTitle from './SectionTitle'
import { supervisors, teamMembers } from '../data/siteData'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function AboutSection() {
  return (
    <section id="about" className="section shell">
      <SectionTitle
        eyebrow="Research Team"
        title="About Us"
        subtitle="Interdisciplinary team building legal AI systems for practical court-ready intelligence."
      />
      <div className="grid four-col">
        {teamMembers.map((member) => (
          <article key={member.id} className="profile-card glass reveal">
            {member.image ? (
              <img
                className="avatar-img"
                src={member.image}
                alt={member.name}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  const next = event.currentTarget.nextElementSibling
                  if (next) next.style.display = 'grid'
                }}
              />
            ) : null}
            <div className="avatar avatar-fallback">{initials(member.name)}</div>
            <h3>{member.name}</h3>
            <p>{member.id}</p>
          </article>
        ))}
      </div>

      <div className="supervisor-grid">
        {supervisors.map((person) => (
          <article key={person.name} className="supervisor-card glass">
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
