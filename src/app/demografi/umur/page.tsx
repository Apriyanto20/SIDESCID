"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "0-5", value: 150 },
  { name: "6-12", value: 220 },
  { name: "13-17", value: 180 },
  { name: "18-25", value: 350 },
  { name: "26-40", value: 420 },
  { name: "41-60", value: 300 },
  { name: "61+", value: 120 },
];

export default function UmurPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Data Penduduk Berdasarkan Umur</h1>
      <p className="text-gray-600 mb-6">
        Halaman ini menampilkan jumlah penduduk desa berdasarkan kelompok umur.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Kelompok Umur</th>
                <th className="px-4 py-2 text-left">Jumlah</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border-b">{row.name}</td>
                  <td className="px-4 py-2 border-b">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grafik Batang */}
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#14b8a6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
