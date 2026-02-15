import Link from 'next/link';
import { Logo } from './Logo';

export default function Header() {
  return (
    <header className="w-full bg-principal h-20 flex items-center sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-slate-700/50">
      <Link href="/" className="mx-12">
        <Logo className="h-12 w-auto text-white" />
      </Link>
    </header>
  );
}
