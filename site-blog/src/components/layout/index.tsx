import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen select-none flex-col bg-gray-700`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
