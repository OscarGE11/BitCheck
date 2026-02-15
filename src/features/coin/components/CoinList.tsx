import type { Coin } from '../models/Coin';
import CoinCard from './CoinCard';

interface CoinListProps {
  coins: Coin[];
}

export default function CoinList({ coins }: CoinListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
