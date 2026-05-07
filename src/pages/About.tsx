import { motion } from 'motion/react';
import { Award, Briefcase, Target, ShieldCheck, Cpu, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

export default function About() {
  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="Elite Digital Agency USA | About Our SEO & Shopify Experts"
        description="Meet the USA-based team behind your digital dominance. Specializing in Semantic SEO, Shopify architecture, and enterprise Web development for high-growth brands."
        keywords={['digital agency USA', 'SEO experts team', 'Shopify agency developers', 'semantic SEO agency', 'topical authority experts']}
      />
      <PageNavigation />
      
      {/* Brand Story Hero */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="sleek-badge mb-8 md:mb-10 mx-auto w-fit">USA Market Leaders</div>
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] mb-12 md:mb-16 uppercase">
              BEYOND <br />
              <span className="text-accent not-italic">DOMAIN.</span>
            </h1>
            <p className="text-lg md:text-3xl text-muted leading-relaxed font-bold italic opacity-80 decoration-accent/20 underline underline-offset-8">
              "We don't just build websites; we engineer <span className="text-white">Topical Authorities</span> that search engines trust as categorical leaders."
            </p>
          </div>
        </div>
      </section>

      {/* Experience & EEAT Section */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: Cpu, label: 'NLP Powered', detail: 'Semantic Intelligence' },
              { icon: Code, label: 'Hard-Coded', detail: 'Zero-Bloat Performance' },
              { icon: Target, label: 'USA Core', detail: 'Regional Dominance' },
              { icon: ShieldCheck, label: 'EEAT Valid', detail: 'Trust Architectures' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] group hover:border-accent/40 transition-all shadow-2xl">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-accent mb-6 md:mb-8 opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="text-[10px] md:text-sm font-black text-white uppercase tracking-widest italic leading-tight mb-1">{stat.label}</div>
                <div className="text-[8px] md:text-[10px] font-bold text-muted uppercase tracking-[0.2em]">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">The <span className="text-accent">Agency</span> <br /> Philosophy</h2>
            <div className="space-y-8 text-muted font-medium leading-loose text-lg">
              <p>
                In an era of generic AI-generated clutter, <strong className="text-white uppercase italic">Elite Digital</strong> stands as a guardian of authority. We specialize in <strong className="text-white underline decoration-accent/30 underline-offset-8">Topical Authority Mapping</strong> and <strong className="text-white">Entity-Based SEO</strong> to ensure your brand is seen as a definitive source of truth.
              </p>
              <p>
                Our mission is to bridge the gap between complex software engineering and high-level search psychology. Based in the USA, we manage digital nodes for global enterprise leaders who require precision, scale, and uncompromising security.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-10">
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-white italic">
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                Enterprise Shopify Partners
              </div>
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-white italic">
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                Technical SEO Merit Badge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-24 md:py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16 md:mb-24">
             <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 md:mb-6 block">Intelligence Matrix</span>
             <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-[0.85] md:leading-[0.8]">AGENCY <br /> <span className="text-muted not-italic opacity-30 italic">SPECTRUM.</span></h2>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
          >
            {[
              { 
                title: 'Search Intelligence', 
                items: ['Entity Relation Mapping', 'NLP Content Clustering', 'Knowledge Graph Sync', 'LSI Vector Search'] 
              },
              { 
                title: 'Architecture Node', 
                items: ['Headless Shopify Frameworks', 'Next.js Static Generation', 'Enterprise WP Hardening', 'API Webhook Mesh'] 
              },
              { 
                title: 'Conversion Path', 
                items: ['Search Intent Analytics', 'Cognitive UX Writing', 'Revenue Path Optimization', 'A/B Node Testing'] 
              }
            ].map((skill, i) => (
              <motion.div variants={item} key={i} className="p-10 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:bg-accent/5 hover:border-accent/30 transition-all group duration-700">
                <h3 className="text-lg md:text-xl font-black text-white mb-8 md:mb-10 italic tracking-tighter uppercase border-b border-white/10 pb-4 md:pb-6 group-hover:text-accent transition-colors">{skill.title}</h3>
                <ul className="space-y-4 md:space-y-6">
                  {skill.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black text-muted uppercase tracking-[0.2em] md:tracking-[0.25em] group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 bg-accent/20 rounded-full group-hover:bg-accent transition-all group-hover:scale-150" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Node Map placeholder / visual asset */}
      <section className="py-40 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-white text-xs font-black uppercase tracking-[0.8em] mb-12 opacity-50 italic">Operational Nodes</h2>
           <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-20 hover:opacity-100 transition-opacity duration-1000">
              {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'San Francisco'].map((city) => (
                <span key={city} className="text-2xl font-black text-white tracking-widest italic uppercase">{city}</span>
              ))}
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-40 border-t border-white/5 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-[#050505] text-5xl md:text-[10rem] font-black italic tracking-tighter mb-16 leading-[0.8] uppercase">
            SCALE <br /> <span className="not-italic">AUTHORITY.</span>
          </h2>
          <p className="text-[#050505] text-xl md:text-2xl mb-16 font-black uppercase tracking-tight italic max-w-2xl">
            Stop chasing keywords. Start building the dominant digital entity in your USA market node.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#050505] text-white px-16 py-8 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
          >
            Deploy Intelligence <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
