import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-white/10 border-t text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 py-8 md:justify-between">
          <Link href="/">
            <Image
              src="/assets/brand-logo.svg"
              alt="brand logo"
              width={115}
              height={32}
            />
          </Link>

          <nav className="flex flex-col items-start justify-center gap-4 text-muted-foreground text-sm md:flex-row md:items-center">
            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-primary"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/send-feedback"
              className="transition-colors hover:text-primary"
            >
              Enviar Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
