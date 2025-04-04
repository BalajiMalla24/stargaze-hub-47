
import React, { useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanyDetail from './CompanyDetail';

// List of companies with their details
const companies = [
  {
    id: 1,
    logo: "/placeholder.svg",
    name: "NSE India Limited",
    description: "The National Stock Exchange of India Limited is the leading stock exchange of India, located in Mumbai.",
    valuation: 13.5,
    totalBlockSize: 6.8,
    investors: ["Strategic Investors"]
  },
  {
    id: 2,
    logo: "/placeholder.svg",
    name: "Tata Capital",
    description: "A financial services company offering a diverse range of financial products including commercial finance, infrastructure finance, and more.",
    valuation: 8.7,
    totalBlockSize: 4.1,
    investors: ["Tata Sons"]
  },
  {
    id: 3,
    logo: "/placeholder.svg",
    name: "Nayara Energy Limited",
    description: "An integrated downstream oil company with refining, marketing, production and a retail presence across India.",
    valuation: 11.2,
    totalBlockSize: 5.6,
    investors: ["Rosneft", "Trafigura"]
  },
  {
    id: 4,
    logo: "/placeholder.svg",
    name: "SBI Funds Management Limited",
    description: "One of India's largest asset management companies offering a diverse portfolio of mutual fund schemes.",
    valuation: 9.8,
    totalBlockSize: 4.9,
    investors: ["State Bank of India", "Amundi"]
  },
  {
    id: 5,
    logo: "/placeholder.svg",
    name: "HDB Financial Services Limited",
    description: "A leading Non-Banking Financial Company (NBFC) providing a wide range of loans and asset finance products to different customer segments.",
    valuation: 7.5,
    totalBlockSize: 3.7,
    investors: ["HDFC Bank"]
  },
  {
    id: 6,
    logo: "/placeholder.svg",
    name: "Swiggy",
    description: "Leading food delivery platform in India connecting consumers to thousands of restaurants.",
    valuation: 10.7,
    totalBlockSize: 5.3,
    investors: ["Prosus", "Accel", "DST Global"]
  },
  {
    id: 7,
    logo: "/placeholder.svg",
    name: "Capgemini Technology Services India Limited",
    description: "A global leader in consulting, technology services and digital transformation.",
    valuation: 15.3,
    totalBlockSize: 7.6,
    investors: ["Institutional Investors"]
  },
  {
    id: 8,
    logo: "/placeholder.svg",
    name: "Waaree Energies Limited",
    description: "India's largest solar panel manufacturer and a leader in the renewable energy sector.",
    valuation: 5.8,
    totalBlockSize: 2.9,
    investors: ["Private Equity Firms"]
  },
  {
    id: 9,
    logo: "/placeholder.svg",
    name: "Ola",
    description: "One of India's largest mobility platforms and ride-hailing companies.",
    valuation: 7.3,
    totalBlockSize: 3.6,
    investors: ["SoftBank", "Tiger Global", "Tencent"]
  },
  {
    id: 10,
    logo: "/placeholder.svg",
    name: "Dream11",
    description: "India's biggest fantasy sports platform with over 100 million users.",
    valuation: 8.0,
    totalBlockSize: 4.0,
    investors: ["Tiger Global", "TPG", "Steadview Capital"]
  },
  {
    id: 11,
    logo: "/placeholder.svg",
    name: "Razorpay",
    description: "Leading full-stack financial solutions company that helps businesses accept and process payments online.",
    valuation: 7.5,
    totalBlockSize: 3.7,
    investors: ["Sequoia Capital", "GIC", "Ribbit Capital"]
  },
  {
    id: 12,
    logo: "/placeholder.svg",
    name: "Anheuser Busch Inbev India Limited",
    description: "Indian arm of the world's largest brewer with popular brands in its portfolio.",
    valuation: 6.9,
    totalBlockSize: 3.4,
    investors: ["Global Institutional Investors"]
  },
  {
    id: 13,
    logo: "/placeholder.svg",
    name: "Ola Electric",
    description: "Electric vehicle manufacturer focused on building electric two-wheelers and other mobility solutions.",
    valuation: 5.4,
    totalBlockSize: 2.7,
    investors: ["SoftBank", "Matrix Partners", "Tiger Global"]
  },
  {
    id: 14,
    logo: "/placeholder.svg",
    name: "Pine Labs",
    description: "Merchant platform company that provides financing and last-mile retail transaction technology.",
    valuation: 5.0,
    totalBlockSize: 2.5,
    investors: ["Sequoia Capital", "Temasek", "PayPal"]
  },
  {
    id: 15,
    logo: "/placeholder.svg",
    name: "OfBusiness",
    description: "Technology-enabled platform for procurement of raw materials and credit for SMEs in the manufacturing and infrastructure sectors.",
    valuation: 5.1,
    totalBlockSize: 2.5,
    investors: ["SoftBank", "Falcon Edge", "Matrix Partners"]
  },
  {
    id: 16,
    logo: "/placeholder.svg",
    name: "Zepto",
    description: "Quick commerce startup that delivers groceries and essentials in under 10 minutes.",
    valuation: 4.1,
    totalBlockSize: 2.0,
    investors: ["Nexus Venture Partners", "Y Combinator", "Glade Brook Capital"]
  },
  {
    id: 17,
    logo: "/placeholder.svg",
    name: "Lenskart",
    description: "Omnichannel eyewear retailer offering eyeglasses, sunglasses, contact lenses and more.",
    valuation: 4.5,
    totalBlockSize: 2.2,
    investors: ["SoftBank", "Kedaara Capital", "TR Capital"]
  },
  {
    id: 18,
    logo: "/placeholder.svg",
    name: "Oravel Stays Limited",
    description: "Parent company of OYO Rooms, a global hospitality chain of leased and franchised hotels, homes and living spaces.",
    valuation: 9.0,
    totalBlockSize: 4.5,
    investors: ["SoftBank", "Lightspeed", "Sequoia Capital"]
  },
  {
    id: 19,
    logo: "/placeholder.svg",
    name: "Hero FinCorp Limited",
    description: "Non-Banking Financial Company (NBFC) providing a range of financial services and products.",
    valuation: 4.2,
    totalBlockSize: 2.1,
    investors: ["Hero Group", "Apollo Global"]
  },
  {
    id: 20,
    logo: "/placeholder.svg",
    name: "Go Digit",
    description: "General insurance company aiming to simplify insurance for consumers using technology.",
    valuation: 4.0,
    totalBlockSize: 2.0,
    investors: ["Fairfax Financial", "TVS Capital"]
  },
  {
    id: 21,
    logo: "/placeholder.svg",
    name: "Hexaware Technologies Limited",
    description: "Information Technology and Business Process Outsourcing service provider.",
    valuation: 3.8,
    totalBlockSize: 1.9,
    investors: ["Baring Private Equity Asia"]
  },
  {
    id: 22,
    logo: "/placeholder.svg",
    name: "Meesho",
    description: "Social commerce platform that enables small businesses and individuals to start their online stores via social channels.",
    valuation: 4.9,
    totalBlockSize: 2.4,
    investors: ["SoftBank", "Prosus", "Facebook"]
  },
  {
    id: 23,
    logo: "/placeholder.svg",
    name: "HDFC Ergo General Insurance Company Limited",
    description: "Joint venture between HDFC Ltd. and ERGO International AG offering general insurance products.",
    valuation: 8.3,
    totalBlockSize: 4.1,
    investors: ["HDFC", "ERGO International"]
  },
  {
    id: 24,
    logo: "/placeholder.svg",
    name: "SBI General Insurance Company Ltd",
    description: "Joint venture between State Bank of India and Insurance Australia Group (IAG) offering general insurance solutions.",
    valuation: 7.8,
    totalBlockSize: 3.9,
    investors: ["SBI", "IAG"]
  },
  {
    id: 25,
    logo: "/placeholder.svg",
    name: "Imagine Marketing Limited [Boat]",
    description: "Parent company of boAt, a leading consumer electronics brand known for headphones, earphones, and wearables.",
    valuation: 2.8,
    totalBlockSize: 1.4,
    investors: ["Warburg Pincus", "Qualcomm"]
  },
  {
    id: 26,
    logo: "/placeholder.svg",
    name: "Cochin International Airport Limited",
    description: "The world's first fully solar-powered airport and one of the busiest airports in India.",
    valuation: 2.5,
    totalBlockSize: 1.2,
    investors: ["Government of Kerala", "Public Shareholders"]
  },
  {
    id: 27,
    logo: "/placeholder.svg",
    name: "Zetwerk",
    description: "B2B marketplace for manufacturing items connecting manufacturing companies with suppliers and factories.",
    valuation: 2.7,
    totalBlockSize: 1.3,
    investors: ["Sequoia Capital", "Lightspeed", "Greenoaks Capital"]
  },
  {
    id: 28,
    logo: "/placeholder.svg",
    name: "National Securities Depository Limited",
    description: "India's first and largest depository established to handle dematerialized securities trading.",
    valuation: 6.4,
    totalBlockSize: 3.2,
    investors: ["Major Financial Institutions"]
  },
  {
    id: 29,
    logo: "/placeholder.svg",
    name: "Care Health Insurance Limited",
    description: "Health insurance company offering a wide range of health insurance products and services.",
    valuation: 2.2,
    totalBlockSize: 1.1,
    investors: ["Religare", "Union Bank of India"]
  },
  {
    id: 30,
    logo: "/placeholder.svg",
    name: "Mobile Premier League",
    description: "Mobile gaming and esports platform offering multiple casual and competitive games.",
    valuation: 2.4,
    totalBlockSize: 1.2,
    investors: ["Sequoia Capital", "Go Ventures", "RTP Global"]
  },
  {
    id: 31,
    logo: "/placeholder.svg",
    name: "Urban Company",
    description: "Tech-enabled home services platform connecting customers with service professionals.",
    valuation: 2.1,
    totalBlockSize: 1.0,
    investors: ["Prosus", "Tiger Global", "Accel"]
  },
  {
    id: 32,
    logo: "/placeholder.svg",
    name: "HDFC Securities Limited",
    description: "Leading stock broking company providing services through a network of branches and digital platforms.",
    valuation: 5.9,
    totalBlockSize: 2.9,
    investors: ["HDFC Bank", "HDFC"]
  },
  {
    id: 33,
    logo: "/placeholder.svg",
    name: "Motilal Oswal Home Finance Limited",
    description: "Housing finance company offering home loans and other mortgage products.",
    valuation: 1.8,
    totalBlockSize: 0.9,
    investors: ["Motilal Oswal Financial Services"]
  },
  {
    id: 34,
    logo: "/placeholder.svg",
    name: "Cult.fit",
    description: "Health and fitness company offering digital and offline experiences across fitness, nutrition, and mental wellbeing.",
    valuation: 1.5,
    totalBlockSize: 0.7,
    investors: ["Tata Digital", "Temasek", "Accel"]
  },
  {
    id: 35,
    logo: "/placeholder.svg",
    name: "Goa Shipyard Limited",
    description: "Defense shipyard that specializes in building and repairing ships for the Indian Navy and Coast Guard.",
    valuation: 1.7,
    totalBlockSize: 0.8,
    investors: ["Government of India"]
  },
  {
    id: 36,
    logo: "/placeholder.svg",
    name: "Ather Energy",
    description: "Electric vehicle manufacturer focused on designing and manufacturing smart electric scooters.",
    valuation: 1.4,
    totalBlockSize: 0.7,
    investors: ["Hero MotoCorp", "Flipkart", "Sachin Bansal"]
  },
  {
    id: 37,
    logo: "/placeholder.svg",
    name: "CarDekho",
    description: "Auto tech company that operates online portals for buying and selling new and used cars.",
    valuation: 1.2,
    totalBlockSize: 0.6,
    investors: ["Sequoia Capital", "Hillhouse Capital", "CapitalG"]
  },
  {
    id: 38,
    logo: "/placeholder.svg",
    name: "Incred Holdings Limited",
    description: "Tech-enabled financial services platform offering personal loans, education loans, and SME loans.",
    valuation: 1.0,
    totalBlockSize: 0.5,
    investors: ["Elevar Equity", "Alpha Capital"]
  },
  {
    id: 39,
    logo: "/placeholder.svg",
    name: "Yubi",
    description: "Formerly CredAvenue, a debt marketplace connecting enterprises with lenders and investors.",
    valuation: 1.3,
    totalBlockSize: 0.6,
    investors: ["Insight Partners", "B Capital Group", "Dragoneer"]
  },
  {
    id: 40,
    logo: "/placeholder.svg",
    name: "Indian Potash Limited",
    description: "One of the largest importers of potash in India, dealing with fertilizers and agricultural inputs.",
    valuation: 2.6,
    totalBlockSize: 1.3,
    investors: ["Indian Government", "Cooperative Societies"]
  }
];

const CompanyList = () => {
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  const handleCompanyClick = (company: typeof companies[0]) => {
    setSelectedCompany(company);
  };

  const handleCloseDetail = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-2">Companies in the Index</h2>
      <p className="text-gray-600 mb-6">Click on a company to view detailed valuation history</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            logo={company.logo}
            name={company.name}
            description={company.description}
            valuation={company.valuation}
            totalBlockSize={company.totalBlockSize}
            investors={company.investors}
            onClick={() => handleCompanyClick(company)}
          />
        ))}
      </div>
      
      <div className="text-center mt-8 text-gray-500 italic">
        Note: Illustrative purposes only.
      </div>
      
      {selectedCompany && (
        <CompanyDetail company={selectedCompany} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default CompanyList;
