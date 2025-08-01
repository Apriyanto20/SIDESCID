// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/AOSWrapper";
import Footer from "./components/Footer"; 
import Navbar from "./components/navbar";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Informasi Desa Cidugaleun Digital",
  description: "Desa Cidugaleun Digital - Sistem Informasi Desa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSWrapper>
          <Navbar />
          {children}
          <Footer />
        </AOSWrapper>
      </body>

    </html>
  );
}
