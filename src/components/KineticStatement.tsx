export default function KineticStatement() {
  return (
    <section className="relative w-full bg-[#1c1b1b] py-16 sm:py-24 px-4 sm:px-10 overflow-hidden border-t border-b border-[#201f1f]">
      <div className="w-full flex flex-col gap-6 sm:gap-8">
        {/* Sub-header telemetry */}
        <div className="flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-xs text-[#8e9192] uppercase tracking-widest gap-2">
          <span>// SCENE_01: MISSION EXECUTION</span>
          <span>LAT: 28.6139° N &bull; LONG: 77.2090° E</span>
          <span className="text-[#10b981]">SYS_INIT: COMPLETE</span>
        </div>

        {/* Kinetic Statement Typography */}
        <div className="flex flex-col gap-1 sm:gap-2 uppercase select-none">
          <div className="flex items-baseline gap-3 sm:gap-4 group">
            <span className="font-mono text-xs sm:text-sm text-[#d2bbff]">[01]</span>
            <span className="font-['Space_Grotesk'] text-display-xl font-bold tracking-tighter text-[#8e9192] group-hover:text-white transition-colors duration-300">
              I BUILD
            </span>
          </div>
          <div className="flex items-baseline gap-3 sm:gap-4 pl-3 sm:pl-12 group">
            <span className="font-mono text-xs sm:text-sm text-[#d2bbff]">[02]</span>
            <span className="font-['Space_Grotesk'] text-display-xl font-bold tracking-tighter text-white">
              INTELLIGENT SYSTEMS
            </span>
          </div>
          <div className="flex items-baseline gap-3 sm:gap-4 pl-6 sm:pl-24 group">
            <span className="font-mono text-xs sm:text-sm text-[#d2bbff]">[03]</span>
            <span className="font-['Space_Grotesk'] text-display-xl font-bold tracking-tighter text-[#8e9192] group-hover:text-white transition-colors duration-300">
              THAT SOLVE REAL PROBLEMS.
            </span>
          </div>
        </div>

        {/* 3 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#2a2a2a]">
          <div className="p-5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#d2bbff]/40 transition-colors">
            <span className="font-mono text-[11px] text-[#d2bbff]">// FOCUS_A</span>
            <h2 className="font-['Space_Grotesk'] text-headline-sm text-white mt-1.5 font-bold">
              Self-Directed AI Agents
            </h2>
            <p className="text-body-sm text-[#c4c7c8] mt-2 leading-relaxed">
              Autonomous pipelines executing high-frequency data extraction, automated applications, and deterministic LLM reasoning.
            </p>
          </div>

          <div className="p-5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#d2bbff]/40 transition-colors">
            <span className="font-mono text-[11px] text-[#d2bbff]">// FOCUS_B</span>
            <h2 className="font-['Space_Grotesk'] text-headline-sm text-white mt-1.5 font-bold">
              Signal &amp; Vision Diagnostics
            </h2>
            <p className="text-body-sm text-[#c4c7c8] mt-2 leading-relaxed">
              Digital signal processing fused with computer vision algorithms for real-time anomaly detection and spectral telemetry.
            </p>
          </div>

          <div className="p-5 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#d2bbff]/40 transition-colors">
            <span className="font-mono text-[11px] text-[#d2bbff]">// FOCUS_C</span>
            <h2 className="font-['Space_Grotesk'] text-headline-sm text-white mt-1.5 font-bold">
              High-Throughput Backend
            </h2>
            <p className="text-body-sm text-[#c4c7c8] mt-2 leading-relaxed">
              Resilient distributed microservices, Redis transactional queues, hardened JWT authentication, and optimized database indexing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
