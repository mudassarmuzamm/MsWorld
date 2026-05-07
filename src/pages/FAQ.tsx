import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageCircle, Zap } from 'lucide-react';
import Meta from '@/src/components/seo/Meta';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    category: 'The Semantic Core',
    items: [
      { q: 'How does Semantic SEO differ from traditional SEO?', a: 'Traditional SEO focuses on keywords; Semantic SEO focuses on intent, context, and the relationship between entities. We optimize for the Knowledge Graph, not just the index.' },
      { q: 'What is Topical Authority?', a: 'It is a measure of how much trust search engines have in your site for a specific topic. You earn it by covering a topic exhaustively and linking correctly.' }
    ]
  },
  {
    category: 'Technical Architecture',
    items: [
      { q: 'Are your WordPress builds optimized for CWV?', a: 'Every build is hard-coded for Core Web Vitals (CWV) dominance. We minimize LCP and CLS to ensure your authority is never bottlenecked by performance.' },
      { q: 'How do you handle Schema Markup?', a: 'We deploy custom JSON-LD graphs that connect your entities (organization, person, project, service) in a way that Google can logically digest.' }
    ]
  },
  {
    category: 'Engagement & Deployment',
    items: [
      { q: 'What is the "Silo Deployment" timeline?', a: 'A standard semantic audit and mapping takes 2-3 weeks. Full architectural implementation typically spans 6-10 weeks depending on the existing content volume.' },
      { q: 'Do you work with non-WordPress sites?', a: 'While we are specialists in WordPress Architecture, our Semantic Audits and Topical Maps can be deployed on any framework (React, Next.js, Shopify).' }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="SEO & WordPress Architecture FAQ"
        description="Clear answers on Semantic SEO, Topical Authority, and High-Performance WordPress builds. Understand our architectural philosophy."
        keywords={['seo faq', 'semantic seo explanation', 'wordpress architecture questions', 'what is topical authority']}
      />

      <section className="py-24 px-6 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="sleek-badge inline-block mb-8">Documentation Node</div>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none text-white uppercase">
              QUERY <br />
              <span className="text-accent not-italic uppercase tracking-tight">RESOLUTION.</span>
            </h1>
            <p className="text-muted mt-6 max-w-lg mx-auto font-medium">
              Transparent answers regarding our semantic frameworks and deployment protocols.
            </p>
          </div>

          <div className="space-y-20">
            {faqs.map((group, gIdx) => (
              <div key={gIdx} className="space-y-8">
                <h3 className="text-[10px] font-black uppercase text-accent tracking-[0.4em] mb-8 flex items-center gap-4">
                  <div className="h-px w-10 bg-accent/30" />
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, iIdx) => {
                    const id = `f-${gIdx}-${iIdx}`;
                    const isOpen = openItems.includes(id);
                    return (
                      <div key={id} className={cn("border rounded-2xl transition-all duration-300", isOpen ? "border-accent/30 bg-accent/5" : "border-white/5 bg-white/[0.02]")}>
                        <button 
                          onClick={() => toggle(id)}
                          className="w-full text-left p-6 flex items-start justify-between gap-6 group"
                        >
                          <span className={cn("font-black text-lg tracking-tighter transition-colors uppercase leading-none mt-1", isOpen ? "text-accent" : "text-white/80")}>
                            {item.q}
                          </span>
                          <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-all", isOpen ? "bg-accent/20 border border-accent/30 rotate-180" : "")}>
                            {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-accent/40" />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-8 text-muted leading-relaxed font-medium italic underline decoration-white/5 underline-offset-8">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-accent rounded-[3.5rem] text-center text-[#050505] relative overflow-hidden group shadow-2xl">
            <Zap className="w-16 h-16 text-[#050505]/20 mx-auto mb-8 animate-pulse" />
            <h4 className="text-4xl font-black italic tracking-tighter mb-6 uppercase">STILL IN SYNC?</h4>
            <p className="text-[#050505]/70 mb-10 max-w-sm mx-auto font-bold uppercase tracking-widest text-xs">
              If your inquiry requires a dedicated node, connect with our leads via the secure portal.
            </p>
            <a href="/contact" className="inline-block bg-[#050505] text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              Initialize Connection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
