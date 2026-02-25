import type { FlatCoinMarketChartData } from '../models/Coin';

export const parseDate = (timestamp: number) => {
  return new Date(timestamp);
};

export const refactorData = (prices?: number[][]) => {
  if (!prices) return [];

  return prices.map(
    ([timestamp, price]): FlatCoinMarketChartData => ({
      date: timestamp,
      price: Number(price.toFixed(2)),
    }),
  );
};

export const formatPrice = (value: number) => {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;

  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;

  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;

  return `$${value}`;
};
