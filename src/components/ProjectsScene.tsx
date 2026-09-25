import { useState, useEffect } from 'react';
import { PROJECTS, GITHUB_URL } from '../data';
import {
  ExternalLink,
  Play,
  Zap,
  Key,
  Star,
  Cpu,
  Radio,
  Sliders,
  CheckCircle2,
  TrendingUp,
  Youtube,
  Layers,
  Terminal,
  Server,
  ArrowRight,
  Activity,
  Flame,
  Dumbbell,
  HeartPulse,
} from 'lucide-react';

export default function ProjectsScene() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // CultPulse Simulation State
  const [cultClass, setCultClass] = useState<'HIIT' | 'BOXING' | 'YOGA' | 'S&C'>('HIIT');
  const [cultPassTier, setCultPassTier] = useState<'ELITE' | 'PRO'>('ELITE');
  const [bookedSlots, setBookedSlots] = useState(18);
  const [caloriesBurned, setCaloriesBurned] = useState(485);
  const [userStreak, setUserStreak] = useState(14);
  const [isBookingSlot, setIsBookingSlot] = useState(false);
  const [cultStatus, setCultStatus] = useState('SLOT CONFIRMED // LIVE TELEMETRY ACTIVE');

  // Ultron Copilot State
  const [ultronCommand, setUltronCommand] = useState('SCHEDULE MEETING WITH LEAD ARCHITECT');
  const [isUltronRunning, setIsUltronRunning] = useState(false);
  const [ultronStep, setUltronStep] = useState(0);
  const [ultronLogs, setUltronLogs] = useState<string[]>([
    'AGENT ULTRON v2.4 ONLINE // AWAITING DIRECTIVE',
  ]);

  // QualiTrack Simulation State
  const [inspectedCount, setInspectedCount] = useState(4820);
  const [defectCount, setDefectCount] = useState(62);
  const [isInspecting, setIsInspecting] = useState(false);
  const [lastDefectStatus, setLastDefectStatus] = useState<'nominal' | 'defect'>('nominal');

  // Oscilloscope state for IntelliSignal
  const [oscFreq, setOscFreq] = useState(2.4);
  const [oscAnomaly, setOscAnomaly] = useState(false);
  const [waveOffset, setWaveOffset] = useState(0);

  // Job Automation Simulation
  const [jobAgentStep, setJobAgentStep] = useState(0);
  const [isSimulatingJob, setIsSimulatingJob] = useState(false);

  // Chargeback Agent Simulation
  const [disputeScore, setDisputeScore] = useState(88.4);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // Binance Bot Simulation
  const [orderType, setOrderType] = useState<'MARKET' | 'LIMIT'>('MARKET');
  const [orderLeverage, setOrderLeverage] = useState<'5x' | '10x' | '20x'>('10x');
  const [orderSide, setOrderSide] = useState<'BUY / LONG' | 'SELL / SHORT'>('BUY / LONG');
  const [tradingLogs, setTradingLogs] = useState<string>('BOT READY // BINANCE TESTNET CONNECTED');

  // JWT inspection
  const [tokenRole, setTokenRole] = useState<'admin' | 'architect' | 'guest'>('architect');

  // Animation frame for wave offset
  useEffect(() => {
    let animId: number;
    const updateWave = () => {
      setWaveOffset((prev) => (prev + 0.05) % (Math.PI * 2));
      animId = requestAnimationFrame(updateWave);
    };
    animId = requestAnimationFrame(updateWave);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Handler for Ultron Copilot execution
  const handleRunUltron = (customCmd?: string) => {
    const cmd = customCmd || ultronCommand;
    if (isUltronRunning) return;
    setIsUltronRunning(true);
    setUltronStep(1);
    setUltronLogs([`DIRECTIVE RECEIVED: "${cmd}"`, 'PARSING INTENT WITH BOUNDED LLM AGENT...']);

    setTimeout(() => {
      setUltronStep(2);
      setUltronLogs((prev) => [...prev, 'BOUND TOOL: [Google_Calendar_v3 + TaskScheduler]']);
    }, 600);

    setTimeout(() => {
      setUltronStep(3);
      setUltronLogs((prev) => [
        ...prev,
        'DISPATCHING WORKFLOW AGENT // OPTIMIZING CONFLICTS...',
      ]);
    }, 1200);

    setTimeout(() => {
      setUltronStep(4);
      setUltronLogs((prev) => [
        ...prev,
        'TASK EXECUTED SUCCESSFULLY (200 OK) // TELEMETRY LOGGED TO DISK',
      ]);
      setIsUltronRunning(false);
    }, 1800);
  };

  // Handler for QualiTrack single unit inspection
  const handleRunInspection = () => {
    if (isInspecting) return;
    setIsInspecting(true);
    setTimeout(() => {
      const isDefect = Math.random() < 0.18;
      setInspectedCount((prev) => prev + 1);
      if (isDefect) {
        setDefectCount((prev) => prev + 1);
        setLastDefectStatus('defect');
      } else {
        setLastDefectStatus('nominal');
      }
      setIsInspecting(false);
    }, 450);
  };

  // Handler for Job Automation simulation
  const handleRunJobSimulation = () => {
    if (isSimulatingJob) return;
    setIsSimulatingJob(true);
    setJobAgentStep(0);

    const interval = setInterval(() => {
      setJobAgentStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsSimulatingJob(false);
          return 4;
        }
        return prev + 1;
      });
    }, 550);
  };

  // Handler for Binance Bot simulation
  const handleExecuteTrade = () => {
    const price = orderType === 'MARKET' ? '64,280.50' : '63,950.00';
    setTradingLogs(
      `ORDER DISPATCHED: ${orderSide} | ${orderType} @ $${price} | LEVERAGE: ${orderLeverage} | LATENCY: 14.2ms [CONFIRMED]`
    );
  };

  // Generate SVG path for Oscilloscope
  const generateWavePath = (secondary = false) => {
    const points: string[] = [];
    const width = 1000;
    const height = 120;
    const midY = height / 2;
    const steps = 60;
    const stepSize = width / steps;

    for (let i = 0; i <= steps; i++) {
      const x = i * stepSize;
      const progress = i / steps;
      const freqMultiplier = secondary ? oscFreq * 1.5 : oscFreq;
      const phase = secondary ? waveOffset * 1.3 : waveOffset;
      const anomalyFactor =
        oscAnomaly && i > 25 && i < 35
          ? Math.sin(progress * Math.PI * 18) * 35
          : 0;

      const y =
        midY +
        Math.sin(progress * Math.PI * 4 * freqMultiplier + phase) *
          (secondary ? 25 : 38) +
        anomalyFactor;

      if (i === 0) {
        points.push(`M ${x},${y}`);
      } else {
        points.push(`L ${x},${y}`);
      }
    }
    return points.join(' ');
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section
      id="work"
      className="relative w-full bg-[#0e0e0e] py-20 px-4 sm:px-10 flex flex-col gap-12 sm:gap-16 border-b border-[#201f1f]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
            <span>// ARCHITECTURAL MATRIX // ARYAA1704 REPOSITORIES</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-headline-lg font-bold text-white uppercase tracking-tight">
            SELECTED GITHUB PROJECTS [{PROJECTS.length} PRODUCTION REPOSITORIES]
          </h2>
          <p className="text-body-md text-[#c4c7c8] max-w-2xl leading-relaxed">
            Curated and battle-tested repositories sourced directly from{' '}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d2bbff] underline underline-offset-4 font-mono font-bold hover:text-white"
            >
              github.com/Aryaa1704
            </a>
            . Spanning autonomous AI agents, industrial IoT quality analytics, quant trading engines,
            and hardened enterprise backends.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {[
            { id: 'all', label: `ALL (${PROJECTS.length})` },
            { id: 'ai-agents', label: 'AI & AGENTS' },
            { id: 'systems-iot', label: 'SYSTEMS & IOT' },
            { id: 'fintech-trading', label: 'FINTECH & QUANT' },
            { id: 'backend-cloud', label: 'BACKEND & CLOUD' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 uppercase transition-all duration-200 border ${
                activeFilter === tab.id
                  ? 'bg-[#d2bbff] text-[#3f008e] font-bold border-[#d2bbff]'
                  : 'bg-[#1c1b1b] text-[#8e9192] hover:text-white border-[#2a2a2a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {filteredProjects.map((project) => {
          // =========================================================================
          // 01: ULTRON - Autonomous AI Assistant
          // =========================================================================
          if (project.id === 'ultron') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRunUltron()}
                      data-cursor-action="DISPATCH"
                      className="px-3.5 py-1.5 bg-[#2a2a2a] text-white hover:bg-[#d2bbff] hover:text-[#3f008e] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#353534]"
                    >
                      <Play size={13} className={isUltronRunning ? 'animate-spin' : ''} />
                      <span>{isUltronRunning ? 'ORCHESTRATING...' : 'DISPATCH AGENT DIRECTIVE'}</span>
                    </button>
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / Ultron</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Interactive Ultron Command & Reasoning Matrix */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-4 border border-[#2a2a2a]">
                  <div className="flex flex-wrap items-center justify-between font-mono text-[11px] text-[#8e9192] gap-2">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-[#d2bbff]" />
                      <span className="text-white font-bold">JARVIS COGNITIVE INTERACTION CONSOLE</span>
                    </div>
                    <span className="text-[#d2bbff]">
                      TOOLKIT: [DESKTOP / CALENDAR / RESEARCH / CODEGEN]
                    </span>
                  </div>

                  {/* Preset quick command triggers */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    <span className="text-[#8e9192] self-center mr-1">PRESET DIRECTIVES:</span>
                    {[
                      'SCHEDULE ARCHITECTURE SYNC AT 4PM',
                      'DEEP RESEARCH: RAG VS GRAPH MEMORY',
                      'GENERATE REST API WITH JWT AUTH',
                      'AUTO-FILL FORM WORKFLOW #108',
                    ].map((cmd) => (
                      <button
                        key={cmd}
                        type="button"
                        onClick={() => {
                          setUltronCommand(cmd);
                          handleRunUltron(cmd);
                        }}
                        className="px-2.5 py-1 bg-[#1c1b1b] hover:bg-[#d2bbff] hover:text-[#3f008e] text-[#c4c7c8] transition-colors border border-[#2a2a2a]"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Terminal Output */}
                  <div className="p-3 bg-[#131313] border border-[#201f1f] font-mono text-xs flex flex-col gap-1.5 min-h-[90px]">
                    {ultronLogs.map((log, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#c4c7c8]">
                        <span className="text-[#d2bbff]">&gt;</span>
                        <span className={idx === ultronLogs.length - 1 ? 'text-[#10b981] font-bold' : ''}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 5-Step Pipeline Topology */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-center text-xs">
                    {project.pipelineSteps.map((step, idx) => (
                      <div
                        key={step}
                        className={`p-2.5 border transition-all duration-300 ${
                          ultronStep === idx + 1
                            ? 'bg-[#6001d1] text-white border-[#d2bbff] shadow-md'
                            : ultronStep > idx + 1
                            ? 'bg-[#2a2a2a] text-white border-[#353534]'
                            : 'bg-[#1c1b1b] text-[#8e9192] border-[#201f1f]'
                        }`}
                      >
                        <span className="text-[9px] text-[#d2bbff] block mb-0.5">NODE 0{idx + 1}</span>
                        <span className="font-bold text-[11px]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 02: QUALITRACK - Manufacturing Inspection
          // =========================================================================
          if (project.id === 'qualitrack') {
            const yieldRate = (((inspectedCount - defectCount) / inspectedCount) * 100).toFixed(2);
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleRunInspection}
                      data-cursor-action="INSPECT"
                      className="px-3.5 py-1.5 bg-[#2a2a2a] text-white hover:bg-[#d2bbff] hover:text-[#3f008e] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#353534]"
                    >
                      <Cpu size={13} className={isInspecting ? 'animate-pulse' : ''} />
                      <span>{isInspecting ? 'INSPECTING UNIT...' : 'RUN LIVE UNIT INSPECTION'}</span>
                    </button>
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / qualitrack-enterprise-project</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Industrial Defect Analytics & Telemetry Box */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-4 border border-[#2a2a2a]">
                  <div className="flex flex-wrap items-center justify-between font-mono text-[11px] text-[#8e9192] gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                      <span className="text-white font-bold">ASSEMBLY TELEMETRY // LINE_03 ACTIVE</span>
                    </div>
                    <span className="text-[#d2bbff]">FASTAPI + SQLALCHEMY ORM ENGINE</span>
                  </div>

                  {/* Telemetry Dashboard Counters */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    <div className="p-3 bg-[#131313] border border-[#201f1f]">
                      <span className="text-[#8e9192] text-[10px] block">TOTAL UNITS INSPECTED</span>
                      <span className="text-white font-bold text-lg mt-0.5 block">
                        {inspectedCount.toLocaleString()}
                      </span>
                    </div>
                    <div className="p-3 bg-[#131313] border border-[#201f1f]">
                      <span className="text-[#8e9192] text-[10px] block">ISOLATED DEFECTS</span>
                      <span className="text-red-400 font-bold text-lg mt-0.5 block">
                        {defectCount}
                      </span>
                    </div>
                    <div className="p-3 bg-[#131313] border border-[#201f1f]">
                      <span className="text-[#8e9192] text-[10px] block">CALCULATED YIELD RATE</span>
                      <span className="text-[#10b981] font-bold text-lg mt-0.5 block">
                        {yieldRate}%
                      </span>
                    </div>
                    <div className="p-3 bg-[#131313] border border-[#201f1f]">
                      <span className="text-[#8e9192] text-[10px] block">LAST UNIT STATUS</span>
                      <span
                        className={`font-bold text-sm mt-0.5 block ${
                          lastDefectStatus === 'defect'
                            ? 'text-red-400 animate-pulse'
                            : 'text-[#10b981]'
                        }`}
                      >
                        {lastDefectStatus === 'defect'
                          ? '⚠ DEFECT CAUGHT (<25ms)'
                          : '✓ PASS // NOMINAL'}
                      </span>
                    </div>
                  </div>

                  {/* Flow Topology */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-center text-xs">
                    {project.pipelineSteps.map((step, idx) => (
                      <div
                        key={step}
                        className="p-2 bg-[#1c1b1b] border border-[#2a2a2a] text-[#c4c7c8]"
                      >
                        <span className="text-[9px] text-[#d2bbff] block">NODE 0{idx + 1}</span>
                        <span className="font-bold text-[11px]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 03: AI CHARGEBACK RISK & EVIDENCE AGENT (Razorpay AI Track)
          // =========================================================================
          if (project.id === 'chargeback-risk') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSynthesizing(true);
                        setTimeout(() => {
                          setDisputeScore(+(84 + Math.random() * 12).toFixed(1));
                          setIsSynthesizing(false);
                        }, 700);
                      }}
                      data-cursor-action="TRIAGE"
                      className="px-3.5 py-1.5 bg-[#2a2a2a] text-white hover:bg-[#d2bbff] hover:text-[#3f008e] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#353534]"
                    >
                      <Zap size={13} className={isSynthesizing ? 'animate-bounce' : ''} />
                      <span>{isSynthesizing ? 'SYNTHESIZING...' : 'TRIAGE DISPUTE #8492'}</span>
                    </button>
                    {project.youtubeUrl && (
                      <a
                        className="px-3 py-1.5 bg-[#cc0000] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors flex items-center gap-1.5"
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="YOUTUBE"
                      >
                        <Youtube size={14} />
                        <span>VIDEO DEMO</span>
                      </a>
                    )}
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / AI-Chargeback-Risk</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Cognitive Flow Matrix & Triage Output */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-3 border border-[#2a2a2a]">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8e9192] uppercase">
                    <span>RAZORPAY AI TRACK 02 // COGNITIVE DISPUTE MATRIX</span>
                    <span className="text-[#d2bbff]">
                      BOUNDED GEMINI AGENT ({disputeScore}% DEFENSE RECOVERY CONFIDENCE)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-center text-xs">
                    {project.pipelineSteps.map((step, idx) => (
                      <div
                        key={step}
                        className={`p-3 border ${
                          idx === 4
                            ? 'bg-[#1c1b1b] text-[#10b981] border-[#10b981]/50 font-bold'
                            : 'bg-[#2a2a2a] text-white border-[#353534]'
                        }`}
                      >
                        <span className="text-[#d2bbff] font-bold mr-1">{idx + 1}.</span>
                        {step}
                      </div>
                    ))}
                  </div>

                  <div className="mt-1 p-3 bg-[#131313] border border-[#201f1f] font-mono text-[11px] text-[#c4c7c8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[#8e9192]">FORENSIC_STATUS: </span>
                      <span>
                        Cross-referenced 4 prior won disputes (cosine similarity: 0.94). PDF evidence
                        bundle packaged with IP, delivery courier signatures, and CVV match logs.
                      </span>
                    </div>
                    <span className="text-[#10b981] font-bold whitespace-nowrap">
                      REPRESENTMENT_PROBABILITY: {disputeScore}%
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 04: AI JOB AGENT
          // =========================================================================
          if (project.id === 'job-agent') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleRunJobSimulation}
                      data-cursor-action="SIMULATE"
                      className="px-3.5 py-1.5 bg-[#2a2a2a] text-white hover:bg-[#d2bbff] hover:text-[#3f008e] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#353534]"
                    >
                      <Play size={13} className={isSimulatingJob ? 'animate-spin' : ''} />
                      <span>{isSimulatingJob ? 'RUNNING AGENT...' : 'SIMULATE MULTI-PORTAL AGENT'}</span>
                    </button>
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / job-agent</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Data Flow Pipeline Diagram */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-3 border border-[#2a2a2a]">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8e9192] uppercase">
                    <span>MULTI-PORTAL DISCOVERY TOPOLOGY [NAUKRI / INTERNSHALA / WELLFOUND]</span>
                    <span className="text-[#d2bbff]">
                      {isSimulatingJob ? 'PLAYWRIGHT AGENT DISPATCH IN PROGRESS' : 'STREAM: ACTIVE'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-center text-xs">
                    {project.pipelineSteps.map((title, idx) => {
                      const isCurrent = isSimulatingJob && jobAgentStep === idx;
                      const isPassed = !isSimulatingJob || jobAgentStep >= idx;

                      return (
                        <div
                          key={title}
                          className={`p-3 transition-all duration-300 flex flex-col items-center justify-center gap-1 border ${
                            isCurrent
                              ? 'bg-[#6001d1] text-white border-[#d2bbff] scale-105 shadow-lg'
                              : isPassed
                              ? 'bg-[#2a2a2a] text-white border-[#353534]'
                              : 'bg-[#1c1b1b] text-[#8e9192] border-[#201f1f]'
                          }`}
                        >
                          <span className="text-[10px] text-[#d2bbff]">STEP 0{idx + 1}</span>
                          <span className="font-bold">{title}</span>
                        </div>
                      );
                    })}
                  </div>

                  {isSimulatingJob && (
                    <div className="mt-1 font-mono text-[11px] text-[#10b981] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                      <span>
                        {jobAgentStep === 0 && 'Crawling Naukri, Internshala, and Wellfound job portals...'}
                        {jobAgentStep === 1 && 'Extracting keywords & computing semantic cosine match score...'}
                        {jobAgentStep === 2 && 'Tailoring resume skills vector to ATS criteria...'}
                        {jobAgentStep === 3 && 'Headless Playwright worker filling application fields...'}
                        {jobAgentStep === 4 && 'Submission confirmed! Application synced to Google Sheets & DB.'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 05: BINANCE FUTURES TRADING BOT
          // =========================================================================
          if (project.id === 'binance-bot') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleExecuteTrade}
                      data-cursor-action="TRADE"
                      className="px-3.5 py-1.5 bg-[#2a2a2a] text-white hover:bg-[#d2bbff] hover:text-[#3f008e] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#353534]"
                    >
                      <TrendingUp size={13} />
                      <span>SIMULATE ORDER DISPATCH</span>
                    </button>
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / -Trading-Bot</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Interactive CLI Trading Simulator */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-4 border border-[#2a2a2a]">
                  <div className="flex flex-wrap items-center justify-between font-mono text-[11px] text-[#8e9192] gap-2">
                    <span className="text-white font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                      <span>BINANCE USDT-M FUTURES TESTNET GATEWAY</span>
                    </span>
                    <span className="text-[#d2bbff]">PAIR: BTC/USDT // SPOT INDEX: $64,280</span>
                  </div>

                  {/* Order controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    {/* Order Side */}
                    <div className="p-2.5 bg-[#1c1b1b] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block mb-1">ORDER SIDE:</span>
                      <div className="grid grid-cols-2 gap-1">
                        {(['BUY / LONG', 'SELL / SHORT'] as const).map((side) => (
                          <button
                            key={side}
                            type="button"
                            onClick={() => setOrderSide(side)}
                            className={`py-1 text-[10px] font-bold uppercase transition-colors ${
                              orderSide === side
                                ? side.startsWith('BUY')
                                  ? 'bg-[#10b981] text-black'
                                  : 'bg-red-500 text-white'
                                : 'bg-[#2a2a2a] text-[#8e9192]'
                            }`}
                          >
                            {side}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Order Type */}
                    <div className="p-2.5 bg-[#1c1b1b] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block mb-1">EXECUTION MODE:</span>
                      <div className="grid grid-cols-2 gap-1">
                        {(['MARKET', 'LIMIT'] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setOrderType(mode)}
                            className={`py-1 text-[10px] font-bold uppercase transition-colors ${
                              orderType === mode
                                ? 'bg-[#d2bbff] text-[#3f008e]'
                                : 'bg-[#2a2a2a] text-[#8e9192]'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Leverage */}
                    <div className="p-2.5 bg-[#1c1b1b] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block mb-1">LEVERAGE CAP:</span>
                      <div className="grid grid-cols-3 gap-1">
                        {(['5x', '10x', '20x'] as const).map((lev) => (
                          <button
                            key={lev}
                            type="button"
                            onClick={() => setOrderLeverage(lev)}
                            className={`py-1 text-[10px] font-bold uppercase transition-colors ${
                              orderLeverage === lev
                                ? 'bg-white text-black'
                                : 'bg-[#2a2a2a] text-[#8e9192]'
                            }`}
                          >
                            {lev}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Terminal CLI Telemetry */}
                  <div className="p-3 bg-[#131313] border border-[#201f1f] font-mono text-[11px] text-[#10b981]">
                    &gt; {tradingLogs}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 06: INTELLISIGNAL - Signal Analysis
          // =========================================================================
          if (project.id === 'intellisignal') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / intelligent-signal-analysis</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Waveform Oscilloscope */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-4 border border-[#2a2a2a]">
                  <div className="flex flex-wrap justify-between items-center font-mono text-xs text-[#8e9192] gap-2">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                      <span>OSCILLOSCOPE CH1: 2.45 GHz SPECTRAL SCAN</span>
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-[#d2bbff]">
                        SNR: <span className="font-bold">{oscAnomaly ? '+26.4 dB' : '+42.8 dB'}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setOscAnomaly(!oscAnomaly)}
                        className={`px-2 py-0.5 font-mono text-[10px] uppercase border ${
                          oscAnomaly
                            ? 'bg-red-950/80 text-red-300 border-red-500 font-bold'
                            : 'bg-[#2a2a2a] text-[#c4c7c8] border-[#444748] hover:text-white'
                        }`}
                      >
                        {oscAnomaly ? 'ANOMALY DETECTED' : 'INJECT ANOMALY'}
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-32 bg-[#131313] relative overflow-hidden flex items-center border border-[#2a2a2a]">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_20px]"></div>

                    <svg className="w-full h-full text-[#d2bbff] relative z-10" preserveAspectRatio="none" viewBox="0 0 1000 120">
                      <path
                        d={generateWavePath(false)}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d={generateWavePath(true)}
                        fill="none"
                        opacity="0.5"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <div className="absolute right-4 top-4 px-2 py-1 bg-[#0e0e0e]/90 font-mono text-[11px] border border-[#2a2a2a]">
                      {oscAnomaly ? (
                        <span className="text-red-400 font-bold animate-pulse">
                          ⚠ ANOMALY_TRIGGER: 99.4% CONFIDENCE
                        </span>
                      ) : (
                        <span className="text-[#10b981]">
                          SIGNAL_STATUS: NORMAL (NO SPIKES)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sliders & Telemetry */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                    <div className="p-2.5 bg-[#201f1f] border border-[#2a2a2a] flex flex-col justify-between">
                      <span className="text-[#8e9192] text-[10px]">FREQ MODULATION:</span>
                      <div className="flex items-center gap-2 mt-1">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          step="0.2"
                          value={oscFreq}
                          onChange={(e) => setOscFreq(parseFloat(e.target.value))}
                          className="w-full accent-[#d2bbff] h-1 bg-[#353534]"
                        />
                        <span className="text-white font-bold whitespace-nowrap">
                          {(2400 + oscFreq * 5).toFixed(1)} MHz
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">HARMONIC DISTORTION:</span>
                      <span className="text-white font-bold mt-1 block">
                        {oscAnomaly ? '0.048%' : '0.003%'}
                      </span>
                    </div>

                    <div className="p-2.5 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">SAMPLE RATE:</span>
                      <span className="text-white font-bold mt-1 block">10 MS/s (Realtime)</span>
                    </div>

                    <div className="p-2.5 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">PREDICTION ENGINE:</span>
                      <span className="text-[#d2bbff] font-bold mt-1 block">CNN-ResNet1D</span>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 07: DHAAGA - Enterprise E-Commerce Backend (Spring Boot)
          // =========================================================================
          if (project.id === 'dhaaga') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / DHAAGA--E--COMMERCE</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Spring Boot Layered Architecture Pipeline */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-3 border border-[#2a2a2a]">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8e9192] uppercase">
                    <span>SPRING BOOT ENTERPRISE DISPATCH TOPOLOGY</span>
                    <span className="text-[#10b981]">JWT STATELESS SECURITY + HIBERNATE ORM</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 font-mono text-center text-xs">
                    {project.pipelineSteps.map((step, idx) => (
                      <div
                        key={step}
                        className="p-2.5 bg-[#2a2a2a] text-white border border-[#353534]"
                      >
                        <span className="text-[9px] text-[#d2bbff] block">0{idx + 1}</span>
                        <span className="font-bold text-[11px]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 08: DUAL-TOKEN JWT TASK MANAGER MICROSERVICE (Node.js / Express)
          // =========================================================================
          if (project.id === 'jwt-task-manager') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center bg-[#2a2a2a] p-0.5 border border-[#353534] font-mono text-[11px]">
                      {(['architect', 'admin', 'guest'] as const).map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setTokenRole(role)}
                          className={`px-2.5 py-1 uppercase transition-colors ${
                            tokenRole === role
                              ? 'bg-[#d2bbff] text-[#3f008e] font-bold'
                              : 'text-[#8e9192] hover:text-white'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / backend-development</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* Authentication Execution Map */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-3 border border-[#2a2a2a]">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#8e9192] uppercase">
                    <span>DUAL-TOKEN AUTHENTICATION EXECUTION MAP</span>
                    <span className="text-[#10b981]">
                      SEC_AUDIT: PASSED // ACTIVE_CLAIM: {tokenRole.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 font-mono text-center text-xs">
                    <div className="p-2.5 bg-[#2a2a2a] text-white border border-[#353534]">[CLIENT]</div>
                    <div className="p-2.5 bg-[#2a2a2a] text-white border border-[#353534]">[GATEWAY]</div>
                    <div className="p-2.5 bg-[#6001d1] text-white font-bold border border-[#d2bbff]">
                      [JWT AUTH]
                    </div>
                    <div className="p-2.5 bg-[#2a2a2a] text-[#d2bbff] border border-[#353534]">
                      [{tokenRole.toUpperCase()}_PERM]
                    </div>
                    <div className="p-2.5 bg-[#2a2a2a] text-white border border-[#353534]">[CONTROLLER]</div>
                    <div className="p-2.5 bg-[#2a2a2a] text-[#10b981] border border-[#353534]">
                      [MONGODB]
                    </div>
                  </div>

                  <div className="mt-1 p-3 bg-[#131313] border border-[#201f1f] font-mono text-[11px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[#8e9192]">
                      <Key size={13} className="text-[#d2bbff]" />
                      <span>
                        HEADER: <span className="text-white">{'{"alg": "HS256", "typ": "JWT"}'}</span>
                      </span>
                      <span className="hidden md:inline text-[#444748]">|</span>
                      <span className="hidden md:inline">
                        CLAIMS:{' '}
                        <span className="text-[#d2bbff]">{`{"sub": "aryan", "role": "${tokenRole}", "type": "access"}`}</span>
                      </span>
                    </div>
                    <span className="text-[#10b981] font-bold">SIGNATURE_VERIFIED</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // =========================================================================
          // 09: CULTPULSE (CULTPLUS) - Fitness & Studio Ecosystem
          // =========================================================================
          if (project.id === 'cultpluse') {
            return (
              <div
                key={project.id}
                className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                      {project.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                          {project.tag}
                        </span>
                        {project.stars !== undefined && (
                          <span className="px-1.5 py-0.5 bg-[#2a2a2a] text-[#ffd700] font-mono text-[10px] flex items-center gap-1 border border-[#353534]">
                            <Star size={10} fill="#ffd700" />
                            <span>{project.stars} STARS</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center bg-[#2a2a2a] p-0.5 border border-[#353534] font-mono text-[11px]">
                      {(['ELITE', 'PRO'] as const).map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setCultPassTier(tier)}
                          className={`px-2.5 py-1 uppercase transition-colors ${
                            cultPassTier === tier
                              ? 'bg-[#d2bbff] text-[#3f008e] font-bold'
                              : 'text-[#8e9192] hover:text-white'
                          }`}
                        >
                          CULT {tier}
                        </button>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-action="LIVE"
                      >
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        <span>LIVE DEMO</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-action="GITHUB"
                    >
                      <span>Aryaa1704 / cultpulse</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                  {project.description}
                </p>

                {/* CultPulse Interactive Workout & Telemetry Matrix */}
                <div className="bg-[#0e0e0e] p-4 sm:p-5 flex flex-col gap-4 border border-[#2a2a2a]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-[#8e9192] uppercase border-b border-[#201f1f] pb-2.5">
                    <div className="flex items-center gap-2">
                      <HeartPulse size={14} className="text-red-400 animate-pulse" />
                      <span className="text-white font-bold">STUDIO WORKOUT TELEMETRY & SLOT DISPATCH</span>
                    </div>
                    <span className="text-[#10b981] font-mono">{cultStatus}</span>
                  </div>

                  {/* Workout Class selector & action */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                      {(['HIIT', 'BOXING', 'YOGA', 'S&C'] as const).map((cls) => (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => {
                            setCultClass(cls);
                            setCultStatus(`CLASS SELECTED: ${cls} // CAPACITY VERIFIED`);
                          }}
                          className={`px-3 py-1.5 border transition-all ${
                            cultClass === cls
                              ? 'bg-[#d2bbff] text-[#3f008e] font-bold border-[#d2bbff]'
                              : 'bg-[#1c1b1b] text-[#8e9192] hover:text-white border-[#2a2a2a]'
                          }`}
                        >
                          {cls === 'HIIT' && '⚡ HIIT BURN'}
                          {cls === 'BOXING' && '🥊 BOXING PRO'}
                          {cls === 'YOGA' && '🧘 CULT YOGA'}
                          {cls === 'S&C' && '🏋️ STRENGTH & COND'}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled={isBookingSlot}
                      onClick={() => {
                        setIsBookingSlot(true);
                        setCultStatus('SYNCHRONIZING CULTPASS CREDENTIALS...');
                        setTimeout(() => {
                          setBookedSlots((prev) => (prev >= 20 ? 18 : prev + 1));
                          setCaloriesBurned((prev) => prev + 60);
                          setUserStreak((prev) => prev + 1);
                          setIsBookingSlot(false);
                          setCultStatus(`SESSION BOOKED // STREAK: ${userStreak + 1} DAYS 🔥`);
                        }, 500);
                      }}
                      className="px-4 py-2 bg-[#d2bbff] hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border border-[#d2bbff]"
                    >
                      <Dumbbell size={13} />
                      <span>{isBookingSlot ? 'VERIFYING PASS...' : 'RESERVE SLOT & LOG WORKOUT'}</span>
                    </button>
                  </div>

                  {/* Live Biometrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                    <div className="p-3 bg-[#171717] border border-[#252525] flex flex-col">
                      <span className="text-[10px] text-[#8e9192] flex items-center gap-1">
                        <Flame size={11} className="text-orange-400" />
                        CALORIE EXPENDITURE
                      </span>
                      <span className="text-white font-bold text-lg mt-0.5">{caloriesBurned} kcal</span>
                      <span className="text-[9px] text-[#10b981] mt-0.5">+60 kcal / logged session</span>
                    </div>

                    <div className="p-3 bg-[#171717] border border-[#252525] flex flex-col">
                      <span className="text-[10px] text-[#8e9192] flex items-center gap-1">
                        <Activity size={11} className="text-[#d2bbff]" />
                        CURRENT STREAK
                      </span>
                      <span className="text-[#d2bbff] font-bold text-lg mt-0.5">{userStreak} DAYS</span>
                      <span className="text-[9px] text-[#8e9192] mt-0.5">Top 3% consistency rank</span>
                    </div>

                    <div className="p-3 bg-[#171717] border border-[#252525] flex flex-col">
                      <span className="text-[10px] text-[#8e9192]">STUDIO CAPACITY</span>
                      <span className="text-white font-bold text-lg mt-0.5">{bookedSlots} / 20 SLOTS</span>
                      <div className="w-full bg-[#2a2a2a] h-1.5 mt-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-full transition-all duration-300"
                          style={{ width: `${(bookedSlots / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#171717] border border-[#252525] flex flex-col">
                      <span className="text-[10px] text-[#8e9192]">TIER ACCESS</span>
                      <span className="text-white font-bold text-lg mt-0.5">CULT {cultPassTier}</span>
                      <span className="text-[9px] text-[#8e9192] mt-0.5">All center access verified</span>
                    </div>
                  </div>

                  {/* Pipeline Topology */}
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 font-mono text-center text-[11px]">
                    {project.pipelineSteps?.map((step, idx) => (
                      <div
                        key={step}
                        className={`p-2 border ${
                          idx === 2
                            ? 'bg-[#6001d1] text-white font-bold border-[#d2bbff]'
                            : 'bg-[#1a1a1a] text-[#c4c7c8] border-[#2d2d2d]'
                        }`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                      <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                      <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // Generic Fallback Renderer for Any Additional Projects
          return (
            <div
              key={project.id}
              className="w-full bg-[#1c1b1b] p-6 sm:p-8 flex flex-col gap-6 hover:bg-[#201f1f] transition-all duration-300 shadow-2xl border border-[#2a2a2a]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#d2bbff]">
                    {project.number}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] sm:text-xs text-[#d2bbff] uppercase tracking-widest">
                      {project.tag}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-headline-md font-bold text-white uppercase mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {project.githubUrl && (
                  <a
                    className="px-4 py-1.5 bg-white text-[#2f3131] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors flex items-center gap-1.5"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
              <p className="text-body-md text-[#e5e2e1] max-w-4xl leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                {project.metrics?.map((m) => (
                  <div key={m.label} className="p-3 bg-[#201f1f] border border-[#2a2a2a]">
                    <span className="text-[#8e9192] text-[10px] block">{m.label}</span>
                    <span className="text-white font-bold text-sm mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] border border-[#353534]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
