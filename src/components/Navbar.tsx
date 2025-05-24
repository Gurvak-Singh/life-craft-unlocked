import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled || !isHomePage
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-md'
        }`}>
        <div className="container mx-auto px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent">
                LifeCraft
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:bg-lifecraft-50 hover:text-lifecraft-700 relative z-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" label="Home" active={location.pathname === '/'} />
            <NavLink to="/skills" label="Skills" active={location.pathname === '/skills' || location.pathname.startsWith('/skills/')} />
            <NavLink to="/community" label="Community" active={location.pathname === '/community'} />
            <NavLink to="/tracks" label="Learning Tracks" active={location.pathname === '/tracks'} />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:bg-lifecraft-50 hover:text-lifecraft-700 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white rounded-full px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          {/* Full screen overlay */}
          <div className="min-h-screen bg-white">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/skills" label="Skills" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/community" label="Community" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink to="/tracks" label="Learning Tracks" onClick={() => setIsMenuOpen(false)} />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button
                  className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>

                <div className="mt-4 flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:bg-lifecraft-50 hover:text-lifecraft-700 rounded-full"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

// Helper components for navigation links
const NavLink = ({ to, label, active }: {
  to: string;
  label: string;
  active: boolean;
}) => (
  <Link
    to={to}
    className={`relative font-medium transition-all duration-300 hover:text-lifecraft-600 group
      ${active ? 'text-lifecraft-600 font-semibold' : 'text-gray-700'}`}
  >
    {label}
    <span className={`absolute bottom-[-8px] left-0 h-[2px] bg-lifecraft-500 rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: {
  to: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center py-4 px-4 text-lg font-medium hover:bg-lifecraft-50 rounded-lg transition-all duration-300 hover:text-lifecraft-700 text-gray-700 border-b border-gray-100 last:border-b-0"
  >
    {label}
  </Link>
);

export default Navbar;
