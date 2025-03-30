import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-xl font-bold">Bridget's Healthy Kitchen</h2>
            <p className="text-gray-300 mt-1">28 Day Boost Camp Meal Planner</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="flex items-center justify-center text-gray-400">
            Made with <Heart size={16} className="mx-1 text-secondary-500" fill="currentColor" /> by Bridget's Healthy Kitchen
          </p>
          <p className="text-gray-500 text-sm mt-1">© 2024 Bridget's Healthy Kitchen. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">
            Built using <a href="https://chatandbuild.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-300">chatandbuild.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
