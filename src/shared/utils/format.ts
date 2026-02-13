export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('es-ES').format(num);
};

export const formatCryptoCurrency = (num: number) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(num);
