import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

type Props = {
  onDone: () => void;
};

export default function TransferAnimation({ onDone }: Props) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start('visible');
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [controls, onDone]);

  const particles = Array.from({ length: 20 });

  return (
    <div className="relative w-full h-[60vh] mt-8">
      {/* Glowing path */}
      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D1C1"/>
            <stop offset="100%" stopColor="#FFD700"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M40,160 C140,60 260,60 360,120" stroke="url(#lg)" strokeWidth="3" fill="none" filter="url(#glow)"/>
      </svg>

      {/* Moving particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, delay: i * 0.08, repeat: Infinity }}
          style={{
            offsetPath: 'path("M40,160 C140,60 260,60 360,120")',
            position: 'absolute',
            top: 0, left: 0,
            width: 6, height: 6,
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #FFD700, #FFB300)',
            boxShadow: '0 0 12px rgba(255,179,0,0.8)'
          }}
        />
      ))}

      {/* Soft pulsing background */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute -inset-6 rounded-3xl"
        style={{ background: 'radial-gradient(circle at 30% 70%, rgba(0,209,193,0.2), transparent 60%), radial-gradient(circle at 80% 30%, rgba(255,215,0,0.25), transparent 55%)' }}
      />
    </div>
  );
}
