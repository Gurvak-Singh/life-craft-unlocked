import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react";

const Terms = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            icon: FileText,
            content: [
                "By accessing and using LifeCraft, you accept and agree to be bound by these Terms of Service",
                "If you do not agree to these terms, please do not use our platform",
                "We may update these terms from time to time, and continued use constitutes acceptance",
                "You must be at least 13 years old to use our services",
                "If you are under 18, you must have parental consent to use our platform"
            ]
        },
        {
            title: "User Accounts and Responsibilities",
            icon: Users,
            content: [
                "You are responsible for maintaining the confidentiality of your account credentials",
                "You must provide accurate and complete information when creating your account",
                "You are responsible for all activities that occur under your account",
                "You must notify us immediately of any unauthorized use of your account",
                "You may not share your account with others or create multiple accounts"
            ]
        },
        {
            title: "Acceptable Use Policy",
            icon: Shield,
            content: [
                "Use our platform only for lawful purposes and in accordance with these terms",
                "Do not upload, share, or distribute harmful, offensive, or inappropriate content",
                "Respect the intellectual property rights of others and LifeCraft",
                "Do not attempt to hack, disrupt, or compromise our platform's security",
                "Do not use our services to spam, harass, or harm other users"
            ]
        },
        {
            title: "Content and Intellectual Property",
            icon: Scale,
            content: [
                "LifeCraft owns all rights to the platform, content, and educational materials",
                "You retain ownership of content you create and share on our platform",
                "By sharing content, you grant us a license to use it for platform operations",
                "You may not reproduce, distribute, or sell our educational content without permission",
                "We respect intellectual property rights and respond to valid DMCA notices"
            ]
        },
        {
            title: "Disclaimers and Limitations",
            icon: AlertTriangle,
            content: [
                "Our educational content is for informational purposes and not professional advice",
                "We do not guarantee specific outcomes from using our platform or content",
                "You use our services at your own risk and discretion",
                "We are not liable for any damages arising from your use of our platform",
                "Our liability is limited to the maximum extent permitted by law"
            ]
        },
        {
            title: "Termination and Enforcement",
            icon: Gavel,
            content: [
                "We may suspend or terminate your account for violations of these terms",
                "You may delete your account at any time through your account settings",
                "Upon termination, your access to our services will cease immediately",
                "These terms are governed by the laws of California, United States",
                "Any disputes will be resolved through binding arbitration"
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
                            📋 Terms of Service
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            Terms of Service
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            These terms govern your use of LifeCraft and outline the rights and responsibilities of all users.
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

            {/* Terms Sections */}
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
                            ⚖️ Legal Questions?
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
                            Need Clarification?
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            If you have questions about these Terms of Service or need legal clarification,
                            our legal team is here to help.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4">Legal Team</h3>
                                <p className="text-white/90 mb-2">legal@lifecraft.com</p>
                                <p className="text-white/80 text-sm">Terms and compliance questions</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4">General Support</h3>
                                <p className="text-white/90 mb-2">support@lifecraft.com</p>
                                <p className="text-white/80 text-sm">Account and platform questions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms; 