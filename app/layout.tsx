import type { Metadata } from 'next';
import Header from './components/Header';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Alex Moxley',
  description: 'Alex Moxley Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='sm:scroll-smooth'>
      <body className='min-h-screen bg-slate-50'>
        <Header />
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
