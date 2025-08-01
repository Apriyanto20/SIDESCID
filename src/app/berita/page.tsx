// pages/berita/index.tsx
import Layout from "../components/Layout";

const beritaDesa = [
  {
    id: 1,
    judul: "Rekonstruksi Jalan Cidugaleun–Parentas Disambut Baik Masyarakat",
    tanggal: "16 November 2024",
    ringkasan:
      "Setelah pembangunan jalan ini selesai, warga sangat terbantu. Transportasi hasil pertanian kini lebih lancar, meningkatkan produktivitas ekonomi lokal.",
    gambar: "/images/berita/jalan-cidugaleun.jpg", // Gambar bisa diunduh dari wartapasundan.com
  },
  {
    id: 2,
    judul: "Longsor Cigalontang Tutup Akses Desa Cidugaleun Sementara",
    tanggal: "24 Mei 2025",
    ringkasan:
      "Hujan deras menyebabkan longsor yang memutus akses ke desa. Tim BPBD, warga, dan pemdes bekerja sama membuka jalur alternatif.",
    gambar: "/images/berita/longsor-cidugaleun.jpg", // Gambar placeholder jika belum tersedia
  },
  {
    id: 3,
    judul: "Curug Ciparay Desa Cidugaleun Jadi Tujuan Wisata Lokal",
    tanggal: "28 April 2025",
    ringkasan:
      "Curug yang alami dan belum banyak dikunjungi mulai dikenal publik sebagai destinasi potensial oleh wisatawan lokal.",
    gambar: "/images/berita/curug-ciparay.jpg", // Gambar curug dari sumber atau stok
  },
];

export default function BeritaDesa() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-16">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
          Berita Terkini Desa Cidugaleun
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {beritaDesa.map((berita) => (
            <div
              key={berita.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={berita.gambar}
                alt={berita.judul}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 italic">{berita.tanggal}</p>
                <h2 className="text-xl font-semibold text-teal-700 mb-2">
                  {berita.judul}
                </h2>
                <p className="text-gray-700 mb-4">{berita.ringkasan}</p>
                <button className="text-teal-600 hover:underline font-medium">
                  Baca Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
