"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
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
      return <Users className="w-5 h-5 text-blue-500" />;
    case "UMKM":
      return <Building className="w-5 h-5 text-green-500" />;
    case "Lingkungan":
      return <Shield className="w-5 h-5 text-emerald-500" />;
    case "Wisata":
      return <MessageCircle className="w-5 h-5 text-purple-500" />;
    default:
      return <BookOpen className="w-5 h-5 text-gray-500" />;
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

  const kategoriList: Array<"Semua" | Regulasi["kategori"]> = [
    "Semua",
    "Umum",
    "UMKM",
    "Lingkungan",
    "Wisata",
  ];

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
    <div className="min-h-screen bg-[#f0fdfa] relative overflow-hidden pt-25">
      {/* Background pattern halus */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, #0d9488 0.5px, transparent 0.5px),
            radial-gradient(circle at 80% 70%, #059669 0.5px, transparent 0.5px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-12 pb-32 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 flex items-center justify-center gap-3 mb-3">
            <span className="p-3 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl text-white shadow-lg">
              <BookOpen className="w-8 h-8" />
            </span>
            Regulasi Desa Cidugaleun
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Aturan yang dibuat <span className="font-semibold">untuk warga, oleh warga</span>, demi kemajuan bersama.
          </p>
          <div className="text-sm text-gray-500 mt-3 flex justify-center gap-2">
            <Link href="/" className="text-teal-600 hover:underline font-medium transition">
              Beranda
            </Link>
            <span>›</span>
            <span className="text-gray-700">Regulasi</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div
          className={`bg-white/90 backdrop-blur-lg p-7 rounded-3xl shadow-xl border border-teal-100 space-y-6 mb-10 transition-all duration-700 transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 text-teal-500" size={20} />
              <input
                type="text"
                placeholder="🔍 Cari aturan (UMKM, sampah, wisata...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Cari regulasi"
                className="w-full pl-12 pr-5 py-4 text-gray-800 bg-white/80 border border-teal-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-200 focus:border-teal-500 transition-all duration-300 placeholder:text-teal-300 text-sm"
              />
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              {kategoriList.map((kat, i) => (
                <button
                  key={kat}
                  onClick={() => setFilter(kat)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-all duration-300 transform flex items-center gap-2 hover:scale-105 ${
                    filter === kat
                      ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white border-teal-500 shadow-lg shadow-teal-200"
                      : "bg-white/70 text-teal-700 border-teal-300 hover:bg-teal-50 hover:shadow-md"
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
            <div className="text-sm text-teal-700 font-medium bg-teal-50 p-3 rounded-2xl inline-block">
              🔍 Menampilkan <span className="font-bold">{filtered.length}</span> dari {dataRegulasi.length} aturan
            </div>
          )}
        </div>

        {/* Daftar Regulasi */}
        <div className="space-y-8">
          {filtered.length > 0 ? (
            filtered.map((reg, idx) => (
              <article
                key={reg.id}
                className={`group bg-white/90 backdrop-blur-sm p-7 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl relative overflow-hidden ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-teal-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-teal-100 transition">
                      <KategoriIcon kategori={reg.kategori} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition">
                        {reg.judul}
                      </h3>
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full mt-1 ${
                          reg.kategori === "Umum"
                            ? "bg-blue-100 text-blue-700"
                            : reg.kategori === "UMKM"
                            ? "bg-green-100 text-green-700"
                            : reg.kategori === "Lingkungan"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {reg.kategori}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-5">{reg.ringkasan}</p>

                  <div className="bg-gradient-to-r from-gray-50 to-teal-50 p-5 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      📌 Yang Perlu Kamu Tahu:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {reg.isi.map((it, i) => (
                        <li key={i} className="text-sm leading-relaxed group-hover:text-gray-800 transition">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600 mt-4 flex items-center gap-1">
                    <strong>Butuh penjelasan?</strong> Hubungi:{" "}
                    <span className="text-teal-600 font-medium">{reg.kontak}</span>
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div
              className={`text-center py-16 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl font-semibold text-gray-600 mb-3">Aturan tidak ditemukan</p>
              <p className="text-gray-500 mb-5">Coba ubah kata kunci atau filter pencarian.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("Semua");
                }}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Tampilkan Semua Aturan
              </button>
            </div>
          )}
        </div>

        {/* Info tambahan */}
        <div
          className={`mt-12 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl border border-blue-200/50 backdrop-blur-sm transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Ini Bukan Hukum Kaku</h3>
              <p className="text-gray-700 mt-1 leading-relaxed">
                Aturan ini dibuat untuk menjaga keharmonisan, kelestarian, dan kemajuan bersama.
                <br />
                <span className="font-medium text-teal-700">Punya saran atau ingin revisi?</span>{" "}
                Sampaikan ke BPD atau lewat musyawarah RT/RW.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WA Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl font-bold z-50 hover:scale-110 transition-all duration-300 animate-bounce hover:shadow-green-300/50"
      >
        <img src="/image/wa.png" alt="WhatsApp" className="w-7 h-7 drop-shadow" />
        <span className="whitespace-nowrap">Butuh Bantuan?</span>
      </a>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}