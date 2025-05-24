import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Users,
  Calendar,
  Share2,
  Award,
  ArrowRight,
  Heart,
  TrendingUp,
  Zap,
  Sparkles,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Sample community posts
  const communityPosts = [
    {
      id: "1",
      title: "How did you learn to change your car's oil?",
      author: "CarNewbie",
      replies: 12,
      category: "Car Maintenance",
      time: "2 hours ago",
      isHot: true
    },
    {
      id: "2",
      title: "Share your budget spreadsheet templates!",
      author: "SaverSam",
      replies: 24,
      category: "Budgeting",
      time: "1 day ago",
      isHot: true
    },
    {
      id: "3",
      title: "Kitchen knife recommendations for beginners?",
      author: "NewChef22",
      replies: 18,
      category: "Cooking",
      time: "3 days ago",
      isHot: false
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: "1",
      title: "DIY Home Repairs Workshop",
      date: "May 15, 2025",
      location: "Community Center",
      attendees: 32,
      featured: true
    },
    {
      id: "2",
      title: "Cooking Basics: Knife Skills",
      date: "May 22, 2025",
      location: "Downtown Kitchen",
      attendees: 18,
      featured: false
    },
    {
      id: "3",
      title: "Financial Planning Seminar",
      date: "June 5, 2025",
      location: "Public Library",
      attendees: 45,
      featured: true
    }
  ];

  const communityLeaders = [
    {
      name: "Sarah Johnson",
      role: "Home Repair Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      posts: 120,
      helpful: 340
    },
    {
      name: "Michael Chen",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      posts: 89,
      helpful: 275
    },
    {
      name: "Elena Rodriguez",
      role: "Cooking Instructor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      posts: 156,
      helpful: 420
    },
    {
      name: "James Wilson",
      role: "Auto Mechanic",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      posts: 98,
      helpful: 310
    }
  ];

  const communityStats = [
    { number: "15K+", label: "Community Members", icon: Users },
    { number: "2.5K", label: "Active Discussions", icon: MessageSquare },
    { number: "500+", label: "Monthly Events", icon: Calendar },
    { number: "95%", label: "Questions Answered", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <Navbar />

      {/* Hero Section */}      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-200/20 to-lifecraft-accent-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-lifecraft-accent-200/15 to-mint-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              🤝 Join Our Community
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">              Connect. Learn. Grow Together.            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join a vibrant community of learners, share your experiences, get expert advice, and support others on their journey to self-reliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">              <Button size="lg" className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"              >                <MessageSquare className="mr-2 w-5 h-5" />                Ask a Question              </Button>              <Button size="lg" variant="outline" className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"              >                <TrendingUp className="mr-2 w-5 h-5" />                Browse Discussions              </Button>            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}      <section className="py-20 bg-white/80 backdrop-blur-sm border-t border-b border-lifecraft-100/50">        <div className="container mx-auto px-6">          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}          >            {communityStats.map((stat, index) => (<motion.div key={index} variants={fadeInUp} className="text-center group">                <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-lifecraft-200/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">                  <stat.icon className="w-8 h-8 text-lifecraft-600" />                </div>                <div className="text-3xl md:text-4xl font-bold text-lifecraft-600 mb-2 leading-none">                  {stat.number}                </div>                <div className="text-gray-600 font-medium text-sm leading-tight">{stat.label}</div>              </motion.div>))}          </motion.div>        </div>      </section>

      {/* Community Features */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-lifecraft-50/20 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lifecraft-200/30 to-lifecraft-accent-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-lifecraft-accent-200/30 to-mint-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lifecraft-100/20 to-lifecraft-accent-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              ✨ Community Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">              Ways to Get Involved            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're seeking help or ready to share your expertise, there's a place for you in our community
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer relative overflow-hidden transform hover:-translate-y-2 bg-white shadow-lg">                {/* Animated background pattern */}                <div className="absolute inset-0 opacity-10">                  <div className="absolute top-0 right-0 w-32 h-32 bg-lifecraft-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-lifecraft-accent-500 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700 delay-100"></div>                </div>                <CardContent className="p-8 relative z-10 h-full flex flex-col">                  <div className="flex-grow">                    <div className="w-16 h-16 rounded-2xl bg-lifecraft-100 text-lifecraft-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">                      <MessageSquare className="w-8 h-8" />                    </div>                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">                      Ask Questions                    </h3>                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">                      Stuck on a problem? Get answers from our community of experts and fellow learners who've been there before.                    </p>                  </div>                  <div className="space-y-4">                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-lifecraft-50 border border-lifecraft-100">                      <div className="text-center">                        <div className="text-2xl font-bold text-lifecraft-600">2.5K</div>                        <div className="text-xs text-gray-500 font-medium">Active Threads</div>                      </div>                      <div className="text-center">                        <div className="text-2xl font-bold text-lifecraft-600">24/7</div>                        <div className="text-xs text-gray-500 font-medium">Support</div>                      </div>                    </div>                    <Link to="/community/questions">                      <Button className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white font-semibold py-3">                        Browse Questions                        <ArrowRight className="ml-2 w-4 h-4" />                      </Button>                    </Link>                  </div>                </CardContent>              </Card>            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer relative overflow-hidden transform hover:-translate-y-2 bg-gradient-to-br from-lifecraft-500 to-lifecraft-600 text-white">
                {/* Popular/Featured badge */}
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-br from-lifecraft-accent-400 to-lifecraft-accent-600 text-white px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center gap-2">
                    <span className="animate-pulse">🔥</span>
                    POPULAR
                  </div>
                </div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                </div>

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300">
                      Share Knowledge
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed text-lg">
                      Help others by sharing your expertise and experiences. Everyone has something valuable to teach.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-sm text-white/80">Contributors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Expert</div>
                        <div className="text-sm text-white/80">Level</div>
                      </div>
                    </div>
                    <Link to="/community/contribute">
                      <Button className="w-full bg-white/20 text-white border-white/30 hover:bg-white hover:text-lifecraft-600">
                        Start Contributing
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer relative overflow-hidden transform hover:-translate-y-2 bg-white shadow-lg">                {/* Animated background pattern */}                <div className="absolute inset-0 opacity-10">                  <div className="absolute top-0 right-0 w-32 h-32 bg-lifecraft-accent-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-lifecraft-500 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700 delay-100"></div>                </div>                <CardContent className="p-8 relative z-10 h-full flex flex-col">                  <div className="flex-grow">                    <div className="w-16 h-16 rounded-2xl bg-lifecraft-accent-100 text-lifecraft-accent-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">                      <Calendar className="w-8 h-8" />                    </div>                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">                      Local Events                    </h3>                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">                      Find in-person learning opportunities near you. Connect with local experts and resources.                    </p>                  </div>                  <div className="space-y-4">                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-lifecraft-accent-50 border border-lifecraft-accent-100">                      <div className="text-center">                        <div className="text-2xl font-bold text-lifecraft-accent-600">50+</div>                        <div className="text-xs text-gray-500 font-medium">Monthly Events</div>                      </div>                      <div className="text-center">                        <div className="text-2xl font-bold text-lifecraft-accent-600">Local</div>                        <div className="text-xs text-gray-500 font-medium">Focus</div>                      </div>                    </div>                    <Link to="/community/local">                      <Button className="w-full bg-gradient-to-r from-lifecraft-accent-500 to-lifecraft-accent-600 hover:from-lifecraft-accent-600 hover:to-lifecraft-accent-700 text-white font-semibold py-3">                        Find Local Events                        <ArrowRight className="ml-2 w-4 h-4" />                      </Button>                    </Link>                  </div>                </CardContent>              </Card>            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20 bg-gradient-to-br from-lifecraft-600 via-lifecraft-500 to-lifecraft-accent-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-56 h-56 bg-lifecraft-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
              💬 Recent Discussions
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">              Join the Conversation            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              See what the community is talking about and jump into discussions that interest you
            </p>
          </motion.div>

          <motion.div className="space-y-6 mb-16" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}          >
            {communityPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group cursor-pointer transform hover:-translate-y-1 relative">                  {/* Glowing border effect */}                  <div className="absolute inset-0 bg-gradient-to-r from-lifecraft-400 to-lifecraft-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-sm"></div>                  <div className="relative bg-white rounded-xl overflow-hidden border border-white/20 shadow-lg">                    <CardContent className="p-8">                      <div className="flex justify-between items-start">                        <div className="flex-grow">                          <div className="flex items-center gap-3 mb-4">                            <Badge className="bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 text-lifecraft-700 border-lifecraft-200/50 text-xs px-3 py-1.5 font-semibold">                              {post.category}                            </Badge>                            {post.isHot && (<Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 text-xs px-3 py-1.5 flex items-center gap-1 font-semibold animate-pulse">                                <Zap className="w-3 h-3" />                                Hot                              </Badge>)}                          </div>                          <Link to={`/community/post/${post.id}`}>                            <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">                              {post.title}                            </h3>                          </Link>                          <div className="flex items-center gap-4 text-sm text-gray-500">                            <span className="font-medium text-gray-700">By {post.author}</span>                            <span className="text-gray-300">•</span>                            <div className="flex items-center gap-1">                              <Clock className="w-4 h-4" />                              <span>{post.time}</span>                            </div>                          </div>                        </div>                        <div className="flex items-center gap-2 ml-6">                          <div className="bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-full p-3 flex items-center gap-2 border border-lifecraft-200/50 group-hover:scale-105 transition-transform duration-300">                            <MessageSquare className="h-4 w-4 text-lifecraft-600" />                            <span className="text-sm font-bold text-lifecraft-700">{post.replies}</span>                          </div>                        </div>                      </div>                    </CardContent>                  </div>                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-white text-lifecraft-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              View All Discussions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-lifecraft-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lifecraft-200/30 to-lifecraft-accent-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-lifecraft-accent-200/30 to-mint-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              📅 Upcoming Events
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">              Learn Together in Person            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join hands-on workshops and meetups in your area to accelerate your learning journey
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={event.id} variants={fadeInUp}>
                <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer transform hover:-translate-y-2 relative ${event.featured
                  ? 'bg-gradient-to-br from-lifecraft-500 to-lifecraft-600 text-white'
                  : 'bg-white shadow-lg'
                  }`}>

                  {event.featured && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-br from-lifecraft-accent-400 to-lifecraft-accent-600 text-white px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        FEATURED
                      </div>
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`${event.featured ? 'bg-white/20 backdrop-blur-sm' : 'bg-lifecraft-100'} p-3 rounded-full ${event.featured ? 'text-white' : 'text-lifecraft-600'}`}>
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${event.featured ? 'text-white' : 'text-lifecraft-600'}`}>
                          {event.date}
                        </p>
                        <p className={`text-sm ${event.featured ? 'text-white/80' : 'text-gray-500'}`}>
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <Link to={`/community/event/${event.id}`}>
                      <h3 className={`font-bold text-xl mb-4 ${event.featured ? 'text-white' : 'text-gray-900 group-hover:text-lifecraft-600'} transition-colors duration-300 leading-tight`}>
                        {event.title}
                      </h3>
                    </Link>

                    <div className={`flex items-center gap-2 p-3 rounded-lg ${event.featured ? 'bg-white/10' : 'bg-gray-50'}`}>
                      <Users className={`h-5 w-5 ${event.featured ? 'text-white' : 'text-lifecraft-600'}`} />
                      <span className={`font-semibold ${event.featured ? 'text-white' : 'text-gray-900'}`}>
                        {event.attendees} attending
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-3 text-lg font-semibold"
            >
              <Calendar className="mr-2 w-5 h-5" />
              View All Events
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Community Leaders */}
      <section className="py-20 bg-white/80 backdrop-blur-sm border-t border-b border-lifecraft-100/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              🏆 Community Leaders
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">              Meet Our Amazing Leaders            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated experts who help make LifeCraft a supportive and engaging place to learn and grow
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {communityLeaders.map((leader, index) => (
              <motion.div key={index} variants={fadeInUp}>                <Card className="overflow-hidden text-center hover:shadow-2xl transition-all duration-500 border-0 group bg-white transform hover:-translate-y-2 shadow-lg">                  <CardContent className="p-8">                    <div className="relative mb-6">                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg border-4 border-white">                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />                      </div>                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white p-2.5 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">                        <Award className="h-4 w-4" />                      </div>                    </div>                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-lifecraft-600 transition-colors leading-tight">                      {leader.name}                    </h3>                    <p className="text-sm text-gray-500 mb-6 font-medium">                      {leader.role}                    </p>                    <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-lifecraft-50 to-lifecraft-accent-50 rounded-xl border border-lifecraft-100/50">                      <div className="text-center">                        <div className="text-lg font-bold text-lifecraft-600">{leader.posts}</div>                        <div className="text-xs text-gray-500 font-medium">Posts</div>                      </div>                      <div className="text-center">                        <div className="text-lg font-bold text-lifecraft-600">{leader.helpful}</div>                        <div className="text-xs text-gray-500 font-medium">Helpful</div>                      </div>                    </div>                  </CardContent>                </Card>              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-to-r from-lifecraft-200/15 to-lifecraft-accent-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-accent-200/10 to-mint-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              🚀 Ready to Join?
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">              Become Part of Something Amazing            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of learners who are supporting each other, sharing knowledge, and building lifelong skills together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">              <Button size="lg" className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">                <MessageSquare className="mr-2 w-5 h-5" />                Start Your First Discussion              </Button>              <Button size="lg" variant="outline" className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">                <Users className="mr-2 w-5 h-5" />                Explore the Community              </Button>            </div>

            {/* Trust indicators */}            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">              <motion.div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-lifecraft-100/50 hover:scale-105 transition-transform duration-300" whileHover={{ y: -2 }}              >                <div className="text-2xl font-bold text-lifecraft-600 mb-2 leading-none">15K+</div>                <div className="text-sm text-gray-600 font-medium">Active Members</div>              </motion.div>              <motion.div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-lifecraft-100/50 hover:scale-105 transition-transform duration-300" whileHover={{ y: -2 }}              >                <div className="text-2xl font-bold text-lifecraft-600 mb-2 leading-none">24/7</div>                <div className="text-sm text-gray-600 font-medium">Community Support</div>              </motion.div>              <motion.div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-lifecraft-100/50 hover:scale-105 transition-transform duration-300" whileHover={{ y: -2 }}              >                <div className="text-2xl font-bold text-lifecraft-600 mb-2 leading-none">95%</div>                <div className="text-sm text-gray-600 font-medium">Questions Answered</div>              </motion.div>              <motion.div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-lifecraft-100/50 hover:scale-105 transition-transform duration-300" whileHover={{ y: -2 }}              >                <div className="text-2xl font-bold text-lifecraft-600 mb-2 leading-none">500+</div>                <div className="text-sm text-gray-600 font-medium">Monthly Events</div>              </motion.div>            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
