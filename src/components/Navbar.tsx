
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-stargaze-purple transition-colors">
            Home
          </Link>
          <Link to="/companies" className="font-medium hover:text-stargaze-purple transition-colors">
            Companies
          </Link>
          <Link to="/about" className="font-medium hover:text-stargaze-purple transition-colors">
            About
          </Link>
          <Link to="/blog" className="font-medium hover:text-stargaze-purple transition-colors">
            Blog
          </Link>
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
