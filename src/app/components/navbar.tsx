"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPotensiOpen, setPotensiOpen] = useState(false);
  const [isProfilOpen, setProfilOpen] = useState(false);
  const [isDemografiOpen, setDemografiOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdown, setMobileDropdown] = useState({
    profil: false,
    demografi: false,
    potensi: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
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

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-teal-600 transition">Beranda</Link>

          {/* Dropdown: Profil */}
          <div className="relative">
            <button
              onClick={() => {
                setPotensiOpen(false);
                setDemografiOpen(false);
                setProfilOpen(!isProfilOpen);
              }}
              className="flex items-center gap-1 hover:text-teal-600 transition"
            >
              Profil <ChevronDown className="w-4 h-4" />
            </button>
            {isProfilOpen && (
              <ul className="absolute left-0 mt-2 bg-white rounded-xl shadow-md py-2 w-44 z-50 border">
                <li>
                  <Link href="/profil/sejarah" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfilOpen(false)}>Sejarah</Link>
                </li>
                <li>
                  <Link href="/profil/visi-misi" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfilOpen(false)}>Visi & Misi</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown: Demografi */}
          <div className="relative">
            <button
              onClick={() => {
                setPotensiOpen(false);
                setProfilOpen(false);
                setDemografiOpen(!isDemografiOpen);
              }}
              className="flex items-center gap-1 hover:text-teal-600 transition"
            >
              Demografi <ChevronDown className="w-4 h-4" />
            </button>
            {isDemografiOpen && (
              <ul className="absolute left-0 mt-2 bg-white rounded-xl shadow-md py-2 w-44 z-50 border">
                <li><link href="/demografi/agama" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDemografiOpen(false)}>Agama</link></li>
                <li><link href="/demografi/jeniskelamin" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDemografiOpen(false)}>Jenis Kelamin</link></li>
                <li><link href="/demografi/pekerjaan" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDemografiOpen(false)}>Pekerjaan</link></li>
                <li><link href="/demografi/pendidikan" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDemografiOpen(false)}>Pendidikan</link></li>
                <li><link href="/demografi/umur" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDemografiOpen(false)}>Luas Wilayah</link></li>
              </ul>
            )}
          </div>

          <a href="#" className="hover:text-teal-600 transition">IDM</a>
          <a href="#" className="hover:text-teal-600 transition">Laporan APDES</a>

          {/* Potensi (click dropdown) */}
          <div className="relative">
            <button
              onClick={() => {
                setProfilOpen(false);
                setDemografiOpen(false);
                setPotensiOpen(!isPotensiOpen);
              }}
              className="flex items-center gap-1 hover:text-teal-600 transition"
            >
              Potensi <ChevronDown className="w-4 h-4 mt-[1px]" />
            </button>

            {isPotensiOpen && (
              <ul className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg py-2 w-44 z-50 border">
                <li>
                  <Link
                    href="/potensi/lapak"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setPotensiOpen(false)}
                  >
                    Lapak Desa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/potensi/potensi-desa"
                    className="block px-4 py-2 font-semibold text-teal-600 hover:bg-gray-100"
                    onClick={() => setPotensiOpen(false)}
                  >
                    Potensi Desa
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/regulasi" className="hover:text-teal-600 transition">Regulasi</Link>
          <Link href="/berita" className="hover:text-teal-600 transition">Berita</Link>
          <Link href="/Rumah_Desaku" className="hover:text-teal-600 transition">Rumah Dataku</Link>
          <a href="#" className="hover:text-teal-600 transition">SP4N LAPOR</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm font-medium text-gray-800 mt-2">
            <li><a href="#" className="block py-1">Beranda</a></li>

            {/* Profil Mobile */}
            <li>
              <button
                onClick={() => setMobileDropdown(prev => ({ ...prev, profil: !prev.profil }))}
                className="flex justify-between w-full items-center py-1"
              >
                Profil <ChevronDown className="w-4 h-4" />
              </button>
              {isMobileDropdown.profil && (
                <ul className="pl-4 space-y-1 mt-1">
                  <li><Link href="/profil/sejarah">Sejarah</Link></li>
                  <li><Link href="/profil/visi-misi">Visi & Misi</Link></li>
                </ul>
              )}
            </li>

            {/* Demografi Mobile */}
            <li>
              <button
                onClick={() => setMobileDropdown(prev => ({ ...prev, demografi: !prev.demografi }))}
                className="flex justify-between w-full items-center py-1"
              >
                Demografi <ChevronDown className="w-4 h-4" />
              </button>
              {isMobileDropdown.demografi && (
                <ul className="pl-4 space-y-1 mt-1">
                  <li><Link href="/demografi/agama">Agama</Link></li>
                  <li><Link href="/demografi/jeniskelamin">Jenis Kelamin</Link></li>
                  <li><Link href="/demografi/pekerjaan">Pekerjaan</Link></li>
                  <li><Link href="/demografi/pendidikan">Pendidikan</Link></li>
                  <li><Link href="/demografi/umur">Umur</Link></li>
                </ul>
              )}
            </li>

            <li><a href="#">IDM</a></li>
            <li><a href="#">Laporan APDES</a></li>

            {/* Potensi Mobile */}
            <li>
              <button
                onClick={() => setMobileDropdown(prev => ({ ...prev, potensi: !prev.potensi }))}
                className="flex justify-between w-full items-center py-1"
              >
                Potensi <ChevronDown className="w-4 h-4" />
              </button>
              {isMobileDropdown.potensi && (
                <ul className="pl-4 space-y-1 mt-1">
                  <li><Link href="/potensi/lapak">Lapak Desa</Link></li>
                  <li><Link href="/potensi/potensi-desa">Potensi Desa</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/regulasi">Regulasi</Link></li>
            <li><Link href="/berita">Berita</Link></li>
            <li><Link href="/Rumah_Desaku">Rumah Dataku</Link></li>
            <li><a href="#">SP4N LAPOR</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
