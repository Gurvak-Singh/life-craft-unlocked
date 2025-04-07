
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-lifecraft-50 to-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lifecraft-700 to-lifecraft-500">
            Master Practical Life Skills
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your companion for learning essential real-world skills through step-by-step tutorials,
            community advice, and personalized learning paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg focus:ring-lifecraft-500 focus:border-lifecraft-500"
                placeholder="What do you want to learn today?"
              />
            </div>
            <Button className="px-8 py-4 h-auto bg-lifecraft-500 hover:bg-lifecraft-600 text-white">
              Explore Skills
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-gray-500">Popular:</span>
            <Button variant="link" className="p-0 h-auto text-lifecraft-600">Fix a leaky faucet</Button>
            <Button variant="link" className="p-0 h-auto text-lifecraft-600">Budget planning</Button>
            <Button variant="link" className="p-0 h-auto text-lifecraft-600">Change a tire</Button>
            <Button variant="link" className="p-0 h-auto text-lifecraft-600">Cook pasta</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-lifecraft-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-lifecraft-accent-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </div>
  );
};

export default Hero;
