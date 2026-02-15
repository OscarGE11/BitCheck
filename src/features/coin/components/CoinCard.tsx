import Image from 'next/image';
import type { Coin } from '../models/Coin';
import Link from 'next/link';
import { formatCryptoCurrency } from '@/shared/utils/format';
import Card from '@/shared/components/Card';
import PriceChange from './PriceChange';

export default function CoinCard({ coin }: { coin: Coin }) {
  return (
    <Link href={`/coin/${coin.id}`}>
      <Card className="flex flex-col  gap-6 aspect-2/1 shadow-md/40 shadow-black">
        <div className="flex gap-3">
          <Image
            alt={`${coin.name} logo`}
            width={32}
            height={32}
            src={coin.image}
            className="rounded-full"
          />

          <span className="font-bold text-2xl">{coin.name}</span>
        </div>
        <div className="flex gap-4">
          <span>Price:</span>{' '}
          <span className="">{formatCryptoCurrency(coin.current_price)}</span>
        </div>
        <div>
          <div className="flex gap-10">
            <span>Change (24h</span>
            <PriceChange value={coin.price_change_percentage_24h}></PriceChange>
          </div>
        </div>
        <div className="flex gap-5">
          <span>Total market cap</span>{' '}
          <span>{formatCryptoCurrency(coin.market_cap)}</span>
        </div>
      </Card>
    </Link>
  );
}
