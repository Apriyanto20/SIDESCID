// pages/profil/aparatur.tsx
import Layout from "../../components/Layout";

const aparaturData = [
  {
    nama: "Asep Saepudin",
    jabatan: "Kepala Desa",
    foto: "/images/longsor-cidugaleun.jpg",
  },
  {
    nama: "Ibu Siti Rohmah",
    jabatan: "Sekretaris Desa",
    foto: "/images/longsor-cidugaleun.jpg",
  },
  {
    nama: "Dedi Rukmana",
    jabatan: "Kaur Pemerintahan",
    foto: "/images/longsor-cidugaleun.jpg",
  },
  // Tambahkan data aparatur lainnya di sini
];

export default function AparaturDesa() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-16 pt-35">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
          Struktur Aparatur Desa Cidugaleun
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aparaturData.map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={person.foto}
                alt={person.nama}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{person.nama}</h3>
              <p className="text-teal-600">{person.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
