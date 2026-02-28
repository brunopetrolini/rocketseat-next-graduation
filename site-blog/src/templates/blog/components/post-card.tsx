import Link from 'next/link';

export function PostCard() {
  return (
    <Link
      href="/blog/post"
      className="max-h-80 rounded-xl border border-gray-400 bg-gray-600 p-8 text-gray-300"
    >
      <div>
        <h2 className="font-sans text-gray-100 text-heading-xs">
          Transformando seu negócio em uma loja virtual
        </h2>

        <p className="mt-2 truncate text-wrap text-body-xs">
          Se você está buscando uma maneira simples e eficaz de vender seus
          produtos online, o Site.Set é a solução perfeita para você. Criar uma
          loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma
          intuitiva, você pode criar um site profissional para sua loja em
          minutos, sem precisar de conhecimentos técnicos.
        </p>
      </div>

      <div className="mt-3 border-gray-400 border-t"></div>
    </Link>
  );
}
