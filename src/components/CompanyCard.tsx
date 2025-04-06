
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface CompanyCardProps {
  logo: string;
  name: string;
  description: string;
  valuation: number;
  totalBlockSize: number;
  investors?: string[];
  onClick: () => void;
}

const CompanyCard = ({ logo, name, description, valuation, totalBlockSize, investors, onClick }: CompanyCardProps) => {
  // Use NSE logo for all companies
  const nseLogoPath = "/lovable-uploads/da2bd597-0977-42a7-aefb-d0dcccadc324.png";
    
  return (
    <Card 
      className="h-full hover:shadow-md transition-shadow cursor-pointer border-t-4 border-t-amber-400"
      onClick={onClick}
    >
      <CardHeader className="flex justify-center items-center pb-2">
        <div className="w-16 h-16 flex items-center justify-center">
          <img src={nseLogoPath} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
        </div>
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Last Round Valuation</p>
            <p className="font-semibold">USD {valuation} Bn</p>
          </div>
          <div>
            <p className="text-gray-500">Total block size</p>
            <p className="font-semibold">USD {totalBlockSize} Bn</p>
          </div>
        </div>
        
        {investors && investors.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Notable Investors</p>
            <p className="text-sm font-medium">{investors.join(', ')}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
