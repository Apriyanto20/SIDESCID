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
            Desa Cidugaleun merupakan salah satu desa di Kecamatan Cigalontang, Kabupaten Tasikmalaya, Provinsi Jawa Barat. Desa ini dianugerahi keindahan alam pegunungan yang asri serta keberadaan air terjun alami seperti Curug Ciparay dan Curug Cipayung, yang masih jarang dikenal luas oleh wisatawan. Pesona alamnya yang masih alami memberikan daya tarik tersendiri bagi siapa saja yang ingin menikmati suasana pedesaan yang sejuk dan tenang.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif mb-4">
            Selain keindahan alam, Desa Cidugaleun juga dikenal dengan lahan pertanian yang subur. Mayoritas masyarakat bermata pencaharian sebagai petani, terutama di sektor pertanian padi, palawija, dan perkebunan kopi. Suasana desa yang masih alami, dengan hamparan sawah terasering dan perbukitan hijau, menambah kesan asri dan menenangkan bagi para pengunjung.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif mb-4">
            Potensi wisata budaya dan alam di desa ini juga sangat besar untuk dikembangkan, di antaranya aktivitas trekking di area perbukitan, menikmati panorama persawahan terasering, hingga menjelajahi air terjun tersembunyi yang berada di sekitar wilayah desa.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700 font-serif">
            Selain sebagai kawasan pertanian dan wisata, Desa Cidugaleun juga memiliki potensi sumber daya air bersih yang melimpah. Beberapa sumber mata air alami di desa ini telah dimanfaatkan oleh masyarakat setempat untuk memenuhi kebutuhan air bersih sehari-hari. Keberadaan mata air ini juga menjadi bagian penting dalam mencukupi kebutuhan air bagi desa-desa di sekitarnya. Meskipun secara administratif Desa Cidugaleun belum tercatat sebagai pusat utama suplai air bersih untuk Kota Tasikmalaya, namun masyarakat sekitar meyakini bahwa sumber mata air dari wilayah ini berperan strategis dalam menjaga ketersediaan air bersih, terutama di saat musim kemarau panjang. Potensi air bersih dari Desa Cidugaleun sering dijadikan sumber alternatif dalam mendukung program bantuan air bersih ketika terjadi krisis di beberapa wilayah Tasikmalaya.
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
            src="/images/curug-payung.png"
            alt="Curug Payung View 2"
            width={500}
            height={280}
            className="rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
           <Image
            src="/images/crp1.jpg"
            alt="View 3"
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
              Cidugaleun. Asal muasal katanya dari Kedugalan, yang artinya adalah kekuatan. Ya, desa ini terkenal dengan orang-orang berilmu di dalamnya, dengan kekuatan tak tertandingi. 
              Tidak bisa dipandang secara akal sehat. Ilmu-ilmu itu dimiliki oleh para leluhur. Macam-macam jenisnya. Ada yang bisa menggunakan betisnya sebagai penggantu kayu bakar, punya kemampuan pelet, sampai ada pula yang mendapat julukan Sangkuriangnya Cidugaleun, karena bisa menggarap berhektar-hektar sawah tengah malam seorang diri.
            </p>
            <p>
              Ternyata hal ini tidak asing lagi di telinga penikmat ilmu-ilmu tersebut untuk kepentingan duniawi. Tak jarang pendatang melancong ke Cidugaleun untuk kepentingan jodoh, harta, dan kedudukan. Orang Banten yang hendak menaikan ilmu, pasti ke desa ini dan menginap sampai 4 hari 4 malam. Hanya saja, kabarnya kemampuan ini tidak bisa dinikmati warga Cidugaleun sendiri.
            </p>
            <p>
              Alkisah namanya Mahdugal Kawasa. Seorang wanita yang cantiknya bukan main. Konon panjang rambutnya lebih dari 10 meter panjangnya. Kabarnya ia adalah salah satu dari penyebar agama Islam di Pulau Jawa, di luar dari yang sering kita dengar, Wali Songo. Meskipun perempuan, kekuatannya bukan main. Banyak sekali yang mau meminangnya,
              hanya saja terlalu banyak halangan yang menjadikan peminang bahkan tidak bisa menginjakan kaki di tanah Cidugaleun. Yang terkuat adalah Burangrang, itu pun belum sampai benar-benar bertemu dengan Mahdugal.
            </p>
            <p>
              Hal ini menjadi salah satu kepercayaan masyarakat Cidugaleun, bahwa memanjangkan rambut bagi wanita seperti diharamkan. Selain itu seperti menjadi semacam sumpah, bahwa tidak ada satu pun warga Cidugaleun yang berparas cantik atau tampan.
              Tetapi ketika mereka keluar dari desa ini, katanya sih ada sesuatu yang menarik dari diri mereka. 
            </p>
            <p>
              Ada lagi sebuah kepercayaan Sunda, yang kabarnya menjadi salah satu sumpah Mahdugal, bahwa rumah yang dibangun tidak diperbolehkan dengan tembok. Kalau tidak, akan kelaparan. Logisnya, ya ketika lahan sawah diambil alih untuk lahan tempat tinggal yang bertembok, bukan dengan rumah panggung, maka otomatis lahan tersebut tidak bisa digunakan untuk menghasilkan padi.
            </p>
            
            <p>

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
              <h3 className="text-4xl font-black mb-2 font-sans tracking-widest">± 1,179.37 ha</h3>
              <p className="text-lg font-medium uppercase tracking-wide">Luas Wilayah 🌿</p>
            </div>
            <div className="bg-white text-blue-900 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform transform-gpu">
              <h3 className="text-4xl font-black mb-2 font-sans tracking-widest">± 6.378 jiwa</h3>
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
