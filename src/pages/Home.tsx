import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Clock, Award, Hammer, Paintbrush, Bath, UtensilsCrossed, Calendar, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '@/src/components/seo/Meta';
import { cn } from '@/src/lib/utils';
import { SERVICES } from '@/src/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Meta 
        title="Elite Digital Agency USA | Semantic SEO & Shopify Experts"
        description="Rank #1 with our USA-based digital agency. Specializing in Semantic SEO, Shopify development, and high-performance Web Architecture for enterprise growth."
        keywords={['Shopify Development Services USA', 'SEO Agency USA', 'Web Development Company USA', 'WordPress Development Services USA', 'Semantic SEO Expert']}
      />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center bg-[#050505] overflow-hidden py-24 md:py-0">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent)]" />
           <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-emerald-950/20 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full pt-20 md:pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
              <span className="sleek-badge">Semantic SEO Elite</span>
              <span className="text-muted text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                USA Ranking Optimization Active
              </span>
            </div>
            
            <h1 className="text-white font-black text-5xl sm:text-7xl md:text-[11rem] leading-[0.75] tracking-tighter mb-10 md:mb-12 italic uppercase">
              RANK <br />
              <span className="text-accent underline decoration-white/5 underline-offset-[16px] not-italic">ELITE.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-end">
              <div className="space-y-8">
                <p className="text-muted text-lg md:text-2xl max-w-xl leading-relaxed font-medium italic">
                  We don't just build websites; we engineer <span className="text-white">Topical Authority</span> through Entity-based SEO and Enterprise Shopify architectures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-accent text-[#050505] px-10 md:px-12 py-5 md:py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all hover:scale-105 shadow-2xl shadow-accent/20 text-center"
                  >
                    Initialize Audit
                  </Link>
                  <Link 
                    to="/services" 
                    className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 md:px-12 py-5 md:py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all text-center"
                  >
                    Analyze Nodes
                  </Link>
                </div>
              </div>

              <div className="hidden md:block p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                 <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-muted">
                    <span>Crawl Depth</span>
                    <span className="text-accent">98.2%</span>
                 </div>
                 <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '98.2%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-accent shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    />
                 </div>
                 <p className="text-[11px] text-muted leading-relaxed italic opacity-60">
                   "Deploying NLP keywords and LSI variations across enterprise Shopify clusters to secure featured snippet dominance."
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Proof */}
      <section className="bg-[#0a0a0a] py-20 md:py-32 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { val: 'TOP 1%', lbl: 'Search Visibility' },
              { val: 'NLP-01', lbl: 'Entity Logic' },
              { val: 'EEAT', lbl: 'Trust Signal Rank' },
              { val: '24/7', lbl: 'Node Monitoring' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#050505] border border-white/5 p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] group hover:border-accent/40 transition-all shadow-2xl flex flex-col justify-center text-center">
                <div className="text-2xl md:text-4xl font-black text-white mb-2 group-hover:text-accent transition-colors tracking-tighter italic">{stat.val}</div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-muted">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Mesh */}
      <section className="py-24 md:py-40 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 md:mb-6 block">Intelligence Stack</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.8] uppercase italic">
              ENGINEERED <br />
              <span className="text-muted not-italic opacity-30">GROWTH.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {SERVICES.map((svc) => (
              <Link 
                key={svc.id} 
                to={svc.href} 
                className="group p-10 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:bg-accent/5 hover:border-accent/30 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 border border-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center text-accent mb-8 md:mb-10 group-hover:bg-accent group-hover:text-[#050505] transition-all duration-500">
                  <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 tracking-tighter italic uppercase">{svc.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed font-medium mb-10 md:mb-12 opacity-80 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-xs md:text-sm">
                  {svc.description}
                </p>
                <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  INSPECT NODE <ArrowRight className="w-4 h-4 group-hover:translate-x-4 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Section */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
           <div className="lg:col-span-12 text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] italic uppercase overflow-hidden">
                WHY WE <br />
                <span className="text-accent not-italic">DOMINATE.</span>
              </h2>
           </div>

           <div className="lg:col-span-4 space-y-6 md:space-y-8">
              <div className="p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem]">
                 <h4 className="text-lg md:text-xl font-black text-white mb-3 md:mb-4 uppercase tracking-tighter italic">Semantic Priority</h4>
                 <p className="text-[11px] md:text-sm text-muted leading-relaxed font-medium uppercase tracking-widest opacity-70">We map every keyword to an entity, ensuring search engines understand your authority at a conceptual level.</p>
              </div>
              <div className="p-8 md:p-10 bg-accent rounded-[2rem] md:rounded-[2.5rem] text-[#050505]">
                 <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tighter italic">USA-Targeted</h4>
                 <p className="text-[11px] md:text-sm font-bold leading-relaxed uppercase tracking-widest">Precision localization for regional dominance and national scale across the USA market node.</p>
              </div>
           </div>

           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { t: 'Liquid Optimization', d: 'Shopify-specific performance tuning for sub-1s load times.' },
                { t: 'Authority Siloing', d: 'Architecting content hierarchies that distribute link equity.' },
                { t: 'User Psychology', d: 'Conversion-focused UX writing that aligns with search intent.' },
                { t: 'Technical Dominance', d: 'Perfect Core Web Vitals across every digital asset.' }
              ].map((f, i) => (
                <div key={i} className="p-10 md:p-12 bg-[#050505] border border-white/5 rounded-[2rem] md:rounded-[3rem] group hover:border-accent/40 hover:bg-white/[0.02] transition-all">
                   <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent mb-6 md:mb-8 group-hover:bg-accent group-hover:text-[#050505] transition-all italic font-black text-xs">
                     {i + 1}
                   </div>
                   <h5 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 uppercase tracking-tighter italic">{f.t}</h5>
                   <p className="text-[10px] md:text-[11px] text-muted leading-relaxed font-bold uppercase tracking-[0.2em] opacity-60 italic">{f.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-48 bg-accent overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-[#050505] text-5xl md:text-[8rem] lg:text-[11rem] font-black mb-10 md:mb-16 leading-[0.8] tracking-tighter italic uppercase underline decoration-[#050505]/5 underline-offset-8 md:underline-offset-[12px]">
            SECURE <br />
            <span className="not-italic uppercase tracking-tight">MARKET.</span>
          </h2>
          <p className="text-[#050505] text-lg md:text-3xl max-w-2xl mb-12 md:mb-16 font-black uppercase tracking-tight italic opacity-90">
            Transform your digital presence into a high-converting authority node within the USA search network.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#050505] text-white px-10 md:px-20 py-6 md:py-10 rounded-[2rem] md:rounded-[3rem] font-black text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] hover:scale-105 transition-all shadow-2xl flex items-center gap-6"
          >
            Deploy Agency node <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
