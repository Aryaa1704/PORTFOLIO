import { useState } from 'react';
import { GITHUB_URL, GITHUB_REPOSITORIES } from '../data';
import {
  GitBranch,
  ExternalLink,
  Star,
  Search,
  BookOpen,
  Code2,
} from 'lucide-react';

export default function GitHubScene() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ALL');

  const languages = [
    { name: 'Python', percent: 62, color: '#d2bbff' },
    { name: 'JavaScript / Node', percent: 22, color: '#3b82f6' },
    { name: 'Java / Spring', percent: 11, color: '#f59e0b' },
    { name: 'Shell / CI', percent: 5, color: '#8e9192' },
  ];

  const commits = [
    { hash: '0x9f4c', message: 'feat(ultron): bind calendar & research tool wrappers', time: '2h ago' },
    { hash: '0x7e1a', message: 'feat(qualitrack): add defect severity histogram endpoint', time: '5h ago' },
    { hash: '0x3b8d', message: 'perf(trading-bot): optimize Binance testnet order routing latency', time: '1d ago' },
  ];

  const filteredRepos = GITHUB_REPOSITORIES.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.tag.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedLanguage === 'ALL') return matchesSearch;
    return matchesSearch && repo.language.toLowerCase().includes(selectedLanguage.toLowerCase());
  });

  return (
    <section className="relative w-full bg-[#0e0e0e] py-20 px-4 sm:px-10 flex flex-col gap-12 border-b border-[#201f1f]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-widest">
            // SCENE_07: CONTINUOUS DEPLOYMENT & OPEN SOURCE
          </span>
          <h2 className="font-['Space_Grotesk'] text-headline-lg font-bold text-white uppercase tracking-tight">
            OPEN REPOSITORY MATRIX
          </h2>
          <p className="text-body-md text-[#c4c7c8] max-w-2xl leading-relaxed">
            All codebases, autonomous agents, and microservices live open-source in the GitHub
            repository matrix under handle{' '}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-mono font-bold underline underline-offset-4 hover:text-[#d2bbff]"
            >
              @Aryaa1704
            </a>
            . Inspect active builds, stars, commits, and architectures.
          </p>
        </div>

        <a
          className="self-start lg:self-auto px-6 py-3 bg-white text-[#2f3131] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-colors shadow-2xl flex items-center gap-2"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-action="GITHUB"
        >
          <span>VIEW GITHUB PROFILE // @Aryaa1704</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Telemetry Constellation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#1c1b1b] p-6 sm:p-8 border border-[#2a2a2a]">
        {/* Card 1: Primary Dev Handle */}
        <div className="p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col justify-between">
          <span className="font-mono text-[11px] text-[#8e9192] uppercase">
            PRIMARY DEV HANDLE
          </span>
          <div className="my-3">
            <span className="font-mono text-2xl font-bold text-white block">Aryaa1704</span>
            <span className="font-mono text-[10px] text-[#8e9192]">B.Tech ECE &amp; AI Engineer</span>
          </div>
          <span className="font-mono text-xs text-[#10b981] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>VERIFIED_DEVELOPER</span>
          </span>
        </div>

        {/* Card 2: Language Spread */}
        <div className="p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col justify-between">
          <span className="font-mono text-[11px] text-[#8e9192] uppercase">
            CODEBASE LANGUAGE SPREAD
          </span>
          <div className="flex flex-col gap-2 my-2 font-mono text-xs text-white">
            {languages.map((lang) => (
              <div key={lang.name} className="flex flex-col gap-0.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#c4c7c8]">{lang.name}</span>
                  <span className="text-[#d2bbff] font-bold">{lang.percent}%</span>
                </div>
                <div className="w-full h-1 bg-[#131313] overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: System Repositories */}
        <div className="p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col justify-between">
          <span className="font-mono text-[11px] text-[#8e9192] uppercase">
            PUBLIC REPOSITORIES
          </span>
          <div className="flex flex-col my-3">
            <span className="font-mono text-3xl font-bold text-white">
              {GITHUB_REPOSITORIES.length}+ REPOS
            </span>
            <span className="text-body-sm text-[#8e9192] mt-1 leading-relaxed">
              AI Agents, Industrial IoT, Quant, Java &amp; Python backends.
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#d2bbff]">
            <GitBranch size={13} />
            <span>ORIGIN SYNC: AUTOMATED</span>
          </div>
        </div>

        {/* Card 4: Latest Commits */}
        <div className="p-4 bg-[#201f1f] border border-[#2a2a2a] flex flex-col justify-between">
          <span className="font-mono text-[11px] text-[#8e9192] uppercase">
            RECENT COMMITS
          </span>
          <div className="flex flex-col gap-2 my-2 font-mono text-xs">
            {commits.map((c) => (
              <div
                key={c.hash}
                className="p-2 bg-[#2a2a2a] border border-[#353534] text-[#e5e2e1] truncate"
                title={c.message}
              >
                <div className="flex items-center justify-between text-[10px] text-[#8e9192] mb-0.5">
                  <span className="text-[#d2bbff]">{c.hash}</span>
                  <span>{c.time}</span>
                </div>
                <span className="text-[11px] truncate block">{c.message}</span>
              </div>
            ))}
          </div>
          <span className="font-mono text-[10px] text-[#8e9192]">PUSHED TO MAIN // CI VERIFIED</span>
        </div>
      </div>

      {/* Complete GitHub Repositories Explorer */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#d2bbff]" />
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white uppercase">
              ARYAA1704 REPOSITORIES DIRECTORY
            </h3>
          </div>

          {/* Search and Language Filter */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search repos, tech..."
                className="w-48 sm:w-60 bg-[#1c1b1b] border border-[#2a2a2a] px-3 py-1.5 pl-8 text-white outline-none focus:border-[#d2bbff] text-xs"
              />
              <Search size={13} className="absolute left-2.5 top-2.5 text-[#8e9192]" />
            </div>

            {['ALL', 'Python', 'JavaScript', 'Java'].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1.5 uppercase transition-colors border ${
                  selectedLanguage === lang
                    ? 'bg-[#d2bbff] text-[#3f008e] font-bold border-[#d2bbff]'
                    : 'bg-[#1c1b1b] text-[#8e9192] hover:text-white border-[#2a2a2a]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-action="REPO"
              className="p-5 bg-[#1c1b1b] hover:bg-[#201f1f] border border-[#2a2a2a] hover:border-[#d2bbff] transition-all duration-200 flex flex-col justify-between gap-4 group"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Code2 size={15} className="text-[#d2bbff] shrink-0" />
                    <span className="font-mono text-sm font-bold text-white group-hover:text-[#d2bbff] transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink
                    size={13}
                    className="text-[#8e9192] group-hover:text-white shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                <p className="text-xs text-[#c4c7c8] leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#2a2a2a] font-mono text-[11px]">
                <span className="text-[#d2bbff] bg-[#2a2a2a] px-2 py-0.5 border border-[#353534]">
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  {'liveUrl' in repo && repo.liveUrl && (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>LIVE</span>
                    </span>
                  )}
                  <span className="text-[#8e9192]">{repo.tag}</span>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-[#ffd700]">
                      <Star size={11} fill="#ffd700" />
                      <span>{repo.stars}</span>
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
