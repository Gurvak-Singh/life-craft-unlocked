import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-lifecraft-600 to-lifecraft-accent-600 bg-clip-text text-transparent">
                LifeCraft
              </span>
            </div>
            <p className="text-gray-600 text-base mb-6 max-w-md leading-relaxed">
              Empowering you with practical life skills through expert-led tutorials,
              supportive community, and personalized learning paths.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/lifecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-lifecraft-100 rounded-full flex items-center justify-center text-gray-400 hover:text-lifecraft-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/lifecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-lifecraft-100 rounded-full flex items-center justify-center text-gray-400 hover:text-lifecraft-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/lifecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-lifecraft-100 rounded-full flex items-center justify-center text-gray-400 hover:text-lifecraft-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/lifecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-lifecraft-100 rounded-full flex items-center justify-center text-gray-400 hover:text-lifecraft-600 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/lifecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-lifecraft-100 rounded-full flex items-center justify-center text-gray-400 hover:text-lifecraft-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-lifecraft-600 transition-colors duration-300 text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-lifecraft-600 transition-colors duration-300 text-sm font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-lifecraft-600 transition-colors duration-300 text-sm font-medium"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-lifecraft-600 transition-colors duration-300 text-sm font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-600 hover:text-lifecraft-600 transition-colors duration-300 text-sm font-medium"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <NewsletterSubscribe />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} LifeCraft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-lifecraft-600 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-lifecraft-600 transition-colors duration-300 font-medium"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-500 hover:text-lifecraft-600 transition-colors duration-300 font-medium"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-sm text-gray-500 hover:text-lifecraft-600 transition-colors duration-300 font-medium"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
