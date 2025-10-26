export type Fees = {
  on_ramp: number
  off_ramp: number
  fx_spread: number
}

export type FeeResult = {
  onRampUSD: number
  offRampUSD: number
  fxSpreadUSD: number
  totalUSD: number
  totalPercent: number
}

export function calculateFees(amountUSD: number, fees: Fees): FeeResult {
  const onRampUSD = amountUSD * (fees.on_ramp / 100)
  const offRampUSD = amountUSD * (fees.off_ramp / 100)
  const fxSpreadUSD = amountUSD * (fees.fx_spread / 100)
  const totalUSD = onRampUSD + offRampUSD + fxSpreadUSD
  const totalPercent = fees.on_ramp + fees.off_ramp + fees.fx_spread
  return { onRampUSD, offRampUSD, fxSpreadUSD, totalUSD, totalPercent }
}
