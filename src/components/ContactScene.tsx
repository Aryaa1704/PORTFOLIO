import { useState } from 'react';
import { EMAIL_ADDRESS, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../data';
import { ArrowRight, Send, CheckCircle2, Copy, Check, Terminal, Instagram } from 'lucide-react';

export default function ContactScene() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [transmitted, setTransmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitted(true);
    setTimeout(() => {
      // Auto compose mailto link
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=Inquiry from ${encodeURIComponent(
        senderName
      )}&body=${encodeURIComponent(message + '\n\nFrom: ' + senderEmail)}`;
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0e0e0e] py-20 px-4 sm:px-10 flex flex-col justify-between gap-16 border-b border-[#201f1f]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
          <span>// SCENE_08: INITIATE TRANSMISSION</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-display-xl font-bold text-white uppercase tracking-tighter leading-none max-w-5xl">
          LET'S BUILD SOMETHING UNUSUAL.
        </h2>
        <p className="text-body-lg text-[#c4c7c8] max-w-2xl mt-1 leading-relaxed">
          Open to software engineering, AI/ML, creative technology and interesting technical
          opportunities. Let's engineer the next benchmark.
        </p>
      </div>

      {/* Massive Magnetic Action Links */}
      <div className="flex flex-col gap-3">
        {/* Link 1: Email */}
        <div className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#2a2a2a] hover:bg-[#d2bbff] hover:text-[#3f008e] text-white transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            data-cursor-action="TRANSMIT"
            className="flex items-baseline gap-4 flex-1"
          >
            <span className="font-mono text-xs text-[#d2bbff] group-hover:text-[#3f008e]">
              [TRANSMIT]
            </span>
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase truncate">
              {EMAIL_ADDRESS}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-1.5 bg-[#2a2a2a] group-hover:bg-[#3f008e] text-white group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-[#353534]"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1.5 bg-white group-hover:bg-[#3f008e] text-black group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>SEND DIRECT MESSAGE</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Link 2: LinkedIn */}
        <a
          className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#2a2a2a] hover:bg-[#201f1f] text-white transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-action="LINKEDIN"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#8e9192]">[NETWORK]</span>
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase">
              LINKEDIN // ARYAN SHARMA
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#d2bbff] group-hover:text-white flex items-center gap-1.5">
            <span>CONNECT PROFILE</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        {/* Link 3: GitHub */}
        <a
          className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#2a2a2a] hover:bg-[#201f1f] text-white transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-action="GITHUB"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#8e9192]">[CODEBASE]</span>
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase">
              GITHUB // ARYAA1704
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#d2bbff] group-hover:text-white flex items-center gap-1.5">
            <span>INSPECT REPOSITORIES</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        {/* Link 4: Instagram */}
        <a
          className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#2a2a2a] hover:bg-[#201f1f] text-white transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-action="INSTAGRAM"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#8e9192]">[SOCIAL]</span>
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase flex items-center gap-2">
              <Instagram size={20} className="text-[#d2bbff] group-hover:text-white transition-colors" />
              <span>INSTAGRAM // PROFILE</span>
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#d2bbff] group-hover:text-white flex items-center gap-1.5">
            <span>OPEN INSTAGRAM</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      {/* Outro System Signature */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 font-mono text-xs text-[#8e9192] border-t border-[#201f1f]">
        <div>
          <span>
            BUILD_HASH: <span className="text-[#c4c7c8]">0x9F4C82A</span>
          </span>
        </div>
        <div>
          <span>DESIGNED &amp; ARCHITECTED BY ARYAN SHARMA © 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
          <span>DEPLOYMENT: GLOBAL EDGE REGION</span>
        </div>
      </div>

      {/* Terminal Transmission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-[#131313] border border-[#2a2a2a] shadow-2xl p-6 flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#d2bbff]" />
                <span className="text-white font-bold">TERMINAL_TRANSMISSION // DISPATCH</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setTransmitted(false);
                }}
                className="text-[#8e9192] hover:text-white"
              >
                [ESC]
              </button>
            </div>

            {transmitted ? (
              <div className="py-8 flex flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 size={36} className="text-[#10b981] animate-bounce" />
                <span className="text-white font-bold text-sm">TRANSMISSION DISPATCHED</span>
                <p className="text-[#8e9192] max-w-sm">
                  Opening mail handler with payload routing directly to {EMAIL_ADDRESS}...
                </p>
              </div>
            ) : (
              <form onSubmit={handleTransmissionSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="text-[#8e9192] block mb-1">CALLSIGN / YOUR NAME:</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-[#0e0e0e] border border-[#2a2a2a] px-3 py-2 text-white outline-none focus:border-[#d2bbff]"
                  />
                </div>

                <div>
                  <label className="text-[#8e9192] block mb-1">RETURN ADDRESS / EMAIL:</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#0e0e0e] border border-[#2a2a2a] px-3 py-2 text-white outline-none focus:border-[#d2bbff]"
                  />
                </div>

                <div>
                  <label className="text-[#8e9192] block mb-1">PAYLOAD / MESSAGE BODY:</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your technical inquiry, project scope, or opportunity..."
                    className="w-full bg-[#0e0e0e] border border-[#2a2a2a] px-3 py-2 text-white outline-none focus:border-[#d2bbff] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#8e9192]">DESTINATION: {EMAIL_ADDRESS}</span>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-white text-black font-bold uppercase hover:bg-[#d2bbff] transition-colors flex items-center gap-2"
                  >
                    <Send size={12} />
                    <span>TRANSMIT</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
