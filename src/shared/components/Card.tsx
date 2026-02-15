interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  );
}
