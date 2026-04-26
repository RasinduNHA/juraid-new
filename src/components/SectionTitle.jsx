import { motion } from 'framer-motion';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {eyebrow && (
        <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
}

export default SectionTitle;
