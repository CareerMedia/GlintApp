export const formatCurrency = (value: number, currency: string) => {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2
    }).format(value);
  } catch {
    // Fallback for unknown currency codes
    return `${value.toFixed(2)} ${currency}`;
  }
}

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2
  }).format(value);
}
