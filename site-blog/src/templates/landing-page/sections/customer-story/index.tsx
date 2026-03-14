import { AuthorInfo } from '@/components/author-info';
import { SectionHeading } from '@/components/section-heading';

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
      <SectionHeading className="text-center">
        Quem utiliza, aprova!
      </SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {customerStories.map(({ id, content, author }) => (
          <div
            key={id}
            className="flex flex-col gap-10 rounded-xl border border-gray-400 bg-gray-600 p-10"
          >
            <p className="text-body-md text-gray-200 italic">{content}</p>

            <AuthorInfo
              avatarUrl={author.avatar}
              avatarAlt={`${author.name}, ${author.role}`}
              name={author.name}
              subtitle={author.role}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
