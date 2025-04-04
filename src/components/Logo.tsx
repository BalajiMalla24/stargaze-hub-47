
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 bg-stargaze-purple rounded-md flex items-center justify-center">
        <div className="h-5 w-5 bg-stargaze-gold rounded-sm transform rotate-45"></div>
      </div>
      <span className="text-2xl font-bold">
        <span className="text-stargaze-purple">STAR</span>
        <span className="text-stargaze-gold">GAZE</span>
      </span>
    </div>
  );
};

export default Logo;
