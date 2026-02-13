import Image from 'next/image';
import type { Coin } from '../models/Coin';
import Link from 'next/link';
import { formatCryptoCurrency } from '@/shared/utils/format';

export default function CoinCard({ coin }: { coin: Coin }) {
  return (
    <Link href={`/coin/${coin.id}`}>
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
        <Image
          alt={`${coin.name} logo`}
          width={32}
          height={32}
          src={coin.image}
          className="rounded-full"
        />

        <span className="font-medium">{coin.name}</span>
        <span className="font-medium">
          {formatCryptoCurrency(coin.high_24h)}
        </span>
      </div>
    </Link>
  );
}
