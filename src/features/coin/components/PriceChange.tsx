import { ArrowDown, ArrowUp } from 'lucide-react';

interface Props {
  value: number;
  className?: string;
}

export default function PriceChange({ value, className = '' }: Props) {
  const isPositive = value > 0;

  if (value === 0)
    return <span className={`text-slate-400 ${className}`}>0.00%</span>;

  return (
    <div
      className={`flex items-center gap-0.5 font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-500'} ${className}`}
    >
      <span>{Math.abs(value).toFixed(2)}%</span>
      {isPositive ? (
        <ArrowUp size={14} strokeWidth={3} />
      ) : (
        <ArrowDown size={14} strokeWidth={3} />
      )}
    </div>
  );
}
