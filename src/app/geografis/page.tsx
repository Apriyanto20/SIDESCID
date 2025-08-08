"use client";

import React, { useState } from "react";
import { PawPrint } from "lucide-react";
import {
    MountainIcon,
    SunIcon,
    TreesIcon,
    GemIcon,
    MapPinIcon,
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function GeografisPage() {
    const [selectedMenu, setSelectedMenu] = useState<string | null>("luasWilayah");

    const desaData = [
        { desa: "Sirnagalih", luas: 1425.49, tinggi: 700, persen: 11.28 },
        { desa: "Kersamaju", luas: 856.51, tinggi: 900, persen: 6.78 },
        { desa: "Tanjungkarang", luas: 1096.55, tinggi: 700, persen: 8.68 },
        { desa: "Nangtang", luas: 920.13, tinggi: 700, persen: 7.28 },
        { desa: "Pusparaja", luas: 734.4, tinggi: 700, persen: 5.81 },
        { desa: "Jayapura", luas: 591.37, tinggi: 700, persen: 4.68 },
        { desa: "Lengkongjaya", luas: 532.6, tinggi: 700, persen: 4.21 },
        { desa: "Tenjonagara", luas: 691.93, tinggi: 700, persen: 5.48 },
        { desa: "Nanggerang", luas: 289.04, tinggi: 650, persen: 2.28 },
        { desa: "Sukamanah", luas: 302.84, tinggi: 600, persen: 2.39 },
        { desa: "Sirnaputra", luas: 694.87, tinggi: 700, persen: 5.5 },
        { desa: "Sirnaraja", luas: 599.47, tinggi: 700, persen: 4.74 },
        { desa: "Cigalontang", luas: 537.6, tinggi: 700, persen: 4.25 },
        { desa: "Puspamukti", luas: 890.1, tinggi: 700, persen: 7.04 },
        { desa: "Cidugaleun", luas: 1179.37, tinggi: 900, persen: 9.34 },
        { desa: "Parentas", luas: 1283.92, tinggi: 1100, persen: 10.16 },
    ];

    const mataPencaharianData = [
        { name: "PNS / POLRI / TNI", value: 43 },
        { name: "Karyawan", value: 136 },
        { name: "Buruh Harian / Tani", value: 1730 },
        { name: "Petani / Pekebun", value: 41 },
        { name: "Wiraswasta", value: 44 },
        { name: "Pelajar / Mahasiswa", value: 1238 },
        { name: "Belum / Tidak Bekerja", value: 1165 },
        { name: "Lainnya", value: 1371 },
    ];
    const peternakanData = [
        { jenis: "Sapi", pemilik: 8, populasi: 22 },
        { jenis: "Kerbau", pemilik: 27, populasi: 68 },
        { jenis: "Ayam kampung", pemilik: 1619, populasi: 7962 },
        { jenis: "Ayam boiler", pemilik: 12, populasi: 20639 },
        { jenis: "Bebek", pemilik: 15, populasi: 167 },
        { jenis: "Kambing", pemilik: 1541, populasi: 4693 },
        { jenis: "Domba", pemilik: 318, populasi: 1121 },
        { jenis: "Angsa", pemilik: 32, populasi: 62 },
    ];
    const COLORS = ["#10B981", "#22D3EE", "#818CF8", "#FBBF24", "#F97316", "#EC4899", "#A78BFA", "#34D399"];

    const menuItems = [
        { key: "luasWilayah", label: "Luas Wilayah", icon: MountainIcon },
        { key: "batasWilayah", label: "Batas Wilayah", icon: TreesIcon },
        { key: "maps", label: "Peta Lokasi", icon: MapPinIcon },
        { key: "mataPencarian", label: "Mata Pencaharian", icon: SunIcon },
        { key: "potensiPeternakan", label: "Potensi Peternakan", icon: TreesIcon },
        { key: "sumberDaya", label: "Sumber Daya", icon: GemIcon },
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case "luasWilayah":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="text-xl font-bold text-green-800 flex items-center gap-2">
                            <MountainIcon size={24} />
                            <span>Luas Daerah dan Ketinggian Desa</span>
                        </div>

                        <div className="overflow-x-auto border rounded-lg shadow-sm">
                            <table className="min-w-full text-sm text-left text-gray-800">
                                <thead className="bg-green-700 text-white">
                                    <tr>
                                        <th className="px-4 py-3">Desa</th>
                                        <th className="px-4 py-3">Luas (Ha)</th>
                                        <th className="px-4 py-3">Ketinggian</th>
                                        <th className="px-4 py-3">% Luas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {desaData.map((item, i) => (
                                        <tr key={i} className="even:bg-gray-50 hover:bg-green-50">
                                            <td className="px-4 py-2">{item.desa}</td>
                                            <td className="px-4 py-2">{item.luas}</td>
                                            <td className="px-4 py-2">{item.tinggi} m</td>
                                            <td className="px-4 py-2">{item.persen}%</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100 font-semibold">
                                        <td className="px-4 py-2">Total Kecamatan</td>
                                        <td className="px-4 py-2">12.626,19</td>
                                        <td className="px-4 py-2">–</td>
                                        <td className="px-4 py-2">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="h-96 mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={desaData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="desa" fontSize={10} angle={-45} interval={0} textAnchor="end" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="luas" fill="#34d399" name="Luas (Ha)" />
                                    <Bar dataKey="tinggi" fill="#60a5fa" name="Ketinggian (mdpl)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );

            case "batasWilayah":
                return (
                    <div className="space-y-3 animate-fade-in">
                        <h3 className="text-xl font-semibold text-green-800">Batas Wilayah</h3>
                        <ul className="text-gray-700 list-disc pl-6">
                            <li>Utara: Kab. Sariwangi</li>
                            <li>Timur: Kecamatan Mangunreja</li>
                            <li>Selatan: Kecamatan Salawu</li>
                            <li>Barat: Kecamatan Garut</li>
                        </ul>
                    </div>
                );

            case "maps":
                return (
                    <div className="animate-fade-in">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">Peta Lokasi</h3>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63387.8840631569!2d107.9337199699915!3d-7.246351322509149"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>
                );

            case "mataPencarian":
                return (
                    <div className="animate-fade-in space-y-6">
                        <h3 className="text-xl font-semibold text-green-800">Mata Pencaharian</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={mataPencaharianData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={130}
                                    innerRadius={50}
                                    paddingAngle={3}
                                    label={({ name, percent = 0 }) =>
                                        `${name} ${(percent * 100).toFixed(1)}%`
                                    }
                                >
                                    {mataPencaharianData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="#fff"
                                            strokeWidth={1.5}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                );

            case "potensiPeternakan":
                return (
                    <div className="animate-fade-in space-y-10">

                        {/* Judul */}
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full shadow-inner">
                                <PawPrint className="text-green-700" size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-green-800">Potensi Peternakan</h3>
                        </div>

                        {/* Tabel Modern */}
                        <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl shadow-xl overflow-x-auto transition-all duration-300">
                            <table className="min-w-full text-sm text-gray-800">
                                <thead>
                                    <tr className="bg-green-700 text-white">
                                        <th className="px-6 py-4 text-left">🐮 Jenis Ternak</th>
                                        <th className="px-6 py-4 text-left">👤 Pemilik</th>
                                        <th className="px-6 py-4 text-left">📊 Populasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {peternakanData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="even:bg-white odd:bg-green-50 hover:bg-green-100 transition"
                                        >
                                            <td className="px-6 py-3 font-medium">{item.jenis}</td>
                                            <td className="px-6 py-3">{item.pemilik.toLocaleString()}</td>
                                            <td className="px-6 py-3">{item.populasi.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Chart Stylish */}
                        <div className="rounded-2xl border border-gray-200 shadow-xl bg-white p-6 transition hover:shadow-2xl">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Visualisasi Grafik</h4>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={peternakanData}
                                    margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="4 4" />
                                    <XAxis dataKey="jenis" angle={-15} textAnchor="end" height={60} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="pemilik"
                                        fill="url(#pemilikGradient)"
                                        radius={[6, 6, 0, 0]}
                                        name="Jumlah Pemilik"
                                    />
                                    <Bar
                                        dataKey="populasi"
                                        fill="url(#populasiGradient)"
                                        radius={[6, 6, 0, 0]}
                                        name="Populasi Ternak"
                                    />

                                    <defs>
                                        <linearGradient id="pemilikGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4ade80" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#bbf7d0" stopOpacity={1} />
                                        </linearGradient>
                                        <linearGradient id="populasiGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#facc15" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#fef08a" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );


            case "sumberDaya":
                return (
                    <p className="text-gray-700 animate-fade-in">
                        Desa Cidugaleun memiliki potensi sumber daya alam seperti hasil bumi, air bersih,
                        dan tanah subur.
                    </p>
                );

            default:
                return null;
        }
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
                Letak Geografis Desa Cidugaleun
            </h1>

            <p className="text-gray-600 mb-10 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Kecamatan Cigalontang berada di Kabupaten Tasikmalaya dengan luas wilayah 12.626,19 Ha
                dan ketinggian rata-rata 700 mdpl. Desa Cidugaleun sendiri berada pada ketinggian 800 mdpl,
                kontur berbukit, dengan mayoritas wilayah berupa lahan pertanian.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
                {menuItems.map(({ key, label, icon: Icon }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedMenu(key)}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all text-sm font-medium hover:shadow-lg hover:-translate-y-1 duration-300 ${selectedMenu === key
                            ? "bg-green-600 text-white"
                            : "bg-white text-green-700 border border-green-200"
                            }`}
                    >
                        <Icon size={28} />
                        {label}
                    </button>
                ))}
            </div>

            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-xl animate-fade-in">
                {renderContent()}
            </div>
        </main>
    );
}
