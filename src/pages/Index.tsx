
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TutorialCard from "@/components/TutorialCard";
import SkillCategory from "@/components/SkillCategory";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Car, Calculator, Monitor, Utensils, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample data for featured tutorials
  const featuredTutorials = [
    {
      id: "1",
      title: "How to Fix a Leaky Faucet",
      description: "Learn how to identify and fix common faucet leaks without calling a plumber. Save money and gain confidence in basic home repairs.",
      image: "https://images.unsplash.com/photo-1638865597191-f978146089d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVha3klMjBmYXVjZXR8ZW58MHx8MHx8fDA%3D",
      duration: "15 min",
      author: "Mike R.",
      difficulty: "Beginner" as const,
      category: "Home Repair"
    },
    {
      id: "2",
      title: "Create Your First Monthly Budget",
      description: "Take control of your finances with this simple step-by-step guide to creating a monthly budget that works for your lifestyle.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVkZ2V0fGVufDB8fDB8fHww",
      duration: "20 min",
      author: "Sarah L.",
      difficulty: "Beginner" as const,
      category: "Budgeting"
    },
    {
      id: "3",
      title: "Change Your Car's Oil",
      description: "Learn how to change your car's oil yourself with these easy-to-follow steps, saving you time and money on regular maintenance.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwb2lsJTIwY2hhbmdlfGVufDB8fDB8fHww",
      duration: "30 min",
      author: "Carlos G.",
      difficulty: "Intermediate" as const,
      category: "Car Maintenance"
    },
    {
      id: "4",
      title: "Master Basic Cooking Techniques",
      description: "Learn essential cooking methods that will serve as the foundation for countless delicious meals. Includes knife skills and food safety.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      duration: "45 min",
      author: "Emma T.",
      difficulty: "Beginner" as const,
      category: "Cooking"
    }
  ];
  
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
        <Hero />
        
        {/* Featured Tutorials */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Tutorials</h2>
              <Button variant="ghost" className="text-lifecraft-500 hover:text-lifecraft-700">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} {...tutorial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Skill Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Skills</h2>
              <p className="text-gray-600">
                Browse through our categories to find the practical skills you want to learn.
                From home repair to cooking, we've got you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <SkillCategory key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Learning Paths */}
        <section className="py-16">
          <div className="container">
            <div className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Learning Tracks
                  </h2>
                  <p className="text-lifecraft-100 mb-6">
                    Follow guided paths to master complex skills. Our structured learning tracks 
                    take you from beginner to expert with clear milestones along the way.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-lifecraft-accent-400" />
                      <span className="text-white">First-time homeowner essentials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-lifecraft-accent-400" />
                      <span className="text-white">Financial independence basics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-lifecraft-accent-400" />
                      <span className="text-white">Learn to cook from scratch</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-white text-lifecraft-600 hover:bg-lifecraft-50">
                      Explore Learning Tracks
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block relative min-h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D" 
                    alt="Learning Tracks"
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-gray-600">
                Connect with others, share your experiences, and get advice from experts.
                Our community is here to support your learning journey.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Ask Questions</h3>
                <p className="text-gray-600 mb-6">
                  Stuck on a problem? Get answers from our community of experts and fellow learners.
                </p>
                <Link to="/community/questions">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Browse Questions
                  </Button>
                </Link>
              </div>
              <div className="flex-1 bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Share Your Knowledge</h3>
                <p className="text-gray-600 mb-6">
                  Help others by sharing your expertise and experiences. Everyone has something valuable to teach.
                </p>
                <Link to="/community/contribute">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Start Contributing
                  </Button>
                </Link>
              </div>
              <div className="flex-1 bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Local Workshops</h3>
                <p className="text-gray-600 mb-6">
                  Find in-person learning opportunities near you. Connect with local experts and resources.
                </p>
                <Link to="/community/local">
                  <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                    Find Local Events
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

export default Index;
