"use client";

import React, { useState, useEffect } from 'react';
// import Navbar from '../components/navbar';
import { FaChartBar, FaUserCheck, FaUsers, FaShieldAlt, FaBook, FaLeaf, FaBriefcase } from 'react-icons/fa';

import DataCard from './DataCard/page';
import DataKuantitas from './DataKuantitas/page';
import DataKualitas from './DataKualitas/page';
import DataMigrasi from './DataMigrasi/page';
import DataPerlindunganSosial from './DataPerlindunganSosial/page';
import DataAdministrasiKependudukan from './DataAdministrasiKependudukan/page';
import DataPotensiDesa from './PotensiDesa/page';

import { motion } from 'framer-motion';

export default function RumahDesaku() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Data Kuantitas Penduduk",
      icon: <FaChartBar className="text-blue-500 text-2xl" />,
      description: "Data jumlah penduduk berdasarkan kelompok usia dan jenis kelamin",
      panelName: "kuantitas-penduduk"
    },
    {
      title: "Data Kualitas Penduduk",
      icon: <FaUserCheck className="text-green-500 text-2xl" />,
      description: "Indeks pembangunan manusia, pendidikan, dan kesehatan",
      panelName: "kualitas-penduduk"
    },
    {
      title: "Data Migrasi",
      icon: <FaUsers className="text-purple-500 text-2xl" />,
      description: "Data perpindahan penduduk masuk dan keluar desa",
      panelName: "migrasi"
    },
    {
      title: "Data Perlindungan Sosial",
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      description: "Penerima bantuan sosial dan program perlindungan lainnya",
      panelName: "perlindungan-sosial"
    },
    {
      title: "Data Administrasi Kependudukan",
      icon: <FaBook className="text-red-500 text-2xl" />,
      description: "Kartu keluarga, KTP, akta kelahiran dan kematian",
      panelName: "administrasi"
    },
    {
      title: "Data Potensi Desa",
      icon: <FaLeaf className="text-teal-500 text-2xl" />,
      description: "Sumber daya alam, UMKM, dan potensi unggulan desa",
      panelName: "potensi-desa"
    },
  ];

  const carouselImages = [
    {
      src: "/image/ciparay3.jpg",
      alt: "Tempat Wisata Curug Ciparay",
      caption: "Keindahan Alam Desa Cidugaleun"
    },
    {
      src: "/image/p3.jpg",
      alt: "Pemandangan Alam Desa Cidugaleun",
      caption: "Keindahan Alam Desa Cidugaleun"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (panelName: string) => {
    setActivePanel(panelName);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <div className="inline-block px-6 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 font-medium">Rumah Data Kependudukan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portal Data Desa Cidugaleun
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistem terintegrasi untuk pengelolaan data kependudukan dan pembangunan desa
          </p>
        </div>

        {/* Split Layout Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Profil Desa</h2>
                <div className="flex items-center text-gray-600 mb-6">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Desa Cidugaleun, Kec. Cigalontang, Kab. Tasikmalaya, Jawa Barat</span>
                </div>

                <div className="space-y-8">
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                      Tentang Desa Kami
                    </h3>
                    <p className="text-gray-600">
                      Desa Cidugaleun merupakan salah satu desa yang terletak di Kecamatan Cigalontang, Kabupaten Tasikmalaya, Provinsi Jawa Barat. Desa ini dikenal dengan lingkungan alamnya yang asri, suasana yang sejuk, serta masyarakatnya yang ramah dan menjunjung tinggi nilai-nilai kebersamaan.                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg aspect-video">
                {/* Image Carousel */}
                <div className="relative h-full w-full">
                  {carouselImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                      whileHover={{
                        scale: index === currentSlide ? 1.02 : 1, // Hanya scale jika slide aktif
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
                        initial={{ opacity: 1 }}
                        whileHover={{
                          opacity: index === currentSlide ? 0.8 : 1 // Hanya efek hover jika slide aktif
                        }}
                      >
                        <p className="font-medium">{image.caption}</p>
                        <p className="text-sm">Desa Cidugaleun, Kec. Cigalontang</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                  {carouselImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Layanan <span className="text-blue-600">Informasi</span> Desa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <DataCard
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
                onClick={() => handleCardClick(item.panelName)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Panel Components */}
      {activePanel === 'kuantitas-penduduk' && (
        <DataKuantitas onClose={handleClosePanel} />
      )}

      {activePanel === 'kualitas-penduduk' && (
        <DataKualitas onClose={handleClosePanel} />
      )}
      {activePanel === 'migrasi' && (
        <DataMigrasi onClose={handleClosePanel} />
      )}
      {activePanel === 'perlindungan-sosial' && (
        <DataPerlindunganSosial onClose={handleClosePanel} />
      )}
      {activePanel === 'administrasi' && (
        <DataAdministrasiKependudukan onClose={handleClosePanel} />
      )}
      {activePanel === 'potensi-desa' && (
        <DataPotensiDesa onClose={handleClosePanel} />
      )}
    </div>
  );
}