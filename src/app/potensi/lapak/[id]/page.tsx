"use client";
import { useParams } from "next/navigation";
import Layout from "@app/app/components/Layout";
import Link from "next/link";

const produkDesa = [
  {
    id: 1,
    nama: "Beras Lokal 5Kg",
    harga: 50000,
    deskripsi: "Beras putih hasil panen petani lokal.",
    gambar: "/image/beras.png",
    wa: "6281234567890",
    penjual: "Pak Ujang",
    tanggal: "2025-07-30",
  },
  {
    id: 2,
    nama: "Madu Hutan Asli",
    harga: 75000,
    deskripsi: "Madu alami tanpa campuran dari hutan sekitar.",
    gambar: "/image/madu.png",
    wa: "6281234567890",
    penjual: "Bu Ani",
    tanggal: "2025-07-29",
  },
  {
    id: 3,
    nama: "Keripik Singkong",
    harga: 10000,
    deskripsi: "Cocok untuk camilan, gurih dan renyah.",
    gambar: "/image/keripik.png",
    wa: "6281234567890",
    penjual: "Pak Dadan",
    tanggal: "2025-07-28",
  },
];

export default function DetailProduk() {
  const params = useParams();
  const id = Number(params?.id);
  const produk = produkDesa.find((p) => p.id === id);

  if (!produk) return <p className="text-center mt-10">Produk tidak ditemukan.</p>;

  const produkTerkait = produkDesa.filter((p) => p.id !== produk.id);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="text-sm text-gray-400 mb-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/potensi/lapak" className="text-blue-500 hover:underline">
            Lapak Desa
          </Link>{" "}
          / <span className="text-gray-600">{produk.nama}</span>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
          <img src={produk.gambar} alt={produk.nama} className="w-full md:w-1/2 h-64 object-cover rounded-md" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-teal-700 mb-2">{produk.nama}</h2>
            <p className="text-gray-600">{produk.deskripsi}</p>
            <p className="text-sm text-gray-600 mt-2">
              Penjual: <span className="font-bold text-blue-600">{produk.penjual}</span>
            </p>
            <p className="text-sm text-gray-600">
              Tanggal Update:{" "}
              {new Date(produk.tanggal).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-lg font-bold mt-4">
              <span className="text-blue-600">Harga:</span> <span className="text-green-600">Rp {produk.harga.toLocaleString()}</span>
            </p>
            <a href={`https://wa.me/${produk.wa}`} target="_blank" className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Hubungi Penjual
            </a>
          </div>
        </div>

        {/* Produk Terkait */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Produk Terkait</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produkTerkait.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={p.gambar} alt={p.nama} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="text-md font-semibold text-gray-800">{p.nama}</h4>
                  <p className="text-sm text-gray-600">{p.deskripsi}</p>
                  <p className="text-green-600 font-bold mt-1">Rp {p.harga.toLocaleString()}</p>
                  <Link href={`/potensi/lapak/${p.id}`} className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
