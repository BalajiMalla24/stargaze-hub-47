
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/e5c97128-d5dc-44e5-9df1-2f54cb41f0ef.png" 
        alt="Stargaze Logo" 
        className="h-10 w-auto"
      />
      <span className="text-2xl font-bold">
        <span className="text-stargaze-purple">STAR</span>
        <span className="text-stargaze-gold">GAZE</span>
      </span>
    </div>
  );
};

export default Logo;
