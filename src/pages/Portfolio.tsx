import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, BarChart3, TrendingUp, Search, ZoomIn, Layers, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '@/src/components/seo/Meta';
import PageNavigation from '@/src/components/layout/PageNavigation';

const PROJECTS = [
  {
    title: 'Enterprise Fintech Growth',
    category: 'Topical Authority',
    results: '+240% Organic Traffic',
    description: 'Developed a comprehensive knowledge hub mapping 400+ financial entities, resulting in 1st page dominance for core transactional terms.',
    tags: ['SaaS', 'Fintech', 'Silo Architecture']
  },
  {
    title: 'E-commerce Semantic Rehab',
    category: 'WordPress Architecture',
    results: '4.2s to 0.8s LCP',
    description: 'Full WordPress rebuild with headless architecture and semantic schema, doubling conversion rates through improved intent alignment.',
    tags: ['Shopify-WP Hybrid', 'Performance', 'UX Writing']
  },
  {
    title: 'Healthcare Authority Map',
    category: 'EEAT Optimization',
    results: 'Top 3 for High-Intent Queries',
    description: 'Expert-led content strategy and entity linking for a national clinic network, establishing profound search engine trust.',
    tags: ['Medical SEO', 'Compliance', 'Schema']
  }
];

export default function Portfolio() {
  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="Elite Digital Agency Case Studies | High-Impact SEO & Web Builds"
        description="Explore our portfolio of high-performance digital architectures. From Shopify dominance to enterprise Semantic SEO, see how we scale authority for USA brands."
        keywords={['SEO case studies', 'Shopify development portfolio', 'digital agency results', 'ecommerce SEO growth', 'semantic SEO examples']}
      />
      <PageNavigation />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="sleek-badge mb-10">Verified Outcomes</div>
            <h1 className="text-5xl md:text-[10rem] font-black italic tracking-tighter leading-[0.75] mb-12 uppercase">
              PROVEN <br />
              <span className="text-accent not-italic">ENTITIES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed font-bold italic opacity-80 max-w-2xl">
              "We translate complex semantic strategy into uncompromising organic growth. Explore the digital architectures dominating the USA market nodes."
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-40 bg-[#050505] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center group"
            >
              <div className="lg:col-span-12 xl:col-span-7 aspect-video bg-[#0a0a0a] border border-white/10 rounded-[4rem] overflow-hidden relative group-hover:border-accent/40 transition-all duration-700 p-16 flex flex-col justify-center text-center shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                 <div className="space-y-6">
                   <div className="text-accent text-6xl md:text-9xl font-black italic tracking-tighter group-hover:scale-110 transition-transform duration-[1.5s]">{project.results}</div>
                   <div className="text-[12px] font-black text-muted uppercase tracking-[0.5em] italic">Impact Verification Level 10</div>
                 </div>
                 <div className="absolute bottom-12 right-12 text-accent/10 group-hover:text-accent transition-colors duration-1000">
                   <TrendingUp className="w-20 h-20" />
                 </div>
              </div>

              <div className="lg:col-span-12 xl:col-span-5 space-y-10 lg:pl-8">
                <div className="flex items-center gap-6">
                  <span className="px-6 py-2 bg-accent/10 border border-accent/20 rounded-xl text-[10px] font-black text-accent uppercase tracking-widest italic">{project.category}</span>
                </div>
                <h3 className="text-4xl md:text-[5rem] font-black text-white italic tracking-tighter leading-[0.8] uppercase">{project.title}</h3>
                <p className="text-muted text-xl leading-relaxed font-bold italic opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] border border-white/10 px-6 py-3 rounded-xl hover:text-white hover:border-accent/30 transition-all">{tag}</span>
                  ))}
                </div>
                <div className="pt-8">
                  <button className="flex items-center gap-6 text-[10px] font-black text-white uppercase tracking-[0.5em] group/btn italic">
                    Inspect Intelligence Folder <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-4 transition-transform text-accent" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-48 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent)]" />
         <div className="max-w-5xl mx-auto px-6 text-center italic relative z-10">
           <span className="text-accent text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">Transmission Received</span>
           <p className="text-3xl md:text-[5rem] text-muted leading-[0.9] font-black opacity-80 uppercase tracking-tighter italic">
             "Our organic visibility tripled within 6 months. Their Shopify engineering is pure intelligence."
           </p>
           <div className="mt-16 space-y-4">
             <div className="text-white font-black uppercase tracking-[0.4em] text-sm italic">Growth Director</div>
             <div className="text-xs text-accent font-black uppercase tracking-[0.6em] opacity-50">Global SaaS Enterprise</div>
           </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 bg-accent overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.1)_0,transparent_100%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-[#050505] text-6xl md:text-[10rem] font-black mb-16 italic tracking-tighter leading-[0.75] uppercase">
            SCALE YOUR <br /> <span className="not-italic">AUTHORITY.</span>
          </h2>
          <Link to="/contact" className="bg-[#050505] text-white px-20 py-10 rounded-[3rem] font-black text-sm uppercase tracking-[0.5em] hover:scale-[1.05] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-6">
            Initialize Growth Protocol <BarChart3 className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
