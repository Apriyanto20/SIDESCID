"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, PieLabelRenderProps } from "recharts";

const data = [
  { name: "Laki-laki", value: 1200 },
  { name: "Perempuan", value: 1100 },
];

const COLORS = ["#14b8a6", "#f43f5e"];

// ✅ Pakai tipe resmi dari Recharts
const renderCustomizedLabel = ({ percent, x, y }: PieLabelRenderProps) => (
  <text
    x={x}
    y={y}
    fill="white"
    textAnchor="middle"
    dominantBaseline="central"
    fontSize={12}
  >
    {percent ? `${(percent * 100).toFixed(1)}%` : ""}
  </text>
);

export default function JenisKelaminPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Data Jenis Kelamin</h1>
      <p className="text-gray-600 mb-6">
        Halaman ini menampilkan informasi jumlah penduduk berdasarkan jenis kelamin di desa.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Jenis Kelamin</th>
                <th className="px-4 py-2 text-left">Jumlah</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border-b">{row.name}</td>
                  <td className="px-4 py-2 border-b">{row.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grafik Pie */}
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={renderCustomizedLabel} // ✅ label dengan tipe aman
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
