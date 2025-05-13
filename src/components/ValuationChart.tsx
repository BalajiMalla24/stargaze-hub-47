
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { cn } from "@/lib/utils";

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
  { name: 'Mar 25', timeframe: 'Mar 2025', value: 135 },
  { name: 'Apr 25', timeframe: 'Apr 2025', value: 142 },
  { name: 'May 25', timeframe: 'May 2025', value: 148 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-purple-100">
        <p className="font-medium text-purple-800">{payload[0].payload.timeframe}</p>
        <p className="text-lg font-bold text-amber-500">
          Value: {payload[0].value.toFixed(2)}
        </p>
        {payload[0].value > 100 && (
          <p className="text-sm text-green-600">
            +{((payload[0].value - 100) / 100 * 100).toFixed(2)}% from base
          </p>
        )}
        {payload[0].value < 100 && (
          <p className="text-sm text-red-500">
            {((payload[0].value - 100) / 100 * 100).toFixed(2)}% from base
          </p>
        )}
      </div>
    );
  }
  return null;
};

const ValuationChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={performanceData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickCount={8}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={['dataMin - 5', 'dataMax + 5']}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickCount={8}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#8b5cf6" 
              strokeWidth={3} 
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{ 
                r: 8, 
                fill: '#8b5cf6', 
                stroke: '#fff', 
                strokeWidth: 2 
              }} 
              name="Fund Value" 
              isAnimationActive={true}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '14px',
                color: '#4b5563'
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between items-center px-4 pb-4 text-sm">
        <div className="text-gray-500 italic">Past performance is not indicative of future results</div>
        <div className="font-medium text-purple-600">Updated: May 2025</div>
      </div>
    </div>
  );
};

export default ValuationChart;
