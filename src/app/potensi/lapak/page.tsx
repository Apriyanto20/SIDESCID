"use client";
import { useState, useEffect } from "react";
import Layout from "@app/app/layout";
import Link from "next/link";

// Tipe data produk
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

export default function LapakDesa() {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Data produk dengan sentuhan cerita
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
      cerita: "Pak Ujang telah menggarap sawah selama 30 tahun. Ia menanam padi dengan metode tradisional, di lahan warisan keluarga. Beras ini hasil panen musim kemarau, lebih pulen dan harum.",
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
      cerita: "Bu Ani adalah satu-satunya pengumpul madu liar di desa. Ia mengambil madu secara lestari, hanya saat musim berbunga. Madu ini tidak dipanaskan, jadi khasiatnya tetap utuh.",
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
      cerita: "Dibuat oleh ibu-ibu PKK RW 3, keripik ini diproduksi setiap pagi. Singkongnya dari kebun sendiri, digoreng dengan minyak kelapa asli. Cocok buat camilan anak atau teman ngopi.",
    },
  ];

  // Fungsi pencocokan pencarian
  const match = (produk: Produk) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return produk.nama.toLowerCase().includes(q) || produk.penjual.toLowerCase().includes(q) || produk.deskripsi.toLowerCase().includes(q) || produk.lokasi.toLowerCase().includes(q) || produk.cerita.toLowerCase().includes(q);
  };

  // Filter produk yang cocok
  const hasil = produkDesa.filter(match);

  // Trigger animasi setelah mount (untuk fade-in awal)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 py-8 space-y-16 pb-28">
        {/* Header */}
        <div className={`text-center opacity-0 translate-y-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : ""}`}>
          <h1 className="text-3xl font-black text-slate-800">
            🌾 <span className="text-emerald-600">UMKM</span> Desa Cidugaleun
          </h1>
          <p className="text-gray-600 mt-2">Produk lokal dengan jiwa dan kisah di baliknya.</p>
          <nav className="text-sm text-gray-400 mt-3">
            <Link href="/" className="hover:text-blue-500">
              Beranda
            </Link>{" "}
            / <span className="text-gray-600">Cerita UMKM</span>
          </nav>
        </div>

        {/* Search Bar */}
        <div className={`flex justify-center opacity-0 translate-y-4 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : ""}`}>
          <div className="relative w-full max-w-md group">
            <input
              type="text"
              placeholder="Cari produk, penjual, atau lokasi..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm text-gray-800 transition-all duration-300 group-focus-within:shadow-md"
            />
            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Hasil Pencarian */}
        {hasil.length > 0 ? (
          hasil.map((produk, index) => (
            <article
              key={produk.id}
              className={`bg-white p-6 rounded-3xl shadow-md border border-gray-100 space-y-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 opacity-0 translate-y-6 ${mounted ? "opacity-100 translate-y-0" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Gambar & Nama */}
              <div className="flex items-center gap-4">
                <img src={produk.gambar} alt={produk.nama} className="w-20 h-20 object-cover rounded-xl transition-transform duration-300 hover:scale-105" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{produk.nama}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{produk.penjual}</p>
                  <p className="text-xs text-gray-500">{produk.lokasi}</p>
                </div>
              </div>

              {/* Cerita Singkat */}
              <p className="text-gray-700 text-sm leading-relaxed">{produk.cerita}</p>

              {/* Harga & Aksi */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="font-bold text-lg text-emerald-600">Rp {produk.harga.toLocaleString("id-ID")}</span>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${produk.wa}`} // ✅ Fixed: removed extra spaces
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-xl font-medium transition-transform duration-200 hover:scale-105"
                  >
                    📞 Pesan
                  </a>
                  <Link href={`/potensi/lapak/${produk.id}`} className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-xl font-medium transition-transform duration-200 hover:scale-105">
                    Detail
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className={`text-center py-10 opacity-0 translate-y-4 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : ""}`}>
            <p className="text-gray-500 text-lg">Tidak ada produk yang cocok.</p>
            <button onClick={() => setQuery("")} className="text-emerald-600 hover:underline text-sm mt-2">
              Hapus pencarian
            </button>
          </div>
        )}

        {/* Floating WA Button - Animasi muncul pelan & profesional */}
        <a
          href="https://wa.me/6281234567890" // ✅ Fixed: no extra spaces
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-white text-gray-800 px-5 py-3 rounded-full flex items-center gap-3 shadow-xl font-medium z-50 hover:scale-105 transition-all duration-300 animate-bounce-slow hover:shadow-2xl"
        >
          {/* Ikon WA - Gunakan gambar PNG */}
          <img src="/image/wa.png" alt="WA" className="w-6 h-6" />
          <span className="text-sm font-semibold whitespace-nowrap">Butuh Bantuan?</span>
        </a>
      </div>

      {/* Custom CSS Animasi */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </Layout>
  );
}
