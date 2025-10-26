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
  const pct = Math.min(1, Math.max(0, totalPercent / 100))

  return (
    <Card className="p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Transparent Transfer Costs</h3>
        <div className="text-sm text-soft-white/80">Total: {formatCurrency(total, currency)} ({totalPercent.toFixed(1)}%)</div>
      </div>

      <div className="flex items-center gap-5">
        <div className="ring" style={{ ['--val' as any]: pct }}>
          <div className="text-xl">{(totalPercent).toFixed(1)}%</div>
        </div>

        <div className="grid grid-cols-3 gap-3 flex-1">
          {parts.map(p => (
            <div key={p.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-soft-white/70">{p.label}</div>
              <div className="font-medium">{formatCurrency(p.value, currency)}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
