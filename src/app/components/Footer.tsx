"use client";

import React from "react";
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa6";
import { useEffect } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Footer: React.FC = () => {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    return (
        <footer className="bg-blue-900 text-white py-12 px-4" data-aos="fade-up">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                {/* Logo & Deskripsi */}
                <div>
                    <div className="text-xl font-bold mb-3">SIDES<span className="text-teal-300">CID</span></div>
                    <p className="text-sm leading-relaxed mb-4 text-gray-300">
                        Sistem Informasi Desa Cidugaleun membantu masyarakat mengakses informasi dan layanan desa secara cepat dan transparan.
                    </p>
                    <div className="flex space-x-4 text-xl text-gray-100">
                        <FaFacebook className="hover:text-teal-300 cursor-pointer" />
                        <FaInstagram className="hover:text-teal-300 cursor-pointer" />
                        <FaYoutube className="hover:text-teal-300 cursor-pointer" />
                        <FaWhatsapp className="hover:text-teal-300 cursor-pointer" />
                    </div>
                </div>

                {/* Navigasi */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Tentang Desa</h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><a href="#">Profil</a></li>
                        <li><a href="#">Sejarah</a></li>
                        <li><a href="#">Visi & Misi</a></li>
                        <li><a href="#">Struktur Organisasi</a></li>
                    </ul>
                </div>

                {/* Layanan */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Layanan</h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><a href="#">Pelayanan Surat</a></li>
                        <li><a href="#">Laporan APBDes</a></li>
                        <li><a href="#">IDM</a></li>
                        <li><a href="#">Regulasi</a></li>
                    </ul>
                </div>

                {/* Kontak */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Kontak</h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>Desa Cidugaleun</li>
                        <li>Kecamatan Cigemblong</li>
                        <li>Kabupaten Lebak, Banten</li>
                        <li>Email: info@cidugaleun.desa.id</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Desa Cidugaleun. All rights reserved.</p>
                <div className="space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Kebijakan Privasi</a>
                    <a href="#" className="hover:underline">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
