
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, Logo } from "@/components/ui/shared";
import { useThemeColors } from "@/lib/theme-utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const themeColors = useThemeColors();

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

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-sm' 
        : isHomePage 
          ? 'bg-cream-50' 
          : 'bg-white'
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
            className={`text-gray-700 ${themeColors.hoverBgColor}`}
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
          <NavLink to="/" label="Home" active={location.pathname === '/'} themeColors={themeColors} />
          <NavLink to="/skills" label="Skills" active={location.pathname === '/skills' || location.pathname.startsWith('/skills/')} themeColors={themeColors} />
          <NavLink to="/community" label="Community" active={location.pathname === '/community'} themeColors={themeColors} />
          <NavLink to="/tracks" label="Learning Tracks" active={location.pathname === '/tracks'} themeColors={themeColors} />
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className={`text-gray-700 ${themeColors.hoverBgColor}`}>
            <Search className="h-5 w-5" />
          </Button>
          <PrimaryButton 
            className={`rounded-full transition-transform hover:scale-105 ${
              location.pathname === '/' 
                ? 'bg-pink-500 hover:bg-rose-600' 
                : location.pathname.startsWith('/skills/') 
                  ? themeColors.accentColor 
                  : ''
            }`}
          >
            <User className="mr-2 h-4 w-4" />
            Sign In
          </PrimaryButton>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-2 p-6">
            <MobileNavLink to="/" label="Home" themeColors={themeColors} />
            <MobileNavLink to="/skills" label="Skills" themeColors={themeColors} />
            <MobileNavLink to="/community" label="Community" themeColors={themeColors} />
            <MobileNavLink to="/tracks" label="Learning Tracks" themeColors={themeColors} />
            
            <div className="mt-6">
              <PrimaryButton 
                className={`w-full rounded-full flex justify-center ${
                  location.pathname === '/' 
                    ? 'bg-pink-500 hover:bg-rose-600' 
                    : location.pathname.startsWith('/skills/') 
                      ? themeColors.accentColor 
                      : ''
                }`}
              >
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
const NavLink = ({ to, label, active, themeColors }: { 
  to: string; 
  label: string; 
  active: boolean;
  themeColors: any;
}) => (
  <Link 
    to={to} 
    className={`relative font-medium transition-colors hover:${themeColors.textColor} 
      ${active ? `${themeColors.textColor} font-semibold` : 'text-gray-700'}`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, themeColors }: { 
  to: string; 
  label: string;
  themeColors: any;
}) => (
  <Link to={to} className={`flex items-center py-3 px-4 text-lg font-medium ${themeColors.hoverBgColor} rounded-lg transition-colors hover:${themeColors.textColor}`}>
    {label}
  </Link>
);

export default Navbar;
