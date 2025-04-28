
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Filter, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CarMaintenance = () => {
  const tutorials = [
    {
      title: "Oil Change",
      description: "Learn how to properly change your car's oil and filter",
      icon: Car,
      path: "/tutorials/car-oil-change",
    },
    {
      title: "Check and Replace Air Filter",
      description: "How to inspect and replace a dirty engine air filter",
      icon: Filter,
      path: "/skills/car-maintenance/air-filter",
    },
    {
      title: "Tire Maintenance",
      description: "Proper tire pressure, rotation, and when to replace tires",
      icon: Wrench,
      path: "/skills/car-maintenance/tire-maintenance",
    },
  ];

  // Theme colors for Car Maintenance
  const themeColors = {
    bgColor: "from-blue-500 to-blue-600",
    iconColor: "bg-blue-100 text-blue-600",
    borderColor: "border-t-blue-500",
    accentColor: "bg-blue-500 hover:bg-blue-600"
  };

  return (
    <SkillPageLayout 
      title="Car Maintenance Skills" 
      description="Learn basic to advanced car maintenance skills that will extend your vehicle's life, improve performance, and save you money on mechanic visits."
      {...themeColors}
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Car Maintenance Tutorials</h2>
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
      
      {/* Maintenance Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Basic Maintenance Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Every 3-5,000 Miles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Change engine oil and filter</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Check tire pressure and tread</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Inspect all fluid levels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Every 15-30,000 Miles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Replace air filter</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Rotate tires</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Inspect brake pads and rotors</span>
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

export default CarMaintenance;
