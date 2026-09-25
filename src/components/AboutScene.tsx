import React, { useState, useEffect } from 'react';
import { PROFILE_AVATAR_URL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL_ADDRESS } from '../data';
import {
  Brain,
  Eye,
  Server,
  Network,
  Terminal,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Sparkles,
  Cpu,
  Layers,
  Flame,
  CheckCircle2,
} from 'lucide-react';

export default function AboutScene() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('aryan_original_uploaded_photo') || PROFILE_AVATAR_URL;
    } catch {
      return PROFILE_AVATAR_URL;
    }
  });

  useEffect(() => {
    const handleSync = () => {
      try {
        const saved = localStorage.getItem('aryan_original_uploaded_photo');
        if (saved) setPhotoUrl(saved);
      } catch {
        // ignore
      }
    };
    window.addEventListener('aryan_photo_updated', handleSync);
    return () => window.removeEventListener('aryan_photo_updated', handleSync);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full bg-[#0a0b0e] py-20 px-4 sm:px-10 border-b border-[#1f222c] overflow-hidden"
    >
      {/* Ambient background glows for enhanced theme motion */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
        {/* Left Column: Authentic Portrait Card with Ambient Motion */}
        <div className="lg:col-span-4 flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 w-full">
          {/* Status Header Badge */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#12141a] border border-[#232733] font-mono text-[11px] text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-semibold tracking-wider">STATUS: AVAILABLE</span>
            </div>
            <span className="text-[#a78bfa] font-bold">CORE_ARCHITECT</span>
          </div>

          {/* Portrait Container - Aryan's real photo as it is */}
          <div className="relative group bg-[#12141a] overflow-hidden rounded-xl border border-[#232733] hover:border-[#a78bfa]/60 transition-all duration-500 shadow-2xl hover:shadow-[0_0_35px_rgba(167,139,250,0.18)]">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-white">
              {/* Actual Image AS-IS */}
              <img
                src={photoUrl}
                alt="Aryan Sharma"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle bottom vignette only at bottom 15% for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/40 to-transparent"></div>

              {/* Top HUD Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0b0e]/85 backdrop-blur-md border border-[#232733] font-mono text-[10px] text-white">
                <Sparkles
                  size={11}
                  className="text-[#a78bfa] animate-spin"
                  style={{ animationDuration: '8s' }}
                />
                <span className="tracking-wider">ARYAN SHARMA // VERIFIED</span>
              </div>

              {/* Bottom Identity Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#a78bfa] uppercase tracking-widest block font-bold">
                    ENGINEERING ARCHITECT
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white tracking-tight">
                    Aryan Sharma
                  </h3>
                </div>
                <div className="px-2 py-0.5 bg-[#1f2430]/90 backdrop-blur-md border border-[#32394a] font-mono text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>AUTHENTIC</span>
                </div>
              </div>
            </div>

            {/* Telemetry & Social Matrix */}
            <div className="p-4 bg-[#12141a] flex flex-col gap-2.5 font-mono text-xs border-t border-[#1f222c]">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#64748b]">ACADEMIC FOCUS:</span>
                <span className="text-white font-medium">B.Tech ECE (2023–2027)</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#64748b]">SPECIALIZATION:</span>
                <span className="text-[#a78bfa] font-medium">AI &amp; Systems Engineering</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#64748b]">PRIMARY ECOSYSTEM:</span>
                <span className="text-white font-medium">Python • React • FastAPI • Cloud</span>
              </div>

              <div className="pt-2 mt-1 border-t border-[#1f222c] grid grid-cols-3 gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 bg-[#181b24] hover:bg-[#a78bfa] hover:text-black text-white text-[11px] font-mono font-medium rounded flex items-center justify-center gap-1.5 transition-colors border border-[#232733]"
                  data-cursor-action="GITHUB"
                >
                  <Github size={12} />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 bg-[#181b24] hover:bg-[#38bdf8] hover:text-black text-white text-[11px] font-mono font-medium rounded flex items-center justify-center gap-1.5 transition-colors border border-[#232733]"
                  data-cursor-action="LINKEDIN"
                >
                  <Linkedin size={12} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="py-1.5 px-2 bg-[#181b24] hover:bg-[#34d399] hover:text-black text-white text-[11px] font-mono font-medium rounded flex items-center justify-center gap-1.5 transition-colors border border-[#232733]"
                  data-cursor-action="EMAIL"
                >
                  <Mail size={12} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Terminal Card */}
          <div className="p-3 bg-[#12141a] border border-[#232733] rounded-lg flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-[#94a3b8]">
              <Terminal size={14} className="text-[#a78bfa]" />
              <span className="text-[11px]">bash: aryan --status</span>
            </div>
            <span className="text-emerald-400 text-[11px] font-bold">READY_TO_DEPLOY</span>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Specialized Domains */}
        <div className="lg:col-span-8 flex flex-col gap-7">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 bg-[#1a1829] font-mono text-[11px] text-[#c4b5fd] border border-[#3b3558] rounded">
              PROFILE // 002
            </span>
            <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest">
              // ENGINEERING PHILOSOPHY &amp; CAPABILITIES
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
            ENGINEERING AT THE INTERSECTION OF{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#60a5fa] to-[#34d399]">
              AUTONOMOUS AI
            </span>
            , FULL-STACK &amp; EMBEDDED SYSTEMS.
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-light">
            I am an engineering student and systems software developer passionate about building
            high-performance, deterministic systems. From autonomous multi-agent swarms with LLM
            function calling to industrial IoT telemetry architectures, algorithmic trading
            testnets, and sleek real-time web platforms like{' '}
            <strong className="text-white font-medium">CultPulse</strong>, every project is
            engineered from first principles with uncompromising aesthetics and rock-solid code.
          </p>

          {/* Core Specialization Domains */}
          <div className="flex flex-col gap-3.5 pt-2">
            <span className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase font-semibold">
              // CORE DOMAINS OF EXPERTISE
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Domain 1 */}
              <div className="p-4 sm:p-5 bg-[#12141a] border border-[#232733] hover:border-[#a78bfa]/60 rounded-xl transition-all duration-300 group hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-[#1f1b33] rounded-lg text-[#a78bfa] group-hover:scale-110 transition-transform">
                    <Brain size={18} />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Autonomous AI &amp; Agents
                    </h4>
                    <span className="font-mono text-[10px] text-[#64748b]">
                      LLM Swarms • Tool Binding
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  Ultron autonomous assistant, Gemini risk forensics, Playwright web automation
                  swarms, and RAG retrieval pipelines.
                </p>
              </div>

              {/* Domain 2 */}
              <div className="p-4 sm:p-5 bg-[#12141a] border border-[#232733] hover:border-[#38bdf8]/60 rounded-xl transition-all duration-300 group hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-[#132838] rounded-lg text-[#38bdf8] group-hover:scale-110 transition-transform">
                    <Flame size={18} />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Full-Stack &amp; Fitness Tech
                    </h4>
                    <span className="font-mono text-[10px] text-[#64748b]">
                      CultPulse • React • Microservices
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  Real-time workout telemetry, tiered membership systems, atomic booking
                  algorithms, and ultra-fluid responsive UI experiences.
                </p>
              </div>

              {/* Domain 3 */}
              <div className="p-4 sm:p-5 bg-[#12141a] border border-[#232733] hover:border-[#34d399]/60 rounded-xl transition-all duration-300 group hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-[#122e23] rounded-lg text-[#34d399] group-hover:scale-110 transition-transform">
                    <Server size={18} />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Backend &amp; Microservices
                    </h4>
                    <span className="font-mono text-[10px] text-[#64748b]">
                      FastAPI • Spring Boot • Node.js
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  Hardened dual-token JWT auth, Spring Boot 3 with JPA/Hibernate, Redis caching,
                  and ACID transactional databases.
                </p>
              </div>

              {/* Domain 4 */}
              <div className="p-4 sm:p-5 bg-[#12141a] border border-[#232733] hover:border-[#fbbf24]/60 rounded-xl transition-all duration-300 group hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-[#2d2514] rounded-lg text-[#fbbf24] group-hover:scale-110 transition-transform">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                      Systems, IoT &amp; DSP
                    </h4>
                    <span className="font-mono text-[10px] text-[#64748b]">
                      IntelliSignal • QualiTrack • Quant
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  1D CNN spectrogram fault diagnosis, assembly defect analytics, and Binance USDT-M
                  Futures low-latency algorithmic trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
