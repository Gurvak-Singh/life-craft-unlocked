
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface SkillPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  bgColor?: string;
  iconColor?: string;
  borderColor?: string;
  accentColor?: string;
}

const SkillPageLayout = ({ 
  title, 
  description, 
  children, 
  bgColor = "from-pink-500 to-rose-600",
  iconColor = "bg-pink-100 text-rose-600",
  borderColor = "border-t-pink-500",
  accentColor = "bg-pink-500 hover:bg-rose-600"
}: SkillPageLayoutProps) => {
  // Extract color for button hover state
  const hoverBgColor = `hover:bg-${bgColor.split('-')[1]}-50`;

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with blob shapes */}
        <section className={`relative bg-gradient-to-r ${bgColor} py-16 overflow-hidden`}>
          {/* Decorative blobs */}
          <div className="absolute left-0 bottom-0 w-32 h-32 rounded-full bg-pink-200 opacity-20 transform translate-y-1/2 -translate-x-1/4"></div>
          <div className="absolute right-10 top-10 w-20 h-20 rounded-full bg-rose-300 opacity-20"></div>
          
          <div className="container relative z-10">
            <div className="flex items-center mb-6">
              <Link to="/skills">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Skills
                </Button>
              </Link>
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
              <p className="text-white/90 text-lg">
                {description}
              </p>
            </div>
          </div>
        </section>
        
        {children}
      </main>
      <Footer />
      
      {/* Decorative shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block h-16 w-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-current text-cream-50 opacity-25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-current text-cream-50 opacity-10"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SkillPageLayout;
