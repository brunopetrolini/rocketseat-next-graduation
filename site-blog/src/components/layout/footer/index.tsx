import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 py-8 md:justify-between">
          <BrandLogo />

          <nav className="flex flex-col items-start justify-center gap-4 text-blue-100 text-muted-foreground text-sm md:flex-row md:items-center">
            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-blue-200"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-blue-200"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/send-feedback"
              className="transition-colors hover:text-blue-200"
            >
              Enviar Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
