import { useState } from 'react';
import Header from './components/Header';
import WeekTabs from './components/WeekTabs';
import MealPlanDisplay from './components/MealPlanDisplay';
import Footer from './components/Footer';
import { mealPlanData } from './data/mealPlanData';

function App() {
  const [activeWeek, setActiveWeek] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">28 Day <span className="text-secondary-500">Boost Camp</span> Meal Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow this comprehensive 28-day meal plan to transform your health, boost your energy, and develop sustainable eating habits.
          </p>
        </div>
        
        <WeekTabs activeWeek={activeWeek} setActiveWeek={setActiveWeek} />
        
        <MealPlanDisplay weekData={mealPlanData[activeWeek - 1]} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
