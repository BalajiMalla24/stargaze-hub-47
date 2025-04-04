
import React from 'react';
import Navbar from '@/components/Navbar';
import ValuationChart from '@/components/ValuationChart';
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
          <h2 className="text-2xl font-bold mb-6">Company Valuations</h2>
          <ValuationChart />
        </div>
        
        <CompanyList />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
