import { useQuery } from '@tanstack/react-query';
import { fetchCoinMarketChart } from '../api/coingecko';
import type { RawCoinMarketChartData } from '../models/Coin';

export default function useCoinMarketChart(id: string) {
  const { data, isPending, isError, error } = useQuery<RawCoinMarketChartData>({
    queryKey: ['coinMarketChart'],
    queryFn: () => fetchCoinMarketChart(id),
    refetchInterval: 60000,
    staleTime: 30000,
  });
  return { data, isPending, isError, error };
}
