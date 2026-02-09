import { useQuery } from '@tanstack/react-query';
import { fetchCoins } from '../lib/api/coingecko';

export default function useCoins() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['coins'],
    queryFn: fetchCoins,
  });

  return { data, isPending, isError };
}
