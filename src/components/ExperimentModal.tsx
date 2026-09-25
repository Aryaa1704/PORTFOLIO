import { useState, useEffect, useRef } from 'react';
import { Experiment } from '../types';
import { X, Play, Square, RefreshCw, Volume2, VolumeX, Crosshair, Zap } from 'lucide-react';

interface ExperimentModalProps {
  experiment: Experiment | null;
  onClose: () => void;
}

export default function ExperimentModal({ experiment, onClose }: ExperimentModalProps) {
  if (!experiment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#131313] border border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1c1b1b] border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#d2bbff] font-bold">
              [{experiment.code}]
            </span>
            <span className="text-[#444748] font-mono">/</span>
            <span className="font-['Space_Grotesk'] text-base font-bold text-white">
              {experiment.title}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#8e9192] hover:text-white hover:bg-[#2a2a2a] transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Specialized Live Simulator */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-[#8e9192]">
            <span>ENGINE: {experiment.tech}</span>
            <span className="text-[#10b981]">STATUS: LIVE_SIMULATION_READY</span>
          </div>

          {experiment.id === 'exp-tensor' && <TensorSimulator />}
          {experiment.id === 'exp-waveform' && <WaveformSimulator />}
          {experiment.id === 'exp-vision' && <VisionSimulator />}
          {experiment.id === 'exp-streamer' && <TokenStreamerSimulator />}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0e0e0e] border-t border-[#2a2a2a] flex items-center justify-between font-mono text-xs text-[#8e9192]">
          <span>RUNNING SANDBOX // CLIENT_SIDE_ENGINE</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2a2a2a] hover:bg-white hover:text-black text-white font-bold transition-colors"
          >
            CLOSE_SIMULATION
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. Tensor Latent Projection Simulator
function TensorSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [clusters, setClusters] = useState(3);
  const [perplexity, setPerplexity] = useState(30);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    // Generate cluster centroids
    const points: { x: number; y: number; cluster: number; r: number }[] = [];
    for (let c = 0; c < clusters; c++) {
      const cx = 150 + c * 180;
      const cy = 150 + Math.sin(c) * 40;
      for (let p = 0; p < 35; p++) {
        points.push({
          x: cx + (Math.random() - 0.5) * 90,
          y: cy + (Math.random() - 0.5) * 90,
          cluster: c,
          r: 2.5 + Math.random() * 2,
        });
      }
    }

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background grid
      ctx.strokeStyle = '#201f1f';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw cluster connections
      const colors = ['#d2bbff', '#3b82f6', '#10b981'];

      points.forEach((pt, i) => {
        const jitterX = Math.sin(t + i * 0.2) * 1.5;
        const jitterY = Math.cos(t + i * 0.3) * 1.5;

        ctx.fillStyle = colors[pt.cluster % colors.length];
        ctx.beginPath();
        ctx.arc(pt.x + jitterX, pt.y + jitterY, pt.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [clusters, perplexity]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-72 bg-[#0e0e0e] border border-[#2a2a2a] relative flex items-center justify-center">
        <canvas ref={canvasRef} width={680} height={280} className="w-full h-full" />
        <div className="absolute top-3 left-3 font-mono text-[10px] text-[#8e9192] bg-[#1c1b1b]/80 px-2 py-1 border border-[#2a2a2a]">
          PROJECTING 512D ➔ 2D MANIFOLD
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[#8e9192]">CLUSTERS:</span>
          {[2, 3, 4].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setClusters(c)}
              className={`px-2.5 py-1 border ${
                clusters === c
                  ? 'bg-[#d2bbff] text-[#3f008e] font-bold border-[#d2bbff]'
                  : 'bg-[#201f1f] text-white border-[#2a2a2a]'
              }`}
            >
              {c} CENTERS
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[#8e9192]">
          <span>PERPLEXITY:</span>
          <input
            type="range"
            min="10"
            max="50"
            value={perplexity}
            onChange={(e) => setPerplexity(parseInt(e.target.value))}
            className="w-28 accent-[#d2bbff]"
          />
          <span className="text-white font-bold">{perplexity}</span>
        </div>
      </div>
    </div>
  );
}

// 2. Procedural Waveform & Fourier Visualizer
function WaveformSimulator() {
  const [frequency, setFrequency] = useState(440);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toggleAudio = () => {
    try {
      if (isPlayingAudio) {
        oscRef.current?.stop();
        audioContextRef.current?.close();
        audioContextRef.current = null;
        setIsPlayingAudio(false);
      } else {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        audioContextRef.current = ctx;
        oscRef.current = osc;
        setIsPlayingAudio(true);
      }
    } catch {
      // Audio autoplay policy fallback
    }
  };

  useEffect(() => {
    if (oscRef.current && audioContextRef.current) {
      oscRef.current.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
    }
  }, [frequency]);

  useEffect(() => {
    return () => {
      oscRef.current?.stop();
      audioContextRef.current?.close();
    };
  }, []);

  // Visualizer render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      phase += 0.08;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw FFT spectral bars
      const barCount = 32;
      const barWidth = canvas.width / barCount;

      for (let i = 0; i < barCount; i++) {
        const heightMultiplier = Math.sin(phase + i * 0.3) * 0.5 + 0.5;
        const barHeight = 20 + heightMultiplier * 80 * (frequency / 440);

        ctx.fillStyle = i % 2 === 0 ? '#d2bbff' : '#3b82f6';
        ctx.fillRect(i * barWidth + 2, canvas.height - barHeight, barWidth - 4, barHeight);
      }

      // Draw Waveform curve
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 4) {
        const y =
          canvas.height / 3 +
          Math.sin((x / canvas.width) * Math.PI * (frequency / 40) + phase) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [frequency]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-72 bg-[#0e0e0e] border border-[#2a2a2a] relative flex items-center justify-center">
        <canvas ref={canvasRef} width={680} height={280} className="w-full h-full" />
        <div className="absolute top-3 left-3 font-mono text-[10px] text-[#8e9192] bg-[#1c1b1b]/80 px-2 py-1 border border-[#2a2a2a]">
          FOURIER HARMONICS SPECTRUM // {frequency} Hz
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleAudio}
            className={`px-3 py-1.5 flex items-center gap-2 border font-bold ${
              isPlayingAudio
                ? 'bg-red-500 text-white border-red-500'
                : 'bg-white text-black hover:bg-[#d2bbff]'
            }`}
          >
            {isPlayingAudio ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isPlayingAudio ? 'MUTE TONE' : 'AUDITORY SYNTH'}</span>
          </button>
          <span className="text-[#8e9192]">PRESETS:</span>
          {[220, 440, 880].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`px-2 py-0.5 border ${
                frequency === f
                  ? 'bg-[#d2bbff] text-[#3f008e] font-bold'
                  : 'bg-[#201f1f] text-white border-[#2a2a2a]'
              }`}
            >
              {f}Hz
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[#8e9192]">
          <span>FREQ:</span>
          <input
            type="range"
            min="110"
            max="1200"
            step="10"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="w-32 accent-[#d2bbff]"
          />
          <span className="text-white font-bold">{frequency}Hz</span>
        </div>
      </div>
    </div>
  );
}

// 3. Spatial Bounding Box Object Tracker
function VisionSimulator() {
  const [trackedTarget, setTrackedTarget] = useState({ x: 220, y: 120, vx: 2, vy: 1.5 });
  const [history, setHistory] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    let animId: number;
    const update = () => {
      setTrackedTarget((prev) => {
        let nextX = prev.x + prev.vx;
        let nextY = prev.y + prev.vy;
        let nextVx = prev.vx;
        let nextVy = prev.vy;

        if (nextX < 60 || nextX > 580) nextVx = -prev.vx;
        if (nextY < 50 || nextY > 210) nextVy = -prev.vy;

        return { x: nextX, y: nextY, vx: nextVx, vy: nextVy };
      });

      setHistory((prev) => [...prev.slice(-18), { x: trackedTarget.x, y: trackedTarget.y }]);
      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [trackedTarget.x, trackedTarget.y]);

  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      <div className="w-full h-72 bg-[#0e0e0e] border border-[#2a2a2a] relative overflow-hidden">
        {/* Synthetic Video Feed Background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Trail */}
        {history.map((pt, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#3b82f6] opacity-40 pointer-events-none"
            style={{ left: `${pt.x}px`, top: `${pt.y}px` }}
          />
        ))}

        {/* Moving Centroid with Bounding Box */}
        <div
          className="absolute border-2 border-[#10b981] bg-[#10b981]/10 flex flex-col justify-between p-1 transition-all duration-75"
          style={{
            left: `${trackedTarget.x - 35}px`,
            top: `${trackedTarget.y - 35}px`,
            width: '70px',
            height: '70px',
          }}
        >
          <div className="flex justify-between items-center text-[9px] text-[#10b981] font-bold">
            <span>OBJ_01</span>
            <span>98.6%</span>
          </div>
          <Crosshair size={14} className="text-[#10b981] self-center animate-pulse" />
          <div className="text-[8px] text-[#10b981] truncate">
            {`(${Math.round(trackedTarget.x)}, ${Math.round(trackedTarget.y)})`}
          </div>
        </div>

        <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#1c1b1b] border border-[#2a2a2a] text-[10px] text-[#8e9192]">
          INFERENCE_LATENCY: <span className="text-[#10b981] font-bold">4.2ms</span> | MODEL:
          YOLO-Nano-Wasm
        </div>
      </div>

      <div className="flex items-center justify-between p-3 bg-[#1c1b1b] border border-[#2a2a2a] text-[#8e9192]">
        <span>CENTROID VELOCITY: [{trackedTarget.vx.toFixed(1)}px/f, {trackedTarget.vy.toFixed(1)}px/f]</span>
        <span className="text-[#10b981] font-bold">OBJECT_LOCKED // ACTIVE_TRACKING</span>
      </div>
    </div>
  );
}

// 4. Real-time LLM Token Streamer
function TokenStreamerSimulator() {
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [tokensPerSec, setTokensPerSec] = useState(45);

  const samplePrompt =
    'Explain the fundamental architecture behind deterministic asynchronous microservices.';
  const sampleResponse =
    'Deterministic asynchronous architectures decouple input ingestion from worker processing via append-only commit logs. By enforcing idempotent handlers, monotonic timestamp ordering, and partitioned transactional boundaries, services achieve horizontal throughput scaling with mathematical reproducibility.';

  const handleStartStream = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    setOutput('');

    const words = sampleResponse.split(' ');
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        setOutput((prev) => (prev ? prev + ' ' + words[index] : words[index]));
        index++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 1000 / (tokensPerSec / 2));
  };

  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      <div className="p-3 bg-[#1c1b1b] border border-[#2a2a2a] flex items-center justify-between gap-2">
        <span className="text-[#8e9192]">INPUT PROMPT:</span>
        <span className="text-white truncate max-w-lg">{samplePrompt}</span>
        <button
          type="button"
          onClick={handleStartStream}
          disabled={isStreaming}
          className="px-3 py-1 bg-white text-black font-bold uppercase hover:bg-[#d2bbff] transition-colors disabled:opacity-50"
        >
          {isStreaming ? 'STREAMING...' : 'TRIGGER STREAM'}
        </button>
      </div>

      <div className="w-full h-48 bg-[#0e0e0e] border border-[#2a2a2a] p-4 font-mono text-sm text-[#e5e2e1] overflow-y-auto leading-relaxed">
        {output}
        {isStreaming && (
          <span className="inline-block w-2 h-4 ml-1 bg-[#d2bbff] animate-pulse align-middle" />
        )}
        {!output && !isStreaming && (
          <span className="text-[#8e9192]">Click 'TRIGGER STREAM' to execute the SSE token emitter...</span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-[#8e9192]">
        <div className="flex items-center gap-2">
          <span>STREAM_VELOCITY:</span>
          <span className="text-white font-bold">{tokensPerSec} tokens/sec</span>
        </div>
        <div>
          <span>ENTROPY: </span>
          <span className="text-[#10b981] font-bold">1.42 nats</span>
        </div>
      </div>
    </div>
  );
}
