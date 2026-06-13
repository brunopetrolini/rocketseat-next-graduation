import '@/styles/globals.css';
import '@daypicker/react/style.css';

import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import Script from 'next/script';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Mundo Pet',
  description: 'Plataforma de agendamento para Pet Shops',
};

const shouldLoadReactDevtools =
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_DEVTOOLS === 'true';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${inter.variable} bg-background-primary font-sans text-content-primary antialiased`}
    >
      <body className="container">
        {children}
        {shouldLoadReactDevtools && (
          <Script src="http://localhost:8097" strategy="beforeInteractive" />
        )}
      </body>
    </html>
  );
}
