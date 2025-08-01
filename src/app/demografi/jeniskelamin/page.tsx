"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Laki-laki", value: 1200 },
  { name: "Perempuan", value: 1100 },
];

const COLORS = ["#2563eb", "#60a5fa"]; // More vibrant blue palette

export default function JenisKelaminPage() {
  const totalPenduduk = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Profil Demografi Gender
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Analisis komprehensif distribusi jenis kelamin warga Desa Cidugaleun
          </p>
          <div className="mt-6 h-1 w-24 bg-blue-300 bg-opacity-50 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Card - Modern Glassmorphism Effect */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 backdrop-blur-sm bg-opacity-80">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                Distribusi Gender
              </h2>
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {totalPenduduk.toLocaleString()} Total
              </span>
            </div>
            
            <div className="h-80 w-full relative">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} orang`, 'Jumlah']}
                    contentStyle={{
                      borderRadius: '12px',
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      background: 'rgba(255,255,255,0.95)',
                    }}
                  />
                  <Legend 
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ paddingTop: '30px' }}
                    formatter={(value) => <span className="text-gray-600 text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full bg-blue-100 opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Table Card - Modern Design */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                Data Statistik
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-blue-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Gender
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Jumlah
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Komposisi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {data.map((item) => (
                    <tr key={item.name} className="hover:bg-blue-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-3" 
                            style={{ backgroundColor: COLORS[data.findIndex(d => d.name === item.name) % COLORS.length] }}
                          ></div>
                          <span className="font-medium text-gray-800">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {item.value.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="h-2 rounded-full" 
                              style={{ 
                                width: `${(item.value / totalPenduduk) * 100}%`,
                                backgroundColor: COLORS[data.findIndex(d => d.name === item.name) % COLORS.length]
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">
                            {((item.value / totalPenduduk) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-blue-50">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">{totalPenduduk.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">100%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Info Card - Modern Design */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tentang Data Ini</h3>
              <p className="text-gray-600">
                Data demografi gender ini diperbarui secara berkala berdasarkan registrasi kependudukan. 
                Rasio gender saat ini menunjukkan {data[0].name} {data[0].value.toLocaleString()} orang 
                ({((data[0].value / totalPenduduk) * 100).toFixed(1)}%) dan {data[1].name} {data[1].value.toLocaleString()} orang 
                ({((data[1].value / totalPenduduk) * 100).toFixed(1)}%).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}