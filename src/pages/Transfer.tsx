import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TransferAnimation from '../components/TransferAnimation'

export default function Transfer() {
  const navigate = useNavigate()
  const location = useLocation() as { state?: any }
  const state = location.state

  useEffect(() => {
    const t = setTimeout(() => {
      navigate('/success', { state })
    }, 3200)
    return () => clearTimeout(t)
  }, [navigate, state])

  if (!state) {
    navigate('/map')
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 md:px-6 py-6">
        <div className="max-w-[520px] mx-auto space-y-5">
          <h2 className="text-lg font-semibold">Sending to {state.country}…</h2>
          <TransferAnimation destination={state.country === 'India' ? 'India' : 'Mexico'} />
          <p className="text-sm text-soft-white/80 text-center">Processing your transfer with transparent fees and best route.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
