
import React from 'react';

const CriteriaItem = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8 border border-dashed border-gray-300 rounded-md overflow-hidden">
    <div className="bg-amber-50 p-4">
      <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    </div>
    <div className="p-4 bg-white">
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const EligibilityCriteria = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Eligibility Criteria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To be eligible for inclusion in the STARGAZE Unicorn Fund, companies must 
            generally meet the following key health metrics:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <CriteriaItem 
            title="Vetted by U.S. Institutional Investors"
            description="The company must have recently raised over $50M from reputable U.S. institutional investors."
          />
          
          <CriteriaItem 
            title="Healthy Liquidation Preference Ratio"
            description="Company's outstanding preferred stock liquidation preference must be healthy relative to its current market capitalization."
          />
          
          <CriteriaItem 
            title="No burdensome financial structures or heavy debt"
            description="Company's financial structure must not be burdensome (e.g. ratchets with significant penalties, heavy debt loads) in such a way that it would create undue risk of impending financial distress."
          />
          
          <CriteriaItem 
            title="No opaque foreign legal structures"
            description="Company's corporate structure and governance must be transparent and within the range of standard corporate structures."
          />
          
          <CriteriaItem 
            title="No unusually high turnover, or cultural health red flags"
            description="Company's executive team must not have had unusually high turnover over the past 18 months, or have internal cultural issues that concern us."
          />
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
