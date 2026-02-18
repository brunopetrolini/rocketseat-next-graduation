import Link from 'next/link';

import { ActiveLink } from '@/components/active-link';
import { BrandLogo } from '@/components/brand-logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-white/10 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/start" className="text-sm">
                Começar
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
