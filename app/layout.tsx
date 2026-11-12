import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oakridge Ward | Sacrament Meeting Planner',
  description: 'Plan, review, and print Sunday Sacrament Meeting agendas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased`}>
        <Suspense fallback={<div className="h-16 bg-blue-700" />}>
          <Header />
        </Suspense>
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
          <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading...</div>}>
            {children}
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-16 bg-gray-900" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
