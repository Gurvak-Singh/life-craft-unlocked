
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Home, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DIY = () => {
  const tutorials = [
    {
      title: "Build a Simple Bookshelf",
      description: "Step-by-step guide to build a functional bookshelf with basic tools",
      icon: Home,
      path: "/skills/diy/simple-bookshelf",
    },
    {
      title: "Furniture Restoration",
      description: "Learn how to restore and refinish wooden furniture",
      icon: Hammer,
      path: "/skills/diy/furniture-restoration",
    },
    {
      title: "Basic Woodworking Skills",
      description: "Essential woodworking techniques for beginners",
      icon: Wrench,
      path: "/skills/diy/basic-woodworking",
    },
  ];

  return (
    <SkillPageLayout 
      title="DIY Project Skills" 
      description="Learn how to create, build, and make things with your own hands. Develop DIY skills that will help you complete projects around your home and express your creativity."
      bgColor="from-rose-500 to-rose-600"
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular DIY Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <Card key={tutorial.title} className="overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-t-rose-500">
                  <CardContent className="p-6">
                    <div className="bg-rose-100 p-3 rounded-full mb-4 text-rose-600 shadow-md w-12 h-12 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <Link to={tutorial.path}>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">
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
      
      {/* DIY Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">DIY Project Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Getting Started</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Start with simple projects to build confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Invest in quality basic tools that will last</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Always measure twice, cut once</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Safety First</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Always wear appropriate safety gear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Read tool manuals before first use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full text-rose-600 mr-2">✓</span>
                    <span>Keep your workspace clean and organized</span>
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

export default DIY;
