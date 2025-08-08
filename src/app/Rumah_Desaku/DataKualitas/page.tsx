"use client";
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
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
import { FiX, FiBook, FiHeart, FiHome, FiTrendingUp, FiUsers } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, ArcElement,
  PointElement, LineElement, Filler
);

const DataKualitas2024: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // Color Scheme - adjusted to match migration component
  const colors = {
    education: {
      primary: '#4F46E5',
      light: '#C7D2FE'
    },
    health: {
      primary: '#DC2626',
      light: '#FECACA'
    },
    economy: {
      primary: '#059669',
      light: '#A7F3D0'
    },
    general: {
      primary: '#7C3AED',
      light: '#DDD6FE'
    }
  };

  // =============== DATA PENDIDIKAN 2024 ===============
  const pendidikanData: ChartData<'pie'> = {
    labels: ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Diploma/Sarjana'],
    datasets: [{
      data: [1356, 3592, 899, 364, 106],
      backgroundColor: [
        'rgba(101, 163, 255, 0.7)',
        'rgba(120, 111, 255, 0.7)',
        'rgba(255, 159, 67, 0.7)',
        'rgba(235, 73, 152, 0.7)',
        'rgba(74, 222, 128, 0.7)'
      ],
      borderColor: [
        'rgba(101, 163, 255, 1)',
        'rgba(120, 111, 255, 1)',
        'rgba(255, 159, 67, 1)',
        'rgba(235, 73, 152, 1)',
        'rgba(74, 222, 128, 1)'
      ],
      borderWidth: 1
    }]
  };

  // =============== DATA KESEHATAN 2024 ===============
  const kesehatanData: ChartData<'bar'> = {
    labels: ['Puskesmas', 'Posyandu', 'Bidan', 'Paramedis', 'Polindes'],
    datasets: [{
      data: [1, 6, 2, 3, 1],
      backgroundColor: 'rgba(248, 113, 113, 0.7)',
      borderColor: 'rgba(248, 113, 113, 1)',
      borderWidth: 1,
      borderRadius: 6
    }]
  };

  // =============== DATA EKONOMI 2024 ===============
  const ekonomiData: ChartData<'line'> = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Usaha Mikro',
      data: [100, 110, 117, 125, 130],
      borderColor: 'rgba(74, 222, 128, 1)',
      backgroundColor: 'rgba(74, 222, 128, 0.1)',
      fill: true,
      tension: 0.4,
      borderWidth: 3,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(74, 222, 128, 1)',
      pointBorderWidth: 2,
      pointRadius: 5
    }]
  };

  // =============== STATS UTAMA 2024 ===============
  const stats2024 = [
    {
      icon: <FiBook className="w-5 h-5" />,
      title: "Angka Melek Huruf",
      value: "78.7%",
      desc: "Dari 6,378 penduduk",
      bgFrom: "from-blue-50",
      bgTo: "to-indigo-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: <FiHeart className="w-5 h-5" />,
      title: "Fasilitas Kesehatan",
      value: "6 Posyandu",
      desc: "1 Pustu & 2 Bidan",
      bgFrom: "from-red-50",
      bgTo: "to-rose-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: <FiHome className="w-5 h-5" />,
      title: "Usaha Mikro",
      value: "130 Unit",
      desc: "117 warung kelontong",
      bgFrom: "from-green-50",
      bgTo: "to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: "APBDes 2024",
      value: "Rp 2.32 M",
      desc: "Total anggaran",
      bgFrom: "from-purple-50",
      bgTo: "to-violet-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  // Chart options - matching migration component style
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

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 90,
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
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      }
    },
  };

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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Kualitas Desa Cidugaleun</h2>
                <p className="text-gray-500 mt-1">Kecamatan Cigalontang • Data Terkini 2024</p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition p-1 -mt-2 -mr-2"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Population Overview */}
            <div className="flex items-center text-gray-600 mb-8">
              <FiUsers className="mr-2" />
              <span className="font-medium">Total Penduduk: 6,378 Jiwa</span>
              <span className="mx-3">•</span>
              <span>Luas Wilayah: 1,179.37 Ha</span>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
              {stats2024.map((stat, index) => (
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
                      <p className="text-xs text-gray-400 mt-1">{stat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="space-y-8">
              {/* Pendidikan Section */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Profil Pendidikan Penduduk
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-72">
                    <Pie data={pendidikanData} options={pieOptions} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Fasilitas Pendidikan</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>5 SD Negeri melayani 3,592 siswa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>3 SMP Swasta/Madrasah</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>2 SMA Swasta di wilayah desa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>8 PAUD/TK untuk pendidikan dini</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Analisis Pendidikan</h4>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">21.3% penduduk</span> belum pernah sekolah, 
                        sementara <span className="font-semibold">56.3%</span> hanya menyelesaikan SD. 
                        Hanya <span className="font-semibold">1.7%</span> yang mencapai pendidikan tinggi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Kesehatan Section */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Layanan Kesehatan
                  </h3>
                  <div className="h-64 mb-4">
                    <Bar data={kesehatanData} options={barOptions} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Tenaga Medis</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>2 Bidan Desa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>3 Paramedis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span>4 Dukun Terlatih</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Cakupan Layanan</h4>
                      <p className="text-sm text-gray-600">
                        Rasio: <span className="font-semibold">1 bidan</span> melayani 
                        <span className="font-semibold"> 3,189 penduduk</span>. 
                        6 Posyandu tersebar di 4 dusun.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ekonomi Section */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Perkembangan Ekonomi
                  </h3>
                  <div className="h-64 mb-4">
                    <Line data={ekonomiData} options={lineOptions} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Usaha Dominan</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>117 Warung Kelontong</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>12 Pengrajin Kayu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>10 Pengrajin Batu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>24 Tukang Jahit</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Potensi</h4>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">1 BUMDes</span> dengan 5 pengurus. 
                        Pertumbuhan usaha mikro <span className="font-semibold">30%</span> dalam 4 tahun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                <FiTrendingUp className="mr-2" />
                Catatan Penting
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pendidikan dasar (SD) masih dominan dengan 56.3% penduduk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Rasio tenaga kesehatan masih perlu ditingkatkan untuk mencakup seluruh penduduk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Usaha mikro tumbuh 30% dalam 4 tahun terakhir menunjukkan perkembangan ekonomi positif</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataKualitas2024;