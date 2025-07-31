"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPotensiOpen, setPotensiOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 5);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full fixed top-5 left-0 z-50 transition-all duration-300 rounded-3xl ${isScrolled ? "bg-white shadow-md" : "bg-white/0"}`}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-lg md:text-xl font-bold text-gray-800">
                        SIDES<span className="text-teal-600">CID</span>
                    </span>
                </div>

                {/* Hamburger Menu (Mobile Only) */}
                <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                    <a href="#" className="hover:text-teal-600 transition">Beranda</a>

                    <div className="relative group">
                        <button className="hover:text-teal-600 transition">Profil</button>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-md py-2 w-40 z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sejarah</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Visi & Misi</a></li>
                        </ul>
                    </div>

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

                    {/* Click-based Potensi Dropdown */}
                    <div className="relative">
                        <button onClick={() => setPotensiOpen(!isPotensiOpen)} className="flex items-center gap-1 hover:text-teal-600 transition">
                            Potensi
                            <svg className="w-4 h-4 mt-[1px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isPotensiOpen && (
                            <ul className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg py-2 w-44 z-50 border">
                                <li>
                                    <Link href="/potensi/lapak" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition" onClick={() => setPotensiOpen(false)}>Lapak Desa</Link>
                                </li>
                                <li>
                                    <Link href="/potensi/potensi-desa" className="block px-4 py-2 text-sm text-teal-600 hover:bg-gray-100 font-semibold transition" onClick={() => setPotensiOpen(false)}>Potensi Desa</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <a href="#" className="hover:text-teal-600 transition">Regulasi</a>
                    <a href="#" className="hover:text-teal-600 transition">Berita</a>
                    <a href="#" className="hover:text-teal-600 transition">Rumah Dataku</a>
                    <a href="#" className="hover:text-teal-600 transition">SP4N LAPOR</a>
                </nav>
            </div>

            {/* Mobile Menu (dari main) */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-800 bg-white shadow rounded-b-3xl">
                    <a href="#" className="block hover:text-teal-600">Beranda</a>
                    {/* Profil */}
                    <div>
                        <span className="block font-semibold mt-2">Profil</span>
                        <a href="#" className="block pl-4 hover:text-teal-600">Sejarah</a>
                        <a href="#" className="block pl-4 hover:text-teal-600">Visi & Misi</a>
                    </div>
                    {/* Demografi */}
                    <div>
                        <span className="block font-semibold mt-2">Demografi</span>
                        <a href="#" className="block pl-4 hover:text-teal-600">Pendidikan</a>
                        <a href="#" className="block pl-4 hover:text-teal-600">Pekerjaan</a>
                        <a href="#" className="block pl-4 hover:text-teal-600">Agama</a>
                        <a href="#" className="block pl-4 hover:text-teal-600">Jenis Kelamin</a>
                        <a href="#" className="block pl-4 hover:text-teal-600">Luas Wilayah</a>
                    </div>
                    {/* Potensi + lainnya */}
                    <a href="#" className="block hover:text-teal-600">IDM</a>
                    <a href="#" className="block hover:text-teal-600">Laporan APDES</a>
                    <a href="#" className="block hover:text-teal-600">Potensi</a>
                    <a href="#" className="block hover:text-teal-600">Regulasi</a>
                    <a href="#" className="block hover:text-teal-600">Berita</a>
                    <a href="#" className="block hover:text-teal-600">Rumah Dataku</a>
                    <a href="#" className="block hover:text-teal-600">SP4N LAPOR</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
