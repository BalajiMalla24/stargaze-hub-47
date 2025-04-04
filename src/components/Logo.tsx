
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/81cf319b-84eb-4bc8-bd0c-634f776a43e0.png" 
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
