import { ArrowRightIcon, StoreIcon } from 'lucide-react';
import { PT_Sans_Caption } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
});

export function CallToAction() {
  return (
    <section className="relative">
      <Image
        src="/assets/background-footer.svg"
        alt="Background footer"
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 py-14 md:gap-10 md:pt-20 md:pb-16">
        <div className="absolute top-0 left-2/4 z-99 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-4">
          <StoreIcon className="h-8 w-8 text-cyan-100" />
        </div>

        <h2
          className={`${ptSansCaption.className} text-center text-gray-100 text-heading-xl`}
        >
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>

        <Button className="w-fit text-white" asChild>
          <Link href="/create-store">
            Criar loja grátis
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
