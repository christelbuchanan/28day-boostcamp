import React from 'react';
import { Utensils } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary-900 p-2 rounded-full mr-3">
              <Utensils size={24} className="text-secondary-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bridget's Healthy Kitchen</h1>
              <p className="text-sm text-gray-500">Nourish your body, fuel your life</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-secondary-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-secondary-600 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-secondary-600 font-medium">Recipes</a>
            <a href="#" className="text-gray-600 hover:text-secondary-600 font-medium">Contact</a>
          </nav>
          <button className="bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <span className="text-secondary-400">Join Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
