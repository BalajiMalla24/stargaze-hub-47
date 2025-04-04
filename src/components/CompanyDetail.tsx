
import React from 'react';
import { ArrowUp, ArrowDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ValuationRecord {
  date: string;
  valuation: string;
  sharePrice: string;
  change: number;
  source: string;
}

interface CompanyDetailProps {
  company: {
    id: number;
    name: string;
    logo: string;
    description: string;
  };
  onClose: () => void;
}

const CompanyDetail = ({ company, onClose }: CompanyDetailProps) => {
  // Sample valuation data - in a real app, this would be fetched based on the company ID
  const valuationData: ValuationRecord[] = [
    { date: '17/03/2025', valuation: '$ 6,394,407,329.21', sharePrice: '₹ 600.00', change: 0.02, source: 'Source 4' },
    { date: '16/03/2025', valuation: '$ 6,392,898,579.25', sharePrice: '₹ 600.00', change: 0.02, source: 'Source 4' },
    { date: '15/03/2025', valuation: '$ 6,391,571,390.49', sharePrice: '₹ 600.00', change: 0.00, source: 'Source 4' },
    { date: '14/03/2025', valuation: '$ 6,391,683,851.96', sharePrice: '₹ 600.00', change: 0.00, source: 'Source 4' },
    { date: '13/03/2025', valuation: '$ 6,391,784,475.38', sharePrice: '₹ 600.00', change: 0.00, source: 'Source 4' },
    { date: '12/03/2025', valuation: '$ 6,392,100,377.23', sharePrice: '₹ 600.00', change: -0.03, source: 'Source 4' },
    { date: '11/03/2025', valuation: '$ 6,393,717,143.72', sharePrice: '₹ 600.00', change: -0.03, source: 'Source 4' },
    { date: '10/03/2025', valuation: '$ 6,395,355,300.46', sharePrice: '₹ 600.00', change: -0.03, source: 'Source 4' },
    { date: '09/03/2025', valuation: '$ 6,397,081,132.86', sharePrice: '₹ 600.00', change: -0.02, source: 'Source 4' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={company.logo} alt={`${company.name} logo`} className="w-10 h-10" />
            <h2 className="text-xl font-bold">{company.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 mb-6">{company.description}</p>
          
          <h3 className="text-lg font-semibold mb-3">Valuation History</h3>
          
          <div className="border rounded-lg overflow-auto">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="text-center">Date of Valuation</TableHead>
                  <TableHead className="text-center">Valuation (USD)</TableHead>
                  <TableHead className="text-center">Share Price</TableHead>
                  <TableHead className="text-center">% Change (Valuation)</TableHead>
                  <TableHead className="text-center">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {valuationData.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">{record.date}</TableCell>
                    <TableCell className="text-center">{record.valuation}</TableCell>
                    <TableCell className="text-center">{record.sharePrice}</TableCell>
                    <TableCell className="text-center">
                      <span className="flex items-center justify-center">
                        {record.change > 0 ? (
                          <>
                            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-green-500">{record.change.toFixed(2)} %</span>
                          </>
                        ) : record.change < 0 ? (
                          <>
                            <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                            <span className="text-red-500">{Math.abs(record.change).toFixed(2)} %</span>
                          </>
                        ) : (
                          <span className="text-red-500">0.00 %</span>
                        )}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{record.source}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
