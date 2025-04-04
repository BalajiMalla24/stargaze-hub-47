
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data for the index performance
const performanceData = [
  { name: '0', timeframe: 'Start', value: 100 },
  { name: '1M', timeframe: '1 Month', value: 108 },
  { name: '3M', timeframe: '3 Months', value: 115 },
  { name: '6M', timeframe: '6 Months', value: 125 },
  { name: '1Y', timeframe: '1 Year', value: 142 },
  { name: '2Y', timeframe: '2 Years', value: 165 },
  { name: '3Y', timeframe: '3 Years', value: 184 },
  { name: '4Y', timeframe: '4 Years', value: 212 },
];

const timeframeButtons = [
  { label: '3M', active: false },
  { label: '6M', active: false },
  { label: '1Y', active: true },
  { label: '4Y', active: false },
];

const ValuationChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1Y');
  
  // Function to filter data based on selected timeframe
  const getFilteredData = () => {
    switch (activeTimeframe) {
      case '3M':
        return performanceData.filter(item => 
          ['Start', '1M', '3M'].includes(item.name)
        );
      case '6M':
        return performanceData.filter(item => 
          ['Start', '1M', '3M', '6M'].includes(item.name)
        );
      case '1Y':
        return performanceData.filter(item => 
          ['Start', '1M', '3M', '6M', '1Y'].includes(item.name)
        );
      case '4Y':
        return performanceData;
      default:
        return performanceData;
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Index Performance</h3>
        <div className="flex space-x-2">
          {timeframeButtons.map((btn) => (
            <button
              key={btn.label}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeTimeframe === btn.label
                  ? 'bg-stargaze-purple text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTimeframe(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={getFilteredData()}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              domain={[100, 'auto']}
              label={{ value: 'Index Value (Starting at 100)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
            />
            <Tooltip formatter={(value) => [`${value}`, 'Index Value']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#6949A7" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
              name="Index Value" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ValuationChart;
