"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-5 left-0 z-50 transition-all duration-300 rounded-3xl ${isScrolled
                    ? "bg-white shadow-md"
                    : "bg-white/0"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo dan Nama Aplikasi */}
                <div className="flex items-center space-x-3">
                    <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-lg md:text-xl font-bold text-gray-800">
                        SIDES<span className="text-teal-600">CID</span>
                    </span>
                </div>

                {/* Navigasi */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                    <a href="#" className="hover:text-teal-600 transition">Beranda</a>

                    {/* Dropdown Profil */}
                    <div className="relative group">
                        <button className="hover:text-teal-600 transition">Profil</button>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-md py-2 w-40 z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sejarah</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Visi & Misi</a></li>
                        </ul>
                    </div>

                    {/* Dropdown Demografi */}
                    <div className="relative group">
                        <button className="hover:text-teal-600 transition">Demografi</button>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-md py-2 w-40 z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pendidikan</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pekerjaan</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Agama</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Jenis Kelamin</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Luas Wilayah</a></li>
                        </ul>
                    </div>

                    <a href="#" className="hover:text-teal-600 transition">IDM</a>
                    <a href="#" className="hover:text-teal-600 transition">Laporan APDES</a>
                    <a href="#" className="hover:text-teal-600 transition">Potensi</a>
                    <a href="#" className="hover:text-teal-600 transition">Regulasi</a>
                    <a href="#" className="hover:text-teal-600 transition">Berita</a>
                    <a href="#" className="hover:text-teal-600 transition">Rumah Dataku</a>
                    <a href="#" className="hover:text-teal-600 transition">SP4N LAPOR</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
