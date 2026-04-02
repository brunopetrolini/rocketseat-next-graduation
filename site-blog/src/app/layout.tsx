import '@/styles/globals.css';

import { Layout } from '@/components/layout';

export const metadata = {
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
