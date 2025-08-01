"use client";

import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
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
import { FiX, FiUsers, FiArrowUp, FiArrowDown, FiMapPin } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, 
  Title, Tooltip, Legend, ArcElement, 
  PointElement, LineElement, Filler
);

interface DataMigrasiProps {
  onClose: () => void;
}

const DataMigrasi: React.FC<DataMigrasiProps> = ({ onClose }) => {
  // Data migrasi masuk/keluar per tahun
  const migrasiTahunanData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Migrasi Masuk',
        data: [45, 52, 48, 60, 65, 72],
        backgroundColor: 'rgba(74, 222, 128, 0.7)',
        borderColor: 'rgba(74, 222, 128, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: 'Migrasi Keluar',
        data: [38, 42, 50, 55, 58, 62],
        backgroundColor: 'rgba(248, 113, 113, 0.7)',
        borderColor: 'rgba(248, 113, 113, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  // Data asal migrasi masuk
  const asalMigrasiData: ChartData<'pie'> = {
    labels: ['Kota Lain', 'Desa Tetangga', 'Luar Kabupaten', 'Luar Provinsi'],
    datasets: [{
      data: [120, 85, 45, 30],
      backgroundColor: [
        'rgba(101, 163, 255, 0.7)',
        'rgba(120, 111, 255, 0.7)',
        'rgba(255, 159, 67, 0.7)',
        'rgba(235, 73, 152, 0.7)'
      ],
      borderColor: [
        'rgba(101, 163, 255, 1)',
        'rgba(120, 111, 255, 1)',
        'rgba(255, 159, 67, 1)',
        'rgba(235, 73, 152, 1)'
      ],
      borderWidth: 1,
    }],
  };

  // Data tujuan migrasi keluar
  const tujuanMigrasiData: ChartData<'bar'> = {
    labels: ['Jakarta', 'Bandung', 'Bogor', 'Lainnya'],
    datasets: [{
      data: [85, 65, 45, 25],
      backgroundColor: 'rgba(248, 113, 113, 0.7)',
      borderColor: 'rgba(248, 113, 113, 1)',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  // Tren migrasi netto
  const nettoMigrasiData: ChartData<'line'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Migrasi Netto',
      data: [7, 10, -2, 5, 7, 10],
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
        callback: function(value: number | string) {
          const numValue = typeof value === 'string' ? parseFloat(value) : value;
          return numValue > 0 ? `+${numValue}` : numValue.toString();
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
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y > 0 ? `+${context.parsed.y}` : context.parsed.y;
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
      title: "Migrasi Masuk (2023)",
      value: "72 Jiwa",
      icon: <FiArrowDown className="w-5 h-5" />,
      bgFrom: "from-green-50",
      bgTo: "to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Migrasi Keluar (2023)",
      value: "62 Jiwa",
      icon: <FiArrowUp className="w-5 h-5" />,
      bgFrom: "from-red-50",
      bgTo: "to-rose-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      title: "Migrasi Netto (2023)",
      value: "+10 Jiwa",
      icon: <FiUsers className="w-5 h-5" />,
      bgFrom: "from-blue-50",
      bgTo: "to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Migrasi Penduduk</h2>
                <p className="text-gray-500 mt-1">Data perpindahan penduduk masuk dan keluar desa</p>
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
                  Perbandingan Migrasi Masuk vs Keluar
                </h3>
                <div className="h-72">
                  <Bar data={migrasiTahunanData} options={barOptions} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Asal Migrasi Masuk
                  </h3>
                  <div className="h-64">
                    <Pie data={asalMigrasiData} options={pieOptions} />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Tujuan Migrasi Keluar
                  </h3>
                  <div className="h-64">
                    <Bar data={tujuanMigrasiData} options={{
                      ...barOptions,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      }
                    }} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tren Migrasi Netto 5 Tahun Terakhir
                </h3>
                <div className="h-64">
                  <Line data={nettoMigrasiData} options={lineOptions} />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                <FiMapPin className="mr-2" />
                Informasi Tambahan
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Migrasi netto positif menunjukkan lebih banyak penduduk yang masuk ke desa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Puncak migrasi keluar terjadi pada tahun 2020 karena pandemi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Mayoritas migran masuk berasal dari desa tetangga (45%)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataMigrasi;