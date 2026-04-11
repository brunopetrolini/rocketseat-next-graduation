import { SearchIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-6 text-gray-100">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-medium text-2xl">404</h1>
        <div className="h-8 rounded-full border border-gray-400" />
        <h2 className="font-normal">Essa página não foi encontrada.</h2>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/">Voltar para o início</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/blog">
            <SearchIcon />
            Ver blogs
          </Link>
        </Button>
      </div>
    </div>
  );
}
