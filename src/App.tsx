import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import KineticStatement from './components/KineticStatement';
import AboutScene from './components/AboutScene';
import ProjectsScene from './components/ProjectsScene';
import StackUniverse from './components/StackUniverse';
import SystemBlueprint from './components/SystemBlueprint';
import ExperimentsLab from './components/ExperimentsLab';
import GitHubScene from './components/GitHubScene';
import ContactScene from './components/ContactScene';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'stack', 'blueprint', 'experiments', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0e0e0e] text-[#e5e2e1] min-h-screen relative overflow-x-hidden selection:bg-[#d2bbff] selection:text-[#3f008e]">
      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Global Hairline Matrix Overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

      {/* Fixed Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="w-full pt-16 bg-[#0e0e0e] relative z-10">
        <HeroScene onNavigate={handleNavigate} />
        <KineticStatement />
        <AboutScene />
        <ProjectsScene />
        <StackUniverse />
        <SystemBlueprint />
        <ExperimentsLab />
        <GitHubScene />
        <ContactScene />
      </main>

      {/* System Footer */}
      <Footer />
    </div>
  );
}
