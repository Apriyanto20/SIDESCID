"use client";

import React from 'react';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
    ChartData,
    ChartOptions
} from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShield, FiHome, FiHeart, FiDollarSign, FiUser, FiTrendingUp } from 'react-icons/fi';
import { TooltipItem } from 'chart.js';

ChartJS.register(
    CategoryScale, LinearScale, BarElement,
    Title, Tooltip, Legend, ArcElement,
    PointElement, LineElement, Filler
);

interface DataPerlindunganSosialProps {
    onClose: () => void;
}

const DataPerlindunganSosial: React.FC<DataPerlindunganSosialProps> = ({ onClose }) => {
    // Data penerima bansos per jenis - adjusted for Desa Cidugaleun
    const jenisBansosData: ChartData<'pie'> = {
        labels: ['PKH', 'BPNT', 'BLT Desa', 'Bansos Covid', 'Bantuan Lansia'],
        datasets: [{
            data: [85, 60, 45, 30, 25],
            backgroundColor: [
                'rgba(101, 163, 255, 0.7)',
                'rgba(120, 111, 255, 0.7)',
                'rgba(255, 159, 67, 0.7)',
                'rgba(235, 73, 152, 0.7)',
                'rgba(70, 203, 167, 0.7)'
            ],
            borderColor: [
                'rgba(101, 163, 255, 1)',
                'rgba(120, 111, 255, 1)',
                'rgba(255, 159, 67, 1)',
                'rgba(235, 73, 152, 1)',
                'rgba(70, 203, 167, 1)'
            ],
            borderWidth: 1,
        }],
    };

    // Data penerima per tahun - adjusted based on village data
    const penerimaTahunanData: ChartData<'bar'> = {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'Penerima Bansos',
                data: [120, 150, 180, 200, 220],
                backgroundColor: 'rgba(74, 222, 128, 0.7)',
                borderColor: 'rgba(74, 222, 128, 1)',
                borderWidth: 2,
                borderRadius: 4,
            }
        ],
    };

    // Data penerima berdasarkan kriteria - adjusted for Desa Cidugaleun
    const kriteriaPenerimaData: ChartData<'doughnut'> = {
        labels: ['Keluarga Miskin', 'Lansia', 'Disabilitas', 'Anak Yatim', 'Ibu Hamil'],
        datasets: [{
            data: [150, 45, 30, 20, 15],
            backgroundColor: [
                'rgba(248, 113, 113, 0.7)',
                'rgba(250, 176, 5, 0.7)',
                'rgba(101, 163, 255, 0.7)',
                'rgba(120, 111, 255, 0.7)',
                'rgba(235, 73, 152, 0.7)'
            ],
            borderWidth: 1,
        }],
    };

    // Data penyaluran per kuartal - adjusted for Desa Cidugaleun
    const penyaluranData: ChartData<'bar'> = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Penyaluran Bansos',
                data: [50, 55, 60, 55],
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2,
                borderRadius: 4,
            }
        ],
    };

    // Tren pertumbuhan penerima bansos - adjusted for Desa Cidugaleun
    const trenPertumbuhanData: ChartData<'line'> = {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Pertumbuhan Penerima',
            data: [0, 25, 20, 11.1, 10],
            borderColor: 'rgba(101, 163, 255, 1)',
            backgroundColor: 'rgba(101, 163, 255, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(101, 163, 255, 1)',
            pointBorderWidth: 2,
            pointRadius: 5,
        }],
    };

    // Chart options (same as before)
    const barOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                }
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    color: '#64748b',
                }
            },
        },
    };

    const pieOptions: ChartOptions<'pie'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    color: '#64748b',
                }
            },
        },
        cutout: '60%',
    };

    const lineOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                    callback: function (value) {
                        return `${value}%`;
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: '#64748b',
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y}%`;
                        }
                        return label;
                    }
                }
            }
        },
    };

    // Stats cards data - adjusted for Desa Cidugaleun
    const stats = [
        {
            title: "Total Penerima (2024)",
            value: "220 Keluarga",
            icon: <FiUser className="w-5 h-5" />,
            bgFrom: "from-blue-50",
            bgTo: "to-indigo-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            title: "Total Bantuan",
            value: "Rp 850 Jt",
            icon: <FiDollarSign className="w-5 h-5" />,
            bgFrom: "from-purple-50",
            bgTo: "to-violet-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Pertumbuhan Penerima",
            value: "+10%",
            icon: <FiTrendingUp className="w-5 h-5" />,
            bgFrom: "from-green-50",
            bgTo: "to-emerald-50",
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        }
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100"
                >
                    <div className="p-6 md:p-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Perlindungan Sosial Desa Cidugaleun</h2>
                                <p className="text-gray-500 mt-1">Penerima bantuan sosial tahun 2024</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition p-1 -mt-2 -mr-2"
                                aria-label="Close modal"
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className={`bg-gradient-to-r ${stat.bgFrom} ${stat.bgTo} p-5 rounded-xl border border-gray-100`}
                                >
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-lg ${stat.iconBg} ${stat.iconColor} mr-4`}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">{stat.title}</p>
                                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Charts Section */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Penerima Bantuan Sosial Tahunan
                                </h3>
                                <div className="h-72">
                                    <Bar data={penerimaTahunanData} options={barOptions} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Jenis Bantuan Sosial
                                    </h3>
                                    <div className="h-64">
                                        <Pie data={jenisBansosData} options={pieOptions} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                        Kriteria Penerima Bantuan
                                    </h3>
                                    <div className="h-64">
                                        <Doughnut
                                            data={kriteriaPenerimaData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    legend: {
                                                        position: 'right',
                                                        labels: {
                                                            usePointStyle: true,
                                                            padding: 20,
                                                            color: '#64748b',
                                                        }
                                                    },
                                                    tooltip: {
                                                        backgroundColor: '#1f2937',
                                                        titleColor: '#ffffff',
                                                        bodyColor: '#ffffff',
                                                        padding: 12,
                                                        cornerRadius: 8,
                                                        displayColors: true,
                                                        callbacks: {
                                                            label: function (context) {
                                                                const label = context.label || '';
                                                                const value = context.parsed;
                                                                const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                                                                const percentage = Math.round((value / total) * 100);
                                                                return `${label}: ${value} (${percentage}%)`;
                                                            }
                                                        }
                                                    }
                                                },
                                                cutout: '60%'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                        Penyaluran per Kuartal
                                    </h3>
                                    <div className="h-64">
                                        <Bar data={penyaluranData} options={{
                                            ...barOptions,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                },
                                            }
                                        }} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                                        Tren Pertumbuhan Penerima
                                    </h3>
                                    <div className="h-64">
                                        <Line data={trenPertumbuhanData} options={lineOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Program Table */}
                        <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                Daftar Program Perlindungan Sosial Desa Cidugaleun
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerima</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nilai Bantuan</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PKH</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 400.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan-Des 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BPNT</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 150.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan-Des 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BLT Desa</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 100.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jul-Des 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bantuan Lansia</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25 Jiwa</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 200.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan-Des 2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                                <FiShield className="mr-2" />
                                Catatan Penting
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>PKH (Program Keluarga Harapan) diberikan kepada keluarga sangat miskin dengan anak sekolah</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>BPNT (Bantuan Pangan Non Tunai) diberikan melalui kartu elektronik untuk pembelian bahan pokok</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>BLT Desa merupakan bantuan langsung tunai dari dana desa untuk keluarga miskin</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Bantuan Lansia diberikan kepada warga berusia di atas 60 tahun yang tidak memiliki penghasilan tetap</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DataPerlindunganSosial;