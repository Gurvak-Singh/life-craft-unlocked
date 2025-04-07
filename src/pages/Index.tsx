
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TutorialCard from "@/components/TutorialCard";
import SkillCategory from "@/components/SkillCategory";
import { Home, Wrench, Car, Calculator, Monitor, Utensils, Award, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, OutlineButton, SectionTitle, Card } from "@/components/ui/shared";

const Index = () => {
  // Sample data for featured tutorials
  const featuredTutorials = [
    {
      id: "1",
      title: "How to Fix a Leaky Faucet",
      description: "Learn how to identify and fix common faucet leaks without calling a plumber. Save money and gain confidence in basic home repairs.",
      image: "/images/leaky-faucet-repair.jpg",
      duration: "15 min",
      author: "Mike R.",
      difficulty: "Beginner" as const,
      category: "Home Repair"
    },
    {
      id: "2",
      title: "Create Your First Monthly Budget",
      description: "Take control of your finances with this simple step-by-step guide to creating a monthly budget that works for your lifestyle.",
      image: "/images/placeholder.svg",
      duration: "20 min",
      author: "Sarah L.",
      difficulty: "Beginner" as const,
      category: "Budgeting"
    },
    {
      id: "3",
      title: "Change Your Car's Oil",
      description: "Learn how to change your car's oil yourself with these easy-to-follow steps, saving you time and money on regular maintenance.",
      image: "/images/placeholder.svg", 
      duration: "30 min",
      author: "Carlos G.",
      difficulty: "Intermediate" as const,
      category: "Car Maintenance"
    },
    {
      id: "4",
      title: "Master Basic Cooking Techniques",
      description: "Learn essential cooking methods that will serve as the foundation for countless delicious meals. Includes knife skills and food safety.",
      image: "/images/placeholder.svg",
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

  // Service features
  const serviceFeatures = [
    {
      title: "Learn Essential Skills",
      description: "Access clear, step-by-step tutorials that teach practical skills everyone should know",
      icon: "📚",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Save Time & Money",
      description: "Learn to handle common tasks yourself instead of paying professionals for simple fixes",
      icon: "💰",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Build Confidence",
      description: "Gain the confidence to tackle challenges and become more self-reliant in daily life",
      icon: "🚀",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Join a Community",
      description: "Connect with others who are learning similar skills and share your experiences",
      icon: "👥",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Jessica M.",
      role: "First-time Homeowner",
      content: "LifeCraft's home repair tutorials saved me thousands of dollars in my first year as a homeowner. I fixed my leaky faucet and installed a ceiling fan all by myself!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus T.",
      role: "College Student",
      content: "The budgeting tutorials helped me manage my finances during college. I'm now debt-free and have even started a small emergency fund thanks to the practical advice.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 5
    },
    {
      id: 3,
      name: "Aisha K.",
      role: "Working Professional",
      content: "I never thought I could change my car's oil myself, but the step-by-step tutorial made it so easy! I'm learning new skills and saving money at the same time.",
      avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Skill Development and Learning for Everyone"
              subtitle="LifeCraft helps you learn practical skills through easy-to-follow tutorials, community support, and structured learning paths."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="feature-card card-hover">
                  <div className={`feature-icon ${feature.color}`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Tutorials */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Tutorials</h2>
              <OutlineButton href="/tutorials">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </OutlineButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} {...tutorial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <SectionTitle 
              title="What Our Users Say"
              subtitle="Thousands of people are learning practical skills and improving their lives with LifeCraft. Here's what some of them have to say."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <OutlineButton>
                View All Testimonials
              </OutlineButton>
            </div>
          </div>
        </section>
        
        {/* Skill Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <SectionTitle 
              title="Explore Skills"
              subtitle="Browse through our categories to find the practical skills you want to learn. From home repair to cooking, we've got you covered."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <SkillCategory key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-red-500 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Start Your Learning Journey Today
                  </h2>
                  <p className="text-white/90 mb-6">
                    Follow guided paths to master complex skills. Our structured learning tracks 
                    take you from beginner to expert with clear milestones along the way.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-white" />
                      <span className="text-white">First-time homeowner essentials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-white" />
                      <span className="text-white">Financial independence basics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-white" />
                      <span className="text-white">Learn to cook from scratch</span>
                    </div>
                  </div>
                  <div>
                    <PrimaryButton className="bg-white text-red-500 hover:bg-gray-100">
                      Explore Learning Tracks
                    </PrimaryButton>
                  </div>
                </div>
                <div className="hidden md:block relative min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww" 
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
            <SectionTitle 
              title="Join Our Community"
              subtitle="Connect with others, share your experiences, and get advice from experts. Our community is here to support your learning journey."
            />
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Ask Questions</h3>
                <p className="text-gray-600 mb-6">
                  Stuck on a problem? Get answers from our community of experts and fellow learners.
                </p>
                <PrimaryButton href="/community/questions">
                  Browse Questions
                </PrimaryButton>
              </Card>
              <Card className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Share Your Knowledge</h3>
                <p className="text-gray-600 mb-6">
                  Help others by sharing your expertise and experiences. Everyone has something valuable to teach.
                </p>
                <PrimaryButton href="/community/contribute">
                  Start Contributing
                </PrimaryButton>
              </Card>
              <Card className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Local Workshops</h3>
                <p className="text-gray-600 mb-6">
                  Find in-person learning opportunities near you. Connect with local experts and resources.
                </p>
                <PrimaryButton href="/community/local">
                  Find Local Events
                </PrimaryButton>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <SectionTitle 
              title="Frequently Asked Questions"
              subtitle="Have questions about LifeCraft? Find answers to common questions below."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <h3 className="text-xl font-semibold mb-3 text-red-500">Is LifeCraft free to use?</h3>
                <p className="text-gray-700">
                  Yes! Most of our tutorials and resources are completely free. We also offer premium content and personalized coaching for those who want to take their learning to the next level.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-xl font-semibold mb-3 text-red-500">How do I track my progress?</h3>
                <p className="text-gray-700">
                  Create a free account to track completed tutorials, save favorites, and follow your learning path. Your dashboard will show your progress and suggest next steps.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-xl font-semibold mb-3 text-red-500">Can I contribute my own tutorials?</h3>
                <p className="text-gray-700">
                  Absolutely! We welcome community contributions. Visit our "Contribute" page to learn how you can share your knowledge and help others learn practical skills.
                </p>
              </Card>
              
              <Card>
                <h3 className="text-xl font-semibold mb-3 text-red-500">Are the tutorials suitable for beginners?</h3>
                <p className="text-gray-700">
                  Yes, our tutorials are designed for all skill levels. We clearly mark the difficulty level of each tutorial and provide extra guidance for beginners.
                </p>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <OutlineButton href="/faq">
                View All FAQs
              </OutlineButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
