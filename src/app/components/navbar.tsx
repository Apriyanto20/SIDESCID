"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
                    <span className="text-lg md:text-xl font-bold text-gray-800">
                        SIDES<span className="text-teal-600">CID</span>
                    </span>
                </div>

                {/* Hamburger (Mobile) */}
                <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                    <Link href="/">Beranda</Link>

                    <div className="relative group">
                        <span className="hover:text-teal-600 transition cursor-pointer">Profil</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-md py-2 w-40 z-50">
                            <li><Link href="/profil/profil-desa" className="block px-4 py-2 hover:bg-gray-100">Profil Desa</Link></li>
                            <li><Link href="/profil/sejarah" className="block px-4 py-2 hover:bg-gray-100">Sejarah</Link></li>
                            <li><Link href="/profil/visi-misi" className="block px-4 py-2 hover:bg-gray-100">Visi & Misi</Link></li>
                            <li><Link href="/profil/aparatur" className="block px-4 py-2 hover:bg-gray-100">Aparatur</Link></li>
                        </ul>
                    </div>

                    <div className="relative group">
                        <span className="hover:text-teal-600 transition cursor-pointer">Demografi</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-md py-2 w-40 z-50">
                            <li><Link href="/demografi/pendidikan" className="block px-4 py-2 hover:bg-gray-100">Pendidikan</Link></li>
                            <li><Link href="/demografi/pekerjaan" className="block px-4 py-2 hover:bg-gray-100">Pekerjaan</Link></li>
                            <li><Link href="/demografi/agama" className="block px-4 py-2 hover:bg-gray-100">Agama</Link></li>
                            <li><Link href="/demografi/jenis-kelamin" className="block px-4 py-2 hover:bg-gray-100">Jenis Kelamin</Link></li>
                            <li><Link href="/demografi/luas-wilayah" className="block px-4 py-2 hover:bg-gray-100">Luas Wilayah</Link></li>
                        </ul>
                    </div>

                    <Link href="/idm">IDM</Link>
                    <Link href="/laporan-apdes">Laporan APDES</Link>
                    <Link href="/potensi">Potensi</Link>
                    <Link href="/regulasi">Regulasi</Link>
                    <Link href="/berita">Berita</Link>
                    <Link href="/rumah-dataku">Rumah Dataku</Link>
                    <Link href="/sp4n-lapor">SP4N LAPOR</Link>
                </nav>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-800 bg-white shadow rounded-b-3xl">
                    <Link href="/">Beranda</Link>
                    <div>
                        <span className="block font-semibold mt-2">Profil</span>
                        <Link href="/profil/profil-desa" className="block pl-4 hover:text-teal-600">Profil Desa</Link>
                        <Link href="/profil/sejarah" className="block pl-4 hover:text-teal-600">Sejarah</Link>
                        <Link href="/profil/visi-misi" className="block pl-4 hover:text-teal-600">Visi & Misi</Link>
                        <Link href="/profil/aparatur" className="block pl-4 hover:text-teal-600">Aparatur</Link>
                    </div>
                    <div>
                        <span className="block font-semibold mt-2">Demografi</span>
                        <Link href="/demografi/pendidikan" className="block pl-4 hover:text-teal-600">Pendidikan</Link>
                        <Link href="/demografi/pekerjaan" className="block pl-4 hover:text-teal-600">Pekerjaan</Link>
                        <Link href="/demografi/agama" className="block pl-4 hover:text-teal-600">Agama</Link>
                        <Link href="/demografi/jenis-kelamin" className="block pl-4 hover:text-teal-600">Jenis Kelamin</Link>
                        <Link href="/demografi/luas-wilayah" className="block pl-4 hover:text-teal-600">Luas Wilayah</Link>
                    </div>
                    <Link href="/idm" className="block hover:text-teal-600">IDM</Link>
                    <Link href="/laporan-apdes" className="block hover:text-teal-600">Laporan APDES</Link>
                    <Link href="/potensi" className="block hover:text-teal-600">Potensi</Link>
                    <Link href="/regulasi" className="block hover:text-teal-600">Regulasi</Link>
                    <Link href="/berita" className="block hover:text-teal-600">Berita</Link>
                    <Link href="/rumah-dataku" className="block hover:text-teal-600">Rumah Dataku</Link>
                    <Link href="/sp4n-lapor" className="block hover:text-teal-600">SP4N LAPOR</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
