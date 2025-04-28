
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cooking = () => {
  const tutorials = [
    {
      title: "Basic Cooking Techniques",
      description: "Master essential cooking methods used in a variety of recipes",
      icon: Utensils,
      path: "/tutorials/cooking-techniques",
    },
    {
      title: "Meal Planning",
      description: "How to plan a week of meals to save time and money",
      icon: BookOpen,
      path: "/skills/cooking/meal-planning",
    },
    {
      title: "Quick Healthy Meals",
      description: "Learn to prepare nutritious meals in 30 minutes or less",
      icon: Clock,
      path: "/skills/cooking/quick-meals",
    },
  ];

  // Theme colors for Cooking
  const themeColors = {
    bgColor: "from-amber-500 to-amber-600",
    iconColor: "bg-amber-100 text-amber-600",
    borderColor: "border-t-amber-500",
    accentColor: "bg-amber-500 hover:bg-amber-600"
  };

  return (
    <SkillPageLayout 
      title="Cooking Skills" 
      description="Develop practical cooking skills that will help you create delicious, nutritious meals while saving money and enjoying the process of cooking at home."
      {...themeColors}
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Cooking Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <Card key={tutorial.title} className={`overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 ${themeColors.borderColor}`}>
                  <CardContent className="p-6">
                    <div className={`${themeColors.iconColor} p-3 rounded-full mb-4 shadow-md w-12 h-12 flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <Link to={tutorial.path}>
                      <Button className={`w-full ${themeColors.accentColor}`}>
                        Start Learning
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Kitchen Essentials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Kitchen Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Basic Cookware</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Chef's knife and cutting board</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Medium and large saucepans</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Nonstick skillet or frying pan</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Baking sheet and casserole dish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Basic Ingredients</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Cooking oils (olive, vegetable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Salt, pepper, and basic spices</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Flour, sugar, and rice</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Stock/broth and canned tomatoes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SkillPageLayout>
  );
};

export default Cooking;
