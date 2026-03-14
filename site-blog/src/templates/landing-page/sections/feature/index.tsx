import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';

export function FeatureSection() {
  return (
    <section className="container grid gap-6 py-8 md:grid-cols-2 md:px-10">
      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <Tag variant="blue">Simples</Tag>

        <SectionHeading size="lg">
          Crie um catálogo de produtos online em poucos minutos
        </SectionHeading>
      </div>

      <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <Tag variant="blue">Prático</Tag>

        <SectionHeading size="lg">
          Venda para seu público através de uma plataforma única
        </SectionHeading>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
          <div className="flex flex-col gap-4">
            <Tag variant="blue">Personalizável</Tag>

            <SectionHeading size="lg">
              Tenha uma loja online personalizada com a cara da sua marca
            </SectionHeading>

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
