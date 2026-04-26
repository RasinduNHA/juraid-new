import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { milestones } from '../data/siteData';

function MilestonesSection() {
  return (
    <section id="milestones" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Project Timeline"
          title="Milestones & Evaluations"
          subtitle="Structured academic progress checkpoints aligned with the final-year research assessment process."
        />
        
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.article 
                key={item.title} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-teal-500 border-4 border-slate-50 transform -translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
                    
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                         <CalendarCheck size={20} />
                      </div>
                      <span className="text-4xl font-bold text-slate-100 select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    {item.percentage && (
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                        {item.percentage}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilestonesSection;
