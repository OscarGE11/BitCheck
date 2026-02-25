'use client';
interface Props {
  id: string;
}
import Loader from '@/shared/components/Loader';
import Card from '@/shared/components/Card';
import useCoinMarketChart from '../hooks/useCoinMarketChart';
import { refactorData } from '../utils/marketDataFormats';
import CoinAreaChart from './CoinAreaChart';
import useCoin from '../hooks/useCoin';
import Image from 'next/image';

export default function CoinDetails({ id }: Props) {
  const marketChartQuery = useCoinMarketChart(id);

  const coinQuery = useCoin(id);

  const prices = marketChartQuery.data?.prices;
  const flatData = refactorData(prices);
  const coinDetails = coinQuery.data;

  if (coinQuery.isPending || marketChartQuery.isPending) return <Loader />;

  if (coinQuery.isError || marketChartQuery.isError)
    return <div>Error fetching details...</div>;

  if (!coinDetails) return null;

  return (
    <div className="w-full flex gap-4 p-4 items-start">
      <Card className="w-2/3 p-6 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Image
            src={coinDetails?.image.large}
            alt={coinDetails.name}
            width={40}
            height={40}
          ></Image>
          <h1 className="text-center font-bold text-3xl">{coinDetails.name}</h1>
        </div>
        <h1>{coinDetails.description.en}</h1>
      </Card>
      <Card className="w-1/2">
        <h1 className="text-center font-bold text-2xl">7-day Market Price</h1>
        <CoinAreaChart flatData={flatData}></CoinAreaChart>
      </Card>
    </div>
  );
}
