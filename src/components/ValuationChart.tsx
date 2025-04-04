
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Hop', valuation: 1.8 },
  { name: 'Capital Goods', valuation: 10.5 },
  { name: 'Ignition', valuation: 7.2 },
  { name: 'Sitemark', valuation: 5.9 },
  { name: 'Techwave', valuation: 15.3 },
  { name: 'Quantum', valuation: 8.7 },
  { name: 'Nexus', valuation: 12.1 },
  { name: 'Matrix', valuation: 6.4 },
];

const ValuationChart = () => {
  return (
    <div className="w-full h-96 bg-white rounded-lg shadow-sm border p-4">
      <h3 className="text-xl font-semibold mb-4">Company Valuation Comparison</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={60} 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            label={{ value: 'Valuation (USD Bn)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
          />
          <Tooltip formatter={(value) => [`$${value} Bn`, 'Valuation']} />
          <Bar dataKey="valuation" fill="#6949A7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ValuationChart;
