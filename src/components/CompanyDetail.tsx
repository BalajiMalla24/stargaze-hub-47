import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Info, BarChart, LineChart as LineChartIcon, FileText, Calculator, Landmark, Users, Building } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, Legend } from 'recharts';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ValuationRecord {
  date: string;
  valuation: string;
  sharePrice: string;
  change: number;
  source: string;
}

interface DealRecord {
  round: string;
  amount: number;
  investors: string;
  postValuation: string;
  date: string;
}

interface CompanyInfoType {
  name: string;
  brandName?: string;
  founded: string;
  headquarters: string;
  domain: string;
  industry: string;
  lastValuation: string;
  pricePerShare: string;
  status: string;
  description: string;
  sector?: string;
  stage?: string;
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
  const [chartType, setChartType] = useState<'valuation' | 'price'>('valuation');
  
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

  const chartData = [
    { name: 'Jan', valuation: 100, price: 100 },
    { name: 'Feb', valuation: 105, price: 103 },
    { name: 'Mar', valuation: 110, price: 107 },
    { name: 'Apr', valuation: 115, price: 112 },
    { name: 'May', valuation: 120, price: 115 },
    { name: 'Jun', valuation: 130, price: 122 },
    { name: 'Jul', valuation: 140, price: 126 },
    { name: 'Aug', valuation: 150, price: 135 },
    { name: 'Sep', valuation: 155, price: 140 },
    { name: 'Oct', valuation: 160, price: 148 },
    { name: 'Nov', valuation: 165, price: 152 },
    { name: 'Dec', valuation: 170, price: 160 },
  ];

  const dealHistory: DealRecord[] = [
    { round: 'Series A', amount: 1.28, investors: 'Kae Capital, Peak XV Partners, Others', postValuation: '₹ 30.3 Cr ($ 4.33 M)', date: 'Aug 2018' },
    { round: 'Series A', amount: 9.19, investors: 'Accel India, Kae Capital, Peak XV Partners', postValuation: '₹ 228 Cr ($ 32.8 M)', date: 'Mar 2019' },
    { round: 'Series B', amount: 31.62, investors: 'Accel India, Greenoaks Capital, Kae Capital, Lightspeed Ventures', postValuation: '₹ 980 Cr ($ 138.09 M)', date: 'Nov 2019' },
    { round: 'Series C', amount: 30.83, investors: 'Accel India, Greenoaks Capital, Kae Capital, Lightspeed Ventures', postValuation: '₹ 1,894 Cr ($ 251.76 M)', date: 'Jun 2020' },
    { round: 'Series D', amount: 116.55, investors: 'Greenoaks Capital, Kae Capital, Lightspeed Ventures, Peak XV Partners', postValuation: '₹ 4,231 Cr ($ 580.47 M)', date: 'Jan 2021' },
    { round: 'Series E', amount: 120, investors: '360 ONE, D1 Capital Partners, Greenoaks Capital, Lightspeed Ventures', postValuation: '₹ 9,830 Cr ($ 1313.3 M)', date: 'Aug 2021' },
    { round: 'Series F', amount: 210, investors: '360 ONE, D1 Capital Partners, Greenoaks Capital, Lightspeed Ventures', postValuation: '₹ 20,146 Cr ($ 2697.04 M)', date: 'Dec 2021' },
    { round: 'Series F', amount: 150, investors: 'Avenir Growth', postValuation: '₹ 22,318 Cr ($ 2695.11 M)', date: 'May 2023' },
    { round: 'Series F', amount: 20.04, investors: 'Wheelhouse Ventures', postValuation: '₹ 23,187 Cr ($ 2799.18 M)', date: 'Mar 2024' },
    { round: 'Series F', amount: 67, investors: 'Avenir Growth, Baillie Gifford, Greenoaks Capital, Khosla Ventures', postValuation: '₹ 25,885 Cr ($ 3069.55 M)', date: 'Dec 2024' },
  ];

  const dealBarData = dealHistory.map(deal => ({
    name: deal.date,
    amount: deal.amount,
    round: deal.round,
  }));

  const companyInfo: CompanyInfoType = {
    name: company.name,
    brandName: company.name,
    founded: "2011",
    headquarters: "Mumbai, India",
    domain: "Financial Services",
    industry: "Financial Services",
    lastValuation: "USD 13.5 Bn",
    pricePerShare: "₹ 1,050.00",
    status: "Operational",
    description: company.description,
    sector: "Finance",
    stage: "Late Stage",
  };

  const keyInvestors = [
    "Strategic Investors",
    "Government of India",
    "Foreign Institutional Investors",
    "Domestic Institutional Investors"
  ];

  const dataRoomDocuments = {
    financials: [
      { name: "Annual Report 2023-24", type: "PDF", size: "12.5 MB", date: "15/03/2024" },
      { name: "Quarterly Results Q3 2024", type: "PDF", size: "5.8 MB", date: "10/02/2024" },
      { name: "Financial Projections 2025", type: "XLSX", size: "3.2 MB", date: "20/01/2024" },
      { name: "Cash Flow Statement", type: "PDF", size: "4.1 MB", date: "05/03/2024" },
      { name: "Balance Sheet Summary", type: "PDF", size: "2.7 MB", date: "05/03/2024" },
    ],
    legal: [
      { name: "Certificate of Incorporation", type: "PDF", size: "1.5 MB", date: "12/06/2011" },
      { name: "Shareholders Agreement", type: "PDF", size: "8.2 MB", date: "03/12/2023" },
      { name: "Board Resolutions 2023", type: "PDF", size: "4.6 MB", date: "15/01/2024" },
      { name: "Regulatory Compliance Report", type: "PDF", size: "7.3 MB", date: "28/02/2024" },
      { name: "Intellectual Property Rights", type: "PDF", size: "3.9 MB", date: "10/11/2023" },
    ],
    shareholding: [
      { name: "Shareholding Pattern Q4 2023", type: "PDF", size: "2.3 MB", date: "05/01/2024" },
      { name: "ESOP Structure", type: "PDF", size: "1.8 MB", date: "12/12/2023" },
      { name: "Major Shareholders List", type: "XLSX", size: "1.2 MB", date: "17/02/2024" },
      { name: "Cap Table", type: "XLSX", size: "2.5 MB", date: "15/03/2024" },
      { name: "Voting Rights Document", type: "PDF", size: "3.7 MB", date: "20/12/2023" },
    ],
    official: [
      { name: "Company Brochure", type: "PDF", size: "5.6 MB", date: "01/03/2024" },
      { name: "Corporate Presentation", type: "PPTX", size: "15.3 MB", date: "22/02/2024" },
      { name: "Pitch Deck", type: "PDF", size: "8.7 MB", date: "10/01/2024" },
      { name: "Executive Team Profiles", type: "PDF", size: "4.2 MB", date: "18/12/2023" },
      { name: "Company Policies Handbook", type: "PDF", size: "6.8 MB", date: "05/02/2024" },
    ]
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <img src={company.logo} alt={`${company.name} logo`} className="w-10 h-10 object-contain" />
            <h2 className="text-xl font-bold">{company.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <Tabs defaultValue="valuation">
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="valuation" className="flex-1">Valuation History</TabsTrigger>
              <TabsTrigger value="company-details" className="flex-1">Company Details</TabsTrigger>
              <TabsTrigger value="deal-history" className="flex-1">Deal History</TabsTrigger>
              <TabsTrigger value="key-investors" className="flex-1">Key Investors</TabsTrigger>
              <TabsTrigger value="data-room" className="flex-1">Data Room</TabsTrigger>
            </TabsList>

            <TabsContent value="valuation" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Performance Chart</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Chart Type:</span>
                      <ToggleGroup type="single" value={chartType} onValueChange={(value) => value && setChartType(value as 'valuation' | 'price')}>
                        <ToggleGroupItem value="valuation" aria-label="Valuation Chart">
                          <LineChartIcon className="mr-1 h-4 w-4" />
                          Valuation
                        </ToggleGroupItem>
                        <ToggleGroupItem value="price" aria-label="Price Chart">
                          <BarChart className="mr-1 h-4 w-4" />
                          Price
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis 
                          label={{ 
                            value: chartType === 'valuation' ? 'Valuation (Starting at 100)' : 'Share Price (Starting at 100)', 
                            angle: -90, 
                            position: 'insideLeft', 
                            style: { textAnchor: 'middle' } 
                          }}
                        />
                        <Tooltip 
                          formatter={(value) => [
                            `${value}`, 
                            chartType === 'valuation' ? 'Valuation Index' : 'Price Index'
                          ]} 
                        />
                        <Legend />
                        <Line 
                          type="monotone"
                          dataKey={chartType}
                          stroke="#6949A7"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                          name={chartType === 'valuation' ? 'Valuation Index' : 'Price Index'}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

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
                              <span className="text-gray-500">0.00 %</span>
                            )}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">{record.source}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="company-details">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <img src={company.logo} alt={`${company.name} logo`} className="w-36 h-36 object-contain" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="text-2xl font-bold">{companyInfo.name}</h3>
                      <p className="text-gray-700">{companyInfo.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                    <div>
                      <h4 className="text-sm text-gray-500">Name</h4>
                      <p className="font-medium">{companyInfo.name}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Brand Name</h4>
                      <p className="font-medium">{companyInfo.brandName || '-'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Founded On</h4>
                      <p className="font-medium">{companyInfo.founded}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Headquarters</h4>
                      <p className="font-medium">{companyInfo.headquarters}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Domain</h4>
                      <p className="font-medium">{companyInfo.domain}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Industry</h4>
                      <p className="font-medium">{companyInfo.industry}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Last Round Valuation</h4>
                      <p className="font-medium">{companyInfo.lastValuation}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Price Per Share (Fully Diluted)</h4>
                      <p className="font-medium">{companyInfo.pricePerShare}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Company Status</h4>
                      <p className="font-medium">{companyInfo.status}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Sector</h4>
                      <p className="font-medium">{companyInfo.sector || '-'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500">Stage</h4>
                      <p className="font-medium">{companyInfo.stage || '-'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deal-history" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Funding Rounds</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={dealBarData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name" 
                          angle={-45} 
                          textAnchor="end" 
                          height={60}
                        />
                        <YAxis 
                          label={{ 
                            value: 'Deal Amount ($M)', 
                            angle: -90, 
                            position: 'insideLeft', 
                            style: { textAnchor: 'middle' } 
                          }}
                        />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="amount" 
                          fill="#6949A7" 
                          name="Deal Amount ($M)"
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="border rounded-lg overflow-auto">
                <Table>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead>Round</TableHead>
                      <TableHead>Deal Amount ($M)</TableHead>
                      <TableHead>Investors</TableHead>
                      <TableHead>Post Money Valuation</TableHead>
                      <TableHead>Deal Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dealHistory.map((deal, index) => (
                      <TableRow key={index}>
                        <TableCell>{deal.round}</TableCell>
                        <TableCell>{deal.amount}</TableCell>
                        <TableCell className="max-w-xs">{deal.investors}</TableCell>
                        <TableCell>{deal.postValuation}</TableCell>
                        <TableCell>{deal.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="key-investors">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Key Investors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {keyInvestors.map((investor, index) => (
                      <div key={index} className="p-4 border rounded-lg bg-gray-50">
                        <p className="font-medium text-center">{investor}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data-room">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Company Data Room</h3>
                  <p className="text-gray-600 mb-6">
                    Access important documents related to {company.name}. All documents are for authorized personnel only.
                  </p>

                  <div className="space-y-6">
                    <Collapsible className="border rounded-md">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <Calculator className="h-5 w-5 text-amber-500" />
                          <h4 className="text-lg font-medium">Financial Documents</h4>
                        </div>
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          {dataRoomDocuments.financials.length} items
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 border-t">
                          <Table>
                            <TableHeader className="bg-gray-50">
                              <TableRow>
                                <TableHead>Document Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {dataRoomDocuments.financials.map((doc, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{doc.name}</TableCell>
                                  <TableCell>{doc.type}</TableCell>
                                  <TableCell>{doc.size}</TableCell>
                                  <TableCell>{doc.date}</TableCell>
                                  <TableCell className="text-right">
                                    <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                                      Download
                                    </button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="border rounded-md">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <Landmark className="h-5 w-5 text-amber-500" />
                          <h4 className="text-lg font-medium">Legal Documents</h4>
                        </div>
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          {dataRoomDocuments.legal.length} items
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 border-t">
                          <Table>
                            <TableHeader className="bg-gray-50">
                              <TableRow>
                                <TableHead>Document Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {dataRoomDocuments.legal.map((doc, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{doc.name}</TableCell>
                                  <TableCell>{doc.type}</TableCell>
                                  <TableCell>{doc.size}</TableCell>
                                  <TableCell>{doc.date}</TableCell>
                                  <TableCell className="text-right">
                                    <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                                      Download
                                    </button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="border rounded-md">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-amber-500" />
                          <h4 className="text-lg font-medium">Shareholding Documents</h4>
                        </div>
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          {dataRoomDocuments.shareholding.length} items
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 border-t">
                          <Table>
                            <TableHeader className="bg-gray-50">
                              <TableRow>
                                <TableHead>Document Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {dataRoomDocuments.shareholding.map((doc, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{doc.name}</TableCell>
                                  <TableCell>{doc.type}</TableCell>
                                  <TableCell>{doc.size}</TableCell>
                                  <TableCell>{doc.date}</TableCell>
                                  <TableCell className="text-right">
                                    <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                                      Download
                                    </button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="border rounded-md">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <Building className="h-5 w-5 text-amber-500" />
                          <h4 className="text-lg font-medium">Official Documents</h4>
                        </div>
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          {dataRoomDocuments.official.length} items
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 border-t">
                          <Table>
                            <TableHeader className="bg-gray-50">
                              <TableRow>
                                <TableHead>Document Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {dataRoomDocuments.official.map((doc, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{doc.name}</TableCell>
                                  <TableCell>{doc.type}</TableCell>
                                  <TableCell>{doc.size}</TableCell>
                                  <TableCell>{doc.date}</TableCell>
                                  <TableCell className="text-right">
                                    <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                                      Download
                                    </button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
