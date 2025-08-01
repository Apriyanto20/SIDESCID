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
import { FiX, FiUser, FiUsers, FiBook, FiCalendar, FiFileText } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, ArcElement,
  PointElement, LineElement, Filler
);

interface DataAdministrasiProps {
  onClose: () => void;
}

const DataAdministrasiKependudukan: React.FC<DataAdministrasiProps> = ({ onClose }) => {
  // Data dokumen per tahun
  const dokumenTahunanData: ChartData<'bar'> = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'KTP Elektronik',
        data: [120, 150, 180, 210, 250],
        backgroundColor: 'rgba(101, 163, 255, 0.7)',
        borderColor: 'rgba(101, 163, 255, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: 'Kartu Keluarga',
        data: [80, 90, 100, 110, 120],
        backgroundColor: 'rgba(120, 111, 255, 0.7)',
        borderColor: 'rgba(120, 111, 255, 1)',
        borderWidth: 2,
        borderRadius: 4,
      }
    ],
  };

  // Data jenis dokumen
  const jenisDokumenData: ChartData<'pie'> = {
    labels: ['KTP Elektronik', 'Kartu Keluarga', 'Akta Kelahiran', 'Akta Kematian'],
    datasets: [{
      data: [920, 520, 180, 45],
      backgroundColor: [
        'rgba(101, 163, 255, 0.7)',
        'rgba(120, 111, 255, 0.7)',
        'rgba(74, 222, 128, 0.7)',
        'rgba(248, 113, 113, 0.7)'
      ],
      borderColor: [
        'rgba(101, 163, 255, 1)',
        'rgba(120, 111, 255, 1)',
        'rgba(74, 222, 128, 1)',
        'rgba(248, 113, 113, 1)'
      ],
      borderWidth: 1,
    }],
  };

  // Data proses dokumen
  const prosesDokumenData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [{
      label: 'Dokumen Diproses',
      data: [25, 30, 28, 35, 40, 38],
      borderColor: 'rgba(139, 92, 246, 1)',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.3,
      fill: true,
      borderWidth: 2,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(139, 92, 246, 1)',
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

  // Stats cards data
  const stats = [
    {
      title: "KTP Elektronik",
      value: "920 Orang",
      icon: <FiUser className="w-5 h-5" />,
      bgFrom: "from-blue-50",
      bgTo: "to-indigo-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Kartu Keluarga",
      value: "520 KK",
      icon: <FiUsers className="w-5 h-5" />,
      bgFrom: "from-purple-50",
      bgTo: "to-violet-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Akta Kelahiran",
      value: "180 Dokumen",
      icon: <FiFileText className="w-5 h-5" />,
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Administrasi Kependudukan</h2>
                <p className="text-gray-500 mt-1">Kartu keluarga, KTP, akta kelahiran dan kematian</p>
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
                  Penerbitan Dokumen 5 Tahun Terakhir
                </h3>
                <div className="h-72">
                  <Bar data={dokumenTahunanData} options={barOptions} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Jenis Dokumen Kependudukan
                  </h3>
                  <div className="h-64">
                    <Pie data={jenisDokumenData} options={pieOptions} />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Proses Dokumen Tahun Ini
                  </h3>
                  <div className="h-64">
                    <Line data={prosesDokumenData} options={lineOptions} />
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Rekap Administrasi Kependudukan
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Dokumen</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tahun</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">KTP Elektronik</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">920</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kartu Keluarga</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">520</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Akta Kelahiran</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">180</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Akta Kematian</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                <FiBook className="mr-2" />
                Informasi Layanan Administrasi
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pembuatan KTP Elektronik: Setiap hari kerja jam 08.00-14.00</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pembuatan KK baru: Membawa surat pengantar dari RT/RW</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pencatatan kelahiran: Maksimal 60 hari setelah kelahiran</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pelayanan administrasi kependudukan gratis tanpa biaya</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataAdministrasiKependudukan;