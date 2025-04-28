
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeRepair = () => {
  const tutorials = [
    {
      title: "Fix a Leaky Faucet",
      description: "Learn how to identify and fix common faucet leaks with simple tools",
      icon: Droplet,
      path: "/tutorials/leaky-faucet",
    },
    {
      title: "Unclog a Drain",
      description: "Simple techniques for unclogging sink and shower drains without harsh chemicals",
      icon: Wrench,
      path: "/skills/home-repair/unclog-drain",
    },
    {
      title: "Patch Drywall Holes",
      description: "Step-by-step guide to repair small and medium-sized holes in drywall",
      icon: Home,
      path: "/skills/home-repair/patch-drywall",
    },
  ];

  return (
    <SkillPageLayout 
      title="Home Repair Skills" 
      description="Learn practical skills to maintain and fix common issues around your home, saving money and time on professional repairs."
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Home Repair Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <Card key={tutorial.title} className="overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-t-teal-500">
                  <CardContent className="p-6">
                    <div className="bg-teal-100 p-3 rounded-full mb-4 text-teal-600 shadow-md w-12 h-12 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <Link to={tutorial.path}>
                      <Button className="w-full bg-teal-500 hover:bg-teal-600">
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
      
      {/* Basic Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Essential Home Repair Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">For Beginners</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Screwdriver set (flathead and Phillips)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Claw hammer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Adjustable wrench</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Pliers (needle-nose and slip-joint)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Tape measure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Advanced Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Power drill with bit set</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Stud finder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Pipe wrench</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full text-teal-600 mr-2">✓</span>
                    <span>Utility knife</span>
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

export default HomeRepair;
