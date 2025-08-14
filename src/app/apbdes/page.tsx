'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome,
    FiDollarSign,
    FiPieChart,
    FiBarChart2,
    FiChevronDown,
    FiChevronRight,
    FiCreditCard,
    FiHelpCircle,
    FiInfo
} from 'react-icons/fi';

interface SubItem {
    id: number;
    name: string;
    amount: number;
}

interface FinancialItem {
    id: number;
    name?: string;
    category?: string;
    amount: number;
    percentage?: number;
    color?: string;
    icon?: React.ReactNode;
    subItems?: SubItem[];
}

interface FinancialCategory {
    total: number;
    items: FinancialItem[];
}

interface FinancialData {
    pendapatan: FinancialCategory;
    belanja: FinancialCategory;
}

interface ExpandedSections {
    pendapatan: boolean;
    belanja: boolean;
    [key: `detailPendapatan_${number}`]: boolean;
}

const APBDesReport = () => {
    const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
        pendapatan: true,
        belanja: true,
        detailPendapatan_0: false // Initialize with default value
    });

    // Data keuangan
    const financialData: FinancialData = {
        pendapatan: {
            total: 2323181000,
            items: [
                {
                    id: 1,
                    category: "Pendapatan Asli Desa",
                    amount: 23903000,
                    icon: <FiHome className="text-blue-500" />,
                    subItems: [
                        { id: 1, name: "Pungutan / Retribusi", amount: 23903000 },
                        { id: 2, name: "Hasil Usaha BUM Desa", amount: 0 },
                        { id: 3, name: "Hibah/Swadaya", amount: 0 },
                        { id: 4, name: "Pendapatan lainnya", amount: 0 }
                    ]
                },
                {
                    id: 2,
                    category: "Bantuan yang diterima Desa",
                    amount: 2298171000,
                    icon: <FiCreditCard className="text-green-500" />,
                    subItems: [
                        { id: 1, name: "Pemerintah", amount: 1491971000 },
                        { id: 2, name: "Provinsi", amount: 130000000 },
                        { id: 3, name: "Kabupaten/Kota", amount: 676200000 }
                    ]
                },
                {
                    id: 3,
                    category: "Bantuan lain tidak mengikat",
                    amount: 0,
                    icon: <FiHelpCircle className="text-yellow-500" />
                },
                {
                    id: 4,
                    category: "SILPA / SIKPA",
                    amount: 7724582,
                    icon: <FiDollarSign className="text-purple-500" />
                }
            ]
        },
        belanja: {
            total: 2298171000,
            items: [
                {
                    id: 1,
                    name: "Belanja Rutin",
                    amount: 1733305582,
                    percentage: 75,
                    color: 'bg-blue-500'
                },
                {
                    id: 2,
                    name: "Belanja Tidak Rutin",
                    amount: 597600000,
                    percentage: 25,
                    color: 'bg-green-500'
                }
            ]
        }
    };

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const toggleSection = (section: keyof ExpandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleDetail = (section: `detailPendapatan_${number}`) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const ProgressBar = ({ percentage, color }: { percentage: number; color: string }) => {
        return (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                    className={`h-2.5 rounded-full ${color}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 ">
            <div className="max-w-6xl mx-auto pt-20">
                {/* Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
                        <FiHome className="mr-2 sm:mr-3 text-blue-600" />
                        Laporan Keuangan Desa/Kelurahan
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 flex items-center">
                        <FiInfo className="mr-2" />
                        Tahun Anggaran 2024 | Sumber: Profil Desa Cidugaleun 2024
                    </p>
                </motion.div>

                {/* Pendapatan Section */}
                <motion.div
                    className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div
                        className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-blue-100"
                        onClick={() => toggleSection('pendapatan')}
                    >
                        <div className="flex items-center">
                            <FiDollarSign className="text-blue-600 text-xl mr-3" />
                            <h2 className="font-semibold text-lg sm:text-xl">
                                1. Pendapatan Desa/Kelurahan
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-blue-700 mr-3">
                                {formatCurrency(financialData.pendapatan.total)}
                            </span>
                            {expandedSections.pendapatan ?
                                <FiChevronDown className="text-blue-600" /> :
                                <FiChevronRight className="text-blue-600" />
                            }
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedSections.pendapatan && (
                            <motion.div
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                variants={{
                                    collapsed: { opacity: 0, height: 0 },
                                    expanded: { opacity: 1, height: 'auto' }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="divide-y divide-gray-100">
                                    {financialData.pendapatan.items.map((item, index) => {
                                        const detailKey = `detailPendapatan_${item.id}` as const;
                                        return (
                                            <div key={item.id} className="p-4 sm:p-5">
                                                <div
                                                    className="flex justify-between items-center cursor-pointer"
                                                    onClick={() => toggleDetail(detailKey)}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="p-2 rounded-lg bg-blue-50 mr-3">
                                                            {item.icon}
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-800">
                                                                {String.fromCharCode(97 + index)}. {item.category}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {formatCurrency(item.amount)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {item.subItems && (
                                                        <div>
                                                            {expandedSections[detailKey] ?
                                                                <FiChevronDown className="text-gray-400" /> :
                                                                <FiChevronRight className="text-gray-400" />
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                {item.subItems && (
                                                    <AnimatePresence>
                                                        {expandedSections[detailKey] && (
                                                            <motion.div
                                                                initial="collapsed"
                                                                animate="expanded"
                                                                exit="collapsed"
                                                                variants={{
                                                                    collapsed: { opacity: 0, height: 0 },
                                                                    expanded: { opacity: 1, height: 'auto' }
                                                                }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <div className="ml-12 mt-3 space-y-2">
                                                                    {item.subItems.map(subItem => (
                                                                        <div key={subItem.id} className="flex justify-between py-1">
                                                                            <span className="text-sm text-gray-600">- {subItem.name}</span>
                                                                            <span className="text-sm font-medium">
                                                                                {formatCurrency(subItem.amount)}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Belanja Section */}
                <motion.div
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div
                        className="p-4 sm:p-5 border-b border-gray-200 flex justify-between items-center cursor-pointer bg-gradient-to-r from-green-50 to-green-100"
                        onClick={() => toggleSection('belanja')}
                    >
                        <div className="flex items-center">
                            <FiBarChart2 className="text-green-600 text-xl mr-3" />
                            <h2 className="font-semibold text-lg sm:text-xl">
                                2. Belanja Desa/Kelurahan
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-green-700 mr-3">
                                {formatCurrency(financialData.belanja.total)}
                            </span>
                            {expandedSections.belanja ?
                                <FiChevronDown className="text-green-600" /> :
                                <FiChevronRight className="text-green-600" />
                            }
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedSections.belanja && (
                            <motion.div
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                variants={{
                                    collapsed: { opacity: 0, height: 0 },
                                    expanded: { opacity: 1, height: 'auto' }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="divide-y divide-gray-100">
                                    {financialData.belanja.items.map((item, index) => (
                                        <div key={item.id} className="p-4 sm:p-5">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-medium text-gray-800">
                                                        {String.fromCharCode(97 + index)}. {item.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {formatCurrency(item.amount)}
                                                    </p>
                                                    {item.percentage && item.color && (
                                                        <ProgressBar
                                                            percentage={item.percentage}
                                                            color={item.color}
                                                        />
                                                    )}
                                                </div>
                                                <div className="text-right">
                                                    {item.percentage && (
                                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.percentage > 70 ? 'bg-green-100 text-green-800' :
                                                                item.percentage > 40 ? 'bg-yellow-100 text-yellow-800' :
                                                                    'bg-red-100 text-red-800'
                                                            }`}>
                                                            {item.percentage}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Info Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6"
                >
                    <h3 className="font-semibold text-blue-800 flex items-center mb-2">
                        <FiInfo className="mr-2" /> Informasi
                    </h3>
                    <ul className="list-disc pl-5 text-blue-700 text-sm space-y-1">
                        <li>Data keuangan berdasarkan laporan resmi desa</li>
                        <li>Format mata uang dalam Rupiah (IDR)</li>
                        <li>Persentase belanja menunjukkan alokasi anggaran</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default APBDesReport;