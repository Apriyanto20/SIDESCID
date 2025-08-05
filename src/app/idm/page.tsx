"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

// Data from Desa Cidugaleun profile
const villageProfile = {
  name: "Cidugaleun",
  kecamatan: "Cigalontang",
  kabupaten: "Tasikmalaya",
  provinsi: "Jawa Barat",
  kepalaDesa: "IKEU FIRMANSYAH",
  luasWilayah: "1.179,37 Ha",
  penduduk: 6378,
  tahunBerdiri: 1910,
  visi: "Berlandaskan Iman dan Taqwa Mewujudkan Masyarakat Cidugaleun yang Maju dan Berkualitas",
  misi: [
    "Meningkatkan sumber daya manusia yang berakhlakul karimah dan berkualitas",
    "Meningkatkan pemerintah yang baik, bersih dan professional",
    "Meningkatkan koordinasi dengan pemerintah pusat dan kabupaten"
  ]
};

const dataPie = [
  { name: "Sosial", value: 0.65, color: "#3b82f6" },
  { name: "Ekonomi", value: 0.58, color: "#f59e0b" },
  { name: "Lingkungan", value: 0.62, color: "#10b981" },
];

const dataBar = [
  { indikator: "Pendidikan", sosial: 0.7, ekonomi: 0, lingkungan: 0 },
  { indikator: "Kesehatan", sosial: 0.6, ekonomi: 0, lingkungan: 0 },
  { indikator: "Kegiatan Sosial", sosial: 0.65, ekonomi: 0, lingkungan: 0 },
  { indikator: "Mata Pencaharian", sosial: 0, ekonomi: 0.55, lingkungan: 0 },
  { indikator: "Akses Pasar", sosial: 0, ekonomi: 0.6, lingkungan: 0 },
  { indikator: "Listrik & Air", sosial: 0, ekonomi: 0.58, lingkungan: 0 },
  { indikator: "Air Bersih", sosial: 0, ekonomi: 0, lingkungan: 0.62 },
  { indikator: "Sanitasi", sosial: 0, ekonomi: 0, lingkungan: 0.6 },
  { indikator: "Pengelolaan Sampah", sosial: 0, ekonomi: 0, lingkungan: 0.65 },
];

const dataIndikator = [
  {
    indikator: "Akses Pendidikan",
    skor: 0.68,
    keterangan: "Menengah",
    kegiatan: "Renovasi PAUD/SD, beasiswa siswa kurang mampu",
    nilai: "+0.05",
    pusat: "✔",
    provinsi: "✔",
    kabupaten: "✔",
    desa: "✔",
    csr: "-",
    lainnya: "-"
  },
  {
    indikator: "Pelayanan Kesehatan",
    skor: 0.62,
    keterangan: "Menengah",
    kegiatan: "Peningkatan Posyandu, pelatihan kader",
    nilai: "+0.04",
    pusat: "✔",
    provinsi: "✔",
    kabupaten: "✔",
    desa: "-",
    csr: "✔",
    lainnya: "-"
  },
  {
    indikator: "Infrastruktur Air Bersih",
    skor: 0.60,
    keterangan: "Menengah",
    kegiatan: "Pembangunan sumur bor, instalasi pipa air",
    nilai: "+0.03",
    pusat: "-",
    provinsi: "-",
    kabupaten: "✔",
    desa: "✔",
    csr: "-",
    lainnya: "-"
  },
  {
    indikator: "Sanitasi",
    skor: 0.63,
    keterangan: "Menengah",
    kegiatan: "Fasilitasi jamban sehat & edukasi kebersihan",
    nilai: "+0.03",
    pusat: "-",
    provinsi: "-",
    kabupaten: "✔",
    desa: "✔",
    csr: "-",
    lainnya: "-"
  },
  {
    indikator: "Pengelolaan Sampah",
    skor: 0.66,
    keterangan: "Tinggi",
    kegiatan: "Bank sampah keliling dan pelatihan kompos",
    nilai: "+0.04",
    pusat: "-",
    provinsi: "-",
    kabupaten: "✔",
    desa: "✔",
    csr: "✔",
    lainnya: "-"
  },
];

export default function IndeksDesaPage() {
  const totalIDM = (dataPie.reduce((sum, d) => sum + d.value, 0) / dataPie.length).toFixed(2);
  const statusDesa = getStatusDesa(Number(totalIDM));

  const renderLabel = ({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(1)}%`;

  function getStatusDesa(score: number) {
    if (score >= 0.7) return { text: "Mandiri", color: "#10b981" };
    if (score >= 0.6) return { text: "Maju", color: "#3b82f6" };
    if (score >= 0.5) return { text: "Berkembang", color: "#f59e0b" };
    return { text: "Tertinggal", color: "#ef4444" };
  }

  function getStatusDescription(status: string) {
    switch(status) {
      case 'Mandiri':
        return 'Desa dengan ketahanan sosial, ekonomi, dan lingkungan yang sangat kuat';
      case 'Maju':
        return 'Desa dengan ketahanan yang baik di semua dimensi pembangunan';
      case 'Berkembang':
        return 'Desa yang sedang dalam proses penguatan ketahanan';
      default:
        return 'Desa yang membutuhkan intervensi pembangunan khusus';
    }
  }

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Indeks Desa Membangun</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pengukuran ketahanan sosial, ekonomi, dan lingkungan Desa {villageProfile.name}
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Village Profile Summary */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profil Desa {villageProfile.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Kecamatan</h3>
                <p className="text-lg">{villageProfile.kecamatan}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Kabupaten</h3>
                <p className="text-lg">{villageProfile.kabupaten}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Kepala Desa</h3>
                <p className="text-lg">{villageProfile.kepalaDesa}</p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Luas Wilayah</h3>
                <p className="text-lg">{villageProfile.luasWilayah}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Jumlah Penduduk</h3>
                <p className="text-lg">{villageProfile.penduduk.toLocaleString()} jiwa</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Tahun Berdiri</h3>
                <p className="text-lg">{villageProfile.tahunBerdiri}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-8">
        <div 
          className="rounded-2xl p-6 text-center shadow-lg"
          style={{
            background: statusDesa.color,
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{statusDesa.text}</h2>
          <p className="text-xl opacity-90">{getStatusDescription(statusDesa.text)}</p>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Visi Misi Desa</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-blue-600 mb-2">Visi</h3>
            <p className="text-gray-700">"{villageProfile.visi}"</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-2">Misi</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {villageProfile.misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-4 space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total IDM</h3>
            <p className="text-2xl font-bold text-blue-600">{totalIDM}</p>
            <p className="text-xs text-gray-500 mt-1">Skor Komposit</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Status Desa</h3>
            <p className="text-2xl font-bold" style={{ color: statusDesa.color }}>
              Desa {statusDesa.text}
            </p>
            <p className="text-xs text-gray-500 mt-1">Klasifikasi Kemajuan</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Dimensi Tertinggi</h3>
            <p className="text-2xl font-bold text-blue-600">Sosial</p>
            <p className="text-xs text-gray-500 mt-1">0.65</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Komposisi Indeks</h2>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                Skor Rata-rata: {totalIDM}
              </span>
            </div>
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                    label={renderLabel}
                    labelLine={false}
                    animationDuration={1500}
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Skor"]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      background: "rgba(255,255,255,0.98)",
                    }}
                    labelStyle={{ fontWeight: 600, color: '#1E40AF' }}
                  />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center" 
                    wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Indikator Per Dimensi</h2>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                Skor 0-1
              </span>
            </div>
            <div className="h-80">
              <ResponsiveContainer>
                <BarChart data={dataBar}>
                  <XAxis dataKey="indikator" tick={{ fontSize: 12 }} tickMargin={10} />
                  <YAxis domain={[0, 1]} tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      background: 'rgba(255,255,255,0.98)',
                    }}
                    formatter={(value: number) => [`${value.toFixed(2)}`, 'Skor']}
                    labelStyle={{ fontWeight: 600, color: '#1E40AF' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '13px' }} />
                  <Bar dataKey="sosial" fill="#3b82f6" name="Sosial" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="ekonomi" fill="#f59e0b" name="Ekonomi" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="lingkungan" fill="#10b981" name="Lingkungan" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Ringkasan Indeks */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="p-6 bg-blue-600">
            <h2 className="text-lg font-semibold text-white">Ringkasan Indeks</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Dimensi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Skor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Kategori</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {dataPie.map((row) => (
                  <tr key={row.name} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: row.color }}></span>
                        {row.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.value.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.value >= 0.6 ? "Tinggi" : row.value >= 0.5 ? "Menengah" : "Rendah"}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-semibold">
                  <td className="px-6 py-4 text-sm text-blue-700">Total IDM</td>
                  <td className="px-6 py-4 text-sm text-blue-700">{totalIDM}</td>
                  <td className="px-6 py-4 text-sm" style={{ color: statusDesa.color }}>
                    Desa {statusDesa.text}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabel Indikator IDM Lengkap */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mt-8">
          <div className="p-6 bg-blue-600">
            <h2 className="text-lg font-semibold text-white">Indikator IDM Lengkap</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-sm">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Indikator IDM</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Skor</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Keterangan</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Kegiatan</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">+Nilai</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Pusat</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Prov</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Kab</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Desa</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">CSR</th>
                  <th className="px-4 py-2 text-left text-blue-700 font-semibold">Lainnya</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dataIndikator.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50">
                    <td className="px-4 py-2">{row.indikator}</td>
                    <td className="px-4 py-2">{row.skor.toFixed(2)}</td>
                    <td className="px-4 py-2">{row.keterangan}</td>
                    <td className="px-4 py-2">{row.kegiatan}</td>
                    <td className="px-4 py-2">{row.nilai}</td>
                    <td className="px-4 py-2 text-center">{row.pusat}</td>
                    <td className="px-4 py-2 text-center">{row.provinsi}</td>
                    <td className="px-4 py-2 text-center">{row.kabupaten}</td>
                    <td className="px-4 py-2 text-center">{row.desa}</td>
                    <td className="px-4 py-2 text-center">{row.csr}</td>
                    <td className="px-4 py-2 text-center">{row.lainnya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Klasifikasi IDM</h3>
              <p className="text-blue-700 text-sm">
                Indeks Desa Membangun (IDM) mengukur ketahanan desa berdasarkan tiga dimensi:
                <br />• <strong>0.00–0.49</strong> = Desa Tertinggal (Merah)
                <br />• <strong>0.50–0.59</strong> = Desa Berkembang (Kuning)
                <br />• <strong>0.60–0.69</strong> = Desa Maju (Biru)
                <br />• <strong>0.70–1.00</strong> = Desa Mandiri (Hijau)
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Desa {villageProfile.name} - Sistem Informasi IDM
      </footer>
    </div>
  );
}