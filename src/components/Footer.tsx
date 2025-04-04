
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              The platform for private market valuations and insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-stargaze-purple">About</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-stargaze-purple">Careers</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-stargaze-purple">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-600 hover:text-stargaze-purple">Blog</a></li>
              <li><a href="/reports" className="text-gray-600 hover:text-stargaze-purple">Reports</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-stargaze-purple">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-stargaze-purple">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-stargaze-purple">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Stargaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
