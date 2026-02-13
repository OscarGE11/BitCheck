import { useQuery } from '@tanstack/react-query';
import type { CoinDetails } from '../models/Coin';
import { fetchCoin } from '../api/coingecko';

export default function useCoin(id: string) {
  const { data, isPending, isError, error } = useQuery<CoinDetails>({
    queryKey: ['coin'],
    queryFn: () => fetchCoin(id),
  });

  return { data, isPending, isError, error };
}
