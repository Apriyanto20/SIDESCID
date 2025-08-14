"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// ---------- Tipe ----------
type Produk = {
  id: number;
  nama: string;
  harga: number;
  deskripsi: string;
  gambar: string;
  wa: string;
  penjual: string;
  cerita: string;
  lokasi: string;
};

// ---------- Hook: debounce ----------
function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

// ---------- Data ----------
const produkDesa: Produk[] = [
  {
    id: 1,
    nama: "Kopi Arabica Dindingari",
    harga: 60000,
    deskripsi: "Kopi Arabica premium dari kebun lokal, aroma khas pegunungan.",
    gambar: "/image/kemasankopi.jpg",
    wa: "6281234567890",
    penjual: "Yogaswara atau Udep",
    lokasi: "Dusun Babakan",
    cerita:
      "Kopi Khas Cidugaleun",
  },
  {
    id: 2,
    nama: "Keripik Hervia Mandiri",
    harga: 10000,
    deskripsi: "Berbagai macam olahan keripik dengan total 15 macam rasa dan olahan",
    gambar: "/image/hervia.jpg",
    wa: "6281234567890",
    penjual: "Bu Susilawati",
    lokasi: "Kampung Pajagan",
    cerita:
      "Berbagai macam olahan makanan ringan",
  }
];

// ---------- Formatter ----------
const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// ---------- Komponen SearchBar (diperbarui) ----------
function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-10">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari produk, penjual, atau lokasi..."
        className="w-full px-6 py-4 pl-14 pr-6 text-base border border-gray-300 rounded-full shadow-lg focus:ring-4 focus:ring-emerald-300/50 outline-none transition-all duration-300 focus:border-emerald-500 bg-white/90 backdrop-blur-sm"
      />
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 animate-pulse-slow">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

// ---------- Komponen ProductCard (diperbarui) ----------
function ProductCard({ produk, index }: { produk: Produk; index: number }) {
  return (
    <article
      className={`bg-white/80 backdrop-blur-md p-7 rounded-3xl shadow-xl border border-gray-200 transition-all hover:shadow-3xl hover:-translate-y-2 duration-500 transform ${
        index === 0 ? "animate-fadeInUp" : "animate-fadeInUp"
      }`}
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-sky-50 group">
          <Image
            src={produk.gambar}
            alt={produk.nama}
            fill
            sizes="112px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 leading-tight group-hover:text-emerald-600 transition">
            {produk.nama}
          </h3>
          <p className="text-sm text-emerald-600 font-medium mt-1">{produk.penjual}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
            📍 {produk.lokasi}
          </p>
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mt-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
        {produk.cerita}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
        <span className="font-extrabold text-xl text-emerald-600">
          {formatRupiah(produk.harga)}
        </span>
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${produk.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all duration-300 shadow hover:shadow-md transform hover:scale-105"
          >
            📱 Pesan
          </a>
          <Link
            href={`/potensi/lapak/${produk.id}`}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-800 transition-all duration-300 hover:shadow"
          >
            Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

// ---------- Halaman Utama (diperbarui) ----------
export default function LapakDesa() {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const debouncedQuery = useDebounce(query, 250);

  const hasil = useMemo(() => {
    const q = debouncedQuery.toLowerCase().trim();
    if (!q) return produkDesa;
    return produkDesa.filter((p) =>
      [p.nama, p.penjual, p.deskripsi, p.cerita, p.lokasi].some((v) =>
        v.toLowerCase().includes(q)
      )
    );
  }, [debouncedQuery]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-5 py-16 pt-28">
      <div className="max-w-5xl mx-auto space-y-14 pb-32">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-fadeIn`}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 tracking-tight">
            🌾 <span className="text-gray-800">UMKM</span> Desa Cidugaleun
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Produk lokal berkualitas tinggi, dengan cerita unik di baliknya. Dari desa, untuk dunia.
          </p>
          <nav className="text-sm text-gray-500 mt-4 flex justify-center gap-2">
            <Link href="/" className="hover:text-blue-500 transition">Beranda</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Cerita UMKM</span>
          </nav>
        </div>

        {/* Search */}
        <div className="transition-all duration-700 delay-200 animate-fadeInUp">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {/* Produk */}
        {hasil.length > 0 ? (
          <div className="space-y-6">
            {hasil.map((produk, index) => (
              <ProductCard key={produk.id} produk={produk} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500 animate-fadeInUp">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl">Tidak ada produk yang cocok.</p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 inline-flex items-center gap-2 text-emerald-600 hover:underline font-medium transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Hapus pencarian
            </button>
          </div>
        )}
      </div>

      {/* Tombol Bantuan WA */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl z-50 hover:shadow-3xl transition-all duration-300 hover:scale-105 group animate-pulse-slow"
      >
        <div className="w-7 h-7 relative group-hover:animate-bounceOnce">
          <Image src="/image/wa.png" alt="WA" fill className="object-contain" />
        </div>
        <span className="text-sm font-bold whitespace-nowrap">Butuh Bantuan?</span>
      </a>

      {/* Animasi CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }
        .animate-bounceOnce {
          animation: bounceOnce 0.6s ease-in-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .pt-28 {
            padding-top: 80px;
          }
          .pb-32 {
            padding-bottom: 100px;
          }
        }
      `}</style>
    </div>
  );
}