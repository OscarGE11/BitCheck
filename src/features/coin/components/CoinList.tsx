import type { Coin } from '../models/Coin';
import CoinCard from './CoinCard';

interface CoinListProps {
  coins: Coin[];
}

export default function CoinList({ coins }: CoinListProps) {
  return (
    <div className="flex flex-col gap-5">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
