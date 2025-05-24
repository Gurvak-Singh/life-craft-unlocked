import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  CheckCircle,
  Play,
  Star,
  TrendingUp,
  Target,
  Heart,
  Zap,
  Shield,
  Home,
  Car,
  Calculator,
  Monitor,
  Utensils,
  Wrench,
  PlayCircle,
  Award,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
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

  const skillCategories = [
    {
      icon: Home,
      title: "Home Repair",
      description: "Fix, maintain, and improve your living space with confidence",
      tutorials: 24,
      color: "bg-gradient-to-r from-lifecraft-100 to-lifecraft-50",
      iconColor: "text-lifecraft-700",
      borderColor: "border-lifecraft-200",
      path: "/skills/home-repair",
      popular: true
    },
    {
      icon: Car,
      title: "Car Maintenance",
      description: "Keep your vehicle running smoothly and save on repair costs",
      tutorials: 18,
      color: "bg-gradient-to-r from-lifecraft-accent-100 to-lifecraft-accent-50",
      iconColor: "text-lifecraft-accent-700",
      borderColor: "border-lifecraft-accent-200",
      path: "/skills/car-maintenance",
      popular: false
    },
    {
      icon: Calculator,
      title: "Personal Finance",
      description: "Master budgeting, investing, and financial planning",
      tutorials: 32,
      color: "bg-gradient-to-r from-mint-100 to-mint-50",
      iconColor: "text-mint-700",
      borderColor: "border-mint-200",
      path: "/skills/budgeting",
      popular: true
    },
    {
      icon: Monitor,
      title: "Digital Skills",
      description: "Navigate technology and digital tools with confidence",
      tutorials: 28,
      color: "bg-gradient-to-r from-blue-100 to-blue-50",
      iconColor: "text-blue-700",
      borderColor: "border-blue-200",
      path: "/skills/digital",
      popular: false
    },
    {
      icon: Utensils,
      title: "Cooking Basics",
      description: "Prepare delicious, healthy meals and master kitchen skills",
      tutorials: 22,
      color: "bg-gradient-to-r from-orange-100 to-orange-50",
      iconColor: "text-orange-700",
      borderColor: "border-orange-200",
      path: "/skills/cooking",
      popular: true
    },
    {
      icon: Wrench,
      title: "DIY Projects",
      description: "Build, create, and craft with your own hands",
      tutorials: 16,
      color: "bg-gradient-to-r from-purple-100 to-purple-50",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
      path: "/skills/diy",
      popular: false
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Tutorials",
      description: "Learn from professionals with step-by-step video guides and detailed instructions that make complex skills simple.",
      color: "bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 text-lifecraft-600"
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with fellow learners, share progress, get encouragement, and find help when you need it most.",
      color: "bg-gradient-to-r from-lifecraft-accent-100 to-lifecraft-accent-50 text-lifecraft-accent-600"
    },
    {
      icon: Trophy,
      title: "Track Your Progress",
      description: "Earn badges, complete skill tracks, celebrate milestones, and see your improvement over time.",
      color: "bg-gradient-to-r from-mint-100 to-mint-50 text-mint-600"
    },
    {
      icon: Target,
      title: "Practical Skills",
      description: "Focus on real-world skills that save money, build confidence, and make a difference in daily life.",
      color: "bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Learners", icon: Users },
    { number: "200+", label: "Expert Tutorials", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "30+", label: "Skill Categories", icon: Target }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "First-time Homeowner",
      content: "LifeCraft taught me how to fix my leaky pipes and install shelves. I've saved over $2,000 in the first year and feel so much more confident!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "College Student",
      content: "The budgeting tutorials completely changed my financial life. I'm now debt-free, building an emergency fund, and actually saving money each month.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Working Professional",
      content: "I never thought I could change my car's oil myself. The step-by-step videos made it so easy to follow - now I handle most basic maintenance!",
      avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cream-50 via-white to-lifecraft-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-lifecraft-200/20 to-lifecraft-accent-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-lifecraft-accent-200/15 to-mint-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/10 to-purple-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
              🎯 Master Essential Life Skills
            </Badge>

            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] pb-2">
              <span className="bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent">
                Unlock Your
              </span>
              <br />
              <span className="text-gray-900">Potential</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Learn practical skills that matter. From home repairs to personal finance,
              master the essentials with expert guidance and join thousands who've transformed their lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="mr-2 w-5 h-5" />
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-lifecraft-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-lifecraft-500" />
                <span>Expert instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-lifecraft-500" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-lifecraft-500" />
                <span>Money-back guarantee</span>
              </div>
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

      {/* Skills Categories */}
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
              🎯 Skill Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select from our comprehensive skill categories and start building expertise
              that makes a real difference in your daily life.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={category.path}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white group cursor-pointer transform hover:-translate-y-2 shadow-lg relative">
                    {category.popular && (
                      <div className="absolute top-0 right-0 z-10">
                        <div className="bg-gradient-to-br from-lifecraft-accent-400 to-lifecraft-accent-600 text-white px-3 py-1 rounded-bl-xl font-bold text-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          POPULAR
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-lifecraft-600 transition-colors leading-tight">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-gray-50 text-xs px-3 py-1">
                          {category.tutorials} tutorials
                        </Badge>
                        <ArrowRight className="w-5 h-5 text-lifecraft-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/skills">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-lifecraft-500 text-lifecraft-600 hover:bg-lifecraft-500 hover:text-white px-8 py-3 text-lg font-semibold"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Explore All Skills
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              ⭐ Why Choose LifeCraft?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
              Built for Your Success
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We've designed the perfect learning experience to help you master essential life skills
              with confidence and support every step of the way.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-0 bg-white h-full p-8 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2">
                  <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              💬 Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands who've transformed their lives with practical skills and newfound confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-lifecraft-100"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lifecraft-600 via-lifecraft-500 to-lifecraft-accent-600 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-56 h-56 bg-lifecraft-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
              🚀 Ready to Start?
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
              Transform Your Life Today
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Join our community of learners and start mastering the skills that matter most.
              Your journey to self-reliance and confidence begins right here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-white text-lifecraft-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="mr-2 w-5 h-5" />
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/skills">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Explore Skills
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <motion.div
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2 leading-none">50K+</div>
                <div className="text-sm text-white/80 font-medium">Happy Learners</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2 leading-none">24/7</div>
                <div className="text-sm text-white/80 font-medium">Support Available</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2 leading-none">95%</div>
                <div className="text-sm text-white/80 font-medium">Success Rate</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2 leading-none">100%</div>
                <div className="text-sm text-white/80 font-medium">Money Back</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
