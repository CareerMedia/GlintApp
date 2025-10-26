import { motion } from 'framer-motion'

export type Country = {
  name: 'Mexico' | 'India'
  currency: 'MXN' | 'INR'
}

export default function CountryMap({ onSelect }: { onSelect: (country: Country) => void }) {
  return (
    <div className="relative w-full aspect-[9/16] max-w-[420px] mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(10,37,64,.55)] bg-white/5 backdrop-blur-2xl">
      {/* Stylized map background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,209,193,0.12),rgba(255,215,0,0.05)_40%,transparent_70%)]" />
      <div className="absolute inset-0" aria-hidden>
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-[0.08]">
          <path d="M10,45 C25,20 50,10 75,20 C90,30 95,45 85,60 C75,75 50,85 30,80 C15,70 5,60 10,45Z" fill="white"/>
        </svg>
      </div>

      {/* Mexico hotspot */}
      <button
        onClick={() => onSelect({ name: 'Mexico', currency: 'MXN' })}
        className="absolute left-[22%] top-[54%] -translate-x-1/2 -translate-y-1/2"
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
        className="absolute left-[70%] top-[54%] -translate-x-1/2 -translate-y-1/2"
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
