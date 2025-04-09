
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="w-full h-20 border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center space-x-8">
          <a href="/" className="font-medium hover:text-stargaze-purple transition-colors">
            Home
          </a>
          <a href="/companies" className="font-medium hover:text-stargaze-purple transition-colors">
            Companies
          </a>
          <a href="/about" className="font-medium hover:text-stargaze-purple transition-colors">
            About
          </a>
          <a href="/blog" className="font-medium hover:text-stargaze-purple transition-colors">
            Blog
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-stargaze-purple text-stargaze-purple hover:bg-stargaze-purple hover:text-white">
            Login
          </Button>
          <Button className="bg-stargaze-purple hover:bg-stargaze-purple/90 text-white">
            Book A Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
