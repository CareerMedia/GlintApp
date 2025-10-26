import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import { useLocation } from 'react-router-dom'
import { formatCurrency } from '../utils/formatNumber'

export default function Success() {
  const location = useLocation() as { state?: any }
  const s = location.state ?? {}

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 md:px-6 py-6">
        <div className="max-w-[560px] mx-auto space-y-6 text-center card p-8">
          <div className="text-3xl font-semibold">Money Received!</div>
          <div className="text-soft-white/85">
            Your transfer to <span className="font-medium">{s?.recipient?.name ?? 'Recipient'}</span> in <span className="font-medium">{s?.country ?? ''}</span> was completed successfully.
          </div>
          <div className="text-sm text-soft-white/75">
            Delivered amount: <span className="font-semibold">{s?.currency ? formatCurrency(s?.recipientLocal ?? 0, s?.currency) : ''}</span>
          </div>
          <div className="flex gap-3 justify-center pt-2">
            <Button to="/map">Send More</Button>
            <Button to="/">Sign Out</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
