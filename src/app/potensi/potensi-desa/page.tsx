"use client";
import { useState, useEffect } from "react";
import { Sparkles, Filter, MapPin, Leaf, Palette, Camera } from "lucide-react";

// Tipe data potensi
type Potensi = {
  id: number;
  nama: string;
  gambar: string;
  kategori: "Pertanian" | "Kerajinan" | "Wisata";
  deskripsi: string;
  lokasi?: string;
};

// Data potensi desa dengan narasi
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

// Ikon kategori
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

export default function PotensiDesa() {
  const [kategori, setKategori] = useState("Semua");
  const [mounted, setMounted] = useState(false);

  const kategoriList = ["Semua", "Pertanian", "Kerajinan", "Wisata"];

  const dataFiltered =
    kategori === "Semua"
      ? dataPotensi
      : dataPotensi.filter((item) => item.kategori === kategori);

  // Trigger animasi setelah mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Banner */}
      <div
        className={`relative h-[420px] w-full overflow-hidden opacity-0 translate-y-4 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/image/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full z-20">
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight">
            🌿 Potensi Desa Cidugaleun
          </h1>
          <p className="text-lg max-w-2xl opacity-95">
            Alam, budaya, dan kreativitas warga yang menjadi kekuatan kami
          </p>
        </div>
      </div>

      {/* Filter Kategori - Animasi Fade-In */}
      <section
        className={`px-5 py-6 bg-white border-b border-gray-200 opacity-0 translate-y-2 transition-all duration-700 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3 justify-center">
          <Filter className="text-gray-600" size={18} />
          <span className="font-medium text-gray-800">Jelajahi Berdasarkan:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar justify-center">
          {kategoriList.map((kat, index) => (
            <button
              key={kat}
              onClick={() => setKategori(kat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 transform hover:scale-105 ${
                kategori === kat
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-600 border-teal-300 hover:bg-teal-50"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      {/* Daftar Potensi - Naratif & Card */}
      <section
        className={`px-5 py-8 max-w-4xl mx-auto opacity-0 translate-y-4 transition-all duration-700 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Sparkles className="text-yellow-500 animate-pulse" /> Potensi Unggulan
        </h2>

        {dataFiltered.length > 0 ? (
          <div className="space-y-8">
            {dataFiltered.map((item, index) => (
              <article
                key={item.id}
                className={`bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 transform opacity-0 translate-y-6 ${
                  mounted ? "opacity-100 translate-y-0" : ""
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="md:flex">
                  {/* Gambar */}
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Konten */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <KategoriIcon kategori={item.kategori} />
                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                          {item.kategori}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{item.nama}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{item.deskripsi}</p>
                    </div>

                    {/* Lokasi */}
                    {item.lokasi && (
                      <div className="flex items-center gap-1.5 mt-4 text-sm text-gray-500">
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
          <div
            className={`text-center py-10 opacity-0 translate-y-4 transition-all duration-500 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <p className="text-gray-500 text-lg">Tidak ada potensi dalam kategori ini.</p>
            <button
              onClick={() => setKategori("Semua")}
              className="text-teal-600 hover:underline text-sm mt-2"
            >
              Lihat semua potensi
            </button>
          </div>
        )}
      </section>

      {/* Footer Spacer */}
      <div className="h-16" />
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
    </div>
  );
}