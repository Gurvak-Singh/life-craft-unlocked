import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, Share2, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  // Sample community posts
  const communityPosts = [
    {
      id: "1",
      title: "How did you learn to change your car's oil?",
      author: "CarNewbie",
      replies: 12,
      category: "Car Maintenance",
      time: "2 hours ago"
    },
    {
      id: "2",
      title: "Share your budget spreadsheet templates!",
      author: "SaverSam",
      replies: 24,
      category: "Budgeting",
      time: "1 day ago"
    },
    {
      id: "3",
      title: "Kitchen knife recommendations for beginners?",
      author: "NewChef22",
      replies: 18,
      category: "Cooking",
      time: "3 days ago"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: "1",
      title: "DIY Home Repairs Workshop",
      date: "May 15, 2025",
      location: "Community Center",
      attendees: 32
    },
    {
      id: "2",
      title: "Cooking Basics: Knife Skills",
      date: "May 22, 2025",
      location: "Downtown Kitchen",
      attendees: 18
    },
    {
      id: "3",
      title: "Financial Planning Seminar",
      date: "June 5, 2025",
      location: "Public Library",
      attendees: 45
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
              <h1 className="text-4xl font-bold text-white mb-4">Join Our Community</h1>
              <p className="text-lifecraft-100 text-lg mb-8">
                Connect with others, share your experiences, and get advice from experts.
                Our community is here to support your learning journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-lifecraft-600 hover:bg-lifecraft-50">
                  Ask a Question
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-lifecraft-600/20">
                  Browse Discussions
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Features */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-white p-8 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Ask Questions</h3>
                </div>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Share Your Knowledge</h3>
                </div>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Local Workshops</h3>
                </div>
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
        
        {/* Recent Discussions */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recent Discussions</h2>
              <Button variant="ghost" className="text-lifecraft-500 hover:text-lifecraft-700">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/community/post/${post.id}`}>
                          <h3 className="font-medium text-lg mb-2 hover:text-lifecraft-500 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.replies}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Button variant="ghost" className="text-lifecraft-500 hover:text-lifecraft-700">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-lifecraft-100 p-3 rounded-full text-lifecraft-600">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-lifecraft-500">{event.date}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                      </div>
                    </div>
                    <Link to={`/community/event/${event.id}`}>
                      <h3 className="font-medium text-lg mb-3 hover:text-lifecraft-500 transition-colors">
                        {event.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Community Leaders */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Leaders</h2>
              <p className="text-gray-600">
                Meet our dedicated community leaders who help make LifeCraft a supportive and engaging place to learn.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="overflow-hidden text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Community Leader"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 mb-3">Home Repair Expert</p>
                  <div className="flex justify-center">
                    <div className="bg-lifecraft-100 p-1 rounded-full text-lifecraft-600">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Community Leader"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">Michael Chen</h3>
                  <p className="text-sm text-gray-500 mb-3">Financial Advisor</p>
                  <div className="flex justify-center">
                    <div className="bg-lifecraft-100 p-1 rounded-full text-lifecraft-600">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Community Leader"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">Elena Rodriguez</h3>
                  <p className="text-sm text-gray-500 mb-3">Cooking Instructor</p>
                  <div className="flex justify-center">
                    <div className="bg-lifecraft-100 p-1 rounded-full text-lifecraft-600">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Community Leader"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">James Wilson</h3>
                  <p className="text-sm text-gray-500 mb-3">Auto Mechanic</p>
                  <div className="flex justify-center">
                    <div className="bg-lifecraft-100 p-1 rounded-full text-lifecraft-600">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
