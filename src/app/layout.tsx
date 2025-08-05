// src/app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Sistem Informasi Desa Cidugaleun Digital',
  description: 'Desa Cidugaleun Digital - Sistem Informasi Desa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
