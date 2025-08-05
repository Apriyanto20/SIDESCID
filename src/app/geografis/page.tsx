"use client";

import React, { useState } from "react";
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
} from "recharts";

export default function GeografisPage() {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

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

    const menuItems = [
        {
            key: "luasWilayah",
            label: "Luas Wilayah",
            icon: MountainIcon,
        },
        {
            key: "batasWilayah",
            label: "Batas Wilayah",
            icon: TreesIcon,
        },
        {
            key: "maps",
            label: "Peta Lokasi",
            icon: MapPinIcon,
        },
        {
            key: "mataPencarian",
            label: "Mata Pencaharian",
            icon: SunIcon,
        },
        {
            key: "penggunaanLahan",
            label: "Penggunaan Lahan",
            icon: TreesIcon,
        },
        {
            key: "sumberDaya",
            label: "Sumber Daya",
            icon: GemIcon,
        },
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case "luasWilayah":
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Tabel Luas Daerah dan Ketinggian Desa
                        </h3>
                        <div className="overflow-x-auto text-sm">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-green-600 text-white text-center">
                                    <tr>
                                        <th className="px-3 py-2 border">Desa</th>
                                        <th className="px-3 py-2 border">Luas (Ha)</th>
                                        <th className="px-3 py-2 border">Ketinggian</th>
                                        <th className="px-3 py-2 border">% Luas</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-800">
                                    {desaData.map((item, i) => (
                                        <tr key={i} className="even:bg-gray-50">
                                            <td className="px-3 py-2 border">{item.desa}</td>
                                            <td className="px-3 py-2 border">{item.luas}</td>
                                            <td className="px-3 py-2 border">{item.tinggi}</td>
                                            <td className="px-3 py-2 border">{item.persen}%</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100 font-semibold">
                                        <td className="px-3 py-2 border">Total Kecamatan</td>
                                        <td className="px-3 py-2 border">12.626,19</td>
                                        <td className="px-3 py-2 border">–</td>
                                        <td className="px-3 py-2 border">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={desaData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="desa"
                                        fontSize={10}
                                        angle={-45}
                                        interval={0}
                                        textAnchor="end"
                                    />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="luas" fill="#4ade80" name="Luas (Ha)" />
                                    <Bar dataKey="tinggi" fill="#60a5fa" name="Ketinggian (mdpl)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );

            case "batasWilayah":
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Batas Wilayah</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Utara: Kab. Sariwangi</li>
                            <li>Timur: Kecamatan Mangunreja</li>
                            <li>Selatan: Kecamatan Salawu</li>
                            <li>Barat: Kecamatan Garut</li>
                        </ul>
                    </div>
                );

            case "maps":
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Peta Lokasi</h3>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63387.8840631569!2d107.9337199699915!3d-7.246351322509149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b2544ab6f447%3A0x1053b3e8f9a2bdfb!2sCidugaleun%2C%20Cigalontang%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1699358585463!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                );

            case "mataPencarian":
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Mata Pencaharian</h3>
                        <p className="text-gray-700 mb-2">
                            Data mata pencaharian ditampilkan dalam bentuk tabel dan grafik.
                        </p>
                        {/* Tambahkan chart atau tabel sesuai kebutuhan */}
                        <p className="text-gray-500 italic">[Belum diisi detailnya]</p>
                    </div>
                );

            case "penggunaanLahan":
                return (
                    <p className="text-gray-700 text-justify">
                        Sebagian besar lahan digunakan untuk pertanian, perkebunan, dan
                        pemukiman warga.
                    </p>
                );

            case "sumberDaya":
                return (
                    <p className="text-gray-700 text-justify">
                        Desa Cidugaleun memiliki potensi sumber daya alam seperti hasil
                        bumi, air bersih, dan tanah subur.
                    </p>
                );

            default:
                return null;
        }
    };

    return (
        <main className="px-6 py-12 max-w-6xl mx-auto mt-20">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
                Letak Geografis Desa Cidugaleun
            </h1>

            <p className="text-gray-700 mb-6 text-lg text-justify leading-relaxed">
                Kecamatan Cigalontang adalah salah satu Kecamatan yang berada
                di Kabupaten Tasikmalaya dengan luas Wilayah Kecamatan
                Cigalontang adalah 12.626,19 Ha dan ketinggian rata-rata 700
                meter dari permukaan laut. Salah satu Desa di Kecamatan Cigalontang
                adalah Desa Cidugaleun. Desa ini berada pada ketinggian sekitar
                800 meter di atas permukaan laut, dengan kontur wilayah yang
                berbukit dan sebagian besar berupa lahan pertanian.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {menuItems.map(({ key, label, icon: Icon }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedMenu(key)}
                        className={`flex flex-col items-center p-4 rounded-xl shadow-md transition-all border-2 ${selectedMenu === key
                                ? "bg-green-600 text-white border-green-700 scale-105"
                                : "bg-white text-green-800 hover:bg-green-100"
                            }`}
                    >
                        <Icon size={32} className="mb-2" />
                        <span className="text-sm font-medium text-center">{label}</span>
                    </button>
                ))}
            </div>

            {selectedMenu && (
                <div className="bg-white p-6 border border-green-200 rounded-xl shadow">
                    {renderContent()}
                </div>
            )}
        </main>
    );
}
