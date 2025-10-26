import Card from './ui/Card';
import { formatCurrency } from '../utils/formatNumber';
import { motion } from 'framer-motion';

type Props = {
  currency: string;
  onRampLocal: number;
  offRampLocal: number;
  fxSpreadLocal: number;
  totalFeeLocal: number;
  totalPercent: number;
};

export default function CostBreakdown({ currency, onRampLocal, offRampLocal, fxSpreadLocal, totalFeeLocal, totalPercent }: Props) {
  const total = onRampLocal + offRampLocal + fxSpreadLocal;
  const segments = [
    { label: 'On-ramp', value: onRampLocal, color: 'from-[#00D1C1] to-[#4EF4E6]' },
    { label: 'Off-ramp', value: offRampLocal, color: 'from-[#FFD700] to-[#FFB300]' },
    { label: 'FX spread', value: fxSpreadLocal, color: 'from-[#96E6FF] to-[#00A6FF]' },
  ];

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Transparent Transfer Costs</h3>
        <span className="text-sm opacity-80">Total: {formatCurrency(totalFeeLocal, currency)} ({totalPercent.toFixed(1)}%)</span>
      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
        <div className="flex w-full h-full">
          {segments.map((s) => {
            const pct = total > 0 ? (s.value / total) * 100 : 0;
            return (
              <motion.div
                key={s.label}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.6 }}
                className={`h-full bg-gradient-to-r ${s.color}`}
                title={`${s.label}: ${pct.toFixed(0)}%`}
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm">
        {segments.map((s) => (
          <div key={s.label} className="glass rounded-lg p-3">
            <div className="opacity-70">{s.label}</div>
            <div className="font-semibold">{formatCurrency(s.value, currency)}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
