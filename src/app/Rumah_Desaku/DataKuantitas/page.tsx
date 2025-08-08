"use client";

import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler, ArcElement } from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUsers, FiUser, FiTrendingUp, FiHome, FiMap, FiInfo } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, PointElement,
  LineElement, Filler, ArcElement
);

interface DataKuantitasProps {
  onClose: () => void;
}

const DataKuantitas: React.FC<DataKuantitasProps> = ({ onClose }) => {
  // Data configuration
  const ageGroupData = {
    labels: ['0-6', '7-12', '13-15', '16-18', '19-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+'],
    datasets: [
      {
        label: 'Laki-laki',
        data: [180, 119, 125, 114, 158, 143, 144, 147, 137, 123, 110, 94, 88, 62, 26, 23],
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Perempuan',
        data: [180, 119, 125, 114, 158, 143, 144, 147, 137, 123, 110, 94, 88, 62, 26, 23],
        backgroundColor: 'rgba(236, 72, 153, 0.7)',
        borderColor: 'rgba(236, 72, 153, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const populationTrendData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Total Penduduk',
      data: [6000, 6100, 6200, 6300, 6378, 6378],
      borderColor: 'rgba(16, 185, 129, 1)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.3,
      borderWidth: 2,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(16, 185, 129, 1)',
      pointBorderWidth: 2,
      pointRadius: 4,
    }],
  };

  const genderData = {
    labels: ['Laki-laki', 'Perempuan'],
    datasets: [{
      data: [3301, 3077],
      backgroundColor: [
        'rgba(99, 102, 241, 0.7)',
        'rgba(236, 72, 153, 0.7)'
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(236, 72, 153, 1)'
      ],
      borderWidth: 1,
    }],
  };

  const educationData = {
    labels: ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Diploma', 'Sarjana'],
    datasets: [{
      data: [1356, 3592, 899, 364, 27, 87],
      backgroundColor: [
        'rgba(99, 102, 241, 0.7)',
        'rgba(236, 72, 153, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(139, 92, 246, 0.7)',
        'rgba(20, 184, 166, 0.7)'
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(20, 184, 166, 1)'
      ],
      borderWidth: 1,
    }],
  };

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
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Kuantitas Desa Cidugaleun</h2>
                <p className="text-gray-500 mt-1">Analisis demografi dan perkembangan penduduk tahun 2024</p>
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
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600 mr-4">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Penduduk</p>
                    <p className="text-xl font-bold text-gray-800">6,378 Jiwa</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-pink-100 text-pink-600 mr-4">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rasio Gender</p>
                    <p className="text-xl font-bold text-gray-800">107.3</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600 mr-4">
                    <FiTrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pertumbuhan</p>
                    <p className="text-xl font-bold text-gray-800">1.3%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-amber-100 text-amber-600 mr-4">
                    <FiHome className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Luas Wilayah</p>
                    <p className="text-xl font-bold text-gray-800">1,179.37 Ha</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Age Distribution */}
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <FiUser className="text-indigo-500 mr-2" />
                    Distribusi Usia Penduduk
                  </h3>
                  <div className="h-72">
                    <Bar
                      data={ageGroupData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'top',
                            labels: {
                              usePointStyle: true,
                              padding: 20
                            }
                          },
                          tooltip: {
                            backgroundColor: '#1f2937',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            padding: 12,
                            cornerRadius: 8
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: { display: false },
                            border: { display: false }
                          },
                          x: {
                            grid: { display: false },
                            border: { display: false }
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Gender Composition */}
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <FiUsers className="text-pink-500 mr-2" />
                    Komposisi Gender
                  </h3>
                  <div className="h-72">
                    <Pie
                      data={genderData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { position: 'right' },
                          tooltip: {
                            callbacks: {
                              label: (context) => {
                                const label = context.label || '';
                                const value = context.raw as number;
                                const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                              }
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Population Trend */}
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <FiTrendingUp className="text-emerald-500 mr-2" />
                    Perkembangan Penduduk
                  </h3>
                  <div className="h-72">
                    <Line
                      data={populationTrendData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                          tooltip: {
                            backgroundColor: '#1f2937',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            padding: 12,
                            cornerRadius: 8
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: false,
                            min: 5000,
                            grid: { display: false },
                            border: { display: false }
                          },
                          x: {
                            grid: { display: false },
                            border: { display: false }
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Education Composition */}
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <FiInfo className="text-amber-500 mr-2" />
                    Tingkat Pendidikan
                  </h3>
                  <div className="h-72">
                    <Pie
                      data={educationData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { position: 'right' },
                          tooltip: {
                            callbacks: {
                              label: (context) => {
                                const label = context.label || '';
                                const value = context.raw as number;
                                const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                              }
                            }
                          }
                        }
                      }}
                    />
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

export default DataKuantitas;