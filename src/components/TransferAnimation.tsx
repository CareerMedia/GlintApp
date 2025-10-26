import { motion } from 'framer-motion'
import React from 'react'

export default function TransferAnimation({ destination }: { destination: 'Mexico' | 'India' }) {
  const coins = Array.from({ length: 12 }, (_, i) => i)
  const destFlag = destination === 'India' ? 'assets/icons/india-flag.svg' : 'assets/icons/mexico-flag.svg'
  const pathD = 'M 10 40 C 35 10, 65 10, 90 35'

  return (
    <div className="globe">
      {/* Flag badges */}
      <div className="absolute left-4 top-4 flag-badge">
        <img src="assets/icons/usa-flag.svg" alt="USA" className="h-4 w-auto rounded-sm border border-white/20" />
        <span>USA</span>
      </div>
      <div className="absolute right-4 top-4 flag-badge">
        <img src={destFlag} alt={destination} className="h-4 w-auto rounded-sm border border-white/20" />
        <span>{destination}</span>
      </div>

      {/* Earth / scene */}
      <div className="earth"></div>
      <div className="orbit"></div>

      {/* Arc path (SVG for visual guide) */}
      <svg className="absolute inset-0" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="coinTrail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
        </defs>
        {/* Curved path from USA to destination */}
        <path d={pathD} fill="none" stroke="url(#coinTrail)" strokeOpacity="0.25" strokeWidth="0.8" />
      </svg>

      {/* Coins moving along the arc using CSS offset-path */}
      {coins.map((i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #FFD700, #FFB300)',
            filter: 'drop-shadow(0 2px 6px rgba(255,179,0,.45))',
            // @ts-ignore - non-standard CSS properties
            offsetPath: `path('${pathD}')`,
            // @ts-ignore - vendor prefix for Safari
            WebkitOffsetPath: `path('${pathD}')`,
            // Start along the path
            // @ts-ignore
            offsetDistance: '0%',
            // @ts-ignore
            WebkitOffsetDistance: '0%',
          }}
          animate={{
            // @ts-ignore
            offsetDistance: '100%',
            // @ts-ignore
            WebkitOffsetDistance: '100%',
          }}
          transition={{ delay: i * 0.12, duration: 2.6, repeat: Infinity, repeatDelay: 0.8 }}
        />
      ))}
    </div>
  )
}
