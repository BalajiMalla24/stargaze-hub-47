import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ValuationChart from '@/components/ValuationChart';
import ReturnCalculator from '@/components/ReturnCalculator';
import CompanyList from '@/components/CompanyList';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Companies = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}th ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  
  const [includingListed, setIncludingListed] = useState<'yes' | 'no'>('yes');
  const [numberOfCompanies, setNumberOfCompanies] = useState<number>(40);
  const [capWeight, setCapWeight] = useState<number>(10);
  const [floorWeight, setFloorWeight] = useState<number>(1);
  const [transactionCostPercentage, setTransactionCostPercentage] = useState<boolean>(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <Tabs defaultValue="fund50">
              <TabsList className="mb-8">
                <TabsTrigger value="fund50">FUND 50</TabsTrigger>
                <TabsTrigger value="allCompanies">ALL COMPANIES</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fund50">
                <h1 className="text-5xl md:text-6xl font-bold text-amber-400">
                  STARGAZE Unicorn Fund 50
                </h1>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="text-5xl font-bold text-gray-800">2340.3</span>
                  <span className="text-2xl font-semibold text-green-500">+27.5%</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">
                  Updated {formattedDate} GMT+8
                </p>
              </TabsContent>
              
              <TabsContent value="allCompanies">
                <h1 className="text-5xl md:text-6xl font-bold text-amber-400">
                  STARGAZE All Companies
                </h1>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="text-5xl font-bold text-gray-800">1850.6</span>
                  <span className="text-2xl font-semibold text-green-500">+22.3%</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">
                  Updated {formattedDate} GMT+8
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Fund Performance</h2>
              
              <div className="space-y-6 mb-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Transaction Cost</h3>
                  <Tabs defaultValue="with" className="w-full">
                    <TabsList>
                      <TabsTrigger value="with" onClick={() => setTransactionCostPercentage(true)}>
                        With Transaction Cost
                      </TabsTrigger>
                      <TabsTrigger value="without" onClick={() => setTransactionCostPercentage(false)}>
                        Without Transaction Cost
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Number of Companies</h3>
                  <ToggleGroup type="single" value={numberOfCompanies.toString()} onValueChange={(value) => value && setNumberOfCompanies(Number(value))}>
                    {[40, 30, 20, 10].map((num) => (
                      <ToggleGroupItem key={num} value={num.toString()} aria-label={`${num} companies`}>
                        {num}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Cap Weight (%)</h3>
                  <ToggleGroup type="single" value={capWeight.toString()} onValueChange={(value) => value && setCapWeight(Number(value))}>
                    {[10, 20, 30].map((weight) => (
                      <ToggleGroupItem key={weight} value={weight.toString()} aria-label={`${weight}% cap weight`}>
                        {weight}%
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Floor Weight (%)</h3>
                  <ToggleGroup type="single" value={floorWeight.toString()} onValueChange={(value) => value && setFloorWeight(Number(value))}>
                    {[1, 2, 3, 5].map((weight) => (
                      <ToggleGroupItem key={weight} value={weight.toString()} aria-label={`${weight}% floor weight`}>
                        {weight}%
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Including Listed</h3>
                  <Tabs defaultValue="yes" className="w-full">
                    <TabsList>
                      <TabsTrigger value="yes" onClick={() => setIncludingListed('yes')}>
                        Yes
                      </TabsTrigger>
                      <TabsTrigger value="no" onClick={() => setIncludingListed('no')}>
                        No
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              <ValuationChart />
              
              <div className="flex justify-center mt-4 gap-2">
                <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">3M</button>
                <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">6M</button>
                <button className="px-4 py-2 text-sm font-medium rounded bg-stargaze-purple text-white">1Y</button>
                <button className="px-4 py-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-300 transition-colors">MAX</button>
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

export default Companies;
