'use client';

import { AlertCircleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-svw flex-col items-center justify-center gap-12 px-12">
      <div className="flex flex-row items-center justify-start gap-3 font-sans text-gray-100 text-heading-md">
        <AlertCircleIcon />
        Ops, algo deu errado!
      </div>

      <div className="w-full select-text rounded-xl border border-gray-400 bg-gray-500 text-gray-200">
        <p className="p-4 font-bold">{error.message}</p>
        <div className="border-t border-t-gray-400">
          <p className="max-h-40 overflow-scroll p-4">{error.stack}</p>
        </div>
      </div>

      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}
