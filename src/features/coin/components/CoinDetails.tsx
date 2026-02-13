'use client';
interface Props {
  id: string;
}
import Loader from '@/shared/components/Loader';
import useCoin from '@/features/coin/hooks/useCoin';
import Image from 'next/image';

export default function CoinDetails({ id }: Props) {
  const { data: coin, isPending, isError, error } = useCoin(id);
  console.log(coin);

  if (isPending) return <Loader />;

  if (isError) return <div>Error fetching details...</div>;

  if (!coin) return undefined;

  return (
    <div>
      <Image src={coin.image.large} alt="thumb" width={50} height={30}></Image>
      {coin.description.en}
    </div>
  );
}
