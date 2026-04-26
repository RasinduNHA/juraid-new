import { Code2, Globe, PlaySquare } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className="bg-teal-500 text-slate-900 px-2 py-1 rounded-md font-bold leading-none">J</span>
            <span className="text-xl font-bold text-white tracking-tight">JuriAid</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Globe size={24} />
            </a>
            <a 
              href="https://github.com/ChathuminaK/JuriAid_App_Backend" 
              className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Code2 size={24} />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all"
              aria-label="YouTube"
            >
              <PlaySquare size={24} />
            </a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>JuriAid Legal-Tech Initiative</p>
          <p>&copy; {new Date().getFullYear()} JuriAid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
