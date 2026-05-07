import Meta from '@/src/components/seo/Meta';

export default function Terms() {
  return (
    <div className="bg-[#0f172a] text-white pt-40 pb-24 px-6 min-h-screen">
      <Meta title="Service Terms | Elite Digital Agency" description="Terms of engagement for Elite Digital Agency semantic SEO deployment and architecture services." />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12 italic uppercase tracking-tighter leading-none">
          TERMS of <br /><span className="text-accent not-italic">ENGAGEMENT.</span>
        </h1>
        <p className="text-muted mb-12 italic text-xs font-bold uppercase tracking-widest">Last Updated: May 2026 // Registry v1.0</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              1. Project Blueprints
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              All strategies are defined via a primary "Authority Blueprint" node. Execution begins upon node synchronization (signature and initial deposit).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              2. Technical Access
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              Clients must provide administrative-level access to WordPress nodes, Google Search Console nodes, and relevant analytics gateways for implementation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              3. Ranking Dynamics
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              While our architectures are designed for dominance, results are subject to multi-node algorithmic shifts. We prioritize long-term topical authority over short-term "hacks."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
