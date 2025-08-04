"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";

export default function JenisKelaminPage() {
  // Data per dusun
  const dusunData = [
    { dusun: "Cidugaleun", laki: 948, perempuan: 851 },
    { dusun: "Pasirpari", laki: 603, perempuan: 575 },
    { dusun: "Panganten", laki: 983, perempuan: 739 },
    { dusun: "Cisolok", laki: 767, perempuan: 739 },
  ];

  // Hitung total
  const totalLaki = dusunData.reduce((sum, item) => sum + item.laki, 0);
  const totalPerempuan = dusunData.reduce((sum, item) => sum + item.perempuan, 0);
  const totalPenduduk = totalLaki + totalPerempuan;

  // Data untuk Pie Chart
  const chartData = [
    { name: "Laki-laki", value: totalLaki, color: "#3b82f6" },
    { name: "Perempuan", value: totalPerempuan, color: "#93c5fd" },
  ];

  // Data untuk Bar Chart
  const barData = dusunData.map((item) => ({
    name: item.dusun,
    Laki: item.laki,
    Perempuan: item.perempuan,
  }));

  // Label pie chart
  const renderLabel = ({ name, percent }: PieLabelRenderProps) =>
    `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Distribusi Jenis Kelamin</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Komposisi penduduk Desa Cidugaleun berdasarkan gender per dusun
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Table Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                Data Statistik per Dusun
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-center">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-blue-600 uppercase">
                      Dusun
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-blue-600 uppercase">
                      Laki-laki
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-blue-600 uppercase">
                      Perempuan
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-blue-600 uppercase">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dusunData.map((item) => (
                    <tr key={item.dusun} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{item.dusun}</td>
                      <td className="px-6 py-4 text-gray-700">{item.laki.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-700">{item.perempuan.toLocaleString()}</td>
                      <td className="px-6 py-4 font-semibold text-gray-800">
                        {(item.laki + item.perempuan).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-semibold">
                    <td className="px-6 py-4 text-gray-800">Total</td>
                    <td className="px-6 py-4 text-gray-800">{totalLaki.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-800">{totalPerempuan.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-800">{totalPenduduk.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pie Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                Visualisasi Gender
              </h2>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {totalPenduduk.toLocaleString()} Total
              </span>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={renderLabel}
                    labelLine={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} orang`, "Jumlah"]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      background: "rgba(255,255,255,0.95)",
                    }}
                  />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: "20px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              * Distribusi gender penduduk Desa Cidugaleun
            </div>
          </div>
        </div>

        {/* Bar Chart Per Dusun */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
            Perbandingan Gender per Dusun
          </h2>
          <div className="h-96 w-full">
            <ResponsiveContainer>
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Laki" fill="#3b82f6" />
                <Bar dataKey="Perempuan" fill="#93c5fd" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Komposisi Gender</h3>
              <p className="text-blue-700">
                Rasio gender Desa Cidugaleun menunjukkan Laki-laki{" "}
                {((totalLaki / totalPenduduk) * 100).toFixed(1)}% dan Perempuan{" "}
                {((totalPerempuan / totalPenduduk) * 100).toFixed(1)}% dari total penduduk.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Desa Cidugaleun - Sistem Informasi Demografi
      </footer>
    </div>
  );
}
