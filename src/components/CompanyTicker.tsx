
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo?: string;
  change: number;
}

// Sample companies data - this would be replaced with real data
const companies: Company[] = [
  { name: 'Tata Elxsi', change: 2.4, logo: '/lovable-uploads/c00bd6e5-b212-4b7f-b44e-1a2ba50833d6.png' },
  { name: 'Delhivery', change: -1.2, logo: '/lovable-uploads/41b83d4b-1a8b-418a-af8e-0c39ac7de3cf.png' },
  { name: 'Swiggy', change: 3.7, logo: '/lovable-uploads/b1ead9bd-470e-47a6-ba99-561963a08f00.png' },
  { name: 'Zepto', change: 5.1, logo: '/lovable-uploads/7f0cb945-f4f8-492b-aa1a-9cc8b2aed2d1.png' },
  { name: 'FirstCry', change: 0.6, logo: '/lovable-uploads/65c9b09f-40fa-40fc-8300-30b3ab2fc42f.png' },
  { name: 'Ola Electric', change: 4.2 },
  { name: 'Byju\'s', change: -2.8 },
  { name: 'Razorpay', change: 1.9 },
  { name: 'CRED', change: 3.2 },
  { name: 'Meesho', change: 2.1 },
  { name: 'PharmEasy', change: -1.7 },
  { name: 'Flipkart', change: 0.9 },
  { name: 'BigBasket', change: 1.5 },
  { name: 'Zomato', change: 2.7 },
  { name: 'PayTM', change: -0.8 },
];

const CompanyTicker: React.FC = () => {
  // To make the ticker effect seamless, we need to duplicate the companies
  const allCompanies = [...companies, ...companies];
  
  return (
    <div className="w-full overflow-hidden bg-gray-900 text-white border-t border-b border-gray-700">
      <div className="ticker-container py-2">
        <div className="ticker-content">
          {allCompanies.map((company, index) => (
            <div key={`${company.name}-${index}`} className="inline-flex items-center px-4 py-1">
              {company.logo && (
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-6 w-6 mr-2 object-contain"
                />
              )}
              <span className="font-medium mr-1">{company.name}</span>
              <span 
                className={cn(
                  "font-semibold", 
                  company.change >= 0 ? "text-green-400" : "text-red-400"
                )}
              >
                {company.change >= 0 ? "+" : ""}{company.change.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTicker;
