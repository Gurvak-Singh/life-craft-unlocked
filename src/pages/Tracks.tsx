import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calculator, Utensils, Award, ArrowRight, Clock, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Tracks = () => {
  // Sample learning tracks
  const learningTracks = [
    {
      id: "1",
      title: "First-time Homeowner Essentials",
      description: "Master the fundamental skills every homeowner needs, from basic repairs to maintenance schedules.",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
      skills: ["Basic Plumbing", "Electrical Safety", "Lawn Care", "HVAC Maintenance"],
      duration: "4 weeks",
      level: "Beginner",
      enrolled: 1245
    },
    {
      id: "2",
      title: "Financial Independence Basics",
      description: "Learn how to budget, save, and invest your way to financial freedom with practical steps.",
      icon: Calculator,
      color: "bg-green-100 text-green-600",
      skills: ["Monthly Budgeting", "Debt Management", "Emergency Fund", "Retirement Planning"],
      duration: "6 weeks",
      level: "Beginner",
      enrolled: 2130
    },
    {
      id: "3",
      title: "Learn to Cook from Scratch",
      description: "Build your cooking skills from the ground up with fundamental techniques and recipes.",
      icon: Utensils,
      color: "bg-yellow-100 text-yellow-600",
      skills: ["Knife Skills", "Basic Techniques", "Meal Planning", "Kitchen Organization"],
      duration: "8 weeks",
      level: "Beginner",
      enrolled: 1876
    }
  ];

  // Sample featured track with milestones
  const featuredTrackMilestones = [
    {
      title: "Understanding Home Systems",
      description: "Learn how your home's plumbing, electrical, and HVAC systems work",
      completed: true
    },
    {
      title: "Essential Tools & Safety",
      description: "Discover the must-have tools and safety procedures for home repairs",
      completed: true
    },
    {
      title: "Basic Plumbing Repairs",
      description: "Master fixing leaky faucets, running toilets, and clogged drains",
      completed: false
    },
    {
      title: "Simple Electrical Work",
      description: "Learn to replace outlets, switches, and light fixtures safely",
      completed: false
    },
    {
      title: "Seasonal Maintenance",
      description: "Create and follow a home maintenance schedule for all seasons",
      completed: false
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
              <h1 className="text-4xl font-bold text-white mb-4">Learning Tracks</h1>
              <p className="text-lifecraft-100 text-lg mb-8">
                Follow guided paths to master complex skills. Our structured learning tracks 
                take you from beginner to expert with clear milestones along the way.
              </p>
              <Button className="bg-white text-lifecraft-600 hover:bg-lifecraft-50">
                Find Your Track
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Track */}
        <section className="py-16">
          <div className="container">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Home className="h-6 w-6" />
                    </div>
                    <div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 mb-1">Featured Track</Badge>
                      <h2 className="text-2xl font-bold">First-time Homeowner Essentials</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Master the fundamental skills every homeowner needs, from basic repairs to maintenance schedules.
                    This track will help you save money, prevent costly damage, and gain confidence in caring for your home.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      4 weeks
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      Beginner
                    </span>
                    <span>1,245 enrolled</span>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Track Milestones</h3>
                  <div className="space-y-4 mb-8">
                    {featuredTrackMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`mt-1 ${milestone.completed ? 'text-green-500' : 'text-gray-300'}`}>
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{milestone.title}</h4>
                          <p className="text-sm text-gray-500">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/tracks/homeowner-essentials">
                    <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
                      Start This Track
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block relative">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="First-time Homeowner Essentials"
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Tracks */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">All Learning Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningTracks.map((track) => (
                <Card key={track.id} className="overflow-hidden card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-full ${track.color}`}>
                        <track.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium text-lg">{track.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{track.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {track.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {track.level}
                      </span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link to={`/tracks/${track.id}`}>
                      <Button className="w-full bg-lifecraft-500 hover:bg-lifecraft-600">
                        View Track
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Track Benefits */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Follow a Learning Track?</h2>
              <p className="text-gray-600">
                Our structured learning tracks provide a guided path to mastery, helping you build skills systematically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-lifecraft-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-lifecraft-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Structured Learning</h3>
                <p className="text-gray-600">
                  Follow a carefully designed curriculum that builds skills in the right order.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-lifecraft-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-lifecraft-600">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
                <p className="text-gray-600">
                  See your advancement with clear milestones and celebrate your achievements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-lifecraft-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-lifecraft-600">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                <p className="text-gray-600">
                  Learn alongside others following the same track and share your experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tracks;
