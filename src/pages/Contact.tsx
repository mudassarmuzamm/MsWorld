import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import Meta from '@/src/components/seo/Meta';
import PageNavigation from '@/src/components/layout/PageNavigation';

export default function Contact() {
  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      <Meta 
        title="Connect with Elite Digital Agency USA | Audit Request"
        description="Ready to dominate Google? Request a comprehensive Semantic SEO audit and Enterprise architecture consultation today from our USA-based experts."
        keywords={['contact digital agency', 'hire SEO experts USA', 'Shopify agency consultation', 'semantic audit request', 'USA web development team']}
      />
      <PageNavigation />
      
      {/* Hero */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <div className="max-w-4xl">
             <div className="sleek-badge mb-8 md:mb-10">Node Connectivity</div>
             <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] md:leading-[0.75] mb-10 md:mb-12 uppercase">
               INITIALIZE <br />
               <span className="text-accent not-italic">CONTACT.</span>
             </h1>
             <p className="text-lg md:text-2xl text-muted leading-relaxed font-bold italic opacity-80 max-w-2xl underline decoration-white/5 underline-offset-8">
               "Establish a direct link with our specialized engineering team. We prioritize depth over breadth, focusing on high-authority market dominance."
             </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 md:py-40 bg-[#050505] px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0a0a0a] border border-white/10 p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] space-y-10 md:space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase">Audit Request</h3>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 <p className="text-muted text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Response Latency: &lt; 12 Hours</p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 ml-6">Entity Name</label>
                  <input type="text" placeholder="Organization / Project" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-sm font-bold focus:outline-none focus:border-accent transition-all hover:bg-white/[0.05]" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 ml-6">Admin link</label>
                  <input type="email" placeholder="Email@Network.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-sm font-bold focus:outline-none focus:border-accent transition-all hover:bg-white/[0.05]" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 ml-6">Target Modality</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-sm font-bold focus:outline-none focus:border-accent transition-all hover:bg-white/[0.05] appearance-none cursor-pointer italic">
                  <option className="bg-[#050505]">Semantic SEO Audit</option>
                  <option className="bg-[#050505]">Shopify Architecture Rehab</option>
                  <option className="bg-[#050505]">Custom Web Development</option>
                  <option className="bg-[#050505]">Enterprise WordPress Plan</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 ml-6">Project Context</label>
                <textarea rows={6} placeholder="Describe your current authority silos and growth targets..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-sm font-bold focus:outline-none focus:border-accent transition-all hover:bg-white/[0.05] resize-none"></textarea>
              </div>
              <button className="w-full bg-accent text-[#050505] py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:brightness-110 transition-all hover:scale-[1.02] shadow-2xl shadow-accent/20">
                Initialize Intelligence Thread <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <div className="flex flex-col gap-12 md:gap-16 justify-center">
            <div className="space-y-8 md:space-y-10">
              <div className="sleek-badge inline-block">Human Intelligence</div>
              <h4 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] md:leading-[0.8]">Every request is <br /> <span className="text-accent">Node-Verified</span> by Experts.</h4>
              <p className="text-muted text-lg md:text-xl leading-relaxed font-bold italic opacity-80 decoration-accent/10 underline underline-offset-8 uppercase tracking-widest text-xs md:text-sm">
                "We bypass standard automation for high-level strategy consultations. Your digital asset will be manually audited by a USA-based lead engineer."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {[
                { icon: MessageSquare, label: 'Real-Time Node', val: 'Proprietary Slack Channel', detail: 'For Enterprise Partners' },
                { icon: Mail, label: 'Documentation', val: 'mudasaralip726@gmail.com', detail: 'Primary Data Input' },
                { icon: ShieldCheck, label: 'Encrypted', val: 'USA Secure Infrastructure', detail: 'Standard Privacy' }
              ].map((info, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] group hover:bg-accent/5 hover:border-accent/30 transition-all duration-700">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#050505] transition-all flex-shrink-0">
                    <info.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-[9px] md:text-[10px] font-black text-muted uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2">{info.label}</div>
                    <div className="text-lg md:text-xl font-black text-white italic tracking-tighter uppercase mb-2 group-hover:text-accent transition-colors leading-tight">{info.val}</div>
                    <p className="text-[9px] md:text-[10px] font-bold text-muted/60 uppercase tracking-[0.2em] md:tracking-[0.3em]">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Connectivity */}
      <section className="py-40 bg-[#0a0a0a] border-t border-white/5 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.05),transparent)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <MapPin className="w-16 h-16 text-accent mx-auto mb-12 opacity-30" />
          <h5 className="text-3xl font-black italic tracking-tighter text-white uppercase mb-8">GLOBAL OPERATIONS</h5>
          <p className="text-muted text-lg font-bold leading-relaxed max-w-sm mx-auto mb-16 uppercase tracking-widest opacity-60">
            Headquartered in USA. Serving global categorical leaders.
          </p>
          <div className="aspect-video w-full bg-[#050505] border border-white/10 rounded-[3rem] overflow-hidden grayscale brightness-75 opacity-20 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-[2s] shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1904d0c9f1%3A0xe4f7574ea6d12f1a!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000001"
               className="w-full h-full border-0"
               loading="lazy"
               title="Global Command Hub"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
