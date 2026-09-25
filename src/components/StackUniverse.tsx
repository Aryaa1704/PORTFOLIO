import { useState } from 'react';
import { TECH_STACK } from '../data';
import { TechItem } from '../types';
import { Layers, Info } from 'lucide-react';

export default function StackUniverse() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(TECH_STACK[0]);
  const [filter, setFilter] = useState<'all' | 'ai' | 'backend' | 'database' | 'infra'>('all');

  const filteredTech = TECH_STACK.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section
      id="stack"
      className="relative w-full bg-[#1c1b1b] py-20 px-4 sm:px-10 overflow-hidden border-b border-[#201f1f]"
    >
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
          // SCENE_04: HARDWARE &amp; LOGIC MATRIX
        </span>
        <h2 className="font-['Space_Grotesk'] text-headline-lg font-bold text-white uppercase tracking-tight mt-1">
          STACK UNIVERSE
        </h2>
        <p className="text-body-md text-[#c4c7c8] max-w-xl mt-2 leading-relaxed">
          Languages, algorithmic frameworks, distributed stores, and automated runtime
          infrastructures driving every system build.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 font-mono text-xs">
          {(['all', 'ai', 'backend', 'database', 'infra'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 uppercase transition-colors border ${
                filter === cat
                  ? 'bg-[#d2bbff] text-[#3f008e] font-bold border-[#d2bbff]'
                  : 'bg-[#201f1f] text-[#8e9192] border-[#2a2a2a] hover:text-white'
              }`}
            >
              {cat === 'all' ? 'ALL_TECHNOLOGIES' : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Orbit Pills Constellation Cluster */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 relative z-10">
        {filteredTech.map((item) => {
          const isSelected = selectedTech?.name === item.name;
          const isRedis = item.name === 'Redis';

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedTech(item)}
              data-cursor-action="INSPECT"
              className={`p-4 transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center gap-3 border text-left cursor-pointer ${
                isSelected
                  ? 'bg-[#2a2a2a] border-[#d2bbff] ring-1 ring-[#d2bbff]'
                  : 'bg-[#0e0e0e] border-[#2a2a2a] hover:bg-[#201f1f]'
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isRedis ? 'bg-[#10b981] animate-ping' : 'bg-[#d2bbff]'
                }`}
              ></span>
              <span className="font-mono font-bold text-white text-sm sm:text-base">
                {item.name}
              </span>
              <span className="font-mono text-[10px] text-[#8e9192] uppercase bg-[#1c1b1b] px-1.5 py-0.5 border border-[#2a2a2a]">
                {item.role}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Tech Inspector Panel */}
      {selectedTech && (
        <div className="max-w-3xl mx-auto mt-10 p-5 bg-[#0e0e0e] border border-[#2a2a2a] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#1c1b1b] border border-[#2a2a2a] text-[#d2bbff]">
              <Layers size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base">{selectedTech.name}</span>
                <span className="text-[10px] text-[#d2bbff] px-2 py-0.5 bg-[#2a2a2a] border border-[#353534]">
                  {selectedTech.proficiency}
                </span>
                <span className="text-[10px] text-[#8e9192] uppercase">
                  [{selectedTech.category}]
                </span>
              </div>
              <p className="text-xs text-[#c4c7c8] mt-1 font-sans leading-relaxed">
                {selectedTech.description}
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto text-[11px] text-[#8e9192] shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#201f1f]">
            <span>SYSTEM ROLE:</span>
            <span className="text-white font-bold">{selectedTech.role}</span>
          </div>
        </div>
      )}
    </section>
  );
}
