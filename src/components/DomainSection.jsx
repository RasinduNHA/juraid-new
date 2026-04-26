import { motion } from 'framer-motion';
import { BookOpen, Scale, MessageSquareText, Blocks } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { domainCards } from '../data/siteData';

// Map icons to domain titles based on their index
const iconMap = [
  <BookOpen className="text-teal-500 w-8 h-8" />,
  <Scale className="text-blue-500 w-8 h-8" />,
  <MessageSquareText className="text-teal-500 w-8 h-8" />,
  <Blocks className="text-blue-500 w-8 h-8" />
];

function DomainSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="domain" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Research Domain"
          title="Core Innovation Areas"
          subtitle="JuriAid combines legal NLP, retrieval intelligence, and secure agent orchestration to support modern evidence-based legal workflows."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {domainCards.map((card, index) => (
            <motion.article 
              key={card.title} 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-white transition-colors border border-slate-100 shadow-sm">
                {iconMap[index % iconMap.length]}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              
              <ul className="space-y-3">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 shrink-0"></div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DomainSection;
