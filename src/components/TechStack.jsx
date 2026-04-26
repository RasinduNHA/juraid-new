import { motion } from 'framer-motion';

const technologies = [
  { name: 'Neo4j', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'FastAPI', color: 'bg-teal-100 text-teal-700 border-teal-200' },
  { name: 'Legal-BERT', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { name: 'LangChain', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { name: 'Redis', color: 'bg-red-100 text-red-700 border-red-200' },
];

function TechStack() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">
          Technologies Powering JuriAid
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-2xl border font-bold text-lg tracking-tight shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${tech.color}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
