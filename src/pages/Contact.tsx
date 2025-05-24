import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    HelpCircle,
    Users
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Get in touch via email for general inquiries",
            contact: "hello@lifecraft.com",
            action: "mailto:hello@lifecraft.com"
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak with our support team directly",
            contact: "+1 (555) 123-4567",
            action: "tel:+15551234567"
        },
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Chat with us in real-time for quick help",
            contact: "Available 9 AM - 6 PM EST",
            action: "#"
        },
        {
            icon: HelpCircle,
            title: "Help Center",
            description: "Browse our comprehensive FAQ and guides",
            contact: "Self-service support",
            action: "/help"
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
                            📞 Contact Us
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            Get in Touch
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Have questions, feedback, or need support? We're here to help! Reach out to us through any of the methods below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white/80 backdrop-blur-sm border-t border-b border-lifecraft-100/50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {contactMethods.map((method, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <a
                                    href={method.action}
                                    className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-0 group transform hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-lifecraft-100 to-lifecraft-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-lifecraft-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <method.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-lifecraft-600 transition-colors leading-tight text-center">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-center mb-4">{method.description}</p>
                                    <p className="text-lifecraft-600 font-semibold text-center">{method.contact}</p>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
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
                            ✉️ Send us a Message
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-lifecraft-600 via-lifecraft-700 to-lifecraft-accent-600 bg-clip-text text-transparent leading-[1.1] pb-2">
                            We'd Love to Hear From You
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {isSubmitted ? (
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Send className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifecraft-500 focus:border-lifecraft-500 bg-white text-gray-900 placeholder-gray-500"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifecraft-500 focus:border-lifecraft-500 bg-white text-gray-900 placeholder-gray-500"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifecraft-500 focus:border-lifecraft-500 bg-white text-gray-900"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifecraft-500 focus:border-lifecraft-500 bg-white text-gray-900 placeholder-gray-500 resize-vertical"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Send className="mr-2 w-5 h-5" />
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Office Info */}
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
                            🏢 Visit Us
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] pb-2">
                            Our Office
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Address</h3>
                            <p className="text-white/90 leading-relaxed">
                                123 Learning Street<br />
                                Education District<br />
                                San Francisco, CA 94105
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                            <p className="text-white/90 leading-relaxed">
                                Monday - Friday<br />
                                9:00 AM - 6:00 PM PST<br />
                                Closed weekends
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                            <p className="text-white/90 leading-relaxed">
                                24/7 Online Support<br />
                                Live Chat Available<br />
                                Community Forums
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact; 