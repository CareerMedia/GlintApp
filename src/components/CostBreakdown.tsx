import Card from './ui/Card'
import { formatCurrency } from '../utils/formatNumber'

type Props = {
  feesLocal: { onRamp: number, offRamp: number, fxSpread: number, total: number }
  totalPercent: number
  currency: string
}

export default function CostBreakdown({ feesLocal, totalPercent, currency }: Props) {
  const parts = [
    { label: 'On-ramp', value: feesLocal.onRamp },
    { label: 'Off-ramp', value: feesLocal.offRamp },
    { label: 'FX spread', value: feesLocal.fxSpread }
  ]
  const total = feesLocal.total || parts.reduce((a, p) => a + p.value, 0)

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Transparent Transfer Costs</h3>
        <div className="text-sm text-soft-white/80">Total: {formatCurrency(total, currency)} ({totalPercent.toFixed(1)}%)</div>
      </div>

      <div className="flex items-center gap-2">
        {parts.map((p, i) => {
          const width = total > 0 ? Math.max(6, (p.value / total) * 100) : 33.33
          const bg = i === 0 ? 'from-gold-start to-gold-end' : i === 1 ? 'from-electric-teal to-gold-start' : 'from-soft-white to-electric-teal'
          return (
            <div key={p.label} className={`h-3 rounded-full bg-gradient-to-r ${bg}`} style={{ width: `${width}%` }} aria-label={p.label}></div>
          )
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm">
        {parts.map(p => (
          <div key={p.label} className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-xs text-soft-white/70">{p.label}</div>
            <div className="font-medium">{formatCurrency(p.value, currency)}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
