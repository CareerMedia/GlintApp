export type Fees = {
  on_ramp: number; // percent
  off_ramp: number; // percent
  fx_spread: number; // percent
};

export type Corridor = {
  country: string;
  currency: string;
  fx_rate: number;
}

export type FeeResult = {
  totalPercent: number;
  onRampLocal: number;
  offRampLocal: number;
  fxSpreadLocal: number;
  totalFeeLocal: number;
  netUsd: number;
  recipientLocal: number;
};

export const calculateFees = (amountUSD: number, fees: Fees, fxRate: number): FeeResult => {
  const totalPercent = (fees.on_ramp + fees.off_ramp + fees.fx_spread) / 100;
  const onRampUsd = amountUSD * (fees.on_ramp / 100);
  const offRampUsd = amountUSD * (fees.off_ramp / 100);
  const fxSpreadUsd = amountUSD * (fees.fx_spread / 100);
  const totalFeeUsd = onRampUsd + offRampUsd + fxSpreadUsd;

  const onRampLocal = onRampUsd * fxRate;
  const offRampLocal = offRampUsd * fxRate;
  const fxSpreadLocal = fxSpreadUsd * fxRate;
  const totalFeeLocal = totalFeeUsd * fxRate;

  const netUsd = amountUSD - totalFeeUsd;
  const recipientLocal = netUsd * fxRate;

  return {
    totalPercent: totalPercent * 100,
    onRampLocal,
    offRampLocal,
    fxSpreadLocal,
    totalFeeLocal,
    netUsd,
    recipientLocal
  };
}
