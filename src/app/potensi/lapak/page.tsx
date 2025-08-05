"use client";

import { useEffect, useState, useMemo } from "react";
import Navbar from "@app/app/components/navbar";
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
    nama: "Beras Lokal 5Kg",
    harga: 50000,
    deskripsi: "Beras putih hasil panen petani lokal, pulen dan tanpa pestisida.",
    gambar: "/image/beras.png",
    wa: "6281234567890",
    penjual: "Pak Ujang",
    lokasi: "Dusun Cisereh",
    cerita:
      "Pak Ujang telah menggarap sawah selama 30 tahun. Ia menanam padi dengan metode tradisional, di lahan warisan keluarga. Beras ini hasil panen musim kemarau, lebih pulen dan harum.",
  },
  {
    id: 2,
    nama: "Madu Hutan Asli",
    harga: 75000,
    deskripsi: "Madu alami tanpa campuran dari hutan sekitar, kaya manfaat.",
    gambar: "/image/madu.png",
    wa: "6281234567890",
    penjual: "Bu Ani",
    lokasi: "Hutan Lereng Gunung",
    cerita:
      "Bu Ani adalah satu-satunya pengumpul madu liar di desa. Ia mengambil madu secara lestari, hanya saat musim berbunga. Madu ini tidak dipanaskan, jadi khasiatnya tetap utuh.",
  },
  {
    id: 3,
    nama: "Keripik Singkong",
    harga: 10000,
    deskripsi: "Cocok untuk camilan, gurih dan renyah tanpa pengawet.",
    gambar: "/image/keripik.png",
    wa: "6281234567890",
    penjual: "Kelompok Kartini RW 3",
    lokasi: "Kampung Nanggerang",
    cerita:
      "Dibuat oleh ibu-ibu PKK RW 3, keripik ini diproduksi setiap pagi. Singkongnya dari kebun sendiri, digoreng dengan minyak kelapa asli. Cocok buat camilan anak atau teman ngopi.",
  },
];

// ---------- Formatter ----------
const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// ---------- Komponen SearchBar ----------
interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Cari produk, penjual, atau lokasi
      </label>
      <input
        id="search"
        type="text"
        placeholder="Cari produk, penjual, atau lokasi..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Cari produk, penjual, atau lokasi"
        className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm text-gray-800 transition-all duration-300 bg-white"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500"
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

// ---------- Komponen ProductCard ----------
interface ProductCardProps {
  produk: Produk;
  delayMs?: number;
}
function ProductCard({ produk, delayMs = 0 }: ProductCardProps) {
  return (
    <article
      aria-label={`Produk ${produk.nama} dari ${produk.penjual}`}
      className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 space-y-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={produk.gambar}
            alt={produk.nama}
            fill
            sizes="96px"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{produk.nama}</h3>
          <p className="text-sm text-emerald-600 font-medium">{produk.penjual}</p>
          <p className="text-xs text-gray-500">{produk.lokasi}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">{produk.cerita}</p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 border-t border-gray-100 gap-3">
        <span className="font-bold text-lg text-emerald-600">
          {formatRupiah(produk.harga)}
        </span>
        <div className="flex flex-wrap gap-2">
          <a
            href={`https://wa.me/${produk.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pesan ${produk.nama} via WhatsApp`}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-xl font-medium transition-transform duration-200 hover:scale-105"
          >
            📞 Pesan
          </a>
          <Link
            href={`/potensi/lapak/${produk.id}`}
            aria-label={`Lihat detail ${produk.nama}`}
            className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-xl font-medium transition-transform duration-200 hover:scale-105"
          >
            Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

// ---------- Halaman Utama ----------
export default function LapakDesa() {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const debouncedQuery = useDebounce(query, 250);

  const hasil = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return produkDesa;
    return produkDesa.filter((produk) => {
      return (
        produk.nama.toLowerCase().includes(q) ||
        produk.penjual.toLowerCase().includes(q) ||
        produk.deskripsi.toLowerCase().includes(q) ||
        produk.lokasi.toLowerCase().includes(q) ||
        produk.cerita.toLowerCase().includes(q)
      );
    });
  }, [debouncedQuery]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="min-h-screen w-full bg-white px-5 py-8">
          <div className="max-w-3xl mx-auto px-5 py-8 space-y-12 pb-28 bg-sky-100 rounded-2xl">
            {/* Header */}
            <div
              className={`text-center transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <h1 className="text-3xl font-black text-slate-800">
                🌾 <span className="text-emerald-600">UMKM</span> Desa Cidugaleun
              </h1>
              <p className="text-gray-600 mt-2">
                Produk lokal dengan jiwa dan kisah di baliknya.
              </p>
              <nav className="text-sm text-gray-500 mt-3 flex justify-center gap-1">
                <Link href="/" className="hover:text-blue-500">
                  Beranda
                </Link>
                <span>/</span>
                <span className="text-gray-700 font-medium">Cerita UMKM</span>
              </nav>
            </div>

            {/* Search */}
            <div
              className={`flex justify-center transition-all duration-700 delay-150 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <SearchBar value={query} onChange={setQuery} />
            </div>

            {/* Hasil */}
            {hasil.length > 0 ? (
              <div className="grid gap-6">
                {hasil.map((produk, idx) => (
                  <ProductCard
                    key={produk.id}
                    produk={produk}
                    delayMs={300 + idx * 100}
                  />
                ))}
              </div>
            ) : (
              <div
                className={`text-center py-10 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <p className="text-gray-500 text-lg">
                  Tidak ada produk yang cocok.
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="text-emerald-600 hover:underline text-sm mt-2"
                >
                  Hapus pencarian
                </button>
              </div>
            )}

            {/* Bantuan WA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Butuh bantuan via WhatsApp"
              className="fixed bottom-6 right-6 bg-white text-gray-800 px-4 py-3 rounded-full flex items-center gap-2 shadow-xl font-medium z-50 hover:shadow-2xl transition-transform duration-200 hover:scale-105"
            >
              <div className="w-6 h-6 relative">
                <Image
                  src="/image/wa.png"
                  alt="WA"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold whitespace-nowrap">
                Butuh Bantuan?
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
