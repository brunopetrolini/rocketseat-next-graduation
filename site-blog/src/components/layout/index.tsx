import type { ReactNode } from 'react';

import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col select-none">
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  );
}
