"use client";

import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions
} from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMapPin, FiDollarSign, FiPackage, FiCoffee, FiDroplet } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, ArcElement
);

interface DataPotensiDesaProps {
  onClose: () => void;
}

const DataPotensiDesa: React.FC<DataPotensiDesaProps> = ({ onClose }) => {
  // Data potensi ekonomi
  const ekonomiData: ChartData<'doughnut'> = {
    labels: ['Pertanian', 'Perkebunan', 'Peternakan', 'UMKM', 'Wisata'],
    datasets: [{
      data: [45, 30, 15, 25, 10],
      backgroundColor: [
        'rgba(74, 222, 128, 0.7)',
        'rgba(250, 176, 5, 0.7)',
        'rgba(248, 113, 113, 0.7)',
        'rgba(139, 92, 246, 0.7)',
        'rgba(59, 130, 246, 0.7)'
      ],
      borderColor: [
        'rgba(74, 222, 128, 1)',
        'rgba(250, 176, 5, 1)',
        'rgba(248, 113, 113, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(59, 130, 246, 1)'
      ],
      borderWidth: 1,
    }],
  };

  // Data produk unggulan
  const produkData: ChartData<'bar'> = {
    labels: ['Beras Organik', 'Kopi Arabika', 'Madu Kelulut', 'Kerajinan Bambu', 'Dodol Garut'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: 'rgba(101, 163, 255, 0.7)',
      borderColor: 'rgba(101, 163, 255, 1)',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  // Data perkembangan UMKM
  const umkmData: ChartData<'bar'> = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Jumlah UMKM',
      data: [15, 18, 22, 25, 28],
      backgroundColor: 'rgba(234, 88, 12, 0.7)',
      borderColor: 'rgba(234, 88, 12, 1)',
      borderWidth: 2,
      borderRadius: 4,
    }],
  };

  // Data sumber daya alam
  const sdaData: ChartData<'pie'> = {
    labels: ['Sawah', 'Kebun', 'Hutan', 'Sungai', 'Lahan Tidur'],
    datasets: [{
      data: [120, 85, 65, 45, 30],
      backgroundColor: [
        'rgba(101, 163, 255, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(156, 163, 175, 0.7)'
      ],
      borderColor: [
        'rgba(101, 163, 255, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(156, 163, 175, 1)'
      ],
      borderWidth: 1,
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
        display: false,
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

  // Stats cards data
  const stats = [
    {
      title: "Luas Wilayah",
      value: "320 Ha",
      icon: <FiMapPin className="w-5 h-5" />,
      bgFrom: "from-green-50",
      bgTo: "to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "UMKM Terdaftar",
      value: "28 Unit",
      icon: <FiDollarSign className="w-5 h-5" />,
      bgFrom: "from-orange-50",
      bgTo: "to-amber-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      title: "Produk Unggulan",
      value: "5 Jenis",
      icon: <FiPackage className="w-5 h-5" />,
      bgFrom: "from-blue-50",
      bgTo: "to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  // Product data
  const products = [
    {
      name: "Beras Organik",
      desc: "Beras sehat tanpa pestisida dari sawah organik desa",
      icon: <FiPackage className="text-green-500 w-5 h-5" />
    },
    {
      name: "Kopi Arabika",
      desc: "Kopi khas dari perkebunan warga dengan cita rasa tinggi",
      icon: <FiCoffee className="text-amber-500 w-5 h-5" />
    },
    {
      name: "Madu Kelulut",
      desc: "Madu alami dari lebah kelulut yang dibudidayakan warga",
      icon: <FiDroplet className="text-yellow-500 w-5 h-5" />
    },
    {
      name: "Kerajinan Bambu",
      desc: "Produk kerajinan tangan dari bambu berkualitas",
      icon: <FiPackage className="text-emerald-500 w-5 h-5" />
    },
    {
      name: "Dodol Garut",
      desc: "Makanan tradisional khas Tasikmalaya",
      icon: <FiPackage className="text-red-500 w-5 h-5" />
    },
    {
      name: "Gula Aren",
      desc: "Gula alami dari nira pohon aren desa",
      icon: <FiPackage className="text-amber-700 w-5 h-5" />
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Potensi Desa Cidugaleun</h2>
                <p className="text-gray-500 mt-1">Kecamatan Cigalontang, Kabupaten Tasikmalaya</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Potensi Ekonomi Desa
                  </h3>
                  <div className="relative h-64 md:h-80">
                    <Doughnut
                      data={ekonomiData}
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
                            callbacks: {
                              label: (context) => {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                              }
                            }
                          }
                        },
                        cutout: '60%'
                      }}
                      aria-label="Diagram lingkaran menunjukkan potensi ekonomi desa"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Produk Unggulan Desa
                  </h3>
                  <div className="h-64">
                    <Bar
                      data={produkData}
                      options={{
                        ...barOptions,
                        indexAxis: 'y'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Perkembangan UMKM
                  </h3>
                  <div className="h-64">
                    <Bar data={umkmData} options={barOptions} />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    Sumber Daya Alam
                  </h3>
                  <div className="h-64">
                    <Pie data={sdaData} options={pieOptions} />
                  </div>
                </div>
              </div>
            </div>

            {/* Produk Unggulan Section */}
            <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Detail Produk Unggulan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((produk, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100 mr-4">
                        {produk.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{produk.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{produk.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                <FiMapPin className="mr-2" />
                Kontak Pengembangan Potensi Desa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Bidang Ekonomi: Bapak Asep (0812-3456-7890)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Bidang UMKM: Ibu Nining (0856-7890-1234)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Bidang Pariwisata: Bapak Dedi (0821-2345-6789)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Email: potensidesa@cidugaleun.desa.id</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataPotensiDesa;