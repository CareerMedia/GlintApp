export function convertUsdToLocal(amountUSD: number, fxRate: number) {
  return amountUSD * fxRate
}

// Backward-compatible alias
export const convertToLocal = convertUsdToLocal
