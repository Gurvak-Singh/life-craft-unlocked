import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Calculator,
  Utensils,
  Award,
  ArrowRight,
  Clock,
  CheckCircle,
  Users,
  Star,
  BookOpen,
  TrendingUp,
  Target,
  Sparkles,
  PlayCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Tracks = () => {
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

  // Enhanced learning tracks with modern design
  const learningTracks = [
    {
      id: "1",
      title: "First-time Homeowner Essentials",
      description: "Master the fundamental skills every homeowner needs, from basic repairs to maintenance schedules. Build confidence and save thousands.",
      icon: Home,
      color: "bg-gradient-to-r from-lifecraft-100 to-lifecraft-50",
      iconColor: "text-lifecraft-600",
      borderColor: "border-lifecraft-200",
      skills: ["Basic Plumbing", "Electrical Safety", "Lawn Care", "HVAC Maintenance"],
      duration: "4 weeks",
      level: "Beginner",
      enrolled: 1245,
      rating: 4.8,
      featured: true
    },
    {
      id: "2",
      title: "Financial Independence Basics",
      description: "Learn how to budget, save, and invest your way to financial freedom with practical, actionable steps and real-world strategies.",
      icon: Calculator,
      color: "bg-gradient-to-r from-lifecraft-accent-100 to-lifecraft-accent-50",
      iconColor: "text-lifecraft-accent-600",
      borderColor: "border-lifecraft-accent-200",
      skills: ["Monthly Budgeting", "Debt Management", "Emergency Fund", "Retirement Planning"],
      duration: "6 weeks",
      level: "Beginner",
      enrolled: 2130,
      rating: 4.9,
      featured: false
    },
    {
      id: "3",
      title: "Learn to Cook from Scratch",
      description: "Build your cooking skills from the ground up with fundamental techniques, meal planning, and confidence in the kitchen.",
      icon: Utensils,
      color: "bg-gradient-to-r from-orange-100 to-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      skills: ["Knife Skills", "Basic Techniques", "Meal Planning", "Kitchen Organization"],
      duration: "8 weeks",
      level: "Beginner",
      enrolled: 1876,
      rating: 4.7,
      featured: true
    }
  ];

  // Enhanced featured track milestones
  const featuredTrackMilestones = [
    {
      title: "Understanding Home Systems",
      description: "Learn how your home's plumbing, electrical, and HVAC systems work together",
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

  const trackBenefits = [
    {
      icon: Target,
      title: "Structured Learning",
      description: "Follow a carefully designed curriculum that builds skills in the right order, ensuring solid foundations.",
      color: "bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 text-lifecraft-600"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "See your advancement with clear milestones, achievements, and celebrate your learning journey.",
      color: "bg-gradient-to-r from-lifecraft-accent-100 to-lifecraft-accent-50 text-lifecraft-accent-600"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Learn alongside others following the same track, share experiences, and get encouragement.",
      color: "bg-gradient-to-r from-mint-100 to-mint-50 text-mint-600"
    }
  ];

  const stats = [
    { number: "12+", label: "Learning Tracks", icon: BookOpen },
    { number: "5.2K", label: "Track Completions", icon: Award },
    { number: "94%", label: "Completion Rate", icon: TrendingUp },
    { number: "4.8", label: "Average Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30">
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
              🎯 Structured Learning
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
              Learning Tracks
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Follow guided paths to master complex skills. Our structured learning tracks take you from beginner to expert with clear milestones along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="mr-2 w-5 h-5" />
                Find Your Track
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm border-t border-b border-lifecraft-100/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-lifecraft-200/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-lifecraft-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-lifecraft-600 mb-2 leading-none">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Track */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-lifecraft-50/20 to-white relative overflow-hidden">
        {/* Background decorative elements */}
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
              ⭐ Featured Track
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
              Start Your Journey Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our most popular track designed for beginners who want to build confidence and save money
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 p-4 rounded-2xl text-lifecraft-600 shadow-lg">
                      <Home className="h-8 w-8" />
                    </div>
                    <div>
                      <Badge className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 mb-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured Track
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        First-time Homeowner Essentials
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Master the fundamental skills every homeowner needs, from basic repairs to maintenance schedules.
                    This track will help you save money, prevent costly damage, and gain confidence in caring for your home.
                  </p>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-lifecraft-50 to-lifecraft-accent-50 rounded-xl border border-lifecraft-100/50 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-lifecraft-600 mb-1">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="text-lg font-bold text-lifecraft-600">4 weeks</div>
                      <div className="text-xs text-gray-500 font-medium">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-lifecraft-600 mb-1">
                        <Award className="h-4 w-4" />
                      </div>
                      <div className="text-lg font-bold text-lifecraft-600">Beginner</div>
                      <div className="text-xs text-gray-500 font-medium">Level</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-lifecraft-600 mb-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="text-lg font-bold text-lifecraft-600">1,245</div>
                      <div className="text-xs text-gray-500 font-medium">Enrolled</div>
                    </div>
                  </div>

                  <h4 className="font-bold text-lg mb-4 text-gray-900">Track Milestones</h4>

                  <div className="space-y-4 mb-8">
                    {featuredTrackMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className={`mt-0.5 ${milestone.completed ? 'text-lifecraft-500' : 'text-gray-300'}`}>
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-semibold text-gray-900 mb-1">{milestone.title}</h5>
                          <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/tracks/homeowner-essentials">
                    <Button className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      <PlayCircle className="mr-2 w-5 h-5" />
                      Start This Track
                    </Button>
                  </Link>
                </div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="First-time Homeowner Essentials"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* All Tracks */}
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
              🚀 All Learning Tracks
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover structured learning paths designed to take you from beginner to confident practitioner
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {learningTracks.map((track, index) => (
              <motion.div key={track.id} variants={fadeInUp}>
                <Card className={`overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer transform hover:-translate-y-2 relative ${track.featured
                  ? 'bg-white shadow-xl'
                  : 'bg-white/95 backdrop-blur-sm shadow-lg'
                  }`}>

                  {track.featured && (
                    <div className="absolute top-0 right-0 z-10">
                      <div className="bg-gradient-to-br from-lifecraft-accent-400 to-lifecraft-accent-600 text-white px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${track.color} p-4 rounded-2xl ${track.iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <track.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">
                          {track.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {track.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
                          <Clock className="h-3 w-3" />
                        </div>
                        <div className="text-sm font-bold text-gray-900">{track.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
                          <Award className="h-3 w-3" />
                        </div>
                        <div className="text-sm font-bold text-gray-900">{track.level}</div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
                          <Star className="h-3 w-3" />
                        </div>
                        <div className="text-sm font-bold text-gray-900">{track.rating}</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold mb-3 text-gray-900">Skills You'll Learn:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {track.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="bg-white text-xs py-1 justify-start">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to={`/tracks/${track.id}`}>
                      <Button className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        View Track
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
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
              className="bg-white text-lifecraft-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Browse All Tracks
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Track Benefits */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-to-r from-lifecraft-200/15 to-lifecraft-accent-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-accent-200/10 to-mint-200/10 rounded-full blur-3xl"></div>
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
              💡 Why Choose Tracks?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
              Why Follow a Learning Track?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our structured learning tracks provide a guided path to mastery, helping you build skills systematically and efficiently.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {trackBenefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 group bg-white transform hover:-translate-y-2 shadow-lg h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`${benefit.color} p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracks;
