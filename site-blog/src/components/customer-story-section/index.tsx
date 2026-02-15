import { PT_Sans_Caption } from 'next/font/google';
import Image from 'next/image';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
});

const customerStories = [
  {
    id: 1,
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5',
    },
  },
  {
    id: 2,
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: 'https://images.unsplash.com/photo-1585569803161-cd11491600c9',
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className="container space-y-12 py-20 md:pt-32 md:pb-40">
      <h2
        className={`${ptSansCaption.className} text-center text-gray-100 text-heading-xl`}
      >
        Quem utiliza, aprova!
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {customerStories.map(({ id, content, author }) => (
          <div
            key={id}
            className="flex flex-col gap-10 rounded-xl border border-gray-400 bg-gray-600 p-10"
          >
            <p className="text-body-md text-gray-200 italic">{content}</p>

            <div className="flex flex-row items-center gap-3">
              <Image
                src={author.avatar}
                alt={`${author.name}, ${author.role}`}
                width={96}
                height={96}
                className="h-9 w-9 overflow-hidden rounded-full border border-blue-200 object-cover"
              />

              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-200 text-sm">
                  {author.name}
                </span>
                <small className="text-gray-300 text-xs">{author.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
