"use client";
import { useState, useEffect } from "react";
import Layout from "@app/app/layout";
import { BookOpen, Shield, Users, Building, MessageCircle, Search } from "lucide-react";

// Tipe data regulasi
type Regulasi = {
  id: number;
  judul: string;
  kategori: "Umum" | "UMKM" | "Lingkungan" | "Wisata";
  ringkasan: string;
  isi: string[];
  kontak: string;
};

export default function RegulasiDesa() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"Semua" | Regulasi["kategori"]>("Semua");
  const [mounted, setMounted] = useState(false);

  // Data regulasi dalam bahasa sederhana
  const dataRegulasi: Regulasi[] = [
    {
      id: 1,
      judul: "Aturan Warga Desa",
      kategori: "Umum",
      ringkasan: "Hak dan kewajiban warga, partisipasi gotong royong, dan keterbukaan informasi.",
      isi: [
        "Setiap warga berhak mendapatkan informasi desa secara transparan.",
        "Wajib ikut minimal 1 kegiatan gotong royong per bulan (atau kontribusi non-fisik).",
        "Pelaporan kejadian darurat bisa langsung ke RT atau via WhatsApp desa.",
        "Desa mendukung inklusi: lansia, difabel, dan perempuan punya akses setara.",
      ],
      kontak: "Ketua RT setempat atau Sekretaris Desa",
    },
    {
      id: 2,
      judul: "Pedoman UMKM Lokal",
      kategori: "UMKM",
      ringkasan: "Cara daftar UMKM, bantuan modal, dan aturan jualan di lapak desa.",
      isi: [
        "UMKM wajib terdaftar di BUMDes untuk bisa ikut pameran desa.",
        "Produk makanan harus punya izin PIRT atau sertifikasi keamanan.",
        "Boleh jualan online, tapi wajib mencantumkan 'Asal: Desa Cidugaleun'.",
        "BUMDes menyediakan pinjaman mikro tanpa bunga untuk pelaku UMKM baru.",
      ],
      kontak: "Kepala BUMDes atau Pendamping UMKM Desa",
    },
    {
      id: 3,
      judul: "Jaga Alam Kita",
      kategori: "Lingkungan",
      ringkasan: "Pengelolaan sampah, larangan membakar hutan, dan program hijau desa.",
      isi: [
        "Dilarang membuang sampah ke sungai atau hutan. Ada TPS di tiap RW.",
        "Setiap rumah wajib punya tempat pemilahan sampah (organik & anorganik).",
        "Denda Rp50.000 jika ketahuan membakar lahan atau hutan.",
        "Setiap bulan ada 'Hari Hijau' untuk tanam pohon bersama.",
      ],
      kontak: "Pokdarling (Kelompok Peduli Lingkungan)",
    },
    {
      id: 4,
      judul: "Aturan Wisatawan",
      kategori: "Wisata",
      ringkasan: "Etika berkunjung, larangan, dan cara mendukung ekonomi lokal.",
      isi: [
        "Harus izin ke pos ronda jika ingin berkemah di area hutan atau curug.",
        "Dilarang membuat coretan atau merusak alam (denda sesuai kerusakan).",
        "Disarankan beli oleh-oleh dari warga, bukan bawa dari luar.",
        "Dilarang membawa minuman beralkohol ke area wisata umum.",
      ],
      kontak: "Pengelola Wisata Curug atau Kepala Dusun",
    },
  ];

  // Filter data
  const filtered = dataRegulasi.filter((item) => {
    const matchesSearch =
      item.judul.toLowerCase().includes(search.toLowerCase()) ||
      item.ringkasan.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "Semua" || item.kategori === filter;
    return matchesSearch && matchesFilter;
  });

  // Ikon kategori
  const KategoriIcon = ({ kategori }: { kategori: string }) => {
    switch (kategori) {
      case "Umum":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "UMKM":
        return <Building className="w-5 h-5 text-green-600" />;
      case "Lingkungan":
        return <Shield className="w-5 h-5 text-emerald-600" />;
      case "Wisata":
        return <MessageCircle className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-gray-600" />;
    }
  };

  // Trigger animasi setelah mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-5 py-10 pb-28">
        {/* Header */}
        <div
          className={`text-center mb-8 opacity-0 translate-y-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h1 className="text-3xl font-black text-slate-800 flex items-center justify-center gap-2">
            <BookOpen className="text-teal-600" /> Regulasi Desa Cidugaleun
          </h1>
          <p className="text-gray-600 mt-2">
            Aturan yang dibuat untuk warga, oleh warga, demi kemajuan bersama.
          </p>
          <div className="text-sm text-gray-400 mt-2">
            <a href="/" className="text-blue-500 hover:underline">
              Beranda
            </a>{" "}
            / <span className="text-gray-600">Regulasi</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div
          className={`bg-white p-5 rounded-2xl shadow-sm border border-gray-200 space-y-4 opacity-0 translate-y-4 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Cari aturan (misal: UMKM, sampah, wisata...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 transition-all duration-300"
            />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {["Semua", "Umum", "UMKM", "Lingkungan", "Wisata"].map((kat, index) => (
              <button
                key={kat}
                onClick={() => setFilter(kat as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                  filter === kat
                    ? "bg-teal-500 text-white"
                    : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50"
                }`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* Daftar Regulasi */}
        <div className="mt-8 space-y-6">
          {filtered.length > 0 ? (
            filtered.map((reg, index) => (
              <article
                key={reg.id}
                className={`bg-white p-6 rounded-2xl shadow-md border border-gray-100 opacity-0 translate-y-6 transition-all duration-500 ${
                  mounted ? "opacity-100 translate-y-0" : ""
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <KategoriIcon kategori={reg.kategori} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{reg.judul}</h3>
                    <span className="text-xs font-semibold text-white bg-teal-500 px-3 py-1 rounded-full mt-1 inline-block">
                      {reg.kategori}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{reg.ringkasan}</p>

                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Yang Perlu Kamu Tahu:</h4>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside text-sm">
                    {reg.isi.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Butuh penjelasan?</strong> Hubungi: {reg.kontak}
                </p>
              </article>
            ))
          ) : (
            <div
              className={`text-center py-10 opacity-0 translate-y-4 transition-all duration-500 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : ""
              }`}
            >
              <p className="text-gray-500 text-lg">Aturan tidak ditemukan.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("Semua");
                }}
                className="text-teal-600 hover:underline text-sm mt-2"
              >
                Tampilkan semua aturan
              </button>
            </div>
          )}
        </div>

        {/* Info Tambahan */}
        <div
          className={`mt-10 p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200 opacity-0 translate-y-4 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h3 className="font-bold text-gray-800">💡 Ini Bukan Hukum Kaku</h3>
          <p className="text-gray-700 text-sm mt-1">
            Aturan ini dibuat untuk menjaga keharmonisan, kelestarian, dan kemajuan bersama. Jika ada saran perbaikan, silakan sampaikan ke BPD atau melalui pertemuan RT.
          </p>
        </div>
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