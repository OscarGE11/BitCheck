import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';

export default function Header() {
  return (
    <header className="w-full bg-principal h-20 flex items-center">
      <Link href="/" className="mx-12">
        <Logo className="h-12 w-auto text-white" />
      </Link>
    </header>
  );
}
