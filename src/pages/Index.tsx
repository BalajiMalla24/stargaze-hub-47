
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, BarChart3, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-purple-50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-amber-400">STARGAZE</span> <span className="text-gray-800">Unicorn</span> <span className="text-stargaze-purple">Fund</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Exclusive access to the world's leading private companies before they go public. Invest in tomorrow's giants today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-stargaze-purple hover:bg-stargaze-purple/90 text-white px-8 py-6 text-lg">
                  Explore Fund 40
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-amber-400 text-amber-500 hover:bg-amber-50 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" 
                  alt="Private market investors" 
                  className="w-full object-cover h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white text-xl font-semibold">Combined Market Cap</p>
                  <p className="text-amber-400 text-4xl font-bold">$100B+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies Showcase */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Private Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {['SpaceX', 'Stripe', 'ByteDance', 'Epic Games', 'Instacart'].map((company, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-6 rounded-lg transition-all hover:shadow-md"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${company}&background=random&color=fff&size=80`} 
                      alt={company} 
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{company}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="bg-amber-400 hover:bg-amber-500 text-white" asChild>
                <a href="/companies">View All Companies</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Methodology</h2>
              <p className="text-gray-600">
                We employ a sophisticated, multi-factor approach to identify and track the most promising private companies globally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-stargaze-purple">
                <CardContent className="pt-6">
                  <BarChart3 className="h-12 w-12 text-stargaze-purple mb-4" />
                  <h3 className="text-xl font-bold mb-3">Proprietary Valuation Model</h3>
                  <p className="text-gray-600">
                    Our valuation framework combines multiple methodologies including comparable company analysis, 
                    precedent transactions, and discounted cash flow to derive fair value estimates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-amber-400">
                <CardContent className="pt-6">
                  <Rocket className="h-12 w-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Growth Trajectory Analysis</h3>
                  <p className="text-gray-600">
                    We analyze historical growth patterns, market expansion capabilities, and 
                    potential for disruptive innovation to assess long-term value creation potential.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-gray-800">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Risk-Adjusted Weighting</h3>
                  <p className="text-gray-600">
                    Companies are weighted according to liquidity, governance quality, market position, 
                    and other risk factors to optimize the index for risk-adjusted returns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
              <p className="text-gray-600">
                The STARGAZE Unicorn Fund includes companies that meet our strict selection criteria
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Minimum valuation of $1 billion, verified through recent funding rounds",
                "Revenue growth rate exceeding 30% annually for the past two years",
                "Clear path to profitability within a strategic timeframe",
                "Strong management team with proven execution capabilities",
                "Disruptive product or service with significant market potential",
                "Stable corporate governance structure",
                "Backed by reputable venture capital or private equity firms",
                "Potential for liquidity events within 2-5 years"
              ].map((criterion, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-stargaze-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{criterion}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-stargaze-purple to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in the Future?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Gain exclusive access to our premium index of the world's most promising private companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-6 text-lg" asChild>
                <a href="/companies">Explore Fund 40</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
