import type { Metadata } from 'next';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next E-Commerce 14',
  description: 'Next E-Commerce 14 utilizando a versão 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <NavBar />
        <main className="h-screen p-16 ">{children}</main>
      </body>
    </html>
  );
}
