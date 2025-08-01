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
          <a href="#" className="hover:text-teal-600 transition">Berita</a>
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
