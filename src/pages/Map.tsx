import Header from '../components/Header'
import CountryMap, { Country } from '../components/CountryMap'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Map() {
  const navigate = useNavigate()
  const handleSelect = (c: Country) => navigate(`/send/${encodeURIComponent(c.name)}`)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 md:px-6 py-6">
        <div className="max-w-[620px] mx-auto space-y-5">
          <h2 className="text-3xl font-semibold">Choose a destination</h2>
          <p className="text-soft-white/80 text-sm">Tap a highlighted country to start a transfer.</p>
          <CountryMap onSelect={handleSelect} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
