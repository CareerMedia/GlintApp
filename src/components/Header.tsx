import { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onSignOut = () => { setOpen(false); navigate('/') }
  const showBack = pathname !== '/'

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-[#101530]/80 backdrop-blur-md border-b border-white/10 md:px-6">
      <div className="flex items-center gap-3">
        {showBack && (
          <button aria-label="Back" onClick={() => navigate(-1)} className="rounded-full p-2 hover:bg-white/5 focus-ring">
            <span className="inline-block rotate-180 text-soft-white/80">&rarr;</span>
          </button>
        )}
        <Link to="/" className="brand-pill"><span className="text">GLINT</span></Link>
      </div>

      <div className="relative">
        <button onClick={() => setOpen((v) => !v)} className="rounded-full p-1.5 hover:bg-white/10 focus-ring">
          <img src="assets/icons/profile-icon.svg" className="h-7 w-7" alt="Profile" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0C122B]/95 backdrop-blur border border-white/10 shadow-lg overflow-hidden">
            <button disabled className="w-full text-left px-4 py-2 text-soft-white/60 cursor-not-allowed">View Profile</button>
            <button onClick={onSignOut} className="w-full text-left px-4 py-2 hover:bg-white/5">Sign Out</button>
          </div>
        )}
      </div>
    </header>
  )
}
