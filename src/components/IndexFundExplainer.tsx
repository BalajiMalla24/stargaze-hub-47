
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const IndexFundExplainer: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Index Fund Explainer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Index 50 is designed to track the performance of the top 50 private companies in India's
            startup ecosystem, offering a diversified exposure to the future of technology and business.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Button className="bg-amber-400 hover:bg-amber-500 text-purple-900 font-medium px-6 py-2 rounded-full">
              Learn More About Our Index
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexFundExplainer;
