
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

const ReturnCalculator = () => {
  const [investment, setInvestment] = useState(10000);
  const [years, setYears] = useState(4);
  const [returnRate, setReturnRate] = useState(20);
  const [result, setResult] = useState<number | null>(null);

  const calculateReturns = () => {
    // Compound interest formula: A = P(1 + r/100)^t
    const futureValue = investment * Math.pow(1 + returnRate / 100, years);
    setResult(futureValue);
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Return Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="investment">Initial Investment (USD)</Label>
            <Input
              id="investment"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              min={1}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="years">Time Period (Years)</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              min={1}
              max={10}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="returnRate">Annual Return Rate (%)</Label>
            <Input
              id="returnRate"
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              min={1}
              max={100}
            />
          </div>
          
          <Button 
            onClick={calculateReturns}
            className="mt-2 bg-stargaze-purple hover:bg-stargaze-purple/90"
          >
            Calculate
          </Button>
          
          {result !== null && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">Estimated Future Value:</p>
              <p className="text-xl font-bold text-stargaze-purple">
                ${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Profit: ${(result - investment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReturnCalculator;
