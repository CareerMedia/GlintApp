import { motion } from 'framer-motion'

export type Country = { name: 'Mexico' | 'India', currency: 'MXN' | 'INR' }

export default function CountryMap({ onSelect }: { onSelect: (country: Country) => void }) {
  return (
    <div className="relative w-full aspect-[9/16] max-w-[460px] mx-auto map-panel world-grid">
      {/* Glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,209,193,0.12),rgba(255,215,0,0.05)_40%,transparent_70%)]" />
      {/* Abstract world silhouette (ensures map is visible on load) */}
      <div className="absolute inset-0 opacity-[0.22]" aria-hidden>
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path d="M10,30 C20,10 40,5 60,8 C78,12 90,20 92,32 C94,44 82,52 66,55 C50,58 34,56 24,48 C14,40 8,36 10,30Z" fill="white"/>
          <path d="M35,25c3-3 8-5 14-4 5,0 9,2 12,5-4,1-8,2-12,2-5,0-10-1-14-3z" fill="#0A2540" opacity="0.2"/>
        </svg>
      </div>

      {/* Mexico hotspot */}
      <button
        onClick={() => onSelect({ name: 'Mexico', currency: 'MXN' })}
        className="absolute left-[22%] top-[58%] -translate-x-1/2 -translate-y-1/2"
        aria-label="Send to Mexico"
      >
        <span className="map-pulse"></span>
        <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} className="ml-4 -mt-6 flex items-center gap-2">
          <img src="assets/icons/mexico-flag.svg" className="h-4 w-auto rounded-sm border border-white/20" alt="Mexico flag"/>
          <span className="text-sm">Mexico</span>
        </motion.div>
      </button>

      {/* India hotspot */}
      <button
        onClick={() => onSelect({ name: 'India', currency: 'INR' })}
        className="absolute left-[72%] top-[52%] -translate-x-1/2 -translate-y-1/2"
        aria-label="Send to India"
      >
        <span className="map-pulse"></span>
        <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} className="ml-4 -mt-6 flex items-center gap-2">
          <img src="assets/icons/india-flag.svg" className="h-4 w-auto rounded-sm border border-white/20" alt="India flag"/>
          <span className="text-sm">India</span>
        </motion.div>
      </button>
    </div>
  )
}
