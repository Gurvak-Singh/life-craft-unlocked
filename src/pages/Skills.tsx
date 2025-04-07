import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillCategory from "@/components/SkillCategory";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Car, Calculator, Monitor, Utensils, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  // Skill categories
  const skillCategories = [
    {
      title: "Home Repair",
      description: "Learn to fix and maintain your living space",
      icon: Home,
      path: "/skills/home-repair",
      color: "bg-blue-100"
    },
    {
      title: "Car Maintenance",
      description: "Keep your vehicle running smoothly",
      icon: Car,
      path: "/skills/car-maintenance",
      color: "bg-red-100"
    },
    {
      title: "Budgeting",
      description: "Master your personal finances",
      icon: Calculator,
      path: "/skills/budgeting",
      color: "bg-green-100"
    },
    {
      title: "Digital Literacy",
      description: "Navigate the digital world with confidence",
      icon: Monitor,
      path: "/skills/digital",
      color: "bg-purple-100"
    },
    {
      title: "Cooking",
      description: "Cook delicious and healthy meals",
      icon: Utensils,
      path: "/skills/cooking",
      color: "bg-yellow-100"
    },
    {
      title: "DIY Projects",
      description: "Create and build with your own hands",
      icon: Wrench,
      path: "/skills/diy",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Explore Skills</h1>
              <p className="text-lifecraft-100 text-lg mb-8">
                Browse through our categories to find the practical skills you want to learn.
                From home repair to cooking, we've got you covered.
              </p>
            </div>
          </div>
        </section>
        
        {/* Skill Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <SkillCategory key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Skills */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Popular Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Basic Plumbing</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to fix common plumbing issues, understand your home's water system, and save money on repairs.
                </p>
                <Link to="/skills/home-repair/basic-plumbing">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Monthly Budgeting</h3>
                <p className="text-gray-600 mb-4">
                  Create a budget that works for your lifestyle and learn how to stick to it for financial success.
                </p>
                <Link to="/skills/budgeting/monthly-budget">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Car Maintenance Basics</h3>
                <p className="text-gray-600 mb-4">
                  Learn essential car maintenance skills that will extend your vehicle's life and save you money.
                </p>
                <Link to="/skills/car-maintenance/basics">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cooking Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Master the basic techniques that form the foundation of all good cooking.
                </p>
                <Link to="/skills/cooking/fundamentals">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
