'use client';
import Loader from '../shared/components/Loader';
import useCoins from '../features/coin/hooks/useCoins';
import CoinList from '../features/coin/components/CoinList';

export default function Home() {
  const { data: coins, isError, isPending } = useCoins();

  console.log(coins);

  if (isPending) return <Loader />;

  if (isError) return <p>Error loading coins</p>;

  if (!coins) return null;

  return (
    <div>
      <CoinList coins={coins} />
    </div>
  );
}
