"use client";
import { useState } from "react";
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
  },
  {
    id: 2,
    nama: "Madu Hutan Asli",
    harga: 75000,
    deskripsi: "Madu alami tanpa campuran dari hutan sekitar.",
    gambar: "/image/madu.png",
    wa: "6281234567890",
  },
  {
    id: 3,
    nama: "Keripik Singkong",
    harga: 10000,
    deskripsi: "Cocok untuk camilan, gurih dan renyah.",
    gambar: "/image/keripik.png",
    wa: "6281234567890",
  },
];

export default function LapakDesa() {
  const [query, setQuery] = useState("");

  const hasilFilter = produkDesa.filter((produk) => produk.nama.toLowerCase().includes(query.toLowerCase()));

  return (
    <Layout>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Data Lapak <span className="text-teal-600">DESA CIDUGALEUN</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">Temukan produk terbaik dari desa</p>
        <div className="text-sm text-gray-400 mt-2">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>{" "}
          / <span className="text-gray-600">Lapak Desa</span>
        </div>
      </div>

      <div className="flex justify-center mt-6 mb-10">
        <input type="text" placeholder="Cari Nama Produk..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-gray-800" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md" disabled>
          🔍
        </button>
      </div>

      {hasilFilter.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-20">
          {hasilFilter.map((produk) => (
            <div key={produk.id} className="bg-white rounded-xl shadow-md relative overflow-hidden">
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded z-10">Pesan!</span>
              <div className="p-4">
                <img src={produk.gambar} alt={produk.nama} className="w-full h-48 object-cover rounded-md p-2 bg-white" />
              </div>
              <div className="pt-0 px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">{produk.nama}</h3>
                <p className="text-sm text-gray-600">{produk.deskripsi}</p>
                <p className="text-green-600 font-bold mt-2">Rp {produk.harga.toLocaleString()}</p>
                <div className="flex gap-2 mt-3">
                  <a href={`https://wa.me/${produk.wa}`} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                    WhatsApp
                  </a>
                  <a href={`/potensi/lapak/${produk.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Detail Produk
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Produk tidak ditemukan.</p>
      )}

      <a href="https://wa.me/6281234567890" target="_blank" className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-green-600">
        <img src="/images/wa.svg" alt="WA" className="w-5 h-5 mr-2" />
        Layanan Whatsapp Bot
      </a>
    </Layout>
  );
}
