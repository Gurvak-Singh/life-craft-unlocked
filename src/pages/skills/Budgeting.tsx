
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, CreditCard, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Budgeting = () => {
  const tutorials = [
    {
      title: "Monthly Budget",
      description: "Create and manage a personal monthly budget that works",
      icon: Calculator,
      path: "/tutorials/monthly-budget",
    },
    {
      title: "Debt Reduction Strategies",
      description: "Effective strategies to pay down debt faster",
      icon: CreditCard,
      path: "/skills/budgeting/debt-reduction",
    },
    {
      title: "Saving for Goals",
      description: "How to set and reach financial savings goals",
      icon: PiggyBank,
      path: "/skills/budgeting/saving-goals",
    },
  ];

  // Theme colors for Budgeting
  const themeColors = {
    bgColor: "from-green-500 to-green-600",
    iconColor: "bg-green-100 text-green-600",
    borderColor: "border-t-green-500",
    accentColor: "bg-green-500 hover:bg-green-600"
  };

  return (
    <SkillPageLayout 
      title="Budgeting Skills" 
      description="Master your personal finances with practical budgeting skills that will help you save money, reduce debt, and achieve your financial goals."
      {...themeColors}
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Budgeting Tutorials</h2>
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
      
      {/* Budgeting Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Practical Budgeting Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Getting Started</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Track all spending for 30 days to understand your habits</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Categorize expenses as needs, wants, and savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Aim for the 50/30/20 rule: 50% needs, 30% wants, 20% savings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Next Steps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Build an emergency fund of 3-6 months of expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Automate bill payments and savings transfers</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${themeColors.iconColor} p-1 rounded-full mr-2`}>✓</span>
                    <span>Review and adjust your budget quarterly</span>
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

export default Budgeting;
