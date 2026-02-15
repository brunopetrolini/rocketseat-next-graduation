import { ArrowRightIcon, ClockIcon, StoreIcon } from 'lucide-react';
import { PT_Sans_Caption } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export function HeroSection() {
  return (
    <section className="container relative mt-16 flex items-center justify-center">
      <div className="grid min-h-80 grid-cols-1 items-center gap-8 md:h-144 md:grid-cols-2">
        {/* Text Column */}
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1
            className={`${ptSansCaption.className} text-center text-gray-100 text-heading-hg md:text-left lg:text-left`}
          >
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-200">
                  <ClockIcon className="h-4 w-4 text-cyan-100" />
                  <span className="text-gray-200">
                    Crie o seu site em menos de 5 minutos
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-200">
                  <StoreIcon className="h-4 w-4 text-cyan-100" />
                  <span className="text-gray-200">
                    Acompanhe e otimize seu negócio online
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col items-start gap-2 md:items-start lg:items-start">
            <Button className="w-fit text-white" asChild>
              <Link href="/create-store">
                Criar loja grátis
                <ArrowRightIcon />
              </Link>
            </Button>

            <p className="text-body-xs text-gray-300">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        {/* Image Column (Hero Illustration) */}
        <div className="relative order-first hidden h-80 items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src="/assets/background-hero.svg"
            alt="Ilustração com ícones de loja, etiqueta e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
