
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, Logo } from "@/components/ui/shared";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur transition-all duration-300 ${
      isScrolled ? 'bg-background/95 shadow-sm' : 'bg-background/70'
    }`}>
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
            className="text-gray-700 hover:bg-teal-50"
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
          <NavLink to="/" label="Home" active={location.pathname === '/'} />
          <NavLink to="/skills" label="Skills" active={location.pathname === '/skills'} />
          <NavLink to="/community" label="Community" active={location.pathname === '/community'} />
          <NavLink to="/tracks" label="Learning Tracks" active={location.pathname === '/tracks'} />
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-teal-50">
            <Search className="h-5 w-5" />
          </Button>
          <PrimaryButton className="transition-transform hover:scale-105">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </PrimaryButton>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-2 p-6">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/skills" label="Skills" />
            <MobileNavLink to="/community" label="Community" />
            <MobileNavLink to="/tracks" label="Learning Tracks" />
            
            <div className="mt-6">
              <PrimaryButton className="w-full flex justify-center">
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

// Helper components for navigation links
const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors hover:text-teal-500 
      ${active ? 'text-teal-500 after:absolute after:bottom-[-18px] after:left-0 after:h-0.5 after:w-full after:bg-teal-500' : 'text-gray-700'}`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="flex items-center py-3 px-4 text-lg font-medium hover:bg-teal-50 rounded-lg transition-colors hover:text-teal-500">
    {label}
  </Link>
);

export default Navbar;
