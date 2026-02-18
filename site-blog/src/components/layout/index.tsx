import { Inter, PT_Sans_Caption } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-sans',
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.variable} ${ptSansCaption.variable} relative flex min-h-screen select-none flex-col font-inter`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
