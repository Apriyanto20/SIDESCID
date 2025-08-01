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
import { FiX, FiTrendingUp, FiBook, FiHeart } from 'react-icons/fi';

// Register ChartJS components
ChartJS.register(
  CategoryScale, LinearScale, BarElement, 
  Title, Tooltip, Legend, ArcElement, 
  PointElement, LineElement, Filler
);

interface DataKualitasProps {
  onClose: () => void;
}

const createGradient = (ctx: CanvasRenderingContext2D, color1: string, color2: string) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 180);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};

const DataKualitas: React.FC<DataKualitasProps> = ({ onClose }) => {
  // Education data
  const educationData: ChartData<'pie'> = {
    labels: ['SD', 'SMP', 'SMA', 'Diploma', 'Sarjana', 'Pascasarjana'],
    datasets: [{
      data: [120, 90, 75, 40, 60, 15],
      backgroundColor: [
        'rgba(101, 116, 255, 0.8)',
        'rgba(46, 196, 182, 0.8)',
        'rgba(255, 159, 67, 0.8)',
        'rgba(235, 73, 152, 0.8)',
        'rgba(120, 111, 255, 0.8)',
        'rgba(67, 206, 255, 0.8)'
      ],
      borderWidth: 0,
    }],
  };

  // Health data
  const healthData: ChartData<'bar'> = {
    labels: ['BPJS', 'Puskesmas', 'Imunisasi', 'Pemeriksaan'],
    datasets: [{
      data: [85, 92, 78, 65],
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        return createGradient(ctx, 'rgba(101, 116, 255, 0.8)', 'rgba(46, 196, 182, 0.8)');
      },
      borderRadius: 6,
      borderWidth: 0,
    }],
  };

  // IPM trend data
  const ipmData: ChartData<'line'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'IPM',
      data: [65, 67, 68, 70, 72, 74],
      borderColor: 'rgba(235, 73, 152, 1)',
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        return createGradient(ctx, 'rgba(235, 73, 152, 0.2)', 'rgba(235, 73, 152, 0.05)');
      },
      fill: 'origin',
      tension: 0.4,
      borderWidth: 2,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(235, 73, 152, 1)',
      pointBorderWidth: 2,
    }],
  };

  // Chart options
  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '60%',
  };

  const barOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        display: false,  // This hides the grid lines and border
      },
      // If you want to keep the axis line but remove grid lines:
      // border: {
      //   display: false
      // }
    },
    x: {
      grid: {
        display: false,
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

 const lineOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      min: 60,
      max: 80,
      grid: {
        display: false, // Changed from drawBorder to display
      },
      // If you want to keep grid lines but remove the axis line:
      // border: {
      //   display: false
      // }
    },
    x: {
      grid: {
        display: false,
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
      title: "IPM 2023",
      value: "74.2",
      icon: <FiTrendingUp className="w-5 h-5" />,
      bgFrom: "from-blue-50",
      bgTo: "to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Rata Lama Sekolah",
      value: "8.5 Tahun",
      icon: <FiBook className="w-5 h-5" />,
      bgFrom: "from-purple-50",
      bgTo: "to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Harapan Hidup",
      value: "71.8 Tahun",
      icon: <FiHeart className="w-5 h-5" />,
      bgFrom: "from-green-50",
      bgTo: "to-teal-50",
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Kualitas Penduduk</h2>
                <p className="text-gray-500 mt-1">Indeks pembangunan manusia dan indikator kualitas hidup</p>
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
                  Tingkat Pendidikan Penduduk
                </h3>
                <div className="h-72">
                  <Pie data={educationData} options={pieOptions} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Indikator Kesehatan
                  </h3>
                  <div className="h-64">
                    <Bar data={healthData} options={barOptions} />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Tren IPM 5 Tahun
                  </h3>
                  <div className="h-64">
                    <Line data={ipmData} options={lineOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DataKualitas;