import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Globe, Zap, Search, Layout, CheckCircle } from 'lucide-react';
import Meta from '@/src/components/seo/Meta';
import PageNavigation from '@/src/components/layout/PageNavigation';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  const serviceIcons = [Search, Layout, Layers, Zap];

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="Elite Digital Agency Services | SEO, Shopify & Web Development"
        description="Dominate your niche with our USA-based agency services. Specialized in Shopify engineering, Semantic SEO, and high-performance Web Architecture for enterprise business growth."
        keywords={['Shopify Development Services USA', 'SEO Agency USA', 'Web Development Company USA', 'WordPress Development Services USA', 'Technical SEO Experts']}
      />
      <PageNavigation />

      {/* Hero */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="max-w-4xl text-left md:text-center md:mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-8 block">Intelligence Stack</span>
              <h1 className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] md:leading-[0.75] mb-10 md:mb-12 uppercase">
                STRATEGIC <br />
                <span className="text-accent not-italic">NODES.</span>
              </h1>
              <p className="text-muted text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-bold italic opacity-80 underline decoration-white/5 underline-offset-8">
                "Engineering competitive authority through high-performance digital architectures and entity-based visibility."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24 md:py-40 px-6 sm:px-10 lg:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          {SERVICES.map((svc, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 bg-accent/10 border border-accent/20 text-accent text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl mb-8 md:mb-10 italic">
                    Node {i + 1} // {svc.id.replace('-', ' ')}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 md:mb-10 uppercase leading-[0.8] italic">{svc.title}</h2>
                  <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 md:mb-12 font-medium italic opacity-80">
                    {svc.description} We specialize in USA market dominance, deploying enterprise-grade frameworks that prioritize entity relevance and Core Web Vital perfection.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
                    {['Entity Mapping', 'Intent Alignment', 'Liquid Efficiency', 'Schema Dominance'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-white/80 italic">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent opacity-50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={svc.href} 
                    className="inline-flex items-center justify-center md:justify-start gap-4 bg-accent text-[#050505] px-10 md:px-12 py-5 md:py-6 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] hover:brightness-110 transition-all hover:scale-105 shadow-xl shadow-accent/20 w-full sm:w-auto"
                  >
                    Inspect Node Architecture
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`aspect-square bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="w-full h-full flex items-center justify-center p-32">
                     <Icon className="w-full h-full text-accent/10 group-hover:text-accent group-hover:scale-110 transition-all duration-[2s] ease-out" />
                   </div>
                   <div className="absolute bottom-12 left-12 flex items-center gap-4">
                     <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/80">Intelligence Active</span>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] border-y border-white/5 px-6 sm:px-10 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-950/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16">
          <div className="sleek-badge inline-block mx-auto">USA Ranking Protocol</div>
          <h2 className="text-4xl md:text-[8rem] font-black italic tracking-tighter leading-[0.85] md:leading-[0.75] text-white uppercase">THE AGENTIC <br /><span className="text-accent not-italic underline decoration-white/5 underline-offset-8 md:underline-offset-[20px]">MODALITY.</span></h2>
          <p className="text-muted text-lg md:text-2xl leading-relaxed font-bold italic max-w-3xl mx-auto opacity-80">
            Our proprietary "Semantic Dominance" framework ensures your digital nodes are seen by Google not as pages, but as definitive category authorities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-20">
             {[
               { icon: Globe, val: 'USA CORE', lbl: 'Regional Nodes' },
               { icon: Cpu, val: 'ENTITY v4', lbl: 'Logical Mapping' },
               { icon: Zap, val: 'ULTRA-LINK', lbl: 'Equity Flow' }
             ].map((m, i) => (
               <div key={i} className="p-10 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] group hover:border-accent/40 hover:bg-white/5 transition-all duration-700">
                 <m.icon className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-8 md:mb-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <div className="text-2xl md:text-3xl font-black text-white italic tracking-tighter mb-3 uppercase">{m.val}</div>
                 <div className="text-[9px] md:text-[10px] font-black text-muted uppercase tracking-[0.3em] md:tracking-[0.4em]">{m.lbl}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-[10rem] font-black text-[#050505] italic tracking-tighter mb-16 uppercase leading-[0.75]">
            DEPLOY YOUR <br /> <span className="not-italic">DOMINANCE.</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 bg-[#050505] text-white px-16 py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl"
          >
            Initialize Growth Node <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
