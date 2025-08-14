"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Legend, PieLabelRenderProps
} from "recharts";
import {
  FiUsers, FiShield, FiAward, FiFileText, FiHome, FiBook,
  FiBriefcase, FiBarChart2, FiGrid, FiTrendingUp
} from 'react-icons/fi';

// Blue color palette
const BLUE_PRIMARY = '#1D4ED8';  // Dark blue
const BLUE_SECONDARY = '#3B82F6'; // Medium blue
const BLUE_LIGHT = '#93C5FD';     // Light blue
const BLUE_BG = '#EFF6FF';        // Very light blue background

// ✅ Perbaikan typing di sini
const CustomPieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Data extracted from the PDF (Bab 4 - Sumber Daya Manusia)
const demographicData = {
  overview: {
    totalPopulation: 6378,
    growthRate: 2.3,
    density: Math.round(6378 / 1179.37 * 100) / 100, // Population per km²
    households: 1592 // Estimated based on average household size of 4
  },
  gender: [
    { name: "Laki-laki", value: 3301, color: BLUE_PRIMARY, icon: "♂" },
    { name: "Perempuan", value: 3077, color: BLUE_SECONDARY, icon: "♀" },
  ],
  ageGroups: [
    { name: "0-6", value: 655, color: BLUE_PRIMARY },
    { name: "7-12", value: 458, color: BLUE_SECONDARY },
    { name: "13-15", value: 418, color: BLUE_LIGHT },
    { name: "16-18", value: 409, color: BLUE_PRIMARY },
    { name: "19-24", value: 536, color: BLUE_SECONDARY },
    { name: "25-29", value: 484, color: BLUE_LIGHT },
    { name: "30-34", value: 527, color: BLUE_PRIMARY },
    { name: "35-39", value: 496, color: BLUE_SECONDARY },
    { name: "40-44", value: 487, color: BLUE_LIGHT },
    { name: "45-49", value: 453, color: BLUE_PRIMARY },
    { name: "50-54", value: 383, color: BLUE_SECONDARY },
    { name: "55-59", value: 351, color: BLUE_LIGHT },
    { name: "60-64", value: 313, color: BLUE_PRIMARY },
    { name: "65-69", value: 216, color: BLUE_SECONDARY },
    { name: "70-74", value: 91, color: BLUE_LIGHT },
    { name: "75+", value: 86, color: BLUE_PRIMARY },
  ],
  religions: [
    { name: "Islam", value: 6.378, color: BLUE_PRIMARY, icon: "🕌" },
    { name: "Kristen", value: 0, color: BLUE_SECONDARY, icon: "⛪" },
    { name: "Katolik", value: 0, color: '#BFDBFE', icon: "✝️" },
    { name: "Hindu", value: 0, color: BLUE_LIGHT, icon: "🕉️" },
    { name: "Budha", value: 0, color: '#DBEAFE', icon: "☸️" },
  ],
  occupations: [
    { name: "PNS/POLRI/TNI", value: 43, color: BLUE_PRIMARY, icon: "🏛️" },
    { name: "Karyawan Swasta", value: 136, color: BLUE_SECONDARY, icon: "👔" },
    { name: "Buruh Tani/Harian", value: 1730, color: BLUE_LIGHT, icon: "👷" },
    { name: "Petani/Pekebun", value: 41, color: BLUE_PRIMARY, icon: "🌾" },
    { name: "Wiraswasta", value: 44, color: BLUE_SECONDARY, icon: "💼" },
    { name: "Pelajar/Mahasiswa", value: 1238, color: BLUE_LIGHT, icon: "🎓" },
    { name: "Tidak Bekerja", value: 1165, color: BLUE_PRIMARY, icon: "🏠" },
    { name: "Lainnya", value: 1371, color: BLUE_SECONDARY, icon: "❓" },
  ],
  education: [
    { name: "Tidak Sekolah", value: 1356, color: BLUE_PRIMARY },
    { name: "SD", value: 3592, color: BLUE_SECONDARY },
    { name: "SMP", value: 899, color: BLUE_LIGHT },
    { name: "SMA", value: 364, color: BLUE_PRIMARY },
    { name: "Diploma", value: 27, color: BLUE_SECONDARY },
    { name: "Sarjana", value: 87, color: BLUE_LIGHT },
    { name: "Pascasarjana", value: 19, color: BLUE_PRIMARY },
  ]
};

const renderGenderChart = () => (
  <div className="w-full h-80">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={demographicData.gender}
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={70}
          paddingAngle={2}
          dataKey="value"
          label={<CustomPieLabel cx={undefined} cy={undefined} midAngle={undefined} innerRadius={undefined} outerRadius={undefined} percent={undefined} index={undefined} name={undefined} value={undefined} />}
          labelLine={false}
        >
          {demographicData.gender.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value} orang`, name]}
          contentStyle={{
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '12px',
            backgroundColor: 'white'
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: '20px' }}
          formatter={(value, entry, index) => (
            <span className="text-gray-600 text-sm">
              {demographicData.gender[index].icon} {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const renderAgeChart = () => (
  <div className="w-full h-80">
    <ResponsiveContainer>
      <BarChart
        data={demographicData.ageGroups}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: '#6b7280' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#6b7280' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: '#f3f4f6' }}
          contentStyle={{
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '12px',
            backgroundColor: 'white'
          }}
          formatter={(value) => [`${value} orang`]}
        />
        <Bar
          dataKey="value"
          radius={[6, 6, 0, 0]}
          animationDuration={1500}
        >
          {demographicData.ageGroups.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const renderReligionChart = () => (
  <div className="w-full h-80">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={demographicData.religions}
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={70}
          paddingAngle={2}
          dataKey="value"
          label={CustomPieLabel}
          labelLine={false}
        >
          {demographicData.religions.map((entry, index) => (
            <Cell key={`religion-cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value} orang`, name]}
          contentStyle={{
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '12px',
            backgroundColor: 'white'
          }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: '20px' }}
          formatter={(value, entry, index) => (
            <span className="text-gray-600 text-sm">
              {demographicData.religions[index].icon} {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const renderOccupationList = () => (
  <div className="space-y-4">
    {demographicData.occupations.map((item, index) => (
      <motion.div
        key={`occupation-${index}`}
        whileHover={{ x: 5 }}
        className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
            <span className="text-xl">{item.icon}</span>
          </div>
          <div>
            <span className="font-medium text-gray-800">{item.name}</span>
            <div className="flex items-center mt-1">
              <div
                className="h-2 rounded-full mr-2"
                style={{
                  width: `${(item.value / Math.max(...demographicData.occupations.map(o => o.value))) * 100}%`,
                  backgroundColor: item.color
                }}
              />
              <span className="text-xs text-gray-500">
                {(item.value / demographicData.overview.totalPopulation * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
        <span className="font-bold text-blue-800">{item.value.toLocaleString()}</span>
      </motion.div>
    ))}
  </div>
);

const VisionMissionSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-blue-100"
  >
    <div className="text-center mb-8 mt-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Desa Cidugaleun</h2>
      <p className="text-lg text-gray-600">
        Kecamatan Cigalontang, Kabupaten Tasikmalaya
      </p>
    </div>
  </motion.div>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('demografi');

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <VisionMissionSection />

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Data Demografi Desa</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-xl">
            <div className="flex items-center">
              <FiUsers className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Total Penduduk</span>
            </div>
            <p className="text-2xl font-bold text-blue-800 mt-2">
              {demographicData.overview.totalPopulation.toLocaleString()}
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <div className="flex items-center">
              <FiTrendingUp className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Pertumbuhan</span>
            </div>
            <p className="text-2xl font-bold text-blue-800 mt-2">
              {demographicData.overview.growthRate}%
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <div className="flex items-center">
              <FiGrid className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Kepadatan</span>
            </div>
            <p className="text-2xl font-bold text-blue-800 mt-2">
              {demographicData.overview.density}/km²
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <div className="flex items-center">
              <FiHome className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Rumah Tangga</span>
            </div>
            <p className="text-2xl font-bold text-blue-800 mt-2">
              {demographicData.overview.households.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex space-x-2 mb-6 border-b border-gray-200 overflow-x-auto">
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'demografi' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('demografi')}
          >
            Demografi
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'pekerjaan' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('pekerjaan')}
          >
            Pekerjaan
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'pendidikan' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('pendidikan')}
          >
            Pendidikan
          </button>
          <button
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'agama' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('agama')}
          >
            Agama
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'demografi' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FiUsers className="mr-2 text-blue-600" />
                    Komposisi Gender
                  </h3>
                  {renderGenderChart()}
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FiBarChart2 className="mr-2 text-blue-600" />
                    Distribusi Usia
                  </h3>
                  {renderAgeChart()}
                </div>
              </div>
            )}

            {activeTab === 'pekerjaan' && (
              <div className="bg-white p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FiBriefcase className="mr-2 text-blue-600" />
                  Jenis Pekerjaan
                </h3>
                {renderOccupationList()}
              </div>
            )}

            {activeTab === 'pendidikan' && (
              <div className="bg-white p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FiBook className="mr-2 text-blue-600" />
                  Tingkat Pendidikan
                </h3>
                <div className="h-80">
                  <ResponsiveContainer>
                    <BarChart data={demographicData.education}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`${value} orang`]}
                      />
                      <Bar dataKey="value" fill={BLUE_PRIMARY} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'agama' && (
              <div className="bg-white p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <FiShield className="mr-2 text-blue-600" />
                  Komposisi Agama
                </h3>
                {renderReligionChart()}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}