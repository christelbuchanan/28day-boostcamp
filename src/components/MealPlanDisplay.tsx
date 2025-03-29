import React, { useState } from 'react';
import { Coffee, Sun, Moon, Plus, ExternalLink } from 'lucide-react';
import { WeekData, DayMeals } from '../types';
import RecipeModal from './RecipeModal';
import { recipes } from '../data/recipeData';

interface MealPlanDisplayProps {
  weekData: WeekData;
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ weekData }) => {
  const getMealIcon = (mealType: string) => {
    switch (mealType) {
      case 'breakfast':
        return <Coffee className="text-secondary-500" size={18} />;
      case 'lunch':
        return <Sun className="text-secondary-500" size={18} />;
      case 'dinner':
        return <Moon className="text-secondary-500" size={18} />;
      case 'addons':
        return <Plus className="text-secondary-500" size={18} />;
      default:
        return <Coffee className="text-secondary-500" size={18} />;
    }
  };

  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const handleRecipeClick = (recipeName: string) => {
    setSelectedRecipe(recipeName);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {weekData.days.map((day, index) => (
          <DayCard 
            key={index} 
            day={day} 
            dayNumber={index + 1} 
            getMealIcon={getMealIcon} 
            onRecipeClick={handleRecipeClick}
          />
        ))}
      </div>

      {selectedRecipe && recipes[selectedRecipe] && (
        <RecipeModal 
          recipe={recipes[selectedRecipe]} 
          onClose={closeRecipeModal} 
        />
      )}
    </>
  );
};

interface DayCardProps {
  day: DayMeals;
  dayNumber: number;
  getMealIcon: (mealType: string) => JSX.Element;
  onRecipeClick: (recipeName: string) => void;
}

const DayCard: React.FC<DayCardProps> = ({ day, dayNumber, getMealIcon, onRecipeClick }) => {
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayName = dayNames[(dayNumber - 1) % 7];

  const findRecipeNames = (text: string) => {
    const recipeNames = Object.keys(recipes);
    const foundRecipes: string[] = [];
    
    recipeNames.forEach(name => {
      if (text.includes(name)) {
        foundRecipes.push(name);
      }
    });
    
    return foundRecipes;
  };

  const renderMealWithRecipeLinks = (text: string) => {
    const foundRecipes = findRecipeNames(text);
    
    if (foundRecipes.length === 0) {
      return <p className="text-sm text-gray-600">{text}</p>;
    }
    
    let result = text;
    foundRecipes.forEach(recipe => {
      const isPremium = recipes[recipe].isPremium;
      const recipeLink = `<button class="font-medium text-secondary-600 hover:text-secondary-800 inline-flex items-center" data-recipe="${recipe}">${recipe}${isPremium ? ' <span class="ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>' : ''}</button>`;
      result = result.replace(recipe, recipeLink);
    });
    
    return (
      <p 
        className="text-sm text-gray-600" 
        dangerouslySetInnerHTML={{ __html: result }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'BUTTON') {
            const recipeName = target.getAttribute('data-recipe');
            if (recipeName) {
              onRecipeClick(recipeName);
            }
          }
        }}
      />
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-primary-800 text-white py-3 px-4">
        <h3 className="font-bold text-center">{dayName}</h3>
        <p className="text-xs text-center text-gray-300">Day {dayNumber}</p>
      </div>
      <div className="p-4 space-y-4">
        {Object.entries(day).map(([mealType, meal]) => {
          if (meal && mealType !== 'addons') {
            return (
              <div key={mealType} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center mb-2">
                  {getMealIcon(mealType)}
                  <h4 className="ml-2 font-semibold text-gray-700 capitalize">{mealType}</h4>
                </div>
                {renderMealWithRecipeLinks(meal)}
              </div>
            );
          }
          return null;
        })}
        
        {day.addons && (
          <div className="border-t border-gray-100 pt-3 mt-3">
            <div className="flex items-center mb-2">
              {getMealIcon('addons')}
              <h4 className="ml-2 font-semibold text-gray-700">Add-ons</h4>
            </div>
            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{day.addons}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPlanDisplay;
