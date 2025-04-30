
import { useLocation } from "react-router-dom";

// Theme colors mapping for different skill pages
export const skillThemes = {
  "/skills/car-maintenance": {
    color: "blue",
    bgColor: "from-blue-500 to-blue-600",
    iconColor: "bg-blue-100 text-blue-600",
    borderColor: "border-t-blue-500",
    accentColor: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-500",
    hoverBgColor: "hover:bg-blue-50"
  },
  "/skills/diy": {
    color: "rose",
    bgColor: "from-rose-500 to-rose-600",
    iconColor: "bg-rose-100 text-rose-600",
    borderColor: "border-t-rose-500",
    accentColor: "bg-rose-500 hover:bg-rose-600",
    textColor: "text-rose-500",
    hoverBgColor: "hover:bg-rose-50"
  },
  "/skills/budgeting": {
    color: "green",
    bgColor: "from-green-500 to-green-600",
    iconColor: "bg-green-100 text-green-600",
    borderColor: "border-t-green-500",
    accentColor: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-500",
    hoverBgColor: "hover:bg-green-50"
  },
  "/skills/digital": {
    color: "purple",
    bgColor: "from-purple-500 to-purple-600",
    iconColor: "bg-purple-100 text-purple-600",
    borderColor: "border-t-purple-500",
    accentColor: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-500",
    hoverBgColor: "hover:bg-purple-50"
  },
  "/skills/cooking": {
    color: "amber",
    bgColor: "from-amber-500 to-amber-600",
    iconColor: "bg-amber-100 text-amber-600",
    borderColor: "border-t-amber-500",
    accentColor: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-500",
    hoverBgColor: "hover:bg-amber-50"
  },
  "/skills/home-repair": {
    color: "teal",
    bgColor: "from-teal-500 to-teal-600",
    iconColor: "bg-teal-100 text-teal-600",
    borderColor: "border-t-teal-500",
    accentColor: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-teal-500",
    hoverBgColor: "hover:bg-teal-50"
  }
};

// Default theme to fall back to if not on a skill page
export const defaultTheme = {
  color: "pink",
  bgColor: "from-pink-500 to-rose-600",
  iconColor: "bg-pink-100 text-rose-600",
  borderColor: "border-t-pink-500",
  accentColor: "bg-pink-500 hover:bg-rose-600",
  textColor: "text-pink-500",
  hoverBgColor: "hover:bg-pink-50"
};

export type ThemeColors = typeof defaultTheme;

// Hook to get the current theme colors based on the URL path
export const useThemeColors = (): ThemeColors => {
  const location = useLocation();
  const path = location.pathname;
  
  // Check if we're on a skill page and find the matching theme
  for (const route in skillThemes) {
    if (path.startsWith(route)) {
      return skillThemes[route as keyof typeof skillThemes];
    }
  }
  
  // If no match is found, return the default theme
  return defaultTheme;
};
