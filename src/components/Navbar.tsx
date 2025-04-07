import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, Logo } from "@/components/ui/shared";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size="lg" />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-teal-500 transition-colors">Home</Link>
          <Link to="/skills" className="font-medium hover:text-teal-500 transition-colors">Skills</Link>
          <Link to="/community" className="font-medium hover:text-teal-500 transition-colors">Community</Link>
          <Link to="/tracks" className="font-medium hover:text-teal-500 transition-colors">Learning Tracks</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <PrimaryButton>
            <User className="mr-2 h-4 w-4" />
            Sign In
          </PrimaryButton>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-6 p-6">
            <Link to="/" className="flex items-center justify-between py-3 font-medium hover:text-teal-500 transition-colors border-b">
              Home
            </Link>
            <Link to="/skills" className="flex items-center justify-between py-3 font-medium hover:text-teal-500 transition-colors border-b">
              Skills
            </Link>
            <Link to="/community" className="flex items-center justify-between py-3 font-medium hover:text-teal-500 transition-colors border-b">
              Community
            </Link>
            <Link to="/tracks" className="flex items-center justify-between py-3 font-medium hover:text-teal-500 transition-colors border-b">
              Learning Tracks
            </Link>
            <div className="mt-6">
              <PrimaryButton className="w-full">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </PrimaryButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
