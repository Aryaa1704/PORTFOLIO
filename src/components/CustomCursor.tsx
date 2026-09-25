import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, .interactive-target');
      if (interactive) {
        setIsHovered(true);
        const customAction = interactive.getAttribute('data-cursor-action');
        setCursorText(customAction || 'VIEW');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`hidden md:flex fixed pointer-events-none z-50 items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out rounded-full bg-white mix-blend-difference ${
        isHovered ? 'w-12 h-12 shadow-lg shadow-purple-500/20' : 'w-4 h-4'
      }`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      id="vibe-cursor-follower"
    >
      <span
        className={`font-mono text-[9px] text-black font-bold tracking-widest uppercase transition-opacity duration-150 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        id="cursor-label"
      >
        {cursorText}
      </span>
    </div>
  );
}
