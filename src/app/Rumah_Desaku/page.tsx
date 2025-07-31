"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { FaChartBar, FaUserCheck, FaUsers, FaShieldAlt, FaBook, FaLeaf, FaBriefcase } from 'react-icons/fa';
import DataCard from './components/DataCard';
import DataKuantitas from './components/DataKuantitas';
import DataKualitas from './components/DataKualitas';


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
    {
      title: "Informasi Lowongan Pekerjaan",
      icon: <FaBriefcase className="text-orange-500 text-2xl" />,
      description: "Lowongan kerja dari dalam dan luar desa",
      panelName: "lowongan-kerja"
    }
  ];

  const carouselImages = [
    {
      src: "/images/desaku.JPG",
      alt: "Pemandangan Desa Cidugaleun",
      caption: "Keindahan Alam Desa Cidugaleun"
    },
    {
      src: "/images/desaku2.jpg",
      alt: "Kegiatan Warga Desa",
      caption: "Gotong Royong Warga Desa"
    },
    {
      src: "/images/desaku3.jpg",
      alt: "Fasilitas Desa",
      caption: "Fasilitas Umum Desa Cidugaleun"
    },
    {
      src: "/images/desaku4.jpg",
      alt: "Potensi Desa",
      caption: "Potensi Ekonomi Desa"
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
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <div className="inline-block px-6 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 font-medium">Rumah Data Kependudukan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portal Data <span className="text-blue-600">Desa Cidugaleun</span>
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
                      Desa yang berkomitmen untuk pengelolaan data yang akurat guna mendukung pembangunan berkelanjutan dan peningkatan kualitas hidup warga.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                      Visi Rumah Dataku
                    </h3>
                    <p className="text-gray-600">
                      Menjadi pusat data terintegrasi yang mendukung perencanaan pembangunan berbasis data dan peningkatan pelayanan publik di tingkat desa.
                    </p>
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
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <p className="font-medium">{image.caption}</p>
                        <p className="text-sm">Desa Cidugaleun, Kec. Cigalontang</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
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

    {activePanel === 'kuantitas-penduduk' && (
  <DataKuantitas onClose={handleClosePanel} />
)}

{activePanel === 'kualitas-penduduk' && (
  <DataKualitas onClose={handleClosePanel} />
)}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
                <span className="text-2xl font-bold">
                  <span className="text-white">SIDES</span><span className="text-blue-400">CID</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Sistem Informasi Desa Cerdas dan Inovatif untuk pembangunan berkelanjutan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Beranda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Profil Desa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Statistik</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Layanan</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(0265) 1234567</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@cidugaleun.desa.id</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Desa Cidugaleun, Kec. Cigalontang, Kab. Tasikmalaya</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Jam Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Senin-Kamis</span>
                  <span>08:00 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Jumat</span>
                  <span>08:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu-Minggu</span>
                  <span>Tutup</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Desa Cidugaleun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}