import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mundo Pet",
  description: "Plataforma de agendamento para Pet Shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${inter.variable} h-full bg-background-primary font-sans text-content-primary antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
