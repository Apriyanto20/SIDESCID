"use client";
import { useParams } from "next/navigation";
import Layout from "@app/app/components/Layout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

// Tipe data produk
type Produk = {
  id: number;
  nama: string;
  harga: number;
  deskripsi: string;
  gambar: string;
  wa: string;
  penjual: string;
  lokasi: string;
  cerita: string;
  bahan: string;
  proses: string;
  tips: string;
};

// Data lengkap produk
const produkDesa: Produk[] = [
  {
    id: 1,
    nama: "Beras Lokal 5Kg",
    harga: 50000,
    deskripsi: "Beras putih hasil panen petani lokal, pulen dan tanpa pestisida.",
    gambar: "/image/beras.png",
    wa: "6281234567890",
    penjual: "Pak Ujang",
    lokasi: "Dusun Cisereh, Desa Cidugaleun",
    cerita:
      "Pak Ujang telah menggarap sawah selama 30 tahun. Ia menanam padi dengan metode tradisional, di lahan warisan keluarga. Beras ini hasil panen musim kemarau, lebih pulen dan harum.",
    bahan: "Padi lokal varietas Cisadane, air dari irigasi alami, tanpa pupuk kimia.",
    proses: "Ditanam secara manual, dipanen saat matang penuh, lalu digiling dengan alat desa.",
    tips: "Simpan di tempat kering dan tertutup. Cocok untuk nasi uduk atau lontong.",
  },
  {
    id: 2,
    nama: "Madu Hutan Asli",
    harga: 75000,
    deskripsi: "Madu alami tanpa campuran dari hutan sekitar, kaya manfaat.",
    gambar: "/image/madu.png",
    wa: "6281234567890",
    penjual: "Bu Ani",
    lokasi: "Hutan Lereng Gunung, Jalur Pendakian",
    cerita:
      "Bu Ani adalah satu-satunya pengumpul madu liar di desa. Ia mengambil madu secara lestari, hanya saat musim berbunga. Madu ini tidak dipanaskan, jadi khasiatnya tetap utuh.",
    bahan: "100% nektar bunga hutan, tanpa tambahan gula atau air.",
    proses: "Dikumpulkan dari sarang alami lebah Trigona, disaring alami tanpa dipasteurisasi.",
    tips: "Minum 1 sendok pagi hari sebelum sarapan. Tahan hingga 2 tahun jika disimpan tertutup.",
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
    bahan: "Singkong segar, garam, minyak kelapa, bumbu rempah alami.",
    proses: "Dipotong tipis, direndam, digoreng 2 kali agar renyah, lalu dikemas manual.",
    tips: "Jika kurang renyah, bisa dipanaskan sebentar di oven. Tahan 2 minggu.",
  },
];

export default function DetailProduk() {
  const params = useParams();
  const id = Number(params?.id);
  const produk = produkDesa.find((p) => p.id === id);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!produk) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center opacity-0 translate-y-4 transition-all duration-700 delay-150">
          <h2 className="text-2xl font-bold text-gray-800">Produk Tidak Ditemukan</h2>
          <p className="text-gray-600 mt-2">Maaf, produk yang Anda cari tidak tersedia di desa kami.</p>
          <Link href="/potensi/lapak" className="mt-6 text-emerald-600 hover:underline font-medium">
            ← Kembali ke Cerita UMKM
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-5 py-8 pb-28">
        {/* Back Button */}
        <Link
          href="/potensi/lapak"
          className={`inline-flex items-center gap-1 text-emerald-600 hover:underline mb-6 text-sm font-medium opacity-0 translate-y-2 transition-all duration-500 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <ArrowLeft size={16} /> Kembali
        </Link>

        {/* Cover Image */}
        <div
          className={`rounded-2xl overflow-hidden mb-6 shadow-lg opacity-0 translate-y-4 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Header */}
        <h1
          className={`text-3xl font-bold text-slate-800 leading-tight opacity-0 translate-y-2 transition-all duration-500 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          {produk.nama}
        </h1>
        <p
          className={`text-emerald-600 font-semibold mt-1 opacity-0 translate-y-2 transition-all duration-500 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          {produk.penjual}
        </p>
        <p
          className={`text-gray-600 text-sm opacity-0 translate-y-2 transition-all duration-500 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          {produk.lokasi}
        </p>

        {/* Harga */}
        <div
          className={`mt-4 opacity-0 translate-y-2 transition-all duration-500 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <span className="text-2xl font-bold text-emerald-600">
            Rp {produk.harga.toLocaleString("id-ID")}
          </span>
        </div>

        {/* Deskripsi Singkat */}
        <section
          className={`mt-6 opacity-0 translate-y-2 transition-all duration-500 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="text-lg font-semibold text-gray-800">Tentang Produk Ini</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">{produk.deskripsi}</p>
        </section>

        {/* Cerita Penjual */}
        <section
          className={`mt-8 bg-amber-50 p-5 rounded-xl border-l-4 border-amber-400 opacity-0 translate-y-2 transition-all duration-500 delay-800 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="text-lg font-semibold text-amber-900">Dari Tangan ke Hati</h2>
          <p className="text-amber-800 mt-2 leading-relaxed">{produk.cerita}</p>
        </section>

        {/* Detail Teknis */}
        <section
          className={`mt-8 space-y-5 opacity-0 translate-y-2 transition-all duration-500 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <div>
            <h3 className="font-semibold text-gray-800">Bahan yang Digunakan</h3>
            <p className="text-gray-700 mt-1">{produk.bahan}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Proses Pembuatan</h3>
            <p className="text-gray-700 mt-1">{produk.proses}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Tips Penyimpanan & Penyajian</h3>
            <p className="text-gray-700 mt-1">{produk.tips}</p>
          </div>
        </section>

        {/* Call to Action */}
        <div
          className={`mt-10 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center opacity-0 translate-y-2 transition-all duration-500 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <p className="font-medium text-gray-800">Tertarik dengan produk ini?</p>
          <a
            href={`https://wa.me/${produk.wa}`} // ✅ Fixed: removed extra spaces
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition-transform duration-200 hover:scale-105"
          >
            📱 Pesan via WhatsApp
          </a>
          <p className="text-xs text-gray-500 mt-2">
            Dukung langsung pelaku UMKM desa kami
          </p>
        </div>

        {/* Floating WA Button */}
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
          0%, 100% {
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