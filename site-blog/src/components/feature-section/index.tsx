import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

export function FeatureSection() {
  return (
    <section className="container grid gap-6 py-8 md:grid-cols-2 md:px-10">
      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag">
          Simples
        </span>

        <h2 className="font-display text-gray-100 text-heading-lg">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag">
          Prático
        </span>

        <h2 className="font-display text-gray-100 text-heading-lg">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag">
              Personalizável
            </span>

            <h2 className="font-display text-gray-100 text-heading-lg">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button className="mt-auto hidden w-fit text-white md:flex" asChild>
              <Link href="/create-store">
                Criar loja grátis
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/assets/feature-image.svg"
                alt="Ilustração das funcionalidades da plataforma, com ícones de loja, etiqueta e sacola"
                width={440}
                height={330}
                className="w-full object-cover"
              />
            </div>

            <Button className="mt-4 w-full gap-2 text-white md:hidden" asChild>
              <Link href="/create-store">
                Criar loja grátis
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
