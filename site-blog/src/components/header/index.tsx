import Image from 'next/image';
import Link from 'next/link';

import { ActiveLink } from '../active-link';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-white/10 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className='cursor-pointer' href="/"><Image src="/assets/brand-logo.svg" alt="Logo" width={115} height={32} /></Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button className="rounded-full" variant="secondary" asChild>
              <Link href="/start" className='text-sm'>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
