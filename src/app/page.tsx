'use client';
import Loader from '../shared/components/Loader';
import useCoins from '../features/coin/hooks/useCoins';
import CoinList from '../features/coin/components/CoinList';
import Card from '@/shared/components/Card';
import { Flame } from 'lucide-react';

export default function Home() {
  const { data: coins, isError, isPending } = useCoins();

  console.log(coins);

  if (isPending) return <Loader />;

  if (isError) return <p>Error loading coins</p>;

  if (!coins) return null;

  return (
    <div className="px-24 flex w-full gap-12 items-start">
      <Card className="w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quidem ipsum incidunt laborum eaque qui soluta mollitia, autem
        dignissimos iure consequatur ipsam laudantium maxime dolorum voluptate
        eveniet neque officiis amet?
      </Card>
      <div className="w-1/2">
        <div className="text-center flex justify-center text-2xl ">
          <span className="text-xl font-bold">TOP 20 TRENDY</span>{' '}
          <Flame className=" text-orange-500" size={28} strokeWidth={2} />
        </div>
        <div className="pt-4">
          <CoinList coins={coins} />
        </div>
      </div>
    </div>
  );
}
