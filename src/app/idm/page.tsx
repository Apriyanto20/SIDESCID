"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  PieLabelRenderProps
} from "recharts";

// Data IDM per dimensi
const data = [
  { kategori: "Sosial", nilai: 0.78, color: "#3b82f6" },
  { kategori: "Ekonomi", nilai: 0.65, color: "#10b981" },
  { kategori: "Lingkungan", nilai: 0.72, color: "#6366f1" },
];

// Hitung skor rata-rata dan status desa
const totalSkor = (data.reduce((acc, cur) => acc + cur.nilai, 0) / data.length).toFixed(2);
const statusDesa =
  parseFloat(totalSkor) >= 0.75
    ? "Maju"
    : parseFloat(totalSkor) >= 0.5
    ? "Berkembang"
    : "Tertinggal";

const statusColor = {
  Maju: "bg-green-100 text-green-800",
  Berkembang: "bg-blue-100 text-blue-800",
  Tertinggal: "bg-yellow-100 text-yellow-800",
};

// ✅ Label Pie Chart aman tanpa error percent
const renderLabel = ({ name, percent }: PieLabelRenderProps) =>
  `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`;

export default function IDMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Modern */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Indeks Membangun Desa (IDM)
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Analisis komprehensif pembangunan desa berdasarkan tiga dimensi utama
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 -mt-10">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-700">{item.kategori}</h3>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-800">
                  {item.nilai.toFixed(2)}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${item.nilai * 100}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Desa */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Status Pembangunan Desa
              </h2>
              <p className="text-gray-600">
                Berdasarkan perhitungan Indeks Membangun Desa
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span
                className={`px-4 py-2 rounded-full text-lg font-semibold ${
                  statusColor[statusDesa as keyof typeof statusColor]
                }`}
              >
                {statusDesa}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-700">
              Skor rata-rata IDM: <span className="font-bold">{totalSkor}</span> / 1.00
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                style={{ width: `${parseFloat(totalSkor) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Pie Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Komposisi IDM per Dimensi
            </h2>
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="nilai"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    label={renderLabel}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: number) => val.toFixed(2)} />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ paddingTop: "20px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Perbandingan Nilai Dimensi
            </h2>
            <div className="h-80">
              <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="kategori" tick={{ fill: "#4b5563" }} />
                  <YAxis domain={[0, 1]} tick={{ fill: "#4b5563" }} />
                  <Tooltip formatter={(val: number) => val.toFixed(2)} />
                  <Bar dataKey="nilai" radius={[6, 6, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Detail Nilai IDM</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                    Dimensi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                    Nilai
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase">
                    Persentase
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-gray-800">{item.kategori}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.nilai.toFixed(2)}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {(item.nilai * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 text-gray-800">Rata-rata</td>
                  <td className="px-6 py-4 text-gray-800">{totalSkor}</td>
                  <td className="px-6 py-4 text-gray-800">
                    {(parseFloat(totalSkor) * 100).toFixed(1)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Desa Cidugaleun - Sistem Informasi Pembangunan Desa
      </footer>
    </div>
  );
}
