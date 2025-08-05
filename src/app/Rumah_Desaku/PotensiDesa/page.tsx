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
  ChartOptions,
} from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiMapPin, FiDollarSign, FiPackage, FiCoffee, 
  FiDroplet, FiUsers, FiHome, FiTrendingUp, FiBook,
  FiPhone, FiHeart, FiTruck, FiWifi, FiMonitor, FiZap
} from 'react-icons/fi';
import { MdMosque } from 'react-icons/md';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, ArcElement
);

interface DataPotensiDesaProps {
  onClose: () => void;
}

const DataPotensiDesa: React.FC<DataPotensiDesaProps> = ({ onClose }) => {
  // Data configuration for Desa Cidugaleun
  const ekonomiData = {
    labels: ['Pertanian', 'Perkebunan', 'Peternakan', 'UMKM', 'Lainnya'],
    datasets: [{
      data: [45, 26, 15, 12, 2], // Based on occupation data from PDF
      backgroundColor: [
        'rgba(74, 222, 128, 0.8)',
        'rgba(250, 176, 5, 0.8)',
        'rgba(248, 113, 113, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)'
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

  // Product data for Desa Cidugaleun
  const produkData = {
    labels: ['Beras Sawah', 'Perkebunan Rakyat', 'Ternak Kambing', 'Ayam Kampung', 'Kerajinan'],
    datasets: [{
      data: [40, 25, 15, 12, 8], // Based on production data
      backgroundColor: 'rgba(99, 102, 241, 0.7)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  // Natural resources data (1,179.37 Ha total area)
  const sdaData = {
    labels: ['Sawah (264 Ha)', 'Perkebunan (309 Ha)', 'Hutan Rakyat (150 Ha)', 'Pemukiman (46 Ha)', 'Fasilitas Umum (21 Ha)'],
    datasets: [{
      data: [264.37, 309.40, 150.49, 46.31, 20.51],
      backgroundColor: [
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(139, 92, 246, 0.7)',
        'rgba(156, 163, 175, 0.7)'
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(156, 163, 175, 1)'
      ],
      borderWidth: 1,
    }],
  };

  // Chart options
  const chartOptions = {
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
            family: 'Inter, sans-serif'
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
        bodyFont: {
          family: 'Inter, sans-serif'
        },
        titleFont: {
          family: 'Inter, sans-serif'
        }
      }
    },
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
          font: {
            family: 'Inter, sans-serif'
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
          font: {
            family: 'Inter, sans-serif'
          }
        }
      }
    }
  };

  // Stats cards data for Desa Cidugaleun
  const stats = [
    {
      title: "Luas Wilayah",
      value: "1,179 Ha",
      icon: <FiMapPin className="w-5 h-5" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Jumlah Penduduk",
      value: "6,378 Jiwa",
      icon: <FiUsers className="w-5 h-5" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Produk Unggulan",
      value: "5 Komoditas",
      icon: <FiPackage className="w-5 h-5" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Ternak Kambing",
      value: "4,693 Ekor",
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  // Product data for Desa Cidugaleun
  const products = [
    {
      name: "Beras Sawah",
      desc: "Hasil dari 264 Ha sawah irigasi",
      icon: <FiPackage className="text-emerald-500" />,
      color: "bg-emerald-100"
    },
    {
      name: "Perkebunan Rakyat",
      desc: "Hasil dari 309 Ha lahan perkebunan",
      icon: <FiCoffee className="text-amber-500" />,
      color: "bg-amber-100"
    },
    {
      name: "Ternak Kambing",
      desc: "4,693 ekor kambing warga",
      icon: <FiDroplet className="text-red-500" />,
      color: "bg-red-100"
    },
    {
      name: "Ayam Kampung",
      desc: "7,962 ekor ayam kampung",
      icon: <FiPackage className="text-yellow-500" />,
      color: "bg-yellow-100"
    }
  ];

  // Village facilities for Desa Cidugaleun
  const facilities = [
    {
      name: "Puskesmas Pembantu",
      desc: "1 unit melayani 6,378 penduduk",
      icon: <FiHeart className="text-red-500" />,
      color: "bg-red-100"
    },
    {
      name: "Sekolah Dasar",
      desc: "5 SD Negeri di wilayah desa",
      icon: <FiBook className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      name: "Masjid & Mushola",
      desc: "14 masjid dan 27 mushola",
      icon: <MdMosque className="text-green-500" />,
      color: "bg-green-100"
    },
    {
      name: "Posyandu",
      desc: "6 posyandu tersebar di 4 dusun",
      icon: <FiUsers className="text-pink-500" />,
      color: "bg-pink-100"
    },
    {
      name: "Jalan Desa",
      desc: "5.5 km jalan aspal desa",
      icon: <FiTruck className="text-amber-500" />,
      color: "bg-amber-100"
    },
    {
      name: "BUMDes",
      desc: "1 Badan Usaha Milik Desa",
      icon: <FiDollarSign className="text-indigo-500" />,
      color: "bg-indigo-100"
    },
    {
      name: "Balai Desa",
      desc: "1 unit balai desa multifungsi",
      icon: <FiHome className="text-green-500" />,
      color: "bg-green-100"
    },
    {
      name: "Lapangan Olahraga",
      desc: "1 lapangan sepak bola dan 3 voli",
      icon: <FiZap className="text-yellow-500" />,
      color: "bg-yellow-100"
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        >
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Potensi Desa Cidugaleun</h2>
                <p className="text-gray-500 mt-1">Kecamatan Cigalontang, Kabupaten Tasikmalaya - 2024</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition p-1"
                aria-label="Close"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className={`${stat.bg} p-4 rounded-lg border border-gray-100 shadow-sm`}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${stat.color} mr-4`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Potensi Ekonomi */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 mr-3">
                      <FiDollarSign className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Struktur Ekonomi Desa</h3>
                  </div>
                  <div className="h-64 md:h-72">
                    <Doughnut
                      data={ekonomiData}
                      options={{
                        ...chartOptions,
                        plugins: {
                          ...chartOptions.plugins,
                          tooltip: {
                            ...chartOptions.plugins?.tooltip,
                            callbacks: {
                              label: (context) => {
                                const label = context.label || '';
                                const value = context.raw as number;
                                return `${label}: ${value}%`;
                              }
                            }
                          }
                        },
                        cutout: '60%'
                      }}
                    />
                  </div>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Sektor pertanian (45%) dan perkebunan (26%) menjadi tulang punggung ekonomi desa.
                      Peternakan menyumbang 15% dan UMKM 12% dari aktivitas ekonomi warga.
                    </p>
                  </div>
                </div>

                {/* Produk Unggulan */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 mr-3">
                      <FiPackage className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Produksi Unggulan Desa</h3>
                  </div>
                  <div className="h-64 md:h-72">
                    <Bar
                      data={produkData}
                      options={{
                        ...chartOptions,
                        indexAxis: 'y',
                        plugins: {
                          ...chartOptions.plugins,
                          legend: {
                            display: false
                          },
                          tooltip: {
                            ...chartOptions.plugins?.tooltip,
                            callbacks: {
                              label: (context) => {
                                const label = context.label || '';
                                const value = context.raw as number;
                                return `${label}: ${value}% dari total produksi`;
                              }
                            }
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Beras sawah mendominasi produksi (40%), diikuti perkebunan rakyat (25%) dan ternak kambing (15%).
                      Ayam kampung menyumbang 12% dari produk unggulan desa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sumber Daya Alam */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Penggunaan Lahan Desa (Ha)</h3>
                </div>
                <div className="h-64 md:h-72">
                  <Pie 
                    data={sdaData} 
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        tooltip: {
                          ...chartOptions.plugins?.tooltip,
                          callbacks: {
                            label: (context) => {
                              const label = context.label || '';
                              const value = context.raw as number;
                              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                              const percentage = Math.round((value / total) * 100);
                              return `${label}: ${value} Ha (${percentage}%)`;
                            }
                          }
                        }
                      }
                    }} 
                  />
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Lahan sawah (264 Ha) dan perkebunan (309 Ha) mendominasi. Hutan rakyat seluas 150 Ha,
                    pemukiman 46 Ha, dan fasilitas umum 21 Ha dari total 1,179 Ha wilayah desa.
                  </p>
                </div>
              </div>
            </div>

            {/* Produk Unggulan Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Komoditas Unggulan Desa Cidugaleun</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${product.color} p-3 rounded-lg w-10 h-10 flex items-center justify-center mb-3`}>
                      {product.icon}
                    </div>
                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fasilitas Desa Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Infrastruktur & Fasilitas Desa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${facility.color} p-3 rounded-lg w-10 h-10 flex items-center justify-center mb-3`}>
                      {facility.icon}
                    </div>
                    <h4 className="font-medium text-gray-900">{facility.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{facility.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold mb-4 text-blue-800 flex items-center">
                <FiUsers className="mr-3" />
                Kontak Pengembangan Potensi Desa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Bidang Pertanian & Perkebunan</h4>
                  <p className="text-gray-700">Bapak Engkus (Kadus 01 Cidugaleun)</p>
                  <p className="text-gray-700">Kelompok Tani: 11 kelompok</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Bidang UMKM & BUMDes</h4>
                  <p className="text-gray-700">Ibu Anis Suryani (Bendahara Desa)</p>
                  <p className="text-gray-700">Email: desa.cidugaleun015@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataPotensiDesa;