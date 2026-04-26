import { motion } from 'framer-motion';
import { Scale, ArrowRight, Gavel } from 'lucide-react';

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 opacity-100" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 w-fit">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">Final-Year Research Project</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              JuriAid: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Legal Research & <br/> Evidence Assistant
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              AI-powered legal research platform for Sri Lankan case retrieval, law
              amendment tracking, automated legal question generation, and
              multi-agent reasoning.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="#domain" 
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Explore Research
                <ArrowRight size={20} />
              </a>
              <a 
                href="#documents" 
                className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white border border-slate-600 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                View Documents
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-dark rounded-2xl p-8 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
              
              <div className="flex flex-col items-center justify-center gap-8 py-12">
                <div className="flex items-center gap-6 text-slate-400">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
                      <Scale size={48} className="text-teal-400" />
                    </div>
                    <span className="text-sm font-semibold tracking-widest">LAW</span>
                  </motion.div>
                  
                  <div className="w-16 h-px bg-slate-700 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500" />
                  </div>
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
                      <Gavel size={48} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold tracking-widest">AI</span>
                  </motion.div>
                </div>
                
                <p className="text-center text-slate-300 font-medium">
                  Legal-tech intelligence for <br/> next-generation judicial research.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
