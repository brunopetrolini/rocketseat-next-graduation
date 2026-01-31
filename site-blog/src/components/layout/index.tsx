import type { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="dark relative flex min-h-screen select-none flex-col">
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
