import { motion } from 'motion/react';
import { Search, ArrowRight, Clock, User, Share2, BookOpen, Tag, Calendar, Zap } from 'lucide-react';
import Meta from '@/src/components/seo/Meta';
import PageNavigation from '@/src/components/layout/PageNavigation';

const POSTS = [
  {
    title: 'The Semantic SEO Revolution: Why Keywords are Obsolete',
    excerpt: 'Deep dive into Google Knowledge Graph and how entities are replacing strings for ranking dominance in 2024.',
    date: 'MAY 15, 2024',
    readTime: '12 MIN READ',
    category: 'STRATEGY'
  },
  {
    title: 'Reverse-Engineering Topical Authority in Competitive Niches',
    excerpt: 'A technical guide on identifying content gaps and building the necessary siloes to overtake industry giants.',
    date: 'MAY 10, 2024',
    readTime: '18 MIN READ',
    category: 'ARCHITECTURE'
  },
  {
    title: 'Entity-Based Schema: The Secret Language of Search Engines',
    excerpt: 'How to use nested JSON-LD to tell search engines exactly who you are and why you lead your topic.',
    date: 'MAY 05, 2024',
    readTime: '9 MIN READ',
    category: 'TECHNICAL'
  }
];

export default function Blog() {
  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="Digital Intelligence Hub | Elite SEO & Development Insights"
        description="Access advanced Semantic SEO strategy, Shopify engineering guides, and search authority research from our USA lead architects."
        keywords={['SEO strategy hub', 'Shopify development blog', 'semantic search insights', 'topical authority research', 'USA digital agency blog']}
      />
      <PageNavigation />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col xl:flex-row justify-between items-end gap-16">
          <div className="max-w-4xl">
            <div className="sleek-badge mb-10">Intelligence Flow</div>
            <h1 className="text-5xl md:text-[10rem] font-black italic tracking-tighter leading-[0.75] mb-12 uppercase">
              KNOWLEDGE <br />
              <span className="text-accent not-italic">NODES.</span>
            </h1>
            <div className="flex items-center gap-10">
               <div className="h-px bg-white/10 flex-1 hidden md:block" />
               <p className="text-xl md:text-2xl text-muted leading-relaxed font-bold italic opacity-80 max-w-xl">
                 "Deploying our internal research and strategic breakthroughs to help you understand the shifting architecture of the modern search graph."
               </p>
            </div>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-end">
            {['Global', 'Semantic', 'Architecture', 'Entities', 'USA Market'].map((t) => (
              <button key={t} className="px-8 py-4 rounded-xl bg-[#050505] border border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-[#94a3b8] hover:text-accent hover:border-accent hover:scale-105 transition-all">
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-40 bg-[#050505] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
           {POSTS.map((post, i) => (
             <motion.article 
               key={i}
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex flex-col p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] group hover:border-accent/40 hover:bg-accent/5 transition-all duration-700 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
             >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4 text-accent text-[10px] font-black uppercase tracking-[0.5em] italic">
                     <Tag className="w-4 h-4 opacity-50" />
                     {post.category}
                  </div>
                  <Share2 className="w-5 h-5 text-muted hover:text-accent cursor-pointer transition-colors" />
                </div>
                
                <h3 className="text-3xl md:text-[2.5rem] font-black text-white italic tracking-tighter uppercase mb-8 leading-[0.8] group-hover:text-accent transition-colors duration-500">
                  {post.title}
                </h3>
                <p className="text-muted text-base font-bold italic leading-relaxed mb-12 opacity-80 uppercase tracking-widest decoration-white/5 underline-offset-8">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-10 border-t border-white/10 flex items-center justify-between italic">
                   <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/20">
                        <User className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                        ELITE TEAM
                      </div>
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black text-muted uppercase tracking-[0.4em]">
                      <Clock className="w-4 h-4 opacity-50" />
                      {post.readTime}
                   </div>
                </div>
                
                <div className="pt-12">
                   <button className="flex items-center gap-4 text-[10px] font-black text-accent uppercase tracking-[0.6em] group/btn italic">
                     Initialize Read <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-4 transition-transform duration-500" />
                   </button>
                </div>
             </motion.article>
           ))}
        </div>
      </section>

      {/* Cluster Section */}
      <section className="py-48 bg-[#0a0a0a] border-t border-white/5 px-6 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[200px] pointer-events-none" />
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
             <div className="lg:col-span-1 space-y-12">
               <BookOpen className="w-20 h-20 text-accent mb-12 opacity-30" />
               <h3 className="text-5xl md:text-[6rem] font-black italic tracking-tighter mb-6 uppercase text-white leading-[0.75]">TOPICAL <br /><span className="text-accent not-italic">CLUSTERS.</span></h3>
               <p className="text-muted text-xl md:text-2xl font-bold italic opacity-80 max-w-sm">
                 "Content roadmaps covering the essential pillars of property dominance in the search engine graph."
               </p>
             </div>
             
             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
               {[
                 { t: 'Entity Strategy', d: 'Deep dives into the knowledge graph and vector search optimization logic.' },
                 { t: 'Architecture', d: 'Advanced performance tuning and custom architecture for large-scale Shopify builds.' },
                 { t: 'Psychology', d: 'Aligning high-yield content with the complex micro-intents of search journeys.' },
                 { t: 'Authority', d: 'Quantifying and scaling EEAT benchmarks for high-stakes enterprise USA sites.' }
               ].map((cluster, i) => (
                 <div key={i} className="p-12 lg:p-16 border border-white/10 rounded-[4rem] hover:bg-accent/5 hover:border-accent/40 transition-all duration-700 group relative overflow-hidden bg-[#050505]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h5 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter italic flex items-center gap-4">
                      <Zap className="w-6 h-6 text-accent opacity-50" />
                      {cluster.t}
                    </h5>
                    <p className="text-[12px] text-muted font-bold uppercase tracking-[0.25em] leading-loose mb-12 opacity-60 italic">{cluster.d}</p>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent flex items-center group-hover:translate-x-6 transition-transform duration-700">
                      Inspect Node <ArrowRight className="w-5 h-5 ml-4" />
                    </span>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </section>
    </div>
  );
}
