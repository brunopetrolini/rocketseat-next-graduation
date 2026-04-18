import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Site.Set Blog – E-commerce, SEO e Marketing Digital',
  description:
    'Aprenda estratégias de e-commerce, SEO e marketing digital para vender mais e fazer sua loja virtual crescer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-700 antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
