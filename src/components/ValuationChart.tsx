import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Extended sample data for the index performance to match reference image
const performanceData = [
  { name: 'Jan 23', timeframe: 'Jan 2023', value: 100 },
  { name: 'Feb 23', timeframe: 'Feb 2023', value: 105 },
  { name: 'Mar 23', timeframe: 'Mar 2023', value: 103 },
  { name: 'Apr 23', timeframe: 'Apr 2023', value: 98 },
  { name: 'May 23', timeframe: 'May 2023', value: 96 },
  { name: 'Jun 23', timeframe: 'Jun 2023', value: 94 },
  { name: 'Jul 23', timeframe: 'Jul 2023', value: 92 },
  { name: 'Aug 23', timeframe: 'Aug 2023', value: 90 },
  { name: 'Sep 23', timeframe: 'Sep 2023', value: 88 },
  { name: 'Oct 23', timeframe: 'Oct 2023', value: 85 },
  { name: 'Nov 23', timeframe: 'Nov 2023', value: 86 },
  { name: 'Dec 23', timeframe: 'Dec 2023', value: 88 },
  { name: 'Jan 24', timeframe: 'Jan 2024', value: 89 },
  { name: 'Feb 24', timeframe: 'Feb 2024', value: 90 },
  { name: 'Mar 24', timeframe: 'Mar 2024', value: 92 },
  { name: 'Apr 24', timeframe: 'Apr 2024', value: 93 },
  { name: 'May 24', timeframe: 'May 2024', value: 94 },
  { name: 'Jun 24', timeframe: 'Jun 2024', value: 95 },
  { name: 'Jul 24', timeframe: 'Jul 2024', value: 97 },
  { name: 'Aug 24', timeframe: 'Aug 2024', value: 96 },
  { name: 'Sep 24', timeframe: 'Sep 2024', value: 98 },
  { name: 'Oct 24', timeframe: 'Oct 2024', value: 105 },
  { name: 'Nov 24', timeframe: 'Nov 2024', value: 112 },
  { name: 'Dec 24', timeframe: 'Dec 2024', value: 120 },
  { name: 'Jan 25', timeframe: 'Jan 2025', value: 127 },
  { name: 'Feb 25', timeframe: 'Feb 2025', value: 130 },
];

const ValuationChart = () => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={performanceData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              tickCount={6}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={['dataMin - 5', 'dataMax + 5']}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickCount={8}
            />
            <Tooltip 
              formatter={(value) => [`${value}`, 'Value']} 
              labelFormatter={(label) => `${label}`}
              contentStyle={{ 
                borderRadius: '4px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid #f0f0f0' 
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4CC9F0" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, fill: '#4CC9F0', stroke: '#fff', strokeWidth: 2 }} 
              name="Fund Value" 
              isAnimationActive={true}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ValuationChart;
