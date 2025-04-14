
import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Info, BarChart, LineChart as LineChartIcon, FileText, Calculator, Landmark, Users, Building, PieChart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, Legend, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ValuationChart from './ValuationChart';

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
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('1Yr');
  
  // NSE specific valuation data
  const nseValuationData: ValuationRecord[] = [
    { date: '17/03/2025', valuation: '$ 52,114,407,329.21', sharePrice: '₹ 1,050.00', change: 0.02, source: 'Internal Analysis' },
    { date: '16/03/2025', valuation: '$ 52,092,898,579.25', sharePrice: '₹ 1,050.00', change: 0.02, source: 'Internal Analysis' },
    { date: '15/03/2025', valuation: '$ 52,001,571,390.49', sharePrice: '₹ 1,045.00', change: 0.00, source: 'Media Reports' },
    { date: '14/03/2025', valuation: '$ 52,001,683,851.96', sharePrice: '₹ 1,045.00', change: 0.00, source: 'Media Reports' },
    { date: '13/03/2025', valuation: '$ 52,001,784,475.38', sharePrice: '₹ 1,045.00', change: 0.00, source: 'Media Reports' },
    { date: '12/03/2025', valuation: '$ 52,002,100,377.23', sharePrice: '₹ 1,045.00', change: -0.03, source: 'Media Reports' },
    { date: '11/03/2025', valuation: '$ 52,033,717,143.72', sharePrice: '₹ 1,046.00', change: -0.03, source: 'Bloomberg' },
    { date: '10/03/2025', valuation: '$ 52,035,355,300.46', sharePrice: '₹ 1,046.00', change: -0.03, source: 'Bloomberg' },
    { date: '09/03/2025', valuation: '$ 52,037,081,132.86', sharePrice: '₹ 1,046.00', change: -0.02, source: 'Bloomberg' },
  ];
  
  // Generic valuation data for other companies
  const genericValuationData: ValuationRecord[] = [
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

  // Use NSE data if NSE is the company, otherwise use generic data
  const valuationData = company.name === 'NSE India Limited' ? nseValuationData : genericValuationData;

  // NSE financial metrics data
  const nseFinancialData = {
    revenue: [
      { year: 'FY2022', value: 1111.9 },
      { year: 'FY2023', value: 1494.1 },
      { year: 'FY2024', value: 1923.4 },
    ],
    ebitda: [
      { year: 'FY2022', value: 768.9 },
      { year: 'FY2023', value: 1088.5 },
      { year: 'FY2024', value: 1442.6 },
    ],
    netProfit: [
      { year: 'FY2022', value: 608.4 },
      { year: 'FY2023', value: 860.9 },
      { year: 'FY2024', value: 972.1 },
    ],
    margins: {
      ebitda: [
        { year: 'FY2022', value: 69.1 },
        { year: 'FY2023', value: 72.9 },
        { year: 'FY2024', value: 75.0 },
      ],
      netProfit: [
        { year: 'FY2022', value: 54.7 },
        { year: 'FY2023', value: 58.0 },
        { year: 'FY2024', value: 50.5 },
      ],
      roe: [
        { year: 'FY2022', value: 33.7 },
        { year: 'FY2023', value: 35.9 },
        { year: 'FY2024', value: 38.2 },
      ],
      evEbitda: [
        { year: 'FY2022', value: -32 },
        { year: 'FY2023', value: -32 },
        { year: 'FY2024', value: -28 },
      ],
    }
  };

  // NSE revenue breakdown
  const nseRevenueBreakdown = [
    { name: 'Transaction fees', value: 70, color: '#FFCC32' },
    { name: 'Data services', value: 10, color: '#9370DB' },
    { name: 'Clearing & settlement', value: 7, color: '#4CC3D9' },
    { name: 'Listing fees', value: 8, color: '#FF7F50' },
    { name: 'Technology services', value: 5, color: '#7FB80E' },
  ];

  // NSE market share data
  const nseMarketShare = [
    { name: 'NSE', value: 68, color: '#FFCC32' },
    { name: 'BSE', value: 30, color: '#9370DB' },
    { name: 'Others', value: 2, color: '#4CC3D9' },
  ];

  // NSE competitor data
  const nseCompetitors = [
    { company: 'NSE Limited', exchange: 'Unlisted', evEbitda: '-28', peRatio: '-28-30' },
    { company: 'BSE Limited', exchange: 'BSE', evEbitda: '-18', peRatio: '-20' },
    { company: 'CME Group (US)', exchange: 'NASDAQ', evEbitda: '-15', peRatio: '-22' },
    { company: 'Intercontinental Exchange (US)', exchange: 'NYSE', evEbitda: '-15', peRatio: '-22' },
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

  // Define company info based on the company name
  const getNseCompanyInfo = (): CompanyInfoType => {
    return {
      name: "NSE India Limited",
      brandName: "NSE India",
      founded: "1992",
      headquarters: "Mumbai, India",
      domain: "Financial Services",
      industry: "Stock Exchange",
      lastValuation: "USD 45-50 Bn",
      pricePerShare: "₹ 1,050.00 (Estimated)",
      status: "Operational",
      description: "The National Stock Exchange of India Limited was incorporated in 1992 by a consortium of leading Indian financial institutions, including IDBI, IFCI, LIC, and GIC, among others. Headquartered in Mumbai, NSE revolutionized the Indian capital markets by introducing screen-based trading and dematerialization, leading to greater transparency and efficiency. Today, it is the world's 7th largest stock exchange, with a market cap of more than USD 5 trillion and one of the leading exchanges globally for derivatives trading.",
      sector: "Financial Services",
      stage: "Established",
    };
  };

  const getGenericCompanyInfo = (): CompanyInfoType => {
    return {
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
  };

  const companyInfo = company.name === 'NSE India Limited' ? getNseCompanyInfo() : getGenericCompanyInfo();

  const keyInvestors = company.name === 'NSE India Limited' 
    ? [
        "Consortium of Leading Indian Financial Institutions",
        "IDBI",
        "IFCI",
        "LIC",
        "GIC"
      ]
    : [
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

  // Render NSE specific company overview component
  const renderNseCompanyOverview = () => {
    if (company.name !== 'NSE India Limited') return null;

    return (
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
            <h3 className="text-xl font-bold mb-2">Company Overview</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <span className="font-semibold">Positive Outlook for NSE</span>
                <p className="text-sm">NSE benefits from increasing retail participation, India's 8.2% GDP growth, and demographic tailwinds. Ongoing investments in trading technology and supportive regulatory reforms by SEBI further enhance market depth and institutional interest.</p>
              </li>
              <li>
                <span className="font-semibold">Market Momentum & Investor Growth</span>
                <p className="text-sm">The Indian equity market remains strong, supported by over 110 million registered investors across 99.84% of India's pin codes. Notably, 62% of new investor registrations now come from beyond the top 50 cities, driven by digital access and inclusion initiatives.</p>
              </li>
              <li>
                <span className="font-semibold">Core Business & Revenue Model</span>
                <p className="text-sm">NSE's primary revenue driver is transaction fees (~70% of revenue), followed by data services (~10%), clearing and settlement (~7%), and listing, index licensing, and technology services contributing the rest. Its electronic trading platform ensures scale and transparency.</p>
              </li>
              <li>
                <span className="font-semibold">Diversified Income Streams</span>
                <p className="text-sm">In addition to trading, NSE monetizes market infrastructure through real-time data sales, index licensing (e.g., Nifty 50), and advisory services. This diversification enhances resilience and positions NSE to benefit from long-term capital market expansion.</p>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
            <h3 className="text-xl font-bold mb-2">Industry Landscape</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <span className="font-semibold">India's exchange landscape is primarily dominated by two major players, NSE and BSE, creating a near duopoly.</span>
                <p className="text-sm">Recent growth in retail participation, favourable demographics, and the financialization of household savings have propelled trading volumes to record levels. Key trends shaping the industry include:</p>
              </li>
              <li>
                <span className="font-semibold">Rise of Discount Brokerage:</span>
                <p className="text-sm">Low-cost, app-based brokers have transformed the retail experience, fuelling record-high trading account openings.</p>
              </li>
              <li>
                <span className="font-semibold">Algorithmic & High-Frequency Trading (HFT):</span>
                <p className="text-sm">With robust technology infrastructure, algo-trading and HFT now account for a large portion of daily volumes.</p>
              </li>
              <li>
                <span className="font-semibold">Financialization of Savings:</span>
                <p className="text-sm">Indians increasingly prefer equity, mutual funds, and other market-linked instruments over traditional savings (e.g., gold, real estate).</p>
              </li>
              <li>
                <span className="font-semibold">Global Integration:</span>
                <p className="text-sm">Growing foreign institutional investor (FII) participation as India's markets become deeper and more liquid.</p>
              </li>
              <li>
                <span className="font-semibold">SME & Alternative Platforms:</span>
                <p className="text-sm">Regulatory push to support small and medium enterprises, along with new avenues like REITs, INVITs, and other instruments.</p>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
            <h3 className="text-xl font-bold mb-2">Risk Factors</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <span className="font-semibold">Company-Specific Risk:</span>
                <p className="text-sm">NSE's revenue is heavily dependent on transaction fees, making it vulnerable to declines in trading volumes during market turbulence or increased competition. Additionally, technology disruptions such as system outages or cyberattacks pose operational and reputational risks that could impact market confidence and participation.</p>
              </li>
              <li>
                <span className="font-semibold">Macroeconomic Risk:</span>
                <p className="text-sm">Global economic instability, including geopolitical tensions or recessions, may reduce foreign investor activity and lower trading volumes on NSE. High domestic inflation can also suppress retail participation as households prioritize essential spending over financial investments.</p>
              </li>
              <li>
                <span className="font-semibold">Regulatory Risk:</span>
                <p className="text-sm">Regulatory changes such as stricter margin rules, tax hikes on trading (e.g., STT or capital gains), or government intervention in market mechanism could significantly impact investor behavior and reduce trading volumes.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-700 text-white p-4 rounded-t-md">
            <h3 className="text-xl font-bold">Company Profile</h3>
            <p className="text-sm mt-2">
              The National Stock Exchange of India (NSE Limited) was incorporated in 1992 by a consortium of leading Indian financial institutions, including IDBI, IFCI, LIC, and GIC, among others. Headquartered in Mumbai, NSE revolutionized the Indian capital markets by introducing screen-based trading and dematerialization, leading to greater transparency and efficiency. Today, it is the world's 7th largest stock exchange, with a market cap of more than USD 5 trillion and one of the leading exchanges globally for derivatives trading.
            </p>
          </div>

          <div className="border p-4 rounded-md">
            <h4 className="font-bold mb-3">Product-level Revenue Breakdown</h4>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nseRevenueBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {nseRevenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-md">
              <h4 className="font-bold mb-3">Revenue and EBITDA</h4>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={nseFinancialData.revenue.map((item, index) => ({
                      name: item.year,
                      revenue: item.value,
                      ebitda: nseFinancialData.ebitda[index].value
                    }))}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue (USD m)" />
                    <Line type="monotone" dataKey="ebitda" stroke="#FFC107" name="EBITDA (USD m)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border p-4 rounded-md">
              <h4 className="font-bold mb-3">Net Profit margin</h4>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={nseFinancialData.margins.netProfit}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[40, 60]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#FFC107" name="Net Profit Margin (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h4 className="font-bold mb-3">Key Financial Metrics</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Metric</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">FY2022</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">FY2023</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">FY2024</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Revenue (USD m)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.revenue[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.revenue[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.revenue[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">EBITDA (USD m)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.ebitda[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.ebitda[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.ebitda[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Net Profit (USD m)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.netProfit[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.netProfit[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.netProfit[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">EBITDA Margin (%)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.ebitda[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.ebitda[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.ebitda[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Net Profit Margin (%)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.netProfit[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.netProfit[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.netProfit[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ROE (%)</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.roe[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.roe[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.roe[2].value}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">EV/EBITDA</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.evEbitda[0].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.evEbitda[1].value}</td>
                    <td className="px-4 py-2 text-sm">{nseFinancialData.margins.evEbitda[2].value}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3 italic">
              Between FY2022 and FY2024, NSE's revenue rose 73% to $1.92 billion, mainly driven by higher trading volumes, especially in index options, and increased retail participation from beyond Tier-1 cities. EBITDA grew faster than revenue, reaching $1.44 billion, with margins expanding to 75%, reflecting strong operating leverage and growth in data fee segments. Net profit increased to $972 million, though margins declined slightly due to higher non-operating costs. ROE improved from 33.7% to 38.2%, indicating efficient capital deployment. However, the EV/EBITDA multiple declined to ~28 in FY2024, likely due to regulatory headwinds and IPO delays rather than core performance concerns.
            </p>
          </div>

          <div className="bg-purple-700 text-white p-4 rounded-t-md mt-4">
            <h3 className="text-xl font-bold">Company Market Share</h3>
            <p className="text-sm mt-2">
              NSE dominates the Indian stock exchange market in both equity and derivatives volumes. Despite being older and historically significant, BSE holds a smaller share of trading volumes. Regional or smaller exchanges (e.g., MSEI, India INX) remain niche players.
            </p>
          </div>

          <div className="border p-4 rounded-md">
            <h4 className="font-bold mb-3">Market Share</h4>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nseMarketShare}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {nseMarketShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h4 className="font-bold mb-3">Valuation</h4>
            <p className="text-sm mb-3">
              NSE remains unlisted on public markets. However, based on the unlisted share market prices and media reports, NSE's implied valuation has been estimated around INR 3.2 – 3.5 lakh crore (~USD 45–50 billion) in recent transactions.
            </p>
            <h5 className="font-semibold text-sm mb-2">Comparable companies (FY24):</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Company</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Exchange</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">EV/EBITDA (TTM)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">P/E (TTM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {nseCompetitors.map((comp, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm font-medium">{comp.company}</td>
                      <td className="px-4 py-2 text-sm">{comp.exchange}</td>
                      <td className="px-4 py-2 text-sm">{comp.evEbitda}</td>
                      <td className="px-4 py-2 text-sm">{comp.peRatio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3 italic">
              NSE's EV/EBITDA and P/E multiples are generally higher than BSE, reflecting its dominant market share, higher profitability, and stronger growth profile. Compared to global peers like CME and ICE, NSE's valuation metrics appear elevated, but this can be partly attributed to India's high-growth capital markets and NSE's near-monopolistic position in the domestic derivatives space.
            </p>
          </div>
        </div>
      </div>
    );
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
                    <ValuationChart companyName={company.name} />
                  </div>

                  <div className="flex justify-center mt-4 gap-2">
                    <button
                      onClick={() => setSelectedTimeframe('1M')}
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        selectedTimeframe === '1M' ? 'bg-stargaze-purple text-white' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      1M
                    </button>
                    <button
                      onClick={() => setSelectedTimeframe('3M')}
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        selectedTimeframe === '3M' ? 'bg-stargaze-purple text-white' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      3M
                    </button>
                    <button
                      onClick={() => setSelectedTimeframe('6M')}
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        selectedTimeframe === '6M' ? 'bg-stargaze-purple text-white' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      6M
                    </button>
                    <button
                      onClick={() => setSelectedTimeframe('1Yr')}
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        selectedTimeframe === '1Yr' ? 'bg-stargaze-purple text-white' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      1Yr
                    </button>
                    <button
                      onClick={() => setSelectedTimeframe('Max')}
                      className={`px-4 py-2 text-sm font-medium rounded ${
                        selectedTimeframe === 'Max' ? 'bg-stargaze-purple text-white' : 'bg-gray-200 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      Max
                    </button>
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

                  {renderNseCompanyOverview()}
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
