
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Stargaze</h1>
            <div className="max-w-3xl">
              <p className="text-lg text-gray-700 mb-6">
                Stargaze is the premier platform for private market valuations, providing real-time insights into company growth and investment opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2023, our mission is to bring transparency to private markets by tracking and analyzing the valuations of high-growth companies across sectors.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of financial analysts and data scientists work tirelessly to ensure the accuracy of our valuations and provide actionable insights to our clients.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To bring transparency and accessibility to private market valuations, enabling better investment decisions.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                A world where private market information is as accessible and transparent as public markets.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-700">
                Accuracy, transparency, integrity, and innovation drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
