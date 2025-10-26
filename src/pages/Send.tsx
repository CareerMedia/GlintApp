import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import CostBreakdown from '../components/CostBreakdown'
import RecipientForm, { Recipient } from '../components/RecipientForm'
import data from '../data/remittance.json'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { calculateFees } from '../utils/calculateFees'
import { convertToLocal } from '../utils/convertCurrency'
import { formatCurrency } from '../utils/formatNumber'

export default function Send() {
  const { country } = useParams<{ country: string }>()
  const navigate = useNavigate()
  const [amount, setAmount] = useState<string>('100')
  const [modalOpen, setModalOpen] = useState(false)
  const [recipient, setRecipient] = useState<Recipient | undefined>()

  const corridor = useMemo(() => data.corridors.find(c => c.country.toLowerCase() === (country ?? '').toLowerCase()), [country])
  const fees = data.fees

  if (!corridor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 grid place-items-center p-6">
          <Card>
            <div className="space-y-2">
              <p>We don't support this corridor in the demo.</p>
              <Button to="/map">Back to map</Button>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  const amountNum = Math.max(0, Number(amount) || 0)
  const feeBreakdown = calculateFees(amountNum, fees)
  const afterFeesUSD = Math.max(0, amountNum - feeBreakdown.totalUSD)
  const recipientLocal = convertToLocal(afterFeesUSD, corridor.fx_rate)

  const feesLocal = {
    onRamp: convertToLocal(feeBreakdown.onRampUSD, corridor.fx_rate),
    offRamp: convertToLocal(feeBreakdown.offRampUSD, corridor.fx_rate),
    fxSpread: convertToLocal(feeBreakdown.fxSpreadUSD, corridor.fx_rate),
    total: convertToLocal(feeBreakdown.totalUSD, corridor.fx_rate)
  }

  const onSend = () => {
    navigate('/transfer', {
      state: {
        amountUSD: amountNum,
        country: corridor.country,
        currency: corridor.currency,
        recipientLocal,
        recipient: recipient ?? { name: 'Recipient', accountId: '****' }
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 md:px-6 py-6">
        <div className="max-w-[420px] mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <img src={corridor.country === 'India' ? 'assets/icons/india-flag.svg' : 'assets/icons/mexico-flag.svg'} alt={`${corridor.country} flag`} className="h-5 w-auto rounded-sm border border-white/20"/>
            <h2 className="text-lg font-semibold">Send to {corridor.country}</h2>
          </div>

          <Card className="space-y-4 p-5">
            <Input
              label="Amount to send (USD)"
              inputMode="decimal"
              type="number"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex items-center justify-between text-sm text-soft-white/80">
              <span>Total fees ({feeBreakdown.totalPercent.toFixed(1)}%):</span>
              <span className="font-medium">{formatCurrency(feesLocal.total, corridor.currency)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-soft-white/80">Recipient will receive</span>
              <span className="text-base font-semibold">{formatCurrency(recipientLocal, corridor.currency)}</span>
            </div>
          </Card>

          <CostBreakdown feesLocal={feesLocal} totalPercent={feeBreakdown.totalPercent} currency={corridor.currency} />

          <Card className="flex items-center justify-between p-4">
            <div className="text-sm">
              <div className="text-soft-white/80">Recipient</div>
              <div className="font-medium">{recipient?.name ?? 'Add recipient'}</div>
            </div>
            <Button onClick={() => setModalOpen(true)}>Edit</Button>
          </Card>

          <Button full onClick={onSend} disabled={amountNum <= 0}>Send Now</Button>
        </div>
      </main>
      <Footer />

      <RecipientForm open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={setRecipient} initial={recipient} />
    </div>
  )
}
