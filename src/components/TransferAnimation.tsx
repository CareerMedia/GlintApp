import { motion } from 'framer-motion'

export default function TransferAnimation({ destination }: { destination: 'Mexico' | 'India' }) {
  const coins = Array.from({ length: 12 }, (_, i) => i)
  const destFlag = destination === 'India' ? 'assets/icons/india-flag.svg' : 'assets/icons/mexico-flag.svg'

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

      {/* Arc path (SVG) */}
      <svg className="absolute inset-0" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="coinTrail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
        </defs>
        <!-- Define a curved path from left to right with an upward arc -->
        <path id="transferPath" d="M 10 40 C 35 10, 65 10, 90 35" fill="none" stroke="url(#coinTrail)" stroke-opacity="0.25" stroke-width="0.8"/>
      </svg>

      {/* Coins moving along the arc */}
      {coins.map((i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{ background: 'linear-gradient(90deg, #FFD700, #FFB300)', filter: 'drop-shadow(0 2px 6px rgba(255,179,0,.45))' }}
          initial={{ offsetDistance: '0%' }}
          animate={{ offsetDistance: '100%' }}
          transition={{ delay: i * 0.12, duration: 2.6, repeat: Infinity, repeatDelay: 0.8 }}
        >
          <style>{`
            .globe [key="${i}"] { offset-path: path('M 10 40 C 35 10, 65 10, 90 35'); }
          `}</style>
        </motion.div>
      ))}
    </div>
  )
}
