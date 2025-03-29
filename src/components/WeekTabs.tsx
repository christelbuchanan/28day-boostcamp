import React from 'react';

interface WeekTabsProps {
  activeWeek: number;
  setActiveWeek: (week: number) => void;
}

const WeekTabs: React.FC<WeekTabsProps> = ({ activeWeek, setActiveWeek }) => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
      {[1, 2, 3, 4].map((week) => (
        <button
          key={week}
          onClick={() => setActiveWeek(week)}
          className={`px-6 py-3 mx-2 my-1 rounded-lg font-semibold transition-all ${
            activeWeek === week
              ? 'bg-primary-900 text-secondary-400 shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Week {week}
        </button>
      ))}
    </div>
  );
};

export default WeekTabs;
