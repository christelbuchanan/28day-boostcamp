# 28 Day Boost Camp Meal Planner

A comprehensive meal planning application for Bridget's Healthy Kitchen 28 Day Boost Camp program. This interactive web application helps users follow a structured 28-day meal plan designed to transform health, boost energy, and develop sustainable eating habits.

## Features

- **4-Week Meal Plan**: Complete 28-day meal plan organized by weeks
- **Daily Meal Cards**: Detailed breakfast, lunch, and dinner recommendations for each day
- **Recipe Integration**: Interactive recipe links with detailed preparation instructions
- **Premium Content**: Premium recipe indication with subscription options
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices

## Technology Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for improved development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling for fast development
- **Lucide React**: Beautiful, consistent icon set

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/28-day-boost-camp-meal-planner.git
   cd 28-day-boost-camp-meal-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx   # Application header
│   │   ├── Footer.tsx   # Application footer
│   │   ├── WeekTabs.tsx # Week navigation tabs
│   │   ├── MealPlanDisplay.tsx # Meal plan display component
│   │   └── RecipeModal.tsx # Recipe popup modal
│   ├── data/            # Data files
│   │   ├── mealPlanData.ts # Meal plan data for all 28 days
│   │   └── recipeData.ts   # Recipe details and instructions
│   ├── types.ts         # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Usage

### Navigating the Meal Plan

1. Use the week tabs at the top to navigate between the four weeks of the meal plan.
2. Each day card shows the recommended breakfast, lunch, and dinner for that day.
3. Click on any recipe name to view detailed preparation instructions.

### Viewing Recipes

- **Free Recipes**: The "Impossible Breakfast Pie" recipe is available for free and shows complete preparation instructions.
- **Premium Recipes**: All other recipes require a premium subscription. Clicking on these recipes will prompt you to sign up at 28dayboostcamp.com.

## Customization

### Styling

The application uses Tailwind CSS for styling. The main color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Black color palette
        50: '#f6f6f6',
        // ...
        900: '#1a1a1a',
      },
      secondary: {
        // Pink color palette
        50: '#fdf2f8',
        // ...
        900: '#831843',
      },
    },
  },
}
```

### Adding New Recipes

To add new recipes, update the `recipeData.ts` file with the recipe details:

```typescript
"Recipe Name": {
  name: "Recipe Name",
  isPremium: true, // or false for free recipes
  dietaryInfo: "Gluten free | Sugar free | etc.",
  servings: "Makes X portions.",
  notes: "Additional notes about the recipe.",
  ingredients: [
    "Ingredient 1",
    "Ingredient 2",
    // ...
  ],
  method: [
    "Step 1",
    "Step 2",
    // ...
  ],
  storageInfo: "Storage instructions."
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bridget's Healthy Kitchen for the 28 Day Boost Camp program and recipes
- All contributors who have helped improve this application

---

© 2025 Bridget's Healthy Kitchen. All rights reserved.
