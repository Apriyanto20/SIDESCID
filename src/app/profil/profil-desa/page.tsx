import Image from 'next/image';

export default function ProfilDesaCidugaleun() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/pemandangan.jpg"
          alt="Panorama Desa"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white bg-black/50 px-8 py-4 rounded-xl shadow-lg">
            Profil Desa Cidugaleun
          </h1>
          <div className="absolute right-10 bottom-10 hidden md:block">
            <Image
              src="/cidugaleun.jpg"
              alt="Curug Ciparay"
              width={200}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tentang Desa */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Tentang Desa Cidugaleun</h2>
          <p className="text-justify leading-relaxed">
            Desa Cidugaleun merupakan salah satu desa di Kecamatan Cigalontang, Kabupaten Tasikmalaya, Provinsi Jawa Barat. Desa ini memiliki potensi alam pegunungan dan curug seperti Curug Ciparay yang masih jarang dikenal wisatawan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/image/pemandangan.jpg"
            alt="Pemandangan Desa"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
          <Image
            src="/cidugaleun.jpg"
            alt="Curug Ciparay"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Sejarah Desa */}
      <section className="relative py-20 px-4 md:px-8 bg-cover bg-center text-white" style={{ backgroundImage: "url('/cidugaleun.jpg')" }}>
        <div className="bg-black/60 p-10 rounded-xl max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Sejarah Desa Cidugaleun</h2>
          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              Cidugaleun adalah desa di kecamatan Cigalontang, Tasikmalaya, Jawa Barat, Indonesia. Di sebelah barat berbatasan dengan Kecamatan Sariwangi. Desa ini berada di kaki Gunung Karacak dan Gunung Dinding Ari.
            </p>
            <p>
              Desa ini memiliki banyak pemandangan yang memanjakan mata, terutama bila dilihat dari Jembatan Cisok atau biasa disebut cekdam. Di desa ini terdapat beberapa tempat wisata, salah satunya adalah Curug (Air Terjun) Ciparay yang masih belum banyak diketahui oleh para wisatawan.
            </p>
            <p>
              Di Desa Cidugaleun terdapat 2 TBM Aktif yang sudah terdaftar di PNFI dan Dinas Pendidikan Dan Kebudayaan Kabupaten Tasikmalaya yakni TBM PPM Al Muqorrobin yang didirikan pada 2 Januari 2012 oleh Acep Saepul Rahmat, S.Pd., M.Pd., M.M dan TBM Ligar Luang yang didirikan oleh Saepuloh, M.Pd yang didirikan tahun 2018.
            </p>
            <p>
              Kedua TBM ini bergerak di bidang keaksaraan dan Pembudayaan Literasi dan Numerasi pada jenjang TK, PAUD, SD, dan SMP.
            </p>
          </div>
        </div>
      </section>

      {/* Fakta Singkat */}
      <section className="bg-blue-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Fakta Singkat Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold mb-2">± 1.008 hektar</h3>
              <p>Luas Wilayah</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold mb-2">± 4.935 jiwa</h3>
              <p>Jumlah Penduduk</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold mb-2">20 RT / 6 RW</h3>
              <p>Jumlah RT-RW</p>
            </div>
          </div>
        </div>
      </section>

      {/* Batas Wilayah & Lokasi */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Batas Wilayah</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Sebelah Utara: Desa Lengkongjaya</li>
            <li>Sebelah Timur: Desa Jayapura</li>
            <li>Sebelah Selatan: Desa Jayapura</li>
            <li>Sebelah Barat: Desa Cikadondong</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Lokasi Desa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63330.22995087233!2d108.11841185372868!3d-7.390692436416005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57614e2f0615%3A0x20f07cb4860c47e3!2sCidugaleun%2C%20Kec.%20Cigalontang%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1722432882829!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
