"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import type { PieLabelRenderProps } from "recharts";

const data = [
  { name: "Laki-laki", value: 1200, color: "#3b82f6" },
  { name: "Perempuan", value: 1100, color: "#93c5fd" },
];

export default function JenisKelaminPage() {
  const totalPenduduk = data.reduce((sum, item) => sum + item.value, 0);

  // ✅ Label pie chart aman tanpa error percent
  const renderLabel = ({ name, percent }: PieLabelRenderProps) =>
    `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`;

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Distribusi Jenis Kelamin</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Komposisi penduduk Desa Cidugaleun berdasarkan gender
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
                Data Statistik
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                      Jenis Kelamin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                      Jumlah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                      Persentase
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.name} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-3 ${
                              item.name === "Laki-laki" ? "bg-blue-600" : "bg-blue-300"
                            }`}
                          ></span>
                          <span className="font-medium text-gray-800">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.value.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-700">
                        {((item.value / totalPenduduk) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-blue-50">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-800">Total</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {totalPenduduk.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">100%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                Visualisasi Data
              </h2>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {totalPenduduk.toLocaleString()} Total
              </span>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={renderLabel}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
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
                Rasio gender Desa Cidugaleun menunjukkan {data[0].name}{" "}
                {((data[0].value / totalPenduduk) * 100).toFixed(1)}% dan {data[1].name}{" "}
                {((data[1].value / totalPenduduk) * 100).toFixed(1)}% dari total penduduk.
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
