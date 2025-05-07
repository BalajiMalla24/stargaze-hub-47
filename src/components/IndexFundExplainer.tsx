
import React from 'react';
import { ChartPie, ArrowRight } from 'lucide-react';

const IndexFundExplainer: React.FC = () => {
  return (
    <div className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Index Fund Explainer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Index 50 is designed to track the performance of the top 50 private companies in India's
            startup ecosystem, offering a diversified exposure to the future of technology and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-stargaze-purple mb-6">INDEX FUNDS</h3>
            <div className="text-3xl mb-4 font-light text-gray-800">
              FUNDS THAT COPY PERFORMANCE OF AN INDEX
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-stargaze-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                HOW IT WORKS
              </div>
              <p className="mt-4 text-gray-700">
                STARGAZE Index 50 holds the same securities as the index in the same proportions,
                allowing investors to gain exposure to high-growth private companies through a single investment.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="font-bold mb-2 text-stargaze-purple">Index 50 Fund</div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-16 h-20 bg-gray-100 flex items-center justify-center rounded border border-gray-300">
                      <span className="text-xs">Tech</span>
                    </div>
                    <div className="w-16 h-20 bg-gray-100 flex items-center justify-center rounded border border-gray-300">
                      <span className="text-xs">Fintech</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="font-bold mb-2 text-stargaze-purple">Market Index</div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-16 h-20 bg-gray-100 flex items-center justify-center rounded border border-gray-300">
                      <span className="text-xs">Tech</span>
                    </div>
                    <div className="w-16 h-20 bg-gray-100 flex items-center justify-center rounded border border-gray-300">
                      <span className="text-xs">Fintech</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <ArrowRight size={40} className="text-stargaze-purple" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <img 
                src="/lovable-uploads/2efc3174-1755-43b6-bb72-cf785f60c02c.png" 
                alt="Index Fund Explanation" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-stargaze-gold text-black p-4 rounded-lg shadow-lg">
                <div className="font-bold">BENEFITS</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center">
                  <ChartPie className="h-8 w-8 text-stargaze-purple" />
                </div>
                <div className="font-semibold">Diversification</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-amber-100 flex items-center justify-center">
                  <div className="text-xl font-bold text-amber-600">$</div>
                </div>
                <div className="font-semibold">Low Cost</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="text-xl font-bold text-green-600">✓</div>
                </div>
                <div className="font-semibold">Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexFundExplainer;
