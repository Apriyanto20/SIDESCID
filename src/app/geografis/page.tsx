"use client";

import React, { useState } from "react";
import {
    MountainIcon,
    SunIcon,
    TreesIcon,
    GemIcon,
} from "lucide-react"; // Import icon dari lucide-react

export default function GeografisPage() {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    const menuItems = [
        { key: "topografi", label: "Topografi", icon: MountainIcon },
        { key: "iklim", label: "Iklim", icon: SunIcon },
        { key: "penggunaanLahan", label: "Lahan", icon: TreesIcon },
        { key: "sumberDaya", label: "Sumber Daya", icon: GemIcon },
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case "topografi":
                return (
                    <p className="text-justify text-gray-700 mt-4">
                        Wilayah Desa Cidugaleun memiliki topografi berbukit dengan
                        ketinggian rata-rata 800 mdpl, sangat cocok untuk pertanian dan
                        perkebunan.
                    </p>
                );
            case "iklim":
                return (
                    <p className="text-justify text-gray-700 mt-4">
                        Iklim di Desa Cidugaleun termasuk tropis basah dengan curah hujan
                        tinggi sepanjang tahun.
                    </p>
                );
            case "penggunaanLahan":
                return (
                    <p className="text-justify text-gray-700 mt-4">
                        Sebagian besar lahan digunakan untuk pertanian, perkebunan, dan
                        pemukiman warga.
                    </p>
                );
            case "sumberDaya":
                return (
                    <p className="text-justify text-gray-700 mt-4">
                        Desa Cidugaleun memiliki potensi sumber daya alam seperti hasil
                        bumi, air bersih, dan tanah subur.
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <main className="px-6 py-12 max-w-5xl mx-auto mt-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
                Letak Geografis Desa Cidugaleun
            </h1>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                Kecamatan Cigalontang adalah salah satu Kecamatan yang berada di
                Kabupaten Tasikmalaya dengan luas wilayah sekitar 12.626,19 Ha dan
                ketinggian rata-rata 700 meter dari permukaan laut. Salah satu desa di
                Kecamatan Cigalontang adalah Desa Cidugaleun. Desa Cidugaleun terletak
                di Kecamatan Cigalontang, Kabupaten Tasikmalaya, Provinsi Jawa Barat.
                Desa ini berada pada ketinggian sekitar 800 meter di atas permukaan
                laut, dengan kontur wilayah yang berbukit dan sebagian besar berupa
                lahan pertanian.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                    Luas Wilayah
                </h2>
                <p className="text-gray-700">± 450 Ha</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                    Batas Wilayah
                </h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Utara: Desa Singaparna</li>
                    <li>Timur: Desa Cikadongdong</li>
                    <li>Selatan: Desa Jayapura</li>
                    <li>Barat: Desa Cigalontang</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-green-700 mb-2">Peta Lokasi</h2>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63398.06528472595!2d108.0817432!3d-7.2601478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51dc574f5f13%3A0x8d110a372c9f78c5!2sCidugaleun%2C%20Kec.%20Cigalontang%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1690783430995!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Menu Informasi Tambahan */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">
                    Informasi Tambahan
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {menuItems.map(({ key, label, icon: Icon }) => (
                        <button
                            key={key}
                            onClick={() => setSelectedMenu(key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border shadow-md transition ${selectedMenu === key
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-green-700 hover:bg-green-100"
                                }`}
                        >
                            <Icon size={18} />
                            {label}
                        </button>
                    ))}
                </div>

                {/* Konten ditampilkan jika menu dipilih */}
                {selectedMenu && (
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md border">
                        {renderContent()}
                    </div>
                )}
            </div>
        </main>
    );
}
