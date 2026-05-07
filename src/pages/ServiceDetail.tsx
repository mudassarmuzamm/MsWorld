import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import Meta from '@/src/components/seo/Meta';
import { ArrowLeft, CheckCircle, Zap, ShieldCheck, Target, BarChart3, Globe, Layers } from 'lucide-react';
import PageNavigation from '@/src/components/layout/PageNavigation';

const SERVICE_DATA: Record<string, any> = {
  'shopify-development': {
    title: 'Shopify Development Services USA',
    tagline: 'Scale Your E-commerce Node with a Certified Shopify Expert USA.',
    heroDesc: 'We architect enterprise-grade Shopify solutions that dominate the USA market. As a lead Shopify SEO Expert, we build for conversion and uncompromising speed.',
    features: [
      { t: 'Custom Liquid Engineering', d: 'Bespoke Shopify themes built from scratch without the bloat of generic templates.' },
      { t: 'Headless Commerce', d: 'React/Next.js frontends connected to Shopify Plus for ultimate performance.' },
      { t: 'Migration Nodes', d: 'Safe, SEO-protected migrations from Magento, WooCommerce, or BigCommerce.' },
      { t: 'API Integration', d: 'Seamless connectivity between Shopify and your ERP, CRM, or custom data layers.' }
    ],
    whyImportant: 'Shopify is the foundation of your commerce entity. A poorly architected store leaks authority and revenue. We ensure your technical stack is as strong as your brand.',
    metaDesc: 'Elite Shopify Development Services USA. Custom themes, migrations, and headless commerce solutions designed for enterprise scalability.',
    schema: {
      type: 'Service',
      name: 'Shopify Development USA',
      description: 'Enterprise Shopify development including custom themes and headless integrations.'
    },
    faqs: [
      { q: 'Do you offer custom Shopify theme development?', a: 'Yes, we specialize in high-performance Liquid development, avoiding heavy third-party apps to maintain Core Web Vitals.' },
      { q: 'Can you migrate our store without losing SEO?', a: 'Our Shopify experts follow a strict migration node protocol, including 301 mapping and entity preservation, ensuring zero ranking loss.' }
    ]
  },
  'seo-services': {
    title: 'SEO Agency USA & Technical SEO',
    tagline: 'Dominate Search Intent with Technical SEO Services USA.',
    heroDesc: 'Keywords are strings; we optimize for things. Our SEO Agency USA deployment connects your brand to high-authority nodes in the Google Knowledge Graph with a focus on Ecommerce SEO USA.',
    features: [
      { t: 'Entity Optimization', d: 'Identifying and strengthening your brands semantic footprint across the web.' },
      { t: 'Topical Authority Mapping', d: 'Building content clusters that exhaustively cover your niche and signal dominance.' },
      { t: 'Technical SEO Audit', d: 'In-depth node analysis of your crawling, indexing, and rendering architecture.' },
      { t: 'NLP Content Strategy', d: 'Deploying LSI keywords and natural language patterns to increase contextual relevance.' }
    ],
    whyImportant: 'In 2024, search is concept-based. If your site doesn’t establish clear relationships between entities, it won’t rank for high-intent commercial queries.',
    metaDesc: 'Technical SEO Services USA. Semantic search optimization, entity mapping, and topical authority building for enterprise brands.',
    faqs: [
      { q: 'What is Semantic SEO and why do I need it?', a: 'Semantic SEO focuses on the meaning behind queries rather than just strings. It builds long-term authority that is resilient to algorithm updates.' },
      { q: 'How do you measure SEO success?', a: 'We track entity rankings, topical share-of-voice, and organic conversion growth, not just vanity keyword metrics.' }
    ]
  },
  'web-development': {
    title: 'Web Development Company USA',
    tagline: 'Custom Website Development USA for Global Scale.',
    heroDesc: 'We engineer custom digital assets as a premier Web Development Company USA. Our Responsive Web Design USA builds are hard-coded for speed and enterprise-level reliability.',
    features: [
      { t: 'Interactive React Apps', d: 'Complex, state-driven interfaces built for seamless user interactions.' },
      { t: 'Next.js Performance', d: 'Server-side rendering and static generation for instant load times and SEO dominance.' },
      { t: 'Progressive Web Apps', d: 'Mobile-first experiences that function offline and feel like native applications.' },
      { t: 'Scalable Cloud Backend', d: 'Robust server architectures designed to handle millions of data nodes.' }
    ],
    whyImportant: 'Your website is your primary data node. Generic builds are vulnerable and slow. We provide custom engineering that scales with your business goals.',
    metaDesc: 'Custom Web Development Company USA. React, Next.js, and enterprise-grade software engineering for modern business growth.',
    faqs: [
      { q: 'Which frameworks do you specialize in?', a: 'We are experts in the React ecosystem, specifically Next.js for high-performance marketing sites and complex web applications.' },
      { q: 'Is my site optimized for Core Web Vitals?', a: 'Every build undergoes a rigorous performance audit, targeting perfect 100/100 Lighthouse scores for SEO and UX.' }
    ]
  },
  'wordpress-development': {
    title: 'WordPress Development Services USA',
    tagline: 'Hard-Coded Security & WordPress Development Services USA Dominance.',
    heroDesc: 'We transform WordPress into a high-performance authority engine as the lead provider of WordPress Development Services USA. No bloated themes—just custom code.',
    features: [
      { t: 'Gutenberg Custom Blocks', d: 'Bespoke editing experiences that empower your team without breaking the layout.' },
      { t: 'Headless WordPress', d: 'Decoupled architectures that use WordPress as a CMS and React as the frontend node.' },
      { t: 'Security Hardening', d: 'Enterprise-grade protection against vulnerabilities and malicious data injection.' },
      { t: 'Advanced Authority Silos', d: 'Custom URL structures and internal linking logic designed for topical dominance.' }
    ],
    whyImportant: 'WordPress powers 40% of the web, but most builds are architecturally weak. We provide the technical depth required to make WordPress an asset, not a liability.',
    metaDesc: 'WordPress Development Services USA. Enterprise-grade custom themes, Gutenberg blocks, and headless WordPress solutions.',
    faqs: [
      { q: 'Why choose custom WordPress over a theme?', a: 'Custom builds are faster, more secure, and specifically architected for your unique business silos and SEO goals.' },
      { q: 'How do you handle site security?', a: 'We implement server-level hardening, custom code reviews, and minimal plugin reliance to ensure your data nodes remain secure.' }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const data = SERVICE_DATA[serviceId || ''] || SERVICE_DATA['shopify-development'];

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title={`${data.title} | Elite Digital Agency`}
        description={data.metaDesc}
      />
      <PageNavigation />
      
      {data.schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": data.schema.type,
            "name": data.schema.name,
            "description": data.schema.description,
            "provider": {
              "@type": "Organization",
              "name": "Elite Digital Agency",
              "url": "https://elite-digital.agency"
            }
          })}
        </script>
      )}

      {/* Hero */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-widest mb-8 md:mb-12 hover:translate-x-2 transition-transform">
            <ArrowLeft className="w-4 h-4" /> All Intelligence Nodes
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] md:leading-[0.8] mb-8 md:mb-10 uppercase">
              {data.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-accent not-italic uppercase tracking-tight">{data.title.split(' ').pop()}</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted leading-relaxed font-bold italic mb-8 md:mb-10 max-w-2xl underline decoration-white/5 underline-offset-8">
               "{data.tagline}"
            </p>
            <p className="text-base md:text-lg text-muted/80 leading-relaxed md:leading-loose font-medium max-w-2xl uppercase tracking-widest text-xs md:text-sm opacity-70">
              {data.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-40 bg-[#050505] px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          
          <div className="lg:col-span-4 space-y-10 md:space-y-12">
            <div className="p-8 md:p-10 bg-accent rounded-[2rem] md:rounded-[2.5rem] text-[#050505] space-y-6">
               <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-[#050505]/20" />
               <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter leading-none uppercase">Strategic Value.</h3>
               <p className="text-sm font-bold leading-relaxed uppercase tracking-widest leading-relaxed">
                 {data.whyImportant}
               </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Target, label: 'Market Precision' },
                { icon: BarChart3, label: 'Search Domination' },
                { icon: Globe, label: 'USA Core Targets' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-xl md:rounded-2xl group hover:border-accent/30 transition-all">
                  <div className="text-accent group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.features.map((f: any, i: number) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-accent/5 hover:border-accent/20 transition-all group"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-[#050505] transition-all">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black italic tracking-tighter text-white uppercase mb-4">{f.t}</h4>
                  <p className="text-xs text-muted leading-relaxed font-medium uppercase tracking-widest opacity-80">
                    {f.d}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FAQ Sub-Section */}
            {data.faqs && (
              <div className="space-y-10">
                <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">Common <span className="text-accent">Queries</span></h3>
                <div className="space-y-4">
                  {data.faqs.map((faq: any, i: number) => (
                    <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <h4 className="text-sm font-black uppercase tracking-widest text-white mb-4 italic flex gap-3">
                        <span className="text-accent">?</span> {faq.q}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed font-medium pl-6 border-l border-accent/20 italic">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Entity Optimization Preview */}
            <div className="p-12 bg-[#0a0a0a] border border-white/10 rounded-[3rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-2xl font-black italic tracking-tighter mb-8 flex items-center gap-3">
                 <Layers className="w-6 h-6 text-accent" />
                 DOMINANCE STACK
               </h3>
               <div className="space-y-6">
                 {[
                   'Semantic Content Silos',
                   'Entity-Based Internal Linking',
                   'NLP Keyword Optimization',
                   'Core Web Vitals Perfection'
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted">
                     <CheckCircle className="w-4 h-4 text-accent/40" />
                     {t}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-48 bg-accent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-8xl font-black text-[#050505] italic tracking-tighter mb-10 md:mb-16 uppercase leading-[0.85] md:leading-tight">
            Ready to deploy this <br /> <span className="not-italic uppercase tracking-tight">intelligence?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-[#050505] text-white px-10 md:px-20 py-5 md:py-8 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] hover:scale-105 transition-all shadow-2xl"
          >
            Request Audit Node
          </Link>
        </div>
      </section>
    </div>
  );
}
