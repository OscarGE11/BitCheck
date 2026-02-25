import Image from 'next/image';
import type { Coin } from '../models/Coin';
import Link from 'next/link';
import { formatCryptoCurrency } from '@/shared/utils/format';
import Card from '@/shared/components/Card';
import PriceChange from './PriceChange';

export default function CoinCard({ coin }: { coin: Coin }) {
  return (
    <Link href={`/coin/${coin.id}`}>
      <Card className="flex flex-col gap-6 h-fit shadow-md/40 shadow-black px-4 py-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Image
              alt={`${coin.name} logo`}
              width={32}
              height={32}
              src={coin.image}
              className="rounded-full"
            />
            <span className="font-bold text-2xl">{coin.name}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-sm">(24h)</span>
            <PriceChange value={coin.price_change_percentage_24h} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>Price:</span>
            <span className="text-orange-400 font-medium">
              {formatCryptoCurrency(coin.current_price)}
            </span>
          </div>

          <div className="flex gap-2">
            <span>Total market cap:</span>
            <span className="text-orange-400 font-medium">
              {formatCryptoCurrency(coin.market_cap)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
