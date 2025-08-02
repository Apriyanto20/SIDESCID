"use client";

import { useEffect, useState, useMemo } from "react";
import Layout from "@app/app/components/Layout";
import Navbar from "@app/app/components/navbar"; // pastikan namanya pas dan case-sensitive
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

// ---------- Tipe ----------
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

// ---------- Dummy data (taruh di shared file kalau dipakai banyak tempat) ----------
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

// ---------- Utility ----------
const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// ---------- RelatedProducts ----------
interface RelatedProps {
  currentId: number;
}
function RelatedProducts({ currentId }: RelatedProps) {
  const related = useMemo(
    () => produkDesa.filter((p) => p.id !== currentId).slice(0, 2),
    [currentId]
  );
  if (!related.length) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Produk Terkait</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {related.map((p) => (
          <Link
            key={p.id}
            href={`/potensi/lapak/${p.id}`}
            className="flex gap-4 bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <Image src={p.gambar} alt={p.nama} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-md text-gray-800">{p.nama}</h4>
              <p className="text-xs text-gray-600">{p.penjual}</p>
              <p className="text-emerald-600 font-semibold mt-1">
                {formatRupiah(p.harga)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---------- Halaman Detail ----------
export default function DetailProduk() {
  const params = useParams();
  const id = Number(params?.id);
  const produk = useMemo(() => produkDesa.find((p) => p.id === id), [id]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!produk) {
    return (
      <>
        <Navbar />
        <Layout>
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center pt-24">
            <h2 className="text-2xl font-bold text-gray-800">Produk Tidak Ditemukan</h2>
            <p className="text-gray-600 mt-2">
              Maaf, produk yang Anda cari tidak tersedia di desa kami.
            </p>
            <Link
              href="/potensi/lapak"
              className="mt-6 inline-block text-emerald-600 hover:underline font-medium"
            >
              ← Kembali ke Cerita UMKM
            </Link>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-20"> {/* supaya tidak ketutup navbar */}
          <div className="min-h-screen w-full bg-white px-5 py-8">
            <div className="max-w-3xl mx-auto px-5 py-8 space-y-12 pb-28 bg-sky-100 rounded-2xl">
          {/* Breadcrumb + back */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 transition-all duration-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/potensi/lapak" className="hover:underline">
                Cerita UMKM
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-700">{produk.nama}</span>
            </div>
            <Link
              href="/potensi/lapak"
              className="inline-flex items-center gap-1 text-emerald-600 hover:underline text-sm font-medium"
              aria-label="Kembali"
            >
              <ArrowLeft size={16} /> Kembali
            </Link>
          </div>

          {/* Main card */}
          <div className="grid gap-10 sm:grid-cols-2">
            {/* Gambar besar */}
            <div
              className={`relative w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={produk.gambar}
                  alt={produk.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info & CTA */}
            <div
              className={`flex flex-col justify-between transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-slate-800">{produk.nama}</h1>
                <p className="text-sm text-emerald-600 font-medium">{produk.penjual}</p>
                <p className="text-xs text-gray-500">{produk.lokasi}</p>
              </div>

              <div className="mt-4">
                <span className="text-3xl font-bold text-emerald-600 block">
                  {formatRupiah(produk.harga)}
                </span>
                <p className="text-gray-600 mt-1 text-sm">{produk.deskripsi}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${produk.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pesan via WhatsApp"
                  className="inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-transform duration-200 hover:scale-105"
                >
                  📱 Pesan Sekarang
                </a>
                <p className="text-xs text-gray-500">
                  Dukung langsung pelaku UMKM desa kami.
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <section
            className={`mt-10 bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400 transition-all duration-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-lg font-semibold text-amber-900">Dari Tangan ke Hati</h2>
            <p className="text-amber-800 mt-2 leading-relaxed">{produk.cerita}</p>
          </section>

          {/* Detail teknis */}
          <section
            className={`mt-10 grid gap-8 sm:grid-cols-3 transition-all duration-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Bahan</h3>
              <p className="text-gray-700 text-sm">{produk.bahan}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Proses</h3>
              <p className="text-gray-700 text-sm">{produk.proses}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Tips & Penyajian</h3>
              <p className="text-gray-700 text-sm">{produk.tips}</p>
            </div>
          </section>

          {/* Related */}
          <RelatedProducts currentId={produk.id} />

          {/* Sticky CTA mobile */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md py-3 px-5 flex justify-between items-center sm:hidden">
            <div>
              <div className="text-sm text-gray-500">Harga</div>
              <div className="font-bold text-lg text-emerald-600">{formatRupiah(produk.harga)}</div>
            </div>
            <a
              href={`https://wa.me/${produk.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold"
            >
              📱 Pesan
            </a>
          </div>

          {/* Floating WA bantuan (desktop) */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Butuh bantuan via WhatsApp"
            className="hidden sm:flex fixed bottom-6 right-6 bg-white text-gray-800 px-4 py-3 rounded-full items-center gap-2 shadow-xl font-medium z-50 hover:shadow-2xl transition transform duration-200 hover:scale-105"
          >
            <div className="w-5 h-5 relative">
              <Image src="/image/wa.png" alt="WA" fill sizes="20px" className="object-contain" />
            </div>
            <span className="text-sm font-semibold">Butuh Bantuan?</span>
          </a>
        </div>
        </div>
        </div>
      </Layout>
    </>
  );
}
