
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import IndexMethodology from '@/components/IndexMethodology';
import EligibilityCriteria from '@/components/EligibilityCriteria';

const Index = () => {
  // Sample performance data
  const performanceData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1300 },
    { name: 'Mar', value: 1400 },
    { name: 'Apr', value: 1350 },
    { name: 'May', value: 1450 },
    { name: 'Jun', value: 1500 },
    { name: 'Jul', value: 1550 },
    { name: 'Aug', value: 1600 },
    { name: 'Sep', value: 1650 },
    { name: 'Oct', value: 1700 },
    { name: 'Nov', value: 1750 },
    { name: 'Dec', value: 1800 },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-900 to-amber-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              STARGAZE Unicorn Fund
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Invest in the future's most promising tech unicorns with our exclusive index fund
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
                Start Investing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-gray-800">2340.3</h3>
              <p className="text-xl text-green-500 font-semibold">+27.5%</p>
              <p className="text-gray-600 mt-2">Fund Value Index</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-gray-800">43</h3>
              <p className="text-xl text-amber-500 font-semibold">Unicorns</p>
              <p className="text-gray-600 mt-2">Portfolio Companies</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-5xl font-bold text-gray-800">$215B</h3>
              <p className="text-xl text-purple-500 font-semibold">Total Value</p>
              <p className="text-gray-600 mt-2">Combined Market Cap</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Line Graph Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fund Performance</h2>
            <p className="text-gray-600">Track the historical performance of the STARGAZE Unicorn Fund</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
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
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Fund Value" 
                    stroke="#9b87f5" 
                    strokeWidth={3} 
                    dot={false} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">3M</button>
              <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">6M</button>
              <button className="px-4 py-2 text-sm font-medium rounded bg-purple-700 text-white">1Y</button>
              <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">MAX</button>
            </div>
          </div>
          
          <IndexMethodology />
        </div>
      </section>
      
      {/* Eligibility Criteria */}
      <EligibilityCriteria />
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in the Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of investors who are already benefiting from the STARGAZE Unicorn Fund</p>
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-purple-900 font-bold">
            Get Started Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
