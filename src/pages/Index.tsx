
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
    { value: '19%', label: 'YoY Returns' },
    { value: '4000+', label: 'Qualified Investors' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Ticker with company performances */}
      <CompanyTicker />
      
      <main className="flex-grow">
        {/* Hero Section - Updated with yellow, purple, white theme */}
        <section className="relative h-[90vh] bg-cover bg-center flex items-center" 
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(253, 224, 71, 0.15) 0%, rgba(214, 188, 250, 0.85) 100%)'
          }}>
          <div className="container mx-auto px-4 text-left lg:ml-20">
            <div className="inline-block bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-amber-300">
              <span className="text-purple-700 font-medium">Launching May 2025</span>
              <span className="mx-4 text-gray-500">|</span>
              <span className="text-gray-700">Early access now open</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight text-purple-900">
              Bringing index-style access to the <span className="text-amber-500">private markets</span> — curated, data-backed, and growth-focused.
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-purple-800">
              STARGAZE Index 50 gives you access to a curated portfolio of India's most promising private companies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-amber-400 hover:bg-amber-500 text-purple-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg">
                <Link to="/companies">Explore Index 50</Link>
              </Button>
              
              <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-100 px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats overlay */}
          <div 
            ref={statsRef}
            className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md py-6 border-t border-amber-200"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-gray-700">
                    <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-purple-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">Featured in our Index 50</h2>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
