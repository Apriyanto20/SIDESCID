// src/app/profil/profil-desa/page.tsx
import Image from 'next/image';

export default function ProfilDesa() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full min-h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/pemandangan.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
          Profil Desa Cidugaleun
        </h1>
      </section>

      {/* Tentang Desa */}
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Tentang Desa Cidugaleun</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 text-justify">
            <p className="text-gray-700">
              Desa Cidugaleun merupakan salah satu desa di Kecamatan Cigalontang,
              Kabupaten Tasikmalaya, Provinsi Jawa Barat. Desa ini memiliki potensi alam
              pegunungan dan curug seperti Curug Ciparay yang masih jarang dikenal wisatawan.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/pemandangan.jpg"
              alt="Pemandangan Desa"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Fakta Singkat */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Fakta Singkat Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Luas Wilayah</h3>
              <p>± 1.008 hektar</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Jumlah Penduduk</h3>
              <p>± 4.935 jiwa</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Jumlah RT/RW</h3>
              <p>20 RT / 6 RW</p>
            </div>
          </div>
        </div>
      </section>

      {/* Batas Wilayah */}
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Batas Wilayah</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Sebelah Utara: Desa Lengkongjaya</li>
          <li>Sebelah Timur: Desa Jayapura</li>
          <li>Sebelah Selatan: Desa Jayapura</li>
          <li>Sebelah Barat: Desa Cikadondong</li>
        </ul>
      </section>

      {/* Peta Lokasi */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Lokasi Desa</h2>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63330.22995087233!2d108.11841185372868!3d-7.390692436416005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57614e2f0615%3A0x20f07cb4860c47e3!2sCidugaleun%2C%20Kec.%20Cigalontang%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1722432882829!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
