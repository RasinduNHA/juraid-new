import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { supervisors, teamMembers } from '../data/siteData';

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function ProfileCard({ person, isSupervisor = false }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:border-teal-50 transition-colors duration-300">
        {person.image ? (
          <img
            className="w-full h-full object-cover"
            src={person.image}
            alt={person.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 flex items-center justify-center text-3xl font-bold tracking-wider ${person.image ? 'hidden' : 'flex'}`}
        >
          {initials(person.name)}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
      <p className="text-sm font-medium text-teal-600 mb-4">{person.role || person.id}</p>
      
      {person.email && (
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 w-full justify-center">
          <a 
            href={`mailto:${person.email}`} 
            className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors" 
            aria-label="Email Contact"
          >
            <Mail size={18} />
          </a>
        </div>
      )}
    </motion.article>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Research Team"
          title="Meet Our Team"
          subtitle="Interdisciplinary team building legal AI systems for practical court-ready intelligence."
        />
        
        {/* Supervisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8 tracking-tight">Supervisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supervisors.map((person) => (
              <ProfileCard key={person.name} person={person} isSupervisor={true} />
            ))}
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16"></div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8 tracking-tight">Undergraduates</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <ProfileCard key={member.id} person={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
