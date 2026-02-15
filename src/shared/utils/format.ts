export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatCryptoCurrency = (num: number) => {
  // Definición de decimales: 6 para assets < $1, 2 para el resto
  const digits = num < 1 ? 6 : 2;

  // Si el número es >= 1.000.000, usamos formato compacto
  const isLarge = num >= 1000000;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: isLarge ? 2 : digits,
    maximumFractionDigits: isLarge ? 2 : digits,
    notation: isLarge ? 'compact' : 'standard',
    compactDisplay: 'short',
  }).format(num);
};
