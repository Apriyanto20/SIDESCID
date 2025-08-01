'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieLabelRenderProps
} from 'recharts';
import React from 'react';

const data = [
  { name: 'Petani', value: 120 },
  { name: 'Buruh Tani', value: 75 },
  { name: 'PNS', value: 25 },
  { name: 'Pedagang', value: 40 },
  { name: 'Wiraswasta', value: 30 },
  { name: 'Pelajar/Mahasiswa', value: 60 },
  { name: 'Ibu Rumah Tangga', value: 50 },
];

const COLORS = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#66BB6A',
  '#BA68C8',
  '#FFA726',
  '#4DB6AC',
];

// ✅ Gunakan tipe PieLabelRenderProps agar bebas any
const renderLabel = ({
  percent,
  name,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius
}: PieLabelRenderProps) => {
  if (percent === undefined || name === undefined) return null;

  const RADIAN = Math.PI / 180;
  const cxNum = Number(cx || 0);
  const cyNum = Number(cy || 0);
  const innerNum = Number(innerRadius || 0);
  const outerNum = Number(outerRadius || 0);

  const radius = 25 + innerNum + (outerNum - innerNum);
  const x = cxNum + radius * Math.cos(-Number(midAngle) * RADIAN);
  const y = cyNum + radius * Math.sin(-Number(midAngle) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cxNum ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs"
    >
      {`${name} ${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function JobChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={renderLabel} // ✅ bebas any
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} orang`, name]} />
      </PieChart>
    </ResponsiveContainer>
  );
}
