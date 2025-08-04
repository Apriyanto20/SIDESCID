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
  // Data configuration
  const ekonomiData = {
    labels: ['Pertanian', 'Perkebunan', 'Peternakan', 'UMKM', 'Wisata'],
    datasets: [{
      data: [45, 30, 15, 25, 10],
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

  const produkData = {
    labels: ['Beras Organik', 'Kopi Arabika', 'Madu Kelulut', 'Kerajinan Bambu', 'Dodol Garut'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: 'rgba(99, 102, 241, 0.7)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  const sdaData = {
    labels: ['Sawah', 'Kebun', 'Hutan', 'Sungai', 'Lahan Tidur'],
    datasets: [{
      data: [120, 85, 65, 45, 30],
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

  // Stats cards data
  const stats = [
    {
      title: "Luas Wilayah",
      value: "320 Ha",
      icon: <FiMapPin className="w-5 h-5" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "UMKM Terdaftar",
      value: "28 Unit",
      icon: <FiDollarSign className="w-5 h-5" />,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Produk Unggulan",
      value: "5 Jenis",
      icon: <FiPackage className="w-5 h-5" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Pertumbuhan Ekonomi",
      value: "5.2%",
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  // Product data
  const products = [
    {
      name: "Beras Organik",
      desc: "Beras sehat tanpa pestisida dari sawah organik desa",
      icon: <FiPackage className="text-emerald-500" />,
      color: "bg-emerald-100"
    },
    {
      name: "Kopi Arabika",
      desc: "Kopi khas dari perkebunan warga dengan cita rasa tinggi",
      icon: <FiCoffee className="text-amber-500" />,
      color: "bg-amber-100"
    },
    {
      name: "Madu Kelulut",
      desc: "Madu alami dari lebah kelulut yang dibudidayakan warga",
      icon: <FiDroplet className="text-yellow-500" />,
      color: "bg-yellow-100"
    },
    {
      name: "Kerajinan Bambu",
      desc: "Produk kerajinan tangan dari bambu berkualitas",
      icon: <FiPackage className="text-green-500" />,
      color: "bg-green-100"
    }
  ];

  // Fasilitas Desa data
  const facilities = [
    {
      name: "Puskesmas",
      desc: "Pusat Kesehatan Masyarakat dengan fasilitas dasar",
      icon: <FiHeart className="text-red-500" />,
      color: "bg-red-100"
    },
    {
      name: "Sekolah Dasar",
      desc: "SD Negeri dengan 6 ruang kelas dan perpustakaan",
      icon: <FiBook className="text-blue-500" />,
      color: "bg-blue-100"
    },
   
 {
  name: "Masjid",
  desc: "Tempat ibadah umat Islam dengan fasilitas mushola dan tempat wudhu",
  icon: <MdMosque className="text-green-500" />,
  color: "bg-green-100"
},
    {
      name: "Posyandu",
      desc: "Pos Pelayanan Terpadu untuk balita dan lansia",
      icon: <FiUsers className="text-pink-500" />,
      color: "bg-pink-100"
    },
    
    {
      name: "Jalan Desa",
      desc: "Jalan aspal sepanjang 12 km menghubungkan dusun",
      icon: <FiTruck className="text-amber-500" />,
      color: "bg-amber-100"
    },
    {
      name: "Internet Desa",
      desc: "Akses WiFi gratis di balai desa dan sekolah",
      icon: <FiWifi className="text-indigo-500" />,
      color: "bg-indigo-100"
    },
    {
      name: "Balai Desa",
      desc: "Gedung serbaguna untuk kegiatan masyarakat",
      icon: <FiHome className="text-green-500" />,
      color: "bg-green-100"
    },
    {
      name: "Listrik Desa",
      desc: "100% rumah telah teraliri listrik PLN",
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
                <p className="text-gray-500 mt-1">Kecamatan Cigalontang, Kabupaten Tasikmalaya</p>
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
                    <h3 className="text-lg font-semibold text-gray-800">Potensi Ekonomi Desa</h3>
                  </div>
                  <div className="h-64 md:h-72">
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
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.raw as number;
              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${value}% (${percentage}% of total)`;
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
                      Sektor pertanian mendominasi dengan kontribusi 45%, diikuti oleh perkebunan (30%) dan UMKM (25%). 
                      Potensi wisata masih berkembang dengan kontribusi 10%.
                    </p>
                  </div>
                </div>

                {/* Produk Unggulan */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 mr-3">
                      <FiPackage className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Produk Unggulan Desa</h3>
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
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Beras Organik menjadi produk utama dengan nilai penjualan tertinggi (35%), 
                      diikuti oleh Kopi Arabika (25%) dan Madu Kelulut (20%).
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
                  <h3 className="text-lg font-semibold text-gray-800">Sumber Daya Alam</h3>
                </div>
                <div className="h-64 md:h-72">
                  <Pie 
                    data={sdaData} 
                    options={{
                      ...chartOptions,
                     plugins: {
  ...chartOptions.plugins,
  tooltip: {
    ...(chartOptions.plugins?.tooltip as any),
    callbacks: {
      label: function(context: any) {
        const label = context.label || '';
        const value = context.raw;
        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
        const percentage = Math.round((value / total) * 100);
        return `${label}: ${value} Ha (${percentage}%)`;
      }
    }
  }
} as ChartOptions<'pie'>['plugins']
                    }} 
                  />
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Lahan sawah mendominasi (120 Ha), diikuti kebun (85 Ha) dan hutan (65 Ha). 
                    Lahan tidur masih tersedia 30 Ha yang berpotensi untuk dikembangkan.
                  </p>
                </div>
              </div>
            </div>

            {/* Produk Unggulan Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Detail Produk Unggulan</h3>
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
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Fasilitas Desa</h3>
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
                  <h4 className="font-medium text-blue-700 mb-2">Bidang Ekonomi & UMKM</h4>
                  <p className="text-gray-700">Bapak Asep - 0812-3456-7890</p>
                  <p className="text-gray-700">Ibu Nining - 0856-7890-1234</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Bidang Pariwisata</h4>
                  <p className="text-gray-700">Bapak Dedi - 0821-2345-6789</p>
                  <p className="text-gray-700">Email: potensidesa@cidugaleun.desa.id</p>
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