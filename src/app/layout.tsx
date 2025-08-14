import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


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
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
