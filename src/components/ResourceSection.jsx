import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, FolderOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Modal from './ui/Modal';

function ResourceSection({ id, eyebrow, title, subtitle, items }) {
  const [activeGroup, setActiveGroup] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item) => (
            <motion.article 
              key={item.title} 
              variants={itemVariants}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.files ? <FolderOpen size={28} /> : <FileText size={28} />}
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex-grow">{item.title}</h3>
              
              <div className="w-full">
                {item.files ? (
                  <button
                    onClick={() => setActiveGroup(item)}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 py-3 rounded-xl font-semibold transition-colors duration-300 cursor-pointer"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                ) : (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 py-3 rounded-xl font-semibold transition-colors duration-300"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Document Group Modal */}
      <Modal 
        isOpen={!!activeGroup} 
        onClose={() => setActiveGroup(null)}
        title={activeGroup?.title || "Documents"}
      >
        <div className="space-y-3">
          {activeGroup?.files?.map((f, idx) => (
            <a
              key={idx}
              href={f.file}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 rounded-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-teal-800">{f.label}</span>
              </div>
              <div className="p-2 bg-white rounded-full shadow-sm text-slate-400 group-hover:text-teal-600 transition-colors">
                <Download size={18} />
              </div>
            </a>
          ))}
        </div>
      </Modal>

    </section>
  );
}

export default ResourceSection;
