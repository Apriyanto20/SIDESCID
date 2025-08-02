"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
      className={`w-full fixed top-5 left-0 z-50 transition-all duration-300 rounded-3xl ${
        isScrolled ? "bg-white shadow-md" : "bg-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-lg md:text-xl font-bold text-gray-800">
            SIDES<span className="text-teal-600">CID</span>
          </span>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">

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
        </div>
      )}
    </header>
  );
};

export default Navbar;
