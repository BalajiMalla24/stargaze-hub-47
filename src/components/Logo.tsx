
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/42fefebb-6b77-4a8e-9e3e-424539b72547.png" 
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
