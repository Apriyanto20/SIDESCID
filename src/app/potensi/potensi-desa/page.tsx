'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "@app/app/components/navbar"; // Pake navbar yang udah lu punya

const dataKategori = ["Semua", "Pertanian", "Kerajinan", "Wisata"];

const dataPotensi = [
  {
    id: 1,
    nama: "Pertanian Padi",
    gambar: "/potensi/padi.jpg",
    kategori: "Pertanian",
  },
  {
    id: 2,
    nama: "Kerajinan Anyaman",
    gambar: "/potensi/anyaman.jpg",
    kategori: "Kerajinan",
  },
  {
    id: 3,
    nama: "Wisata Curug Cidugaleun",
    gambar: "/potensi/curug.jpg",
    kategori: "Wisata",
  },
];

export default function PotensiDesa() {
  const [kategori, setKategori] = useState("Semua");

  const dataFiltered =
    kategori === "Semua"
      ? dataPotensi
      : dataPotensi.filter((item) => item.kategori === kategori);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/image/banner.jpg"
          alt="Banner Potensi"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />

        {/* Navbar tetap dipakai */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Judul & Deskripsi */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Potensi Desa Cidugaleun
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Wisata alam, budaya, dan kuliner khas yang menanti untuk dijelajahi
          </p>
        </div>
      </div>

      {/* Filter Kategori */}
      <div className="mt-10 px-4 text-center">
        <div className="inline-flex gap-2 flex-wrap justify-center">
          {dataKategori.map((kat) => (
            <button
              key={kat}
              onClick={() => setKategori(kat)}
              className={`px-4 py-2 rounded-full border font-medium text-sm transition-all duration-200 ${
                kategori === kat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Potensi Populer */}
      <div className="mt-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Potensi Populer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dataFiltered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.gambar}
                alt={item.nama}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.nama}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
}
