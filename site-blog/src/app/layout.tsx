import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Site.Set Blog – E-commerce, SEO e Marketing Digital',
  description:
    'Aprenda estratégias de e-commerce, SEO e marketing digital para vender mais e fazer sua loja virtual crescer.',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set Blog – E-commerce, SEO e Marketing Digital',
    description:
      'Aprenda estratégias de e-commerce, SEO e marketing digital para vender mais e fazer sua loja virtual crescer.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Site.Set Blog',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Site.Set Blog',
      },
    ],
  },
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
