import { useState, useEffect } from 'react';
import { EMAIL_ADDRESS } from '../data';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST (UTC+05:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#0e0e0e] relative z-10 border-t border-[#201f1f]">
      <div className="w-full px-4 sm:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-[#8e9192]">
        <div className="flex flex-col gap-1">
          <span className="text-white font-bold tracking-widest uppercase font-['Space_Grotesk'] text-sm">
            ARYAN SHARMA
          </span>
          <span className="text-[#8e9192] text-[11px]">
            GRAPHICS &amp; INTERFACE ARCHITECTURE // CORE REPO 2025
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
          <span className="text-[#8e9192]">
            LOCAL_TIME: <span className="text-white font-bold">{currentTime || 'UTC+05:30'}</span>
          </span>
          <span className="text-[#8e9192] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            <span>SYSTEM: NOMINAL</span>
          </span>
          <a
            className="text-[#d2bbff] hover:text-white transition-colors uppercase font-bold"
            href={`mailto:${EMAIL_ADDRESS}`}
            data-cursor-action="CONTACT"
          >
            INITIATE_CONTACT &gt;
          </a>
        </div>
      </div>
    </footer>
  );
}
