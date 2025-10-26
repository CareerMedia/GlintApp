import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

export default function TransferAnimation({ destination }: { destination: 'Mexico' | 'India' }) {
  const coins = Array.from({ length: 16 }, (_, i) => i)
  const destFlag = destination === 'India' ? 'assets/icons/india-flag.svg' : 'assets/icons/mexico-flag.svg'
  // Full-width arc
  const pathD = 'M 6 40 C 28 10, 72 10, 94 40'

  const coinStyle = useMemo(() => ({
    background: 'linear-gradient(90deg, #FFD700, #FFB300)',
    filter: 'drop-shadow(0 2px 6px rgba(255,179,0,.45))',
    // @ts-ignore
    offsetPath: `path('${pathD}')`,
    // @ts-ignore
    WebkitOffsetPath: `path('${pathD}')`,
    // @ts-ignore
    offsetDistance: '0%',
    // @ts-ignore
    WebkitOffsetDistance: '0%',
  }), [pathD])

  return (
    <div className="globe">
      <div className="absolute left-4 top-4 flag-badge">
        <img src="assets/icons/usa-flag.svg" alt="USA" className="h-4 w-auto rounded-sm border border-white/20" />
        <span>USA</span>
      </div>
      <div className="absolute right-4 top-4 flag-badge">
        <img src={destFlag} alt={destination} className="h-4 w-auto rounded-sm border border-white/20" />
        <span>{destination}</span>
      </div>

      <div className="earth"></div>
      <div className="orbit"></div>

      <svg className="absolute inset-0" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="coinTrail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="url(#coinTrail)" strokeOpacity="0.25" strokeWidth="0.8" />
      </svg>

      {coins.map((i) => (
        <motion.div
          key={i}
          className="absolute h-[10px] w-[10px] rounded-full"
          style={coinStyle as any}
          animate={{ offsetDistance: '100%', WebkitOffsetDistance: '100%' } as any}
          transition={{ delay: i * 0.12, duration: 2.8, repeat: Infinity, repeatDelay: 0.8 }}
        />
      ))}
    </div>
  )
}
