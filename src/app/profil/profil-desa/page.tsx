"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilDesaCidugaleun() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/p3.jpg"
          alt="Panorama Desa"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-white bg-black/50 px-8 py-4 rounded-2xl shadow-2xl tracking-[0.3em] uppercase font-serif"
          >
            Profil Desa Cidugaleun
          </motion.h1>
        </div>
      </section>

      {/* Tentang Desa */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-[2fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-900 to-indigo-700 text-transparent bg-clip-text mb-4">
            Tentang Desa Cidugaleun
          </h2>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif mb-4">
            Desa Cidugaleun merupakan salah satu desa di Kecamatan Cigalontang, Kabupaten Tasikmalaya, Provinsi Jawa Barat. 
            Desa ini memiliki potensi alam pegunungan dan curug seperti Curug Ciparay yang masih jarang dikenal wisatawan.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif mb-4">
            Selain keindahan alamnya, Desa Cidugaleun juga dikenal dengan lahan pertanian yang subur. Mayoritas masyarakatnya 
            bermata pencaharian sebagai petani, sehingga suasana pedesaan di sini terasa sangat asri dan alami.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif">
            Desa ini juga memiliki potensi wisata budaya dan alam yang bisa dikembangkan, seperti trekking di area perbukitan, 
            menikmati panorama persawahan terasering, dan mengunjungi air terjun yang tersembunyi di sekitar desa.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 justify-self-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/curug-ciparay.jpg"
            alt="Curug Ciparay View 1"
            width={500}
            height={280}
            className="rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
          <Image
            src="/images/crp1.jpg"
            alt="Curug Ciparay View 2"
            width={500}
            height={280}
            className="rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Sejarah Desa */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-[2fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-900 to-indigo-700 text-transparent bg-clip-text mb-4">
            Sejarah Desa Cidugaleun
          </h2>
          <div className="space-y-4 text-justify leading-relaxed text-lg text-gray-700 font-serif">
            <p>
              Cidugaleun adalah desa di kecamatan Cigalontang, Tasikmalaya, Jawa Barat, Indonesia. Di sebelah barat berbatasan 
              dengan Kecamatan Sariwangi. Desa ini berada di kaki Gunung Karacak dan Gunung Dinding Ari.
            </p>
            <p>
              Desa ini memiliki banyak pemandangan yang memanjakan mata, terutama bila dilihat dari Jembatan Cisok atau biasa 
              disebut cekdam. Di desa ini terdapat beberapa tempat wisata, salah satunya adalah Curug Ciparay yang masih belum 
              banyak diketahui wisatawan.
            </p>
            <p>
              Di Desa Cidugaleun terdapat 2 TBM Aktif yang sudah terdaftar di PNFI dan Dinas Pendidikan Dan Kebudayaan Kabupaten 
              Tasikmalaya yaitu TBM PPM Al Muqorrobin (2012) dan TBM Ligar Luang (2018).
            </p>
            <p>
              Kedua TBM ini bergerak di bidang keaksaraan dan Pembudayaan Literasi dan Numerasi pada jenjang TK, PAUD, SD, dan SMP.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 justify-self-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/crp2.jpg"
            alt="Sejarah Desa View 1"
            width={500}
            height={280}
            className="rounded-3xl shadow-2xl border-4 border-white hover:rotate-1 hover:scale-105 transition-all duration-500"
          />
          <Image
            src="/images/crp3.jpg"
            alt="Sejarah Desa View 2"
            width={500}
            height={280}
            className="rounded-3xl shadow-2xl border-4 border-white hover:rotate-1 hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </section>

      {/* Fakta Singkat */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-12 tracking-widest uppercase font-serif">Fakta Singkat Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white text-blue-900 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform transform-gpu">
              <h3 className="text-4xl font-black mb-2 font-sans tracking-widest">± 1.008 ha</h3>
              <p className="text-lg font-medium uppercase tracking-wide">Luas Wilayah 🌿</p>
            </div>
            <div className="bg-white text-blue-900 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform transform-gpu">
              <h3 className="text-4xl font-black mb-2 font-sans tracking-widest">± 4.935 jiwa</h3>
              <p className="text-lg font-medium uppercase tracking-wide">Jumlah Penduduk 👥</p>
            </div>
            <div className="bg-white text-blue-900 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform transform-gpu">
              <h3 className="text-4xl font-black mb-2 font-sans tracking-widest">20 RT / 6 RW</h3>
              <p className="text-lg font-medium uppercase tracking-wide">Jumlah RT-RW 🏘️</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Batas Wilayah & Lokasi */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4">Batas Wilayah</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Sebelah Utara: Desa Lengkongjaya</li>
            <li>Sebelah Timur: Desa Jayapura</li>
            <li>Sebelah Selatan: Desa Jayapura</li>
            <li>Sebelah Barat: Desa Cikadondong</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4">Lokasi Desa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63330.22995087233!2d108.11841185372868!3d-7.390692436416005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57614e2f0615%3A0x20f07cb4860c47e3!2sCidugaleun%2C%20Kec.%20Cigalontang%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1722432882829!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
}
