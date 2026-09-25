import { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, ShieldCheck, Database, Cpu, Globe } from 'lucide-react';

export default function SystemBlueprint() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isInjecting, setIsInjecting] = useState(false);
  const [packetLog, setPacketLog] = useState<string[]>([]);

  const tiers = [
    {
      step: 'STEP 01: INGRESS',
      title: 'CLIENT / UI',
      desc: 'Browser WebGL client & REST consumers initiate encrypted TLS 1.3 handshakes.',
      icon: Globe,
      metric: '1.2ms TLS',
    },
    {
      step: 'STEP 02: GATEWAY',
      title: 'API & JWT AUTH',
      desc: 'Stateless token verification, rate limiting, and reverse proxy routing.',
      icon: ShieldCheck,
      metric: '2.1ms AUTH',
    },
    {
      step: 'STEP 03: LOGIC',
      title: 'AI ENGINE & AGENTS',
      desc: 'Vector embedding inference, PyTorch execution, and asynchronous task workers.',
      icon: Cpu,
      metric: '12.4ms INFER',
    },
    {
      step: 'STEP 04: STORAGE',
      title: 'REDIS & POSTGRES',
      desc: 'Sub-millisecond Redis key caching paired with ACID relational persistence.',
      icon: Database,
      metric: '0.8ms CACHE',
    },
  ];

  const handleInjectPacket = () => {
    if (isInjecting) return;
    setIsInjecting(true);
    setPacketLog([]);

    const steps = [
      'Packet generated from client (IP: 192.168.1.42:54210) with signed JWT',
      'Gateway verified RSA256 signature, token scope [ARCHITECT] approved',
      'AI Agent dispatched embedding inference via PyTorch runtime (12.4ms)',
      'Cached output committed to Redis in-memory ring buffer & Postgres WAL',
    ];

    let current = 0;
    setActiveStep(0);
    setPacketLog([steps[0]]);

    const interval = setInterval(() => {
      current++;
      if (current < 4) {
        setActiveStep(current);
        setPacketLog((prev) => [...prev, steps[current]]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsInjecting(false);
          setActiveStep(null);
        }, 1200);
      }
    }, 600);
  };

  return (
    <section
      id="blueprint"
      className="relative w-full bg-[#0e0e0e] py-20 px-4 sm:px-10 flex flex-col gap-10 border-b border-[#201f1f]"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
          // SCENE_05: ARCHITECTURAL RIGOR
        </span>
        <h2 className="font-['Space_Grotesk'] text-headline-lg font-bold text-white uppercase tracking-tight leading-tight">
          “I DON'T JUST WRITE CODE.
          <br />I DESIGN SYSTEMS.”
        </h2>
        <p className="text-body-md text-[#c4c7c8] max-w-3xl leading-relaxed">
          Every robust implementation relies on resilient packet flow, zero single points of failure,
          deterministic validation layers, and ultra-low latency data pathways.
        </p>
      </div>

      {/* Living Architectural Blueprint Interactive Schematic */}
      <div className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 shadow-2xl border border-[#2a2a2a] relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#8e9192]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-ping"></span>
            <span>SCHEMATIC_v4.2 // DATA PACKET ROUTING TOPOLOGY</span>
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#d2bbff]">THROUGHPUT: 48,000 REQ/SEC</span>
            <button
              type="button"
              onClick={handleInjectPacket}
              disabled={isInjecting}
              data-cursor-action="INJECT"
              className="px-3 py-1 bg-white text-[#2f3131] hover:bg-[#d2bbff] hover:text-[#3f008e] font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Play size={11} className={isInjecting ? 'animate-spin' : ''} />
              <span>{isInjecting ? 'PACKET IN FLIGHT...' : 'INJECT PACKET'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Node Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlighted = activeStep === idx;
            const isCompleted = activeStep !== null && activeStep > idx;

            return (
              <div
                key={tier.step}
                className={`p-5 flex flex-col justify-between h-48 border transition-all duration-300 relative overflow-hidden ${
                  isHighlighted
                    ? 'bg-[#6001d1]/30 border-[#d2bbff] scale-[1.02] ring-2 ring-[#d2bbff]'
                    : isCompleted
                    ? 'bg-[#201f1f] border-[#10b981]/50'
                    : 'bg-[#201f1f] border-[#2a2a2a]'
                }`}
              >
                {/* Top status */}
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#d2bbff] mb-2">
                    <span>[{tier.step}]</span>
                    <Icon size={16} className={isHighlighted ? 'text-white animate-bounce' : 'text-[#8e9192]'} />
                  </div>
                  <span className="font-['Space_Grotesk'] text-headline-sm text-white font-bold block">
                    {tier.title}
                  </span>
                </div>

                <p className="text-body-sm text-[#8e9192] leading-relaxed mt-2">
                  {tier.desc}
                </p>

                {/* Bottom latency badge */}
                <div className="pt-2 border-t border-[#2a2a2a] flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8e9192]">LATENCY</span>
                  <span className={isHighlighted ? 'text-white font-bold' : 'text-[#d2bbff]'}>
                    {tier.metric}
                  </span>
                </div>

                {/* Active packet light tracer */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#d2bbff] animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Packet Telemetry Logs */}
        {packetLog.length > 0 && (
          <div className="bg-[#0e0e0e] p-4 border border-[#2a2a2a] font-mono text-xs flex flex-col gap-1.5">
            <span className="text-[10px] text-[#8e9192] uppercase tracking-wider">
              // TELEMETRY PACKET TRACE
            </span>
            {packetLog.map((log, i) => (
              <div key={i} className="text-[#10b981] flex items-center gap-2">
                <CheckCircle2 size={12} className="shrink-0" />
                <span>{log}</span>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Data Packet Telemetry Bar */}
        <div className="p-4 bg-[#0e0e0e] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs border border-[#2a2a2a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#d2bbff]">ACTIVE_ROUTE:</span>
            <span className="text-white text-[11px] sm:text-xs">
              [USER] ➔ [FASTAPI] ➔ [JWT_VERIFY] ➔ [AI_INFERENCE] ➔ [REDIS_CACHE] ➔ [DB]
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-[#10b981]">STATUS: SYNCHRONIZED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
