"use client";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Truck, Heart, Sparkles } from "lucide-react";

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

// ---------- Dummy data ----------
const produkDesa: Produk[] = [
  {
    id: 1,
    nama: "Kopi Arabica Dindingari",
    harga: 60000,
    deskripsi: "Kopi Arabica premium dari kebun lokal, aroma khas pegunungan.",
    gambar: "/image/kemasankopi.jpg",
    wa: "6285722565900",
    penjual: "Yogaswara",
    lokasi: "Dusun Babakan, Desa Cidugaleun",
    cerita:
      "-",
    bahan: "100% Kopi lokal dengan aroma khasnya",
    proses: "Proses pembuatan kopi dimulai dengan menyiapkan biji kopi yang sudah disangrai, kemudian digiling sesuai tingkat kehalusan yang diinginkan. Bubuk kopi tersebut diseduh menggunakan air panas dengan suhu yang tepat, lalu diaduk perlahan agar aroma dan rasa kopi keluar secara optimal. Setelah itu, kopi disaring atau disajikan langsung sesuai metode seduh yang digunakan, dan siap dinikmati.",
    tips: "Untuk mendapatkan rasa dan aroma kopi yang maksimal, gunakan biji kopi segar yang baru disangrai. Biji kopi yang segar menyimpan cita rasa terbaik, terutama jika disimpan dengan benar di wadah kedap udara dan dijauhkan dari cahaya maupun kelembapan. Sebelum menyeduh, giling biji kopi sesuai metode yang digunakan. Misalnya, gilingan kasar cocok untuk french press, gilingan sedang untuk pour over, dan gilingan halus untuk espresso. Gunakan air bersih berkualitas baik, karena air yang digunakan akan memengaruhi rasa kopi secara langsung. Perhatikan juga suhu air, idealnya berada di kisaran 90–96°C agar rasa kopi tidak menjadi terlalu pahit. Takaran juga berperan penting. Umumnya, gunakan 1–2 sendok makan bubuk kopi untuk setiap 180 ml air. Waktu seduh harus diperhatikan; seduhan yang terlalu cepat akan terasa hambar, sedangkan yang terlalu lama akan terasa pahit. Terakhir, jangan ragu untuk bereksperimen dengan berbagai metode seduh seperti V60, Aeropress, Moka pot, atau French press, hingga menemukan rasa kopi yang paling sesuai dengan selera.",
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
    bahan: "100% nektar bunga hutan, tanpa tambahan gula atau air.",
    proses: "Dikumpulkan dari sarang alami lebah Trigona, disaring alami tanpa dipasteurisasi.",
    tips: "Minum 1 sendok pagi hari sebelum sarapan. Tahan hingga 2 tahun jika disimpan tertutup.",
  }
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
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Star className="text-yellow-500" size={24} />
        Produk Terkait
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {related.map((p, i) => (
          <Link
            key={p.id}
            href={`/potensi/lapak/${p.id}`}
            className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
              i === 0 ? "animate-fadeInUp" : "animate-fadeInUp delay-200"
            }`}
          >
            <div className="relative w-full h-36 bg-gradient-to-br from-amber-50 to-emerald-50">
              <Image
                src={p.gambar}
                alt={p.nama}
                fill
                sizes="96px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-gray-800 group-hover:text-emerald-600 transition-colors">
                {p.nama}
              </h4>
              <p className="text-sm text-gray-600">{p.penjual}</p>
              <p className="text-emerald-600 font-bold mt-2 text-lg">{formatRupiah(p.harga)}</p>
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
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center pt-24">
        <Heart className="w-16 h-16 text-gray-300 mb-4 animate-pulse" />
        <h2 className="text-3xl font-bold text-gray-700">Produk Tidak Ditemukan</h2>
        <p className="text-gray-500 mt-2 max-w-md">
          Maaf, produk yang Anda cari tidak tersedia di desa kami.
        </p>
        <Link
          href="/potensi/lapak"
          className="mt-6 inline-flex items-center gap-2 text-emerald-600 hover:underline font-medium transition hover:text-emerald-700"
        >
          ← Kembali ke Cerita UMKM
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gradient-to-br from-sky-50 via-white to-emerald-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-5 py-10 pb-32">
        {/* Breadcrumb */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } animate-fadeIn`}
        >
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600 transition hover:underline">
              Beranda
            </Link>
            <span>›</span>
            <Link href="/potensi/lapak" className="hover:text-emerald-600 transition hover:underline">
              Cerita UMKM
            </Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">{produk.nama}</span>
          </nav>
          <Link
            href="/potensi/lapak"
            className="inline-flex items-center gap-1 text-emerald-600 hover:underline text-sm font-medium transition hover:text-emerald-700"
            aria-label="Kembali"
          >
            <ArrowLeft size={16} /> Kembali
          </Link>
        </div>

        {/* Konten Utama */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gambar */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-slideInLeft`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-amber-50 to-sky-50 group">
              <Image
                src={produk.gambar}
                alt={produk.nama}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-5 left-5">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Heart size={10} /> Lokal
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Informasi Produk */}
          <div
            className={`flex flex-col justify-between transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } animate-slideInRight`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
                {produk.nama}
              </h1>
              <p className="text-lg text-emerald-600 font-bold">{formatRupiah(produk.harga)}</p>
              <p className="text-gray-600 text-base">{produk.deskripsi}</p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" /> {produk.penjual}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck size={14} /> {produk.lokasi}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href={`https://wa.me/${produk.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Image src="/image/wa.png" alt="WA" width={24} height={24} />
                <span>Pesan Sekarang</span>
                <Sparkles className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </a>
              <p className="text-center text-xs text-gray-500 italic">
                🌱 Dukung langsung pelaku UMKM lokal & berkelanjutan
              </p>
            </div>
          </div>
        </div>

        {/* Cerita */}
        <section
          className={`mt-16 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-amber-100 border-l-4 border-l-amber-400 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } animate-fadeInUp`}
        >
          <h2 className="text-2xl font-bold text-amber-900 flex items-center gap-2">
            <Star className="text-yellow-500 animate-spin-slow" size={24} />
            Dari Tangan ke Hati
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed text-base">{produk.cerita}</p>
        </section>

        {/* Detail */}
        <section className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { title: "Bahan", value: produk.bahan, icon: "🌾" },
            { title: "Proses", value: produk.proses, icon: "🔧" },
            { title: "Tips & Penyajian", value: produk.tips, icon: "💡" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 animate-fadeInUp`}
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.value}</p>
            </div>
          ))}
        </section>

        {/* Produk Terkait */}
        <RelatedProducts currentId={produk.id} />

        {/* CTA Mobile */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 px-5 flex justify-between items-center shadow-lg z-40">
          <div>
            <div className="text-xs text-gray-500">Harga</div>
            <div className="font-bold text-lg text-emerald-600">{formatRupiah(produk.harga)}</div>
          </div>
          <a
            href={`https://wa.me/${produk.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Image src="/image/wa.png" alt="WA" width={18} height={18} />
            Pesan
          </a>
        </div>

        {/* Floating WA */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Butuh bantuan via WhatsApp"
          className="hidden sm:flex fixed bottom-6 right-6 bg-white text-gray-800 px-6 py-4 rounded-2xl items-center gap-3 shadow-2xl font-semibold z-50 hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:rotate-3 group"
        >
          <div className="w-7 h-7 relative group-hover:animate-bounceOnce">
            <Image src="/image/wa.png" alt="WA" fill className="object-contain" />
          </div>
          <span className="whitespace-nowrap">Butuh Bantuan?</span>
        </a>
      </div>

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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
        .animate-slideInLeft {
          animation: slideInLeft 0.9s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.9s ease-out forwards;
        }
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-bounceOnce {
          animation: bounceOnce 0.6s ease-in-out;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}