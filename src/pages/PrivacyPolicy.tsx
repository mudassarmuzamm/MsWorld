import Meta from '@/src/components/seo/Meta';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0f172a] text-white pt-40 pb-24 px-6 min-h-screen">
      <Meta title="Privacy Protocol | Elite Digital Agency" description="Privacy policy for Elite Digital Agency clients and data node management." />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12 italic uppercase tracking-tighter leading-none">
          PRIVACY <br /><span className="text-accent not-italic">PROTOCOL.</span>
        </h1>
        <p className="text-muted mb-12 italic text-xs font-bold uppercase tracking-widest">Last Updated: May 2026 // Archive v1.0</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              1. Data Ingestion
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              We collect search console data, ranking metrics, and technical architecture specifications solely for the purpose of semantic optimization and authority mapping. Every data point is treated as a strategic node.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              2. Entity Protection
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              Your proprietary topical maps and siloing strategies are considered classified entity assets. We utilize encrypted communication channels to ensure project integrity and prevent node leakage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4 uppercase tracking-widest italic flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              3. Global Compliance
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              We adhere to global data protection protocols, ensuring that human expertise and algorithmic data are merged within a secure, private framework.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
