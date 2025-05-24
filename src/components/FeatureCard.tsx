import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon: Icon,
    delay = 0,
    className = ""
}) => {
    return (
        <motion.div
            className={`group relative overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
        >
            {/* Card background with glassmorphism */}
            <div className="relative h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300">

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-mint-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon container */}
                <motion.div
                    className="relative mb-6 w-16 h-16 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="relative text-center">
                    <motion.h3
                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.2 }}
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.3 }}
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
        </motion.div>
    );
};

export default FeatureCard; 