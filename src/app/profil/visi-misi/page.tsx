'use client';
import React from 'react';

const VisiMisi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-6 py-10 overflow-hidden">
      <div className="max-w-7xl w-full space-y-10 animate-fadeSlideUp">
        <h1 className="text-4xl font-bold text-center text-green-800">
          Visi & Misi Desa Cidugaleun
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Visi</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              “Masyarakat yang Sejahtera Lahir Batin: Visi ini mencerminkan tujuan utama pembangunan desa, yaitu meningkatkan kualitas hidup masyarakat secara menyeluruh, baik secara material maupun spiritual.”
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Misi</h2>
            <ol className="list-decimal list-inside text-gray-800 space-y-2 text-justify">
              <li>
                Peningkatan Kualitas Sumber Daya Manusia: Melalui pendidikan yang berkualitas dan penguatan karakter, desa berupaya mencetak generasi yang unggul, beriman, dan berakhlakul karimah.
              </li>
              <li>
                Pemanfaatan Sumber Daya Alam Berkelanjutan: Masyarakat lokal menjaga keseimbangan dengan alam melalui prinsip-prinsip kearifan lokal.
              </li>
              <li>
                Pengembangan Ekonomi Kerakyatan: Desa mendorong sektor pertanian, pariwisata, dan ekonomi kreatif sebagai penggerak ekonomi berbasis desa.
              </li>
              <li>
                Tata Kelola Pemerintahan yang Baik: Desa berupaya menciptakan pemerintahan yang transparan, akuntabel, dan partisipatif.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
