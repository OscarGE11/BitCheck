'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCoins } from '../api/coingecko';
import type { Coin } from '../models/Coin';

export default function useCoins() {
  const { data, isPending, isError, error } = useQuery<Coin[]>({
    queryKey: ['coins'],
    queryFn: fetchCoins,
    refetchInterval: 60000,
    staleTime: 30000,
  });

  return { data, isPending, isError, error };
}
