"use client";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import Layout from "@app/app/layout";
=======

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "@app/app/components/navbar"; // pakai navbar lo yang udah ada
import Image from "next/image";
>>>>>>> 36cfcb8fe5f8aa289899143972f96d9ca0f5d6d9
import { BookOpen, Shield, Users, Building, MessageCircle, Search } from "lucide-react";

// ---------- Tipe data regulasi ----------
type Regulasi = {
  id: number;
  judul: string;
  kategori: "Umum" | "UMKM" | "Lingkungan" | "Wisata";
  ringkasan: string;
  isi: string[];
  kontak: string;
};

// ---------- Data regulasi ----------
const dataRegulasi: Regulasi[] = [
  {
    id: 1,
    judul: "Aturan Warga Desa",
    kategori: "Umum",
    ringkasan:
      "Hak dan kewajiban warga, partisipasi gotong royong, dan keterbukaan informasi.",
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
    ringkasan:
      "Cara daftar UMKM, bantuan modal, dan aturan jualan di lapak desa.",
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
    ringkasan:
      "Pengelolaan sampah, larangan membakar hutan, dan program hijau desa.",
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
    ringkasan:
      "Etika berkunjung, larangan, dan cara mendukung ekonomi lokal.",
    isi: [
      "Harus izin ke pos ronda jika ingin berkemah di area hutan atau curug.",
      "Dilarang membuat coretan atau merusak alam (denda sesuai kerusakan).",
      "Disarankan beli oleh-oleh dari warga, bukan bawa dari luar.",
      "Dilarang membawa minuman beralkohol ke area wisata umum.",
    ],
    kontak: "Pengelola Wisata Curug atau Kepala Dusun",
  },
];

// ---------- Helper ikon kategori ----------
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

// ---------- Debounce sederhana ----------
function useDebounce<T>(value: T, delay = 200): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const h = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(h);
  }, [value, delay]);
  return debounced;
}

export default function RegulasiDesa() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"Semua" | Regulasi["kategori"]>("Semua");
  const [mounted, setMounted] = useState(false);
  const debouncedSearch = useDebounce(search, 180);
  const debouncedFilter = useDebounce(filter, 100);

  const filtered = useMemo(() => {
    return dataRegulasi.filter((item) => {
      const matchesFilter = debouncedFilter === "Semua" || item.kategori === debouncedFilter;
      const q = debouncedSearch.toLowerCase().trim();
      const matchesSearch =
        item.judul.toLowerCase().includes(q) ||
        item.ringkasan.toLowerCase().includes(q) ||
        item.isi.some((p) => p.toLowerCase().includes(q));
      return matchesFilter && (q ? matchesSearch : true);
    });
  }, [debouncedFilter, debouncedSearch]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <Navbar />

      <div className="pt-35 max-w-4xl mx-auto px-5 py-10 pb-32">
        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-3xl font-black text-slate-800 flex items-center justify-center gap-2">
            <BookOpen className="text-teal-600" /> Regulasi Desa Cidugaleun
          </h1>
          <p className="text-gray-600 mt-2">
            Aturan yang dibuat untuk warga, oleh warga, demi kemajuan bersama.
          </p>
          <div className="text-sm text-gray-400 mt-2 flex justify-center gap-1">
            <Link href="/" className="text-blue-500 hover:underline">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">Regulasi</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div
          className={`bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Cari aturan (misal: UMKM, sampah, wisata...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Cari regulasi"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 transition"
              />
            </div>
            {/* Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              {["Semua", "Umum", "UMKM", "Lingkungan", "Wisata"].map((kat, i) => (
                <button
                  key={kat}
                  onClick={() => setFilter(kat as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-1 ${
                    filter === kat
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50"
                  }`}
                  style={{ transitionDelay: `${100 + i * 50}ms` }}
                  aria-pressed={filter === kat}
                >
                  <KategoriIcon kategori={kat} />
                  <span>{kat}</span>
                </button>
              ))}
            </div>
          </div>
          {(filter !== "Semua" || search) && (
            <div className="text-xs text-gray-500">
              Menampilkan {filtered.length} dari {dataRegulasi.length} aturan
            </div>
          )}
        </div>

        {/* Daftar Regulasi */}
        <div className="mt-8 space-y-8">
          {filtered.length > 0 ? (
            filtered.map((reg, idx) => (
              <article
                key={reg.id}
                className={`group bg-white p-6 rounded-3xl shadow-md border border-gray-100 transition-all duration-500 transform ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } hover:scale-[1.025] hover:shadow-2xl relative overflow-hidden`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                {/* glow overlay on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-sky-50 opacity-0 transition duration-500 group-hover:opacity-60 mix-blend-screen"></div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 relative">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <KategoriIcon kategori={reg.kategori} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{reg.judul}</h3>
                      <span className="inline-block text-xs font-semibold text-white bg-teal-500 px-3 py-1 rounded-full mt-1">
                        {reg.kategori}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 self-start">{/* optional extra */}</div>
                </div>

                <p className="text-gray-700 mt-4 leading-relaxed">{reg.ringkasan}</p>

                <div className="mt-4 bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Yang Perlu Kamu Tahu:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {reg.isi.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-gray-600 mt-3">
                  <strong>Butuh penjelasan?</strong> Hubungi: {reg.kontak}
                </p>
              </article>
            ))
          ) : (
            <div
              className={`text-center py-12 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-lg text-gray-500 mb-2">Aturan tidak ditemukan.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("Semua");
                }}
                className="text-teal-600 hover:underline font-medium"
              >
                Tampilkan semua aturan
              </button>
            </div>
          )}
        </div>

        {/* Info tambahan */}
        <div
          className={`mt-10 p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="font-bold text-gray-800">💡 Ini Bukan Hukum Kaku</h3>
          <p className="text-gray-700 text-sm mt-1">
            Aturan ini dibuat untuk menjaga keharmonisan, kelestarian, dan kemajuan bersama. Kalau ada masukan atau revisi, sampaikan ke BPD atau lewat musyawarah RT/RW.
          </p>
        </div>
      </div>

      {/* Floating WA Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white text-gray-800 px-5 py-3 rounded-full flex items-center gap-3 shadow-xl font-medium z-50 hover:scale-105 transition-all duration-300 animate-bounce-slow hover:shadow-2xl"
      >
        <img src="/image/wa.png" alt="WA" className="w-6 h-6" />
        <span className="text-sm font-semibold whitespace-nowrap">
          Butuh Bantuan?
        </span>
      </a>

      {/* CSS tambahan */}
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
    </div>
  );
}
