import { useState, useEffect } from 'react';
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL_ADDRESS, PROFILE_AVATAR_URL } from '../data';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navPhoto, setNavPhoto] = useState<string>(() => {
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
        if (saved) setNavPhoto(saved);
      } catch {
        // ignore
      }
    };
    window.addEventListener('aryan_photo_updated', handleSync);
    return () => window.removeEventListener('aryan_photo_updated', handleSync);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'stack', label: 'STACK' },
    { id: 'blueprint', label: 'BLUEPRINT' },
    { id: 'experiments', label: 'EXPERIMENTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#201f1f]'
          : 'bg-[#0e0e0e]/70 backdrop-blur-sm'
      }`}
    >
      <div className="h-16 w-full px-4 md:px-10 flex items-center justify-between">
        {/* Brand / Monogram */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick('hero', e)}
            data-cursor-action="TOP"
            className="flex items-center gap-2 group"
          >
            <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white px-2 py-0.5 bg-[#2a2a2a] group-hover:bg-[#d2bbff] group-hover:text-[#3f008e] transition-colors">
              AS
            </span>
            <span className="font-mono text-[10px] text-[#8e9192] hidden xl:inline-block tracking-wider">
              // SYS.COORD [28.6139° N, 77.2090° E]
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(link.id, e)}
                data-cursor-action="GOTO"
                className={`font-mono text-xs tracking-wider uppercase transition-all ${
                  isActive
                    ? 'text-white font-bold border-b border-[#d2bbff] pb-0.5'
                    : 'text-[#c4c7c8] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Status + Social + Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-[#1c1b1b] border border-[#2a2a2a]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="font-mono text-[10px] text-[#c4c7c8] uppercase tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] text-[#8e9192]">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-action="GITHUB"
              className="hover:text-white transition-colors uppercase px-1 py-0.5 hover:bg-[#201f1f]"
            >
              GH
            </a>
            <span className="text-[#444748]">/</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-action="LINKEDIN"
              className="hover:text-white transition-colors uppercase px-1 py-0.5 hover:bg-[#201f1f]"
            >
              LI
            </a>
            <span className="text-[#444748]">/</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-action="INSTAGRAM"
              className="hover:text-white transition-colors uppercase px-1 py-0.5 hover:bg-[#201f1f]"
            >
              IG
            </a>
            <span className="text-[#444748]">/</span>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              data-cursor-action="EMAIL"
              className="hover:text-white transition-colors uppercase px-1 py-0.5 hover:bg-[#201f1f]"
            >
              EML
            </a>
          </div>

          {/* Profile Avatar */}
          <div className="flex items-center pl-1 sm:pl-2">
            <a
              href="#about"
              onClick={(e) => handleLinkClick('about', e)}
              data-cursor-action="ABOUT"
              className="relative block rounded-full ring-1 ring-[#444748] hover:ring-[#d2bbff] transition-all overflow-hidden"
              title="Aryan Sharma - Profile"
            >
              <img
                src={navPhoto}
                alt="Aryan Sharma"
                className="w-8 h-8 rounded-full object-cover object-top transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10b981] ring-1 ring-[#0e0e0e]"></span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-1.5 text-[#c4c7c8] hover:text-white bg-[#1c1b1b] border border-[#2a2a2a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-[#201f1f] px-6 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-2 border-b border-[#201f1f] font-mono text-[10px] text-[#8e9192]">
            <Terminal size={12} className="text-[#d2bbff]" />
            <span>SYS.COORD [28.6139° N, 77.2090° E]</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(link.id, e)}
              className={`font-mono text-sm tracking-wider uppercase py-1 ${
                activeSection === link.id
                  ? 'text-[#d2bbff] font-bold pl-2 border-l-2 border-[#d2bbff]'
                  : 'text-[#c4c7c8] hover:text-white pl-2'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#201f1f] flex items-center justify-between font-mono text-xs text-[#8e9192]">
            <span className="text-[#10b981]">● ACTIVE_STATUS: AVAILABLE</span>
            <div className="flex items-center gap-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">GH</a>
              <span>/</span>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">LI</a>
              <span>/</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">IG</a>
              <span>/</span>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">EML</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
