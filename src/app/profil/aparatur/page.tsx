// pages/profil/aparatur.tsx

const aparaturData = [
  {
    nama: "IKEU FIRMANSYAH",
    jabatan: "KEPALA DESA",
    foto: "/image/logo.png",
  },
  {
    nama: "ERMA HERMAWAN, S.Pd",
    jabatan: "SEKDES",
    foto: "/image/aparatur/erma.jpg",
  },
  {
    nama: "WAHYU HIDAYAT ",
    jabatan: "KAUR KEUANGAN",
    foto: "/image/aparatur/wahyu.jpg",
  },
  {
    nama: "CUCU SRI WAHYUNI, A.Mk",
    jabatan: "KAUR T U",
    foto: "/image/aparatur/cucu.jpg",
  },
   {
    nama: "CEPI IMAM FAUZI",
    jabatan: "KAUR PERENCANAAN",
    foto: "/image/aparatur/cepi.jpg",
  },
   {
    nama: "WARMAN",
    jabatan: "KASI PEMERINTAHAN",
    foto: "/image/aparatur/warman.jpg",
  },
   {
    nama: "BUDIMAN TORO, S.Pd",
    jabatan: "KASI KESRA",
    foto: "/image/aparatur/kesra.jpg",
  },
   {
    nama: "AEP SAEPUDIN",
    jabatan: "KASI PELAYANAN",
    foto: "/image/aparatur/aep.jpg",
  },
   {
    nama: "ENGKUS KUSNADI",
    jabatan: "KEPALA WILAYAH 001",
    foto: "/image/aparatur/engkus.jpg",
  },
   {
    nama: "NUNU",
    jabatan: "KEPALA WILAYAH 002",
    foto: "/image/aparatur/nunu.jpg",
  },
   {
    nama: "NANDANG HERMAWAN",
    jabatan: "KEPALA WILAYAH 003",
    foto: "/image/aparatur/nandang.jpg",
  },
   {
    nama: "DEDE PUAD",
    jabatan: "KEPALA WILAYAH 004",
    foto: "/image/aparatur/dede.jpg",
  },
   {
    nama: "ANIS SURYANI",
    jabatan: "STAF KEUANGAN",
    foto: "/image/aparatur/anis.jpg",
  },
   {
    nama: "LUTFI WIJAYA KUSUMAH",
    jabatan: "STAFF",
    foto: "/image/aparatur/lutfi.jpg",
  },
  // Tambahkan data aparatur lainnya di sini
];

export default function AparaturDesa() {
  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover px-4 py-10 md:px-16 pt-28"
      style={{ backgroundImage: "url('/image/bg-desa.jpg')" }} // ganti dengan gambar background desa kamu
    >
      {/* Lapisan transparan untuk keterbacaan teks */}
      <div className="bg-opacity-50 rounded-2xl p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center text-black mb-10 drop-shadow-lg">
          Struktur Aparatur Desa Cidugaleun
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aparaturData.map((person, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <img
                src={person.foto}
                alt={person.nama}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">{person.nama}</h3>
              <p className="text-teal-600 font-medium">{person.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
