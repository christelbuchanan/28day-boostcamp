export interface DayMeals {
  breakfast: string;
  lunch: string;
  dinner: string;
  addons?: string;
  [key: string]: string | undefined;
}

export interface WeekData {
  days: DayMeals[];
}

export interface Recipe {
  name: string;
  isPremium: boolean;
  dietaryInfo?: string;
  servings?: string;
  notes?: string;
  ingredients?: string[];
  method?: string[];
  storageInfo?: string;
}
