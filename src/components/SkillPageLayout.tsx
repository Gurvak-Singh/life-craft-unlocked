
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
  bgColor = "from-teal-500 to-teal-600",
  iconColor = "bg-teal-100 text-teal-600",
  borderColor = "border-t-teal-500",
  accentColor = "bg-teal-500 hover:bg-teal-600"
}: SkillPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${bgColor} py-16`}>
          <div className="container">
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
    </div>
  );
};

export default SkillPageLayout;
