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

interface NatureImage {
    main: string;
    thumb: string;
    name: string;
}

const natureImages: NatureImage[] = [
    {
        main: '/image/curug-ciparay.jpg',
        thumb: '/image/curug-ciparay.jpg',
        name: 'Curug Ciparay'
    },
    {
        main: '/image/curug.jpeg',
        thumb: '/image/curug.jpeg',
        name: 'Curug Payung'
    },
    {
        main: '/image/pemandangan.jpg',
        thumb: '/image/pemandangan.jpg',
        name: 'Pemandangan'
    },
];

const statistics = [
    {
        value: `${natureImages.length}+`,
        title: "Air Terjun",
        desc: "Spot alam menakjubkan",
        icon: "💦"
    },
    {
        value: "800 mdpl",
        title: "Ketinggian",
        desc: "Udara sejuk pegunungan",
        icon: "⛰️"
    },
    {
        value: "12 Ha",
        title: "Hutan Alam",
        desc: "Kawasan hijau asri",
        icon: "🌳"
    },
    {
        value: "20+",
        title: "Spot Foto",
        desc: "Lokasi instagramable",
        icon: "📸"
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

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.src = '/image/kegiatan.jpg';
        target.className = "object-contain p-6";
    };

    return (
        <div className="relative min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
                style={{ backgroundImage: `url('/image/hero-desa.jpg')` }}
                data-aos="fade-up"
            >
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

            {/* Nature Gallery Section */}
            <section className="relative bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-down">
                        <span className="inline-block bg-[#4BA380] rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase mb-4 text-white">
                            Pesona Alam
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Keindahan Air Terjun Cidugaleun
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Temukan keajaiban alam yang tersembunyi di desa kami
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div className="mb-12" data-aos="zoom-in">
                        <div className="relative group rounded-xl overflow-hidden shadow-xl">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={natureImages.length > 1}
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
                                {natureImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-96 md:h-[500px]">
                                            <Image
                                                src={image.main}
                                                alt={image.name}
                                                fill
                                                className="object-cover"
                                                priority
                                                onError={handleImageError}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                                <div>
                                                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                                        {image.name}
                                                    </h3>
                                                    <span className="inline-block bg-white/80 text-[#4BA380] px-3 py-1 rounded-full text-sm font-medium">
                                                        Spot Wisata #{index + 1}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {natureImages.length > 1 && (
                                <>
                                    <button
                                        className="nature-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#4BA380] w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 opacity-0 group-hover:opacity-100 transition"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="nature-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#4BA380] w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 opacity-0 group-hover:opacity-100 transition"
                                        aria-label="Next image"
                                    >
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    {natureImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {natureImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    onClick={() => handleThumbnailClick(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${image.name}`}
                                >
                                    <div className="aspect-square relative">
                                        <Image
                                            src={image.thumb}
                                            alt={`Thumbnail ${image.name}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform"
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="text-white font-medium text-sm truncate">{image.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Nature Statistics */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8" data-aos="fade-up">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                            <span className="text-[#4BA380]">Fakta Menarik</span> Tentang Alam Kami
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {statistics.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-[#4BA380]/30 transition-all"
                                >
                                    <span className="text-3xl mb-2 inline-block">{stat.icon}</span>
                                    <p className="text-2xl font-bold text-[#4BA380] mb-1">{stat.value}</p>
                                    <h4 className="font-semibold text-gray-800">{stat.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#4BA380] to-teal-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                                <MapPinIcon className="w-5 h-5 mr-2" />
                                Jelajahi Peta Wisata
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perangkat Desa Section */}
            <PerangkatDesaSection />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/6281234567890"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4.5A10.5 10.5 0 0 0 3.6 17.2L2 22l4.9-1.6A10.5 10.5 0 1 0 20 4.5zM12 19c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.9.9-3.1-.2-.3A7.96 7.96 0 1 1 12 19z" />
                </svg>
                Hubungi Kami
            </a>
        </div>
    );
}