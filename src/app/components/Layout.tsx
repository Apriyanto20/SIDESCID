// app/profil/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

export default function ProfilLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigasi Profil */}
      <nav className="bg-green-700 text-white px-6 py-3">
        <ul className="flex gap-6 text-sm font-semibold">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/profil/profil-desa">Profil Desa</Link></li>
          <li><Link href="/profil/sejarah">Sejarah</Link></li>
          <li><Link href="/profil/visi-misi">Visi & Misi</Link></li>
          <li><Link href="/profil/aparatur">Aparatur</Link></li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
