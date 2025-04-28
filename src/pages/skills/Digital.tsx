
import SkillPageLayout from "@/components/SkillPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Digital = () => {
  const tutorials = [
    {
      title: "Online Privacy Basics",
      description: "Learn how to protect your personal information online",
      icon: Lock,
      path: "/skills/digital/online-privacy",
    },
    {
      title: "Effective Online Research",
      description: "How to find reliable information on the internet",
      icon: Search,
      path: "/skills/digital/online-research",
    },
    {
      title: "Using Cloud Storage",
      description: "Securely store and access your files from anywhere",
      icon: Monitor,
      path: "/skills/digital/cloud-storage",
    },
  ];

  return (
    <SkillPageLayout 
      title="Digital Literacy Skills" 
      description="Navigate the digital world with confidence. Learn essential skills for using technology effectively, safely, and productively in your daily life."
      bgColor="from-purple-500 to-purple-600"
    >
      {/* Popular Tutorials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Digital Literacy Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <Card key={tutorial.title} className="overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 border-t-purple-500">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 p-3 rounded-full mb-4 text-purple-600 shadow-md w-12 h-12 flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <Link to={tutorial.path}>
                      <Button className="w-full bg-purple-500 hover:bg-purple-600">
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
      
      {/* Digital Safety Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Essential Digital Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Password Security</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Use strong, unique passwords for each account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Enable two-factor authentication when available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Consider using a password manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Online Behavior</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Be careful what you share on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Verify sources before sharing information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full text-purple-600 mr-2">✓</span>
                    <span>Be wary of emails requesting personal information</span>
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

export default Digital;
