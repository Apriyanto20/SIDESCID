"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PerangkatDesaSection from "./PerangkatDesaSection";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { Swiper as SwiperType } from 'swiper';

interface MainImage {
    src: string;
    alt: string;
    description: string;
}

interface ThumbImage {
    src: string;
    alt: string;
    type: 'nature' | 'activity';
}

const mainImages: MainImage[] = [
    {
        src: '/image/Ciparay3.jpg',
        alt: 'Curug Ciparay',
        description: 'Hamparan sawah menghijau dengan latar pegunungan'
    },
    {
        src: '/images/curug-payung.png',
        alt: 'Curug Payung',
        description: 'Air terjun setinggi 15 meter dengan pemandangan hutan alami'
    }
];

const thumbImages: ThumbImage[] = [
    {
        src: '/image/Citylight.jpg',
        alt: 'Pemandangan dari Gunung Dindingari',
        type: 'activity'
    },
    {
        src: '/image/Kemasan Kopi.jpg',
        alt: 'Seni Budaya Lokal',
        type: 'activity'
    },
    {
        src: '/image/Keripik.jpg',
        alt: 'Potret Warga',
        type: 'activity'
    }
];

export default function HomePage() {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const handleThumbnailClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen bg-[url('/image/hero-desa.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="z-10 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
                        Sistem <span className="text-teal-400">Informasi</span><br />
                        Desa Cidugaleun
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Menyajikan keindahan alam dan informasi desa secara digital
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-down">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Galeri Desa Cidugaleun
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Dokumentasi landscape dan kegiatan warga
                        </p>
                    </div>

                    {/* Main Landscape Carousel (16:9) */}
                    <div className="mb-12" data-aos="zoom-in">
                        <div className="relative group rounded-xl overflow-hidden shadow-xl">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={mainImages.length > 1}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                modules={[Autoplay, Navigation]}
                                navigation={{
                                    nextEl: '.nature-next',
                                    prevEl: '.nature-prev',
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {mainImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full aspect-video">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8 text-center">
                                                <div className="max-w-2xl">
                                                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                                        {image.alt}
                                                    </h3>
                                                    <p className="text-white/90 text-lg mb-3">
                                                        {image.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="nature-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-green-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-10 opacity-0 group-hover:opacity-100 transition hover:scale-110">
                                <ChevronLeftIcon className="w-6 h-6" />
                            </button>
                            <button className="nature-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-green-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-10 opacity-0 group-hover:opacity-100 transition hover:scale-110">
                                <ChevronRightIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Portrait Thumbnails Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                        {thumbImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                onClick={() => handleThumbnailClick(index % mainImages.length)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-4">
                                    <div>
                                        <p className="text-white font-semibold text-sm md:text-base">
                                            {image.alt}
                                        </p>
                                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${image.type === 'nature' ? 'bg-green-600/90 text-white' : 'bg-blue-600/90 text-white'}`}>
                                            {image.type === 'nature' ? 'Alam' : 'Kegiatan'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <PerangkatDesaSection />

            {/* WhatsApp Button */}
            <a href="https://wa.me/6281234567890" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all">
                Hubungi Kami
            </a>
        </div>
    );
}