import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Bridget's Healthy Kitchen</h2>
            <p className="text-gray-300 mt-1">28 Day Boost Camp Meal Planner</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-secondary-400 font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Recipes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-secondary-400 font-semibold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="flex items-center justify-center text-gray-400">
            Made with <Heart size={16} className="mx-1 text-secondary-500" fill="currentColor" /> by Bridget's Healthy Kitchen
          </p>
          <p className="text-gray-500 text-sm mt-1">© 2024 Bridget's Healthy Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
