import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Site Blog',
  description: 'Site Blog',
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
