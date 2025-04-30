
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cream-50">
      {/* Decorative blobs */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-pink-200 rounded-full opacity-20"></div>
      <div className="absolute right-20 top-20 w-32 h-32 bg-rose-300 rounded-full opacity-20"></div>
      <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-pink-400 rounded-full opacity-10"></div>
      
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium mb-4 shadow-sm">
              Practical skills for everyday life
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Increase Skills</span>
              <span className="block text-pink-500">Close Knowledge Gaps</span>
              <span className="block bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">Grow Your Potential</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              LifeCraft is created for busy people who want to develop practical life skills. We 
              provide step-by-step tutorials that help you solve common problems, 
              save money, and gain confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton 
                className="px-8 py-6 h-auto text-lg group bg-pink-500 hover:bg-rose-600 rounded-full"
                href="/skills"
              >
                Get Started
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </PrimaryButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-200 rounded-full opacity-30"></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg transform translate-x-4 translate-y-4 opacity-30"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl border-8 border-white shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww" 
                alt="Person learning new skills"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block h-16 w-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-current text-white opacity-25"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
