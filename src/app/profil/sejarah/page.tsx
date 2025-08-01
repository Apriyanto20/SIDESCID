'use client';
import React from 'react';
import Image from 'next/image';

const SejarahDesa = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Air Terjun dengan perbaikan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-waterfall will-change-transform">
          <Image
            src="/cidugaleun.jpg"
            alt="Air Terjun Cidugaleun"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Konten */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl bg-black/60 backdrop-blur-md p-8 rounded-xl text-white shadow-2xl animate-fadeInUp">
          <h1 className="text-4xl font-bold text-center mb-6">
            Sejarah Desa Cidugaleun
          </h1>
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              Cidugaleun adalah desa di kecamatan Cigalontang, Tasikmalaya, Jawa Barat, Indonesia.
              Di sebelah barat berbatasan dengan Kecamatan Sariwangi. Desa ini berada di kaki Gunung Karacak dan Gunung Dinding Ari.
            </p>
            <p>
              Desa ini memiliki banyak pemandangan yang memanjakan mata, terutama bila dilihat dari Jembatan Cisok atau biasa disebut cekdam.
              Di desa ini terdapat beberapa tempat wisata, salah satunya adalah Curug (Air Terjun) Ciparay yang masih belum banyak diketahui oleh para wisatawan.
            </p>
            <p>
              Di Desa Cidugaleun terdapat 2 TBM Aktif yang sudah terdaftar di PNFI dan Dinas Pendidikan Dan Kebudayaan Kabupaten Tasikmalaya yakni TBM PPM Al Muqorrobin
              yang didirikan pada 2 Januari 2012 oleh Acep Saepul Rahmat, S.Pd., M.Pd., M.M dan TBM Ligar Luang yang didirikan oleh Saepuloh, M.Pd yang didirikan tahun 2018.
            </p>
            <p>
              Kedua TBM ini bergerak di bidang keaksaraan dan Pembudayaan Literasi dan Numerasi pada jenjang TK, PAUD, SD, dan SMP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SejarahDesa;
