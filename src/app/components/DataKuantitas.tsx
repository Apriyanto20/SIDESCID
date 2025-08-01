"use client";

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler } from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUsers, FiUser, FiCalendar, FiActivity } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, PointElement,
  LineElement, Filler
);

interface DataKuantitasProps {
  onClose: () => void;
}

const DataKuantitas: React.FC<DataKuantitasProps> = ({ onClose }) => {
  // Age group data with red accents
  const ageGroupData = {
    labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60+'],
    datasets: [
      {
        label: 'Laki-laki',
        data: [50, 55, 60, 65, 70, 75, 70, 65, 60, 55, 50, 45, 40],
        backgroundColor: 'rgba(255, 99, 102, 0.7)',
        borderColor: 'rgba(255, 99, 102, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: 'Perempuan',
        data: [48, 53, 58, 63, 68, 73, 68, 63, 58, 53, 48, 43, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  // Population trend with red line
  const populationTrendData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Total Penduduk',
      data: [3200, 3250, 3300, 3350, 3400, 3450],
      borderColor: 'rgba(255, 99, 102, 1)',
      backgroundColor: 'rgba(255, 99, 102, 0.1)',
      fill: true,
      tension: 0.4,
      borderWidth: 3,
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(255, 99, 102, 1)',
      pointBorderWidth: 3,
      pointRadius: 5,
    }],
  };

  // Gender distribution with red accent
  const genderData = {
    labels: ['Laki-laki', 'Perempuan'],
    datasets: [{
      data: [1680, 1770],
      backgroundColor: [
        'rgba(255, 99, 102, 0.7)',
        'rgba(54, 162, 235, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 102, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 2,
    }],
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Kuantitas Penduduk</h2>
                <p className="text-gray-500 mt-1">Distribusi dan perkembangan jumlah penduduk</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition p-1 -mt-2 -mr-2"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Stats Cards with red accent */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-xl border border-red-100"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-red-100 text-red-600 mr-4">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Penduduk</p>
                    <p className="text-2xl font-bold text-red-600">3,450 Jiwa</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rasio Gender</p>
                    <p className="text-2xl font-bold text-gray-800">94.9</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                    <FiActivity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pertumbuhan</p>
                    <p className="text-2xl font-bold text-gray-800">1.2%</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts with red accents */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Distribusi Usia Penduduk
                </h3>
                <div className="h-72">
                  <Bar
                    data={ageGroupData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            display: false, // Replaces drawBorder: false
                          },
                          border: {
                            display: false, // Hides the axis line
                          },
                          ticks: {
                            color: '#ef4444', // Red color for y-axis values
                            font: {
                              weight: 'bold' // Optional: makes ticks bold
                            }
                          }
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                          border: {
                            display: false, // Hides the axis line
                          },
                          ticks: {
                            color: '#ef4444', // Red color for x-axis labels
                            font: {
                              weight: 'bold' // Optional: makes labels bold
                            }
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            usePointStyle: true,
                            color: '#ef4444', // Optional: red color for legend labels
                            font: {
                              size: 12,
                              weight: 'bold'
                            },
                            padding: 20
                          }
                        },
                        tooltip: { // Added tooltip customization
                          backgroundColor: '#1f2937',
                          titleColor: '#ffffff',
                          bodyColor: '#ffffff',
                          padding: 12,
                          cornerRadius: 8,
                          displayColors: false
                        }
                      },
                      datasets: {
                        bar: {
                          barPercentage: 0.8, // Controls bar width (0.8 = 80% of available space)
                          categoryPercentage: 0.9 // Controls category width
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Komposisi Gender
                  </h3>
                  <div className="h-64">
                    <Bar
                      data={genderData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: { display: false },
                            border: { display: false },
                            ticks: { display: false }
                          },
                          x: {
                            grid: { display: false },
                            ticks: {
                              color: '#ef4444',
                              font: { weight: 'bold' }
                            },
                            border: { display: false }
                          }
                        },
                        plugins: {
                          legend: { display: false },
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
                        },
                        datasets: {
                          bar: {
                            barPercentage: 0.6,  // Correct placement for barPercentage
                            categoryPercentage: 0.8
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Perkembangan Penduduk
                  </h3>
                  <div className="h-64">
                    <Line
                      data={populationTrendData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: false,
                            min: 3000,
                            max: 3500,
                            grid: {
                              display: false,  // Hides grid lines
                              drawTicks: false, // Hides ticks
                            },
                            border: {
                              display: false, // Proper way to hide axis line
                            },
                            ticks: {
                              color: '#ef4444',
                              font: {
                                weight: 'bold'
                              },
                              padding: 8
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
                              color: '#ef4444',
                              font: {
                                weight: 'bold'
                              },
                              padding: 8
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
                              label: (context) => `${context.dataset.label}: ${context.parsed.y}`
                            }
                          }
                        },
                        elements: {
                          line: {
                            tension: 0.4,
                            borderWidth: 3,
                          },
                          point: {
                            radius: 5,
                            hoverRadius: 7,
                            backgroundColor: '#ef4444'
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