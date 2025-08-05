'use client';
import { FaEye, FaBullseye } from 'react-icons/fa';

const VisiMisi = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-16 overflow-hidden">
      
      {/* Ornamen gambar dekoratif */}
      <img
        src="/522a819f-e5e0-478e-bed3-940ad2c3d6dd.png"
        alt="dekorasi"
        className="absolute bottom-0 right-0 w-56 opacity-10 pointer-events-none select-none"
      />

      <div className="z-10 w-full max-w-7xl space-y-12">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold text-center text-green-900 drop-shadow-lg"
        >
          Visi & Misi Desa Cidugaleun
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kartu VISI */}
          <div
            data-aos="zoom-in"
            className="bg-white/50 backdrop-blur-md border border-green-300 rounded-3xl shadow-2xl p-8 hover:shadow-green-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-green-700 text-3xl" />
              <h2 className="text-2xl font-semibold text-green-800">Visi</h2>
            </div>
            <p className="text-gray-700 text-justify leading-relaxed">
              “Masyarakat yang Sejahtera Lahir Batin: Visi ini mencerminkan tujuan utama pembangunan desa, yaitu meningkatkan kualitas hidup masyarakat secara menyeluruh, baik secara material maupun spiritual.”
            </p>
          </div>

          {/* Kartu MISI */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-white/50 backdrop-blur-md border border-green-300 rounded-3xl shadow-2xl p-8 hover:shadow-green-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-green-700 text-3xl" />
              <h2 className="text-2xl font-semibold text-green-800">Misi</h2>
            </div>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-justify leading-relaxed">
              <li>
                Peningkatan Kualitas Sumber Daya Manusia: Melalui pendidikan yang berkualitas dan penguatan karakter, desa berupaya mencetak generasi yang unggul, beriman, dan berakhlakul karimah.
              </li>
              <li>
                Pemanfaatan Sumber Daya Alam Berkelanjutan: Masyarakat lokal menjaga keseimbangan dengan alam melalui prinsip-prinsip kearifan lokal.
              </li>
              <li>
                Pengembangan Ekonomi Kerakyatan: Desa mendorong sektor pertanian, pariwisata, dan ekonomi kreatif sebagai penggerak ekonomi berbasis desa.
              </li>
              <li>
                Tata Kelola Pemerintahan yang Baik: Desa berupaya menciptakan pemerintahan yang transparan, akuntabel, dan partisipatif.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
