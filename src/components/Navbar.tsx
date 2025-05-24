import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const scrollPositionRef = useRef(0);

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

  // Ultra-comprehensive scroll prevention for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;

      // Apply multiple layers of scroll prevention
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.height = '100vh';
      document.documentElement.style.width = '100%';

      // Add classes to both body and html for CSS targeting
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');

      // Prevent all scroll-related events
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      const preventWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      const preventKeyScroll = (e: KeyboardEvent) => {
        const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, end, home, arrows
        if (scrollKeys.includes(e.keyCode)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // Add event listeners with high priority
      document.addEventListener('touchmove', preventTouchMove, { passive: false, capture: true });
      document.addEventListener('touchstart', preventScroll, { passive: false, capture: true });
      document.addEventListener('wheel', preventWheel, { passive: false, capture: true });
      document.addEventListener('scroll', preventScroll, { passive: false, capture: true });
      document.addEventListener('keydown', preventKeyScroll, { passive: false, capture: true });
      window.addEventListener('scroll', preventScroll, { passive: false, capture: true });

      return () => {
        // Remove classes
        document.body.classList.remove('menu-open');
        document.documentElement.classList.remove('menu-open');

        // Restore all styles
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.position = '';
        document.documentElement.style.height = '';
        document.documentElement.style.width = '';

        // Remove all event listeners
        document.removeEventListener('touchmove', preventTouchMove, { capture: true } as any);
        document.removeEventListener('touchstart', preventScroll, { capture: true } as any);
        document.removeEventListener('wheel', preventWheel, { capture: true } as any);
        document.removeEventListener('scroll', preventScroll, { capture: true } as any);
        document.removeEventListener('keydown', preventKeyScroll, { capture: true } as any);
        window.removeEventListener('scroll', preventScroll, { capture: true } as any);

        // Restore scroll position
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [isMenuOpen]);

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/60'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
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

      {/* Mobile menu overlay - Completely locked */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-0 z-40 bg-white md:hidden"
          style={{
            touchAction: 'none',
            overscrollBehavior: 'none',
            WebkitOverflowScrolling: 'auto',
            height: '100vh',
            overflow: 'hidden'
          }}
          onTouchMove={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
          onScroll={(e) => e.preventDefault()}
        >
          {/* Header spacing to account for sticky header */}
          <div className="h-16 bg-white flex-shrink-0"></div>

          {/* Fixed height container with absolute positioning */}
          <div
            className="absolute top-16 left-0 right-0 bottom-0 bg-white flex flex-col"
            style={{
              height: 'calc(100vh - 4rem)',
              overflow: 'hidden',
              touchAction: 'none'
            }}
          >
            <div className="flex-1 px-6 py-6 flex flex-col justify-between h-full overflow-hidden">
              {/* Navigation items */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/skills" label="Skills" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/community" label="Community" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/tracks" label="Learning Tracks" onClick={() => setIsMenuOpen(false)} />
              </div>

              {/* Bottom section with sign in and search */}
              <div className="pt-6 border-t border-gray-200 flex-shrink-0">
                <Button
                  className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 hover:bg-lifecraft-50 hover:text-lifecraft-700 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
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
    className="flex items-center py-4 px-4 text-lg font-medium hover:bg-lifecraft-50 rounded-lg transition-all duration-300 hover:text-lifecraft-700 text-gray-700 border-b border-gray-100 last:border-b-0 flex-shrink-0"
  >
    {label}
  </Link>
);

export default Navbar;
