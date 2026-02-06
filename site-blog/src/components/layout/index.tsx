import { Inter, PT_Sans_Caption } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans-caption',
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.variable} ${ptSansCaption.variable} ${inter.className} relative flex min-h-screen select-none flex-col`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
