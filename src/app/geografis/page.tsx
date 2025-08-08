"use client";

import Image from 'next/image';
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

const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
};

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
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <MountainIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Luas Daerah dan Ketinggian Desa</h2>
                                <p className="text-sm text-green-600">Data luas wilayah dan ketinggian desa-desa di Kecamatan Cigalontang</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-medium">Desa</th>
                                        <th className="px-6 py-4 text-left font-medium">Luas (Ha)</th>
                                        <th className="px-6 py-4 text-left font-medium">Ketinggian (mdpl)</th>
                                        <th className="px-6 py-4 text-left font-medium">Persentase</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {desaData.map((item, i) => (
                                        <tr
                                            key={i}
                                            className="hover:bg-green-50 transition-colors"
                                        >
                                            <td className="px-6 py-3 font-medium text-gray-900">{item.desa}</td>
                                            <td className="px-6 py-3 text-gray-700">{formatNumber(item.luas)}</td>
                                            <td className="px-6 py-3 text-gray-700">{item.tinggi} m</td>
                                            <td className="px-6 py-3 text-gray-700">{item.persen}%</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-green-50 font-semibold border-t-2 border-green-200">
                                        <td className="px-6 py-3 text-gray-900">Total Kecamatan</td>
                                        <td className="px-6 py-3 text-gray-700">{formatNumber(12626.19)}</td>
                                        <td className="px-6 py-3 text-gray-700">–</td>
                                        <td className="px-6 py-3 text-gray-700">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Visualisasi Data</h3>
                            <div className="h-96">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={desaData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis
                                            dataKey="desa"
                                            fontSize={10}
                                            angle={-45}
                                            interval={0}
                                            textAnchor="end"
                                            height={70}
                                            tick={{ fill: '#4b5563' }}
                                        />
                                        <YAxis tick={{ fill: '#4b5563' }} />
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: '0.5rem',
                                                backgroundColor: '#fff',
                                                borderColor: '#d1fae5',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <Legend />
                                        <Bar
                                            dataKey="luas"
                                            fill="#10b981"
                                            name="Luas (Ha)"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="tinggi"
                                            fill="#3b82f6"
                                            name="Ketinggian (mdpl)"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );

            case "batasWilayah":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <TreesIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Batas Wilayah</h2>
                                <p className="text-sm text-green-600">Batas-batas wilayah Kecamatan Cigalontang</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Batas Administratif</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="p-2 bg-green-100 text-green-700 rounded-full">
                                            <MapPinIcon size={16} />
                                        </span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Utara</h4>
                                            <p className="text-gray-600">Kab. Sariwangi</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="p-2 bg-green-100 text-green-700 rounded-full">
                                            <MapPinIcon size={16} />
                                        </span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Timur</h4>
                                            <p className="text-gray-600">Kecamatan Mangunreja</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="p-2 bg-green-100 text-green-700 rounded-full">
                                            <MapPinIcon size={16} />
                                        </span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Selatan</h4>
                                            <p className="text-gray-600">Kecamatan Salawu</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="p-2 bg-green-100 text-green-700 rounded-full">
                                            <MapPinIcon size={16} />
                                        </span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Barat</h4>
                                            <p className="text-gray-600">Kecamatan Garut</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Karakteristik Wilayah</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <h4 className="font-medium text-blue-800 flex items-center gap-2">
                                            <MountainIcon size={18} />
                                            <span>Topografi</span>
                                        </h4>
                                        <p className="text-gray-600 mt-1">Wilayah berbukit dengan ketinggian rata-rata 700 mdpl</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                                        <h4 className="font-medium text-green-800 flex items-center gap-2">
                                            <TreesIcon size={18} />
                                            <span>Penggunaan Lahan</span>
                                        </h4>
                                        <p className="text-gray-600 mt-1">Didominasi oleh lahan pertanian dan perkebunan</p>
                                    </div>
                                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                                        <h4 className="font-medium text-amber-800 flex items-center gap-2">
                                            <SunIcon size={18} />
                                            <span>Iklim</span>
                                        </h4>
                                        <p className="text-gray-600 mt-1">Iklim tropis dengan curah hujan sedang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "maps":
                return (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <MapPinIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Peta Lokasi</h2>
                                <p className="text-sm text-green-600">Lokasi geografis Desa Cidugaleun di Kabupaten Tasikmalaya</p>
                            </div>
                        </div>

                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63387.8840631569!2d107.9337199699915!3d-7.246351322509149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b2544ab6f447%3A0x1053b3e8f9a2bdfb!2sCidugaleun%2C%20Cigalontang%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1699358585463!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Koordinat Geografis</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Lintang:</span> 7°14'46.8"S</p>
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Bujur:</span> 107°56'01.3"E</p>
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Ketinggian:</span> 800 mdpl</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Aksesibilitas</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Jarak ke Kecamatan:</span> 12 km</p>
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Jarak ke Kabupaten:</span> 45 km</p>
                                    <p className="text-gray-600"><span className="font-medium text-gray-800">Transportasi:</span> Angkutan desa, ojeg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "mataPencarian":
                return (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <SunIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Mata Pencaharian</h2>
                                <p className="text-sm text-green-600">Distribusi pekerjaan utama penduduk Desa Cidugaleun</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Diagram Distribusi</h3>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={mataPencaharianData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                innerRadius={50}
                                                paddingAngle={3}
                                                label={({ name, percent = 0 }) =>
                                                    `${(percent * 100).toFixed(1)}%`
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
                                            <Tooltip
                                                formatter={(value, name, props) => [
                                                    value,
                                                    `${name} (${(props.payload.percent * 100).toFixed(1)}%)`
                                                ]}
                                                contentStyle={{
                                                    borderRadius: '0.5rem',
                                                    backgroundColor: '#fff',
                                                    borderColor: '#d1fae5',
                                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                                }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Detail Pekerjaan</h3>
                                <div className="space-y-4">
                                    {mataPencaharianData.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                                />
                                                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900">{formatNumber(item.value)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Analisis</h3>
                            <div className="prose prose-sm text-gray-600">
                                <p>
                                    Mayoritas penduduk Desa Cidugaleun bekerja sebagai buruh harian/tani dan wiraswasta.
                                    Sektor pertanian masih menjadi tulang punggung perekonomian desa, diikuti oleh sektor informal lainnya.
                                </p>
                                <p className="mt-2">
                                    Jumlah pelajar/mahasiswa yang cukup signifikan menunjukkan potensi sumber daya manusia
                                    yang sedang berkembang di desa ini.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case "potensiPeternakan":
                return (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <PawPrint size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Potensi Peternakan</h2>
                                <p className="text-sm text-green-600">Data populasi dan kepemilikan ternak di Desa Cidugaleun</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-medium">Jenis Ternak</th>
                                            <th className="px-6 py-4 text-left font-medium">Jumlah Pemilik</th>
                                            <th className="px-6 py-4 text-left font-medium">Total Populasi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {peternakanData.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-green-50 transition-colors"
                                            >
                                                <td className="px-6 py-3 font-medium text-gray-900">{item.jenis}</td>
                                                <td className="px-6 py-3 text-gray-700">{formatNumber(item.pemilik)}</td>
                                                <td className="px-6 py-3 text-gray-700">{formatNumber(item.populasi)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Visualisasi Data</h3>
                            <div className="h-96">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={peternakanData}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                                    >
                                        <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
                                        <XAxis
                                            dataKey="jenis"
                                            angle={-45}
                                            textAnchor="end"
                                            height={70}
                                            tick={{ fill: '#4b5563' }}
                                        />
                                        <YAxis tick={{ fill: '#4b5563' }} />
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: '0.5rem',
                                                backgroundColor: '#fff',
                                                borderColor: '#d1fae5',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <Legend />
                                        <Bar
                                            dataKey="pemilik"
                                            fill="#10b981"
                                            radius={[4, 4, 0, 0]}
                                            name="Jumlah Pemilik"
                                        />
                                        <Bar
                                            dataKey="populasi"
                                            fill="#3b82f6"
                                            radius={[4, 4, 0, 0]}
                                            name="Populasi Ternak"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Potensi Unggulan</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                        <span className="p-2 bg-green-100 text-green-700 rounded-full">🐔</span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Ayam Kampung</h4>
                                            <p className="text-sm text-gray-600">{formatNumber(1619)} pemilik dengan {formatNumber(7962)} populasi</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                        <span className="p-2 bg-blue-100 text-blue-700 rounded-full">🐐</span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Kambing</h4>
                                            <p className="text-sm text-gray-600">{formatNumber(1541)} pemilik dengan {formatNumber(4693)} populasi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Peluang Pengembangan</h3>
                                <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                                    <li>Pengembangan peternakan ayam kampung organik</li>
                                    <li>Peningkatan kualitas bibit kambing</li>
                                    <li>Pengolahan susu kambing</li>
                                    <li>Pemasaran produk ternak berbasis digital</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            case "sumberDaya":
                return (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="p-3 bg-green-100 rounded-lg text-green-700">
                                <GemIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-800">Sumber Daya Alam</h2>
                                <p className="text-sm text-green-600">Potensi sumber daya alam Desa Cidugaleun</p>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Galeri Sumber Daya Alam</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { src: '/image/sawah.png', alt: 'Pemandangan alam Desa Cidugaleun' },
                                    { src: '/image/madu.png', alt: 'Pertanian di Desa Cidugaleun' },
                                    { src: '/image/pemandangan.jpg', alt: 'Sumber air alami' },
                                    { src: '/image/cidugaleun.jpg', alt: 'Hasil bumi lokal' },
                                ].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = '/image/kegiatan.jpg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <div className="p-3 bg-green-100 text-green-700 rounded-lg w-fit mb-3">
                                    <TreesIcon size={20} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hasil Bumi</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Padi dan palawija</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Sayuran organik</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <span>Buah-buahan lokal</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <div className="p-3 bg-blue-100 text-blue-700 rounded-lg w-fit mb-3">
                                    <MapPinIcon size={20} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sumber Air</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <span>Sumber mata air pegunungan</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <span>Sungai kecil</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <span>Embung desa</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                <div className="p-3 bg-amber-100 text-amber-700 rounded-lg w-fit mb-3">
                                    <GemIcon size={20} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Potensi Lainnya</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-amber-500">•</span>
                                        <span>Tanah subur</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-amber-500">•</span>
                                        <span>Bambu dan kayu</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-amber-500">•</span>
                                        <span>Tanaman obat</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Potensi Pengembangan</h3>
                            <div className="prose prose-sm text-gray-600">
                                <p>
                                    Desa Cidugaleun memiliki potensi besar untuk pengembangan agrowisata berbasis pertanian
                                    dan peternakan. Kombinasi antara lahan subur, sumber air yang melimpah, dan pemandangan
                                    alam yang indah dapat menjadi daya tarik wisata.
                                </p>
                                <p className="mt-2">
                                    Potensi lain yang bisa dikembangkan adalah pengolahan hasil pertanian dan peternakan
                                    menjadi produk bernilai tambah seperti makanan olahan, kerajinan bambu, dan produk
                                    herbal.
                                </p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center mb-12 pt-20">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Profil Geografis
                    </span>
                    <br />
                    Desa Cidugaleun
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    Kecamatan Cigalontang berada di Kabupaten Tasikmalaya dengan luas wilayah {formatNumber(12626.19)} Ha
                    dan ketinggian rata-rata 700 mdpl. Desa Cidugaleun sendiri berada pada ketinggian 800 mdpl,
                    kontur berbukit, dengan mayoritas wilayah berupa lahan pertanian.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
                {menuItems.map(({ key, label, icon: Icon }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedMenu(key)}
                        className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 duration-300 ${selectedMenu === key
                            ? "bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-green-300"
                            }`}
                    >
                        <Icon
                            size={22}
                            className={
                                selectedMenu === key ? "text-white" : "text-green-600"
                            }
                        />
                        <span>{label}</span>
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden animate-fade-in">
                {renderContent()}
            </div>
        </main>
    );
}