import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
            }
        });
    };

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Main carousel container */}
            <div className="relative h-80 overflow-hidden rounded-3xl">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                        <div className="h-full bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
                            <div className="flex flex-col h-full justify-between">
                                {/* Quote icon */}
                                <div className="flex justify-center mb-6">
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 15 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Quote className="h-8 w-8 text-white" />
                                    </motion.div>
                                </div>

                                {/* Testimonial content */}
                                <div className="text-center flex-grow flex flex-col justify-center">
                                    <motion.p
                                        className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        "{testimonials[currentIndex].content}"
                                    </motion.p>

                                    {/* Rating stars */}
                                    <motion.div
                                        className="flex justify-center mb-4"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                <Star
                                                    className={`h-5 w-5 mx-0.5 ${i < testimonials[currentIndex].rating
                                                            ? 'text-teal-400 fill-teal-400'
                                                            : 'text-gray-300'
                                                        }`}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* User info */}
                                <motion.div
                                    className="flex items-center justify-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    />
                                    <div className="text-left">
                                        <h3 className="font-bold text-lg text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-500 transition-colors"
                    onClick={() => paginate(-1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="h-6 w-6" />
                </motion.button>

                <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-500 transition-colors"
                    onClick={() => paginate(1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="h-6 w-6" />
                </motion.button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-teal-500 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl -z-10" />
        </div>
    );
};

export default TestimonialCarousel; 