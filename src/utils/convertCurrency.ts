/**
 * Convert USD to local currency using a simple multiplication by fxRate.
 * Example: 100 USD * 83.2 = 8320 INR
 */
export const convertUsdToLocal = (usdAmount: number, fxRate: number) => {
  return usdAmount * fxRate;
}
