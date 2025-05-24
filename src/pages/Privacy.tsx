import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, FileText, Clock } from "lucide-react";

const Privacy = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const sections = [
        {
            title: "Information We Collect",
            icon: FileText,
            content: [
                "Personal information you provide when creating an account (name, email, profile information)",
                "Learning progress and activity data to personalize your experience",
                "Communication preferences and feedback you share with us",
                "Technical information like IP address, browser type, and device information",
                "Cookies and similar technologies to improve site functionality"
            ]
        },
        {
            title: "How We Use Your Information",
            icon: Users,
            content: [
                "Provide and improve our educational services and platform",
                "Personalize your learning experience and recommend relevant content",
                "Communicate with you about your account, updates, and new features",
                "Analyze usage patterns to enhance our platform and create better content",
                "Ensure platform security and prevent fraud or abuse"
            ]
        },
        {
            title: "Information Sharing",
            icon: Eye,
            content: [
                "We do not sell, rent, or trade your personal information to third parties",
                "We may share anonymized, aggregated data for research and improvement purposes",
                "Service providers who help us operate our platform (with strict confidentiality agreements)",
                "Legal authorities when required by law or to protect our rights and users",
                "In case of business transfer, with appropriate notice and protection measures"
            ]
        },
        {
            title: "Data Security",
            icon: Lock,
            content: [
                "Industry-standard encryption for data transmission and storage",
                "Regular security audits and vulnerability assessments",
                "Access controls and authentication measures for our systems",
                "Employee training on data protection and privacy best practices",
                "Incident response procedures for any potential security breaches"
            ]
        },
        {
            title: "Your Rights",
            icon: Shield,
            content: [
                "Access and review your personal information at any time",
                "Update or correct your account information and preferences",
                "Request deletion of your account and associated data",
                "Opt-out of marketing communications while keeping your account active",
                "Data portability - request a copy of your data in a standard format"
            ]
        },
        {
            title: "Data Retention",
            icon: Clock,
            content: [
                "Account information is retained while your account is active",
                "Learning progress data is kept to maintain your educational history",
                "Communication records are retained for customer service purposes",
                "Technical logs are automatically deleted after 12 months",
                "Deleted accounts are permanently removed within 30 days of deletion request"
            ]
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
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="mb-6 bg-gradient-to-r from-lifecraft-500 to-lifecraft-accent-500 text-white border-0 px-4 py-2">
                            🔒 Privacy Policy
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            Your Privacy Matters
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            We're committed to protecting your privacy and being transparent about how we collect, use, and protect your information.
                        </p>

                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-lifecraft-100/50 max-w-2xl mx-auto">
                            <p className="text-sm text-gray-600">
                                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Privacy Sections */}
            <section className="py-20 bg-gradient-to-br from-cream-50 via-lifecraft-50/20 to-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lifecraft-200/30 to-lifecraft-accent-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-lifecraft-accent-200/30 to-mint-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <section.icon className="w-8 h-8 text-lifecraft-600" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                            {section.title}
                                        </h2>
                                        <ul className="space-y-4">
                                            {section.content.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-lifecraft-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700 leading-relaxed">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gradient-to-br from-lifecraft-600 via-lifecraft-500 to-lifecraft-accent-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-56 h-56 bg-lifecraft-accent-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
                            📧 Questions?
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
                            We're Here to Help
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            If you have any questions about this Privacy Policy or how we handle your data,
                            please don't hesitate to reach out to our privacy team.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4">Privacy Officer</h3>
                                <p className="text-white/90 mb-2">privacy@lifecraft.com</p>
                                <p className="text-white/80 text-sm">Response within 48 hours</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
                                <p className="text-white/90 mb-2">dpo@lifecraft.com</p>
                                <p className="text-white/80 text-sm">For data rights requests</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacy; 