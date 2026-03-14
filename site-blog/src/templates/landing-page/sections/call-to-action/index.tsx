import { ArrowRightIcon, StoreIcon } from 'lucide-react';
import Link from 'next/link';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="relative">
      <div className="absolute inset-0 block bg-[url('/assets/background-footer.svg')] bg-center bg-cover bg-no-repeat" />

      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 py-14 md:gap-10 md:pt-20 md:pb-16">
        <div className="absolute top-0 left-2/4 z-99 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-4">
          <StoreIcon className="h-8 w-8 text-cyan-100" />
        </div>

        <SectionHeading className="text-center">
          Crie uma loja online e inicie suas vendas ainda hoje
        </SectionHeading>

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
