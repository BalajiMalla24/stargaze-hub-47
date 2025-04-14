
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Extended historical valuation data with proper formatting for NSE
const nseHistoricalData = [
  { name: 'May 20', timeframe: 'May 2020', valuation: 6.5 },
  { name: 'Jul 20', timeframe: 'Jul 2020', valuation: 7.2 },
  { name: 'Oct 20', timeframe: 'Oct 2020', valuation: 7.8 },
  { name: 'Jan 21', timeframe: 'Jan 2021', valuation: 10.3 },
  { name: 'Apr 21', timeframe: 'Apr 2021', valuation: 12.8 },
  { name: 'Jul 21', timeframe: 'Jul 2021', valuation: 15.5 },
  { name: 'Oct 21', timeframe: 'Oct 2021', valuation: 19.2 },
  { name: 'Jan 22', timeframe: 'Jan 2022', valuation: 23.4 },
  { name: 'Apr 22', timeframe: 'Apr 2022', valuation: 22.8 },
  { name: 'Aug 22', timeframe: 'Aug 2022', valuation: 19.5 },
  { name: 'Nov 22', timeframe: 'Nov 2022', valuation: 19.8 },
  { name: 'Feb 23', timeframe: 'Feb 2023', valuation: 20.1 },
  { name: 'Apr 23', timeframe: 'Apr 2023', valuation: 20.3 },
  { name: 'Jul 23', timeframe: 'Jul 2023', valuation: 20.5 },
  { name: 'Nov 23', timeframe: 'Nov 2023', valuation: 21.2 },
  { name: 'Feb 24', timeframe: 'Feb 2024', valuation: 28.5 },
  { name: 'Mar 24', timeframe: 'Mar 2024', valuation: 35.8 },
  { name: 'May 24', timeframe: 'May 2024', valuation: 36.5 },
  { name: 'Aug 24', timeframe: 'Aug 2024', valuation: 37.2 },
  { name: 'Nov 24', timeframe: 'Nov 2024', valuation: 52.3 },
  { name: 'Jan 25', timeframe: 'Jan 2025', valuation: 51.8 },
  { name: 'Mar 25', timeframe: 'Mar 2025', valuation: 52.1 },
];

// Generic company data for other companies
const genericCompanyData = [
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

const timeframeButtons = [
  { label: '3M', active: false },
  { label: '6M', active: false },
  { label: '1Y', active: true },
  { label: 'MAX', active: false },
];

interface ValuationChartProps {
  companyName?: string;
}

const ValuationChart = ({ companyName }: ValuationChartProps) => {
  const [activeTimeframe, setActiveTimeframe] = useState('1Y');
  
  // Use NSE data if NSE is the company, otherwise use generic data
  const chartData = companyName === 'NSE India Limited' ? nseHistoricalData : genericCompanyData;
  
  // Function to filter data based on selected timeframe
  const getFilteredData = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    switch (activeTimeframe) {
      case '3M':
        // Last 3 months of data
        return chartData.slice(-3);
      case '6M':
        // Last 6 months of data
        return chartData.slice(-6);
      case '1Y':
        // Last 12 months of data
        return chartData.slice(-12);
      case 'MAX':
        // All available data
        return chartData;
      default:
        return chartData.slice(-12);
    }
  };

  // Custom tooltip component to match the screenshot
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      const valueKey = companyName === 'NSE India Limited' ? 'valuation' : 'value';
      const formattedValue = companyName === 'NSE India Limited' 
        ? `$ ${(payload[0].value * 1000000000).toLocaleString('en-US', { maximumFractionDigits: 2 })}`
        : payload[0].value;
      
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow-md">
          <p className="text-sm font-medium">{`Date: ${dataPoint.timeframe}`}</p>
          <p className="text-sm font-medium">{`Valuation: ${formattedValue}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-lg border p-4">
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
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              tickCount={6}
              interval="preserveStartEnd"
              label={{ value: 'Month/Year', position: 'insideBottomRight', offset: -10 }}
            />
            <YAxis 
              domain={companyName === 'NSE India Limited' ? [0, 'dataMax + 5'] : ['dataMin - 5', 'dataMax + 5']}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickCount={8}
              label={{ 
                value: companyName === 'NSE India Limited' ? 'Valuation (B USD)' : 'Value', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' } 
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey={companyName === 'NSE India Limited' ? 'valuation' : 'value'} 
              stroke="#6949A7" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, fill: '#6949A7', stroke: '#fff', strokeWidth: 2 }} 
              name={companyName === 'NSE India Limited' ? 'Valuation (B USD)' : 'Fund Value'} 
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
