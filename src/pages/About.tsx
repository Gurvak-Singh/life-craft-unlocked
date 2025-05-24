import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
    Target,
    Users,
    Heart,
    Zap,
    Award,
    BookOpen,
    TrendingUp,
    Shield
} from "lucide-react";

const About = () => {
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

    const values = [
        {
            icon: Target,
            title: "Practical Focus",
            description: "We believe in teaching skills that have immediate, real-world applications that improve your daily life."
        },
        {
            icon: Users,
            title: "Community First",
            description: "Learning is better together. We foster a supportive environment where everyone can grow and succeed."
        },
        {
            icon: Heart,
            title: "Accessibility",
            description: "Quality education should be accessible to everyone, regardless of background or experience level."
        },
        {
            icon: Zap,
            title: "Continuous Innovation",
            description: "We constantly evolve our platform and content to provide the most effective learning experience."
        }
    ];

    const stats = [
        { number: "50K+", label: "Happy Learners", icon: Users },
        { number: "200+", label: "Expert Tutorials", icon: BookOpen },
        { number: "95%", label: "Success Rate", icon: TrendingUp },
        { number: "5 Years", label: "Experience", icon: Award }
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
                            🌟 About LifeCraft
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            Empowering Lives Through Practical Skills
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            We're on a mission to help people become more self-reliant, confident, and capable by teaching essential life skills that matter.
                        </p>
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

            {/* Mission Section */}
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
                            🎯 Our Mission
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            Building Confident, Capable People
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            In today's world, many people feel disconnected from essential life skills. We bridge that gap by providing
                            expert-led tutorials, supportive community, and practical knowledge that empowers independence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-0 group transform hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-lifecraft-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <value.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors leading-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gradient-to-br from-lifecraft-600 via-lifecraft-500 to-lifecraft-accent-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-56 h-56 bg-lifecraft-accent-400/20 rounded-full blur-3xl"></div>
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
                            📖 Our Story
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
                            From Frustration to Solution
                        </h2>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                LifeCraft was born from a simple observation: too many people felt helpless when faced with everyday challenges.
                                Whether it was a leaky faucet, a budget crisis, or a simple cooking disaster, we noticed that essential life
                                skills weren't being passed down like they used to be.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our founders, Sarah and Marcus, experienced this firsthand. As new homeowners and young professionals, they
                                found themselves constantly calling experts for problems they felt they should be able to handle themselves.
                                This frustration led to a revelation: what if there was a place where anyone could learn these essential
                                skills from real experts?
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Today, LifeCraft has grown into a thriving community of learners and experts, all united by the belief that
                                everyone deserves to feel confident and capable in their daily life. We're proud to have helped thousands
                                of people gain the skills and confidence they need to tackle life's challenges head-on.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About; 