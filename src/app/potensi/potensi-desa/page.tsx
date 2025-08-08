"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles, Filter, MapPin, Leaf, Palette, Camera } from "lucide-react";
import Navbar from "@app/app/components/navbar";

// ---------- Tipe data potensi ----------
type Potensi = {
  id: number;
  nama: string;
  gambar: string;
  kategori: "Pertanian" | "Kerajinan" | "Wisata";
  deskripsi: string;
  lokasi?: string;
};

// ---------- Data potensi desa ----------
const dataPotensi: Potensi[] = [
  {
    id: 1,
    nama: "Pertanian Padi Organik",
    gambar: "/image/sawah.png",
    kategori: "Pertanian",
    deskripsi:
      "Lahan sawah seluas 50 hektar dikelola secara gotong royong. Panen dua kali setahun dengan metode tradisional tanpa pestisida kimia.",
    lokasi: "Dusun Cisereh & Cipinang",
  },
  {
    id: 2,
    nama: "Kerajinan Anyaman Bambu",
    gambar: "/image/anyaman.jpeg",
    kategori: "Kerajinan",
    deskripsi:
      "Dibuat oleh ibu-ibu PKK dari bambu lokal. Produknya: tikar, tas, hiasan dinding. Sudah diekspor ke beberapa kota di Jawa.",
    lokasi: "Kampung Nanggerang",
  },
  {
    id: 3,
    nama: "Wisata Curug Cidugaleun",
    gambar: "/image/curug.jpeg",
    kategori: "Wisata",
    deskripsi:
      "Air terjun setinggi 15 meter dengan kolam alami. Cocok untuk refreshing, foto alam, dan edukasi lingkungan. Ada warung warga di sekitar.",
    lokasi: "Hutan Lereng Gunung",
  },
];

// ---------- Icon helper ----------
const KategoriIcon = ({ kategori }: { kategori: string }) => {
  switch (kategori) {
    case "Pertanian":
      return <Leaf className="w-5 h-5 text-green-600" />;
    case "Kerajinan":
      return <Palette className="w-5 h-5 text-orange-600" />;
    case "Wisata":
      return <Camera className="w-5 h-5 text-blue-600" />;
    default:
      return <Sparkles className="w-5 h-5 text-gray-600" />;
  }
};

// ---------- Hook debounce ----------
function useDebounce<T>(value: T, delay = 200): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function PotensiDesa() {
  const [kategori, setKategori] = useState<string>("Semua");
  const [mounted, setMounted] = useState(false);
  const kategoriList = ["Semua", "Pertanian", "Kerajinan", "Wisata"];

  const debouncedKategori = useDebounce(kategori, 150);
  const dataFiltered =
    debouncedKategori === "Semua"
      ? dataPotensi
      : dataPotensi.filter((item) => item.kategori === debouncedKategori);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner dengan Parallax Ringan */}
      <div
        className="relative h-[500px] w-full overflow-hidden pt-16"
        aria-label="Potensi Desa Cidugaleun"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-60 scale-110 transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: "url('/image/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
          <div className={`transform transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              🌿 Potensi Desa Cidugaleun
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-95 leading-relaxed">
              Alam, budaya, dan kreativitas warga yang menjadi kekuatan kami
            </p>
          </div>
        </div>

        {/* Dekorasi sudut */}
        <div className="absolute bottom-5 left-5 text-white/60 text-sm">
          📍 Jawa Barat, Indonesia
        </div>
      </div>

      {/* Filter Kategori - Lebih Smooth */}
      <section
        className={`px-6 py-8 bg-white/80 backdrop-blur-md border-b border-green-100 transition-all duration-1000 transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-5 justify-center">
          <Filter className="text-teal-600" size={20} />
          <span className="font-semibold text-gray-800 text-base">
            Jelajahi Potensi
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {kategoriList.map((kat, index) => (
            <button
              key={kat}
              onClick={() => setKategori(kat)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm ${
                kategori === kat
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white/70 text-teal-700 hover:bg-teal-50 border border-teal-200"
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      {/* Daftar Potensi - Card Modern */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
          <Sparkles className="text-yellow-500 animate-spin-slow" /> 
          Potensi Unggulan Desa
        </h2>

        {dataFiltered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {dataFiltered.map((item, index) => (
              <article
                key={item.id}
                className={`group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 transform ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="md:flex">
                  {/* Gambar */}
                  <div className="md:w-1/3 relative h-56 md:h-full overflow-hidden">
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Konten */}
                  <div className="md:w-2/3 p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <KategoriIcon kategori={item.kategori} />
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${
                          item.kategori === "Pertanian"
                            ? "bg-green-100 text-green-700"
                            : item.kategori === "Kerajinan"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.kategori}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                      {item.nama}
                    </h3>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {item.deskripsi}
                    </p>
                    {item.lokasi && (
                      <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        <MapPin size={16} />
                        <span>{item.lokasi}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Tidak ada potensi di kategori ini.</p>
            <button
              onClick={() => setKategori("Semua")}
              className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition font-medium"
            >
              Lihat Semua Potensi
            </button>
          </div>
        )}
      </section>

      {/* Spacer */}
      <div className="h-20" />

      {/* WhatsApp Floating Button - Lebih Elegan */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl font-semibold z-50 hover:scale-105 hover:shadow-3xl transition-all duration-300 group"
      >
        <img src="/image/wa.png" alt="WhatsApp" className="w-6 h-6 drop-shadow" />
        <span className="whitespace-nowrap group-hover:scale-105 transition-transform">
          Butuh Bantuan?
        </span>
      </a>

      {/* Animasi Tambahan */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        .hover\\:scale-\\[1\\.01\\]:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}