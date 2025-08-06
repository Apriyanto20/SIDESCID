'use client';

import Image from 'next/image';
// import Navbar from './components/navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PerangkatDesaSection from "./components/PerangkatDesaSection";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url('/image/hero-desa.jpg')` }} data-aos="fade-up"
      >
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Sistem <span className="text-teal-400">Informasi</span><br />
            Desa Cidugaleun
          </h1>
        </div>
      </section>

      {/* Rumah Dataku Section */}
      <section className="bg-white pt-16 pb-24 px-4" data-aos="zoom-in">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block border border-black rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase mb-4 text-black">
            Rumah Dataku
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
            Take Community Empowerment <br className="hidden md:block" />
            To The Next Level
          </h1>
        </div>

        <div className="bg-[#4BA380] rounded-[2rem] py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Carousel */}
            <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                {[...Array(5)].map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src="/image/kegiatan.jpg"
                        alt="Logo Rumah Dataku"
                        fill
                        className="object-contain p-6 transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Logo Section */}
            <div className="w-full aspect-[4/3] rounded-2xl shadow-xl bg-white overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative">
              <Image
                src="/image/kegiatan.jpg"
                alt="Logo Rumah Dataku"
                fill
                className="object-contain p-6 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Statistik Desa */}
          <div className="max-w-7xl mx-auto mt-16">
            <h2 className="text-white text-3xl font-semibold text-center mb-10">Statistik Desa</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1 bg-white rounded-2xl shadow p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Populasi</h3>
                <p className="text-3xl font-bold text-teal-600">2.315 Jiwa</p>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Jumlah Keluarga</h3>
                <p className="text-3xl font-bold text-teal-600">674 KK</p>
              </div>
            </div>

            <div className="flex mb-6 gap-6">
              <div className="flex-1 bg-white rounded-2xl shadow p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Mata Pencaharian</h3>
                <p className="text-3xl font-bold text-teal-600">5 Jenis</p>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Objek Wisata</h3>
                <p className="text-3xl font-bold text-teal-600">3 Lokasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perangkat Desa Section */}
      <PerangkatDesaSection />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4.5A10.5 10.5 0 0 0 3.6 17.2L2 22l4.9-1.6A10.5 10.5 0 1 0 20 4.5zM12 19c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.9.9-3.1-.2-.3A7.96 7.96 0 1 1 12 19z" />
        </svg>
        Layanan Whatsapp Bot
      </a>
    </div>
  );
}
