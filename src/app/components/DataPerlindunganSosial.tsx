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
    // Data penerima bansos per jenis
    const jenisBansosData: ChartData<'pie'> = {
        labels: ['PKH', 'BPNT', 'BST', 'BLT Desa', 'Bansos Lainnya'],
        datasets: [{
            data: [120, 85, 65, 45, 30],
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

    // Data penerima per tahun
    const penerimaTahunanData: ChartData<'bar'> = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Penerima Bansos',
                data: [150, 220, 250, 280, 320],
                backgroundColor: 'rgba(74, 222, 128, 0.7)',
                borderColor: 'rgba(74, 222, 128, 1)',
                borderWidth: 2,
                borderRadius: 4,
            }
        ],
    };

    // Data penerima berdasarkan kriteria
    const kriteriaPenerimaData: ChartData<'pie'> = {
        labels: ['Keluarga Miskin', 'Lansia', 'Disabilitas', 'Anak Yatim', 'Ibu Hamil'],
        datasets: [{
            data: [180, 65, 45, 30, 25],
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

    // Data penyaluran per kuartal
    const penyaluranData: ChartData<'bar'> = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Penyaluran Bansos',
                data: [75, 82, 80, 88],
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2,
                borderRadius: 4,
            }
        ],
    };

    // Tren pertumbuhan penerima bansos
    const trenPertumbuhanData: ChartData<'line'> = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Pertumbuhan Penerima',
            data: [0, 46.7, 13.6, 12, 14.3],
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

    // Chart options
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

    // Stats cards data
    const stats = [
        {
            title: "Total Penerima (2023)",
            value: "345 Keluarga",
            icon: <FiUser className="w-5 h-5" />,
            bgFrom: "from-blue-50",
            bgTo: "to-indigo-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            title: "Total Bantuan",
            value: "Rp 1,2 M",
            icon: <FiDollarSign className="w-5 h-5" />,
            bgFrom: "from-purple-50",
            bgTo: "to-violet-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Pertumbuhan Penerima",
            value: "+14.3%",
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
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Perlindungan Sosial</h2>
                                <p className="text-gray-500 mt-1">Penerima bantuan sosial dan program perlindungan lainnya</p>
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
                                            data={{
                                                labels: ['Keluarga Miskin', 'Lansia', 'Disabilitas', 'Anak Yatim', 'Ibu Hamil'],
                                                datasets: [{
                                                    data: [180, 65, 45, 30, 25],
                                                    backgroundColor: [
                                                        'rgba(101, 163, 255, 0.7)',  // blue
                                                        'rgba(120, 111, 255, 0.7)',  // purple
                                                        'rgba(70, 203, 167, 0.7)',   // teal
                                                        'rgba(255, 159, 67, 0.7)',   // orange
                                                        'rgba(235, 73, 152, 0.7)'    // pink
                                                    ],
                                                    borderColor: [
                                                        'rgba(101, 163, 255, 1)',
                                                        'rgba(120, 111, 255, 1)',
                                                        'rgba(70, 203, 167, 1)',
                                                        'rgba(255, 159, 67, 1)',
                                                        'rgba(235, 73, 152, 1)'
                                                    ],
                                                    borderWidth: 1,
                                                }]
                                            }}
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
                                                            font: {
                                                                family: 'Inter, sans-serif',
                                                                size: 12
                                                            }
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
                                                            label: function (context: TooltipItem<'doughnut'>) {
                                                                const label = context.label || '';
                                                                const value = context.raw as number || 0;
                                                                const total = (context.dataset?.data as number[]).reduce((a, b) => a + b, 0);
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
                                Daftar Program Perlindungan Sosial
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
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 600.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan-Des 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BPNT</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 200.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan-Des 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BST</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">65 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 300.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr-Sep 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BLT Desa</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 KK</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp 150.000/bln</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jul-Des 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                                <FiShield className="mr-2" />
                                Informasi Tambahan
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>PKH (Program Keluarga Harapan) adalah program bantuan sosial bersyarat</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>BPNT (Bantuan Pangan Non Tunai) diberikan melalui kartu elektronik</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>Pertumbuhan penerima meningkat signifikan sejak pandemi 2020</span>
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