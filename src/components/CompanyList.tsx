
import React from 'react';
import CompanyCard from './CompanyCard';

// This is dummy data to simulate company information
const companies = [
  {
    id: 1,
    logo: "/placeholder.svg",
    name: "Hop",
    description: "A lifestyle brand that deals with fashionable consumer electronics including earphones, headphones, speakers, travel chargers, and premium rugged cables.",
    valuation: 1.8,
    totalBlockSize: 0.8,
    investors: ["Live style"]
  },
  {
    id: 2,
    logo: "/placeholder.svg",
    name: "Capital Goods",
    description: "Capital goods offers high-quality production globally competitive craft and unparalleled lead times in the manufacturing of capital goods.",
    valuation: 10.5,
    totalBlockSize: 4.2,
    investors: ["Notable Investors", "Critical river"]
  },
  {
    id: 3,
    logo: "/placeholder.svg",
    name: "Ignition",
    description: "A Rush Gaming Universe (RGU) where players can battle in India's most popular casual games and use their skills to Play, Earn and Grow.",
    valuation: 7.2,
    totalBlockSize: 3.1,
    investors: ["Matrix"]
  },
  {
    id: 4,
    logo: "/placeholder.svg",
    name: "Sitemark",
    description: "Site mark supercenters offer a one-stop shopping experience by combining a grocery store with fresh produce, bakery, dairy products with electronics, apparel, toys and home furnishings.",
    valuation: 5.9,
    totalBlockSize: 1.8,
    investors: ["Walmarket"]
  },
  {
    id: 5,
    logo: "/placeholder.svg",
    name: "Techwave",
    description: "Leading provider of cloud solutions and digital transformation services for enterprises.",
    valuation: 15.3,
    totalBlockSize: 7.1,
    investors: ["Insight Partners", "Silver Lake"]
  },
  {
    id: 6,
    logo: "/placeholder.svg",
    name: "Nexus",
    description: "Developer of AI-powered logistics and supply chain optimization software.",
    valuation: 12.1,
    totalBlockSize: 5.3,
    investors: ["Sequoia", "Andreessen Horowitz"]
  },
  {
    id: 7,
    logo: "/placeholder.svg",
    name: "Fintech Plus",
    description: "Innovative financial services platform for small businesses and entrepreneurs.",
    valuation: 8.7,
    totalBlockSize: 4.1,
    investors: ["Y Combinator", "Tiger Global"]
  },
  {
    id: 8,
    logo: "/placeholder.svg",
    name: "GreenEnergy",
    description: "Developing sustainable energy solutions and carbon capture technologies.",
    valuation: 6.9,
    totalBlockSize: 3.2,
    investors: ["Breakthrough Energy", "Khosla Ventures"]
  },
  {
    id: 9,
    logo: "/placeholder.svg",
    name: "HealthTech",
    description: "Creator of telemedicine platforms and remote patient monitoring systems.",
    valuation: 9.2,
    totalBlockSize: 4.6,
    investors: ["Google Ventures", "Kleiner Perkins"]
  },
  {
    id: 10,
    logo: "/placeholder.svg",
    name: "RoboSystems",
    description: "Designer of industrial automation robots and AI-based control systems.",
    valuation: 11.4,
    totalBlockSize: 5.8,
    investors: ["SoftBank Vision Fund", "Draper Associates"]
  },
  {
    id: 11,
    logo: "/placeholder.svg",
    name: "EduLearn",
    description: "Online learning platform offering courses in technology and business skills.",
    valuation: 7.8,
    totalBlockSize: 3.5,
    investors: ["Accel", "NEA"]
  },
  {
    id: 12,
    logo: "/placeholder.svg",
    name: "SpaceX Alternative",
    description: "Developing next-generation satellite technology for global communications.",
    valuation: 18.9,
    totalBlockSize: 9.1,
    investors: ["Founders Fund", "Fidelity"]
  }
];

// Generate additional companies to reach 40
const generateMoreCompanies = () => {
  const baseCompanies = [...companies];
  const allCompanies = [...baseCompanies];
  
  // Names for additional generated companies
  const companyNames = [
    "Quantum", "Fusion", "DataSphere", "NanoTech", "OmniConnect", 
    "Vertex", "Pinnacle", "Horizon", "Eclipse", "Nexstar",
    "Elevate", "Spectrum", "Zenith", "Apex", "Orbital", 
    "Phoenix", "Cascade", "Summit", "Titan", "Genesis",
    "Infinite", "Stellar", "Cosmos", "Nebula", "Radiant",
    "Oculus", "Polaris", "Vortex", "Lumina", "Novus"
  ];
  
  // Generate more companies to reach 40
  for (let i = baseCompanies.length; i < 40; i++) {
    const randomBase = baseCompanies[i % baseCompanies.length];
    const valuationMultiplier = 0.7 + Math.random() * 1.3;
    
    allCompanies.push({
      id: i + 1,
      logo: "/placeholder.svg",
      name: companyNames[i - baseCompanies.length],
      description: `Innovative company focused on ${Math.random() > 0.5 ? 'technology' : 'service'} solutions for ${Math.random() > 0.5 ? 'enterprise' : 'consumer'} markets.`,
      valuation: +(randomBase.valuation * valuationMultiplier).toFixed(1),
      totalBlockSize: +(randomBase.totalBlockSize * valuationMultiplier).toFixed(1),
      investors: randomBase.investors
    });
  }
  
  return allCompanies;
};

const allCompanies = generateMoreCompanies();

const CompanyList = () => {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Featured Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            logo={company.logo}
            name={company.name}
            description={company.description}
            valuation={company.valuation}
            totalBlockSize={company.totalBlockSize}
            investors={company.investors}
          />
        ))}
      </div>
      <div className="text-center mt-8 text-gray-500 italic">
        Note: Illustrative purposes only.
      </div>
    </div>
  );
};

export default CompanyList;
