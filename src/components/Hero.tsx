import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/shared";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block text-gray-900">Increase Skills</span>
              <span className="block text-red-500">Close Knowledge Gaps</span>
              <span className="block text-gray-900">Grow Your Potential</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              LifeCraft is created for busy people who want to develop life skills. We 
              provide practical tutorials and guides that help you solve common problems, 
              save money, and gain confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton 
                className="px-8 py-6 h-auto text-lg"
                href="/skills"
              >
                Get Started
              </PrimaryButton>
            </div>
          </div>
          <div className="relative">
            <div className="bg-red-500/10 absolute inset-0 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 overflow-hidden rounded-lg border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww" 
                alt="Person learning new skills"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
