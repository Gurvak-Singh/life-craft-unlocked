import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/shared";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-mint-100/20 min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-r from-teal-200/40 to-mint-300/40 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute right-20 top-20 w-64 h-64 bg-gradient-to-r from-pink-200/40 to-rose-300/40 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 w-32 h-32 bg-gradient-to-r from-teal-300/30 to-cyan-300/30 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Floating badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-4 w-4 text-teal-500 mr-2" />
              <span className="text-sm font-medium text-teal-600">Practical skills for everyday life</span>
            </motion.div>

            {/* Main heading with enhanced typography */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="block text-gray-900 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Master Skills
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-mint-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Close Gaps
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-pink-500 via-rose-500 to-teal-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Unlock Potential
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-8 text-lg max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              LifeCraft empowers busy people with practical skills through clear, step-by-step tutorials.
              Learn to solve problems, save money, and gain confidence in everyday life.
            </motion.p>

            {/* Enhanced stats */}
            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-500" />
                <span className="text-sm text-gray-600">10,000+ learners</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-500" />
                <span className="text-sm text-gray-600">500+ tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-teal-500" />
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton
                  className="px-8 py-4 h-auto text-lg font-semibold rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  href="/skills"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </PrimaryButton>
              </motion.div>

              <motion.button
                className="flex items-center gap-2 px-6 py-4 text-lg font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="h-5 w-5 text-teal-500" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced hero image section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating glassmorphism cards */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Skills Mastered</p>
                  <p className="text-xs text-gray-600">+25 this month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Community</p>
                  <p className="text-xs text-gray-600">Join 10k+ learners</p>
                </div>
              </div>
            </motion.div>

            {/* Main hero image with enhanced styling */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border-8 border-white/50 shadow-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent z-10"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                alt="Person learning new skills"
                className="w-full h-full object-cover aspect-[4/3]"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-pink-500/10 z-10"></div>
            </motion.div>

            {/* Decorative background elements */}
            <motion.div
              className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Modern wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20 w-full"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-current text-white"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Hero;
