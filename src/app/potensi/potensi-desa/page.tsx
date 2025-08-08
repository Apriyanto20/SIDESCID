"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles, Filter, MapPin, Leaf, Palette, Camera } from "lucide-react";
import Navbar from "@app/app/components/navbar";

// ---------- Tipe data potensi ----------
type Potensi = {
  id: number;
  nama: string;
  gambar: string;
  kategori: "Pertanian" | "Kerajinan" | "Wisata" | "UMKM";
  deskripsi: string;
  lokasi?: string;
};

// ---------- Data potensi desa (3 Wisata, 7 UMKM) ----------
const dataPotensi: Potensi[] = [
  // --- Pertanian ---
  {
    id: 1,
    nama: "Pertanian Padi Organik",
    gambar: "/image/sawah.png",
    kategori: "Pertanian",
    deskripsi:
      "Lahan sawah seluas 50 hektar dikelola secara gotong royong. Panen dua kali setahun dengan metode tradisional tanpa pestisida kimia. Teknik bertani warisan leluhur ini terus dilestarikan oleh petani muda desa untuk menjaga keberlanjutan lingkungan dan kualitas beras premium.",
    lokasi: "Dusun Cisereh & Cipinang",
  },

  // --- Kerajinan ---
  {
    id: 2,
    nama: "Kerajinan Anyaman Bambu",
    gambar: "/image/anyaman.jpeg",
    kategori: "Kerajinan",
    deskripsi:
      "Dibuat oleh ibu-ibu PKK dari bambu lokal. Produknya: tikar, tas, hiasan dinding. Sudah diekspor ke beberapa kota di Jawa. Proses pembuatan memakan waktu hingga seminggu karena dilakukan secara manual dengan detail tinggi.",
    lokasi: "Kampung Nanggerang",
  },

  // --- UMKM (7 total) ---
  {
    id: 3,
    nama: "UMKM Kopi Dinding Ari",
    gambar: "/image/kopida.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Kopi Dindingari Cidugaleun merupakan produk kopi siap seduh yang terbuat dari biji kopi Arabica dan Robusta yang ditanam di ketinggian 900–1300 meter di atas permukaan laut, menghadirkan cita rasa khas pegunungan. Proses produksinya dilakukan secara tradisional secara manual, namun juga menggabungkan mesin modern untuk menjaga kualitas dan konsistensi. Produk ini dipasarkan baik secara offline maupun online, menyesuaikan dengan perkembangan pasar, serta menjadi salah satu oleh-oleh khas Cidugaleun yang diminati wisatawan. Menariknya, para pengunjung dapat menyaksikan langsung proses produksi kopi secara langsung, menjadikan pengalaman wisata yang edukatif dan menarik.",
    lokasi: "Dusun Cipinang",
  },
  {
    id: 4,
    nama: "UMKM Cabe Merah dan Hijau Gapoktan Cidugaleun",
    gambar: "/image/cabemj.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Cabe merah dan hijau dari Gapoktan Cidugaleun tumbuh subur di dataran tinggi Desa Cidugaleun yang memiliki iklim sejuk dan tanah yang subur. Dibudidayakan secara alami dan minim pestisida, cabe-cabe ini dikenal memiliki rasa pedas yang khas, segar, dan berkualitas tinggi. Petani setempat mengelolanya secara gotong royong melalui kelompok tani yang tergabung dalam Gapoktan, menjadikan hasil panen tidak hanya untuk konsumsi lokal, tetapi juga mulai menembus pasar regional. Cabe merah digunakan sebagai bahan baku sambal dan bumbu masak, sementara cabe hijau sering diolah menjadi lalapan atau campuran masakan tradisional, menjadi simbol cita rasa autentik dari dapur Cidugaleun.",
    lokasi: "Dusun Cisereh",
  },
  {
    id: 5,
    nama: "UMKM Gula Merah",
    gambar: "/image/gulam.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Gula merah Cidugaleun dihasilkan dari nira kelapa pilihan yang diolah secara tradisional oleh para petani setempat. Proses pembuatannya masih menggunakan metode turun-temurun, dimana nira dipanaskan perlahan dalam wajan besar hingga mengental dan membentuk gula batok yang wangi dan beraroma khas. Gula merah ini dikenal memiliki rasa manis alami yang tidak terlalu tajam, dengan sentuhan aroma kayu bakar yang khas. Selain digunakan sebagai pemanis alami dalam masakan dan minuman, gula merah Cidugaleun juga dipercaya memiliki nilai ekonomi tinggi dan kini mulai dipasarkan sebagai produk unggulan desa dengan kemasan menarik dan higienis.",
    lokasi: "Kampung Nanggerang",
  },
  {
    id: 6,
    nama: "UMKM Ng'Gayem",
    gambar: "/image/Nggayem.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Keripik Ng'Gayem adalah camilan khas Cidugaleun yang terbuat dari umbi gayam, sejenis tanaman akar yang tumbuh liar di lahan marginal dan kini dibudidayakan secara teratur. Setelah diolah dengan cara diiris tipis, digoreng garing, dan diberi bumbu rempah alami, keripik ini memiliki tekstur renyah dan rasa gurih yang unik. Namanya yang unik, Ng'Gayem, menjadi ciri khas sekaligus daya tarik tersendiri bagi wisatawan. Dikemas secara modern namun tetap mempertahankan cita rasa tradisional, keripik ini tidak hanya lezat, tetapi juga bernilai tinggi sebagai simbol inovasi pangan lokal berbasis kearifan budaya.",
    lokasi: "Dusun Cisereh",
  },
  {
    id: 7,
    nama: "UMKM Milkap",
    gambar: "/image/milkap.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Susu Milkap adalah produk susu segar yang dihasilkan dari peternakan kambing perah rakyat di Desa Cidugaleun. Dengan pengolahan higienis dan proses pasteurisasi sederhana, susu ini diproduksi oleh kelompok peternak yang tergabung dalam koperasi lokal. Susu Milkap dikenal memiliki rasa yang lembut, tidak terlalu amis, dan kaya akan nutrisi seperti protein dan kalsium. Produk ini hadir dalam berbagai varian, mulai dari susu murni hingga rasa coklat dan madu, menjadikannya favorit keluarga. Selain sebagai minuman sehat, Susu Milkap juga menjadi ikon pengembangan ekonomi berbasis peternakan di desa ini.",
    lokasi: "Dusun Cipinang",
  },
  {
    id: 8,
    nama: "UMKM Pikcau",
    gambar: "/image/pikcau.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Pikcau merupakan camilan khas Cidugaleun yang terbuat dari pisang kepok lokal yang ditanam di pekarangan rumah warga. Keripik ini dibuat dengan proses pengirisan tipis, penggorengan dalam minyak bersih, dan perendaman bumbu alami seperti garam laut dan sedikit gula aren. Hasilnya adalah keripik dengan tekstur renyah, rasa manis-gurih yang seimbang, serta aroma khas yang menggugah selera. Dikemas dalam kemasan menarik dan ramah lingkungan, keripik ini menjadi oleh-oleh wajib bagi wisatawan yang berkunjung ke Cidugaleun.",
    lokasi: "Hutan Dusun Cipinang",
  },
  {
    id: 9,
    nama: "UMKM Buncis",
    gambar: "/image/buncis.jpeg",
    kategori: "UMKM",
    deskripsi:
      "Buncis dari Desa Cidugaleun ditanam di lahan pegunungan dengan suhu sejuk yang mendukung pertumbuhannya secara optimal. Hasil panen buncis di sini dikenal segar, renyah, dan bebas dari bahan kimia berlebih karena ditanam dengan pendekatan pertanian organik sederhana. Buncis Cidugaleun sering dijadikan bahan masakan sehari-hari, mulai dari tumisan, sup, hingga campuran salad, karena kualitasnya yang unggul dan kandungan gizinya yang tinggi. Para petani setempat juga mulai mengemas buncis segar dalam bentuk produk siap olah untuk pasar modern, menjadikannya salah satu komoditas unggulan yang mendukung ketahanan pangan dan kesejahteraan petani di desa.",
    lokasi: "Dusun Cisereh",
  },

  // --- Wisata (3 total) ---
  {
    id: 10,
    nama: "Wisata Curug Ciparay",
    gambar: "/image/curug.jpeg",
    kategori: "Wisata",
    deskripsi:
      "Curug ciparay memiliki dua aliran air terjun dengan ketinggian masing masing 55 m dan 75 m sehingga sering di sebut curug kembar. Air terjun ini di kelilingi oleh pepohonan yang lebat dan tebing batu, sehingga membuat suasana yang alami dan menenangkan. Dan di bawah nya terdapat kolam yang dangkal sehingga tempat nya ideal untuk bermain air atau berendam sambil menikmati alam.",
    lokasi: "Hutan Lereng Gunung",
  },
  {
    id: 11,
    nama: "Wisata Curug Payung",
    gambar: "/image/curug.jpeg",
    kategori: "Wisata",
    deskripsi:
      "Desa Cidugaleun memiliki destinasi wisata alam yang menarik, salah satunya adalah Curug Payung. Terletak di Kampung Pasir Pari, curug ini menawarkan pesona alam yang asri dengan aliran air terjun yang segar dikelilingi pepohonan rindang. Akses menuju lokasi cukup mudah, membuatnya menjadi daya tarik tersendiri bagi wisatawan yang ingin menikmati suasana pedesaan yang masih alami dan jauh dari hiruk-pikuk perkotaan. Di kawasan Curug Payung, pengunjung tidak hanya bisa menikmati keindahan air terjun, tetapi juga dapat menjelajahi berbagai perkebunan yang dikelola secara lestari, seperti kebun kopi, tanaman cabe rawit, serta lahan pertanian lainnya. Nantinya, akan ada program edukasi dari pembina wisata yang memberikan penjelasan lengkap mulai dari proses penanaman, pemeliharaan, pemilahan, hingga pemanfaatan hasil pertanian secara langsung. Selain itu, untuk menambah kenyamanan dan daya tarik, akan dibangun fasilitas kolam renang yang bisa dinikmati oleh pengunjung dari berbagai usia.",
    lokasi: "Kampung Nanggerang",
  },
  {
    id: 12,
    nama: "Wisata Perkemahan",
    gambar: "/image/kemah.jpeg",
    kategori: "Wisata",
    deskripsi:
      "Area edukasi pertanian untuk anak-anak dan pelajar. Bisa panen sayur, memberi makan ternak, dan belajar kompos. Program kerja sama dengan sekolah dan komunitas lingkungan. Fasilitas outbond dan area piknik tersedia.",
    lokasi: "Dusun Cipinang",
  },
];

// ---------- Icon helper ----------
const KategoriIcon = ({ kategori }: { kategori: string }) => {
  switch (kategori) {
    case "Pertanian":
      return <Leaf className="w-5 h-5 text-green-600" />;
    case "Kerajinan":
      return <Palette className="w-5 h-5 text-orange-600" />;
    case "Wisata":
      return <Camera className="w-5 h-5 text-blue-600" />;
    case "UMKM":
      return <Sparkles className="w-5 h-5 text-purple-600" />;
    default:
      return <Sparkles className="w-5 h-5 text-gray-600" />;
  }
};

// ---------- Hook debounce ----------
function useDebounce<T>(value: T, delay = 200): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function PotensiDesa() {
  const [kategori, setKategori] = useState<string>("Semua");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  // Urutan kategori: Pertanian → Kerajinan → UMKM → Wisata
  const kategoriList = ["Semua", "Pertanian", "Kerajinan", "UMKM", "Wisata"];

  const debouncedKategori = useDebounce(kategori, 150);
  const dataFiltered =
    debouncedKategori === "Semua"
      ? dataPotensi
      : dataPotensi.filter((item) => item.kategori === debouncedKategori);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative h-[500px] w-full overflow-hidden pt-16"
        aria-label="Potensi Desa Cidugaleun"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-60 scale-110 transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: "url('/image/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
          <div
            className={`transform transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              🌿 Potensi Desa Cidugaleun
            </h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-95 leading-relaxed">
              Alam, budaya, dan kreativitas warga yang menjadi kekuatan kami
            </p>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 text-white/60 text-sm">
          📍 Jawa Barat, Indonesia
        </div>
      </div>

      {/* Filter Kategori */}
      <section
        className={`px-6 py-8 bg-white/80 backdrop-blur-md border-b border-green-100 transition-all duration-1000 transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-5 justify-center">
          <Filter className="text-teal-600" size={20} />
          <span className="font-semibold text-gray-800 text-base">
            Jelajahi Potensi
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {kategoriList.map((kat, index) => (
            <button
              key={kat}
              onClick={() => setKategori(kat)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm ${
                kategori === kat
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white/70 text-teal-700 hover:bg-teal-50 border border-teal-200"
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      {/* Daftar Potensi */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
          <Sparkles className="text-yellow-500 animate-spin-slow" /> 
          Potensi Unggulan Desa
        </h2>

        {dataFiltered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {dataFiltered.map((item, index) => (
              <article
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 transform cursor-pointer ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="md:flex">
                  {/* Gambar (1:1 aspect ratio) */}
                  <div className="md:w-1/3 relative aspect-square overflow-hidden">
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Konten */}
                  <div className="md:w-2/3 p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <KategoriIcon kategori={item.kategori} />
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${
                          item.kategori === "Pertanian"
                            ? "bg-green-100 text-green-700"
                            : item.kategori === "Kerajinan"
                            ? "bg-orange-100 text-orange-700"
                            : item.kategori === "Wisata"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {item.kategori}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                      {item.nama}
                    </h3>

                    <p
                      className={`mt-4 text-gray-600 leading-relaxed text-justify ${
                        expanded[item.id] ? "" : "line-clamp-3"
                      }`}
                    >
                      {item.deskripsi}
                    </p>

                    {!expanded[item.id] && (
                      <span className="inline-block mt-3 text-teal-600 text-sm font-medium hover:underline">
                        Baca selengkapnya →
                      </span>
                    )}

                    {item.lokasi && (
                      <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        <MapPin size={16} />
                        <span>{item.lokasi}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Tidak ada potensi di kategori ini.</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setKategori("Semua");
              }}
              className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition font-medium"
            >
              Lihat Semua Potensi
            </button>
          </div>
        )}
      </section>

      {/* Spacer */}
      <div className="h-20" />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl font-semibold z-50 hover:scale-105 hover:shadow-3xl transition-all duration-300 group"
      >
        <img src="/image/wa.png" alt="WhatsApp" className="w-6 h-6 drop-shadow" />
        <span className="whitespace-nowrap group-hover:scale-105 transition-transform">
          Butuh Bantuan?
        </span>
      </a>

      {/* Animasi Tambahan */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        .hover\\:scale-\\[1\\.01\\]:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}