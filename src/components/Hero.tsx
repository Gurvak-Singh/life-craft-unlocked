
import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/shared";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-teal-50">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-teal-500/5 rounded-bl-[200px] -z-10"></div>
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4 shadow-sm">
              Practical skills for everyday life
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Increase Skills</span>
              <span className="block text-teal-500">Close Knowledge Gaps</span>
              <span className="block bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Grow Your Potential</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              LifeCraft is created for busy people who want to develop practical life skills. We 
              provide step-by-step tutorials that help you solve common problems, 
              save money, and gain confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton 
                className="px-8 py-6 h-auto text-lg group"
                href="/skills"
              >
                Get Started
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </PrimaryButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/10 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 overflow-hidden rounded-lg border-8 border-white shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww" 
                alt="Person learning new skills"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
