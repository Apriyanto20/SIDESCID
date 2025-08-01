"use client";

import React from "react";
import Image from "next/image";

const perangkatDesa = [
    { nama: "Asep Surya", jabatan: "Kepala Desa", foto: "/images/logo.png" },
    { nama: "Dewi Lestari", jabatan: "Sekretaris Desa", foto: "/images/logo.png" },
    { nama: "Rudi Hartono", jabatan: "Kaur Keuangan", foto: "/images/logo.png" },
    { nama: "Sinta Anggraini", jabatan: "Kaur Umum", foto: "/images/logo.png" },
    { nama: "Budi Santoso", jabatan: "Kasi Pemerintahan", foto: "/images/logo.png" },
    { nama: "Linda Sari", jabatan: "Kasi Pelayanan", foto: "/images/logo.png" },
];

const radius = 150; // radius lingkaran

const generateCirclePositions = (count: number, radius: number) => {
    const angleStep = (2 * Math.PI) / count;
    return Array.from({ length: count }, (_, i) => {
        const angle = i * angleStep - Math.PI / 2; // start dari atas
        return {
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle),
        };
    });
};

const PerangkatDesaLingkaran = () => {
    const positions = generateCirclePositions(perangkatDesa.length, radius);

    return (
        <section className="relative py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
                {/* Lingkaran Kiri */}
                <div className="relative w-[400px] h-[400px]">
                    {perangkatDesa.map((person, i) => (
                        <div
                            key={`left-${i}`}
                            className="absolute flex flex-col items-center text-center"
                            style={{
                                left: `calc(50% + ${positions[i].x}px)`,
                                top: `calc(50% + ${positions[i].y}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <Image
                                src={person.foto}
                                alt={person.nama}
                                width={70}
                                height={70}
                                className="rounded-full border-2 border-white shadow-md"
                            />
                            <p className="text-sm font-medium mt-2">{person.nama}</p>
                            <p className="text-xs text-gray-500">{person.jabatan}</p>
                        </div>
                    ))}
                </div>

                {/* Teks Tengah */}
                <div className="text-center max-w-sm">
                    <h2 className="text-3xl font-bold mb-4">Perangkat Desa</h2>
                    <p className="text-gray-700">
                        Kami hadir untuk melayani masyarakat Desa Cidugaleun.
                    </p>
                </div>

                {/* Lingkaran Kanan */}
                <div className="relative w-[400px] h-[400px]">
                    {perangkatDesa.map((person, i) => (
                        <div
                            key={`right-${i}`}
                            className="absolute flex flex-col items-center text-center"
                            style={{
                                left: `calc(50% + ${positions[i].x}px)`,
                                top: `calc(50% + ${positions[i].y}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <Image
                                src={person.foto}
                                alt={person.nama}
                                width={70}
                                height={70}
                                className="rounded-full border-2 border-white shadow-md"
                            />
                            <p className="text-sm font-medium mt-2">{person.nama}</p>
                            <p className="text-xs text-gray-500">{person.jabatan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerangkatDesaLingkaran;
