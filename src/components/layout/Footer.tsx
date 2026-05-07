import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-muted py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-2xl tracking-tighter text-white italic">
              ELITE <span className="text-accent not-italic">DIGITAL</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted">
              USA Authority Agency
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-xs font-medium">
            Deploying enterprise-level topical authority through surgical-level semantic optimization. USA based, globally focused.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-[#050505] transition-all cursor-pointer">
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Navigation</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-accent transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Systems</h3>
          <ul className="space-y-4 text-xs font-medium">
            <li className="flex gap-3 items-center group cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-accent transition-colors underline decoration-white/10 decoration-1 underline-offset-4">03124038455</span>
            </li>
            <li className="flex gap-3 items-center group cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-accent transition-colors underline decoration-white/10 decoration-1 underline-offset-4">mudasaralip726@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
           <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">EEAT Protocol</h3>
           <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-4">
             <div className="flex justify-between items-center text-[10px]">
               <span className="font-bold text-zinc-500">Node Status</span>
               <span className="text-accent font-black tracking-widest">OPTIMIZED</span>
             </div>
             <div className="h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full w-[88%] bg-accent shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
             </div>
             <p className="text-[9px] text-zinc-500 leading-relaxed font-medium uppercase tracking-widest">
               Enterprise-level authority signals deployed for USA Market Nodes.
             </p>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p className="text-zinc-600">&copy; {new Date().getFullYear()} Elite Digital Agency. Authority Registered.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="text-zinc-600 hover:text-accent transition-colors">Privacy</Link>
          <Link to="/terms" className="text-zinc-600 hover:text-accent transition-colors">EEAT Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
