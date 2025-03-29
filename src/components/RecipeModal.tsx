import React from 'react';
import { X } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (recipe.isPremium) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
          <div className="bg-primary-900 text-white p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 text-center">
            <div className="bg-secondary-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Premium Recipe</h3>
              <p className="text-gray-600 mb-4">
                This recipe is available exclusively to our premium members.
              </p>
              <a 
                href="https://28dayboostcamp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Join 28 Day Boost Camp
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Unlock all recipes and get full access to our 28-day meal plan by signing up today!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="bg-primary-900 text-white p-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {recipe.dietaryInfo && (
            <div className="bg-secondary-50 text-secondary-800 p-3 rounded-lg mb-4 text-sm font-medium">
              {recipe.dietaryInfo}
            </div>
          )}
          
          {recipe.servings && (
            <p className="text-gray-700 mb-2 font-medium">{recipe.servings}</p>
          )}
          
          {recipe.notes && (
            <p className="text-gray-600 mb-6">{recipe.notes}</p>
          )}
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-primary-900 mb-3 border-b border-gray-200 pb-2">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary-500 mr-2">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-primary-900 mb-3 border-b border-gray-200 pb-2">Method</h3>
            <ol className="space-y-4">
              {recipe.method?.map((step, index) => (
                <li key={index} className="flex">
                  <span className="bg-secondary-100 text-secondary-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {recipe.storageInfo && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-primary-900 mb-1">Storage</h3>
              <p className="text-gray-600 text-sm">{recipe.storageInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
