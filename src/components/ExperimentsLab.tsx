import { useState } from 'react';
import { EXPERIMENTS } from '../data';
import { Experiment } from '../types';
import ExperimentModal from './ExperimentModal';
import { ArrowRight, Sparkles, Activity, Eye, Terminal } from 'lucide-react';

export default function ExperimentsLab() {
  const [activeExperiment, setActiveExperiment] = useState<Experiment | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'blur_on':
        return <Sparkles size={20} className="text-[#d2bbff]" />;
      case 'graphic_eq':
        return <Activity size={20} className="text-[#d2bbff]" />;
      case 'crop_free':
        return <Eye size={20} className="text-[#d2bbff]" />;
      default:
        return <Terminal size={20} className="text-[#d2bbff]" />;
    }
  };

  return (
    <section
      id="experiments"
      className="relative w-full bg-[#1c1b1b] py-20 px-4 sm:px-10 flex flex-col gap-10 border-b border-[#201f1f]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
            // SCENE_06: COMPUTATIONAL PLAYGROUND
          </span>
          <h2 className="font-['Space_Grotesk'] text-headline-lg font-bold text-white uppercase tracking-tight mt-1">
            EXPERIMENTS LAB
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-[#8e9192]">
          ACTIVE SANDBOX BUILDS [04 PROTOTYPES]
        </p>
      </div>

      {/* 4 Experimental Sandbox Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXPERIMENTS.map((exp) => (
          <div
            key={exp.id}
            onClick={() => setActiveExperiment(exp)}
            data-cursor-action="SIMULATE"
            className="p-6 bg-[#201f1f] border border-[#2a2a2a] hover:border-[#d2bbff] flex flex-col justify-between gap-6 group transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[11px] text-[#d2bbff] uppercase block">
                  [{exp.code}] // {exp.category}
                </span>
                <h3 className="font-['Space_Grotesk'] text-headline-sm text-white font-bold mt-1.5 group-hover:text-[#d2bbff] transition-colors">
                  {exp.title}
                </h3>
              </div>
              <div className="p-2 bg-[#2a2a2a] border border-[#353534] group-hover:scale-110 transition-transform">
                {getIcon(exp.icon)}
              </div>
            </div>

            <p className="text-body-sm text-[#c4c7c8] leading-relaxed">
              {exp.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#2a2a2a] font-mono text-xs">
              <span className="text-[#8e9192]">{exp.tech}</span>
              <span className="text-[#d2bbff] group-hover:translate-x-1.5 transition-transform font-bold flex items-center gap-1">
                <span>&gt; RUN_SIM</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Modal */}
      {activeExperiment && (
        <ExperimentModal
          experiment={activeExperiment}
          onClose={() => setActiveExperiment(null)}
        />
      )}
    </section>
  );
}
