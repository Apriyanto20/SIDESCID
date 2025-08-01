'use client';
import FloatingProfileCard from "./FloatingProfileCard";

const perangkatDesa = [
    { name: "Ahmad Rudi", role: "Kepala Desa", src: "/image/logo.png" },
    { name: "Rina Marlina", role: "Sekretaris Desa", src: "/image/logo.png" },
    { name: "Tina Nurhayati", role: "Kasi Pemerintahan", src: "/image/logo.png" },
    { name: "Dedi Sunarya", role: "Kasi Pelayanan", src: "/image/logo.png" },
    { name: "Siti Aisyah", role: "Kaur Keuangan", src: "/image/logo.png" },
    { name: "Ujang Saputra", role: "Kaur Umum", src: "/image/logo.png" },
    { name: "Nina Melani", role: "Kaur Perencanaan", src: "/image/logo.png" },
    { name: "Rahmat Hidayat", role: "Kepala Dusun I", src: "/image/logo.png" },
    { name: "Desi Marlina", role: "Kepala Dusun II", src: "/image/logo.png" },
    { name: "Joko Priyono", role: "Staff Pelayanan Umum", src: "/image/logo.png" },
    { name: "Dewi Kartika", role: "Operator SIKS-NG", src: "/image/logo.png" },
    { name: "Yuni Astuti", role: "Pendamping PKH", src: "/image/logo.png" },
    { name: "Andi Pratama", role: "Petugas Linmas", src: "/image/logo.png" },
    { name: "Sopian", role: "Satlinmas", src: "/image/logo.png" },
    { name: "Indah Wulandari", role: "Kader Posyandu", src: "/image/logo.png" },
];

export default function PerangkatDesaSection() {
    const radius = 220;
    const centerY = 200;
    const centerXLeft = 90;
    const centerXRight = 1100;

    return (
        <section className="relative min-h-[1400px] bg-gray-50 overflow-hidden py-32">
            {/* LEFT CIRCLE */}
            {perangkatDesa.map((item, i) => {
                const angle = (2 * Math.PI * i) / perangkatDesa.length;
                const x = centerXLeft + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                return (
                    <FloatingProfileCard className="gap-4"
                        key={`left-${item.name}`}
                        src={item.src}
                        name={item.name}
                        role={item.role}
                        style={{
                            position: "absolute",
                            left: `${x}px`,
                            top: `${y}px`,
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                        }}
                    />
                );
            })}

            {/* RIGHT CIRCLE */}
            {perangkatDesa.map((item, i) => {
                const angle = (2 * Math.PI * i) / perangkatDesa.length;
                const x = centerXRight + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                return (
                    <FloatingProfileCard
                        key={`right-${item.name}`}
                        src={item.src}
                        name={item.name}
                        role={item.role}
                        style={{
                            position: "absolute",
                            left: `${x}px`,
                            top: `${y}px`,
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                        }}
                    />
                );
            })}

            {/* JUDUL DI TENGAH */}
            <div
                className="relative z-20 text-center max-w-2xl mx-auto"
                data-aos="fade-up"
                style={{
                    position: 'absolute',
                    top: `${centerY}px`,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    👨‍💼
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Perangkat Desa</h2>
                <p className="text-lg text-gray-600">
                    Kami hadir untuk melayani masyarakat desa Cidugaleun.
                </p>
            </div>
        </section>
    );
}
