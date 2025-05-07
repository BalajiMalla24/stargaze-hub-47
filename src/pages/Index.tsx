
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChartLine } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import CompanyTicker from '@/components/CompanyTicker';
import IndexFundExplainer from '@/components/IndexFundExplainer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentFeaturedRef = featuredRef.current;
    if (currentFeaturedRef) {
      observer.observe(currentFeaturedRef);
    }

    return () => {
      if (currentFeaturedRef) {
        observer.unobserve(currentFeaturedRef);
      }
    };
  }, []);

  const companyLogos = [
    { name: 'Tata Elxsi', src: '/lovable-uploads/c00bd6e5-b212-4b7f-b44e-1a2ba50833d6.png' },
    { name: 'Delhivery', src: '/lovable-uploads/41b83d4b-1a8b-418a-af8e-0c39ac7de3cf.png' },
    { name: 'Swiggy', src: '/lovable-uploads/b1ead9bd-470e-47a6-ba99-561963a08f00.png' },
    { name: 'Zepto', src: '/lovable-uploads/7f0cb945-f4f8-492b-aa1a-9cc8b2aed2d1.png' },
    { name: 'FirstCry', src: '/lovable-uploads/65c9b09f-40fa-40fc-8300-30b3ab2fc42f.png' },
  ];

  const stats = [
    { value: '50+', label: 'Curated Companies' },
    { value: '₹250Cr+', label: 'Assets Tracked' },
    { value: '19%', label: 'YoY Returns' },  // Updated from 27.5% to 19%
    { value: '4000+', label: 'Qualified Investors' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Ticker with company performances */}
      <CompanyTicker />
      
      <main className="flex-grow">
        {/* Hero Section - Professional full-width background with gradient overlay */}
        <section className="relative h-[90vh] bg-cover bg-center flex items-center" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(26, 32, 44, 0.8), rgba(0, 0, 0, 0.9)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}>
          <div className="container mx-auto px-4 text-left lg:ml-20">
            <div className="inline-block bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-stargaze-gold font-medium">Launching May 2025</span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="text-white">Early access now open</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight text-white">
              The future of <span className="text-stargaze-gold">private equity</span> investing is here.
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200">
              STARGAZE Index 50 gives you access to a curated portfolio of India's most promising private companies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-stargaze-gold hover:bg-stargaze-gold/90 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg">
                <Link to="/companies">Explore Index 50</Link>
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats overlay */}
          <div 
            ref={statsRef}
            className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md py-6 border-t border-gray-700"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-3xl md:text-4xl font-bold text-stargaze-gold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies Section - with animated logos */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured in our Index 50</h2>
            <div 
              ref={featuredRef}
              className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center"
            >
              {companyLogos.map((company, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-500 hover:scale-110 w-32 h-16 flex items-center justify-center transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={company.src} 
                    alt={company.name} 
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Index Fund Explainer Section */}
        <IndexFundExplainer />

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  Invest in unicorns before they go public.
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  STARGAZE gives you simple and direct access to one central place 
                  for qualified participants to invest in India's top private companies.
                </p>
                <Button className="bg-stargaze-purple hover:bg-stargaze-purple/90 text-white px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-stargaze-purple/10 p-3 rounded-full">
                        <ChartLine className="h-6 w-6 text-stargaze-purple" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Access market intelligence</h3>
                        <p className="text-gray-600">
                          View current and historical data on valuations and private market transactions. 
                          Best of all, there is no charge to access STARGAZE's comprehensive data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-stargaze-gold/10 p-3 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stargaze-gold">
                          <path d="M16.5 6L12 1.5L7.5 6M12 1.5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 10.5C4.5 11.5 3 15 3 18.5C5 16.5 7.5 16 9.5 16.5C12.5 17.5 14.5 17.5 17.5 16.5C21 15.5 22.5 13 22.5 9.5C20.5 11.5 18 12 16 11.5C13 10.5 11 10.5 8 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Invest directly</h3>
                        <p className="text-gray-600">
                          Connect directly with a deep pool of verified companies and 
                          stay in control of your investments from start to finish.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-stargaze-purple/10 p-3 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stargaze-purple">
                          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Strategic investment</h3>
                        <p className="text-gray-600">
                          Streamline your investment process with automated portfolio management tools. 
                          Create a strategy based on our proprietary algorithms and research.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Index Construction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Index Construction Methodology</h2>
              <p className="text-gray-600">
                Our Index 50 is constructed using a rigorous methodology to ensure it represents the most promising private companies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-stargaze-purple hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Proprietary Deal Sourcing</h3>
                  <p className="text-gray-600">
                    Our exclusive network provides access to high-potential private companies 
                    before they become widely known, creating unique investment opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-stargaze-gold hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Advanced Data Analytics</h3>
                  <p className="text-gray-600">
                    We employ sophisticated algorithms and market intelligence to identify 
                    companies with exceptional growth trajectories and sustainable business models.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Strategic Portfolio Balance</h3>
                  <p className="text-gray-600">
                    Our Index 50 maintains optimal diversification across growth stages, 
                    sectors, and geographical regions to maximize return potential.
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
                The STARGAZE Index 50 includes companies that meet our strict selection criteria
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Revenue growth rate exceeding 30% annually for the past two years",
                "Clear path to profitability within a strategic timeframe",
                "Strong management team with proven execution capabilities",
                "Disruptive product or service with significant market potential",
                "Stable corporate governance structure",
                "Backed by reputable venture capital or private equity firms",
                "Potential for liquidity events within 2-5 years"
              ].map((criterion, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
              <Button className="bg-stargaze-gold hover:bg-stargaze-gold/90 text-black font-bold px-8 py-6 text-lg" asChild>
                <Link to="/companies">Explore Index 50</Link>
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
