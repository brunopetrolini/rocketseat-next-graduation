import {
  HeartHandshakeIcon,
  PaintbrushVerticalIcon,
  StoreIcon,
} from 'lucide-react';
import Image from 'next/image';

export function SupportSection() {
  return (
    <section className="relative py-12 md:mt-32 md:py-28">
      <Image
        src="/assets/background-features.svg"
        alt="Background features"
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      <div className="container relative flex flex-col items-center gap-12">
        <h2
          className={
            'text-balance text-center font-sans text-gray-100 text-heading-xl'
          }
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* First Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <PaintbrushVerticalIcon className="mb-2 h-9 w-9 rounded-lg bg-blue-300 p-2 text-white" />

            <strong className={'font-sans text-gray-100 text-heading-sm'}>
              Personalize seu site
            </strong>

            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-cyan-300 p-6 text-left md:p-12">
            <StoreIcon className="mb-2 h-9 w-9 rounded-lg bg-cyan-200 p-2 text-white" />

            <strong className={'font-sans text-gray-100 text-heading-sm'}>
              Venda de qualquer loja
            </strong>

            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <HeartHandshakeIcon className="mb-2 h-9 w-9 rounded-lg bg-blue-300 p-2 text-white" />

            <strong className={'font-sans text-gray-100 text-heading-sm'}>
              Receba suporte amigável
            </strong>

            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
