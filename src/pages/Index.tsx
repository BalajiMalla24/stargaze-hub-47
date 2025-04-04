
import React from 'react';
import Navbar from '@/components/Navbar';
import ValuationChart from '@/components/ValuationChart';
import ReturnCalculator from '@/components/ReturnCalculator';
import CompanyList from '@/components/CompanyList';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-stargaze-purple">Stargaze</span> Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              The platform for private market valuations
            </p>
          </div>
        </div>
        
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Index Performance</h2>
              <ValuationChart />
              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">3M</button>
                <button className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">6M</button>
                <button className="px-4 py-2 text-sm font-medium bg-stargaze-purple text-white rounded">1Y</button>
                <button className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors">4Y</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Investment Calculator</h2>
              <ReturnCalculator />
            </div>
          </div>
        </div>
        
        <CompanyList />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
