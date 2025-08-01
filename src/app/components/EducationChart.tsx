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
  { name: 'SLTP/Sederajat', value: 42 },
  { name: 'SLTA/Sederajat', value: 307 },
  { name: 'Diploma IV/Strata I', value: 52 },
  { name: 'Diploma I/II', value: 6 },
  { name: 'Akademi/Diploma III', value: 12 },
];

const COLORS = ['#FF6384', '#EC407A', '#4DB6AC', '#FFA726', '#66BB6A'];

// ✅ Custom label tanpa error TypeScript
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

  // Cast semua nilai ke number supaya aman
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

export default function EducationChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={renderLabel}
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
