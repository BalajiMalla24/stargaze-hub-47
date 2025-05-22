
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ValuationChart from '@/components/ValuationChart';
import ReturnCalculator from '@/components/ReturnCalculator';
import CompanyList from '@/components/CompanyList';
import Footer from '@/components/Footer';
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Companies = () => {
  // Get current date for the "Updated" timestamp
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}th ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Investment Calculator */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Investment Calculator</h2>
              <ReturnCalculator />
            </div>

            {/* Fund Performance */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Fund Performance</h2>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !fromDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {fromDate ? format(fromDate, "PPP") : <span>From date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={fromDate}
                        onSelect={setFromDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !toDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {toDate ? format(toDate, "PPP") : <span>To date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={toDate}
                        onSelect={setToDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <ValuationChart />
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
