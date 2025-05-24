import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface AccordionFAQProps {
    faqs: FAQItem[];
    className?: string;
}

const AccordionFAQ: React.FC<AccordionFAQProps> = ({ faqs, className = "" }) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={`max-w-4xl mx-auto space-y-4 ${className}`}>
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {/* Question button */}
                        <motion.button
                            className="w-full p-6 text-left flex items-center justify-between group-hover:bg-teal-50/50 transition-colors duration-300"
                            onClick={() => toggleItem(faq.id)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <HelpCircle className="h-5 w-5 text-white" />
                                </motion.div>
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                                    {faq.question}
                                </h3>
                            </div>

                            <motion.div
                                animate={{
                                    rotate: openItems.has(faq.id) ? 180 : 0,
                                    scale: openItems.has(faq.id) ? 1.1 : 1
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex-shrink-0"
                            >
                                <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-teal-500 transition-colors duration-300" />
                            </motion.div>
                        </motion.button>

                        {/* Answer content */}
                        <AnimatePresence>
                            {openItems.has(faq.id) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        height: { duration: 0.3, ease: "easeInOut" },
                                        opacity: { duration: 0.2, delay: 0.1 }
                                    }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        className="px-6 pb-6"
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="pl-14">
                                            <div className="h-px bg-gradient-to-r from-teal-200 to-transparent mb-4 opacity-50" />
                                            <p className="text-gray-700 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Decorative glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </motion.div>
            ))}
        </div>
    );
};

export default AccordionFAQ; 