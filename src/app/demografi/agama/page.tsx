"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function AgamaPage() {
  // Data per dusun
  const dusunData = [
    { dusun: "Cidugaleun", islam: 1799 },
    { dusun: "Pasirpari", islam: 1178 },
    { dusun: "Panganten", islam: 1895 },
    { dusun: "Cisolok", islam: 1506 },
  ];

  // Warna untuk batang chart
  const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

  // Hitung total keseluruhan
  const totalKeseluruhan = dusunData.reduce((sum, item) => sum + item.islam, 0);

  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Komposisi Agama Warga Desa Cidugaleun
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Distribusi penduduk Desa Cidugaleun berdasarkan agama yang dianut per dusun
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
              Data Agama per Dusun Desa Cidugaleun 
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-center">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Dusun
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Islam
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Kristen
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Budha
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Hindu
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Konghucu
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    Jumlah
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {dusunData.map((item) => (
                  <tr key={item.dusun} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {item.dusun}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.islam.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">
                      {item.islam.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {totalKeseluruhan.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {totalKeseluruhan.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Grafik Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
            Grafik Jumlah Penduduk per Dusun
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dusunData} layout="vertical" margin={{ left: 40 }}>
              <XAxis type="number" allowDecimals={false} />
              <YAxis dataKey="dusun" type="category" />
              <Tooltip formatter={(value) => `${value.toLocaleString()} orang`} />
              <Bar dataKey="islam" radius={[0, 6, 6, 0]}>
                {dusunData.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 max-w-6xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Informasi Data</h3>
            <p className="text-blue-700">
              Semua warga di Desa Cidugaleun saat ini tercatat beragama Islam.
              Jumlah keseluruhan penduduk adalah {totalKeseluruhan.toLocaleString()} orang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
