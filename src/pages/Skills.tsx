import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  Wrench,
  Car,
  Calculator,
  Monitor,
  Utensils,
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Search,
  Filter,
  TrendingUp,
  Clock,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
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

  // Enhanced skill categories with consistent LifeCraft theming
  const skillCategories = [
    {
      title: "Home Repair",
      description: "Fix, maintain, and improve your living space with confidence",
      icon: Home,
      path: "/skills/home-repair",
      color: "bg-lifecraft-100 text-lifecraft-700",
      tutorials: 24,
      difficulty: "Beginner to Advanced",
      popular: true
    },
    {
      title: "Car Maintenance",
      description: "Keep your vehicle running smoothly and save on repair costs",
      icon: Car,
      path: "/skills/car-maintenance",
      color: "bg-lifecraft-accent-100 text-lifecraft-accent-700",
      tutorials: 18,
      difficulty: "Beginner to Intermediate",
      popular: true
    },
    {
      title: "Personal Finance",
      description: "Master budgeting, investing, and financial planning",
      icon: Calculator,
      path: "/skills/budgeting",
      color: "bg-mint-100 text-mint-700",
      tutorials: 32,
      difficulty: "Beginner to Expert",
      popular: true
    },
    {
      title: "Digital Skills",
      description: "Navigate technology and digital tools with confidence",
      icon: Monitor,
      path: "/skills/digital",
      color: "bg-blue-100 text-blue-700",
      tutorials: 28,
      difficulty: "Beginner to Advanced",
      popular: false
    },
    {
      title: "Cooking Basics",
      description: "Prepare delicious, healthy meals and master kitchen skills",
      icon: Utensils,
      path: "/skills/cooking",
      color: "bg-orange-100 text-orange-700",
      tutorials: 22,
      difficulty: "Beginner to Intermediate",
      popular: true
    },
    {
      title: "DIY Projects",
      description: "Build, create, and craft with your own hands",
      icon: Wrench,
      path: "/skills/diy",
      color: "bg-purple-100 text-purple-700",
      tutorials: 16,
      difficulty: "Beginner to Advanced",
      popular: false
    }
  ];

  const featuredSkills = [
    {
      title: "Basic Plumbing Repairs",
      description: "Learn to fix leaks, unclog drains, and handle common plumbing issues without calling a professional.",
      category: "Home Repair",
      duration: "2-3 hours",
      rating: 4.8,
      students: 12500,
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Monthly Budget Mastery",
      description: "Create a sustainable budget, track expenses, and build healthy financial habits that last.",
      category: "Personal Finance",
      duration: "1-2 hours",
      rating: 4.9,
      students: 18200,
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Car Oil Change & Maintenance",
      description: "Master essential car maintenance tasks to keep your vehicle running smoothly and save money.",
      category: "Car Maintenance",
      duration: "1-2 hours",
      rating: 4.7,
      students: 9800,
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Knife Skills & Cooking Basics",
      description: "Learn proper knife techniques, basic cooking methods, and kitchen safety fundamentals.",
      category: "Cooking",
      duration: "2-3 hours",
      rating: 4.6,
      students: 15600,
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { number: "200+", label: "Skills Available", icon: BookOpen },
    { number: "50K+", label: "Students Learning", icon: Users },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "4.8", label: "Average Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <Navbar />

      {/* Hero Section */}      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30">        <div className="absolute inset-0">          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-200/20 to-lifecraft-accent-200/20 rounded-full blur-3xl"></div>          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-lifecraft-accent-200/15 to-mint-200/15 rounded-full blur-3xl"></div>        </div>        <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-lifecraft-100 text-lifecraft-700 border-lifecraft-200">
            🎯 Master Life-Changing Skills
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-tight">
            Explore Skills That Matter
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover practical skills that make a real difference in your daily life.
            From home repairs to personal finance, start building expertise that lasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lifecraft-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="border-lifecraft-300 text-lifecraft-700">
              <Filter className="mr-2 w-4 h-4" />
              Filter
            </Button>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Stats Section */}      <section className="py-16 bg-white/80 backdrop-blur-sm border-t border-b border-lifecraft-100/50">        <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="w-12 h-12 bg-lifecraft-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-lifecraft-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-lifecraft-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>

      {/* Skill Categories */}      <section className="py-20 bg-gradient-to-br from-cream-50 via-lifecraft-50/20 to-white relative overflow-hidden">        {/* Background decorative elements */}        <div className="absolute inset-0">          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lifecraft-200/30 to-lifecraft-accent-200/30 rounded-full blur-3xl"></div>          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-lifecraft-accent-200/30 to-mint-200/30 rounded-full blur-3xl"></div>          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lifecraft-100/20 to-lifecraft-accent-100/20 rounded-full blur-3xl"></div>        </div>                <div className="container mx-auto px-6 relative z-10">          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}          >            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">              🚀 Skill Categories            </Badge>            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent">              Master Skills That Transform Lives            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">              Dive into our expertly crafted categories designed to make you self-reliant and confident in every aspect of life            </p>          </motion.div>          {/* Enhanced Grid Layout */}          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}          >            {skillCategories.map((category, index) => (<motion.div key={index} variants={fadeInUp}              >                <Link to={category.path}>                  <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer relative overflow-hidden transform hover:-translate-y-2 ${category.popular ? 'bg-gradient-to-br from-lifecraft-500 to-lifecraft-600 text-white' : 'bg-white hover:bg-white shadow-lg'}`}>                                        {/* Animated background pattern */}                    <div className="absolute inset-0 opacity-10">                      <div className={`absolute top-0 right-0 w-32 h-32 ${category.popular ? 'bg-white' : 'bg-lifecraft-500'} rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>                      <div className={`absolute bottom-0 left-0 w-24 h-24 ${category.popular ? 'bg-white' : 'bg-lifecraft-accent-500'} rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700 delay-100`}></div>                    </div>                    {category.popular && (<div className="absolute top-0 right-0">                        <div className="bg-gradient-to-br from-lifecraft-accent-400 to-lifecraft-accent-600 text-white px-4 py-2 rounded-bl-xl font-bold text-sm flex items-center gap-2">                          <span className="animate-pulse">🔥</span>                          POPULAR                        </div>                      </div>)}                    <CardContent className="p-8 relative z-10 h-full flex flex-col">                      <div className="flex-grow">                        <div className={`w-16 h-16 rounded-2xl ${category.popular ? 'bg-white/20 backdrop-blur-sm' : category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>                          <category.icon className={`w-8 h-8 ${category.popular ? 'text-white' : ''}`} />                        </div>                        <h3 className={`text-2xl font-bold mb-4 ${category.popular ? 'text-white' : 'text-gray-900 group-hover:text-lifecraft-600'} transition-colors duration-300`}>                          {category.title}                        </h3>                        <p className={`${category.popular ? 'text-white/90' : 'text-gray-600'} mb-6 leading-relaxed text-lg`}>                          {category.description}                        </p>                      </div>                      {/* Enhanced stats section */}                      <div className="space-y-4">                        <div className={`grid grid-cols-2 gap-4 p-4 rounded-xl ${category.popular ? 'bg-white/10 backdrop-blur-sm' : 'bg-gray-50'}`}>                          <div className="text-center">                            <div className={`text-2xl font-bold ${category.popular ? 'text-white' : 'text-lifecraft-600'}`}>                              {category.tutorials}                            </div>                            <div className={`text-sm ${category.popular ? 'text-white/80' : 'text-gray-500'}`}>                              Tutorials                            </div>                          </div>                          <div className="text-center">                            <div className={`text-sm font-semibold ${category.popular ? 'text-white' : 'text-lifecraft-600'}`}>                              {category.difficulty.split(' to ')[0]}                            </div>                            <div className={`text-sm ${category.popular ? 'text-white/80' : 'text-gray-500'}`}>                              Level                            </div>                          </div>                        </div>                        <div className="flex items-center justify-between">                          <Badge className={`${category.popular ? 'bg-white/20 text-white border-white/30' : 'bg-lifecraft-100 text-lifecraft-700 border-lifecraft-200'} px-3 py-1`}>                            {category.tutorials} lessons                          </Badge>                          <div className={`w-10 h-10 rounded-full ${category.popular ? 'bg-white/20' : 'bg-lifecraft-100'} flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300`}>                            <ArrowRight className={`w-5 h-5 ${category.popular ? 'text-white' : 'text-lifecraft-600'}`} />                          </div>                        </div>                      </div>                    </CardContent>                  </Card>                </Link>              </motion.div>))}          </motion.div>          {/* Enhanced CTA at bottom of section */}          <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}          >            <p className="text-lg text-gray-600 mb-6">              Can't find what you're looking for?            </p>            <Button variant="outline" size="lg" className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-3 text-lg font-semibold"            >              Request a New Skill              <ArrowRight className="ml-2 w-5 h-5" />            </Button>          </motion.div>        </div>      </section>

      {/* Featured Skills */}      <section className="py-20 bg-gradient-to-br from-lifecraft-600 via-lifecraft-500 to-lifecraft-accent-600 relative overflow-hidden">        {/* Background decorative elements */}        <div className="absolute inset-0">          <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>          <div className="absolute bottom-20 left-10 w-56 h-56 bg-lifecraft-accent-400/20 rounded-full blur-3xl"></div>          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>        </div>                <div className="container mx-auto px-6 relative z-10">          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}          >            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">              ⭐ Featured Skills            </Badge>                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">              Master These Popular Skills            </h2>            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">              Join thousands of successful learners who transformed their lives with these proven skill courses            </p>          </motion.div>          <motion.div className="grid md:grid-cols-2 gap-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}          >            {featuredSkills.map((skill, index) => (<motion.div key={index} variants={fadeInUp}>                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group cursor-pointer transform hover:-translate-y-2 relative">                  {/* Glowing border effect */}                  <div className="absolute inset-0 bg-gradient-to-r from-lifecraft-400 to-lifecraft-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>                                    <div className="relative bg-white rounded-xl overflow-hidden">                    <div className="md:flex h-full">                      <div className="md:w-2/5 relative overflow-hidden">                        <img src={skill.image} alt={skill.title} className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500" />                        {/* Image overlay gradient */}                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>                                                {/* Floating rating badge */}                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">                          <Star className="w-4 h-4 fill-current text-yellow-400" />                          <span className="text-sm font-bold text-gray-900">{skill.rating}</span>                        </div>                      </div>                                            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">                        <div>                          <div className="flex items-center gap-2 mb-4">                            <Badge className="bg-lifecraft-100 text-lifecraft-700 border-lifecraft-200 text-xs px-3 py-1">                              {skill.category}                            </Badge>                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-3 py-1">                              {skill.difficulty}                            </Badge>                          </div>                          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors duration-300 leading-tight">                            {skill.title}                          </h3>                          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">                            {skill.description}                          </p>                          {/* Enhanced stats section */}                          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">                            <div className="text-center">                              <div className="flex items-center justify-center mb-1">                                <Clock className="w-4 h-4 text-lifecraft-500" />                              </div>                              <div className="text-xs text-gray-500 mb-1">Duration</div>                              <div className="text-sm font-semibold text-gray-900">{skill.duration}</div>                            </div>                            <div className="text-center">                              <div className="flex items-center justify-center mb-1">                                <Users className="w-4 h-4 text-lifecraft-500" />                              </div>                              <div className="text-xs text-gray-500 mb-1">Students</div>                              <div className="text-sm font-semibold text-gray-900">{skill.students.toLocaleString()}</div>                            </div>                            <div className="text-center">                              <div className="flex items-center justify-center mb-1">                                <Trophy className="w-4 h-4 text-lifecraft-500" />                              </div>                              <div className="text-xs text-gray-500 mb-1">Level</div>                              <div className="text-sm font-semibold text-gray-900">{skill.difficulty}</div>                            </div>                          </div>                        </div>                        <Button className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn">                          <span className="flex items-center">                            Start Learning                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />                          </span>                        </Button>                      </div>                    </div>                  </div>                </Card>              </motion.div>))}          </motion.div>          {/* Enhanced CTA at bottom */}          <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}          >            <p className="text-lg text-white/90 mb-6">              Ready to explore more skills and unlock your potential?            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">              <Button size="lg" className="bg-white text-lifecraft-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"              >                <BookOpen className="mr-2 w-5 h-5" />                Browse All Skills              </Button>              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-lifecraft-600 px-8 py-3 text-lg font-semibold"              >                <Users className="mr-2 w-5 h-5" />                Join Community              </Button>            </div>          </motion.div>        </div>      </section>

      {/* CTA Section */}      <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30 relative overflow-hidden">        <div className="absolute inset-0">          <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-to-r from-lifecraft-200/15 to-lifecraft-accent-200/15 rounded-full blur-3xl"></div>          <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-accent-200/10 to-mint-200/10 rounded-full blur-3xl"></div>        </div>                <div className="container mx-auto px-6 text-center relative z-10">          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}          >            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">              🎯 Start Your Journey            </Badge>                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent">              Ready to Transform Your Life?            </h2>            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">              Join thousands of learners who are mastering new skills every day and building the confidence to handle any challenge life throws their way.            </p>                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">              <Button size="lg" className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">                <TrendingUp className="mr-2 w-5 h-5" />                Start Learning Today              </Button>              <Button size="lg" variant="outline" className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">                <Users className="mr-2 w-5 h-5" />                Join Our Community              </Button>            </div>                        {/* Trust indicators */}            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">              <div className="text-center">                <div className="text-2xl font-bold text-lifecraft-600 mb-1">50K+</div>                <div className="text-sm text-gray-500">Happy Learners</div>              </div>              <div className="text-center">                <div className="text-2xl font-bold text-lifecraft-600 mb-1">200+</div>                <div className="text-sm text-gray-500">Skill Tutorials</div>              </div>              <div className="text-center">                <div className="text-2xl font-bold text-lifecraft-600 mb-1">4.8★</div>                <div className="text-sm text-gray-500">Average Rating</div>              </div>              <div className="text-center">                <div className="text-2xl font-bold text-lifecraft-600 mb-1">95%</div>                <div className="text-sm text-gray-500">Success Rate</div>              </div>            </div>          </motion.div>        </div>      </section>

      <Footer />
    </div>
  );
};

export default Skills;
